# borrowing-calculator Specification

## Purpose
TBD - created by archiving change implement-borrowing-calculator. Update Purpose after archive.
## Requirements
### Requirement: Applicant Type Selection

The system SHALL allow users to select between "Single" and "Joint" (There's two of us) application types.

#### Scenario: Joint application selection

- **WHEN** user selects "There's two of us"
- **THEN** the interface displays income fields for both Applicant 1 and Applicant 2
- **AND** the calculation aggregates the net income of both applicants

### Requirement: Income Frequency Selection

The system SHALL allow users to define the frequency of their income input (Annually, Monthly, Fortnightly, Weekly) and normalize this to an annual amount for tax and borrowing calculations.

#### Scenario: Frequency conversion

- **WHEN** user selects "Monthly" and enters $5,000
- **THEN** the system converts this to an Annual Income of $60,000 before applying tax logic

### Requirement: Income Components

The system SHALL capture "Fixed Income" and "Other Income" separately for each applicant to support granular data entry.

#### Scenario: Income aggregation

- **WHEN** user enters Fixed Income: $80,000 (Annually) and Other Income: $10,000 (Annually)
- **THEN** the Total Gross Income for that applicant is calculated as $90,000 for tax purposes

### Requirement: Dependants and Expenses

The system SHALL capture the number of dependants and monthly living expenses to determine disposable income.

#### Scenario: Expense deduction

- **WHEN** user enters Monthly Expenses: $3,000
- **THEN** this amount is deducted from the Total Net Monthly Income before calculating borrowing capacity

### Requirement: Borrowing Capacity Calculation

The system SHALL calculate the user's estimated maximum borrowing amount based on net income (post-tax), expenses, liabilities, and risk-adjusted interest rates.

#### Scenario: Single applicant calculation

- **WHEN** Single applicant with Gross Income: $100k, Expenses: $2k/mo, Liability: $0
- **THEN** calculate Tax on $100k
- **AND** Net Income - Expenses = Surplus
- **AND** calculate Loan Amount using Surplus and Assessment Rate (Input Rate + 3.00%)

#### Scenario: Joint applicant calculation

- **WHEN** Joint applicants: Applicant 1 ($80k), Applicant 2 ($60k)
- **THEN** calculate Tax on $80k and Tax on $60k separately
- **AND** sum resulting Net Incomes
- **AND** deduct total Expenses and Liability
- **AND** calculate Loan Amount using combined Surplus

### Requirement: Post-Tax Income Estimation

The system SHALL estimate net annual income from gross annual income using current Australian resident tax rates (2024-25 brackets).

#### Scenario: Tax deduction

- **WHEN** Annual Income is provided
- **THEN** deduct standard income tax and Medicare levy (2%)

### Requirement: Serviceability Buffer

The system SHALL add a 3.00% buffer to the input interest rate when determining the maximum loan size.

#### Scenario: Buffer application

- **WHEN** Input Rate is 5.50%
- **THEN** the calculation uses 8.50% as the interest rate

