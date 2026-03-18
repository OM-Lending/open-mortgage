import { getTranslations } from 'next-intl/server';
import { LoanProductsShowcase } from '@/components/LoanProductsShowcase';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Loan Products - Open Mortgage',
    description: 'Explore our range of loan products and find the right solution for you',
    keywords: 'loan products, mortgage products, financial products',
  };
}

export default async function LoanProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'loanProducts' });

  const products = [
    'residential',
    'commercial',
    'construction',
    'smsf',
    'nonResidential',
    'assetFinance',
  ] as const;

  const productImages: Record<(typeof products)[number], string> = {
    residential: '/loan-products/residential-loan.webp',
    commercial: '/loan-products/commercial-loan.webp',
    construction: '/loan-products/construction-loan.webp',
    smsf: '/loan-products/smsf-loan.webp',
    nonResidential: '/loan-products/non-residential-loan.webp',
    assetFinance: '/loan-products/asset-finance.webp',
  };
  const productLinks: Partial<Record<(typeof products)[number], string>> = {
    residential: `/${locale}/services/home-loan`,
    commercial: `/${locale}/services/commercial-loan`,
    assetFinance: `/${locale}/services/car-loan`,
  };
  const productItems = products.map((product) => ({
    id: product,
    title: t(`items.${product}.title`),
    description: t(`items.${product}.description`),
    image: productImages[product],
    href: productLinks[product],
  }));

  return (
    <LoanProductsShowcase
      title={t('title')}
      subtitle={t('subtitle')}
      products={productItems}
    />
  );
}
