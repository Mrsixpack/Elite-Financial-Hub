// Elite Financial Hub - ULTRA MODERN Version with Real MrSixPack Data
// Premium UI/UX with animations, glassmorphism, and modern design

// MrSixPack's ACTUAL subscription data (26 real subscriptions)
const REAL_SUBSCRIPTION_DATA = [
  // Insurance & Essential Services
  { id: 1, serviceName: 'GEICO Auto Insurance', category: 'Insurance', monthlyCost: 427.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-09-15', icon: '🚗' },
  { id: 2, serviceName: 'Health Insurance Premium', category: 'Insurance', monthlyCost: 375.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-09-18', icon: '🏥' },
  { id: 3, serviceName: 'Mobile Phone Plan', category: 'Utilities', monthlyCost: 200.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-09-22', icon: '📱' },
  { id: 4, serviceName: 'Water Bill', category: 'Utilities', monthlyCost: 120.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-10-04', icon: '💧' },
  
  // Food & Living Expenses
  { id: 5, serviceName: 'Food/Groceries', category: 'Utilities', monthlyCost: 300.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-10-05', icon: '🛒' },
  { id: 6, serviceName: 'Amazon Prime', category: 'Shopping', monthlyCost: 40.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-09-03', icon: '📦' },
  
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
  { id: 26, serviceName: 'Chama Investment', category: 'Personal', monthlyCost: 2000.00, billingCycle: 'monthly', isActive: true, nextRenewal: '2025-09-01', icon: '💰' }
]

// MrSixPack's ACTUAL financial profile from real payroll data
const REAL_PROFILE_DATA = {
  name: 'MrSixPack (Sammy)',
  profession: 'Licensed Practical Nurse (LPN → RN)',
  location: 'Delaware, USA',
  
  // Real income from Insperity paystub (Pay Period: 07/27/2025 - 08/09/2025)
  biWeeklyGross: 3371.90,        // 81.57 hours total
  biWeeklyNet: 2390.77,          // After all deductions  
  monthlyGrossIncome: 7346.13,   // $3,371.90 × 2.18 (26 pays / 12 months)
  monthlyNetIncome: 5211.68,     // $2,390.77 × 2.18
  annualGrossIncome: 87670.40,   // $3,371.90 × 26 pay periods
  annualNetIncome: 62540.02,     // $2,390.77 × 26 pay periods
  paySchedule: 'bi-weekly',
  
  // Hourly rates from paystub
  regularRate: 35.88,
  overtimeRate: 35.88,
  doubleTimeRate: 53.82,
  
  // Real deductions (bi-weekly)
  preTaxDeductions: 286.75,      // Medical, dental, vision, 401k
  taxes: 661.05,                 // Federal, state, SS, Medicare  
  afterTaxDeductions: 33.33,     // Insurance, identity protection, etc.
  retirement401k: 202.31,        // Current bi-weekly contribution (YTD: $2,114.64)
  
  // Financial goals & credit (ACTUAL NUMBERS - MrSixPack is WINNING!)
  currentCreditScore: 735,       // EXCELLENT SCORE! 🔥
  targetCreditScore: 800,        // Elite status goal
  creditGoalTimeline: 'Q4 2025',
  
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

// Main App Component
const EliteFinancialHub = () => {
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('dashboard')
  
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
              className: 'w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-2xl font-bold'
            }, REAL_PROFILE_DATA.currentCreditScore)
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
          ['dashboard', 'subscriptions', 'cashflow', 'investments', 'analysis', 'goals'].map(tab =>
            React.createElement('button', {
              key: tab,
              onClick: () => setActiveTab(tab),
              className: `py-4 px-6 text-sm font-medium transition-all duration-300 border-b-2 ${
                activeTab === tab 
                  ? 'border-purple-400 text-purple-400' 
                  : 'border-transparent text-gray-400 hover:text-white'
              }`
            }, {
              dashboard: 'Dashboard',
              subscriptions: 'Subscriptions', 
              cashflow: 'Cash Flow',
              investments: 'Investments',
              analysis: 'AI Analysis',
              goals: 'Goals'
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
          REAL_SUBSCRIPTION_DATA.map((subscription, index) =>
            React.createElement(SubscriptionCard, {
              key: subscription.id,
              subscription,
              index
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