# email-notification-service Specification

## Purpose
TBD - created by archiving change implement-contact-valuation-forms. Update Purpose after archive.
## Requirements
### Requirement: Email Notification Dispatch
The system SHALL be able to dispatch email notifications to administrators and users via an external provider.

#### Scenario: Admin Notification
- **WHEN** a system event triggers a notification (e.g., form submission)
- **THEN** an email is sent to the configured administrator address containing the event details

#### Scenario: Provider Integration
- **WHEN** the email service is invoked
- **THEN** it MUST authenticate using the configured API key (`RESEND_API_KEY`)

