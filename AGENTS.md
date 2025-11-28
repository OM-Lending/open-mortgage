<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# Repository Guidelines

## Project Structure & Module Organization
The repo is a Next.js App Router project. Page routes and layouts live under `app/`, with locale-aware content inside `app/[locale]/…`. Shared UI primitives (buttons, cards, headers, forms) are in `components/`. Localization messages sit in `messages/en.json` and `messages/zh.json`, loaded through `i18n.ts` and enforced by `middleware.ts`. Global styles and Tailwind tokens are defined in `app/globals.css`, while static media (hero video, lender logos, favicons) should be placed in `public/`. Keep new features within this structure so locale routing, shared chrome, and styling remain consistent.

## Build, Test, and Development Commands
Run `npm run dev` to start the local server at `http://localhost:3000`, respecting locale-prefixed routes (for example `/en/services`). Use `npm run build` for a production compilation and `npm run start` to serve the optimized output. Execute `npm run lint` before every commit to catch TypeScript, accessibility, and Tailwind misuse issues because eslint-config-next is the only automated quality gate today.

## Coding Style & Naming Conventions
Use TypeScript with React Server Components by default; add `\"use client\"` only when hooks or browser APIs are necessary. Favor functional components and descriptive props (`Hero`, `Section`, `LoanCalculatorForm`). Follow the 2-space indentation already present in the codebase. Stick to Tailwind utility classes plus the CSS variables defined in `globals.css`; avoid ad-hoc inline styles except for typography overrides already established. When adding strings destined for translation, create matching keys in both `messages/en.json` and `messages/zh.json`, keeping camelCase namespaces (`home.hero.title`). Assets should use kebab-case file names under `public/`.

## Testing Guidelines
There are no runtime tests yet, so static analysis keeps regressions in check. Run `npm run lint` and `npx tsc --noEmit` (type-only check) before every PR; TypeScript failures usually highlight missed props or incorrect async usage in server components. Until a formal harness exists, verify new functionality by running `npm run dev` and exercising every affected locale path manually. If you introduce automated tests (e.g., Playwright or Vitest), place them alongside the feature directory (`app/[locale]/resources/__tests__`) and prefix filenames with the feature name (`loan-prep.spec.ts`).

## Commit & Pull Request Guidelines
Recent history favors short, imperative commit messages such as “Fix linting errors and warnings” or “Add Our Process section to services page.” Follow that pattern: describe what the change does, not how. Pull requests should include a concise summary, before/after screenshots for UI work, a list of validated commands (e.g., `npm run lint`), and links to any tracking issues or product requirements. When touching locale content, mention whether both translations were updated. Keep PRs scoped so reviewers can reason about a single feature or bug fix at a time.
