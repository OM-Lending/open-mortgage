import { Section } from '@/components/Section';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('seoTitle'),
    description: t('seoDescription'),
    keywords: 'about Open Mortgage, mortgage company, financial services',
  };
}

export default async function AboutUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return (
    <>
      <Section className="bg-[#0d3250] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-gray-200">{t('heroSubtitle')}</p>
          </div>
        </div>
      </Section>

      <Section className="bg-white py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-[#0d3250] mb-4">
              {t('missionHeading')}
            </h2>
            <p className="text-[#666666] mb-6">{t('missionBody')}</p>

            <h2 className="text-2xl font-semibold text-[#0d3250] mb-4">
              {t('valuesHeading')}
            </h2>
            <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
              <li>
                <strong>{t('valuesItems.integrityTitle')}:</strong>{' '}
                {t('valuesItems.integrityBody')}
              </li>
              <li>
                <strong>{t('valuesItems.expertiseTitle')}:</strong>{' '}
                {t('valuesItems.expertiseBody')}
              </li>
              <li>
                <strong>{t('valuesItems.customerFocusTitle')}:</strong>{' '}
                {t('valuesItems.customerFocusBody')}
              </li>
              <li>
                <strong>{t('valuesItems.innovationTitle')}:</strong>{' '}
                {t('valuesItems.innovationBody')}
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0d3250] mb-4">
              {t('whyHeading')}
            </h2>
            <p className="text-[#666666] mb-4">{t('whyBody')}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#0d3250] mb-2">
                  {t('statCards.expertTeamTitle')}
                </h3>
                <p className="text-[#666666]">
                  {t('statCards.expertTeamBody')}
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#0d3250] mb-2">
                  {t('statCards.bestRatesTitle')}
                </h3>
                <p className="text-[#666666]">
                  {t('statCards.bestRatesBody')}
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#0d3250] mb-2">
                  {t('statCards.personalizedServiceTitle')}
                </h3>
                <p className="text-[#666666]">
                  {t('statCards.personalizedServiceBody')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

