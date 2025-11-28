# Project Context

## Purpose
**Open Mortgage** is a bilingual (English/Chinese) mortgage brokerage website that helps users understand home loan options, compare lenders, and access mortgage services. The site provides educational content about the mortgage process, interactive calculators (repayment and stamp duty), and connects potential clients with mortgage advisors. It serves both English-speaking and Chinese-speaking audiences in Australia with locale-specific content.

## Tech Stack
- **Framework**: Next.js 16.0.3 with App Router
- **Runtime**: React 19.2.0 with Server Components (default)
- **Language**: TypeScript 5 (strict mode enabled)
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Internationalization**: next-intl v4.5.5 for bilingual support (en/zh)
- **Linting**: ESLint 9 with eslint-config-next
- **Node**: TypeScript target ES2017
- **Path Aliases**: `@/*` maps to project root

## Project Conventions

### Code Style
- **Indentation**: 2 spaces (consistent across the codebase)
- **Components**: Functional React components with descriptive names (e.g., `Hero`, `Section`, `LoanCalculatorForm`)
- **TypeScript**: Strict mode enabled; avoid `any` types
- **Server vs Client**: Use React Server Components by default; add `"use client"` directive only when hooks or browser APIs are required
- **Naming Conventions**:
  - Components: PascalCase (`Button.tsx`, `RepaymentCalculator.tsx`)
  - Props: descriptive camelCase with typed interfaces
  - Files: kebab-case for static assets in `public/` (e.g., `hero-video.mp4`)
  - Translation keys: camelCase namespaces (e.g., `home.hero.title`)
- **Styling**: Use Tailwind utility classes and CSS variables from `app/globals.css`; avoid inline styles except for typography overrides

### Architecture Patterns
- **App Router Structure**: Page routes and layouts in `app/`, locale-aware content in `app/[locale]/…`
- **Component Organization**: Shared UI primitives (buttons, cards, headers, forms) in root-level `components/`
- **Internationalization**: 
  - Locales defined in `middleware.ts` (`en`, `zh`)
  - Translation messages in `messages/en.json` and `messages/zh.json`
  - i18n configuration in `i18n.ts` with automatic locale detection
  - Locale prefix routing via next-intl middleware
- **Static Assets**: All media (videos, logos, favicons) in `public/`
- **Global Styles**: Tailwind tokens and CSS variables centralized in `app/globals.css`

### Testing Strategy
- **Current State**: No automated test suite yet; static analysis is the primary quality gate
- **Pre-commit Validation**:
  - Run `npm run lint` before every commit (ESLint with next-config rules)
  - Run `npx tsc --noEmit` for type-only TypeScript validation
  - Verify TypeScript errors highlight missed props or incorrect async usage in server components
- **Manual Testing**: Execute `npm run dev` and manually verify all affected locale paths (e.g., `/en/services`, `/zh/services`)
- **Future Test Location**: If automated tests are added (Playwright/Vitest), place alongside features in `app/[locale]/[feature]/__tests__/` with prefix naming (`loan-prep.spec.ts`)

### Git Workflow
- **Commit Messages**: Short, imperative style (e.g., "Fix linting errors and warnings", "Add Our Process section to services page")
- **Commit Format**: Describe what the change does, not how
- **Pull Request Requirements**:
  - Concise summary of changes
  - Before/after screenshots for UI work
  - List of validated commands (e.g., `npm run lint`, `npx tsc --noEmit`)
  - Links to tracking issues or product requirements
  - Mention if both locale translations were updated
  - Keep PRs scoped to a single feature or bug fix

## Domain Context
**Mortgage Brokerage & Financial Services**
- The site serves as a lead generation and education platform for mortgage advisory services
- Target audience: Home buyers and property investors in Australia (English and Chinese speaking)
- Key services: Home loans, refinancing, first home buyer assistance, investment property loans
- Domain-specific features:
  - **Repayment Calculator**: Calculates loan repayments based on principal, interest rate, and loan term
  - **Stamp Duty Calculator**: Estimates government stamp duty costs based on property value and state
  - Lender comparisons and reviews
  - Educational content about the mortgage process, first home buyer grants, and refinancing strategies

## Important Constraints
- **Localization**: All new user-facing strings must have matching keys in both `messages/en.json` and `messages/zh.json`
- **Accessibility**: ESLint config includes accessibility checks; must pass before merging
- **SEO**: Sitemap and robots.txt are configured; maintain locale-specific URLs
- **Performance**: Leverage React Server Components for better initial load times; minimize client-side JavaScript
- **Browser Compatibility**: Target ES2017+ (modern browsers)
- **Regulatory**: Content should be accurate for Australian mortgage/financial regulations (not providing financial advice)

## External Dependencies
- **Next.js Framework**: Heavy reliance on Next.js App Router conventions, middleware, and routing
- **next-intl**: Core dependency for all internationalization and locale routing
- **Tailwind CSS v4**: All styling uses Tailwind; breaking changes in v4 may affect the project
- **Vercel**: Likely deployment target (suggested in README)
- **Static Assets**: Video hero backgrounds and lender logos stored in `public/`
- **No External APIs**: Currently no external API integrations for loan rates or calculators (all client-side calculations)
