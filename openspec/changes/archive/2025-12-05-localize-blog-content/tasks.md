## 1. Specification
- [x] 1.1 Review current blog implementation in `app/[locale]/blogs/page.tsx` and `app/[locale]/blogs/[slug]/page.tsx` to document how content is loaded and rendered for each locale.
- [x] 1.2 Update `changes/localize-blog-content/specs/site-localization/spec.md` to add requirements and scenarios that explicitly cover blog listing and detail pages under `/[locale]/blogs`.

## 2. Implementation
- [x] 2.1 Refactor blog listing to source all user-facing strings (titles, excerpts, headings, CTAs) from locale-aware content, using `next-intl` messages or a locale-aware data source instead of hard-coded English-only text.
- [x] 2.2 Refactor blog detail pages to ensure the body content, headings, publish metadata, and any sidebar/CTA content are localized per active locale.
- [x] 2.3 Ensure `/en/blogs` and `/zh/blogs` routes are both reachable via locale-aware navigation and language toggle, preserving the logical blog page when switching languages.

## 3. Validation
- [ ] 3.1 Manually verify `/en/blogs` and `/zh/blogs` listing pages show locale-appropriate titles, excerpts, and navigation labels.
- [ ] 3.2 Manually verify several blog detail pages for both `/en/blogs/[slug]` and `/zh/blogs/[slug]` to confirm body content and metadata are localized and consistent.
- [ ] 3.3 Run `openspec validate localize-blog-content --strict` once the CLI is available and adjust the spec delta if any validation issues are reported.




