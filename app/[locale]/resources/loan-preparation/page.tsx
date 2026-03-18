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
  const prepStages = ['stage1', 'stage2', 'stage3', 'stage4'] as const;
  const checklistItems = ['item1', 'item2', 'item3', 'item4', 'item5'] as const;
  const commonMistakes = ['mistake1', 'mistake2', 'mistake3', 'mistake4'] as const;

  return (
    <Section title={t('loanPreparation')} className="bg-[#f8fbff] py-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <article className="rounded-[28px] border border-[#e3e7f5] bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0d3250] mb-4">
            {t('loanPreparationIntroTitle')}
          </h2>
          <p className="text-[#4f4f4f] leading-relaxed">
            {t('loanPreparationIntroBody')}
          </p>
        </article>

        <article className="rounded-[28px] border border-[#e3e7f5] bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0d3250] mb-5">
            {t('loanPreparationTimelineTitle')}
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {prepStages.map((stage) => (
              <div key={stage} className="rounded-2xl border border-[#e7ecf6] bg-[#f9fbff] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#5f7890] mb-2">
                  {t(`loanPreparationTimeline.${stage}.label`)}
                </p>
                <h4 className="text-lg font-semibold text-[#0d3250] mb-2">
                  {t(`loanPreparationTimeline.${stage}.title`)}
                </h4>
                <p className="text-sm text-[#4f4f4f] leading-relaxed">
                  {t(`loanPreparationTimeline.${stage}.description`)}
                </p>
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[28px] border border-[#e3e7f5] bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0d3250] mb-4">
              {t('loanPreparationRequiredDocumentsTitle')}
            </h3>
            <ul className="space-y-3 text-[#4f4f4f]">
              <li className="rounded-xl bg-[#f9fbff] p-4">{t('loanPreparationRequiredDocuments.identity')}</li>
              <li className="rounded-xl bg-[#f9fbff] p-4">{t('loanPreparationRequiredDocuments.income')}</li>
              <li className="rounded-xl bg-[#f9fbff] p-4">{t('loanPreparationRequiredDocuments.property')}</li>
              <li className="rounded-xl bg-[#f9fbff] p-4">{t('loanPreparationRequiredDocuments.expenses')}</li>
              <li className="rounded-xl bg-[#f9fbff] p-4">{t('loanPreparationRequiredDocuments.liabilities')}</li>
            </ul>
          </article>

          <article className="rounded-[28px] border border-[#e3e7f5] bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0d3250] mb-4">
              {t('loanPreparationChecklistTitle')}
            </h3>
            <ol className="space-y-3 text-[#4f4f4f]">
              {checklistItems.map((item, index) => (
                <li key={item} className="rounded-xl bg-[#f9fbff] p-4 leading-relaxed">
                  <span className="mr-2 font-semibold text-[#0d3250]">{index + 1}.</span>
                  {t(`loanPreparationChecklist.${item}`)}
                </li>
              ))}
            </ol>
          </article>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[28px] border border-[#e3e7f5] bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0d3250] mb-4">
              {t('loanPreparationTipsTitle')}
            </h3>
            <ul className="space-y-3 text-[#4f4f4f]">
              <li className="rounded-xl bg-[#f9fbff] p-4">{t('loanPreparationTips.tip1')}</li>
              <li className="rounded-xl bg-[#f9fbff] p-4">{t('loanPreparationTips.tip2')}</li>
              <li className="rounded-xl bg-[#f9fbff] p-4">{t('loanPreparationTips.tip3')}</li>
              <li className="rounded-xl bg-[#f9fbff] p-4">{t('loanPreparationTips.tip4')}</li>
            </ul>
          </article>

          <article className="rounded-[28px] border border-[#e3e7f5] bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0d3250] mb-4">
              {t('loanPreparationCommonMistakesTitle')}
            </h3>
            <ul className="space-y-3 text-[#4f4f4f]">
              {commonMistakes.map((mistake) => (
                <li key={mistake} className="rounded-xl bg-[#fff8f6] p-4 leading-relaxed">
                  {t(`loanPreparationCommonMistakes.${mistake}`)}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="rounded-[28px] border border-[#d6e1ef] bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0d3250] mb-3">
            {t('loanPreparationFinalCtaTitle')}
          </h3>
          <p className="text-[#4f4f4f] leading-relaxed">
            {t('loanPreparationConclusion')}
          </p>
        </article>
      </div>
    </Section>
  );
}
