## ADDED Requirements
### Requirement: Contact Form Processing
The system SHALL accept and process inquiries from the "Contact Us" page.

#### Scenario: Valid Submission
- **WHEN** a user submits the contact form with valid name, email, and message
- **THEN** the system SHALL validate the input format
- **AND** send an email notification to the administration team
- **AND** display a success message to the user

#### Scenario: Invalid Submission
- **WHEN** a user submits the contact form with missing or invalid fields (e.g., invalid email format)
- **THEN** the system SHALL reject the submission
- **AND** display specific validation errors next to the affected fields

