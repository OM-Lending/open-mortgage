import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Loan Preparation - Open Mortgage',
    description: 'Prepare for your loan application with our comprehensive guide',
    keywords: 'loan preparation, loan documents, loan application',
  };
}

export default async function LoanPreparationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });

  return (
    <Section title={t('loanPreparation')} className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-[#0d3250] mb-4">Preparing for Your Loan Application</h2>
          <p className="text-[#666666] mb-6">
            Being well-prepared can significantly speed up your loan application process. 
            Here&apos;s what you&apos;ll need to have ready.
          </p>

          <h3 className="text-xl font-semibold text-[#0d3250] mb-4">Required Documents</h3>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>Proof of identity (driver&apos;s license or passport)</li>
            <li>Proof of income (payslips, tax returns, bank statements)</li>
            <li>Proof of employment</li>
            <li>Asset statements</li>
            <li>Credit history report</li>
            <li>Property details (if purchasing)</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#0d3250] mb-4">Financial Preparation</h3>
          <p className="text-[#666666] mb-4">
            Before applying for a loan, ensure you have a clear understanding of your financial situation:
          </p>
          <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
            <li>Calculate your debt-to-income ratio</li>
            <li>Review your credit score</li>
            <li>Save for a deposit</li>
            <li>Budget for additional costs (stamp duty, legal fees, etc.)</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#0d3250] mb-4">Tips for Success</h3>
          <ol className="list-decimal list-inside text-[#666666] mb-6 space-y-2">
            <li>Organize all documents before starting your application</li>
            <li>Be honest about your financial situation</li>
            <li>Ask questions if you&apos;re unsure about anything</li>
            <li>Work with our experts to find the best loan option</li>
          </ol>

          <p className="text-[#666666]">
            Need help preparing your loan application? Contact us today and our team will guide you through the process.
          </p>
        </div>
      </div>
    </Section>
  );
}

