## 1. Discovery and Audit
- [x] 1.1 Inventory all public pages under `app/[locale]/` that are user-facing (home, about-us, services, loan-products, resources, contact-us, faq, blogs, our-process).
- [x] 1.2 Identify all hard-coded English strings in these pages and shared components (navigation, footer, hero, CTAs, forms, calculators).
- [x] 1.3 Compare `messages/en.json` and `messages/zh.json` to find missing or mismatched keys.

## 2. Specification and Content Coverage
- [x] 2.1 Finalise the `site-localization` capability requirements and confirm which pages are in scope for bilingual content.
- [x] 2.2 Define a naming convention for translation keys that keeps English and Chinese messages aligned across sections (e.g. `home.hero.title`, `services.homeLoan.cta`).
- [x] 2.3 Prepare or review Chinese translations for all in-scope English strings, ensuring they are semantically equivalent and appropriate for Australian mortgage context.

## 3. Implementation
- [x] 3.1 Refactor pages and components to replace hard-coded English strings with keys from `messages/en.json` / `messages/zh.json`.
- [x] 3.2 Ensure the language toggle keeps users on the corresponding route when switching between `/en/...` and `/zh/...`.
- [x] 3.3 Update SEO metadata (titles and descriptions) to use translated messages for Chinese pages where applicable.
- [x] 3.4 Verify that calculators, forms, and CTAs display fully localized labels, helper text, and results for both locales.

## 4. Validation
- [x] 4.1 Manually test all affected routes in both `/en` and `/zh` to confirm there is no leftover English-only text on Chinese pages (excluding regulatory or lender names that must remain in English).
- [x] 4.2 Run `npm run lint` and `npx tsc --noEmit` to ensure no new lint or type errors are introduced by localization changes.
- [x] 4.3 Validate the OpenSpec change with `npx openspec validate add-chinese-content-sitewide --strict` and resolve any issues before requesting approval.



