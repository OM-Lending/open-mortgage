import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
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
      <div className="max-w-2xl mx-auto">
        <Card>
          <p className="text-[#666666] mb-6">
            Calculate how much you can borrow based on your income and expenses. 
            Enter your financial details below.
          </p>
          
          <form className="space-y-4">
            <Input
              type="number"
              label="Annual Income"
              placeholder="Enter annual income"
              name="annualIncome"
            />
            
            <Input
              type="number"
              label="Monthly Expenses"
              placeholder="Enter monthly expenses"
              name="monthlyExpenses"
            />
            
            <Input
              type="number"
              label="Existing Loan Repayments"
              placeholder="Enter existing loan repayments"
              name="existingLoans"
            />
            
            <Input
              type="number"
              label="Interest Rate (%)"
              placeholder="Enter expected interest rate"
              name="interestRate"
              step="0.01"
            />
            
            <Input
              type="number"
              label="Loan Term (years)"
              placeholder="Enter loan term"
              name="loanTerm"
            />
            
            <div className="pt-4">
              <Button type="submit" variant="primary" className="w-full">
                Calculate Borrowing Capacity
              </Button>
            </div>
          </form>
          
          <div className="mt-6 p-4 bg-gray-50 border border-[#e0e0e0]">
            <p className="text-sm text-[#666666]">
              This is a placeholder calculator. Results will be displayed here once functionality is implemented.
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
}

