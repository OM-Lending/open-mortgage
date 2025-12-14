// Blog slug index for language toggle fallback logic
// This file is auto-derived from the blog data to check if a slug exists in a locale

export type LocaleKey = "en" | "zh";

// Slugs that exist in English blog detail page
const EN_SLUGS = new Set([
  "choosing-the-right-mortgage-broker",
  "understanding-mortgage-rates",
  "first-home-buyer-guide",
  "tips-for-loan-approval",
  "upgrading-your-car-guide",
  "comparison-rate-vs-standard-variable-rate",
  "why-are-more-people-becoming-mortgage-prisoners",
  "bridging-loans",
  "can-parents-apply-for-a-home-loan",
  "Offset-account-vs-redraw-facility",
  "fixed-rate-expiring-high-interest-rates",
  "final-inspection-before-property-settlement",
  "what-income-proof-does-a-PAYG-director-need",
  "get-loan-and-save",
  "buy-a-home-with-loan",
  "default-payments-amidst-continuous-interest-rate-hike",
  "how-banks-approve-loans-in-australia",
  "fbaa-calls-for-a-review-of-the-home-loan",
  "how-to-balance-family-and-career-in-australia",
  "home-loan-application-benefits",
  "what-is-a-rate-lock-mortgage",
  "new-opportunity-to-get-a-government-boost",
  "boost-your-borrowing-power",
  "how-we-secured-a-complex-trust-loan",
]);

// Slugs that exist in Chinese blog detail page
const ZH_SLUGS = new Set([
  "choosing-the-right-mortgage-broker",
  "understanding-mortgage-rates",
  "first-home-buyer-guide",
  "tips-for-loan-approval",
  "loan-process-revealed",
  "company-depreciation-can-support-loan",
  "incomes-can-help-us-increase-our-loan-capacity",
  "the-loan-interest-rate-might-become",
  "can-one-obtain-a-loan-with-a-poor-credit-record",
  "taking-on-multiple-jobs-to-further-enhance-ones-ability-to-take-out-loans",
  "get-a-loan-without-having-to-pay-LMI",
  "choose-fixed-or-floating-mortgage-in-Australia?",
  "do-you-know-common-debt-reducer",
  "why-prepaying-interest",
]);

const SLUG_SETS: Record<LocaleKey, Set<string>> = {
  en: EN_SLUGS,
  zh: ZH_SLUGS,
};

export function hasBlogSlug(locale: LocaleKey, slug: string): boolean {
  return SLUG_SETS[locale].has(slug);
}
