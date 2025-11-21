import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import type { Metadata } from 'next';

const loanCategories = [
  {
    title: 'Buyers',
    loans: [
      {
        name: 'Standard variable rate home loan',
        description: 'Best for first-time buyers; the most common type of home loan.',
      },
      {
        name: 'Introductory home loan',
        description: 'Save money with a lower rate during the initial phase (usually 12 months).',
      },
      {
        name: 'Interest-only home loan',
        description: 'Pay only interest on the loan, typically available for the first five years.',
      },
      {
        name: 'Fixed-rate mortgage',
        description: 'Lock in an interest rate for up to five years so you can budget with certainty.',
      },
      {
        name: 'Split-rate loan',
        description: 'Allocate your mortgage between fixed and variable rates for a set term.',
      },
      {
        name: 'Guarantor home loan',
        description: 'Have another property owner guarantee a portion of the loan to help with small or zero deposits.',
      },
      {
        name: 'Non-conforming home loan',
        description: 'Buy a property even with a higher-risk credit profile or irregular income.',
      },
      {
        name: 'Low-doc loan',
        description: 'Lower documentation requirements when you lack regular payslips or extensive credit history.',
      },
      {
        name: 'Age & disability home loan',
        description: 'Designed for borrowers who struggle to qualify because of age or physical disability.',
      },
      {
        name: 'Construction home loan',
        description: 'Pay less upfront when building a new home or completing renovations.',
      },
      {
        name: 'Owner-occupier home loan',
        description: 'Ideal when you plan to live in the property instead of renting it out.',
      },
    ],
  },
  {
    title: 'Investors',
    loans: [
      {
        name: 'Investment loan',
        description: 'Rent out your property and benefit from Australia’s strong long-term real estate performance.',
      },
      {
        name: 'Self-managed super fund (SMSF) home loan',
        description: 'Use retirement savings to invest in property with potential tax advantages.',
      },
    ],
  },
  {
    title: 'Home Owners',
    loans: [
      {
        name: 'Refinancing home loan',
        description: 'Pay out your current loan and restart with a better rate or lender.',
      },
      {
        name: 'Line of credit home loan',
        description: 'Access your equity via a credit line repaid either interest-only or principal + interest.',
      },
      {
        name: 'Bridging home loan',
        description: 'Finance a new purchase while you wait to sell your existing home; usually up to six months.',
      },
      {
        name: 'Reverse mortgage',
        description: 'Retirees and pensioners can access cash while keeping their home by using it as security.',
      },
    ],
  },
];

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
    <Section
      title={t('homeLoan')}
      subtitle="Buying a property? Are you ..."
      className="bg-white py-16"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="space-y-10">
          {loanCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-[28px] bg-[#f7f8fb] p-8 shadow-xl transition-shadow hover:shadow-2xl"
            >
              <header className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#0d3250]">
                  {category.title}
                </p>
                <h2 className="text-4xl font-bold text-[#0d3250] mt-2">{category.title} Loans</h2>
              </header>
              <div className="grid gap-6 md:grid-cols-2">
                {category.loans.map((loan) => (
                  <div
                    key={loan.name}
                    className="rounded-2xl bg-white p-8 shadow-xl min-h-[200px] flex flex-col justify-between"
                  >
                    <h3 className="text-2xl font-semibold text-[#0d3250] mb-3">{loan.name}</h3>
                    <p className="text-lg text-[#4f4f4f] leading-relaxed">{loan.description}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
