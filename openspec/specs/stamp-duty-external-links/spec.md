# stamp-duty-external-links Specification

## Purpose
TBD - created by archiving change refine-service-pages. Update Purpose after archive.
## Requirements
### Requirement: External State Government Calculator Links
The stamp duty calculator page MUST provide direct links to official state government stamp duty calculators instead of implementing a custom calculator, ensuring accuracy and reducing liability from policy changes.

#### Scenario: User views stamp duty calculator page in English
**Given** a user navigates to `/en/resources/stamp-duty-calculator`  
**When** they view the main content section (replacing the calculator)  
**Then** they MUST see a list or grid of links to official calculators for all 8 Australian states/territories:
  - New South Wales (NSW)
  - Victoria (VIC)
  - Queensland (QLD)
  - South Australia (SA)
  - Western Australia (WA)
  - Tasmania (TAS)
  - Australian Capital Territory (ACT)
  - Northern Territory (NT)
**And** each link MUST open in a new tab/window  
**And** each link MUST point to the official government revenue office calculator

#### Scenario: User views stamp duty calculator page in Chinese
**Given** a user navigates to `/zh/resources/stamp-duty-calculator`  
**When** they view the main content section  
**Then** the state/territory names and descriptions MUST be displayed in Chinese  
**And** the external links MUST be the same as the English version (pointing to official calculators)

### Requirement: Updated Hero Section Messaging
The hero section MUST clearly communicate that users will be directed to official government calculators rather than using an on-page calculator.

#### Scenario: Hero description explains external calculator approach
**Given** a user views the stamp duty calculator page  
**When** they read the hero section description  
**Then** the description MUST explain that they will be directed to official state/territory calculators  
**And** the messaging MUST convey this is for accuracy and compliance with current regulations  
**And** both English and Chinese translations MUST reflect this updated approach

### Requirement: Functional External Links
All external calculator links MUST be functional, up-to-date, and point to official government revenue office websites.

#### Scenario: User clicks on a state calculator link
**Given** a user clicks on any state/territory calculator link  
**When** the link is activated  
**Then** it MUST open the official government stamp duty calculator page  
**And** it MUST open in a new browser tab/window  
**And** the URL MUST use HTTPS protocol  
**And** the destination MUST be the official revenue office domain for that state/territory

### Requirement: Custom Stamp Duty Calculator Implementation
The stamp duty calculator page MUST NOT include the custom `<StampDutyCalculator />` component or any client-side calculation logic.

#### Scenario: Custom calculator component removed
**Given** the stamp duty calculator page is rendered  
**When** the page content loads  
**Then** the `<StampDutyCalculator />` component MUST NOT be present  
**And** the calculator input form MUST NOT be displayed  
**And** associated translation keys for calculator inputs/results are no longer required

