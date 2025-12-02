import { getTranslations } from "next-intl/server";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: "Open Mortgage - Your Trusted Mortgage Partner",
    description: t("subtitle"),
    keywords:
      "mortgage, home loan, car loan, commercial loan, financial services",
    openGraph: {
      title: "Open Mortgage - Your Trusted Mortgage Partner",
      description: t("subtitle"),
      type: "website",
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const tHome = await getTranslations({ locale, namespace: "home" });
  const tServices = await getTranslations({ locale, namespace: "services" });
  const tResources = await getTranslations({ locale, namespace: "resources" });

  // All lender images
  const lenderImages = [
    { src: "/lenders/cr=w_389,h_129.webp", width: 389, height: 129 },
    { src: "/lenders/cr=w_356,h_200.webp", width: 356, height: 200 },
    { src: "/lenders/rs=w_289,h_200,cg_true.webp", width: 289, height: 200 },
    { src: "/lenders/rs=w_1009,h_200,cg_true.webp", width: 1009, height: 200 },
    { src: "/lenders/rs=h_100,cg_true,m.webp", width: 200, height: 100 },
    { src: "/lenders/rs=w_360,h_200,cg_true.webp", width: 360, height: 200 },
    { src: "/lenders/cr=w_667,h_200.webp", width: 667, height: 200 },
    { src: "/lenders/cr=w_256,h_200.webp", width: 256, height: 200 },
    { src: "/lenders/cr=w_301,h_167.webp", width: 301, height: 167 },
    { src: "/lenders/cr=w_388,h_169.webp", width: 388, height: 169 },
    {
      src: "/lenders/rs=w_355,h_200,cg_true (4).webp",
      width: 533,
      height: 200,
    },
    {
      src: "/lenders/rs=w_356,h_200,cg_true (1).webp",
      width: 650,
      height: 161,
    },
    { src: "/lenders/cr=w_431,h_200.webp", width: 431, height: 200 },
    { src: "/lenders/cr=w_450,h_112.webp", width: 450, height: 112 },
    { src: "/lenders/cr=w_484,h_200.webp", width: 484, height: 200 },
    { src: "/lenders/cr=w_787,h_200.webp", width: 787, height: 200 },
    { src: "/lenders/rs=w_371,h_136,cg_true.webp", width: 371, height: 136 },
    { src: "/lenders/boq.png", width: 500, height: 200 },
  ];

  return (
    <>
      {/* Hero Section with Video Background */}
      <Hero
        title={tHome("title")}
        subtitle={tHome("subtitle")}
        ctaText={tHome("cta")}
        ctaLink={`/${locale}/our-process`}
        locale={locale}
      />

      {/* Welcome to Open Mortgage Section */}
      <section className="py-24 bg-[#0d3250] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {tHome("welcome.title")}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
              {tHome("welcome.content")}
            </p>
            <Link href={`/${locale}/about-us`}>
              <Button
                variant="secondary"
                className="bg-white text-[#0d3250] hover:bg-gray-100 px-8 py-4 rounded-full"
              >
                {t("more.aboutUs")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Open Mortgage Section */}
      <Section title={tHome("whyChoose.title")} className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card
            title={tHome("whyChoose.items.freePropertyValuation.title")}
            image="/Free Property Valuation.webp"
            imageAlt="Free Property Valuation"
          >
            <div className="mt-auto">
              <Link href={`/${locale}/resources/free-valuation`}>
                <Button variant="primary" className="w-full mt-4 rounded-full">
                  {tHome("whyChoose.items.freePropertyValuation.button")}
                </Button>
              </Link>
            </div>
          </Card>
          <Card
            title={tHome("whyChoose.items.tailoredLoanSolution.title")}
            image="/Tailored Loan Solution.webp"
            imageAlt="Tailored Loan Solution"
          >
            <div className="mt-auto">
              <Link href={`/${locale}/services`}>
                <Button variant="primary" className="w-full mt-4 rounded-full">
                  {tHome("whyChoose.items.tailoredLoanSolution.button")}
                </Button>
              </Link>
            </div>
          </Card>
          <Card
            title={tHome("whyChoose.items.professionalTeam.title")}
            image="/Professional Team.webp"
            imageAlt="Professional Team"
          >
            <div className="mt-auto">
              <Link href={`/${locale}/contact-us`}>
                <Button variant="primary" className="w-full mt-4 rounded-full">
                  {tHome("whyChoose.items.professionalTeam.button")}
                </Button>
              </Link>
            </div>
          </Card>
          <Card
            title={tHome("whyChoose.items.competitiveRates.title")}
            image="/Competitive Rates.webp"
            imageAlt="Competitive Rates"
          >
            <div className="mt-auto">
              <Link href={`/${locale}/loan-products`}>
                <Button variant="primary" className="w-full mt-4 rounded-full">
                  {tHome("whyChoose.items.competitiveRates.button")}
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* Services Section */}
      <Section title={tHome("servicesTitle")} className="bg-[#f9fbff]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card
            title={tServices("homeLoan")}
            image="/Home Loans.webp"
            imageAlt="Home Loans"
          >
            <div className="mt-auto">
              <Link href={`/${locale}/services/home-loan`}>
                <Button variant="primary" className="w-full rounded-full">
                  {t("common.readMore")}
                </Button>
              </Link>
            </div>
          </Card>

          <Card
            title={tServices("carLoan")}
            image="/Car Loans.webp"
            imageAlt="Car Loans"
          >
            <div className="mt-auto">
              <Link href={`/${locale}/services/car-loan`}>
                <Button variant="primary" className="w-full rounded-full">
                  {t("common.readMore")}
                </Button>
              </Link>
            </div>
          </Card>

          <Card
            title={tServices("commercialLoan")}
            image="/Business Loans.webp"
            imageAlt="Business Loans"
          >
            <div className="mt-auto">
              <Link href={`/${locale}/services/commercial-loan`}>
                <Button variant="primary" className="w-full rounded-full">
                  {t("common.readMore")}
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* Resources Section */}
      <Section title={tHome("resourcesTitle")} className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card
            title={tResources("repaymentCalculator")}
            image="/Repayment Calculator.webp"
            imageAlt="Repayment Calculator"
          >
            <div className="mt-auto">
              <Link href={`/${locale}/resources/repayment-calculator`}>
                <Button variant="secondary" className="w-full rounded-full">
                  {t("common.readMore")}
                </Button>
              </Link>
            </div>
          </Card>

          <Card
            title={tResources("stampDutyCalculator")}
            image="/Stamp Duty Calculator.webp"
            imageAlt="Stamp Duty Calculator"
          >
            <div className="mt-auto">
              <Link href={`/${locale}/resources/stamp-duty-calculator`}>
                <Button variant="secondary" className="w-full rounded-full">
                  {t("common.readMore")}
                </Button>
              </Link>
            </div>
          </Card>

          <Card
            title={tResources("loanBorrowingCalculator")}
            image="/Loan Borrowing Calculator.webp"
            imageAlt="Loan Borrowing Calculator"
          >
            <div className="mt-auto">
              <Link href={`/${locale}/resources/loan-borrowing-calculator`}>
                <Button variant="secondary" className="w-full rounded-full">
                  {t("common.readMore")}
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* Our Lenders Section */}
      <Section title={tHome("lenders.title")} className="bg-[#f9fbff]">
        <p className="text-center text-[#666666] mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          {tHome("lenders.description")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center max-w-7xl mx-auto">
          {lenderImages.map((lender, index) => (
            <div
              key={index}
              className="w-full aspect-video bg-white border border-[#e3e7f5] rounded-2xl flex items-center justify-center hover:shadow-lg transition-all duration-300 p-6 shadow-sm hover:-translate-y-1"
            >
              <Image
                src={lender.src}
                alt={`Lender ${index + 1}`}
                width={lender.width}
                height={lender.height}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
