import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { BorrowingCalculator } from '@/components/BorrowingCalculator';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Loan Borrowing Calculator - Open Mortgage',
    description: 'Calculate how much you can borrow for your loan',
    keywords: 'borrowing calculator, loan capacity calculator, borrowing power',
  };
}

export default async function LoanBorrowingCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });

  return (
    <Section title={t('loanBorrowingCalculator')} className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto">
        <Card>
          <p className="text-[#666666] mb-6">
            Calculate how much you can borrow based on your income and expenses. 
            Enter your financial details below.
          </p>
          <BorrowingCalculator />
        </Card>
      </div>
    </Section>
  );
}

