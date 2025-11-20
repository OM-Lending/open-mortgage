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
    title: 'Stamp Duty Calculator - Open Mortgage',
    description: 'Estimate stamp duty costs for your property purchase',
    keywords: 'stamp duty calculator, property tax calculator',
  };
}

export default async function StampDutyCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'resources' });

  return (
    <Section title={t('stampDutyCalculator')} className="bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto">
        <Card>
          <p className="text-[#666666] mb-6">
            Calculate the stamp duty you'll need to pay on your property purchase. 
            Enter the property details below.
          </p>
          
          <form className="space-y-4">
            <Input
              type="number"
              label="Property Value"
              placeholder="Enter property value"
              name="propertyValue"
            />
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#0d3250] mb-2">
                Property Type
              </label>
              <select className="w-full px-4 py-2 border border-[#e0e0e0] bg-white text-[#0d3250] focus:outline-none focus:border-[#0d3250]">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Investment</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#0d3250] mb-2">
                First Home Buyer
              </label>
              <select className="w-full px-4 py-2 border border-[#e0e0e0] bg-white text-[#0d3250] focus:outline-none focus:border-[#0d3250]">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            
            <div className="pt-4">
              <Button type="submit" variant="primary" className="w-full">
                Calculate Stamp Duty
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

