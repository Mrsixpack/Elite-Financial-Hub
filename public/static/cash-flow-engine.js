// Elite Financial Hub - Advanced Cash Flow Prediction Engine
// Real-time money flow predictor for MrSixPack

// Real subscription data with exact billing dates and frequencies
const SUBSCRIPTION_SCHEDULE = [
  // Based on MrSixPack's actual renewal dates from CSV
  { service: 'Chama Investment', amount: 1000, day: 1, frequency: 'biweekly', category: 'Investment' },
  { service: 'Amazon Prime', amount: 40, day: 3, frequency: 'monthly', category: 'Shopping' },
  { service: 'YouTube Premium Family', amount: 30, day: 11, frequency: 'monthly', category: 'Entertainment' },
  { service: 'GEICO Auto Insurance', amount: 427, day: 15, frequency: 'monthly', category: 'Insurance' },
  { service: 'Health Insurance Premium', amount: 375, day: 18, frequency: 'monthly', category: 'Insurance' },
  { service: 'Mobile Phone Plan', amount: 200, day: 22, frequency: 'monthly', category: 'Utilities' },
  { service: 'Patreon', amount: 7, day: 25, frequency: 'monthly', category: 'Entertainment' },
  { service: 'Midjourney', amount: 10, day: 26, frequency: 'monthly', category: 'Entertainment' },
  { service: 'ElevenLabs', amount: 22, day: 27, frequency: 'monthly', category: 'Technology' },
  { service: 'Apple One Family', amount: 26, day: 28, frequency: 'monthly', category: 'Entertainment' },
  { service: 'ChatGPT Plus', amount: 20, day: 29, frequency: 'monthly', category: 'Technology' },
  { service: 'Claude Pro', amount: 20, day: 30, frequency: 'monthly', category: 'Technology' },
  { service: 'Gemini Pro', amount: 20, day: 1, frequency: 'monthly', category: 'Technology' },
  { service: 'New York Times', amount: 4, day: 2, frequency: 'monthly', category: 'Technology' },
  { service: 'iCloud Plus', amount: 30, day: 3, frequency: 'monthly', category: 'Technology' },
  { service: 'Water Bill', amount: 120, day: 4, frequency: 'monthly', category: 'Utilities' },
  { service: 'Food/Groceries', amount: 300, day: 5, frequency: 'monthly', category: 'Utilities' }
]

// MrSixPack's pay schedule (bi-weekly)
const PAY_SCHEDULE = {
  lastPayDate: new Date('2025-08-27'), // Yesterday when he got paid
  payAmount: 2390.77, // Net bi-weekly pay
  frequency: 14 // Every 14 days
}

// Calculate next several pay dates
function getNextPayDates(startDate, count = 6) {
  const payDates = []
  let currentDate = new Date(startDate)
  
  for (let i = 0; i < count; i++) {
    currentDate = new Date(currentDate.getTime() + (14 * 24 * 60 * 60 * 1000))
    payDates.push(new Date(currentDate))
  }
  
  return payDates
}

// Calculate upcoming expenses for next 30 days
function getUpcomingExpenses(days = 30) {
  const today = new Date()
  const expenses = []
  
  for (let i = 0; i <= days; i++) {
    const checkDate = new Date(today)
    checkDate.setDate(today.getDate() + i)
    
    SUBSCRIPTION_SCHEDULE.forEach(sub => {
      if (shouldChargeOnDate(sub, checkDate)) {
        expenses.push({
          date: new Date(checkDate),
          service: sub.service,
          amount: sub.amount,
          category: sub.category,
          type: 'expense'
        })
      }
    })
  }
  
  // Add pay dates
  const payDates = getNextPayDates(PAY_SCHEDULE.lastPayDate, 3)
  payDates.forEach(payDate => {
    if (payDate <= new Date(today.getTime() + (days * 24 * 60 * 60 * 1000))) {
      expenses.push({
        date: payDate,
        service: 'Paycheck',
        amount: -PAY_SCHEDULE.payAmount, // Negative = income
        category: 'Income',
        type: 'income'
      })
    }
  })
  
  return expenses.sort((a, b) => a.date - b.date)
}

// Check if subscription should be charged on specific date
function shouldChargeOnDate(subscription, date) {
  const day = date.getDate()
  
  if (subscription.frequency === 'monthly') {
    return day === subscription.day
  }
  
  if (subscription.frequency === 'biweekly') {
    // For bi-weekly, check if it's the right day in the cycle
    const daysSinceEpoch = Math.floor((date - new Date('2025-01-01')) / (24 * 60 * 60 * 1000))
    return (daysSinceEpoch % 14) === (subscription.day - 1)
  }
  
  return false
}

// Calculate running cash flow balance
function calculateCashFlow(startingBalance = 2390.77) {
  const expenses = getUpcomingExpenses(14) // Next 2 weeks until paycheck
  let runningBalance = startingBalance
  const timeline = []
  
  expenses.forEach(expense => {
    const previousBalance = runningBalance
    runningBalance += expense.type === 'income' ? Math.abs(expense.amount) : -expense.amount
    
    timeline.push({
      ...expense,
      previousBalance,
      newBalance: runningBalance,
      change: expense.type === 'income' ? Math.abs(expense.amount) : -expense.amount
    })
  })
  
  return timeline
}

// Get cash flow insights
function getCashFlowInsights() {
  const timeline = calculateCashFlow()
  const endBalance = timeline.length > 0 ? timeline[timeline.length - 1].newBalance : 2390.77
  const totalExpenses = timeline.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0)
  const totalIncome = timeline.filter(t => t.type === 'income').reduce((sum, t) => sum + Math.abs(t.amount), 0)
  
  return {
    timeline,
    endBalance,
    totalExpenses,
    totalIncome,
    netChange: totalIncome - totalExpenses,
    daysUntilPaycheck: Math.ceil((getNextPayDates(PAY_SCHEDULE.lastPayDate, 1)[0] - new Date()) / (24 * 60 * 60 * 1000))
  }
}

// Export for use in main app
if (typeof window !== 'undefined') {
  window.CashFlowEngine = {
    getUpcomingExpenses,
    calculateCashFlow,
    getCashFlowInsights,
    getNextPayDates,
    PAY_SCHEDULE
  }
}