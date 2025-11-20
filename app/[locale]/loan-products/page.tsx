import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Loan Products - Open Mortgage',
    description: 'Explore our range of loan products and find the right solution for you',
    keywords: 'loan products, mortgage products, financial products',
  };
}

export default async function LoanProductsPage() {

  return (
    <Section title="Loan Products" className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-[#666666] mb-8 text-center">
          We offer a comprehensive range of loan products to suit various needs and circumstances.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card title="Fixed Rate Loans">
            <p className="text-[#666666] mb-4">
              Lock in your interest rate for the entire loan term. Perfect for budgeting and peace of mind.
            </p>
            <ul className="list-disc list-inside text-[#666666] space-y-2">
              <li>Stable monthly repayments</li>
              <li>Protection from rate increases</li>
              <li>Terms from 1 to 5 years</li>
            </ul>
          </Card>

          <Card title="Variable Rate Loans">
            <p className="text-[#666666] mb-4">
              Interest rates that can change with market conditions. Often offer more flexibility.
            </p>
            <ul className="list-disc list-inside text-[#666666] space-y-2">
              <li>Potential for lower rates</li>
              <li>More flexible features</li>
              <li>Offset account options</li>
            </ul>
          </Card>

          <Card title="Interest Only Loans">
            <p className="text-[#666666] mb-4">
              Pay only the interest for a set period, reducing initial repayments.
            </p>
            <ul className="list-disc list-inside text-[#666666] space-y-2">
              <li>Lower initial repayments</li>
              <li>Popular for investment properties</li>
              <li>Flexible terms available</li>
            </ul>
          </Card>

          <Card title="Split Loans">
            <p className="text-[#666666] mb-4">
              Combine fixed and variable rates to balance stability and flexibility.
            </p>
            <ul className="list-disc list-inside text-[#666666] space-y-2">
              <li>Best of both worlds</li>
              <li>Customizable split ratios</li>
              <li>Flexible repayment options</li>
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  );
}

