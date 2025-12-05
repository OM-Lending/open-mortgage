import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import Link from 'next/link';
import type { Metadata } from 'next';

const stateCalculators = [
  {
    state: 'NSW',
    name: 'New South Wales',
    nameChinese: '新南威尔士州',
    url: 'https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/transfer-duty',
  },
  {
    state: 'VIC',
    name: 'Victoria',
    nameChinese: '维多利亚州',
    url: 'https://www.e-business.sro.vic.gov.au/calculators/land-transfer-duty',
  },
  {
    state: 'QLD',
    name: 'Queensland',
    nameChinese: '昆士兰州',
    url: 'https://www.qro.qld.gov.au/calculators/transfer-duty',
  },
  {
    state: 'SA',
    name: 'South Australia',
    nameChinese: '南澳大利亚州',
    url: 'https://www.landservices.com.au/resources/fees-guides-forms/property-transfer-fee-calculator/',
  },
  {
    state: 'WA',
    name: 'Western Australia',
    nameChinese: '西澳大利亚州',
    url: 'https://www.wa.gov.au/service/financial-management/taxation-and-duty/calculate-your-transfer-duty',
  },
  {
    state: 'TAS',
    name: 'Tasmania',
    nameChinese: '塔斯马尼亚州',
    url: 'https://www.sro.tas.gov.au/property-transfer-duties',
  },
  {
    state: 'ACT',
    name: 'Australian Capital Territory',
    nameChinese: '澳大利亚首都领地',
    url: 'https://www.revenue.act.gov.au/duties/conveyance-duty',
  },
  {
    state: 'NT',
    name: 'Northern Territory',
    nameChinese: '北领地',
    url: 'https://nt.gov.au/property/buying-and-selling-a-home/settle-the-sale/stamp-duty-buying-or-selling-a-home/conveyance-calculator',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });

  return {
    title: t('stampDutyCalculatorSeoTitle'),
    description: t('stampDutyCalculatorSeoDescription'),
    keywords: 'stamp duty calculator, property tax, transfer duty, home buyer costs',
  };
}

export default async function StampDutyCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });
  const isChinese = locale === 'zh';

  return (
    <>
      <Section className="bg-gradient-to-br from-[#eef3ff] via-[#f9fbff] to-white text-[#0d3250]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-[#0d3250]/60">
            {t('stampDutyCalculatorHeroEyebrow')}
          </p>
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
              href="#calculators"
              className="inline-flex items-center justify-center rounded-full bg-[#0d3250] px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-[#1a4a70]"
            >
              {t('stampDutyCalculatorCtaPrimaryAlt')}
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

      <div id="calculators">
        <Section className="bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0d3250] text-center mb-4">
              {t('stampDutyCalculatorOfficialTitle')}
            </h2>
            <p className="text-center text-[#666666] mb-8 max-w-2xl mx-auto">
              {t('stampDutyCalculatorOfficialIntro')}
            </p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stateCalculators.map((calc) => (
                <a
                  key={calc.state}
                  href={calc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-6 rounded-[28px] border-2 border-[#e3e7f5] bg-white shadow-sm transition hover:border-[#0d3250] hover:shadow-md group"
                >
                  <p className="text-2xl font-bold text-[#0d3250] mb-2">
                    {calc.state}
                  </p>
                  <p className="text-sm text-[#666666] text-center">
                    {isChinese ? calc.nameChinese : calc.name}
                  </p>
                  <div className="mt-3 text-xs text-[#0d3250] group-hover:underline flex items-center gap-1">
                    {t('stampDutyCalculatorVisitCalculator')}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#f9fbff] rounded-[28px] border border-[#e3e7f5]">
              <p className="text-sm text-[#666666] text-center">
                {t('stampDutyCalculatorOfficialDisclaimer')}
              </p>
            </div>
          </div>
        </Section>
      </div>

      <Section className="bg-[#0d3250] text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            {t('stampDutyCalculatorCtaTitle')}
          </h2>
          <p className="text-lg text-[#d5e2ff]/90">
            {t('stampDutyCalculatorCtaDescription')}
          </p>
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
