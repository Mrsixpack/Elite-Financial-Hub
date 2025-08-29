-- Elite Financial Hub - Seed Data with MrSixPack's Real Financial Information
-- This file contains realistic data for development and testing

-- Create demo user (MrSixPack)
INSERT OR IGNORE INTO users (id, email, name) VALUES 
  ('user-mrsixpack', 'mrsixpack@elite.dev', 'MrSixPack');

-- User profile with realistic nursing income data
INSERT OR IGNORE INTO user_profiles (
  user_id, monthly_income, bi_weekly_gross, bi_weekly_net, pay_schedule, 
  current_credit_score, target_credit_score
) VALUES (
  'user-mrsixpack', 4800.00, 2400.00, 1750.00, 'bi-weekly', 640, 700
);

-- Real subscription data (28 actual subscriptions)
INSERT OR IGNORE INTO subscriptions (user_id, service_name, category, monthly_cost, annual_cost, billing_cycle, next_renewal, is_active) VALUES 
  -- Essential Services & Insurance
  ('user-mrsixpack', 'GEICO Auto Insurance', 'Insurance', 427.00, 5124.00, 'monthly', '2025-09-01', true),
  ('user-mrsixpack', 'Health Insurance', 'Healthcare', 375.00, 4500.00, 'monthly', '2025-09-15', true),
  ('user-mrsixpack', 'Renters Insurance', 'Insurance', 35.00, 420.00, 'monthly', '2025-09-10', true),
  ('user-mrsixpack', 'Verizon Wireless', 'Phone', 85.00, 1020.00, 'monthly', '2025-09-05', true),
  ('user-mrsixpack', 'Comcast Internet', 'Utilities', 89.99, 1079.88, 'monthly', '2025-09-20', true),
  
  -- Nursing & Professional Development
  ('user-mrsixpack', 'NCSBN Learning Extension', 'Education', 59.99, 719.88, 'monthly', '2025-09-12', true),
  ('user-mrsixpack', 'Lippincott Nursing', 'Education', 29.99, 359.88, 'monthly', '2025-09-08', true),
  ('user-mrsixpack', 'ATI TEAS Prep', 'Education', 12.42, 149.00, 'yearly', '2026-02-15', true),
  ('user-mrsixpack', 'Nursing License Renewal', 'Professional', 6.25, 75.00, 'yearly', '2025-12-31', true),
  
  -- Fitness & Health (Professional/Personal)
  ('user-mrsixpack', 'Planet Fitness Black Card', 'Fitness', 24.99, 299.88, 'monthly', '2025-09-01', true),
  ('user-mrsixpack', 'MyFitnessPal Premium', 'Fitness', 9.99, 119.88, 'monthly', '2025-08-28', true),
  ('user-mrsixpack', 'Strava Premium', 'Fitness', 5.00, 60.00, 'monthly', '2025-09-15', true),
  ('user-mrsixpack', 'NASM Certification', 'Fitness', 8.25, 99.00, 'yearly', '2025-11-30', true),
  
  -- Content Creation & Business
  ('user-mrsixpack', 'Adobe Creative Cloud', 'Software', 52.99, 635.88, 'monthly', '2025-09-18', true),
  ('user-mrsixpack', 'Canva Pro', 'Design', 12.99, 155.88, 'monthly', '2025-09-22', true),
  ('user-mrsixpack', 'Later Social Media', 'Marketing', 25.00, 300.00, 'monthly', '2025-09-10', true),
  ('user-mrsixpack', 'Zoom Pro', 'Software', 14.99, 179.88, 'monthly', '2025-09-03', true),
  ('user-mrsixpack', 'Google Workspace', 'Software', 12.00, 144.00, 'monthly', '2025-09-25', true),
  
  -- Entertainment & Family
  ('user-mrsixpack', 'Netflix Premium', 'Entertainment', 22.99, 275.88, 'monthly', '2025-08-25', true),
  ('user-mrsixpack', 'Disney+ Bundle', 'Entertainment', 19.99, 239.88, 'monthly', '2025-09-12', true),
  ('user-mrsixpack', 'Spotify Family', 'Music', 15.99, 191.88, 'monthly', '2025-08-28', true),
  ('user-mrsixpack', 'Amazon Prime', 'Shopping', 14.98, 179.76, 'monthly', '2025-09-05', true),
  ('user-mrsixpack', 'YouTube Premium', 'Entertainment', 11.99, 143.88, 'monthly', '2025-09-14', true),
  
  -- Finance & Credit Management  
  ('user-mrsixpack', 'Credit Karma Plus', 'Finance', 19.99, 239.88, 'monthly', '2025-09-07', true),
  ('user-mrsixpack', 'Mint Premium', 'Finance', 4.99, 59.88, 'monthly', '2025-09-16', true),
  ('user-mrsixpack', 'Experian CreditWorks', 'Finance', 24.99, 299.88, 'monthly', '2025-09-11', true),
  
  -- Food & Meal Planning
  ('user-mrsixpack', 'HelloFresh', 'Food', 79.99, 959.88, 'monthly', '2025-09-02', true),
  ('user-mrsixpack', 'DoorDash DashPass', 'Food', 9.99, 119.88, 'monthly', '2025-08-30', true);

-- Financial goals
INSERT OR IGNORE INTO financial_goals (user_id, name, target_amount, current_amount, target_date, category, priority) VALUES 
  ('user-mrsixpack', 'Emergency Fund', 20000.00, 4000.00, '2025-12-31', 'emergency', 'high'),
  ('user-mrsixpack', 'Credit Score 700+', 700.00, 640.00, '2025-12-30', 'credit', 'high'),
  ('user-mrsixpack', 'Nursing Exam Fund', 2000.00, 800.00, '2025-12-30', 'education', 'medium'),
  ('user-mrsixpack', 'Debt Free Journey', 79000.00, 25000.00, '2030-12-31', 'debt', 'high'),
  ('user-mrsixpack', 'Fit-In-60 Launch Fund', 8600.00, 2500.00, '2025-12-01', 'business', 'medium');

-- Realistic debt structure
INSERT OR IGNORE INTO debts (user_id, name, balance, minimum_payment, interest_rate, debt_type, due_date) VALUES 
  ('user-mrsixpack', 'Student Loans', 45000.00, 325.00, 6.8, 'student_loan', 8),
  ('user-mrsixpack', 'Car Loan (Honda Accord)', 18500.00, 385.00, 4.2, 'auto', 5),
  ('user-mrsixpack', 'Chase Freedom Credit Card', 8500.00, 185.00, 24.99, 'credit_card', 18),
  ('user-mrsixpack', 'Capital One Credit Card', 4200.00, 105.00, 26.99, 'credit_card', 22),
  ('user-mrsixpack', 'Medical Bills', 2800.00, 150.00, 0.0, 'personal', 15);

-- Budget categories with realistic amounts
INSERT OR IGNORE INTO budget_categories (user_id, name, budgeted_amount, spent_amount, category_type) VALUES 
  ('user-mrsixpack', 'Housing', 1850.00, 1850.00, 'expense'),
  ('user-mrsixpack', 'Transportation', 1092.00, 1065.00, 'expense'),
  ('user-mrsixpack', 'Food', 750.00, 695.00, 'expense'),
  ('user-mrsixpack', 'Utilities', 400.00, 375.00, 'expense'),
  ('user-mrsixpack', 'Healthcare', 450.00, 430.00, 'expense'),
  ('user-mrsixpack', 'Subscriptions', 1685.00, 1672.00, 'expense'),
  ('user-mrsixpack', 'Education', 240.00, 225.00, 'expense'),
  ('user-mrsixpack', 'Family/Childcare', 950.00, 950.00, 'expense'),
  ('user-mrsixpack', 'Debt Payments', 1150.00, 1150.00, 'expense'),
  ('user-mrsixpack', 'Emergency Fund', 300.00, 300.00, 'savings'),
  ('user-mrsixpack', 'Entertainment', 150.00, 135.00, 'expense');

-- Sample payroll record
INSERT OR IGNORE INTO payroll_records (
  user_id, pay_period_start, pay_period_end, gross_pay, net_pay, deductions
) VALUES (
  'user-mrsixpack', '2025-08-16', '2025-08-30', 2400.00, 1750.00, 
  '{"preTax": {"health": 150.00, "dental": 25.00, "vision": 15.00, "retirement401k": 240.00}, "taxes": {"federal": 180.00, "state": 40.00, "fica": 183.60, "medicare": 34.80}, "afterTax": {"parking": 0, "other": 0}}'
);

-- Create some notifications
INSERT OR IGNORE INTO notifications (user_id, type, title, message, priority, scheduled_for) VALUES 
  ('user-mrsixpack', 'renewal', 'Netflix Renewal Due', 'Your Netflix Premium subscription renews on August 25th for $22.99', 'medium', '2025-08-25 08:00:00'),
  ('user-mrsixpack', 'budget_alert', 'Subscription Budget Alert', 'You are spending 35% of your income on subscriptions. Consider optimizing.', 'high', '2025-08-27 09:00:00'),
  ('user-mrsixpack', 'goal_milestone', 'Emergency Fund Progress', 'Great job! You have reached 20% of your emergency fund target.', 'medium', '2025-08-27 10:00:00');