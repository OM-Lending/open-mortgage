import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import type { Metadata } from 'next';

const heroImageSrc =
  'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Car Loan - Open Mortgage',
    description: 'Flexible car loan options with quick approval and competitive rates',
    keywords: 'car loan, vehicle loan, auto loan, car financing',
  };
}

export default async function CarLoanPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });

  const benefitCards = [
    {
      title: t('carLoanBenefits.items.speed.title'),
      description: t('carLoanBenefits.items.speed.description'),
    },
    {
      title: t('carLoanBenefits.items.flexibility.title'),
      description: t('carLoanBenefits.items.flexibility.description'),
    },
    {
      title: t('carLoanBenefits.items.competitive.title'),
      description: t('carLoanBenefits.items.competitive.description'),
    },
  ];

  const loanTypes = [
    {
      title: t('carLoanTypes.new.title'),
      description: t('carLoanTypes.new.description'),
    },
    {
      title: t('carLoanTypes.used.title'),
      description: t('carLoanTypes.used.description'),
    },
    {
      title: t('carLoanTypes.refinance.title'),
      description: t('carLoanTypes.refinance.description'),
    },
    {
      title: t('carLoanTypes.business.title'),
      description: t('carLoanTypes.business.description'),
    },
  ];

  return (
    <>
      <Section className="bg-gradient-to-br from-[#eef3ff] via-[#f9fbff] to-white text-[#0d3250]">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.5em] text-[#0d3250]/60">{t('carLoanHeroEyebrow')}</p>
            <h1
              className="text-4xl md:text-5xl font-black leading-tight"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900 }}
            >
              {t('carLoanHeroTitle')}
            </h1>
            <p className="text-lg text-[#666666] leading-relaxed">{t('carLoanHeroDescription')}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-[#0d3250] px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-[#1a4a70]"
              >
                {t('carLoanHeroCtaPrimary')}
              </Link>
              <Link
                href="#car-loan-options"
                className="inline-flex items-center justify-center rounded-full border border-[#0d3250] px-6 py-3 text-sm font-medium uppercase tracking-wide text-[#0d3250] transition hover:bg-[#0d3250] hover:text-white"
              >
                {t('carLoanHeroCtaSecondary')}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-[0_45px_120px_rgba(13,50,80,0.25)]">
              <Image
                src={heroImageSrc}
                alt="Driving a new car"
                width={1100}
                height={700}
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section title={t('carLoanBenefitsTitle')} subtitle={t('carLoanBenefitsSubtitle')} className="bg-white">
        <div className="grid gap-6 md:grid-cols-3">
          {benefitCards.map((benefit) => (
            <article key={benefit.title} className="rounded-[32px] border border-[#e3e7f5] bg-[#f9fbff] p-6 shadow-sm transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-[#0d3250]">{benefit.title}</h3>
              <p className="mt-3 text-sm text-[#4f4f4f] leading-relaxed">{benefit.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <div id="car-loan-options">
        <Section
          title={t('carLoanSolutionsTitle')}
          subtitle={t('carLoanSolutionsSubtitle')}
          className="bg-white"
        >
          <p className="mx-auto max-w-3xl text-center text-sm text-[#1f2943]/80">
            {t('carLoanSolutionsPrompt')}
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {loanTypes.map((loan) => (
              <article
                key={loan.title}
                className="flex h-full flex-col rounded-[28px] border border-[#e3e7f5] bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-[#0d3250]">{loan.title}</h3>
                <p className="mt-3 text-sm text-[#4f4f4f] leading-relaxed flex-1">{loan.description}</p>
              </article>
            ))}
        </div>
        </Section>
      </div>

      <Section className="bg-[#0d3250] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <p className="text-xs tracking-[0.5em] text-[#a5c4ff]">{t('carLoanCtaEyebrow')}</p>
          <h2 className="text-3xl font-black md:text-4xl">{t('carLoanCtaTitle')}</h2>
          <p className="text-lg text-[#d5e2ff]/90">{t('carLoanCtaDescription')}</p>
          <Button variant="secondary" className="mt-2">
            {t('carLoanCtaButton')}
          </Button>
      </div>
    </Section>
    </>
  );
}
