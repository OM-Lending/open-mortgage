import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });

  return {
    title: 'Our Services - Open Mortgage',
    description: 'Comprehensive mortgage and loan services for your financial needs',
    keywords: 'mortgage services, home loan, car loan, commercial loan',
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  return (
    <Section title={t('ourService')} className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-[#666666] mb-8 text-center">
          We offer a comprehensive range of mortgage and loan services to meet all your financial needs. 
          Our expert team is dedicated to helping you find the best solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card title={t('homeLoan')}>
            <p className="text-[#666666] mb-4">
              Expert guidance for your home loan needs with competitive rates and flexible terms.
            </p>
            <Link href={`/${locale}/services/home-loan`}>
              <Button variant="primary" className="w-full">
                {tCommon('readMore')}
              </Button>
            </Link>
          </Card>

          <Card title={t('carLoan')}>
            <p className="text-[#666666] mb-4">
              Flexible car loan options with quick approval and competitive rates.
            </p>
            <Link href={`/${locale}/services/car-loan`}>
              <Button variant="primary" className="w-full">
                {tCommon('readMore')}
              </Button>
            </Link>
          </Card>

          <Card title={t('commercialLoan')}>
            <p className="text-[#666666] mb-4">
              Business financing solutions tailored to your commercial needs.
            </p>
            <Link href={`/${locale}/services/commercial-loan`}>
              <Button variant="primary" className="w-full">
                {tCommon('readMore')}
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </Section>
  );
}

