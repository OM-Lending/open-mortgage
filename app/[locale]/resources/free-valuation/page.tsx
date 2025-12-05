import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { ValuationForm } from '@/components/ValuationForm';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });

  return {
    title: t('freeValuationSeoTitle'),
    description: t('freeValuationSeoDescription'),
    keywords: 'property valuation, free valuation, property assessment',
  };
}

export default async function FreeValuationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  return (
    <Section title={t('freeValuation')} className="bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto">
        <Card>
          <p className="text-[#666666] mb-6">
            {t('freeValuationIntro')}
          </p>

          <ValuationForm
            tName={tCommon('name')}
            tEmail={tCommon('email')}
            tPhone={tCommon('phone')}
            tMessage={tCommon('message')}
          />
        </Card>
      </div>
    </Section>
  );
}
