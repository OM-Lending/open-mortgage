import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { ValuationForm } from '@/components/ValuationForm';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Free Valuation - Open Mortgage',
    description: 'Get a free property valuation from our experts',
    keywords: 'property valuation, free valuation, property assessment',
  };
}

export default async function FreeValuationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  return (
    <Section title={t('freeValuation')} className="bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto">
        <Card>
          <p className="text-[#666666] mb-6">
            Request a free property valuation from our expert team. Fill out the form below 
            and we&apos;ll get back to you with an accurate assessment.
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
