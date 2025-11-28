# home-loan-categories Specification

## Purpose
TBD - created by archiving change refine-service-pages. Update Purpose after archive.
## Requirements
### Requirement: Display Investor and Owner-Occupied Loan Categories Only
The home loan service page MUST display exactly two loan categories: "Investors" and "Home Owners", removing the previously displayed "Buyers" category to eliminate redundancy and improve clarity.

#### Scenario: User views home loan solutions section
**Given** a user navigates to `/en/services/home-loan` or `/zh/services/home-loan`  
**When** they scroll to the "Solutions for every borrower" section  
**Then** they MUST see exactly 2 category cards: "Investors" and "Home Owners"  
**And** the "Buyers" category card MUST NOT be displayed  
**And** each category card MUST display its respective loan products (up to 5 featured loans)

#### Scenario: Responsive layout with two categories
**Given** the home loan page displays only 2 loan categories  
**When** viewed on desktop (>=768px width)  
**Then** the categories MUST display in a grid with appropriate spacing  
**And** the layout MUST remain balanced and visually consistent

