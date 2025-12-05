import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { RepaymentCalculator } from '@/components/RepaymentCalculator';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });

  return {
    title: t('repaymentCalculatorSeoTitle'),
    description: t('repaymentCalculatorSeoDescription'),
    keywords:
      'mortgage calculator, repayment calculator, loan estimator, home loan calculator',
  };
}

export default async function RepaymentCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });

  return (
    <>
      <Section className="bg-gradient-to-br from-[#eef3ff] via-[#f9fbff] to-white text-[#0d3250]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-[#0d3250]/60">
            {t('repaymentCalculatorHeroEyebrow')}
          </p>
          <h1
            className="text-4xl md:text-5xl font-black leading-tight"
            style={{
              fontFamily: 'var(--font-montserrat), sans-serif',
              fontWeight: 900,
            }}
          >
            {t('repaymentCalculatorHeroTitle')}
          </h1>
          <p className="text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
            {t('repaymentCalculatorHeroDescription')}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="#calculator"
              className="inline-flex items-center justify-center rounded-full bg-[#0d3250] px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-[#1a4a70]"
            >
              {t('repaymentCalculatorHeroCtaPrimary')}
            </Link>
            <Link
              href={`/${locale}/resources/free-valuation`}
              className="inline-flex items-center justify-center rounded-full border border-[#0d3250] px-8 py-4 text-sm font-medium uppercase tracking-wide text-[#0d3250] transition hover:bg-[#0d3250] hover:text-white"
            >
              {t('repaymentCalculatorHeroCtaSecondary')}
            </Link>
          </div>
        </div>
      </Section>

      <div id="calculator">
        <Section className="bg-white">
          <div className="max-w-5xl mx-auto">
            <RepaymentCalculator />
          </div>
        </Section>
      </div>

      <Section className="bg-[#0d3250] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            {t('repaymentCalculatorCtaTitle')}
          </h2>
          <p className="text-lg text-[#d5e2ff]/90">
            {t('repaymentCalculatorCtaDescription')}
          </p>
          <Link href={`/${locale}/contact-us`}>
            <Button variant="secondary" className="mt-4 rounded-full px-8">
              {t('repaymentCalculatorCtaButton')}
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
