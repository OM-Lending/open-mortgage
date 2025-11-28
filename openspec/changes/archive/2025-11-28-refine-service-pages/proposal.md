# Refine Service and Resource Pages

## Overview
This change refines the content and visuals across service pages and resource pages to better align with business positioning, improve accuracy, and enhance user experience by:
1. Removing redundant loan categories from the home-loan page
2. Updating car loan product names to reflect actual offerings
3. Replacing the commercial loan hero image with more relevant business imagery
4. Streamlining the loan preparation document requirements
5. Replacing the custom stamp duty calculator with external links to official state calculators

## Why

These changes improve content accuracy, reduce maintenance burden, and enhance user trust by:

1. **Eliminating Category Confusion** - Removing the overlapping "Buyers" category from home loans creates clearer user pathways and reduces decision paralysis
2. **Accurate Product Representation** - Updating car loan product names to "Personal Car Loan" and "Novated Lease" ensures the website reflects actual service offerings
3. **Visual Relevance** - Replacing the commercial loan hero image with business-focused imagery (offices, factories) better communicates the target audience
4. **Simplified Document Guidance** - Streamlining loan preparation requirements focuses users on universally-required documents, reducing confusion from lender-specific items
5. **Risk Mitigation** - Using external official calculators for stamp duty eliminates liability from outdated calculations and policy changes, while ensuring users get authoritative information

The stamp duty calculator change is particularly important because stamp duty rates and concessions change frequently across different states, and providing incorrect calculations could harm user trust and create legal liability.

## What Changes

### Home Loan Page (`app/[locale]/services/home-loan/page.tsx`)
- Remove the "Buyers" category from the `loanCategories` array (lines 11-60)
- Keep only "Investors" and "Home Owners" categories
- No translation changes required (this is hardcoded data)

### Car Loan Page (`app/[locale]/services/car-loan/page.tsx` + translations)
- Update translation keys in `messages/en.json` and `messages/zh.json`:
  - `carLoanTypes.new.title`: "New Car Loans" → "Personal Car Loan"
  - `carLoanTypes.new.description`: Update to reflect personal car loan focus
  - `carLoanTypes.used.title`: "Used Car Loans" → "Novated Lease"
  - `carLoanTypes.used.description`: Update to describe novated lease benefits

### Commercial Loan Page (`app/[locale]/services/commercial-loan/page.tsx`)
- Replace `heroImageSrc` with a new business-appropriate image (office building, factory, or industrial property)
- Generate a new image using AI or select from Unsplash with relevant keywords

### Loan Preparation Page (`app/[locale]/resources/loan-preparation/page.tsx`)
- Remove from Required Documents list:
  - "Proof of employment"
  - "Asset statements"
  - "Credit history report"
- Remove entire "Financial Preparation" section (lines 37-46)
- Keep only essential documents:
  - Proof of identity
  - Proof of income
  - Property details (if purchasing)

### Stamp Duty Calculator Page (`app/[locale]/resources/stamp-duty-calculator/page.tsx`)
- Remove custom `<StampDutyCalculator />` component implementation
- Replace calculator section with links to official state government calculators:
  - NSW: Revenue NSW Stamp Duty Calculator
  - VIC: State Revenue Office Victoria
  - QLD: Queensland Revenue Office
  - SA: RevenueSA
  - WA: RevenueWA
  - TAS: State Revenue Office Tasmania
  - ACT: ACT Revenue Office
  - NT: Territory Revenue Office
- Update hero section description to explain that users will be directed to official calculators
- Remove all translation keys related to calculator inputs/results (keep hero and CTA translations)

## Files Modified

### Code Changes
- `app/[locale]/services/home-loan/page.tsx` - Remove "Buyers" loan category
- `app/[locale]/services/commercial-loan/page.tsx` - Update hero image URL
- `app/[locale]/resources/loan-preparation/page.tsx` - Remove specific document items and Financial Preparation section
- `app/[locale]/resources/stamp-duty-calculator/page.tsx` - Replace calculator with external state government links
- `components/StampDutyCalculator.tsx` - May be deprecated (verify if used elsewhere)

### Translation Changes
- `messages/en.json` - Update car loan type labels and descriptions
- `messages/zh.json` - Update car loan type labels and descriptions (Chinese)
- `messages/en.json` - Update stamp duty calculator hero description to reference external calculators
- `messages/zh.json` - Update stamp duty calculator hero description (Chinese translation)
- `messages/en.json` - Remove unused calculator input/result translation keys (optional cleanup)
- `messages/zh.json` - Remove unused calculator input/result translation keys (optional cleanup)

## Verification
- Visual review of all five affected pages in both English and Chinese locales:
  - `/en/services/home-loan` and `/zh/services/home-loan`
  - `/en/services/car-loan` and `/zh/services/car-loan`
  - `/en/services/commercial-loan` and `/zh/services/commercial-loan`
  - `/en/resources/loan-preparation` and `/zh/resources/loan-preparation`
  - `/en/resources/stamp-duty-calculator` and `/zh/resources/stamp-duty-calculator`
- Confirm no translation keys are missing
- Verify hero image displays correctly on commercial-loan page
- Verify all state government calculator links are functional and correct
- Run `npm run lint` and `npx tsc --noEmit` to ensure no errors
