import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { Button } from '@/components/Button';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contact Us - Open Mortgage',
    description: 'Get in touch with Open Mortgage for all your mortgage and loan needs',
    keywords: 'contact Open Mortgage, mortgage inquiry, loan consultation',
  };
}

export default async function ContactUsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });

  return (
    <Section title="Contact Us" className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-[#666666] mb-8 text-center">
          Have questions or ready to get started? We&apos;re here to help. Fill out the form below or contact us directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-semibold text-[#0d3250] mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <Input
                type="text"
                label={t('name')}
                placeholder="Enter your name"
                name="name"
                required
              />
              
              <Input
                type="email"
                label={t('email')}
                placeholder="Enter your email"
                name="email"
                required
              />
              
              <Input
                type="tel"
                label={t('phone')}
                placeholder="Enter your phone number"
                name="phone"
              />
              
              <Textarea
                label={t('message')}
                placeholder="Tell us how we can help"
                name="message"
                required
              />
              
              <Button type="submit" variant="primary" className="w-full">
                {t('submit')}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-semibold text-[#0d3250] mb-4">Contact Information</h3>
              <div className="space-y-5 text-[#666666]">
                <div>
                  <strong className="text-[#0d3250]">Email:</strong>
                  <p>info@omlending.com.au</p>
                </div>
                <div>
                  <strong className="text-[#0d3250]">Sydney Office:</strong>
                  <p>1211/87-89 Liverpool Street, Sydney NSW 2000</p>
                </div>
                <div>
                  <strong className="text-[#0d3250]">Brisbane Office:</strong>
                  <p>Suite 1.8, 7 Clunies Ross Court, Eight Mile Plains QLD 4113</p>
                </div>
                <div>
                  <strong className="text-[#0d3250]">Hobart Office:</strong>
                  <p>Level 1/22 Liverpool Street, Hobart TAS 7000</p>
                </div>
                <div>
                  <strong className="text-[#0d3250]">Business Hours:</strong>
                  <p>
                    Mon – Fri: 10:00 am – 06:00 pm<br />
                    Sat: Closed<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}

