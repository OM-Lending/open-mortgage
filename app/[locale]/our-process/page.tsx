import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import Image from 'next/image';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  await params;

  return {
    title: 'Our Services - Open Mortgage',
    description: 'Comprehensive mortgage and loan services for your financial needs',
    keywords: 'mortgage services, home loan, car loan, commercial loan',
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });

  const steps = [
    { key: 'step1', image: '/our-process/rs=w_1200,h_600,cg_true.webp' },
    { key: 'step2', image: '/our-process/rs=w_1200,h_600,cg_true (1).webp' },
    { key: 'step3', image: '/our-process/rs=w_1200,h_600,cg_true (2).webp' },
    { key: 'step4', image: '/our-process/rs=w_1200,h_600,cg_true (3).webp' },
    { key: 'step5', image: '/our-process/rs=w_1200,h_600,cg_true (4).webp' },
    { key: 'step6', image: '/our-process/rs=w_1200,h_600,cg_true (5).webp' },
  ];

  return (
    <Section title={t('ourProcess.title')} className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {steps.map((step, index) => {
            const isOdd = index % 2 === 0; // Steps 1, 3, 5 (index 0, 2, 4)
            const stepTitle = t(`ourProcess.steps.${step.key}.title`);
            
            return (
              <div key={step.key} className="py-6 border-b border-gray-200 last:border-b-0">
                {/* Mobile: Image first, then content */}
                <div className="block md:hidden mb-4">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={step.image}
                      alt={stepTitle}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* Desktop: Alternating layout */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Even steps (2, 4, 6): Image on left */}
                  {!isOdd && (
                    <div className="hidden md:block flex-shrink-0 w-full md:w-80 lg:w-96">
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={step.image}
                          alt={stepTitle}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black text-[#0d3250] mb-3 leading-tight" style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900 }}>
                      {stepTitle}
                    </h3>
                    <p className="text-lg text-[#666666] leading-relaxed">
                      {t(`ourProcess.steps.${step.key}.description`)}
                    </p>
                  </div>
                  
                  {/* Odd steps (1, 3, 5): Image on right */}
                  {isOdd && (
                    <div className="hidden md:block flex-shrink-0 w-full md:w-80 lg:w-96">
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={step.image}
                          alt={stepTitle}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

