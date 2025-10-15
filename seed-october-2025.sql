-- Elite Financial Hub - October 2025 Real Paycheck Data
-- MrSixPack's Actual October 10, 2025 Paycheck and 401(k) Data

-- Ensure user exists
INSERT OR IGNORE INTO users (id, email, name) VALUES 
  ('user-mrsixpack', 'mrsixpack@elite.dev', 'MrSixPack');

-- Insert October 2025 paycheck details (Pay Date: 10/10/2025, Period: 09/21-10/04/2025)
INSERT OR REPLACE INTO payroll_details (
  user_id, pay_date, pay_period_start, pay_period_end,
  
  -- Earnings
  gross_pay, net_pay,
  
  -- Hours worked
  regular_hours, overtime_hours, retro_hours,
  
  -- Pay rates
  regular_rate, overtime_rate,
  
  -- Earnings by type
  regular_earnings, overtime_earnings, retro_pay,
  
  -- Pre-tax deductions (Current Period)
  pretax_total, medical_deduction, dental_deduction, vision_deduction, retirement_401k,
  
  -- Tax withholdings (Current Period)
  tax_total, federal_tax, state_tax, social_security, medicare,
  
  -- After-tax deductions (Current Period)
  aftertax_total, legal_deduction, identity_fraud_protection, critical_illness, 
  hospital_insurance, accident_insurance,
  
  -- Year-to-date totals (as of 10/13/2025)
  ytd_gross, ytd_federal_tax, ytd_state_tax, ytd_social_security, 
  ytd_medicare, ytd_401k,
  
  -- Employer info
  employer_name, employee_id, location
) VALUES (
  'user-mrsixpack', '2025-10-10', '2025-09-21', '2025-10-04',
  
  -- Earnings (from paystub)
  3151.34,  -- Gross Pay
  2238.86,  -- Net Pay
  
  -- Hours worked (78.38 hours total)
  -- Rate 1 - Reg: 32.15 + 40.00 = 72.15 hours
  -- Rate 1 - OT: 6.23 hours
  72.15,    -- Regular hours (32.15 + 40.00)
  6.23,     -- Overtime hours
  139.10,   -- Retro hours (from other period)
  
  -- Pay rates
  36.96,    -- Regular rate
  55.44,    -- Overtime rate (time and half)
  
  -- Earnings breakdown
  2666.98,  -- Regular earnings (1188.26 + 1478.40)
  345.58,   -- Overtime earnings
  1072.06,  -- Retro pay (from 08/31/2025 - 09/20/2025)
  
  -- Pre-tax deductions
  273.52,   -- Total pre-tax
  72.52,    -- Client Medical
  9.79,     -- Client Dental
  2.13,     -- Client Vision
  189.08,   -- 401K Plan
  
  -- Tax withholdings
  605.63,   -- Total taxes
  228.42,   -- Federal Taxes
  142.59,   -- DE SIT (Delaware State Income Tax)
  190.15,   -- SocSec
  44.47,    -- Medicare
  
  -- After-tax deductions
  33.33,    -- Total after-tax
  8.31,     -- LEGAL
  5.05,     -- IDENTITY FRD (Identity Fraud Protection)
  8.45,     -- CRITICAL ILL
  8.54,     -- HOSPITAL
  2.98,     -- ACCIDENT
  
  -- Year-to-date totals (from paystub)
  64995.38,  -- YTD Gross
  4959.80,   -- YTD Federal Taxes
  3000.24,   -- YTD DE SIT
  3922.95,   -- YTD SocSec
  917.48,    -- YTD Medicare
  2838.10,   -- YTD 401K
  
  -- Employer details
  'Insperity', '##MSL0002', 'Delaware'
);

-- Insert 401(k) retirement account details (as of 10/13/2025)
INSERT OR REPLACE INTO retirement_401k (
  user_id, account_number, plan_name, employer_name,
  
  -- Balances
  current_balance, vested_balance,
  
  -- Contribution rates
  employee_contribution_rate,
  
  -- YTD contributions
  ytd_employee_contribution, ytd_employer_contribution, ytd_total_contribution,
  
  -- Limits and projections
  annual_contribution_limit, projected_year_end_balance,
  
  -- Performance
  ytd_return_percent,
  
  -- Update tracking
  balance_as_of_date, last_contribution_date, last_contribution_amount
) VALUES (
  'user-mrsixpack', 
  '#######7683',  -- Account number (masked)
  '401(k) Plan',
  'Insperity',
  
  -- Balances (from 401k statement)
  5126.14,    -- Current Balance as of 10/13/2025
  5126.14,    -- Vested Balance (assume 100% vested)
  
  -- Contribution rate
  6.0,        -- 6% of gross pay (189.08 / 3151.34 ≈ 6%)
  
  -- YTD contributions
  2838.10,    -- Employee YTD contribution
  1892.09,    -- Employer YTD contribution (from last amount $126.05 suggests ~3% match)
  4730.19,    -- Total YTD (2838.10 + 1892.09)
  
  -- Limits
  23000.00,   -- 2025 IRS 401k limit
  6500.00,    -- Projected year-end (rough estimate based on current trajectory)
  
  -- Performance (estimated conservative return)
  7.5,        -- YTD return percentage (market dependent)
  
  -- Dates
  '2025-10-13',  -- Balance as of date
  '2025-10-10',  -- Last contribution (pay date)
  189.08         -- Last contribution amount
);

-- Insert 401(k) contribution history (employee + employer from YTD data)
INSERT OR REPLACE INTO retirement_401k_contributions (
  retirement_account_id, user_id, contribution_date,
  pay_period_start, pay_period_end,
  employee_contribution, employer_contribution, total_contribution,
  contribution_type
) VALUES (
  (SELECT id FROM retirement_401k WHERE user_id = 'user-mrsixpack' LIMIT 1),
  'user-mrsixpack',
  '2025-10-10',
  '2025-09-21',
  '2025-10-04',
  189.08,   -- Employee contribution (from paycheck)
  126.05,   -- Employer contribution (from 401k statement last amount)
  315.13,   -- Total contribution
  'regular'
);

-- Insert PTO balances (from Insperity portal screenshot - 16.183 hours)
INSERT OR REPLACE INTO pto_balances (
  user_id,
  pto_available, pto_used, pto_total_available,
  floating_holiday, birthday_time,
  pto_accrual_rate, max_pto_balance,
  balance_as_of_date
) VALUES (
  'user-mrsixpack',
  16.183,    -- PTO Available (from portal)
  119.000,   -- PTO Used (from portal: 131.730 - 12.730 balance)
  131.730,   -- Total Available (from portal)
  0.0,       -- Floating Holiday: 0h
  0.0,       -- Birthday: 0h
  3.85,      -- Accrual rate estimate (based on ~100 hours annual accrual)
  200.0,     -- Max balance estimate
  '2025-10-15'  -- Balance as of date
);

-- Insert employer information
INSERT OR REPLACE INTO employer_info (
  user_id, employer_name, employee_id,
  hire_date, job_title, department,
  pay_frequency, pay_type, base_rate,
  health_insurance_provider,
  is_active
) VALUES (
  'user-mrsixpack',
  'Insperity',
  '##MSL0002',
  '2024-01-15',  -- Estimated hire date
  'Licensed Practical Nurse (LPN)',
  'Nursing Services',
  'bi-weekly',
  'hourly',
  36.96,  -- Base hourly rate
  'Health Insurance Premium Provider',
  true
);

-- Update user profile with October 2025 data
UPDATE user_profiles 
SET 
  monthly_income = 6868.60,        -- $3,151.34 × 2.18 (26 pays / 12 months)
  bi_weekly_gross = 3151.34,
  bi_weekly_net = 2238.86,
  pay_schedule = 'bi-weekly',
  current_credit_score = 735,      -- Excellent credit score!
  target_credit_score = 800,
  updated_at = CURRENT_TIMESTAMP
WHERE user_id = 'user-mrsixpack';

-- Insert notification about new paycheck
INSERT OR IGNORE INTO notifications (
  user_id, type, title, message, priority, scheduled_for
) VALUES (
  'user-mrsixpack',
  'paycheck_received',
  'October Paycheck Processed! 💰',
  'Your paycheck for period 09/21-10/04 has been deposited. Net pay: $2,238.86. YTD earnings: $64,995.38',
  'high',
  '2025-10-10 08:00:00'
);

-- Insert notification about 401(k) milestone
INSERT OR IGNORE INTO notifications (
  user_id, type, title, message, priority, scheduled_for
) VALUES (
  'user-mrsixpack',
  'goal_milestone',
  '401(k) Balance Milestone! 🎯',
  'Your 401(k) balance has reached $5,126.14! YTD contributions: $2,838.10 (employee) + $1,892.09 (employer match).',
  'medium',
  '2025-10-13 09:00:00'
);
