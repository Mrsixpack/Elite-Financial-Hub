-- Elite Financial Hub - Enhanced Paycheck, 401(k), and PTO Tracking
-- Migration 0002: Add comprehensive paycheck breakdown, retirement, and PTO tables

-- Enhanced payroll with detailed October 2025 data structure
CREATE TABLE IF NOT EXISTS payroll_details (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    pay_date DATE NOT NULL,
    pay_period_start DATE NOT NULL,
    pay_period_end DATE NOT NULL,
    
    -- Earnings breakdown
    gross_pay DECIMAL(10,2) NOT NULL,
    net_pay DECIMAL(10,2) NOT NULL,
    
    -- Hours worked
    regular_hours DECIMAL(5,2) DEFAULT 0,
    overtime_hours DECIMAL(5,2) DEFAULT 0,
    double_time_hours DECIMAL(5,2) DEFAULT 0,
    retro_hours DECIMAL(5,2) DEFAULT 0,
    
    -- Pay rates
    regular_rate DECIMAL(10,2) DEFAULT 0,
    overtime_rate DECIMAL(10,2) DEFAULT 0,
    double_time_rate DECIMAL(10,2) DEFAULT 0,
    
    -- Earnings by type
    regular_earnings DECIMAL(10,2) DEFAULT 0,
    overtime_earnings DECIMAL(10,2) DEFAULT 0,
    double_time_earnings DECIMAL(10,2) DEFAULT 0,
    retro_pay DECIMAL(10,2) DEFAULT 0,
    other_earnings DECIMAL(10,2) DEFAULT 0,
    
    -- Pre-tax deductions
    pretax_total DECIMAL(10,2) DEFAULT 0,
    medical_deduction DECIMAL(10,2) DEFAULT 0,
    dental_deduction DECIMAL(10,2) DEFAULT 0,
    vision_deduction DECIMAL(10,2) DEFAULT 0,
    retirement_401k DECIMAL(10,2) DEFAULT 0,
    other_pretax DECIMAL(10,2) DEFAULT 0,
    
    -- Tax withholdings
    tax_total DECIMAL(10,2) DEFAULT 0,
    federal_tax DECIMAL(10,2) DEFAULT 0,
    state_tax DECIMAL(10,2) DEFAULT 0,
    social_security DECIMAL(10,2) DEFAULT 0,
    medicare DECIMAL(10,2) DEFAULT 0,
    
    -- After-tax deductions
    aftertax_total DECIMAL(10,2) DEFAULT 0,
    legal_deduction DECIMAL(10,2) DEFAULT 0,
    identity_fraud_protection DECIMAL(10,2) DEFAULT 0,
    critical_illness DECIMAL(10,2) DEFAULT 0,
    hospital_insurance DECIMAL(10,2) DEFAULT 0,
    accident_insurance DECIMAL(10,2) DEFAULT 0,
    other_aftertax DECIMAL(10,2) DEFAULT 0,
    
    -- Year-to-date totals
    ytd_gross DECIMAL(10,2) DEFAULT 0,
    ytd_net DECIMAL(10,2) DEFAULT 0,
    ytd_federal_tax DECIMAL(10,2) DEFAULT 0,
    ytd_state_tax DECIMAL(10,2) DEFAULT 0,
    ytd_social_security DECIMAL(10,2) DEFAULT 0,
    ytd_medicare DECIMAL(10,2) DEFAULT 0,
    ytd_401k DECIMAL(10,2) DEFAULT 0,
    
    -- Metadata
    employer_name TEXT,
    employee_id TEXT,
    location TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 401(k) Retirement Account tracking
CREATE TABLE IF NOT EXISTS retirement_401k (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    
    -- Account information
    account_number TEXT,
    plan_name TEXT,
    employer_name TEXT,
    
    -- Current balance
    current_balance DECIMAL(12,2) NOT NULL DEFAULT 0,
    vested_balance DECIMAL(12,2) DEFAULT 0,
    
    -- Contribution tracking
    employee_contribution_rate DECIMAL(5,2) DEFAULT 0, -- Percentage
    employer_match_rate DECIMAL(5,2) DEFAULT 0, -- Percentage
    
    -- Year-to-date contributions
    ytd_employee_contribution DECIMAL(10,2) DEFAULT 0,
    ytd_employer_contribution DECIMAL(10,2) DEFAULT 0,
    ytd_total_contribution DECIMAL(10,2) DEFAULT 0,
    
    -- Annual limits and projections
    annual_contribution_limit DECIMAL(10,2) DEFAULT 23000.00, -- 2024/2025 IRS limit
    projected_year_end_balance DECIMAL(12,2) DEFAULT 0,
    projected_retirement_age INTEGER DEFAULT 65,
    
    -- Investment allocation (JSON string)
    investment_allocation TEXT, -- {"stocks": 60, "bonds": 30, "cash": 10}
    
    -- Performance metrics
    ytd_return_percent DECIMAL(6,3) DEFAULT 0,
    lifetime_return_percent DECIMAL(6,3) DEFAULT 0,
    
    -- Last update tracking
    balance_as_of_date DATE DEFAULT (date('now')),
    last_contribution_date DATE,
    last_contribution_amount DECIMAL(10,2) DEFAULT 0,
    
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 401(k) Contribution history
CREATE TABLE IF NOT EXISTS retirement_401k_contributions (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    retirement_account_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    
    contribution_date DATE NOT NULL,
    pay_period_start DATE,
    pay_period_end DATE,
    
    employee_contribution DECIMAL(10,2) NOT NULL DEFAULT 0,
    employer_contribution DECIMAL(10,2) DEFAULT 0,
    total_contribution DECIMAL(10,2) NOT NULL,
    
    contribution_type TEXT DEFAULT 'regular', -- 'regular', 'catch-up', 'match', 'profit-sharing'
    
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (retirement_account_id) REFERENCES retirement_401k(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- PTO (Paid Time Off) tracking
CREATE TABLE IF NOT EXISTS pto_balances (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    
    -- PTO balances (in hours)
    pto_available DECIMAL(6,3) NOT NULL DEFAULT 0,
    pto_used DECIMAL(6,3) DEFAULT 0,
    pto_accrued_ytd DECIMAL(6,3) DEFAULT 0,
    pto_total_available DECIMAL(6,3) DEFAULT 0,
    
    -- Other time off types
    sick_time_available DECIMAL(6,3) DEFAULT 0,
    vacation_available DECIMAL(6,3) DEFAULT 0,
    personal_time_available DECIMAL(6,3) DEFAULT 0,
    floating_holiday DECIMAL(6,3) DEFAULT 0,
    birthday_time DECIMAL(6,3) DEFAULT 0,
    
    -- Accrual information
    pto_accrual_rate DECIMAL(5,3) DEFAULT 0, -- Hours per pay period
    max_pto_balance DECIMAL(6,3) DEFAULT 0,
    
    -- Last update
    balance_as_of_date DATE DEFAULT (date('now')),
    
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- PTO usage history
CREATE TABLE IF NOT EXISTS pto_usage_history (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    
    usage_date DATE NOT NULL,
    hours_used DECIMAL(5,2) NOT NULL,
    pto_type TEXT DEFAULT 'vacation', -- 'vacation', 'sick', 'personal', 'floating'
    reason TEXT,
    status TEXT DEFAULT 'approved', -- 'pending', 'approved', 'denied'
    
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Employer information
CREATE TABLE IF NOT EXISTS employer_info (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    
    employer_name TEXT NOT NULL,
    employer_address TEXT,
    employee_id TEXT,
    hire_date DATE,
    department TEXT,
    job_title TEXT,
    
    -- Pay information
    pay_frequency TEXT DEFAULT 'bi-weekly', -- 'weekly', 'bi-weekly', 'semi-monthly', 'monthly'
    pay_type TEXT DEFAULT 'hourly', -- 'hourly', 'salary'
    base_rate DECIMAL(10,2) DEFAULT 0,
    
    -- Benefits
    health_insurance_provider TEXT,
    dental_insurance_provider TEXT,
    vision_insurance_provider TEXT,
    retirement_plan_provider TEXT,
    
    is_active BOOLEAN DEFAULT true,
    
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_payroll_details_user_id ON payroll_details(user_id);
CREATE INDEX IF NOT EXISTS idx_payroll_details_pay_date ON payroll_details(pay_date DESC);
CREATE INDEX IF NOT EXISTS idx_retirement_401k_user_id ON retirement_401k(user_id);
CREATE INDEX IF NOT EXISTS idx_retirement_contributions_user_id ON retirement_401k_contributions(user_id);
CREATE INDEX IF NOT EXISTS idx_retirement_contributions_date ON retirement_401k_contributions(contribution_date DESC);
CREATE INDEX IF NOT EXISTS idx_pto_balances_user_id ON pto_balances(user_id);
CREATE INDEX IF NOT EXISTS idx_pto_usage_user_id ON pto_usage_history(user_id);
CREATE INDEX IF NOT EXISTS idx_pto_usage_date ON pto_usage_history(usage_date DESC);
CREATE INDEX IF NOT EXISTS idx_employer_info_user_id ON employer_info(user_id);
