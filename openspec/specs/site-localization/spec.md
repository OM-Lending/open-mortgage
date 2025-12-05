# site-localization Specification

## Purpose
TBD - created by archiving change add-chinese-content-sitewide. Update Purpose after archive.
## Requirements
### Requirement: Sitewide Bilingual Content Coverage

The system SHALL provide equivalent English and Chinese content for all public marketing, services, and resource pages under `app/[locale]/`, without placeholder or mixed-language sections.

#### Scenario: Home page bilingual content
- **WHEN** a user visits `/en` or `/zh`
- **THEN** the hero, key value propositions, CTAs, and footer text MUST appear in English on `/en`
- **AND** they MUST appear in Chinese on `/zh`
- **AND** there MUST NOT be sections on `/zh` that fall back to English-only copy (excluding required legal names and lender brand names).

#### Scenario: Services and resources pages bilingual content
- **WHEN** a user navigates to any services or resources page (e.g. `/[locale]/services/home-loan`, `/[locale]/resources/loan-preparation`, `/[locale]/resources/repayment-calculator`)
- **THEN** the headings, body copy, and CTA labels MUST be available in English for `/en/...`
- AND they MUST be available in Chinese for `/zh/...`
- AND no page in the `/zh` tree MUST show placeholder text such as "Coming soon" or untranslated English copy for primary content.

### Requirement: Translation Message Structure and Parity

The system SHALL source all user-facing text for marketing content, navigation, CTAs, and calculators from `messages/en.json` and `messages/zh.json`, maintaining aligned keys between locales.

#### Scenario: Message key alignment
- **WHEN** a new English string is added for a page section (e.g. home hero, loan products cards, calculators)
- **THEN** a corresponding key MUST be created in both `messages/en.json` and `messages/zh.json` using a shared key path (e.g. `home.hero.title`)
- **AND** the Chinese value MUST be a semantically equivalent translation of the English value.

#### Scenario: No hard-coded Chinese or English strings for translatable content
- **WHEN** a component renders user-facing text that is part of the marketing, services, or resource content
- **THEN** it MUST retrieve that text via the translation layer (e.g. `next-intl`) using message keys
- **AND** it MUST NOT hard-code English or Chinese sentences directly in JSX, except for proper nouns, lender names, or regulatory labels that are not translated.

### Requirement: Locale-Aware Navigation and Language Switching

The system SHALL allow users to switch between English and Chinese while preserving their current logical page and ensuring navigation labels reflect the active locale.

#### Scenario: Language toggle preserves route
- **WHEN** a user is on an `/en/...` route and switches language to Chinese
- **THEN** they MUST be taken to the corresponding `/zh/...` route for the same page (e.g. `/en/services/home-loan` → `/zh/services/home-loan`)
- **AND** the navigation menu, page headings, and CTAs MUST be shown in Chinese.

#### Scenario: Navigation labels localized
- **WHEN** a user opens the main navigation or footer links on `/en/...`
- **THEN** all navigation labels (e.g. Home, Services, Resources, About Us, Contact Us) MUST be rendered in English
- **AND** on `/zh/...` the same links MUST be rendered in Chinese using the appropriate translation keys.

### Requirement: Localized SEO Metadata

The system SHALL provide localized page titles and descriptions for Chinese pages where SEO metadata is defined.

#### Scenario: Localized metadata for key landing pages
- **WHEN** a user (or search engine) accesses key landing pages such as the home page, services overviews, and resources landing pages under `/zh`
- **THEN** the HTML `<title>` and description metadata MUST use Chinese text sourced from `messages/zh.json` (or an equivalent localization source)
- **AND** the corresponding `/en` routes MUST use English metadata sourced from `messages/en.json`.

