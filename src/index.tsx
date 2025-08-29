import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { z } from 'zod'

// Types for Cloudflare bindings
type Bindings = {
  DB: D1Database
  KV: KVNamespace
  OPENAI_API_KEY: string
  JWT_SECRET: string
}

const app = new Hono<{ Bindings: Bindings }>()

// Global CORS and middleware
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization']
}))

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/assets/*', serveStatic({ root: './dist' }))

// ============================================================================
// AUTHENTICATION MIDDLEWARE
// ============================================================================

// Simple JWT verification middleware (production should use proper JWT library)
const authMiddleware = async (c: any, next: any) => {
  const authHeader = c.req.header('Authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return c.json({ error: 'Unauthorized' }, 401)
  }
  
  const token = authHeader.split(' ')[1]
  // TODO: Implement proper JWT verification with c.env.JWT_SECRET
  // For now, we'll use a simple user context
  c.set('user', { id: 'user-1', email: 'mrsixpack@elite.dev' })
  await next()
}

// ============================================================================
// SUBSCRIPTION MANAGEMENT APIs (Integration Package)
// ============================================================================

// Subscription schema validation
const subscriptionSchema = z.object({
  serviceName: z.string().min(1),
  category: z.string().min(1),
  monthlyCost: z.number().positive(),
  annualCost: z.number().optional(),
  billingCycle: z.enum(['monthly', 'yearly', 'quarterly']).default('monthly'),
  nextRenewal: z.string().optional(),
  isActive: z.boolean().default(true)
})

// GET /api/subscriptions - List all subscriptions
app.get('/api/subscriptions', authMiddleware, async (c) => {
  const user = c.get('user')
  
  const subscriptions = await c.env.DB.prepare(`
    SELECT * FROM subscriptions 
    WHERE user_id = ? AND is_active = true 
    ORDER BY monthly_cost DESC
  `).bind(user.id).all()
  
  return c.json({ subscriptions: subscriptions.results || [] })
})

// POST /api/subscriptions - Create subscription
app.post('/api/subscriptions', authMiddleware, async (c) => {
  const user = c.get('user')
  
  try {
    const body = await c.req.json()
    const data = subscriptionSchema.parse(body)
    
    const id = crypto.randomUUID()
    await c.env.DB.prepare(`
      INSERT INTO subscriptions (
        id, user_id, service_name, category, monthly_cost, annual_cost,
        billing_cycle, next_renewal, is_active, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    `).bind(
      id, user.id, data.serviceName, data.category, data.monthlyCost,
      data.annualCost || (data.monthlyCost * 12), data.billingCycle,
      data.nextRenewal, data.isActive
    ).run()
    
    return c.json({ id, ...data }, 201)
  } catch (error) {
    return c.json({ error: 'Invalid subscription data' }, 400)
  }
})

// PUT /api/subscriptions/:id - Update subscription
app.put('/api/subscriptions/:id', authMiddleware, async (c) => {
  const user = c.get('user')
  const id = c.req.param('id')
  
  try {
    const body = await c.req.json()
    const data = subscriptionSchema.partial().parse(body)
    
    const updateFields = Object.keys(data).map(key => `${key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)} = ?`).join(', ')
    const values = Object.values(data)
    
    await c.env.DB.prepare(`
      UPDATE subscriptions 
      SET ${updateFields}, updated_at = datetime('now')
      WHERE id = ? AND user_id = ?
    `).bind(...values, id, user.id).run()
    
    return c.json({ success: true })
  } catch (error) {
    return c.json({ error: 'Invalid update data' }, 400)
  }
})

// DELETE /api/subscriptions/:id - Delete subscription
app.delete('/api/subscriptions/:id', authMiddleware, async (c) => {
  const user = c.get('user')
  const id = c.req.param('id')
  
  await c.env.DB.prepare(`
    UPDATE subscriptions 
    SET is_active = false, updated_at = datetime('now')
    WHERE id = ? AND user_id = ?
  `).bind(id, user.id).run()
  
  return c.json({ success: true })
})

// ============================================================================
// BUDGET ANALYSIS APIs (Integration Package)
// ============================================================================

// GET /api/budget/analysis - Get bi-weekly budget analysis
app.get('/api/budget/analysis', authMiddleware, async (c) => {
  const user = c.get('user')
  
  // Get latest user profile
  const profile = await c.env.DB.prepare(`
    SELECT * FROM user_profiles WHERE user_id = ?
  `).bind(user.id).first()
  
  // Get active subscriptions
  const subscriptions = await c.env.DB.prepare(`
    SELECT * FROM subscriptions WHERE user_id = ? AND is_active = true
  `).bind(user.id).all()
  
  // Get budget categories
  const categories = await c.env.DB.prepare(`
    SELECT * FROM budget_categories WHERE user_id = ?
  `).bind(user.id).all()
  
  // Calculate totals
  const totalSubscriptions = subscriptions.results?.reduce((sum: number, sub: any) => sum + parseFloat(sub.monthly_cost), 0) || 0
  const totalBudgetExpenses = categories.results?.reduce((sum: number, cat: any) => sum + parseFloat(cat.spent_amount), 0) || 0
  const totalExpenses = totalSubscriptions + totalBudgetExpenses
  
  const biWeeklyNet = parseFloat(profile?.bi_weekly_net || '0')
  const biWeeklyExpenses = totalExpenses / 2.17 // Convert monthly to bi-weekly
  const remainingCashFlow = biWeeklyNet - biWeeklyExpenses
  const savingsRate = biWeeklyNet > 0 ? (remainingCashFlow / biWeeklyNet) * 100 : 0
  
  const analysis = {
    period: 'bi-weekly',
    grossIncome: parseFloat(profile?.bi_weekly_gross || '0'),
    netIncome: biWeeklyNet,
    totalExpenses: biWeeklyExpenses,
    expenseBreakdown: {
      subscriptions: totalSubscriptions / 2.17,
      budgetCategories: totalBudgetExpenses / 2.17
    },
    remainingCashFlow,
    savingsRate: Math.round(savingsRate * 100) / 100
  }
  
  // Store analysis in database
  await c.env.DB.prepare(`
    INSERT INTO budget_analysis (
      user_id, analysis_period, gross_income, net_income, total_expenses,
      expense_breakdown, remaining_cash_flow, savings_rate
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    user.id, 'bi-weekly', analysis.grossIncome, analysis.netIncome,
    analysis.totalExpenses, JSON.stringify(analysis.expenseBreakdown),
    analysis.remainingCashFlow, analysis.savingsRate
  ).run()
  
  return c.json(analysis)
})

// ============================================================================
// PAYROLL APIs (Integration Package)
// ============================================================================

// GET /api/payroll/current - Get current payroll breakdown
app.get('/api/payroll/current', authMiddleware, async (c) => {
  const user = c.get('user')
  
  const payroll = await c.env.DB.prepare(`
    SELECT * FROM payroll_records 
    WHERE user_id = ? 
    ORDER BY pay_period_end DESC 
    LIMIT 1
  `).bind(user.id).first()
  
  if (!payroll) {
    // Return default MrSixPack payroll data
    const defaultPayroll = {
      payPeriodStart: '2025-08-16',
      payPeriodEnd: '2025-08-30',
      grossPay: 2400.00,
      netPay: 1750.00,
      deductions: {
        preTax: {
          health: 150.00,
          dental: 25.00,
          vision: 15.00,
          retirement401k: 240.00 // 10% contribution
        },
        taxes: {
          federal: 180.00,
          state: 40.00,
          fica: 183.60, // 7.65% of gross
          medicare: 34.80
        },
        afterTax: {
          parking: 0,
          other: 0
        }
      }
    }
    
    return c.json(defaultPayroll)
  }
  
  return c.json({
    payPeriodStart: payroll.pay_period_start,
    payPeriodEnd: payroll.pay_period_end,
    grossPay: parseFloat(payroll.gross_pay),
    netPay: parseFloat(payroll.net_pay),
    deductions: JSON.parse(payroll.deductions || '{}')
  })
})

// ============================================================================
// AI ANALYSIS APIs
// ============================================================================

// POST /api/ai/analyze - Advanced AI financial health analysis
app.post('/api/ai/analyze', authMiddleware, async (c) => {
  const user = c.get('user')
  
  // Get user's financial data
  const profile = await c.env.DB.prepare(`SELECT * FROM user_profiles WHERE user_id = ?`).bind(user.id).first()
  const subscriptions = await c.env.DB.prepare(`SELECT * FROM subscriptions WHERE user_id = ? AND is_active = true`).bind(user.id).all()
  const goals = await c.env.DB.prepare(`SELECT * FROM financial_goals WHERE user_id = ?`).bind(user.id).all()
  const debts = await c.env.DB.prepare(`SELECT * FROM debts WHERE user_id = ?`).bind(user.id).all()
  
  // Calculate financial health score (0-100)
  let healthScore = 0
  const recommendations = []
  
  // Income analysis (25 points max)
  const monthlyIncome = parseFloat(profile?.monthly_income || '0')
  if (monthlyIncome > 0) {
    healthScore += monthlyIncome >= 5000 ? 25 : Math.floor((monthlyIncome / 5000) * 25)
  }
  
  // Debt analysis (25 points max)
  const totalDebt = debts.results?.reduce((sum: number, debt: any) => sum + parseFloat(debt.balance), 0) || 0
  const debtToIncomeRatio = monthlyIncome > 0 ? (totalDebt / (monthlyIncome * 12)) : 0
  if (debtToIncomeRatio <= 0.2) healthScore += 25
  else if (debtToIncomeRatio <= 0.4) healthScore += 15
  else if (debtToIncomeRatio <= 0.6) healthScore += 8
  else recommendations.push({
    type: 'debt_reduction',
    priority: 'high',
    title: 'Reduce Debt Load',
    description: `Your debt-to-income ratio of ${(debtToIncomeRatio * 100).toFixed(1)}% is concerning. Focus on paying down high-interest debt first.`,
    impact: 'Improve credit score and free up monthly cash flow',
    confidence: 95
  })
  
  // Subscription analysis (25 points max)
  const totalSubscriptions = subscriptions.results?.reduce((sum: number, sub: any) => sum + parseFloat(sub.monthly_cost), 0) || 0
  const subscriptionRatio = monthlyIncome > 0 ? (totalSubscriptions / monthlyIncome) : 0
  if (subscriptionRatio <= 0.05) healthScore += 25
  else if (subscriptionRatio <= 0.10) healthScore += 20
  else if (subscriptionRatio <= 0.15) healthScore += 10
  else recommendations.push({
    type: 'subscription_optimization',
    priority: 'medium',
    title: 'Optimize Subscriptions',
    description: `You're spending ${(subscriptionRatio * 100).toFixed(1)}% of income on subscriptions. Cancel unused services.`,
    impact: `Save $${(totalSubscriptions * 0.3).toFixed(0)}/month`,
    confidence: 88
  })
  
  // Goals progress (25 points max)
  const activeGoals = goals.results?.length || 0
  if (activeGoals > 0) {
    const goalProgress = goals.results?.reduce((avg: number, goal: any) => {
      const progress = parseFloat(goal.current_amount) / parseFloat(goal.target_amount)
      return avg + progress
    }, 0) / activeGoals
    healthScore += Math.floor(goalProgress * 25)
  }
  
  // Generate predictions
  const predictions = {
    netWorth: {
      current: -totalDebt, // Simplified
      predicted6Month: -totalDebt + (monthlyIncome * 0.1 * 6), // Assuming 10% savings rate
      predicted12Month: -totalDebt + (monthlyIncome * 0.1 * 12)
    },
    debtFreeDate: totalDebt > 0 ? new Date(Date.now() + (totalDebt / (monthlyIncome * 0.2)) * 30.44 * 24 * 60 * 60 * 1000).toISOString() : null,
    emergencyFundTarget: monthlyIncome * 6,
    retirementReadiness: healthScore > 70 ? 'On track' : 'Needs improvement'
  }
  
  // Store AI analysis
  const analysisId = crypto.randomUUID()
  await c.env.DB.prepare(`
    INSERT INTO ai_analysis (
      id, user_id, financial_health_score, recommendations, predictions, 
      insights, confidence_score
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(
    analysisId, user.id, Math.round(healthScore),
    JSON.stringify(recommendations), JSON.stringify(predictions),
    JSON.stringify({
      totalSubscriptions,
      subscriptionRatio: Math.round(subscriptionRatio * 1000) / 10,
      debtToIncomeRatio: Math.round(debtToIncomeRatio * 1000) / 10,
      activeGoals
    }),
    92.5 // Confidence score
  ).run()
  
  return c.json({
    healthScore: Math.round(healthScore),
    recommendations,
    predictions,
    insights: {
      totalSubscriptions,
      subscriptionRatio: Math.round(subscriptionRatio * 1000) / 10,
      debtToIncomeRatio: Math.round(debtToIncomeRatio * 1000) / 10,
      activeGoals
    },
    confidenceScore: 92.5,
    analysisDate: new Date().toISOString()
  })
})

// ============================================================================
// GOALS MANAGEMENT APIs
// ============================================================================

app.get('/api/goals', authMiddleware, async (c) => {
  const user = c.get('user')
  const goals = await c.env.DB.prepare(`
    SELECT * FROM financial_goals WHERE user_id = ? ORDER BY priority DESC, target_date ASC
  `).bind(user.id).all()
  
  return c.json({ goals: goals.results || [] })
})

app.post('/api/goals', authMiddleware, async (c) => {
  const user = c.get('user')
  const body = await c.req.json()
  
  const goalSchema = z.object({
    name: z.string().min(1),
    targetAmount: z.number().positive(),
    currentAmount: z.number().default(0),
    targetDate: z.string().optional(),
    category: z.string(),
    priority: z.enum(['high', 'medium', 'low']).default('medium')
  })
  
  try {
    const data = goalSchema.parse(body)
    const id = crypto.randomUUID()
    
    await c.env.DB.prepare(`
      INSERT INTO financial_goals (
        id, user_id, name, target_amount, current_amount, target_date, category, priority
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      id, user.id, data.name, data.targetAmount, data.currentAmount,
      data.targetDate, data.category, data.priority
    ).run()
    
    return c.json({ id, ...data }, 201)
  } catch (error) {
    return c.json({ error: 'Invalid goal data' }, 400)
  }
})

// ============================================================================
// REACT APPLICATION
// ============================================================================

app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Elite Financial Hub - MrSixPack's Real Data</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💰</text></svg>"
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/modern-styles.css" rel="stylesheet">
        <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            primary: '#10B981',
                            secondary: '#6366F1',
                            accent: '#F59E0B'
                        }
                    }
                }
            }
        </script>
        <style>
            .loading-spinner {
                border: 4px solid #f3f3f3;
                border-top: 4px solid #10B981;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                animation: spin 2s linear infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    </head>
    <body class="bg-gray-50">
        <div id="root">
            <div class="min-h-screen flex items-center justify-center">
                <div class="text-center">
                    <div class="loading-spinner mx-auto mb-4"></div>
                    <p class="text-gray-600">Loading Elite Financial Hub...</p>
                </div>
            </div>
        </div>
        
        <script src="/static/cash-flow-engine.js"></script>
        <script src="/static/modern-app.js"></script>
    </body>
    </html>
  `)
})

export default app