import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
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

  return (
    <Section title={t('title')} className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-[#666666] mb-8 text-center">
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card 
              key={product} 
              title={t(`items.${product}.title`)}
              image={productImages[product]}
              imageAlt={t(`items.${product}.title`)}
              className="text-center hover:border-[#0d3250] min-h-[200px]"
            >
              <p className="text-[#666666] text-sm leading-relaxed">
                {t(`items.${product}.description`)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
