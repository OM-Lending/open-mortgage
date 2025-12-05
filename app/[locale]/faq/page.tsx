import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
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

  const items = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const;

  return (
    <Section title={t('title')} className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-[#666666] mb-8 text-center">
          {t('intro')}
        </p>

        <div className="space-y-6">
          {items.map((key) => (
            <Card key={key}>
              <h3 className="text-xl font-semibold text-[#0d3250] mb-3">
                {t(`items.${key}.question`)}
              </h3>
              <p className="text-[#666666]">
                {t(`items.${key}.answer`)}
              </p>
            </Card>
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

