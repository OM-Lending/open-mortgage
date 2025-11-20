import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { Button } from '@/components/Button';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Free Valuation - Open Mortgage',
    description: 'Get a free property valuation from our experts',
    keywords: 'property valuation, free valuation, property assessment',
  };
}

export default async function FreeValuationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  return (
    <Section title={t('freeValuation')} className="bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto">
        <Card>
          <p className="text-[#666666] mb-6">
            Request a free property valuation from our expert team. Fill out the form below 
            and we&apos;ll get back to you with an accurate assessment.
          </p>
          
          <form className="space-y-4">
            <Input
              type="text"
              label={tCommon('name')}
              placeholder="Enter your name"
              name="name"
              required
            />
            
            <Input
              type="email"
              label={tCommon('email')}
              placeholder="Enter your email"
              name="email"
              required
            />
            
            <Input
              type="tel"
              label={tCommon('phone')}
              placeholder="Enter your phone number"
              name="phone"
            />
            
            <Input
              type="text"
              label="Property Address"
              placeholder="Enter property address"
              name="address"
              required
            />
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#0d3250] mb-2">
                Property Type
              </label>
              <select className="w-full px-4 py-2 border border-[#e0e0e0] bg-white text-[#0d3250] focus:outline-none focus:border-[#0d3250]">
                <option>House</option>
                <option>Apartment</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>
            </div>
            
            <Textarea
              label={tCommon('message')}
              placeholder="Additional details about the property"
              name="message"
            />
            
            <div className="pt-4">
              <Button type="submit" variant="primary" className="w-full">
                Request Valuation
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Section>
  );
}

