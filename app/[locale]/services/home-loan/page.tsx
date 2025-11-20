import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import type { Metadata } from 'next';

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

  return (
    <Section title={t('homeLoan')} className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-[#0d3250] mb-4">About Home Loans</h2>
          <p className="text-[#666666] mb-6">
            Our home loan service provides expert guidance for purchasing your dream property. 
            We work with multiple lenders to find you the best rates and terms that suit your financial situation.
          </p>

          <h3 className="text-xl font-semibold text-[#0d3250] mb-4">Features</h3>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>Competitive interest rates</li>
            <li>Flexible repayment options</li>
            <li>Quick approval process</li>
            <li>Expert guidance throughout</li>
            <li>Multiple lender options</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#0d3250] mb-4">How It Works</h3>
          <ol className="list-decimal list-inside text-[#666666] mb-6 space-y-2">
            <li>Contact us for a free consultation</li>
            <li>We assess your financial situation</li>
            <li>We find the best loan options for you</li>
            <li>We guide you through the application process</li>
            <li>You get approved and move into your new home</li>
          </ol>

          <p className="text-[#666666]">
            Ready to get started? Contact us today to discuss your home loan needs.
          </p>
        </div>
      </div>
    </Section>
  );
}

