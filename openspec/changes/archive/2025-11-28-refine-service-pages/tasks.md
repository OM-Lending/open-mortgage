# Tasks: Refine Service and Resource Pages

## Home Loan Page
- [x] Remove "Buyers" category from `loanCategories` array in `app/[locale]/services/home-loan/page.tsx`
- [x] Verify the page layout still displays correctly with only 2 categories

## Car Loan Page
- [x] Update `messages/en.json`:
  - [x] Change `carLoanTypes.new.title` to "Personal Car Loan"
  - [x] Update `carLoanTypes.new.description` to reflect personal car loan offering
  - [x] Change `carLoanTypes.used.title` to "Novated Lease"
  - [x] Update `carLoanTypes.used.description` to describe novated lease benefits
- [x] Update `messages/zh.json`:
  - [x] Change `carLoanTypes.new.title` to "个人汽车贷款"
  - [x] Update `carLoanTypes.new.description` (Chinese translation)
  - [x] Change `carLoanTypes.used.title` to "薪资打包租赁"
  - [x] Update `carLoanTypes.used.description` (Chinese translation)

## Commercial Loan Page
- [x] Generate or select a new hero image showing office building, factory, or industrial facility
- [x] Update `heroImageSrc` constant in `app/[locale]/services/commercial-loan/page.tsx`
- [x] Update image alt text if needed

## Loan Preparation Page
- [x] In `app/[locale]/resources/loan-preparation/page.tsx`:
  - [x] Remove line 31: "Proof of employment"
  - [x] Remove line 32: "Asset statements"
  - [x] Remove line 33: "Credit history report"
  - [x] Remove entire "Financial Preparation" section (lines 37-46)
- [x] Verify remaining content flows correctly

## Stamp Duty Calculator Page
- [x] Research and collect official stamp duty calculator URLs for all 8 states/territories
- [x] Update `messages/en.json`:
  - [x] Modify `stampDutyCalculatorHeroDescription` to explain external calculator usage
- [x] Update `messages/zh.json`:
  - [x] Modify `stampDutyCalculatorHeroDescription` (Chinese translation)
- [x] In `app/[locale]/resources/stamp-duty-calculator/page.tsx`:
  - [x] Remove `<StampDutyCalculator />` component (line 55)
  - [x] Replace with state-by-state link grid/list showing all 8 calculators
  - [x] Update hero CTA to scroll to links section or remove scroll behavior
- [x] Verify `components/StampDutyCalculator.tsx` is not used elsewhere before potential removal

## Validation
- [x] Run `npm run dev` and visually test all five pages in English locale
- [x] Test all five pages in Chinese locale
- [x] Verify state calculator links open correctly and point to official government sites
- [x] Run `npm run lint` to verify no linting errors
- [x] Run `npx tsc --noEmit` to verify TypeScript compilation
- [x] Verify responsive layout on mobile and desktop
