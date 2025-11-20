import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });

  return {
    title: 'Car Loan - Open Mortgage',
    description: 'Flexible car loan options with quick approval and competitive rates',
    keywords: 'car loan, vehicle loan, auto loan, car financing',
  };
}

export default async function CarLoanPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });

  return (
    <Section title={t('carLoan')} className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-[#0d3250] mb-4">About Car Loans</h2>
          <p className="text-[#666666] mb-6">
            Get behind the wheel faster with our flexible car loan options. We offer competitive rates 
            and a quick approval process to help you drive away in your new vehicle.
          </p>

          <h3 className="text-xl font-semibold text-[#0d3250] mb-4">Features</h3>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>Competitive interest rates</li>
            <li>Fast approval process</li>
            <li>Flexible repayment terms</li>
            <li>New and used car financing</li>
            <li>Simple application process</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#0d3250] mb-4">Loan Options</h3>
          <p className="text-[#666666] mb-4">
            We offer car loans for both new and used vehicles. Our team will help you find the best 
            financing option that fits your budget and needs.
          </p>

          <p className="text-[#666666]">
            Ready to drive away in your new car? Contact us today to get started with your car loan application.
          </p>
        </div>
      </div>
    </Section>
  );
}

