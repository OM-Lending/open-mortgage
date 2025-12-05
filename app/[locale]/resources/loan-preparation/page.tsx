import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });

  return {
    title: t('loanPreparationSeoTitle'),
    description: t('loanPreparationSeoDescription'),
    keywords: 'loan preparation, loan documents, loan application',
  };
}

export default async function LoanPreparationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });

  return (
    <Section title={t('loanPreparation')} className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-[#0d3250] mb-4">
            {t('loanPreparationIntroTitle')}
          </h2>
          <p className="text-[#666666] mb-6">
            {t('loanPreparationIntroBody')}
          </p>

          <h3 className="text-xl font-semibold text-[#0d3250] mb-4">
            {t('loanPreparationRequiredDocumentsTitle')}
          </h3>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>{t('loanPreparationRequiredDocuments.identity')}</li>
            <li>{t('loanPreparationRequiredDocuments.income')}</li>
            <li>{t('loanPreparationRequiredDocuments.property')}</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#0d3250] mb-4">
            {t('loanPreparationTipsTitle')}
          </h3>
          <ol className="list-decimal list-inside text-[#666666] mb-6 space-y-2">
            <li>{t('loanPreparationTips.tip1')}</li>
            <li>{t('loanPreparationTips.tip2')}</li>
            <li>{t('loanPreparationTips.tip3')}</li>
            <li>{t('loanPreparationTips.tip4')}</li>
          </ol>

          <p className="text-[#666666]">
            {t('loanPreparationConclusion')}
          </p>
        </div>
      </div>
    </Section>
  );
}

