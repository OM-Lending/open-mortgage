import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: 'About Us - Open Mortgage',
    description: 'Learn about Open Mortgage and our commitment to helping you achieve your financial goals',
    keywords: 'about Open Mortgage, mortgage company, financial services',
  };
}

export default async function AboutUsPage({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <>
      <Section className="bg-[#0d3250] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Open Mortgage</h1>
            <p className="text-xl text-gray-200">
              Your trusted partner for mortgage and loan solutions
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-[#0d3250] mb-4">Our Mission</h2>
            <p className="text-[#666666] mb-6">
              At Open Mortgage, we are dedicated to helping individuals and businesses achieve their 
              financial goals through expert mortgage and loan services. We believe that everyone 
              deserves access to professional financial guidance and the best loan products available.
            </p>

            <h2 className="text-2xl font-semibold text-[#0d3250] mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-[#666666] mb-6 space-y-2">
              <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
              <li><strong>Expertise:</strong> Our team consists of experienced professionals committed to ongoing education.</li>
              <li><strong>Customer Focus:</strong> Your success is our priority. We tailor solutions to your unique needs.</li>
              <li><strong>Innovation:</strong> We leverage technology and best practices to provide efficient service.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0d3250] mb-4">Why Choose Us</h2>
            <p className="text-[#666666] mb-4">
              With years of experience in the mortgage industry, we have built strong relationships 
              with multiple lenders, allowing us to find you the best rates and terms. Our team 
              guides you through every step of the process, making your loan journey smooth and stress-free.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#0d3250] mb-2">Expert Team</h3>
                <p className="text-[#666666]">
                  Experienced professionals dedicated to your success
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#0d3250] mb-2">Best Rates</h3>
                <p className="text-[#666666]">
                  Access to competitive rates from multiple lenders
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#0d3250] mb-2">Personalized Service</h3>
                <p className="text-[#666666]">
                  Tailored solutions for your unique financial situation
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

