import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { StampDutyCalculator } from '@/components/StampDutyCalculator';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Stamp Duty Calculator - Open Mortgage',
    description: 'Estimate your property transfer duty and upfront costs',
    keywords: 'stamp duty calculator, property tax, transfer duty, home buyer costs',
  };
}

export default async function StampDutyCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });

  return (
    <>
      <Section className="bg-gradient-to-br from-[#eef3ff] via-[#f9fbff] to-white text-[#0d3250]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-[#0d3250]/60">{t('stampDutyCalculatorHeroEyebrow')}</p>
          <h1
            className="text-4xl md:text-5xl font-black leading-tight"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900 }}
          >
            {t('stampDutyCalculatorHeroTitle')}
          </h1>
          <p className="text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
            {t('stampDutyCalculatorHeroDescription')}
          </p>
            
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="#calculator"
              className="inline-flex items-center justify-center rounded-full bg-[#0d3250] px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-[#1a4a70]"
            >
              {t('stampDutyCalculatorHeroCtaPrimary')}
            </Link>
            <Link
              href={`/${locale}/contact-us`}
              className="inline-flex items-center justify-center rounded-full border border-[#0d3250] px-8 py-4 text-sm font-medium uppercase tracking-wide text-[#0d3250] transition hover:bg-[#0d3250] hover:text-white"
            >
              {t('stampDutyCalculatorHeroCtaSecondary')}
            </Link>
            </div>
            </div>
      </Section>
            
      <div id="calculator">
        <Section className="bg-white">
          <div className="max-w-5xl mx-auto">
            <StampDutyCalculator />
          </div>
        </Section>
      </div>

      <Section className="bg-[#0d3250] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-black md:text-4xl">{t('stampDutyCalculatorCtaTitle')}</h2>
          <p className="text-lg text-[#d5e2ff]/90">{t('stampDutyCalculatorCtaDescription')}</p>
          <Link href={`/${locale}/contact-us`}>
            <Button variant="secondary" className="mt-4 rounded-full px-8">
              {t('stampDutyCalculatorCtaButton')}
            </Button>
          </Link>
      </div>
    </Section>
    </>
  );
}
