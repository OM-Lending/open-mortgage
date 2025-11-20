import createMiddleware from 'next-intl/middleware';

export const routing = {
  locales: ['en', 'zh'] as const,
  defaultLocale: 'en' as const,
  localePrefix: 'as-needed' as const
};

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

