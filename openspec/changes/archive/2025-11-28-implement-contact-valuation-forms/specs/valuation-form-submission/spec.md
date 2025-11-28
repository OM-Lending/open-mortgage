## ADDED Requirements
### Requirement: Valuation Request Processing
The system SHALL accept and process property valuation requests.

#### Scenario: Valid Valuation Request
- **WHEN** a user submits the free valuation form with valid personal and property details
- **THEN** the system SHALL validate the input
- **AND** send a detailed valuation request email to the administration team
- **AND** display a confirmation message to the user

#### Scenario: Required Fields
- **WHEN** a user attempts to submit without a property address or contact details
- **THEN** the system SHALL prevent submission and highlight the missing required information

