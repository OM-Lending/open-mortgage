import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import type { Metadata } from 'next';

const heroImageSrc =
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80';

const loanCategories = [
  {
    title: 'Investors',
    loans: [
      {
        name: 'Investment loan',
        description: "Rent out your property and benefit from Australia's strong long-term real estate performance.",
      },
      {
        name: 'Self-managed super fund (SMSF) home loan',
        description: 'Use retirement savings to invest in property with potential tax advantages.',
      },
    ],
  },
  {
    title: 'Home Owners',
    loans: [
      {
        name: 'Refinancing home loan',
        description: 'Pay out your current loan and restart with a better rate or lender.',
      },
      {
        name: 'Line of credit home loan',
        description: 'Access your equity via a credit line repaid either interest-only or principal + interest.',
      },
      {
        name: 'Bridging home loan',
        description: 'Finance a new purchase while you wait to sell your existing home; usually up to six months.',
      },
      {
        name: 'Reverse mortgage',
        description: 'Retirees and pensioners can access cash while keeping their home by using it as security.',
      },
    ],
  },
];

type ProcessStepKey = 'step1' | 'step2' | 'step3' | 'step4' | 'step5' | 'step6';

const processSteps: ProcessStepKey[] = [
  'step1',
  'step2',
  'step3',
  'step4',
  'step5',
  'step6',
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home Loan - Open Mortgage',
    description: 'Expert home loan services with competitive rates and flexible terms',
    keywords: 'home loan, mortgage, property loan, house loan',
  };
}

export default async function HomeLoanPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });

  const benefitCards = [
    {
      title: t('homeLoanBenefits.items.tailored.title'),
      description: t('homeLoanBenefits.items.tailored.description'),
    },
    {
      title: t('homeLoanBenefits.items.strategic.title'),
      description: t('homeLoanBenefits.items.strategic.description'),
    },
    {
      title: t('homeLoanBenefits.items.holistic.title'),
      description: t('homeLoanBenefits.items.holistic.description'),
    },
  ];

  return (
    <>
      <Section className="bg-gradient-to-br from-[#eef3ff] via-[#f9fbff] to-white text-[#0d3250]">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.5em] text-[#0d3250]/60">{t('homeLoanHeroEyebrow')}</p>
            <h1
              className="text-4xl md:text-5xl font-black leading-tight"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900 }}
            >
              {t('homeLoanHeroTitle')}
            </h1>
            <p className="text-lg text-[#666666] leading-relaxed">{t('homeLoanHeroDescription')}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-[#0d3250] px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-[#1a4a70]"
              >
                {t('homeLoanHeroCtaPrimary')}
              </Link>
              <Link
                href="#loan-solutions"
                className="inline-flex items-center justify-center rounded-full border border-[#0d3250] px-6 py-3 text-sm font-medium uppercase tracking-wide text-[#0d3250] transition hover:bg-[#0d3250] hover:text-white"
              >
                {t('homeLoanHeroCtaSecondary')}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-[0_45px_120px_rgba(13,50,80,0.25)]">
            <Image
                src={heroImageSrc}
                alt="Happy family in front of a new home"
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

      <Section title={t('homeLoanBenefitsTitle')} subtitle={t('homeLoanBenefitsSubtitle')} className="bg-white">
        <div className="grid gap-6 md:grid-cols-3">
          {benefitCards.map((benefit) => (
            <article key={benefit.title} className="rounded-[32px] border border-[#e3e7f5] bg-[#f9fbff] p-6 shadow-sm transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-[#0d3250]">{benefit.title}</h3>
              <p className="mt-3 text-sm text-[#4f4f4f] leading-relaxed">{benefit.description}</p>
            </article>
                ))}
              </div>
      </Section>

      <Section
        title={t('homeLoanProcessTitle')}
        subtitle={t('homeLoanProcessSubtitle')}
        className="bg-[#f8f9ff]"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step} className="rounded-3xl border border-[#e3e7f5] bg-white p-6 shadow-sm">
              <p className="text-[0.65rem] tracking-[0.6em] uppercase text-[#0d3250]/50">
                {`0${index + 1}`}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[#0d3250]">
                {t(`ourProcess.steps.${step}.title`)}
              </h3>
              <p className="mt-3 text-sm text-[#4f4f4f] leading-relaxed">
                {t(`ourProcess.steps.${step}.description`)}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <div id="loan-solutions">
        <Section
          title={t('homeLoanSolutionsTitle')}
          subtitle={t('homeLoanSolutionsSubtitle')}
          className="bg-white"
        >
          <p className="mx-auto max-w-3xl text-center text-sm text-[#1f2943]/80">
            {t('homeLoanSolutionsPrompt')}
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {loanCategories.map((category) => {
              const featuredLoans = category.loans.slice(0, 5);

              return (
                <article
                  key={category.title}
                  className="flex h-full flex-col rounded-[28px] border border-[#e3e7f5] bg-white p-6 shadow-sm"
                >
                  <header>
                    <p className="text-[0.65rem] tracking-[0.4em] uppercase text-[#0d3250]/50">
                      {t('homeLoanSolutionsCategoryLabel')}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#0d3250]">{category.title}</h3>
                  </header>
                  <ul className="mt-6 space-y-4 flex-1">
                    {featuredLoans.map((loan) => (
                      <li key={loan.name} className="space-y-1">
                        <p className="text-base font-semibold text-[#0d3250]">{loan.name}</p>
                        <p className="text-sm text-[#4f4f4f] leading-relaxed">{loan.description}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Section>
      </div>

      <Section className="bg-[#0d3250] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <p className="text-xs tracking-[0.5em] text-[#a5c4ff]">{t('homeLoanCtaEyebrow')}</p>
          <h2 className="text-3xl font-black md:text-4xl">{t('homeLoanCtaTitle')}</h2>
          <p className="text-lg text-[#d5e2ff]/90">{t('homeLoanCtaDescription')}</p>
          <Link
            href="/contact-us"
            className="mt-2 inline-block px-6 py-3 font-medium transition-colors duration-200 border-2 border-[#0d3250] bg-white text-[#0d3250] hover:bg-[#0d3250] hover:text-white"
          >
            {t('homeLoanCtaButton')}
          </Link>
      </div>
    </Section>
    </>
  );
}
