import { MetadataRoute } from 'next';
import { routing } from '@/middleware';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://openmortgage.com';
  const routes = [
    '',
    '/our-process',
    '/services/home-loan',
    '/services/car-loan',
    '/services/commercial-loan',
    '/resources/repayment-calculator',
    '/resources/stamp-duty-calculator',
    '/resources/free-valuation',
    '/resources/loan-preparation',
    '/resources/loan-borrowing-calculator',
    '/blogs',
    '/blogs/understanding-mortgage-rates',
    '/blogs/first-home-buyer-guide',
    '/blogs/tips-for-loan-approval',
    '/loan-products',
    '/faq',
    '/about-us',
    '/contact-us',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routing.locales.forEach((locale) => {
    routes.forEach((route) => {
      const url = locale === routing.defaultLocale 
        ? `${baseUrl}${route}`
        : `${baseUrl}/${locale}${route}`;
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}

