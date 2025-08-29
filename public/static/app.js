// Elite Financial Hub - Professional React Application
// Built with modern React patterns and TypeScript-style JavaScript

import React from 'https://esm.sh/react@18'
import ReactDOM from 'https://esm.sh/react-dom@18'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'https://esm.sh/chart.js@4'
import { Doughnut, Bar } from 'https://esm.sh/react-chartjs-2@5'

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

// ============================================================================
// HOOKS AND UTILITIES
// ============================================================================

const { useState, useEffect, useCallback, useMemo } = React

// API utilities
const api = {
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer demo-token' // In production, get from auth context
  },
  
  async get(endpoint) {
    const response = await fetch(`${this.baseURL}${endpoint}`, { headers: this.headers })
    return response.json()
  },
  
  async post(endpoint, data) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    })
    return response.json()
  },
  
  async put(endpoint, data) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(data)
    })
    return response.json()
  },
  
  async delete(endpoint) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'DELETE',
      headers: this.headers
    })
    return response.json()
  }
}

// Format currency safely
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount || 0)
}

// Format percentage
const formatPercent = (value) => {
  return `${(value || 0).toFixed(1)}%`
}

// ============================================================================
// DASHBOARD COMPONENTS
// ============================================================================

const MetricCard = ({ title, value, subtitle, icon, trend, color = 'primary' }) => (
  React.createElement('div', {
    className: `bg-white rounded-lg shadow-lg p-6 border-l-4 border-${color}-500 transition-all hover:shadow-xl`
  },
    React.createElement('div', { className: 'flex items-center justify-between' },
      React.createElement('div', null,
        React.createElement('h3', { className: 'text-sm font-medium text-gray-500' }, title),
        React.createElement('p', { className: 'text-2xl font-bold text-gray-900 mt-1' }, value),
        subtitle && React.createElement('p', { className: 'text-sm text-gray-600 mt-1' }, subtitle)
      ),
      React.createElement('div', { className: `text-${color}-500 text-3xl` },
        React.createElement('i', { className: icon })
      )
    ),
    trend && React.createElement('div', { className: 'mt-4 flex items-center' },
      React.createElement('span', { 
        className: `text-sm font-medium ${trend.value >= 0 ? 'text-green-600' : 'text-red-600'}`
      }, 
        `${trend.value >= 0 ? '+' : ''}${trend.value}%`
      ),
      React.createElement('span', { className: 'text-sm text-gray-500 ml-2' }, trend.label)
    )
  )
)

const SubscriptionList = ({ subscriptions, onUpdate, onDelete }) => (
  React.createElement('div', { className: 'bg-white rounded-lg shadow-lg p-6' },
    React.createElement('h3', { className: 'text-lg font-semibold mb-4 flex items-center' },
      React.createElement('i', { className: 'fas fa-credit-card mr-2 text-primary-500' }),
      'Active Subscriptions'
    ),
    React.createElement('div', { className: 'space-y-3' },
      subscriptions.map(sub => 
        React.createElement('div', { 
          key: sub.id, 
          className: 'flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors' 
        },
          React.createElement('div', { className: 'flex-1' },
            React.createElement('h4', { className: 'font-medium text-gray-900' }, sub.service_name || sub.serviceName),
            React.createElement('p', { className: 'text-sm text-gray-500' }, 
              `${sub.category} • ${sub.billing_cycle || 'monthly'}`
            )
          ),
          React.createElement('div', { className: 'text-right' },
            React.createElement('p', { className: 'font-semibold text-gray-900' }, 
              formatCurrency(sub.monthly_cost || sub.monthlyCost)
            ),
            React.createElement('p', { className: 'text-xs text-gray-500' }, '/month')
          ),
          React.createElement('div', { className: 'ml-4 flex space-x-2' },
            React.createElement('button', {
              onClick: () => onUpdate(sub),
              className: 'text-blue-600 hover:text-blue-800 transition-colors'
            },
              React.createElement('i', { className: 'fas fa-edit' })
            ),
            React.createElement('button', {
              onClick: () => onDelete(sub.id),
              className: 'text-red-600 hover:text-red-800 transition-colors'
            },
              React.createElement('i', { className: 'fas fa-trash' })
            )
          )
        )
      )
    )
  )
)

const BudgetAnalysisChart = ({ data }) => {
  const chartData = useMemo(() => ({
    labels: ['Income', 'Expenses', 'Remaining'],
    datasets: [{
      data: [data.netIncome, data.totalExpenses, Math.max(0, data.remainingCashFlow)],
      backgroundColor: ['#10B981', '#EF4444', '#F59E0B'],
      borderColor: ['#059669', '#DC2626', '#D97706'],
      borderWidth: 2
    }]
  }), [data])
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${formatCurrency(context.raw)}`
          }
        }
      }
    }
  }
  
  return React.createElement('div', { className: 'bg-white rounded-lg shadow-lg p-6' },
    React.createElement('h3', { className: 'text-lg font-semibold mb-4 flex items-center' },
      React.createElement('i', { className: 'fas fa-chart-pie mr-2 text-secondary-500' }),
      'Bi-Weekly Cash Flow Analysis'
    ),
    React.createElement('div', { className: 'h-64' },
      React.createElement(Doughnut, { data: chartData, options })
    ),
    React.createElement('div', { className: 'mt-4 grid grid-cols-2 gap-4' },
      React.createElement('div', { className: 'text-center' },
        React.createElement('p', { className: 'text-sm text-gray-500' }, 'Savings Rate'),
        React.createElement('p', { className: 'text-lg font-semibold text-primary-600' }, 
          formatPercent(data.savingsRate)
        )
      ),
      React.createElement('div', { className: 'text-center' },
        React.createElement('p', { className: 'text-sm text-gray-500' }, 'Cash Flow'),
        React.createElement('p', { 
          className: `text-lg font-semibold ${data.remainingCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`
        }, 
          formatCurrency(data.remainingCashFlow)
        )
      )
    )
  )
}

const AIInsights = ({ aiData, onRefresh }) => (
  React.createElement('div', { className: 'bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg shadow-lg p-6 text-white' },
    React.createElement('div', { className: 'flex items-center justify-between mb-4' },
      React.createElement('h3', { className: 'text-lg font-semibold flex items-center' },
        React.createElement('i', { className: 'fas fa-brain mr-2' }),
        'AI Financial Health Analysis'
      ),
      React.createElement('button', {
        onClick: onRefresh,
        className: 'bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-lg transition-colors'
      },
        React.createElement('i', { className: 'fas fa-sync-alt mr-2' }),
        'Refresh'
      )
    ),
    React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
      React.createElement('div', { className: 'bg-white bg-opacity-20 rounded-lg p-4' },
        React.createElement('h4', { className: 'font-semibold mb-2' }, 'Health Score'),
        React.createElement('div', { className: 'flex items-center' },
          React.createElement('div', { className: 'text-3xl font-bold mr-3' }, aiData.healthScore || 0),
          React.createElement('div', { className: 'flex-1' },
            React.createElement('div', { className: 'bg-white bg-opacity-30 rounded-full h-2' },
              React.createElement('div', {
                className: 'bg-white rounded-full h-2 transition-all duration-500',
                style: { width: `${aiData.healthScore || 0}%` }
              })
            )
          )
        ),
        React.createElement('p', { className: 'text-sm mt-2 opacity-90' }, 
          `Confidence: ${formatPercent(aiData.confidenceScore || 0)}`
        )
      ),
      React.createElement('div', { className: 'bg-white bg-opacity-20 rounded-lg p-4' },
        React.createElement('h4', { className: 'font-semibold mb-2' }, 'Top Recommendation'),
        aiData.recommendations && aiData.recommendations.length > 0 ? (
          React.createElement('div', null,
            React.createElement('p', { className: 'font-medium' }, aiData.recommendations[0].title),
            React.createElement('p', { className: 'text-sm opacity-90 mt-1' }, 
              aiData.recommendations[0].description?.substring(0, 100) + '...'
            )
          )
        ) : (
          React.createElement('p', { className: 'text-sm opacity-75' }, 'No recommendations available')
        )
      )
    )
  )
)

const AddSubscriptionModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    serviceName: '',
    category: '',
    monthlyCost: '',
    billingCycle: 'monthly'
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd({
      ...formData,
      monthlyCost: parseFloat(formData.monthlyCost)
    })
    setFormData({
      serviceName: '',
      category: '',
      monthlyCost: '',
      billingCycle: 'monthly'
    })
  }
  
  if (!isOpen) return null
  
  return React.createElement('div', { className: 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50' },
    React.createElement('div', { className: 'bg-white rounded-lg p-6 w-full max-w-md mx-4' },
      React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'Add New Subscription'),
      React.createElement('form', { onSubmit: handleSubmit },
        React.createElement('div', { className: 'space-y-4' },
          React.createElement('div', null,
            React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Service Name'),
            React.createElement('input', {
              type: 'text',
              required: true,
              value: formData.serviceName,
              onChange: (e) => setFormData({...formData, serviceName: e.target.value}),
              className: 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500'
            })
          ),
          React.createElement('div', null,
            React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Category'),
            React.createElement('input', {
              type: 'text',
              required: true,
              value: formData.category,
              onChange: (e) => setFormData({...formData, category: e.target.value}),
              className: 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500'
            })
          ),
          React.createElement('div', null,
            React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Monthly Cost'),
            React.createElement('input', {
              type: 'number',
              step: '0.01',
              required: true,
              value: formData.monthlyCost,
              onChange: (e) => setFormData({...formData, monthlyCost: e.target.value}),
              className: 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500'
            })
          ),
          React.createElement('div', null,
            React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Billing Cycle'),
            React.createElement('select', {
              value: formData.billingCycle,
              onChange: (e) => setFormData({...formData, billingCycle: e.target.value}),
              className: 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500'
            },
              React.createElement('option', { value: 'monthly' }, 'Monthly'),
              React.createElement('option', { value: 'yearly' }, 'Yearly'),
              React.createElement('option', { value: 'quarterly' }, 'Quarterly')
            )
          )
        ),
        React.createElement('div', { className: 'flex justify-end space-x-3 mt-6' },
          React.createElement('button', {
            type: 'button',
            onClick: onClose,
            className: 'px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors'
          }, 'Cancel'),
          React.createElement('button', {
            type: 'submit',
            className: 'bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors'
          }, 'Add Subscription')
        )
      )
    )
  )
}

// ============================================================================
// MAIN APPLICATION
// ============================================================================

const EliteFinancialHub = () => {
  const [subscriptions, setSubscriptions] = useState([])
  const [budgetAnalysis, setBudgetAnalysis] = useState(null)
  const [aiData, setAiData] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  
  // Load initial data
  useEffect(() => {
    loadData()
  }, [])
  
  const loadData = async () => {
    setLoading(true)
    try {
      const [subsResponse, budgetResponse] = await Promise.all([
        api.get('/api/subscriptions'),
        api.get('/api/budget/analysis')
      ])
      
      setSubscriptions(subsResponse.subscriptions || [])
      setBudgetAnalysis(budgetResponse)
    } catch (error) {
      console.error('Error loading data:', error)
    }
    setLoading(false)
  }
  
  const loadAIAnalysis = async () => {
    try {
      const aiResponse = await api.post('/api/ai/analyze')
      setAiData(aiResponse)
    } catch (error) {
      console.error('Error loading AI analysis:', error)
    }
  }
  
  const handleAddSubscription = async (data) => {
    try {
      await api.post('/api/subscriptions', data)
      setIsAddModalOpen(false)
      loadData() // Reload data
    } catch (error) {
      console.error('Error adding subscription:', error)
    }
  }
  
  const handleDeleteSubscription = async (id) => {
    if (confirm('Are you sure you want to delete this subscription?')) {
      try {
        await api.delete(`/api/subscriptions/${id}`)
        loadData() // Reload data
      } catch (error) {
        console.error('Error deleting subscription:', error)
      }
    }
  }
  
  const totalMonthlySubscriptions = subscriptions.reduce((sum, sub) => 
    sum + (parseFloat(sub.monthly_cost || sub.monthlyCost) || 0), 0
  )
  
  if (loading) {
    return React.createElement('div', { className: 'min-h-screen bg-gray-50 flex items-center justify-center' },
      React.createElement('div', { className: 'text-center' },
        React.createElement('div', { className: 'animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto' }),
        React.createElement('p', { className: 'mt-4 text-gray-600' }, 'Loading your financial data...')
      )
    )
  }
  
  return React.createElement('div', { className: 'min-h-screen bg-gray-50' },
    // Header
    React.createElement('header', { className: 'bg-white shadow-sm border-b' },
      React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4' },
        React.createElement('div', { className: 'flex items-center justify-between' },
          React.createElement('div', { className: 'flex items-center' },
            React.createElement('h1', { className: 'text-2xl font-bold text-gray-900 flex items-center' },
              React.createElement('i', { className: 'fas fa-chart-line mr-3 text-primary-500' }),
              'Elite Financial Hub'
            ),
            React.createElement('span', { className: 'ml-4 px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full' },
              'Professional Edition'
            )
          ),
          React.createElement('div', { className: 'flex items-center space-x-4' },
            React.createElement('button', {
              onClick: () => setIsAddModalOpen(true),
              className: 'bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors flex items-center'
            },
              React.createElement('i', { className: 'fas fa-plus mr-2' }),
              'Add Subscription'
            ),
            React.createElement('div', { className: 'flex items-center text-sm text-gray-600' },
              React.createElement('i', { className: 'fas fa-user-circle mr-2' }),
              'MrSixPack'
            )
          )
        )
      )
    ),
    
    // Main Content
    React.createElement('main', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8' },
      // Top Metrics
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8' },
        React.createElement(MetricCard, {
          title: 'Monthly Subscriptions',
          value: formatCurrency(totalMonthlySubscriptions),
          subtitle: `${subscriptions.length} active services`,
          icon: 'fas fa-credit-card',
          color: 'primary'
        }),
        budgetAnalysis && React.createElement(MetricCard, {
          title: 'Bi-Weekly Net Income',
          value: formatCurrency(budgetAnalysis.netIncome),
          subtitle: 'After taxes & deductions',
          icon: 'fas fa-money-bill-wave',
          color: 'green'
        }),
        budgetAnalysis && React.createElement(MetricCard, {
          title: 'Cash Flow',
          value: formatCurrency(budgetAnalysis.remainingCashFlow),
          subtitle: formatPercent(budgetAnalysis.savingsRate) + ' savings rate',
          icon: budgetAnalysis.remainingCashFlow >= 0 ? 'fas fa-arrow-up' : 'fas fa-arrow-down',
          color: budgetAnalysis.remainingCashFlow >= 0 ? 'green' : 'red'
        }),
        aiData && React.createElement(MetricCard, {
          title: 'Financial Health Score',
          value: `${aiData.healthScore}/100`,
          subtitle: `${formatPercent(aiData.confidenceScore)} confidence`,
          icon: 'fas fa-heartbeat',
          color: 'purple'
        })
      ),
      
      // AI Insights
      aiData && React.createElement('div', { className: 'mb-8' },
        React.createElement(AIInsights, { aiData, onRefresh: loadAIAnalysis })
      ),
      
      // Charts and Lists
      React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8' },
        budgetAnalysis && React.createElement(BudgetAnalysisChart, { data: budgetAnalysis }),
        React.createElement(SubscriptionList, {
          subscriptions,
          onUpdate: (sub) => console.log('Update:', sub),
          onDelete: handleDeleteSubscription
        })
      ),
      
      // Load AI Analysis Button
      !aiData && React.createElement('div', { className: 'text-center' },
        React.createElement('button', {
          onClick: loadAIAnalysis,
          className: 'bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors flex items-center mx-auto'
        },
          React.createElement('i', { className: 'fas fa-brain mr-2' }),
          'Generate AI Financial Analysis'
        )
      )
    ),
    
    // Add Subscription Modal
    React.createElement(AddSubscriptionModal, {
      isOpen: isAddModalOpen,
      onClose: () => setIsAddModalOpen(false),
      onAdd: handleAddSubscription
    })
  )
}

// ============================================================================
// RENDER APPLICATION
// ============================================================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(React.createElement(EliteFinancialHub))