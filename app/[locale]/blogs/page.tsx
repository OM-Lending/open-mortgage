import { getTranslations } from "next-intl/server";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import Link from "next/link";
import type { Metadata } from "next";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

type LocaleKey = "en" | "zh";

const blogPostsByLocale: Record<LocaleKey, BlogPost[]> = {
  en: [
    {
      slug: "understanding-mortgage-rates",
      title: "Understanding Mortgage Rates",
      excerpt:
        "Learn about how mortgage rates work and what factors influence them.",
      date: "2024-01-15",
    },
    {
      slug: "first-home-buyer-guide",
      title: "First Home Buyer Guide",
      excerpt:
        "A comprehensive guide for first-time home buyers navigating the mortgage process.",
      date: "2024-01-10",
    },
    {
      slug: "tips-for-loan-approval",
      title: "Tips for Loan Approval",
      excerpt:
        "Discover strategies to improve your chances of getting approved for a loan.",
      date: "2024-01-05",
    },
  ],
  zh: [
    {
      slug: "understanding-mortgage-rates",
      title: "如何看懂房贷利率",
      excerpt:
        "了解房贷利率的构成，以及信用评分、贷款期限和市场环境等关键影响因素。",
      date: "2024-01-15",
    },
    {
      slug: "first-home-buyer-guide",
      title: "首次购房指南",
      excerpt:
        "为首次购房者准备的完整流程指南，从资金准备到贷款审批，一步步拆解。",
      date: "2024-01-10",
    },
    {
      slug: "tips-for-loan-approval",
      title: "提升贷款获批率的小贴士",
      excerpt:
        "从信用记录到资料准备，多维度提升您的贷款通过率。",
      date: "2024-01-05",
    },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang: LocaleKey = locale === "zh" ? "zh" : "en";
  const t = await getTranslations({ locale: lang, namespace: "blogs" });

  return {
    title: t("blogsSeoTitle"),
    description: t("blogsSeoDescription"),
  };
}

export default async function BlogsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang: LocaleKey = locale === "zh" ? "zh" : "en";
  const commonT = await getTranslations({ locale: lang, namespace: "common" });
  const blogsT = await getTranslations({ locale: lang, namespace: "blogs" });
  const blogPosts = blogPostsByLocale[lang];

  return (
    <Section title={blogsT("listTitle")} className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-[#666666] mb-8 text-center">
          {blogsT("listIntro")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="h-full flex flex-col">
              <h3 className="text-xl font-semibold text-[#0d3250] mb-3">
                {post.title}
              </h3>
              <p className="text-[#666666] mb-4 flex-grow">{post.excerpt}</p>
              <div className="text-sm text-[#666666] mb-4">
                {blogsT("publishedOn")}{" "}
                {new Date(post.date).toLocaleDateString(
                  lang === "zh" ? "zh-CN" : "en-AU",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </div>
              <Link href={`/${locale}/blogs/${post.slug}`}>
                <Button variant="outline" className="w-full">
                  {commonT("readMore")}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}


