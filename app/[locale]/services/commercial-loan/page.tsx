import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Commercial Loan - Open Mortgage',
    description: 'Business financing solutions tailored to your commercial needs',
    keywords: 'commercial loan, business loan, commercial financing, business financing',
  };
}

export default async function CommercialLoanPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });

  return (
    <Section title={t('commercialLoan')} className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-[#0d3250] mb-4">About Commercial Loans</h2>
          <p className="text-[#666666] mb-6">
            Support your business growth with our commercial loan solutions. We understand the unique 
            needs of businesses and offer tailored financing options to help you achieve your goals.
          </p>

          <h3 className="text-xl font-semibold text-[#0d3250] mb-4">Features</h3>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>Tailored business solutions</li>
            <li>Competitive interest rates</li>
            <li>Flexible repayment terms</li>
            <li>Quick approval process</li>
            <li>Expert business advice</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#0d3250] mb-4">Loan Types</h3>
          <p className="text-[#666666] mb-4">
            We offer various commercial loan options including property purchase, equipment financing, 
            working capital, and business expansion loans.
          </p>

          <p className="text-[#666666]">
            Ready to grow your business? Contact us today to discuss your commercial loan needs.
          </p>
        </div>
      </div>
    </Section>
  );
}

