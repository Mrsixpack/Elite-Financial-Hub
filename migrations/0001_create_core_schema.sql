-- Elite Financial Hub - Professional Database Schema
-- Migration 0001: Core Schema Creation

-- Users table for authentication and profile management
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- User profiles with financial details
CREATE TABLE IF NOT EXISTS user_profiles (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    monthly_income DECIMAL(10,2) DEFAULT 0,
    bi_weekly_gross DECIMAL(10,2) DEFAULT 0,
    bi_weekly_net DECIMAL(10,2) DEFAULT 0,
    pay_schedule TEXT DEFAULT 'bi-weekly',
    current_credit_score INTEGER DEFAULT 0,
    target_credit_score INTEGER DEFAULT 750,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Professional subscription management
CREATE TABLE IF NOT EXISTS subscriptions (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    service_name TEXT NOT NULL,
    category TEXT NOT NULL,
    monthly_cost DECIMAL(10,2) NOT NULL,
    annual_cost DECIMAL(10,2),
    billing_cycle TEXT DEFAULT 'monthly', -- 'monthly', 'yearly', 'quarterly'
    next_renewal DATE,
    is_active BOOLEAN DEFAULT true,
    provider_id TEXT, -- For external API integrations
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Financial goals with advanced tracking
CREATE TABLE IF NOT EXISTS financial_goals (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    name TEXT NOT NULL,
    target_amount DECIMAL(10,2) NOT NULL,
    current_amount DECIMAL(10,2) DEFAULT 0,
    target_date DATE,
    category TEXT NOT NULL, -- 'emergency', 'debt', 'savings', 'investment'
    priority TEXT DEFAULT 'medium', -- 'high', 'medium', 'low'
    is_completed BOOLEAN DEFAULT false,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Debt management
CREATE TABLE IF NOT EXISTS debts (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    name TEXT NOT NULL,
    balance DECIMAL(10,2) NOT NULL,
    minimum_payment DECIMAL(10,2) NOT NULL,
    interest_rate DECIMAL(5,2) NOT NULL,
    debt_type TEXT NOT NULL, -- 'credit_card', 'student_loan', 'mortgage', 'auto', 'personal'
    account_number TEXT,
    due_date INTEGER, -- Day of month
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Budget categories
CREATE TABLE IF NOT EXISTS budget_categories (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    name TEXT NOT NULL,
    budgeted_amount DECIMAL(10,2) NOT NULL,
    spent_amount DECIMAL(10,2) DEFAULT 0,
    category_type TEXT DEFAULT 'expense', -- 'income', 'expense', 'savings'
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Payroll records (from integration package)
CREATE TABLE IF NOT EXISTS payroll_records (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    pay_period_start DATE NOT NULL,
    pay_period_end DATE NOT NULL,
    gross_pay DECIMAL(10,2) NOT NULL,
    net_pay DECIMAL(10,2) NOT NULL,
    deductions TEXT, -- JSON string for detailed breakdown
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Budget analysis (from integration package)
CREATE TABLE IF NOT EXISTS budget_analysis (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    analysis_period TEXT NOT NULL, -- 'weekly', 'bi-weekly', 'monthly'
    gross_income DECIMAL(10,2) NOT NULL,
    net_income DECIMAL(10,2) NOT NULL,
    total_expenses DECIMAL(10,2) NOT NULL,
    expense_breakdown TEXT, -- JSON string
    remaining_cash_flow DECIMAL(10,2) NOT NULL,
    savings_rate DECIMAL(5,2) NOT NULL,
    analysis_date DATE DEFAULT (date('now')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- AI analysis results
CREATE TABLE IF NOT EXISTS ai_analysis (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    financial_health_score INTEGER NOT NULL,
    recommendations TEXT, -- JSON string
    predictions TEXT, -- JSON string
    insights TEXT, -- JSON string
    confidence_score DECIMAL(5,2) DEFAULT 0,
    analysis_date DATE DEFAULT (date('now')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Notifications system
CREATE TABLE IF NOT EXISTS notifications (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    type TEXT NOT NULL, -- 'renewal', 'budget_alert', 'goal_milestone', 'debt_warning'
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    priority TEXT DEFAULT 'medium', -- 'high', 'medium', 'low'
    scheduled_for DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_active ON subscriptions(is_active);
CREATE INDEX IF NOT EXISTS idx_subscriptions_renewal ON subscriptions(next_renewal);
CREATE INDEX IF NOT EXISTS idx_goals_user_id ON financial_goals(user_id);
CREATE INDEX IF NOT EXISTS idx_debts_user_id ON debts(user_id);
CREATE INDEX IF NOT EXISTS idx_budget_user_id ON budget_categories(user_id);
CREATE INDEX IF NOT EXISTS idx_payroll_user_id ON payroll_records(user_id);
CREATE INDEX IF NOT EXISTS idx_analysis_user_id ON budget_analysis(user_id);
CREATE INDEX IF NOT EXISTS idx_ai_analysis_user_id ON ai_analysis(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_unread ON notifications(user_id, is_read);