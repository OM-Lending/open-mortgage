import createMiddleware from 'next-intl/middleware';

export const routing = {
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
};

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

