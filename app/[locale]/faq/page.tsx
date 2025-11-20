import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'FAQ - Open Mortgage',
    description: 'Frequently asked questions about mortgages and loans',
    keywords: 'mortgage FAQ, loan questions, mortgage help',
  };
}

const faqs = [
  {
    question: 'What documents do I need to apply for a loan?',
    answer: 'You will typically need proof of identity, proof of income (payslips, tax returns), bank statements, proof of employment, and details about the property you&apos;re purchasing. Our team can provide a complete checklist based on your specific situation.',
  },
  {
    question: 'How long does the loan approval process take?',
    answer: 'The approval process typically takes 2-4 weeks, depending on the complexity of your application and how quickly you can provide required documents. Pre-approval can often be obtained within 24-48 hours.',
  },
  {
    question: 'What is the minimum deposit required?',
    answer: 'Most lenders require a minimum deposit of 10-20% of the property value. However, some government programs may allow lower deposits for eligible first home buyers.',
  },
  {
    question: 'Can I get a loan with a low credit score?',
    answer: 'While a higher credit score improves your chances, we work with various lenders who may consider applications with lower credit scores. The interest rate and terms may vary based on your credit profile.',
  },
  {
    question: 'What is the difference between fixed and variable rates?',
    answer: 'Fixed rates remain constant for a set period, providing stability. Variable rates can change with market conditions, potentially offering lower initial rates but with less certainty. We can help you choose the option that best suits your needs.',
  },
  {
    question: 'Can I make extra repayments on my loan?',
    answer: 'This depends on your loan type. Variable rate loans typically allow extra repayments without penalty. Fixed rate loans may have restrictions or fees for extra repayments. We can explain the options available with different loan products.',
  },
];

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <Section title="Frequently Asked Questions" className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-[#666666] mb-8 text-center">
          Find answers to common questions about mortgages and loans.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <h3 className="text-xl font-semibold text-[#0d3250] mb-3">
                {faq.question}
              </h3>
              <p className="text-[#666666]">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#666666] mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a 
            href={`/${locale}/contact-us`}
            className="inline-block px-6 py-3 bg-[#0d3250] text-white hover:bg-[#1a4a70] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </Section>
  );
}

