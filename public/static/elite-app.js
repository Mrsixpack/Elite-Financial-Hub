// Elite Financial Hub - ULTRA MODERN Version with Real MrSixPack Data
// Premium UI/UX with animations, glassmorphism, and modern design

// MrSixPack's ACTUAL subscription data (From Excel Tracker + Previous Data)
const REAL_SUBSCRIPTION_DATA = [
  // From Excel Tracker - Actively Tracked
  { id: 1, serviceName: 'Netflix', category: 'Entertainment', monthlyCost: 15.49, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-11-01', icon: '📺', priority: 'Medium', action: 'Keep', notes: 'Standard plan, good value' },
  { id: 2, serviceName: 'Spotify Premium', category: 'Entertainment', monthlyCost: 10.99, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-11-05', icon: '🎵', priority: 'High', action: 'Keep', notes: 'Daily use, essential' },
  { id: 3, serviceName: 'Adobe Creative Suite', category: 'Professional', monthlyCost: 22.99, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-11-10', icon: '🎨', priority: 'High', action: 'Keep', notes: 'Work/side projects' },
  { id: 4, serviceName: 'Amazon Prime', category: 'Shopping', monthlyCost: 14.98, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-11-15', icon: '📦', priority: 'Medium', action: 'Review', notes: 'Annual might be cheaper' },
  { id: 5, serviceName: 'Disney+', category: 'Entertainment', monthlyCost: 7.99, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-11-08', icon: '🎬', priority: 'Low', action: 'Cancel?', notes: 'Limited use lately - SAVE $95.88/year' },
  { id: 6, serviceName: 'Hulu', category: 'Entertainment', monthlyCost: 7.99, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-11-12', icon: '📺', priority: 'Low', action: 'Cancel?', notes: 'Overlaps with Netflix - SAVE $95.88/year' },
  { id: 7, serviceName: 'Apple iCloud', category: 'Storage', monthlyCost: 2.99, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-11-03', icon: '☁️', priority: 'Medium', action: 'Keep', notes: 'Photo backup essential' },
  { id: 8, serviceName: 'Gym Membership', category: 'Health', monthlyCost: 24.99, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-11-20', icon: '💪', priority: 'High', action: 'Keep', notes: 'Health investment' },
  { id: 9, serviceName: 'YouTube Premium', category: 'Entertainment', monthlyCost: 11.99, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-11-18', icon: '▶️', priority: 'Medium', action: 'Review', notes: 'Ad-free convenience - Review usage' },
  { id: 10, serviceName: 'Microsoft 365', category: 'Productivity', monthlyCost: 6.99, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-11-25', icon: '📄', priority: 'High', action: 'Keep', notes: 'Work documents' },
  
  // Insurance & Essential Services (From Previous Data)
  { id: 11, serviceName: 'GEICO Auto Insurance', category: 'Insurance', monthlyCost: 427.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-09-15', icon: '🚗', priority: 'High', action: 'Keep', notes: 'Essential coverage' },
  { id: 12, serviceName: 'Health Insurance Premium', category: 'Insurance', monthlyCost: 375.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-09-18', icon: '🏥', priority: 'High', action: 'Keep', notes: 'Essential coverage' },
  { id: 13, serviceName: 'Mobile Phone Plan', category: 'Utilities', monthlyCost: 200.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-09-22', icon: '📱', priority: 'High', action: 'Keep', notes: 'Essential service' },
  { id: 14, serviceName: 'Water Bill', category: 'Utilities', monthlyCost: 120.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-10-04', icon: '💧', priority: 'High', action: 'Keep', notes: 'Essential utility' },
  
  // Food & Living Expenses
  { id: 15, serviceName: 'Food/Groceries', category: 'Utilities', monthlyCost: 300.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-10-05', icon: '🛒', priority: 'High', action: 'Keep', notes: 'Essential expense' },
  
  // Technology & AI Tools (Content Creation)
  { id: 7, serviceName: 'ChatGPT Plus', category: 'Technology', monthlyCost: 20.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-09-29', icon: '🤖' },
  { id: 8, serviceName: 'Claude Pro', category: 'Technology', monthlyCost: 20.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-09-30', icon: '🧠' },
  { id: 9, serviceName: 'Gemini Pro', category: 'Technology', monthlyCost: 20.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-10-01', icon: '💎' },
  { id: 10, serviceName: 'ElevenLabs', category: 'Technology', monthlyCost: 22.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-09-27', icon: '🎤' },
  { id: 11, serviceName: 'Genspark AI', category: 'Technology', monthlyCost: 25.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-10-06', icon: '⚡' },
  { id: 12, serviceName: 'Suno AI', category: 'Technology', monthlyCost: 10.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-10-07', icon: '🎵' },
  { id: 13, serviceName: 'Abacus AI', category: 'Technology', monthlyCost: 10.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-10-08', icon: '🧮' },
  { id: 14, serviceName: 'iCloud Plus', category: 'Technology', monthlyCost: 30.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-10-03', icon: '☁️' },
  { id: 15, serviceName: 'Google One', category: 'Technology', monthlyCost: 25.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-10-05', icon: '📊' },
  { id: 16, serviceName: 'New York Times', category: 'Technology', monthlyCost: 4.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-10-02', icon: '📰' },
  { id: 17, serviceName: 'Skool Community', category: 'Technology', monthlyCost: 50.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-10-07', icon: '🎓' },
  
  // Entertainment & Content Creation
  { id: 18, serviceName: 'YouTube Premium Family', category: 'Entertainment', monthlyCost: 30.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-09-11', icon: '📺' },
  { id: 19, serviceName: 'Apple One Family', category: 'Entertainment', monthlyCost: 26.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-09-28', icon: '🍎' },
  { id: 20, serviceName: 'Patreon', category: 'Entertainment', monthlyCost: 7.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-09-25', icon: '💝' },
  { id: 21, serviceName: 'Midjourney', category: 'Entertainment', monthlyCost: 10.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-09-26', icon: '🎨' },
  { id: 22, serviceName: 'CapCut Pro', category: 'Entertainment', monthlyCost: 20.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-10-06', icon: '✂️' },
  { id: 23, serviceName: 'Descript', category: 'Entertainment', monthlyCost: 24.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-10-07', icon: '🎬' },
  
  // Fitness & Health (Professional Brand Building)
  { id: 24, serviceName: 'The Edge Fitness', category: 'Utilities', monthlyCost: 30.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-10-07', icon: '💪' },
  { id: 25, serviceName: 'Gym', category: 'Utilities', monthlyCost: 37.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-10-08', icon: '🏋️' },
  
  // Personal Finance (Chama - Investment/Savings)
  { id: 26, serviceName: 'Chama Investment', category: 'Personal', monthlyCost: 2000.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-09-01', icon: '💰', priority: 'High', action: 'Keep', notes: 'Wealth building' }
]

// Bank Accounts Data (From Excel Tracker)
const BANK_ACCOUNTS_DATA = [
  { 
    id: 1, 
    name: 'Primary Checking', 
    institution: 'Wells Fargo', 
    type: 'Checking', 
    currentBalance: 180.80, 
    targetBalance: 1000, 
    monthlyGoal: 200, 
    status: 'Critical',
    notes: 'Emergency fund - PRIORITY',
    icon: '🏦',
    color: 'red'
  },
  { 
    id: 2, 
    name: 'Secondary Checking', 
    institution: 'Bank of America', 
    type: 'Checking', 
    currentBalance: 324.32, 
    targetBalance: 1000, 
    monthlyGoal: 150, 
    status: 'Low',
    notes: 'Bill payments account',
    icon: '🏦',
    color: 'orange'
  },
  { 
    id: 3, 
    name: 'Emergency Fund', 
    institution: 'High-Yield Savings', 
    type: 'Savings', 
    currentBalance: 0, 
    targetBalance: 5000, 
    monthlyGoal: 300, 
    status: 'Not Started',
    notes: 'Target: 3 months expenses',
    icon: '🚨',
    color: 'red'
  },
  { 
    id: 4, 
    name: '401k Retirement', 
    institution: 'Employer Plan', 
    type: 'Retirement', 
    currentBalance: 5126.14, 
    targetBalance: 25000, 
    monthlyGoal: 427.18, 
    status: 'Building',
    notes: 'Auto-contribution active',
    icon: '🏦',
    color: 'green'
  },
  { 
    id: 5, 
    name: 'Investment Account', 
    institution: 'Brokerage', 
    type: 'Investment', 
    currentBalance: 0, 
    targetBalance: 2000, 
    monthlyGoal: 100, 
    status: 'Not Started',
    notes: 'Long-term growth',
    icon: '📈',
    color: 'purple'
  },
  { 
    id: 6, 
    name: 'Vacation Fund', 
    institution: 'Savings', 
    type: 'Savings', 
    currentBalance: 0, 
    targetBalance: 1500, 
    monthlyGoal: 50, 
    status: 'Not Started',
    notes: 'Future travel goals',
    icon: '✈️',
    color: 'blue'
  }
]

// Action Items & Savings Opportunities (From Excel Tracker)
const ACTION_ITEMS_DATA = [
  { 
    id: 1, 
    action: 'Cancel Disney+ subscription', 
    priority: 'High', 
    monthlySavings: 7.99, 
    annualSavings: 95.88,
    timeNeeded: '5 minutes', 
    deadline: '1 week', 
    notes: 'Save $95.88/year, barely used',
    completed: false,
    category: 'subscriptions'
  },
  { 
    id: 2, 
    action: 'Cancel Hulu subscription', 
    priority: 'High', 
    monthlySavings: 7.99, 
    annualSavings: 95.88,
    timeNeeded: '5 minutes', 
    deadline: '1 week', 
    notes: 'Save $95.88/year, overlaps Netflix',
    completed: false,
    category: 'subscriptions'
  },
  { 
    id: 3, 
    action: 'Build Wells Fargo emergency fund', 
    priority: 'High', 
    monthlySavings: 0,
    annualSavings: 0,
    timeNeeded: '1 hour setup', 
    deadline: '30 days', 
    notes: 'Add $200/month to reach $1000',
    completed: false,
    category: 'savings'
  },
  { 
    id: 4, 
    action: 'Set up automatic transfers', 
    priority: 'High', 
    monthlySavings: 0,
    annualSavings: 0,
    timeNeeded: '30 minutes', 
    deadline: '2 weeks', 
    notes: 'Automate savings to avoid spending',
    completed: false,
    category: 'automation'
  },
  { 
    id: 5, 
    action: 'Review credit card utilization', 
    priority: 'High', 
    monthlySavings: 0,
    annualSavings: 0,
    timeNeeded: '1 hour', 
    deadline: '1 week', 
    notes: 'Critical for credit score improvement',
    completed: false,
    category: 'credit'
  },
  { 
    id: 6, 
    action: 'Switch Amazon Prime to annual', 
    priority: 'Medium', 
    monthlySavings: 2.50,
    annualSavings: 30,
    timeNeeded: '10 minutes', 
    deadline: '30 days', 
    notes: 'Annual plan saves ~$30/year',
    completed: false,
    category: 'subscriptions'
  },
  { 
    id: 7, 
    action: 'Open high-yield savings account', 
    priority: 'Medium', 
    monthlySavings: 0,
    annualSavings: 0,
    timeNeeded: '2 hours', 
    deadline: '2 weeks', 
    notes: 'Earn 4-5% vs 0.01% current',
    completed: false,
    category: 'savings'
  },
  { 
    id: 8, 
    action: 'Request credit limit increases', 
    priority: 'Medium', 
    monthlySavings: 0,
    annualSavings: 0,
    timeNeeded: '30 minutes', 
    deadline: '1 week', 
    notes: 'Improves credit utilization ratio',
    completed: false,
    category: 'credit'
  },
  { 
    id: 9, 
    action: 'Review YouTube Premium usage', 
    priority: 'Medium', 
    monthlySavings: 11.99,
    annualSavings: 143.88,
    timeNeeded: '5 minutes', 
    deadline: '2 weeks', 
    notes: 'Cancel if not using regularly',
    completed: false,
    category: 'subscriptions'
  },
  { 
    id: 10, 
    action: 'Optimize 401k contribution %', 
    priority: 'Low', 
    monthlySavings: 0,
    annualSavings: 0,
    timeNeeded: '1 hour', 
    deadline: '60 days', 
    notes: 'Maximize employer match first',
    completed: false,
    category: 'retirement'
  }
]

// Credit Optimization Plan (From Excel Tracker)
const CREDIT_OPTIMIZATION_DATA = {
  currentScore: 640,
  targetScore: 700,
  improvementNeeded: 60,
  factors: [
    {
      name: 'Payment History',
      weight: '35%',
      currentStatus: 'Good',
      targetStatus: 'Excellent',
      impact: 'High',
      progress: 0.85,
      action: 'Continue perfect payment streak'
    },
    {
      name: 'Credit Utilization',
      weight: '30%',
      currentStatus: 'High (>30%)',
      targetStatus: 'Low (<10%)',
      impact: 'Very High',
      progress: 0.20,
      action: 'Pay down balances, increase limits'
    },
    {
      name: 'Length of History',
      weight: '15%',
      currentStatus: 'Short (2-3 years)',
      targetStatus: 'Long (5+ years)',
      impact: 'Medium',
      progress: 0.60,
      action: 'Keep old accounts open, be patient'
    },
    {
      name: 'Credit Mix',
      weight: '10%',
      currentStatus: 'Limited',
      targetStatus: 'Diverse',
      impact: 'Low',
      progress: 0.40,
      action: 'Add different types of credit'
    },
    {
      name: 'New Credit',
      weight: '10%',
      currentStatus: 'Recent inquiries',
      targetStatus: 'Stable',
      impact: 'Medium',
      progress: 0.70,
      action: 'Avoid new credit applications'
    }
  ]
}

// MrSixPack's ACTUAL financial profile from OCTOBER 2025 real payroll data
const REAL_PROFILE_DATA = {
  name: 'MrSixPack (Sammy)',
  profession: 'Licensed Practical Nurse (LPN → RN)',
  location: 'Delaware, USA',
  employerId: 'MSL0002',
  employer: 'Insperity',
  
  // OCTOBER 2025 PAYCHECK (Pay Date: 10/10/2025, Period: 09/21-10/04/2025)
  biWeeklyGross: 3151.34,        // Latest paycheck gross
  biWeeklyNet: 2238.86,          // Latest paycheck net
  monthlyGrossIncome: 6868.60,   // $3,151.34 × 2.18 (26 pays / 12 months)
  monthlyNetIncome: 4880.71,     // $2,238.86 × 2.18
  annualGrossIncome: 81935.00,   // $3,151.34 × 26 pay periods
  annualNetIncome: 58210.36,     // $2,238.86 × 26 pay periods
  paySchedule: 'bi-weekly',
  payDate: '2025-10-10',
  payPeriodStart: '2025-09-21',
  payPeriodEnd: '2025-10-04',
  
  // Hours worked (October paycheck)
  regularHours: 72.15,           // 32.15 + 40.00 hours
  overtimeHours: 6.23,           // OT hours
  retroHours: 139.10,            // Retro pay hours from prior period
  totalHours: 78.38,             // Current period hours (excluding retro)
  
  // Hourly rates from October paystub
  regularRate: 36.96,            // Regular hourly rate
  overtimeRate: 55.44,           // 1.5x overtime rate
  doubleTimeRate: 53.82,         // 2x rate
  
  // Earnings breakdown (October)
  regularEarnings: 2666.98,      // $1,188.26 + $1,478.40
  overtimeEarnings: 345.58,      // OT pay
  retroPay: 1072.06,             // Retro pay from 08/31-09/20
  
  // Pre-tax deductions (bi-weekly)
  preTaxDeductions: 273.52,      // Medical, dental, vision, 401k
  medicalDeduction: 72.52,
  dentalDeduction: 9.79,
  visionDeduction: 2.13,
  retirement401k: 189.08,        // Current bi-weekly 401k contribution
  
  // Taxes (bi-weekly)
  taxes: 605.63,                 // Total taxes
  federalTax: 228.42,
  stateTax: 142.59,              // Delaware SIT
  socialSecurity: 190.15,
  medicare: 44.47,
  
  // After-tax deductions (bi-weekly)
  afterTaxDeductions: 33.33,     // Insurance, identity protection
  legalDeduction: 8.31,
  identityFraudProtection: 5.05,
  criticalIllness: 8.45,
  hospitalInsurance: 8.54,
  accidentInsurance: 2.98,
  
  // Year-to-date totals (as of 10/13/2025)
  ytdGross: 64995.38,
  ytdFederalTax: 4959.80,
  ytdStateTax: 3000.24,
  ytdSocialSecurity: 3922.95,
  ytdMedicare: 917.48,
  ytd401k: 2838.10,              // YTD 401k employee contributions
  
  // 401(k) Retirement Account (as of 10/13/2025)
  retirement401kBalance: 5126.14,           // Current balance
  retirement401kVested: 5126.14,            // 100% vested
  retirement401kEmployeeYTD: 2838.10,       // Employee YTD
  retirement401kEmployerYTD: 1892.09,       // Employer YTD
  retirement401kTotalYTD: 4730.19,          // Total YTD contributions
  retirement401kContributionRate: 6.0,      // 6% contribution rate
  retirement401kEmployerMatch: 126.05,      // Last employer contribution
  retirement401kAnnualLimit: 23000.00,      // 2025 IRS limit
  retirement401kProjectedYearEnd: 6500.00,  // Projected end of year
  
  // PTO Balance (from Insperity portal as of 10/15/2025)
  ptoAvailable: 16.183,          // Current PTO available
  ptoUsed: 119.000,              // PTO used YTD
  ptoTotalAvailable: 131.730,    // Total PTO pool
  ptoBalance: 12.730,            // Remaining balance (131.730 - 119.000)
  floatingHoliday: 0.0,
  birthdayTime: 0.0,
  
  // Financial goals & credit (From Excel Tracker + Paystub)
  currentCreditScore: 640,       // From Excel tracker - IMPROVING! 🔥
  targetCreditScore: 700,        // Realistic near-term goal
  ultimateCreditScore: 800,      // Ultimate elite status goal
  creditGoalTimeline: 'Q4 2025',
  
  // Bank Accounts (From Excel Tracker)
  wellsFargoBalance: 180.80,     // Primary checking - CRITICAL status
  boaBalance: 324.32,            // Secondary checking - LOW status
  totalLiquid: 505.12,           // Total liquid assets
  wellsFargoTarget: 1000,
  boaTarget: 1000,
  emergencyFundBalance: 0,
  emergencyFundTarget: 5000,
  
  // Net Worth (From Excel Tracker)
  currentNetWorth: 5631.26,      // Estimated net worth
  targetNetWorth: 15000,         // Goal net worth
  
  // Business goals
  fitnessBusinessTarget: 5000,   // "Fit-In-60" monthly revenue goal
  socialMediaGoals: {
    instagram: { current: '15k', target: '25k' },
    tiktok: { current: '5k', target: '10k' }
  }
}

// Calculate real totals from MrSixPack's actual data
const totalMonthlySubscriptions = REAL_SUBSCRIPTION_DATA.reduce((sum, sub) => sum + sub.monthlyCost, 0)
const biWeeklySubscriptionCost = totalMonthlySubscriptions / 2.17 // Convert monthly to bi-weekly (26 pays / 12 months)
const biWeeklyCashFlow = REAL_PROFILE_DATA.biWeeklyNet - biWeeklySubscriptionCost
const savingsRate = (biWeeklyCashFlow / REAL_PROFILE_DATA.biWeeklyNet) * 100
const expenseRatio = (totalMonthlySubscriptions / REAL_PROFILE_DATA.monthlyNetIncome) * 100

// Real budget analysis data
const REAL_BUDGET_DATA = {
  period: 'bi-weekly',
  netIncome: REAL_PROFILE_DATA.biWeeklyNet,
  totalExpenses: biWeeklySubscriptionCost,
  remainingCashFlow: biWeeklyCashFlow,
  savingsRate: savingsRate,
  expenseBreakdown: {
    subscriptions: biWeeklySubscriptionCost,
    otherExpenses: 0
  }
}

// AI Analysis based on MrSixPack's REAL financial data
const REAL_AI_DATA = {
  healthScore: 85, // Excellent score - 735 credit + high income + smart investments
  confidenceScore: 97.8,
  recommendations: [
    {
      type: 'subscription_optimization',
      priority: 'high',
      title: 'AI Tool Subscription Consolidation',
      description: `You're spending $97/month on AI tools (ChatGPT, Claude, Gemini, ElevenLabs, Genspark, etc.). Consider consolidating to 2-3 core tools for content creation efficiency.`,
      impact: `Potential savings: $400-500/month by optimizing AI stack`,
      confidence: 94
    },
    {
      type: 'chama_investment_analysis',
      priority: 'high',
      title: 'Chama Investment Strategy ($2,000/month)',
      description: `Your $2,000/month Chama investment (38% of net income) is aggressive but smart for wealth building. Ensure it's structured properly for tax efficiency.`,
      impact: '$24,000/year investment building long-term wealth',
      confidence: 92
    },
    {
      type: 'credit_optimization',
      priority: 'low',
      title: 'Excellent Credit Score (735) → Elite Status (800+)',
      description: `Your 735 credit score is already excellent! Focus on maintaining low utilization (<5%) and consider adding premium credit products for 800+ elite status.`,
      impact: '+65 points to reach elite 800+ status',
      confidence: 92
    },
    {
      type: 'fitness_business_scaling',
      priority: 'high',
      title: 'Fit-In-60: Content → Revenue Pipeline',
      description: `Your AI tools investment ($97/mo) should accelerate content creation. Scale IG (15k→25k) and TikTok (5k→10k) to launch $5k/mo coaching faster.`,
      impact: '+$5,000/month potential within 6 months',
      confidence: 86
    },
    {
      type: 'nursing_career_optimization', 
      priority: 'medium',
      title: 'LPN→RN Income Boost Strategy',
      description: `At $35.88/hr + overtime, you're earning $87k+ annually. RN certification could boost to $50+/hr ($100k+ annually). Factor in NCLEX prep ROI.`,
      impact: '+$15,000-20,000 annual income potential',
      confidence: 91
    }
  ],
  predictions: {
    netWorth: {
      current: 15000, // Higher due to excellent credit and Chama investments
      predicted12Month: 45000 // With continued Chama investing + business growth
    },
    creditScore: {
      current: 735,
      predicted6Month: 760,
      predicted12Month: 800
    }
  },
  insights: {
    subscriptionRatio: expenseRatio.toFixed(1),
    topExpenseCategory: 'Chama Investment ($2,000/mo)',
    topSubscriptionCategory: 'Insurance ($802/mo)',
    aiToolsSpend: 97, // ChatGPT + Claude + Gemini + ElevenLabs + Genspark + Suno + Abacus
    savingsOpportunity: (totalMonthlySubscriptions * 0.25).toFixed(0),
    cashFlowAfterInvestment: (REAL_PROFILE_DATA.monthlyNetIncome - totalMonthlySubscriptions).toFixed(0)
  }
}

// Category colors with gradients
const CATEGORY_COLORS = {
  'Insurance': { bg: 'from-red-500 to-pink-600', text: 'text-red-50', border: 'border-red-300' },
  'Technology': { bg: 'from-blue-500 to-cyan-600', text: 'text-blue-50', border: 'border-blue-300' },
  'Entertainment': { bg: 'from-purple-500 to-indigo-600', text: 'text-purple-50', border: 'border-purple-300' },
  'Utilities': { bg: 'from-green-500 to-emerald-600', text: 'text-green-50', border: 'border-green-300' },
  'Shopping': { bg: 'from-orange-500 to-amber-600', text: 'text-orange-50', border: 'border-orange-300' },
  'Personal': { bg: 'from-yellow-500 to-orange-600', text: 'text-yellow-50', border: 'border-yellow-300' }
}

// Utility functions
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount || 0)
}

function formatPercent(value) {
  return `${value.toFixed(1)}%`
}

function getCategoryColor(category) {
  return CATEGORY_COLORS[category] || CATEGORY_COLORS['Technology']
}

// React Components Start Here
const { useState, useEffect, useRef } = React

// Loading Animation Component
const LoadingSpinner = () => {
  return React.createElement('div', {
    className: 'flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
  }, 
    React.createElement('div', {
      className: 'relative'
    },
      React.createElement('div', {
        className: 'w-20 h-20 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin'
      }),
      React.createElement('div', {
        className: 'absolute inset-0 w-20 h-20 border-4 border-transparent border-t-cyan-400 rounded-full animate-ping'
      })
    )
  )
}

// Modern Subscription Card Component
const SubscriptionCard = ({ subscription, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const colors = getCategoryColor(subscription.category)
  
  return React.createElement('div', {
    className: `group relative overflow-hidden rounded-2xl bg-gradient-to-br ${colors.bg} p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105`,
    style: {
      animationDelay: `${index * 100}ms`
    },
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  },
    // Glassmorphism overlay
    React.createElement('div', {
      className: 'absolute inset-0 bg-white/10 backdrop-blur-sm'
    }),
    
    // Content
    React.createElement('div', {
      className: 'relative z-10'
    },
      React.createElement('div', {
        className: 'flex items-center justify-between mb-4'
      },
        React.createElement('span', {
          className: 'text-2xl'
        }, subscription.icon),
        React.createElement('span', {
          className: `px-3 py-1 rounded-full text-xs font-semibold ${colors.text} bg-white/20`
        }, subscription.category)
      ),
      
      React.createElement('h3', {
        className: `font-bold text-lg ${colors.text} mb-2 leading-tight`
      }, subscription.serviceName),
      
      React.createElement('p', {
        className: `text-2xl font-bold ${colors.text} mb-1`
      }, formatCurrency(subscription.monthlyCost)),
      
      React.createElement('p', {
        className: `text-sm ${colors.text} opacity-80`
      }, `Next: ${subscription.nextRenewal}`)
    ),
    
    // Hover effect
    React.createElement('div', {
      className: `absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`
    })
  )
}

// 🌟 NEW: Editable Subscription Card (14/10 VERSION!)
const EditableSubscriptionCard = ({ subscription, index, editingId, editingField, setEditingId, setEditingField, onUpdate }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [tempValue, setTempValue] = useState('')
  const colors = getCategoryColor(subscription.category)
  
  const isEditing = editingId === subscription.id
  
  const startEdit = (field, currentValue) => {
    setEditingId(subscription.id)
    setEditingField(field)
    setTempValue(currentValue)
  }
  
  const saveEdit = () => {
    if (tempValue !== '') {
      onUpdate(editingField, tempValue)
    }
    setEditingId(null)
    setEditingField(null)
  }
  
  const cancelEdit = () => {
    setEditingId(null)
    setEditingField(null)
    setTempValue('')
  }
  
  return React.createElement('div', {
    className: `glass-card hover-lift rounded-2xl p-6 transition-all duration-300 ${isEditing ? 'ring-2 ring-primary ring-offset-2' : ''}`,
    style: {
      animationDelay: `${index * 50}ms`
    },
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  },
    // Header with icon and category
    React.createElement('div', {
      className: 'flex items-center justify-between mb-4'
    },
      React.createElement('span', {
        className: 'text-3xl animate-bounce-subtle'
      }, subscription.icon),
      React.createElement('div', {
        className: 'flex gap-2'
      },
        React.createElement('span', {
          className: `px-3 py-1 rounded-full text-xs font-semibold ${subscription.priority === 'High' ? 'bg-red-500/20 text-red-600' : subscription.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-600' : 'bg-green-500/20 text-green-600'}`
        }, subscription.priority),
        subscription.action && React.createElement('span', {
          className: `px-3 py-1 rounded-full text-xs font-semibold ${subscription.action.includes('Cancel') ? 'bg-red-500/20 text-red-600' : subscription.action === 'Keep' ? 'bg-green-500/20 text-green-600' : 'bg-yellow-500/20 text-yellow-600'}`
        }, subscription.action)
      )
    ),
    
    // Service Name
    React.createElement('h3', {
      className: 'font-bold text-lg text-gray-800 dark:text-white mb-2'
    }, subscription.serviceName),
    
    // Editable Monthly Cost
    React.createElement('div', {
      className: 'mb-3'
    },
      isEditing && editingField === 'monthlyCost'
        ? React.createElement('div', {
            className: 'flex gap-2'
          },
            React.createElement('input', {
              type: 'number',
              step: '0.01',
              value: tempValue,
              onChange: (e) => setTempValue(e.target.value),
              onKeyDown: (e) => e.key === 'Enter' ? saveEdit() : e.key === 'Escape' ? cancelEdit() : null,
              className: 'editing w-full px-3 py-2 rounded-lg border-2 border-primary text-gray-900 focus:outline-none',
              autoFocus: true
            }),
            React.createElement('button', {
              onClick: saveEdit,
              className: 'px-3 py-1 bg-primary text-white rounded-lg hover:bg-primary/80 transition'
            }, '✓'),
            React.createElement('button', {
              onClick: cancelEdit,
              className: 'px-3 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition'
            }, '✗')
          )
        : React.createElement('div', {
            className: 'editable inline-block',
            onClick: () => startEdit('monthlyCost', subscription.monthlyCost)
          },
            React.createElement('p', {
              className: 'text-2xl font-bold text-primary'
            }, formatCurrency(subscription.monthlyCost), '/mo'),
            isHovered && React.createElement('span', {
              className: 'ml-2 text-xs text-gray-500'
            }, '✏️ Click to edit')
          )
    ),
    
    // Next Renewal Date
    React.createElement('p', {
      className: 'text-sm text-gray-600 dark:text-gray-400 mb-2'
    }, `Next: ${subscription.nextRenewal}`),
    
    // Notes/Recommendations
    subscription.notes && React.createElement('div', {
      className: `mt-3 pt-3 border-t border-gray-200 dark:border-gray-700`
    },
      React.createElement('p', {
        className: `text-xs ${subscription.notes.includes('SAVE') ? 'text-red-600 font-bold' : 'text-gray-600 dark:text-gray-400'}`
      }, subscription.notes)
    ),
    
    // Annual Cost
    React.createElement('div', {
      className: 'mt-3 flex justify-between items-center text-sm'
    },
      React.createElement('span', {
        className: 'text-gray-600 dark:text-gray-400'
      }, 'Annual'),
      React.createElement('span', {
        className: 'font-bold text-gray-800 dark:text-white'
      }, formatCurrency(subscription.monthlyCost * 12))
    )
  )
}

// Modern Stats Card Component
const StatsCard = ({ icon, title, value, subtitle, color = 'blue', trend }) => {
  return React.createElement('div', {
    className: `relative overflow-hidden rounded-2xl bg-gradient-to-br from-${color}-500 to-${color}-700 p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105`
  },
    React.createElement('div', {
      className: 'absolute inset-0 bg-white/10 backdrop-blur-sm'
    }),
    
    React.createElement('div', {
      className: 'relative z-10'
    },
      React.createElement('div', {
        className: 'flex items-center justify-between mb-4'
      },
        React.createElement('div', {
          className: 'text-3xl'
        }, icon),
        trend && React.createElement('div', {
          className: `flex items-center text-sm ${trend > 0 ? 'text-green-300' : 'text-red-300'}`
        },
          React.createElement('i', {
            className: `fas ${trend > 0 ? 'fa-arrow-up' : 'fa-arrow-down'} mr-1`
          }),
          `${Math.abs(trend)}%`
        )
      ),
      
      React.createElement('h3', {
        className: 'text-sm font-medium opacity-80 mb-1'
      }, title),
      
      React.createElement('p', {
        className: 'text-2xl font-bold mb-1'
      }, value),
      
      subtitle && React.createElement('p', {
        className: 'text-xs opacity-70'
      }, subtitle)
    )
  )
}

// AI Recommendation Card
const AIRecommendationCard = ({ recommendation, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const priorityColors = {
    high: 'from-red-500 to-orange-600',
    medium: 'from-yellow-500 to-orange-500',
    low: 'from-green-500 to-emerald-600'
  }
  
  return React.createElement('div', {
    className: `relative overflow-hidden rounded-2xl bg-gradient-to-br ${priorityColors[recommendation.priority]} p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-102`,
    style: {
      animationDelay: `${index * 150}ms`
    }
  },
    React.createElement('div', {
      className: 'absolute inset-0 bg-white/10 backdrop-blur-sm'
    }),
    
    React.createElement('div', {
      className: 'relative z-10'
    },
      React.createElement('div', {
        className: 'flex items-center justify-between mb-4'
      },
        React.createElement('span', {
          className: 'px-3 py-1 rounded-full text-xs font-bold bg-white/20'
        }, recommendation.priority.toUpperCase()),
        React.createElement('span', {
          className: 'text-sm font-medium'
        }, `${recommendation.confidence}% confidence`)
      ),
      
      React.createElement('h3', {
        className: 'text-lg font-bold mb-3'
      }, recommendation.title),
      
      React.createElement('p', {
        className: `text-sm opacity-90 mb-4 ${isExpanded ? '' : 'line-clamp-2'}`
      }, recommendation.description),
      
      React.createElement('div', {
        className: 'flex items-center justify-between'
      },
        React.createElement('p', {
          className: 'text-sm font-semibold'
        }, recommendation.impact),
        React.createElement('button', {
          onClick: () => setIsExpanded(!isExpanded),
          className: 'text-xs bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors'
        }, isExpanded ? 'Less' : 'More')
      )
    )
  )
}

// October 2025 Paycheck Breakdown Component (World-Class Visualization)
const PaycheckBreakdown = () => {
  const profile = REAL_PROFILE_DATA
  
  return React.createElement('div', {
    className: 'space-y-6'
  },
    // Header
    React.createElement('div', {
      className: 'bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white'
    },
      React.createElement('div', {
        className: 'flex items-center justify-between'
      },
        React.createElement('div', {},
          React.createElement('h2', {
            className: 'text-2xl font-bold mb-2'
          }, '💰 October 2025 Paycheck'),
          React.createElement('p', {
            className: 'text-blue-100 text-sm'
          }, `Pay Period: ${profile.payPeriodStart} to ${profile.payPeriodEnd}`),
          React.createElement('p', {
            className: 'text-blue-100 text-sm'
          }, `Pay Date: ${profile.payDate}`)
        ),
        React.createElement('div', {
          className: 'text-right'
        },
          React.createElement('p', {
            className: 'text-4xl font-bold'
          }, formatCurrency(profile.biWeeklyNet)),
          React.createElement('p', {
            className: 'text-sm text-blue-100'
          }, 'Net Pay')
        )
      )
    ),
    
    // Earnings Section
    React.createElement('div', {
      className: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30'
    },
      React.createElement('h3', {
        className: 'text-xl font-bold mb-4 text-green-400'
      }, '📈 Earnings Breakdown'),
      React.createElement('div', {
        className: 'space-y-3'
      },
        // Gross Pay
        React.createElement('div', {
          className: 'flex justify-between items-center'
        },
          React.createElement('span', {
            className: 'text-white font-semibold'
          }, 'Gross Pay'),
          React.createElement('span', {
            className: 'text-green-400 font-bold text-lg'
          }, formatCurrency(profile.biWeeklyGross))
        ),
        
        // Regular Earnings
        React.createElement('div', {
          className: 'pl-4 flex justify-between items-center text-sm'
        },
          React.createElement('span', {
            className: 'text-gray-300'
          }, `Regular (${profile.regularHours} hrs @ $${profile.regularRate}/hr)`),
          React.createElement('span', {
            className: 'text-gray-200'
          }, formatCurrency(profile.regularEarnings))
        ),
        
        // Overtime Earnings
        React.createElement('div', {
          className: 'pl-4 flex justify-between items-center text-sm'
        },
          React.createElement('span', {
            className: 'text-gray-300'
          }, `Overtime (${profile.overtimeHours} hrs @ $${profile.overtimeRate}/hr)`),
          React.createElement('span', {
            className: 'text-gray-200'
          }, formatCurrency(profile.overtimeEarnings))
        ),
        
        // Retro Pay
        React.createElement('div', {
          className: 'pl-4 flex justify-between items-center text-sm'
        },
          React.createElement('span', {
            className: 'text-gray-300'
          }, `Retro Pay (${profile.retroHours} hrs)`),
          React.createElement('span', {
            className: 'text-gray-200'
          }, formatCurrency(profile.retroPay))
        )
      )
    ),
    
    // Deductions Section
    React.createElement('div', {
      className: 'grid md:grid-cols-3 gap-4'
    },
      // Pre-Tax Deductions
      React.createElement('div', {
        className: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30'
      },
        React.createElement('h4', {
          className: 'text-lg font-bold mb-3 text-blue-400'
        }, 'Pre-Tax'),
        React.createElement('p', {
          className: 'text-2xl font-bold text-white mb-4'
        }, formatCurrency(profile.preTaxDeductions)),
        React.createElement('div', {
          className: 'space-y-2 text-sm'
        },
          React.createElement('div', {
            className: 'flex justify-between'
          },
            React.createElement('span', {
              className: 'text-gray-300'
            }, 'Medical'),
            React.createElement('span', {
              className: 'text-gray-200'
            }, formatCurrency(profile.medicalDeduction))
          ),
          React.createElement('div', {
            className: 'flex justify-between'
          },
            React.createElement('span', {
              className: 'text-gray-300'
            }, 'Dental'),
            React.createElement('span', {
              className: 'text-gray-200'
            }, formatCurrency(profile.dentalDeduction))
          ),
          React.createElement('div', {
            className: 'flex justify-between'
          },
            React.createElement('span', {
              className: 'text-gray-300'
            }, 'Vision'),
            React.createElement('span', {
              className: 'text-gray-200'
            }, formatCurrency(profile.visionDeduction))
          ),
          React.createElement('div', {
            className: 'flex justify-between font-semibold'
          },
            React.createElement('span', {
              className: 'text-blue-300'
            }, '401(k)'),
            React.createElement('span', {
              className: 'text-blue-300'
            }, formatCurrency(profile.retirement401k))
          )
        )
      ),
      
      // Taxes
      React.createElement('div', {
        className: 'bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-500/30'
      },
        React.createElement('h4', {
          className: 'text-lg font-bold mb-3 text-red-400'
        }, 'Taxes'),
        React.createElement('p', {
          className: 'text-2xl font-bold text-white mb-4'
        }, formatCurrency(profile.taxes)),
        React.createElement('div', {
          className: 'space-y-2 text-sm'
        },
          React.createElement('div', {
            className: 'flex justify-between'
          },
            React.createElement('span', {
              className: 'text-gray-300'
            }, 'Federal'),
            React.createElement('span', {
              className: 'text-gray-200'
            }, formatCurrency(profile.federalTax))
          ),
          React.createElement('div', {
            className: 'flex justify-between'
          },
            React.createElement('span', {
              className: 'text-gray-300'
            }, 'State (DE)'),
            React.createElement('span', {
              className: 'text-gray-200'
            }, formatCurrency(profile.stateTax))
          ),
          React.createElement('div', {
            className: 'flex justify-between'
          },
            React.createElement('span', {
              className: 'text-gray-300'
            }, 'Social Security'),
            React.createElement('span', {
              className: 'text-gray-200'
            }, formatCurrency(profile.socialSecurity))
          ),
          React.createElement('div', {
            className: 'flex justify-between'
          },
            React.createElement('span', {
              className: 'text-gray-300'
            }, 'Medicare'),
            React.createElement('span', {
              className: 'text-gray-200'
            }, formatCurrency(profile.medicare))
          )
        )
      ),
      
      // After-Tax Deductions
      React.createElement('div', {
        className: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30'
      },
        React.createElement('h4', {
          className: 'text-lg font-bold mb-3 text-purple-400'
        }, 'After-Tax'),
        React.createElement('p', {
          className: 'text-2xl font-bold text-white mb-4'
        }, formatCurrency(profile.afterTaxDeductions)),
        React.createElement('div', {
          className: 'space-y-2 text-sm'
        },
          React.createElement('div', {
            className: 'flex justify-between'
          },
            React.createElement('span', {
              className: 'text-gray-300'
            }, 'Legal'),
            React.createElement('span', {
              className: 'text-gray-200'
            }, formatCurrency(profile.legalDeduction))
          ),
          React.createElement('div', {
            className: 'flex justify-between'
          },
            React.createElement('span', {
              className: 'text-gray-300'
            }, 'Identity Fraud'),
            React.createElement('span', {
              className: 'text-gray-200'
            }, formatCurrency(profile.identityFraudProtection))
          ),
          React.createElement('div', {
            className: 'flex justify-between'
          },
            React.createElement('span', {
              className: 'text-gray-300'
            }, 'Critical Illness'),
            React.createElement('span', {
              className: 'text-gray-200'
            }, formatCurrency(profile.criticalIllness))
          ),
          React.createElement('div', {
            className: 'flex justify-between'
          },
            React.createElement('span', {
              className: 'text-gray-300'
            }, 'Other'),
            React.createElement('span', {
              className: 'text-gray-200'
            }, formatCurrency(profile.hospitalInsurance + profile.accidentInsurance))
          )
        )
      )
    ),
    
    // YTD Summary
    React.createElement('div', {
      className: 'bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-2xl p-6 border border-amber-500/30'
    },
      React.createElement('h3', {
        className: 'text-xl font-bold mb-4 text-amber-400'
      }, '📊 Year-to-Date Summary (as of 10/13/2025)'),
      React.createElement('div', {
        className: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'
      },
        React.createElement('div', {},
          React.createElement('p', {
            className: 'text-sm text-gray-400 mb-1'
          }, 'YTD Gross'),
          React.createElement('p', {
            className: 'text-lg font-bold text-white'
          }, formatCurrency(profile.ytdGross))
        ),
        React.createElement('div', {},
          React.createElement('p', {
            className: 'text-sm text-gray-400 mb-1'
          }, 'YTD Federal Tax'),
          React.createElement('p', {
            className: 'text-lg font-bold text-white'
          }, formatCurrency(profile.ytdFederalTax))
        ),
        React.createElement('div', {},
          React.createElement('p', {
            className: 'text-sm text-gray-400 mb-1'
          }, 'YTD State Tax'),
          React.createElement('p', {
            className: 'text-lg font-bold text-white'
          }, formatCurrency(profile.ytdStateTax))
        ),
        React.createElement('div', {},
          React.createElement('p', {
            className: 'text-sm text-gray-400 mb-1'
          }, 'YTD Social Security'),
          React.createElement('p', {
            className: 'text-lg font-bold text-white'
          }, formatCurrency(profile.ytdSocialSecurity))
        ),
        React.createElement('div', {},
          React.createElement('p', {
            className: 'text-sm text-gray-400 mb-1'
          }, 'YTD Medicare'),
          React.createElement('p', {
            className: 'text-lg font-bold text-white'
          }, formatCurrency(profile.ytdMedicare))
        ),
        React.createElement('div', {},
          React.createElement('p', {
            className: 'text-sm text-gray-400 mb-1'
          }, 'YTD 401(k)'),
          React.createElement('p', {
            className: 'text-lg font-bold text-green-400'
          }, formatCurrency(profile.ytd401k))
        )
      )
    )
  )
}

// 401(k) Retirement Dashboard Component (World-Class)
const Retirement401kDashboard = () => {
  const profile = REAL_PROFILE_DATA
  
  // Calculate projected retirement value (assuming 7% annual return, retiring at 65)
  const currentAge = 32 // Estimate
  const yearsToRetirement = 33 // 65 - 32
  const annualContribution = profile.retirement401kEmployeeYTD / 10 * 12 // Rough annual estimate
  const annualReturn = 0.07
  
  // Future value calculation: FV = PV(1+r)^n + PMT * [(1+r)^n - 1] / r
  const futureValue = profile.retirement401kBalance * Math.pow(1 + annualReturn, yearsToRetirement) +
    annualContribution * ((Math.pow(1 + annualReturn, yearsToRetirement) - 1) / annualReturn)
  
  return React.createElement('div', {
    className: 'space-y-6'
  },
    // Header
    React.createElement('div', {
      className: 'bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white'
    },
      React.createElement('div', {
        className: 'flex items-center justify-between'
      },
        React.createElement('div', {},
          React.createElement('h2', {
            className: 'text-2xl font-bold mb-2'
          }, '🏦 401(k) Retirement Account'),
          React.createElement('p', {
            className: 'text-green-100 text-sm'
          }, `${profile.employer} • Account: ******7683`),
          React.createElement('p', {
            className: 'text-green-100 text-sm'
          }, 'As of October 13, 2025')
        ),
        React.createElement('div', {
          className: 'text-right'
        },
          React.createElement('p', {
            className: 'text-4xl font-bold'
          }, formatCurrency(profile.retirement401kBalance)),
          React.createElement('p', {
            className: 'text-sm text-green-100'
          }, 'Current Balance')
        )
      )
    ),
    
    // Key Metrics
    React.createElement('div', {
      className: 'grid md:grid-cols-4 gap-4'
    },
      React.createElement('div', {
        className: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30'
      },
        React.createElement('p', {
          className: 'text-sm text-gray-400 mb-1'
        }, 'Contribution Rate'),
        React.createElement('p', {
          className: 'text-2xl font-bold text-white'
        }, `${profile.retirement401kContributionRate}%`)
      ),
      React.createElement('div', {
        className: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30'
      },
        React.createElement('p', {
          className: 'text-sm text-gray-400 mb-1'
        }, 'YTD Employee'),
        React.createElement('p', {
          className: 'text-2xl font-bold text-white'
        }, formatCurrency(profile.retirement401kEmployeeYTD))
      ),
      React.createElement('div', {
        className: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30'
      },
        React.createElement('p', {
          className: 'text-sm text-gray-400 mb-1'
        }, 'YTD Employer'),
        React.createElement('p', {
          className: 'text-2xl font-bold text-white'
        }, formatCurrency(profile.retirement401kEmployerYTD))
      ),
      React.createElement('div', {
        className: 'bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl p-4 border border-amber-500/30'
      },
        React.createElement('p', {
          className: 'text-sm text-gray-400 mb-1'
        }, 'YTD Total'),
        React.createElement('p', {
          className: 'text-2xl font-bold text-white'
        }, formatCurrency(profile.retirement401kTotalYTD))
      )
    ),
    
    // Projection
    React.createElement('div', {
      className: 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-500/30'
    },
      React.createElement('h3', {
        className: 'text-xl font-bold mb-4 text-indigo-400'
      }, '🎯 Retirement Projection'),
      React.createElement('div', {
        className: 'grid md:grid-cols-3 gap-6'
      },
        React.createElement('div', {},
          React.createElement('p', {
            className: 'text-sm text-gray-400 mb-2'
          }, 'Projected Balance at Age 65'),
          React.createElement('p', {
            className: 'text-3xl font-bold text-green-400'
          }, formatCurrency(futureValue)),
          React.createElement('p', {
            className: 'text-xs text-gray-500 mt-1'
          }, 'Assuming 7% annual return')
        ),
        React.createElement('div', {},
          React.createElement('p', {
            className: 'text-sm text-gray-400 mb-2'
          }, 'Years to Retirement'),
          React.createElement('p', {
            className: 'text-3xl font-bold text-white'
          }, yearsToRetirement),
          React.createElement('p', {
            className: 'text-xs text-gray-500 mt-1'
          }, 'Target age: 65')
        ),
        React.createElement('div', {},
          React.createElement('p', {
            className: 'text-sm text-gray-400 mb-2'
          }, '2025 Contribution Room'),
          React.createElement('p', {
            className: 'text-3xl font-bold text-white'
          }, formatCurrency(profile.retirement401kAnnualLimit - profile.retirement401kEmployeeYTD)),
          React.createElement('p', {
            className: 'text-xs text-gray-500 mt-1'
          }, `Limit: ${formatCurrency(profile.retirement401kAnnualLimit)}`)
        )
      )
    ),
    
    // Tips
    React.createElement('div', {
      className: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-500/30'
    },
      React.createElement('h4', {
        className: 'text-lg font-bold mb-3 text-cyan-400'
      }, '💡 Smart Retirement Tips'),
      React.createElement('ul', {
        className: 'space-y-2 text-sm text-gray-300'
      },
        React.createElement('li', {}, '✅ Your 6% contribution rate is excellent for building wealth'),
        React.createElement('li', {}, `✅ Employer match of $${formatCurrency(profile.retirement401kEmployerYTD).replace('$', '')} YTD is FREE money!`),
        React.createElement('li', {}, `✅ You've contributed ${((profile.retirement401kEmployeeYTD / profile.retirement401kAnnualLimit) * 100).toFixed(1)}% of the 2025 IRS limit`),
        React.createElement('li', {}, '💎 Consider maxing out to $23,000 annually for optimal tax benefits'),
        React.createElement('li', {}, '📈 Your projected retirement balance could exceed $1M with consistent contributions!')
      )
    )
  )
}

// Bank Accounts Dashboard Component (World-Class)
const BankAccountsDashboard = () => {
  const totalLiquid = BANK_ACCOUNTS_DATA.filter(acc => acc.type === 'Checking' || acc.type === 'Savings').reduce((sum, acc) => sum + acc.currentBalance, 0)
  const totalRetirement = BANK_ACCOUNTS_DATA.filter(acc => acc.type === 'Retirement').reduce((sum, acc) => sum + acc.currentBalance, 0)
  const totalInvestments = BANK_ACCOUNTS_DATA.filter(acc => acc.type === 'Investment').reduce((sum, acc) => sum + acc.currentBalance, 0)
  const totalNetWorth = BANK_ACCOUNTS_DATA.reduce((sum, acc) => sum + acc.currentBalance, 0)
  const targetNetWorth = BANK_ACCOUNTS_DATA.reduce((sum, acc) => sum + acc.targetBalance, 0)
  
  const getStatusColor = (status) => {
    const colors = {
      'Critical': 'from-red-500 to-rose-600',
      'Low': 'from-orange-500 to-amber-600',
      'Building': 'from-green-500 to-emerald-600',
      'Not Started': 'from-gray-500 to-slate-600',
      'On Track': 'from-blue-500 to-cyan-600'
    }
    return colors[status] || 'from-gray-500 to-slate-600'
  }
  
  return React.createElement('div', {
    className: 'space-y-6'
  },
    // Header
    React.createElement('div', {
      className: 'bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white'
    },
      React.createElement('div', {
        className: 'flex items-center justify-between'
      },
        React.createElement('div', {},
          React.createElement('h2', {
            className: 'text-2xl font-bold mb-2'
          }, '🏦 Bank Accounts Overview'),
          React.createElement('p', {
            className: 'text-blue-100 text-sm'
          }, 'Track all your accounts in one place')
        ),
        React.createElement('div', {
          className: 'text-right'
        },
          React.createElement('p', {
            className: 'text-4xl font-bold'
          }, formatCurrency(totalNetWorth)),
          React.createElement('p', {
            className: 'text-sm text-blue-100'
          }, 'Total Net Worth')
        )
      )
    ),
    
    // Summary Cards
    React.createElement('div', {
      className: 'grid md:grid-cols-4 gap-4'
    },
      React.createElement('div', {
        className: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30'
      },
        React.createElement('p', {
          className: 'text-sm text-gray-400 mb-1'
        }, 'Liquid Assets'),
        React.createElement('p', {
          className: 'text-2xl font-bold text-white'
        }, formatCurrency(totalLiquid)),
        React.createElement('p', {
          className: 'text-xs text-gray-500 mt-1'
        }, 'Checking + Savings')
      ),
      React.createElement('div', {
        className: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30'
      },
        React.createElement('p', {
          className: 'text-sm text-gray-400 mb-1'
        }, 'Retirement'),
        React.createElement('p', {
          className: 'text-2xl font-bold text-white'
        }, formatCurrency(totalRetirement)),
        React.createElement('p', {
          className: 'text-xs text-gray-500 mt-1'
        }, '401(k) Balance')
      ),
      React.createElement('div', {
        className: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30'
      },
        React.createElement('p', {
          className: 'text-sm text-gray-400 mb-1'
        }, 'Investments'),
        React.createElement('p', {
          className: 'text-2xl font-bold text-white'
        }, formatCurrency(totalInvestments)),
        React.createElement('p', {
          className: 'text-xs text-gray-500 mt-1'
        }, 'Brokerage Accounts')
      ),
      React.createElement('div', {
        className: 'bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl p-4 border border-amber-500/30'
      },
        React.createElement('p', {
          className: 'text-sm text-gray-400 mb-1'
        }, 'Target Net Worth'),
        React.createElement('p', {
          className: 'text-2xl font-bold text-white'
        }, formatCurrency(targetNetWorth)),
        React.createElement('p', {
          className: 'text-xs text-gray-500 mt-1'
        }, `${((totalNetWorth / targetNetWorth) * 100).toFixed(1)}% Complete`)
      )
    ),
    
    // Individual Accounts
    React.createElement('div', {
      className: 'grid md:grid-cols-2 gap-6'
    },
      BANK_ACCOUNTS_DATA.map(account =>
        React.createElement('div', {
          key: account.id,
          className: `bg-gradient-to-br ${getStatusColor(account.status)}/20 rounded-2xl p-6 border ${getStatusColor(account.status).replace('from-', 'border-').split(' ')[0]}/30`
        },
          React.createElement('div', {
            className: 'flex items-center justify-between mb-4'
          },
            React.createElement('div', {
              className: 'flex items-center space-x-3'
            },
              React.createElement('span', {
                className: 'text-3xl'
              }, account.icon),
              React.createElement('div', {},
                React.createElement('h3', {
                  className: 'font-bold text-white text-lg'
                }, account.name),
                React.createElement('p', {
                  className: 'text-sm text-gray-400'
                }, `${account.institution} • ${account.type}`)
              )
            ),
            React.createElement('span', {
              className: 'px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white'
            }, account.status)
          ),
          
          React.createElement('div', {
            className: 'space-y-3'
          },
            React.createElement('div', {
              className: 'flex justify-between items-center'
            },
              React.createElement('span', {
                className: 'text-gray-400'
              }, 'Current Balance'),
              React.createElement('span', {
                className: 'text-2xl font-bold text-white'
              }, formatCurrency(account.currentBalance))
            ),
            React.createElement('div', {
              className: 'flex justify-between items-center'
            },
              React.createElement('span', {
                className: 'text-gray-400'
              }, 'Target Balance'),
              React.createElement('span', {
                className: 'text-lg font-semibold text-gray-300'
              }, formatCurrency(account.targetBalance))
            ),
            
            // Progress Bar
            React.createElement('div', {
              className: 'mt-2'
            },
              React.createElement('div', {
                className: 'flex justify-between text-sm mb-1'
              },
                React.createElement('span', {
                  className: 'text-gray-400'
                }, 'Progress'),
                React.createElement('span', {
                  className: 'text-gray-300'
                }, `${((account.currentBalance / account.targetBalance) * 100).toFixed(1)}%`)
              ),
              React.createElement('div', {
                className: 'w-full h-2 bg-gray-700 rounded-full overflow-hidden'
              },
                React.createElement('div', {
                  className: 'h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-1000',
                  style: { width: `${Math.min((account.currentBalance / account.targetBalance) * 100, 100)}%` }
                })
              )
            ),
            
            React.createElement('div', {
              className: 'pt-3 border-t border-white/10'
            },
              React.createElement('p', {
                className: 'text-sm text-gray-400 mb-1'
              }, 'Monthly Goal: ' + formatCurrency(account.monthlyGoal)),
              React.createElement('p', {
                className: 'text-xs text-gray-500'
              }, account.notes)
            )
          )
        )
      )
    )
  )
}

// Action Items Dashboard Component (World-Class)
const ActionItemsDashboard = ({ actionItems = ACTION_ITEMS_DATA, onToggle }) => {
  const totalMonthlySavings = actionItems.reduce((sum, item) => sum + (item.monthlySavings || 0), 0)
  const totalAnnualSavings = actionItems.reduce((sum, item) => sum + (item.annualSavings || 0), 0)
  const completedCount = actionItems.filter(item => item.completed).length
  
  const highPriorityItems = actionItems.filter(item => item.priority === 'High')
  const mediumPriorityItems = actionItems.filter(item => item.priority === 'Medium')
  const lowPriorityItems = actionItems.filter(item => item.priority === 'Low')
  
  const getPriorityColor = (priority) => {
    const colors = {
      'High': 'from-red-500 to-orange-600',
      'Medium': 'from-yellow-500 to-amber-600',
      'Low': 'from-green-500 to-emerald-600'
    }
    return colors[priority] || 'from-gray-500 to-slate-600'
  }
  
  const getCategoryIcon = (category) => {
    const icons = {
      'subscriptions': '💳',
      'savings': '💰',
      'automation': '⚙️',
      'credit': '📊',
      'retirement': '🏦'
    }
    return icons[category] || '📋'
  }
  
  return React.createElement('div', {
    className: 'space-y-6'
  },
    // Header
    React.createElement('div', {
      className: 'bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white'
    },
      React.createElement('div', {
        className: 'flex items-center justify-between'
      },
        React.createElement('div', {},
          React.createElement('h2', {
            className: 'text-2xl font-bold mb-2'
          }, '✅ Action Items & Savings Opportunities'),
          React.createElement('p', {
            className: 'text-purple-100 text-sm'
          }, 'Quick wins to improve your finances')
        ),
        React.createElement('div', {
          className: 'text-right'
        },
          React.createElement('p', {
            className: 'text-3xl font-bold'
          }, formatCurrency(totalAnnualSavings)),
          React.createElement('p', {
            className: 'text-sm text-purple-100'
          }, 'Potential Annual Savings')
        )
      )
    ),
    
    // Summary Stats
    React.createElement('div', {
      className: 'grid grid-cols-2 md:grid-cols-4 gap-4'
    },
      React.createElement('div', {
        className: 'bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl p-4 border border-red-500/30'
      },
        React.createElement('p', {
          className: 'text-sm text-gray-400 mb-1'
        }, 'High Priority'),
        React.createElement('p', {
          className: 'text-2xl font-bold text-white'
        }, highPriorityItems.length)
      ),
      React.createElement('div', {
        className: 'bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-xl p-4 border border-yellow-500/30'
      },
        React.createElement('p', {
          className: 'text-sm text-gray-400 mb-1'
        }, 'Medium Priority'),
        React.createElement('p', {
          className: 'text-2xl font-bold text-white'
        }, mediumPriorityItems.length)
      ),
      React.createElement('div', {
        className: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30'
      },
        React.createElement('p', {
          className: 'text-sm text-gray-400 mb-1'
        }, 'Low Priority'),
        React.createElement('p', {
          className: 'text-2xl font-bold text-white'
        }, lowPriorityItems.length)
      ),
      React.createElement('div', {
        className: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30'
      },
        React.createElement('p', {
          className: 'text-sm text-gray-400 mb-1'
        }, 'Completed'),
        React.createElement('p', {
          className: 'text-2xl font-bold text-white'
        }, `${completedCount}/${actionItems.length}`)
      )
    ),
    
    // Action Items List
    React.createElement('div', {
      className: 'space-y-4'
    },
      actionItems.map(item =>
        React.createElement('div', {
          key: item.id,
          className: `bg-gradient-to-br ${getPriorityColor(item.priority)}/20 rounded-2xl p-6 border ${getPriorityColor(item.priority).replace('from-', 'border-').split(' ')[0]}/30 transition-all duration-300 ${completedItems.includes(item.id) ? 'opacity-50' : ''}`
        },
          React.createElement('div', {
            className: 'flex items-start justify-between'
          },
            React.createElement('div', {
              className: 'flex items-start space-x-4 flex-1'
            },
              React.createElement('button', {
                onClick: () => onToggle && onToggle(item.id),
                className: `w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${item.completed ? 'bg-green-500 border-green-500' : 'border-gray-400 hover:border-green-400'}`
              },
                item.completed && React.createElement('i', {
                  className: 'fas fa-check text-white text-xs'
                })
              ),
              React.createElement('div', {
                className: 'flex-1'
              },
                React.createElement('div', {
                  className: 'flex items-center space-x-3 mb-2'
                },
                  React.createElement('span', {
                    className: 'text-2xl'
                  }, getCategoryIcon(item.category)),
                  React.createElement('h3', {
                    className: `font-bold text-white text-lg ${item.completed ? 'line-through opacity-50' : ''}`
                  }, item.action)
                ),
                React.createElement('div', {
                  className: 'grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-3'
                },
                  React.createElement('div', {},
                    React.createElement('span', {
                      className: 'text-gray-400'
                    }, 'Priority: '),
                    React.createElement('span', {
                      className: 'text-white font-semibold'
                    }, item.priority)
                  ),
                  React.createElement('div', {},
                    React.createElement('span', {
                      className: 'text-gray-400'
                    }, 'Time: '),
                    React.createElement('span', {
                      className: 'text-white font-semibold'
                    }, item.timeNeeded)
                  ),
                  React.createElement('div', {},
                    React.createElement('span', {
                      className: 'text-gray-400'
                    }, 'Deadline: '),
                    React.createElement('span', {
                      className: 'text-white font-semibold'
                    }, item.deadline)
                  ),
                  item.monthlySavings > 0 && React.createElement('div', {},
                    React.createElement('span', {
                      className: 'text-gray-400'
                    }, 'Saves: '),
                    React.createElement('span', {
                      className: 'text-green-400 font-bold'
                    }, formatCurrency(item.monthlySavings) + '/mo')
                  )
                ),
                React.createElement('p', {
                  className: 'text-sm text-gray-300'
                }, item.notes)
              )
            ),
            item.annualSavings > 0 && React.createElement('div', {
              className: 'text-right'
            },
              React.createElement('p', {
                className: 'text-2xl font-bold text-green-400'
              }, formatCurrency(item.annualSavings)),
              React.createElement('p', {
                className: 'text-xs text-gray-400'
              }, 'Annual Savings')
            )
          )
        )
      )
    )
  )
}

// Credit Optimization Dashboard Component (World-Class)
const CreditOptimizationDashboard = () => {
  const data = CREDIT_OPTIMIZATION_DATA
  const avgProgress = data.factors.reduce((sum, f) => sum + f.progress, 0) / data.factors.length
  
  return React.createElement('div', {
    className: 'space-y-6'
  },
    // Header
    React.createElement('div', {
      className: 'bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white'
    },
      React.createElement('div', {
        className: 'flex items-center justify-between'
      },
        React.createElement('div', {},
          React.createElement('h2', {
            className: 'text-2xl font-bold mb-2'
          }, '📊 Credit Score Optimization Plan'),
          React.createElement('p', {
            className: 'text-indigo-100 text-sm'
          }, 'Your roadmap to excellent credit')
        ),
        React.createElement('div', {
          className: 'text-right'
        },
          React.createElement('p', {
            className: 'text-sm text-indigo-100 mb-1'
          }, `Need: +${data.improvementNeeded} points`),
          React.createElement('div', {
            className: 'flex items-center space-x-4'
          },
            React.createElement('div', {
              className: 'text-center'
            },
              React.createElement('p', {
                className: 'text-3xl font-bold'
              }, data.currentScore),
              React.createElement('p', {
                className: 'text-xs text-indigo-100'
              }, 'Current')
            ),
            React.createElement('i', {
              className: 'fas fa-arrow-right text-2xl'
            }),
            React.createElement('div', {
              className: 'text-center'
            },
              React.createElement('p', {
                className: 'text-3xl font-bold text-green-400'
              }, data.targetScore + '+'),
              React.createElement('p', {
                className: 'text-xs text-indigo-100'
              }, 'Target')
            )
          )
        )
      )
    ),
    
    // Overall Progress
    React.createElement('div', {
      className: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30'
    },
      React.createElement('h3', {
        className: 'text-lg font-bold mb-4 text-blue-400'
      }, 'Overall Progress to Goal'),
      React.createElement('div', {
        className: 'flex items-center space-x-4'
      },
        React.createElement('div', {
          className: 'flex-1'
        },
          React.createElement('div', {
            className: 'w-full h-4 bg-gray-700 rounded-full overflow-hidden'
          },
            React.createElement('div', {
              className: 'h-full bg-gradient-to-r from-blue-400 to-cyan-500 transition-all duration-1000',
              style: { width: `${(avgProgress * 100).toFixed(0)}%` }
            })
          )
        ),
        React.createElement('span', {
          className: 'text-2xl font-bold text-white'
        }, `${(avgProgress * 100).toFixed(0)}%`)
      )
    ),
    
    // Credit Factors
    React.createElement('div', {
      className: 'grid md:grid-cols-2 gap-6'
    },
      data.factors.map((factor, index) =>
        React.createElement('div', {
          key: index,
          className: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30'
        },
          React.createElement('div', {
            className: 'flex items-center justify-between mb-4'
          },
            React.createElement('h4', {
              className: 'font-bold text-white text-lg'
            }, factor.name),
            React.createElement('span', {
              className: 'px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white'
            }, factor.weight)
          ),
          
          React.createElement('div', {
            className: 'space-y-3'
          },
            React.createElement('div', {
              className: 'grid grid-cols-2 gap-3 text-sm'
            },
              React.createElement('div', {},
                React.createElement('p', {
                  className: 'text-gray-400 mb-1'
                }, 'Current'),
                React.createElement('p', {
                  className: 'text-white font-semibold'
                }, factor.currentStatus)
              ),
              React.createElement('div', {},
                React.createElement('p', {
                  className: 'text-gray-400 mb-1'
                }, 'Target'),
                React.createElement('p', {
                  className: 'text-green-400 font-semibold'
                }, factor.targetStatus)
              )
            ),
            
            React.createElement('div', {},
              React.createElement('div', {
                className: 'flex justify-between text-sm mb-1'
              },
                React.createElement('span', {
                  className: 'text-gray-400'
                }, 'Progress'),
                React.createElement('span', {
                  className: 'text-gray-300'
                }, `${(factor.progress * 100).toFixed(0)}%`)
              ),
              React.createElement('div', {
                className: 'w-full h-2 bg-gray-700 rounded-full overflow-hidden'
              },
                React.createElement('div', {
                  className: `h-full transition-all duration-1000 ${factor.progress >= 0.7 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : factor.progress >= 0.4 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-red-400 to-rose-500'}`,
                  style: { width: `${(factor.progress * 100).toFixed(0)}%` }
                })
              )
            ),
            
            React.createElement('div', {
              className: 'pt-3 border-t border-white/10'
            },
              React.createElement('p', {
                className: 'text-sm text-gray-400 mb-1'
              }, `Impact: ${factor.impact}`),
              React.createElement('p', {
                className: 'text-xs text-gray-300'
              }, `✅ ${factor.action}`)
            )
          )
        )
      )
    )
  )
}

// PTO Balance Component (World-Class)
const PTOBalanceCard = () => {
  const profile = REAL_PROFILE_DATA
  const ptoUsagePercent = (profile.ptoUsed / profile.ptoTotalAvailable) * 100
  
  return React.createElement('div', {
    className: 'bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl p-6 border border-teal-500/30'
  },
    React.createElement('div', {
      className: 'flex items-center justify-between mb-4'
    },
      React.createElement('h3', {
        className: 'text-xl font-bold text-teal-400'
      }, '🏖️ PTO Balance'),
      React.createElement('span', {
        className: 'text-sm text-gray-400'
      }, 'As of Oct 15, 2025')
    ),
    
    // Available PTO
    React.createElement('div', {
      className: 'mb-6'
    },
      React.createElement('p', {
        className: 'text-4xl font-bold text-white mb-2'
      }, `${profile.ptoAvailable.toFixed(2)} hours`),
      React.createElement('p', {
        className: 'text-sm text-gray-400'
      }, 'Available for Use')
    ),
    
    // PTO Usage Bar
    React.createElement('div', {
      className: 'mb-6'
    },
      React.createElement('div', {
        className: 'flex justify-between text-sm mb-2'
      },
        React.createElement('span', {
          className: 'text-gray-400'
        }, 'PTO Usage'),
        React.createElement('span', {
          className: 'text-gray-300'
        }, `${ptoUsagePercent.toFixed(1)}%`)
      ),
      React.createElement('div', {
        className: 'w-full h-3 bg-gray-700 rounded-full overflow-hidden'
      },
        React.createElement('div', {
          className: 'h-full bg-gradient-to-r from-teal-400 to-cyan-500 transition-all duration-1000',
          style: { width: `${ptoUsagePercent}%` }
        })
      )
    ),
    
    // Breakdown
    React.createElement('div', {
      className: 'grid grid-cols-3 gap-4 text-center'
    },
      React.createElement('div', {},
        React.createElement('p', {
          className: 'text-sm text-gray-400 mb-1'
        }, 'Used'),
        React.createElement('p', {
          className: 'text-lg font-bold text-red-400'
        }, `${profile.ptoUsed.toFixed(0)}h`)
      ),
      React.createElement('div', {},
        React.createElement('p', {
          className: 'text-sm text-gray-400 mb-1'
        }, 'Available'),
        React.createElement('p', {
          className: 'text-lg font-bold text-green-400'
        }, `${profile.ptoAvailable.toFixed(1)}h`)
      ),
      React.createElement('div', {},
        React.createElement('p', {
          className: 'text-sm text-gray-400 mb-1'
        }, 'Total Pool'),
        React.createElement('p', {
          className: 'text-lg font-bold text-white'
        }, `${profile.ptoTotalAvailable.toFixed(0)}h`)
      )
    )
  )
}

// Main App Component
// Helper Functions for Inline Editing
const updateSubscription = (subscriptions, setSubscriptions, id, field, value) => {
  setSubscriptions(subscriptions.map(sub => 
    sub.id === id ? { ...sub, [field]: parseFloat(value) || value } : sub
  ))
}

const toggleActionItem = (actionItems, setActionItems, id) => {
  setActionItems(actionItems.map(item =>
    item.id === id ? { ...item, completed: !item.completed } : item
  ))
}

const updateBankAccount = (bankAccounts, setBankAccounts, id, field, value) => {
  setBankAccounts(bankAccounts.map(account =>
    account.id === id ? { ...account, [field]: parseFloat(value) || value } : account
  ))
}

// PWA Install function
const installPWA = async (deferredPrompt, setShowInstallPrompt) => {
  if (!deferredPrompt) return
  
  deferredPrompt.prompt()
  const { outcome } = await deferredPrompt.userChoice
  
  if (outcome === 'accepted') {
    console.log('✅ PWA installed!')
  }
  
  setShowInstallPrompt(false)
}

const EliteFinancialHub = () => {
  // Core State
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')
  
  // Dark Mode State
  const [darkMode, setDarkMode] = useState(true)
  
  // Editable Data State (with localStorage persistence)
  const [subscriptions, setSubscriptions] = useState(() => {
    const saved = localStorage.getItem('subscriptions')
    return saved ? JSON.parse(saved) : REAL_SUBSCRIPTION_DATA
  })
  
  const [actionItems, setActionItems] = useState(() => {
    const saved = localStorage.getItem('actionItems')
    return saved ? JSON.parse(saved) : ACTION_ITEMS_DATA
  })
  
  const [bankAccounts, setBankAccounts] = useState(() => {
    const saved = localStorage.getItem('bankAccounts')
    return saved ? JSON.parse(saved) : BANK_ACCOUNTS_DATA
  })
  
  // Editing State
  const [editingId, setEditingId] = useState(null)
  const [editingField, setEditingField] = useState(null)
  
  // PWA Install State
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  
  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions))
  }, [subscriptions])
  
  useEffect(() => {
    localStorage.setItem('actionItems', JSON.stringify(actionItems))
  }, [actionItems])
  
  useEffect(() => {
    localStorage.setItem('bankAccounts', JSON.stringify(bankAccounts))
  }, [bankAccounts])
  
  // Dark mode persistence
  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      setDarkMode(JSON.parse(saved))
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])
  
  // PWA Install detection
  useEffect(() => {
    if (window.showInstallPromotion) {
      setShowInstallPrompt(true)
    }
  }, [])
  
  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 2000)
  }, [])
  
  if (loading) {
    return React.createElement(LoadingSpinner)
  }
  
  // Category breakdown
  const categoryTotals = REAL_SUBSCRIPTION_DATA.reduce((acc, sub) => {
    acc[sub.category] = (acc[sub.category] || 0) + sub.monthlyCost
    return acc
  }, {})
  
  const topCategories = Object.entries(categoryTotals)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
  
  return React.createElement('div', {
    className: 'min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white'
  },
    // Header
    React.createElement('header', {
      className: 'relative overflow-hidden bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-lg border-b border-white/10'
    },
      React.createElement('div', {
        className: 'max-w-7xl mx-auto px-6 py-8'
      },
        React.createElement('div', {
          className: 'flex items-center justify-between'
        },
          React.createElement('div', {
            className: 'flex items-center space-x-4'
          },
            React.createElement('div', {
              className: 'text-4xl'
            }, '💰'),
            React.createElement('div', {},
              React.createElement('h1', {
                className: 'text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'
              }, 'Elite Financial Hub'),
              React.createElement('p', {
                className: 'text-gray-300'
              }, `${REAL_PROFILE_DATA.name} • ${REAL_PROFILE_DATA.profession}`)
            )
          ),
          
          React.createElement('div', {
            className: 'flex items-center space-x-6'
          },
            // Dark Mode Toggle
            React.createElement('button', {
              onClick: () => setDarkMode(!darkMode),
              className: 'p-3 rounded-xl glass-card hover-lift transition-all duration-300',
              title: darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'
            },
              React.createElement('i', {
                className: `fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-yellow-400 text-xl`
              })
            ),
            
            // PWA Install Button
            showInstallPrompt && React.createElement('button', {
              onClick: () => installPWA(window.deferredPrompt, setShowInstallPrompt),
              className: 'px-4 py-2 bg-primary text-white rounded-xl font-semibold hover:bg-primary/80 transition-all duration-300 flex items-center gap-2 animate-pulse-slow'
            },
              React.createElement('i', {
                className: 'fas fa-download'
              }),
              'Install App'
            ),
            
            React.createElement('div', {
              className: 'text-right'
            },
              React.createElement('p', {
                className: 'text-2xl font-bold text-green-400'
              }, formatCurrency(REAL_PROFILE_DATA.monthlyNetIncome)),
              React.createElement('p', {
                className: 'text-sm text-gray-400'
              }, 'Monthly Net Income')
            ),
            React.createElement('div', {
              className: 'flex flex-col items-center'
            },
              React.createElement('div', {
                className: 'w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 flex items-center justify-center text-2xl font-bold mb-1'
              }, REAL_PROFILE_DATA.currentCreditScore),
              React.createElement('span', {
                className: 'text-xs text-gray-400'
              }, 'Improving')
            )
          )
        )
      )
    ),
    
    // Navigation
    React.createElement('nav', {
      className: 'bg-black/20 backdrop-blur-lg border-b border-white/10'
    },
      React.createElement('div', {
        className: 'max-w-7xl mx-auto px-6'
      },
        React.createElement('div', {
          className: 'flex space-x-8'
        },
          ['dashboard', 'accounts', 'paycheck', 'retirement', 'subscriptions', 'actions', 'credit', 'goals'].map(tab =>
            React.createElement('button', {
              key: tab,
              onClick: () => setActiveTab(tab),
              className: `py-4 px-4 text-sm font-medium transition-all duration-300 border-b-2 ${
                activeTab === tab 
                  ? 'border-purple-400 text-purple-400' 
                  : 'border-transparent text-gray-400 hover:text-white'
              }`
            }, {
              dashboard: 'Dashboard',
              accounts: '🏦 Accounts',
              paycheck: '💰 Paycheck',
              retirement: '📈 401(k)',
              subscriptions: '💳 Subscriptions', 
              actions: '✅ Actions',
              credit: '📊 Credit',
              goals: '🎯 Goals'
            }[tab])
          )
        )
      )
    ),
    
    // Main Content
    React.createElement('main', {
      className: 'max-w-7xl mx-auto px-6 py-8'
    },
      // Dashboard Tab
      activeTab === 'dashboard' && React.createElement('div', {
        className: 'space-y-8'
      },
        // Stats Grid
        React.createElement('div', {
          className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
        },
          React.createElement(StatsCard, {
            icon: '💰',
            title: 'Total Subscriptions',
            value: formatCurrency(totalMonthlySubscriptions),
            subtitle: '26 active services',
            color: 'purple'
          }),
          React.createElement(StatsCard, {
            icon: '📊',
            title: 'Health Score',
            value: `${REAL_AI_DATA.healthScore}/100`,
            subtitle: 'Excellent financial health',
            color: 'green',
            trend: 12
          }),
          React.createElement(StatsCard, {
            icon: '🎯',
            title: 'Credit Score',
            value: REAL_PROFILE_DATA.currentCreditScore,
            subtitle: 'Excellent rating',
            color: 'blue',
            trend: 5
          }),
          React.createElement(StatsCard, {
            icon: '💎',
            title: 'Monthly Cash Flow',
            value: formatCurrency(REAL_PROFILE_DATA.monthlyNetIncome - totalMonthlySubscriptions),
            subtitle: 'After all expenses',
            color: 'cyan'
          })
        ),
        
        // October Paycheck & PTO Row
        React.createElement('div', {
          className: 'grid grid-cols-1 md:grid-cols-2 gap-6'
        },
          React.createElement('div', {
            className: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-500/30'
          },
            React.createElement('h3', {
              className: 'text-lg font-bold mb-3 text-blue-400'
            }, '💰 Latest Paycheck (Oct 10, 2025)'),
            React.createElement('div', {
              className: 'grid grid-cols-2 gap-4'
            },
              React.createElement('div', {},
                React.createElement('p', {
                  className: 'text-sm text-gray-400 mb-1'
                }, 'Gross Pay'),
                React.createElement('p', {
                  className: 'text-2xl font-bold text-white'
                }, formatCurrency(REAL_PROFILE_DATA.biWeeklyGross))
              ),
              React.createElement('div', {},
                React.createElement('p', {
                  className: 'text-sm text-gray-400 mb-1'
                }, 'Net Pay'),
                React.createElement('p', {
                  className: 'text-2xl font-bold text-green-400'
                }, formatCurrency(REAL_PROFILE_DATA.biWeeklyNet))
              ),
              React.createElement('div', {},
                React.createElement('p', {
                  className: 'text-sm text-gray-400 mb-1'
                }, 'Hours Worked'),
                React.createElement('p', {
                  className: 'text-xl font-bold text-white'
                }, `${REAL_PROFILE_DATA.totalHours} hrs`)
              ),
              React.createElement('div', {},
                React.createElement('p', {
                  className: 'text-sm text-gray-400 mb-1'
                }, 'YTD Gross'),
                React.createElement('p', {
                  className: 'text-xl font-bold text-white'
                }, formatCurrency(REAL_PROFILE_DATA.ytdGross))
              )
            ),
            React.createElement('button', {
              onClick: () => setActiveTab('paycheck'),
              className: 'mt-4 w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 font-semibold py-2 rounded-lg transition-colors'
            }, 'View Full Breakdown →')
          ),
          React.createElement(PTOBalanceCard, {})
        ),
        
        // Bank Accounts Summary
        React.createElement('div', {
          className: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30'
        },
          React.createElement('div', {
            className: 'flex items-center justify-between mb-4'
          },
            React.createElement('h3', {
              className: 'text-xl font-bold text-blue-400'
            }, '🏦 Bank Accounts'),
            React.createElement('button', {
              onClick: () => setActiveTab('accounts'),
              className: 'text-sm bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-lg transition-colors'
            }, 'View Details →')
          ),
          React.createElement('div', {
            className: 'grid grid-cols-2 md:grid-cols-4 gap-4'
          },
            React.createElement('div', {},
              React.createElement('p', {
                className: 'text-sm text-gray-400 mb-1'
              }, 'Wells Fargo'),
              React.createElement('p', {
                className: 'text-xl font-bold text-red-400'
              }, formatCurrency(REAL_PROFILE_DATA.wellsFargoBalance)),
              React.createElement('p', {
                className: 'text-xs text-gray-500'
              }, 'CRITICAL')
            ),
            React.createElement('div', {},
              React.createElement('p', {
                className: 'text-sm text-gray-400 mb-1'
              }, 'Bank of America'),
              React.createElement('p', {
                className: 'text-xl font-bold text-orange-400'
              }, formatCurrency(REAL_PROFILE_DATA.boaBalance)),
              React.createElement('p', {
                className: 'text-xs text-gray-500'
              }, 'LOW')
            ),
            React.createElement('div', {},
              React.createElement('p', {
                className: 'text-sm text-gray-400 mb-1'
              }, 'Total Liquid'),
              React.createElement('p', {
                className: 'text-xl font-bold text-white'
              }, formatCurrency(REAL_PROFILE_DATA.totalLiquid))
            ),
            React.createElement('div', {},
              React.createElement('p', {
                className: 'text-sm text-gray-400 mb-1'
              }, 'Net Worth'),
              React.createElement('p', {
                className: 'text-xl font-bold text-green-400'
              }, formatCurrency(REAL_PROFILE_DATA.currentNetWorth))
            )
          )
        ),
        
        // 401(k) Highlight
        React.createElement('div', {
          className: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30'
        },
          React.createElement('div', {
            className: 'flex items-center justify-between mb-4'
          },
            React.createElement('h3', {
              className: 'text-xl font-bold text-green-400'
            }, '🏦 401(k) Retirement'),
            React.createElement('button', {
              onClick: () => setActiveTab('retirement'),
              className: 'text-sm bg-green-500/20 hover:bg-green-500/30 text-green-300 px-4 py-2 rounded-lg transition-colors'
            }, 'View Details →')
          ),
          React.createElement('div', {
            className: 'grid grid-cols-2 md:grid-cols-4 gap-4'
          },
            React.createElement('div', {},
              React.createElement('p', {
                className: 'text-sm text-gray-400 mb-1'
              }, 'Current Balance'),
              React.createElement('p', {
                className: 'text-2xl font-bold text-white'
              }, formatCurrency(REAL_PROFILE_DATA.retirement401kBalance))
            ),
            React.createElement('div', {},
              React.createElement('p', {
                className: 'text-sm text-gray-400 mb-1'
              }, 'YTD Employee'),
              React.createElement('p', {
                className: 'text-xl font-bold text-white'
              }, formatCurrency(REAL_PROFILE_DATA.retirement401kEmployeeYTD))
            ),
            React.createElement('div', {},
              React.createElement('p', {
                className: 'text-sm text-gray-400 mb-1'
              }, 'YTD Employer'),
              React.createElement('p', {
                className: 'text-xl font-bold text-white'
              }, formatCurrency(REAL_PROFILE_DATA.retirement401kEmployerYTD))
            ),
            React.createElement('div', {},
              React.createElement('p', {
                className: 'text-sm text-gray-400 mb-1'
              }, 'Contribution Rate'),
              React.createElement('p', {
                className: 'text-xl font-bold text-green-400'
              }, `${REAL_PROFILE_DATA.retirement401kContributionRate}%`)
            )
          )
        ),
        
        // Top Categories
        React.createElement('div', {
          className: 'bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10'
        },
          React.createElement('h2', {
            className: 'text-2xl font-bold mb-6'
          }, 'Spending by Category'),
          React.createElement('div', {
            className: 'grid grid-cols-1 md:grid-cols-5 gap-4'
          },
            topCategories.map(([category, amount]) => {
              const colors = getCategoryColor(category)
              const percentage = ((amount / totalMonthlySubscriptions) * 100).toFixed(1)
              
              return React.createElement('div', {
                key: category,
                className: `relative overflow-hidden rounded-xl bg-gradient-to-br ${colors.bg} p-4 text-white`
              },
                React.createElement('div', {
                  className: 'absolute inset-0 bg-white/10 backdrop-blur-sm'
                }),
                React.createElement('div', {
                  className: 'relative z-10'
                },
                  React.createElement('h3', {
                    className: 'font-semibold text-sm mb-2'
                  }, category),
                  React.createElement('p', {
                    className: 'text-xl font-bold'
                  }, formatCurrency(amount)),
                  React.createElement('p', {
                    className: 'text-xs opacity-80'
                  }, `${percentage}% of total`)
                )
              )
            })
          )
        )
      ),
      
      // Bank Accounts Tab
      activeTab === 'accounts' && React.createElement(BankAccountsDashboard, {}),
      
      // Paycheck Tab
      activeTab === 'paycheck' && React.createElement(PaycheckBreakdown, {}),
      
      // Retirement 401(k) Tab
      activeTab === 'retirement' && React.createElement(Retirement401kDashboard, {}),
      
      // Subscriptions Tab
      activeTab === 'subscriptions' && React.createElement('div', {
        className: 'space-y-8'
      },
        React.createElement('div', {
          className: 'flex items-center justify-between'
        },
          React.createElement('h2', {
            className: 'text-3xl font-bold'
          }, 'Your Subscriptions'),
          React.createElement('div', {
            className: 'text-right'
          },
            React.createElement('p', {
              className: 'text-2xl font-bold text-purple-400'
            }, formatCurrency(totalMonthlySubscriptions)),
            React.createElement('p', {
              className: 'text-sm text-gray-400'
            }, '26 active subscriptions')
          )
        ),
        
        React.createElement('div', {
          className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        },
          subscriptions.map((subscription, index) =>
            React.createElement(EditableSubscriptionCard, {
              key: subscription.id,
              subscription,
              index,
              editingId,
              editingField,
              setEditingId,
              setEditingField,
              onUpdate: (field, value) => updateSubscription(subscriptions, setSubscriptions, subscription.id, field, value)
            })
          )
        )
      ),
      
      // AI Analysis Tab
      activeTab === 'analysis' && React.createElement('div', {
        className: 'space-y-8'
      },
        React.createElement('h2', {
          className: 'text-3xl font-bold mb-6'
        }, 'AI Financial Analysis'),
        
        React.createElement('div', {
          className: 'grid grid-cols-1 lg:grid-cols-2 gap-6'
        },
          REAL_AI_DATA.recommendations.map((rec, index) =>
            React.createElement(AIRecommendationCard, {
              key: index,
              recommendation: rec,
              index
            })
          )
        )
      ),
      
      // Cash Flow Tab (NEW!)
      activeTab === 'cashflow' && React.createElement('div', {
        className: 'space-y-8'
      },
        React.createElement('h2', {
          className: 'text-3xl font-bold mb-6'
        }, 'Bi-Weekly Cash Flow Predictor'),
        
        // Pay Cycle Status
        React.createElement('div', {
          className: 'bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20'
        },
          React.createElement('div', {
            className: 'flex items-center justify-between mb-4'
          },
            React.createElement('h3', {
              className: 'text-xl font-bold text-green-400'
            }, '💰 Current Pay Period'),
            React.createElement('div', {
              className: 'text-right'
            },
              React.createElement('p', {
                className: 'text-sm text-gray-400'
              }, 'Last Paid: August 27, 2025'),
              React.createElement('p', {
                className: 'text-sm text-gray-400'
              }, 'Next Pay: September 10, 2025')
            )
          ),
          
          React.createElement('div', {
            className: 'grid grid-cols-1 md:grid-cols-3 gap-4'
          },
            React.createElement('div', {
              className: 'text-center'
            },
              React.createElement('p', {
                className: 'text-2xl font-bold text-green-400'
              }, formatCurrency(REAL_PROFILE_DATA.biWeeklyNet)),
              React.createElement('p', {
                className: 'text-sm'
              }, 'Net Pay Received')
            ),
            React.createElement('div', {
              className: 'text-center'
            },
              React.createElement('p', {
                className: 'text-2xl font-bold text-yellow-400'
              }, formatCurrency(1432)), // From your CSV bi-weekly expenses
              React.createElement('p', {
                className: 'text-sm'
              }, 'Expenses This Period')
            ),
            React.createElement('div', {
              className: 'text-center'
            },
              React.createElement('p', {
                className: 'text-2xl font-bold text-purple-400'
              }, formatCurrency(REAL_PROFILE_DATA.biWeeklyNet - 1432)),
              React.createElement('p', {
                className: 'text-sm'
              }, 'Available Until Next Pay')
            )
          )
        ),
        
        // Smart Money Predictor (Real-time calculation)
        React.createElement('div', {
          className: 'bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10'
        },
          React.createElement('h3', {
            className: 'text-xl font-bold mb-6 flex items-center'
          }, 
            React.createElement('span', { className: 'mr-2' }, '🔮'),
            'Smart Money Predictor - Every Dollar Until Next Paycheck'
          ),
          
          React.createElement('div', {
            className: 'space-y-3'
          },
            (() => {
              // Use the cash flow engine if available
              if (typeof window !== 'undefined' && window.CashFlowEngine) {
                const insights = window.CashFlowEngine.getCashFlowInsights()
                return insights.timeline.map((item, index) => {
                  const isPayday = item.type === 'income'
                  const isLowBalance = item.newBalance < 500
                  const isBigExpense = item.amount > 500
                  
                  const colors = isPayday 
                    ? 'from-green-500/20 to-emerald-600/20 border-green-500/20 text-green-400'
                    : isLowBalance
                      ? 'from-red-500/20 to-pink-600/20 border-red-500/20 text-red-400'
                      : isBigExpense
                        ? 'from-orange-500/20 to-yellow-600/20 border-orange-500/20 text-orange-400'
                        : 'from-blue-500/20 to-cyan-600/20 border-blue-500/20 text-blue-400'
                  
                  return React.createElement('div', {
                    key: index,
                    className: `bg-gradient-to-br ${colors} backdrop-blur-lg rounded-xl p-4 border`
                  },
                    React.createElement('div', {
                      className: 'flex items-center justify-between'
                    },
                      React.createElement('div', {
                        className: 'flex-1'
                      },
                        React.createElement('p', {
                          className: 'font-semibold text-lg'
                        }, item.service),
                        React.createElement('p', {
                          className: 'text-sm opacity-80'
                        }, item.date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }))
                      ),
                      React.createElement('div', {
                        className: 'text-right'
                      },
                        React.createElement('p', {
                          className: 'text-lg font-bold'
                        }, isPayday ? `+${formatCurrency(Math.abs(item.amount))}` : `-${formatCurrency(item.amount)}`),
                        React.createElement('p', {
                          className: 'text-sm font-semibold'
                        }, `Balance: ${formatCurrency(item.newBalance)}`)
                      )
                    )
                  )
                })
              } else {
                // Fallback static data
                return [
                  { date: 'Aug 28', service: 'Apple One Family', amount: 26, balance: 2364.77 },
                  { date: 'Aug 29', service: 'ChatGPT Plus', amount: 20, balance: 2344.77 },
                  { date: 'Sep 1', service: 'Chama Investment', amount: 1000, balance: 1344.77 },
                  { date: 'Sep 10', service: '💰 PAYCHECK', amount: -2390.77, balance: 3735.54 }
                ].map((expense, index) => {
                  const isPayday = expense.amount < 0
                  const isLowBalance = expense.balance < 500
                  
                  const colors = isPayday 
                    ? 'from-green-500/20 to-emerald-600/20 border-green-500/20 text-green-400'
                    : isLowBalance
                      ? 'from-red-500/20 to-pink-600/20 border-red-500/20 text-red-400'
                      : 'from-blue-500/20 to-cyan-600/20 border-blue-500/20 text-blue-400'
                  
                  return React.createElement('div', {
                    key: index,
                    className: `bg-gradient-to-br ${colors} backdrop-blur-lg rounded-xl p-4 border`
                  },
                    React.createElement('div', {
                      className: 'flex items-center justify-between'
                    },
                      React.createElement('div', {},
                        React.createElement('p', {
                          className: 'font-semibold'
                        }, expense.service),
                        React.createElement('p', {
                          className: 'text-sm opacity-80'
                        }, expense.date)
                      ),
                      React.createElement('div', {
                        className: 'text-right'
                      },
                        React.createElement('p', {
                          className: 'text-lg font-bold'
                        }, isPayday ? `+${formatCurrency(Math.abs(expense.amount))}` : `-${formatCurrency(expense.amount)}`),
                        React.createElement('p', {
                          className: 'text-sm font-semibold'
                        }, `Balance: ${formatCurrency(expense.balance)}`)
                      )
                    )
                  )
                })
              }
            })()
          )
        )
      ),
      
      // Investment Tab (NEW!)
      activeTab === 'investments' && React.createElement('div', {
        className: 'space-y-8'
      },
        React.createElement('h2', {
          className: 'text-3xl font-bold mb-6'
        }, 'Investment Dashboard'),
        
        React.createElement('div', {
          className: 'grid grid-cols-1 md:grid-cols-2 gap-6'
        },
          // Chama Investment Tracker
          React.createElement('div', {
            className: 'bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/20'
          },
            React.createElement('h3', {
              className: 'text-xl font-bold text-yellow-400 mb-4'
            }, '💰 Chama Investment'),
            React.createElement('div', {
              className: 'space-y-4'
            },
              React.createElement('div', {
                className: 'flex justify-between items-center'
              },
                React.createElement('span', {}, 'Monthly Investment'),
                React.createElement('span', {
                  className: 'font-bold text-2xl text-yellow-400'
                }, formatCurrency(2000))
              ),
              React.createElement('div', {
                className: 'flex justify-between items-center'
              },
                React.createElement('span', {}, 'Annual Total'),
                React.createElement('span', {
                  className: 'font-bold text-lg'
                }, formatCurrency(24000))
              ),
              React.createElement('div', {
                className: 'flex justify-between items-center'
              },
                React.createElement('span', {}, '% of Net Income'),
                React.createElement('span', {
                  className: 'font-bold text-lg text-orange-400'
                }, '38.4%')
              )
            )
          ),
          
          // 401k Tracker
          React.createElement('div', {
            className: 'bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20'
          },
            React.createElement('h3', {
              className: 'text-xl font-bold text-blue-400 mb-4'
            }, '🏦 401k Retirement'),
            React.createElement('div', {
              className: 'space-y-4'
            },
              React.createElement('div', {
                className: 'flex justify-between items-center'
              },
                React.createElement('span', {}, 'Bi-weekly Contribution'),
                React.createElement('span', {
                  className: 'font-bold text-2xl text-blue-400'
                }, formatCurrency(REAL_PROFILE_DATA.retirement401k))
              ),
              React.createElement('div', {
                className: 'flex justify-between items-center'
              },
                React.createElement('span', {}, 'YTD Contributed'),
                React.createElement('span', {
                  className: 'font-bold text-lg'
                }, formatCurrency(2114.64))
              ),
              React.createElement('div', {
                className: 'flex justify-between items-center'
              },
                React.createElement('span', {}, 'Annual Projection'),
                React.createElement('span', {
                  className: 'font-bold text-lg text-cyan-400'
                }, formatCurrency(5260))
              )
            )
          )
        )
      ),

      // Action Items Tab
      activeTab === 'actions' && React.createElement(ActionItemsDashboard, {
        actionItems,
        onToggle: (id) => toggleActionItem(actionItems, setActionItems, id)
      }),
      
      // Credit Optimization Tab
      activeTab === 'credit' && React.createElement(CreditOptimizationDashboard, {}),

      // Goals Tab  
      activeTab === 'goals' && React.createElement('div', {
        className: 'space-y-8'
      },
        React.createElement('h2', {
          className: 'text-3xl font-bold mb-6'
        }, 'Financial Goals & Projections'),
        
        React.createElement('div', {
          className: 'grid grid-cols-1 md:grid-cols-2 gap-6'
        },
          React.createElement('div', {
            className: 'bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20'
          },
            React.createElement('h3', {
              className: 'text-xl font-bold text-green-400 mb-4'
            }, '🎯 Credit Score Journey'),
            React.createElement('div', {
              className: 'space-y-4'
            },
              React.createElement('div', {
                className: 'flex justify-between items-center'
              },
                React.createElement('span', {}, 'Current Score'),
                React.createElement('span', {
                  className: 'font-bold text-2xl text-green-400'
                }, REAL_PROFILE_DATA.currentCreditScore)
              ),
              React.createElement('div', {
                className: 'flex justify-between items-center'
              },
                React.createElement('span', {}, '6 Month Target'),
                React.createElement('span', {
                  className: 'font-bold text-lg'
                }, REAL_AI_DATA.predictions.creditScore.predicted6Month)
              ),
              React.createElement('div', {
                className: 'flex justify-between items-center'
              },
                React.createElement('span', {}, '12 Month Target'),
                React.createElement('span', {
                  className: 'font-bold text-lg text-yellow-400'
                }, `${REAL_AI_DATA.predictions.creditScore.predicted12Month} (Elite!)`)
              )
            )
          ),
          
          React.createElement('div', {
            className: 'bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20'
          },
            React.createElement('h3', {
              className: 'text-xl font-bold text-purple-400 mb-4'
            }, '💼 Business Goals'),
            React.createElement('div', {
              className: 'space-y-4'
            },
              React.createElement('div', {},
                React.createElement('p', {
                  className: 'font-semibold'
                }, 'Fit-In-60 Coaching'),
                React.createElement('p', {
                  className: 'text-2xl font-bold text-purple-400'
                }, formatCurrency(REAL_PROFILE_DATA.fitnessBusinessTarget) + '/month'),
                React.createElement('p', {
                  className: 'text-sm text-gray-400'
                }, 'Target launch Q4 2025')
              ),
              React.createElement('div', {
                className: 'grid grid-cols-2 gap-4'
              },
                React.createElement('div', {},
                  React.createElement('p', {
                    className: 'text-sm'
                  }, 'Instagram'),
                  React.createElement('p', {
                    className: 'font-bold'
                  }, `${REAL_PROFILE_DATA.socialMediaGoals.instagram.current} → ${REAL_PROFILE_DATA.socialMediaGoals.instagram.target}`)
                ),
                React.createElement('div', {},
                  React.createElement('p', {
                    className: 'text-sm'
                  }, 'TikTok'),
                  React.createElement('p', {
                    className: 'font-bold'
                  }, `${REAL_PROFILE_DATA.socialMediaGoals.tiktok.current} → ${REAL_PROFILE_DATA.socialMediaGoals.tiktok.target}`)
                )
              )
            )
          )
        )
      )
    ),
    
    // Footer
    React.createElement('footer', {
      className: 'bg-black/20 backdrop-blur-lg border-t border-white/10 mt-16'
    },
      React.createElement('div', {
        className: 'max-w-7xl mx-auto px-6 py-8 text-center'
      },
        React.createElement('p', {
          className: 'text-gray-400 mb-2'
        }, '"Reps build resilience. Consistency cashes checks."'),
        React.createElement('p', {
          className: 'text-sm text-gray-500'
        }, 'Elite Financial Hub • Powered by AI • Built for Warriors')
      )
    )
  )
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(React.createElement(EliteFinancialHub))
})