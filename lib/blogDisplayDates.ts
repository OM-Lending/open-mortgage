const BLOG_DISPLAY_DATES: Record<string, string> = {
  "what-to-do-if-bank-loan-is-declined-non-bank-lenders": "2026-02-24",
};

export function getBlogDisplayDate(slug: string, fallback?: string): string {
  return BLOG_DISPLAY_DATES[slug] ?? fallback ?? "2025-01-01";
}
