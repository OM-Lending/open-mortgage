# loan-preparation-content Specification

## Purpose
TBD - created by archiving change refine-service-pages. Update Purpose after archive.
## Requirements
### Requirement: Streamlined Document Requirements List
The loan preparation resource page MUST display only essential document requirements, removing items that vary by lender or are not universally required.

#### Scenario: User views required documents section
**Given** a user navigates to `/en/resources/loan-preparation` or `/zh/resources/loan-preparation`  
**When** they view the "Required Documents" section  
**Then** the list MUST include only:
  - Proof of identity (driver's license or passport)
  - Proof of income (payslips, tax returns, bank statements)
  - Property details (if purchasing)
**And** the following items MUST NOT be displayed:
  - Proof of employment
  - Asset statements
  - Credit history report

#### Scenario: Page content flow after removals
**Given** the document requirements and Financial Preparation sections have been modified  
**When** a user reads through the page content  
**Then** the content MUST flow naturally from "Required Documents" to "Tips for Success"  
**And** there MUST be no orphaned headings or broken content structure

### Requirement: Financial Preparation Section
The loan preparation page MUST NOT include the "Financial Preparation" section or any budgeting guidance previously displayed.

#### Scenario: Financial preparation section removed
**Given** a user navigates to the loan preparation page  
**When** they scroll through the page content  
**Then** the "Financial Preparation" heading and its associated content MUST NOT be present  
**And** the page MUST transition directly from "Required Documents" to "Tips for Success"

