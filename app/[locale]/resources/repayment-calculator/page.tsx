import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });

  return {
    title: 'Repayment Calculator - Open Mortgage',
    description: 'Calculate your monthly loan repayments easily',
    keywords: 'repayment calculator, loan calculator, mortgage calculator',
  };
}

export default async function RepaymentCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  return (
    <Section title={t('repaymentCalculator')} className="bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto">
        <Card>
          <p className="text-[#666666] mb-6">
            Use our repayment calculator to estimate your monthly loan repayments. 
            Enter your loan details below to get started.
          </p>
          
          <form className="space-y-4">
            <Input
              type="number"
              label="Loan Amount"
              placeholder="Enter loan amount"
              name="loanAmount"
            />
            
            <Input
              type="number"
              label="Interest Rate (%)"
              placeholder="Enter interest rate"
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
                Calculate Repayment
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

