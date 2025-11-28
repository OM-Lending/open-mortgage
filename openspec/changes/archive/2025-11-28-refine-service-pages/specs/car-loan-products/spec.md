# Car Loan Products

## ADDED Requirements

### Requirement: Display Personal Car Loan and Novated Lease Product Names
The car loan service page MUST display updated product names that accurately reflect the current offerings: "Personal Car Loan" (replacing "New Car Loans") and "Novated Lease" (replacing "Used Car Loans").

#### Scenario: User views car loan options in English
**Given** a user navigates to `/en/services/car-loan`  
**When** they scroll to the "Car Loan Options" section  
**Then** the first loan type card MUST display the title "Personal Car Loan"  
**And** the second loan type card MUST display the title "Novated Lease"  
**And** each card MUST display updated descriptions matching the new product focus

#### Scenario: User views car loan options in Chinese
**Given** a user navigates to `/zh/services/car-loan`  
**When** they scroll to the "车贷选项" section  
**Then** the first loan type card MUST display the title "个人汽车贷款"  
**And** the second loan type card MUST display the title "薪资打包租赁" (or equivalent Chinese term)  
**And** each card MUST display Chinese translations of the updated descriptions

### Requirement: Maintain Other Car Loan Products
The car loan service page MUST continue to display the remaining two product types unchanged: "Car Loan Refinancing" and "Business Car Loans".

#### Scenario: Complete car loan product grid
**Given** a user views the car loan options section  
**When** the page renders the loan types grid  
**Then** exactly 4 loan type cards MUST be displayed:
  1. Personal Car Loan
  2. Novated Lease  
  3. Car Loan Refinancing
  4. Business Car Loans
**And** the grid MUST display correctly in a 4-column layout on large screens

## Implementation Notes
- Update `messages/en.json`: `carLoanTypes.new.title` and `carLoanTypes.used.title`
- Update `messages/en.json`: `carLoanTypes.new.description` and `carLoanTypes.used.description`
- Update `messages/zh.json` with corresponding Chinese translations
- No code changes to `page.tsx` required (uses translation keys)
