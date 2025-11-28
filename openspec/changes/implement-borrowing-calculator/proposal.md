# Change: Implement Loan Borrowing Calculator

## Why
The current Loan Borrowing Calculator page (`app/[locale]/resources/loan-borrowing-calculator/page.tsx`) is a placeholder. Users expect a functional tool to estimate their borrowing capacity based on income, expenses, and current interest rates.

## What Changes
- Replace the placeholder form in `LoanBorrowingCalculatorPage` with a functional `BorrowingCalculator` component.
- Implement borrowing power logic considering:
  - **Applicant Type**: Support Single or Joint ("There's two of us") applications.
  - **Income Frequency**: Allow users to input income as Annually, Monthly, Fortnightly, or Weekly and normalize to annual for tax and borrowing calculations.
  - **Income Breakdown**: Separate "Fixed (Base) Income" and "Other Income" for accurate assessment; calculate tax individually for joint applicants.
  - **Dependants**: Capture number of dependants (used for future HEM benchmarking, currently informational/pass-through).
  - **Post-tax income**: Estimate net income from gross annual input (using standard AU tax brackets).
  - **Liabilities**: Deduct living expenses and existing loan repayments.
  - **Assessment Rate**: Apply a 3% buffer to the user's interest rate when calculating serviceability (APRA guidance/standard practice).
- Add new translation keys for the calculator interface.

## Impact
- **Affected Specs**: `borrowing-calculator` (new capability).
- **Affected Code**:
  - `app/[locale]/resources/loan-borrowing-calculator/page.tsx` (replace content).
  - `components/BorrowingCalculator.tsx` (new component).
  - `messages/*.json` (new strings).
