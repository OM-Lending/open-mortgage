## 1. Setup & Configuration

- [x] 1.1 Install `resend` and `zod` packages.
- [x] 1.2 Configure environment variables:
  - `RESEND_API_KEY`: The secure API key.
  - `RESEND_FROM_EMAIL`: Sender address (e.g., `onboarding@resend.dev` for testing or `no-reply@omlending.com.au` for production).
  - `ADMIN_EMAIL`: Recipient address for inquiries (e.g., `info@omlending.com.au`).
- [x] 1.3 Create a Zod schema definition file (e.g., `lib/schemas.ts`) for both forms.

## 2. Email Service

- [x] 2.1 Create `lib/email.ts` to encapsulate Resend logic.
- [x] 2.2 Implement a function to send email notifications to the admin address (`info@omlending.com.au` or configured target).

## 3. Server Actions

- [x] 3.1 Create `app/actions/contact.ts` with `submitContactForm` action.
  - Validate input with Zod.
  - Call email service.
  - Return success/error state.
- [x] 3.2 Create `app/actions/valuation.ts` with `submitValuationForm` action.
  - Validate input with Zod.
  - Call email service.
  - Return success/error state.

## 4. Component Refactoring

- [x] 4.1 Extract Contact form into a Client Component (`components/ContactForm.tsx`).
  - Use `useActionState` hook for form state management.
  - Add pending states and error display.
- [x] 4.2 Extract Valuation form into a Client Component (`components/ValuationForm.tsx`).
  - Use `useActionState` hook.
  - Add pending states and error display.
- [x] 4.3 Update `app/[locale]/contact-us/page.tsx` to use the new component.
- [x] 4.4 Update `app/[locale]/resources/free-valuation/page.tsx` to use the new component.

## 5. Validation

- [x] 5.1 Verify "Contact Us" submission sends an email and shows a success message.
- [x] 5.2 Verify "Free Valuation" submission sends an email and shows a success message.
- [x] 5.3 Verify validation errors appear for invalid inputs.
