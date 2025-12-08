# Change: Localize blog content for all supported locales

## Why
Blog content under `app/[locale]/blogs` currently does not fully participate in the bilingual experience, which breaks consistency with the rest of the marketing, services, and resources pages and makes the Chinese locale feel incomplete.

## What Changes
- Ensure blog listing and blog detail pages under `/[locale]/blogs` present localized titles, excerpts, body content, and metadata for both English and Chinese.
- Source all user-facing blog strings (including headings, meta titles/descriptions, and CTAs) through the existing `next-intl` translation layer and/or a locale-aware content source, avoiding hard-coded English-only copy.
- Extend the existing `site-localization` specification to explicitly include blog pages as part of the sitewide bilingual coverage, clarifying expectations for `/en/blogs` and `/zh/blogs`.

## Impact
- Affected specs: `site-localization/spec.md`
- Affected code: `app/[locale]/blogs/page.tsx`, `app/[locale]/blogs/[slug]/page.tsx`, and any shared components or utilities used to render blog content and metadata.




