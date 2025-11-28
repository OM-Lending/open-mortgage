# Change: Implement Contact and Valuation Forms

## Why

The "Contact Us" and "Free Valuation" pages currently have static forms that do not perform any action upon submission. Users need a way to actually send these inquiries to the business. Next.js Server Actions provide a secure and efficient way to handle form submissions without a separate backend API, and Resend offers a modern, developer-friendly email API.

## What Changes

- Introduce `resend` and `zod` dependencies.
- Implement a shared email notification service wrapper around Resend.
- Create Server Actions for handling Contact Us and Free Valuation form submissions.
- Refactor existing page components to use `useActionState` (React 19) and client-side form validation.
- Add Zod schemas for robust data validation.

## Impact

- **Affected Specs**:
  - `email-notification-service` (New)
  - `contact-form-submission` (New)
  - `valuation-form-submission` (New)
- **Affected Code**:
  - `app/[locale]/contact-us/page.tsx`
  - `app/[locale]/resources/free-valuation/page.tsx`
  - New `app/actions/` directory.
  - New `lib/email.ts` (or similar) for service logic.
  - `.env` configuration.
