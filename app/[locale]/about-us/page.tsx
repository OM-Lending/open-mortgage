import Image from 'next/image';
import Link from 'next/link';
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
  const tHome = await getTranslations({ locale, namespace: 'home' });
  const serviceItems = ['residential', 'commercial', 'construction', 'smsf', 'nonResidential', 'assetFinance'] as const;
  const offerItems = ['consultation', 'rateReview', 'valuation'] as const;
  const whyItems = ['customerFirst', 'ongoingSupport', 'trustedPartner', 'professionalTeam', 'onlineResources', 'complexPlans'] as const;
  const lenderImages = [
    { src: '/lenders/cr=w_389,h_129.webp', width: 389, height: 129 },
    { src: '/lenders/cr=w_356,h_200.webp', width: 356, height: 200 },
    { src: '/lenders/rs=w_289,h_200,cg_true.webp', width: 289, height: 200 },
    { src: '/lenders/rs=w_1009,h_200,cg_true.webp', width: 1009, height: 200 },
    { src: '/lenders/rs=h_100,cg_true,m.webp', width: 200, height: 100 },
    { src: '/lenders/rs=w_360,h_200,cg_true.webp', width: 360, height: 200 },
    { src: '/lenders/cr=w_667,h_200.webp', width: 667, height: 200 },
    { src: '/lenders/cr=w_256,h_200.webp', width: 256, height: 200 },
    { src: '/lenders/cr=w_301,h_167.webp', width: 301, height: 167 },
    { src: '/lenders/cr=w_388,h_169.webp', width: 388, height: 169 },
    { src: '/lenders/rs=w_355,h_200,cg_true (4).webp', width: 533, height: 200 },
    { src: '/lenders/rs=w_356,h_200,cg_true (1).webp', width: 650, height: 161 },
  ];

  return (
    <>
      <Section className="relative overflow-hidden bg-[#1a7aa5] text-white py-16 md:py-20">
        <div className="absolute inset-0">
          <Image
            src="/Professional Team.webp"
            alt={t('heroTitle')}
            fill
            className="object-cover object-left-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_50%,rgba(6,18,31,0.48),transparent_28%),radial-gradient(circle_at_38%_74%,rgba(8,26,42,0.26),transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,23,38,0.38)_0%,rgba(19,92,127,0.18)_26%,rgba(28,143,188,0.28)_48%,rgba(33,157,210,0.72)_66%,rgba(34,162,216,0.92)_82%,rgba(28,149,205,0.98)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.04)_30%,rgba(255,255,255,0.02)_55%,rgba(255,255,255,0)_100%)]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_26%,rgba(255,255,255,0.12),transparent_22%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="min-h-[300px] md:min-h-[360px] flex items-center justify-end">
            <div className="max-w-2xl text-right">
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[1.08] tracking-tight">
                {t('heroTitle')}
              </h1>
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed [text-shadow:0_2px_14px_rgba(7,24,40,0.22)]">
                {t('heroSubtitle')}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white py-16">
        <div className="max-w-6xl mx-auto space-y-14">
          <div className="max-w-4xl">
            <p className="text-2xl md:text-3xl font-semibold italic text-[#0d3250] leading-relaxed">
              {t('brandQuote')}
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] items-center">
            <div>
              <h2 className="text-3xl font-black text-[#0d3250] mb-5">
                {t('whoWeAreHeading')}
              </h2>
              <p className="text-[#4f4f4f] leading-relaxed text-lg">
                {t('whoWeAreBody')}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[28px] min-h-[280px] shadow-lg">
              <Image
                src="/Tailored Loan Solution.webp"
                alt={t('whoWeAreHeading')}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-[#0d3250] mb-6">
              {t('servicesHeading')}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {serviceItems.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[#dfe7f2] bg-[#fbfdff] px-5 py-5 shadow-sm relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-[#28a6d8]" />
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f6fd] text-sm font-bold text-[#0d3250]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0d3250] mb-2">
                    {t(`servicesItems.${item}.title`)}
                  </h3>
                  <p className="text-sm text-[#5c6670] leading-relaxed">
                    {t(`servicesItems.${item}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-start">
            <div className="relative overflow-hidden rounded-[28px] min-h-[280px] shadow-lg">
              <Image
                src="/Free Property Valuation.webp"
                alt={t('offersHeading')}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-black text-[#0d3250] mb-6">
                {t('offersHeading')}
              </h2>
              <div className="space-y-4">
                {offerItems.map((item) => (
                  <div key={item} className="flex gap-4 rounded-[24px] border border-[#e3e7f5] bg-white p-5 shadow-sm">
                    <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#28a6d8]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#0d3250]">
                        {t(`offersItems.${item}.title`)}
                      </h3>
                      <p className="mt-2 text-sm text-[#5c6670] leading-relaxed">
                        {t(`offersItems.${item}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-[#0d3250] mb-4">
              {t('whyHeading')}
            </h2>
            <p className="text-[#666666] mb-8 max-w-4xl text-lg leading-relaxed">{t('whyBody')}</p>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {whyItems.map((item, index) => (
                <article
                  key={item}
                  className="rounded-[28px] border border-[#e3e7f5] bg-[#f9fbff] p-6 shadow-sm transition hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#28a6d8] text-lg font-bold text-white shadow-[0_10px_24px_rgba(40,166,216,0.28)]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0d3250] mb-3">
                    {t(`whyItems.${item}.title`)}
                  </h3>
                  <p className="text-sm text-[#5c6670] leading-relaxed">
                    {t(`whyItems.${item}.description`)}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#dbe5f2] bg-[linear-gradient(135deg,#ffffff_0%,#f7fbff_100%)] px-6 py-8 shadow-sm">
            <div className="mb-8 flex flex-col gap-3 text-center">
              <h2 className="text-3xl font-black text-[#0d3250]">
                {tHome('lenders.title')}
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-[#5c6670] leading-relaxed">
                {tHome('lenders.description')}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-items-center">
              {lenderImages.map((lender, index) => (
                <div
                  key={index}
                  className="w-full min-h-[96px] rounded-2xl border border-[#e6edf6] bg-white px-4 py-5 shadow-[0_6px_18px_rgba(13,50,80,0.05)]"
                >
                  <div className="relative h-12 w-full">
                    <Image
                      src={lender.src}
                      alt={`Lender ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-[#0d3250] px-6 py-8 text-white text-center">
            <h2 className="text-3xl font-black mb-4">{t('missionHeading')}</h2>
            <p className="max-w-4xl mx-auto text-lg text-white/85 leading-relaxed">
              {t('missionBody')}
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white/8 p-5">
                <h3 className="text-2xl font-bold mb-2">{t('statCards.expertTeamTitle')}</h3>
                <p className="text-white/80">{t('statCards.expertTeamBody')}</p>
              </div>
              <div className="rounded-2xl bg-white/8 p-5">
                <h3 className="text-2xl font-bold mb-2">{t('statCards.bestRatesTitle')}</h3>
                <p className="text-white/80">{t('statCards.bestRatesBody')}</p>
              </div>
              <div className="rounded-2xl bg-white/8 p-5">
                <h3 className="text-2xl font-bold mb-2">{t('statCards.personalizedServiceTitle')}</h3>
                <p className="text-white/80">{t('statCards.personalizedServiceBody')}</p>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href={`/${locale}/contact-us`}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium uppercase tracking-wide text-[#0d3250] transition hover:bg-[#eaf3ff]"
              >
                {t('ctaText')}
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
