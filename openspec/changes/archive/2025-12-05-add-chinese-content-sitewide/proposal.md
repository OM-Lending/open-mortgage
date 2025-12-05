## Change: Add complete Chinese content across the website

## Why

The project is intended to be bilingual (English and Chinese), but parts of the site currently rely on English-only content or incomplete translations. This leads to an inconsistent experience for Chinese-speaking users and makes it harder to maintain content parity across locales.

## What Changes

- Ensure every public marketing, services, and resources page under `app/[locale]/` has complete Chinese content that is semantically equivalent to the English version (no placeholder or mixed-language sections).
- Define a `site-localization` capability that formalises how page copy, navigation labels, CTA text, and calculator UX strings are sourced from `messages/en.json` and `messages/zh.json`.
- Ensure language switching preserves the current logical page (e.g. `/en/services/home-loan` ↔ `/zh/services/home-loan`) rather than redirecting to a generic landing page.
- Localise key SEO metadata (titles and descriptions) for Chinese pages in a consistent way across the site.

## Impact

- **Affected specs**:
  - `site-localization` (new capability)
- **Affected code (high level)**:
  - `app/[locale]/page.tsx` (home) and other route files under `app/[locale]/*` (e.g. `about-us`, `services/*`, `loan-products`, `resources/*`, `contact-us`, `faq`, `blogs/*`, `our-process`)
  - `components/*` that render navigation, hero sections, CTAs, and footers (e.g. `Header.tsx`, `Navigation.tsx`, `Footer.tsx`, `Hero.tsx`)
  - `messages/en.json` and `messages/zh.json` (ensure coverage and alignment of keys)
  - Any locale-aware layout or metadata helpers that read from translation messages
