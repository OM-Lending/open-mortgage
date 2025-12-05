import { getTranslations } from "next-intl/server";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("seoTitle"),
    description: t("seoDescription"),
    keywords: "contact Open Mortgage, mortgage inquiry, loan consultation",
  };
}

export default async function ContactUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const tContact = await getTranslations({ locale, namespace: "contact" });

  return (
    <Section title={tContact("title")} className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-[#666666] mb-8 text-center">
          {tContact("intro")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-semibold text-[#0d3250] mb-4">
              {tContact("getInTouchHeading")}
            </h3>
            <ContactForm
              tName={tCommon("name")}
              tEmail={tCommon("email")}
              tPhone={tCommon("phone")}
              tMessage={tCommon("message")}
              tSubmit={tCommon("submit")}
            />
          </Card>

          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-semibold text-[#0d3250] mb-4">
                {tContact("infoHeading")}
              </h3>
              <div className="space-y-5 text-[#666666]">
                <div>
                  <strong className="text-[#0d3250]">
                    {tContact("emailLabel")}:
                  </strong>
                  <p>info@omlending.com.au</p>
                </div>
                <div>
                  <strong className="text-[#0d3250]">
                    {tContact("sydneyOfficeLabel")}:
                  </strong>
                  <p>1211/87-89 Liverpool Street, Sydney NSW 2000</p>
                </div>
                <div>
                  <strong className="text-[#0d3250]">
                    {tContact("brisbaneOfficeLabel")}:
                  </strong>
                  <p>
                    Suite 1.8, 7 Clunies Ross Court, Eight Mile Plains QLD 4113
                  </p>
                </div>
                <div>
                  <strong className="text-[#0d3250]">
                    {tContact("hobartOfficeLabel")}:
                  </strong>
                  <p>Level 1/22 Liverpool Street, Hobart TAS 7000</p>
                </div>
                <div>
                  <strong className="text-[#0d3250]">
                    {tContact("businessHoursLabel")}:
                  </strong>
                  <p>
                    {tContact("businessHoursLine1")}
                    <br />
                    {tContact("businessHoursLine2")}
                    <br />
                    {tContact("businessHoursLine3")}
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
