import { Section } from '@/components/Section';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'faq' });

  return {
    title: t('seoTitle'),
    description: t('seoDescription'),
    keywords: 'mortgage FAQ, loan questions, mortgage help',
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'faq' });

  const items = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'] as const;

  return (
    <Section title={t('title')} className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-[#666666] mb-8 text-center">
          {t('intro')}
        </p>

        <div className="space-y-4">
          {items.map((key, index) => (
            <details
              key={key}
              open={index === 0}
              className="group rounded-[28px] border border-[#e3e7f5] bg-white shadow-sm transition-all duration-300 open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left marker:hidden">
                <h3 className="text-lg md:text-xl font-semibold text-[#0d3250]">
                  {t(`items.${key}.question`)}
                </h3>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d9e4f2] bg-[#f8fbff] text-[#0d3250] transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-[#edf2f8] px-6 pb-6 pt-4">
                <p className="text-[#666666] leading-relaxed">
                  {t(`items.${key}.answer`)}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#666666] mb-4">
            {t('moreHelp')}
          </p>
          <a
            href={`/${locale}/contact-us`}
            className="inline-block px-6 py-3 bg-[#0d3250] text-white hover:bg-[#1a4a70] transition-colors"
          >
            {/* Keep call-to-action text in nav/common for consistency */}
            {locale === 'zh' ? '联系我们' : 'Contact Us'}
          </a>
        </div>
      </div>
    </Section>
  );
}
