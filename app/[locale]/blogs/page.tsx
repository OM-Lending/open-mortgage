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
      slug: "choosing-the-right-mortgage-broker",
      title: "Choosing the Right Mortgage Broker",
      excerpt:
        "Key questions to ask and factors to consider when selecting a broker to guide your home loan.",
      date: "2025-01-20",
    },
    {
      slug: "understanding-mortgage-rates",
      title: "Understanding Mortgage Rates",
      excerpt:
        "Learn about how mortgage rates work and what factors influence them.",
      date: "2025-01-15",
    },
    {
      slug: "first-home-buyer-guide",
      title: "First Home Buyer Guide",
      excerpt:
        "A comprehensive guide for first-time home buyers navigating the mortgage process.",
      date: "2025-01-10",
    },
    {
      slug: "tips-for-loan-approval",
      title: "Tips for Loan Approval",
      excerpt:
        "Discover strategies to improve your chances of getting approved for a loan.",
      date: "2025-01-05",
    },
    {
      slug: "upgrading-your-car-guide",
      title: "Thinking of Upgrading Your Car? Everything U Need to Know!",
      excerpt:
        "Choosing the right car loan can save you thousands of dollars in interest and fees. ",
      date: "2025-02-04",
    },   
    {
      slug: "comparison-rate-vs-standard-variable-rate",
      title: "Comparison Rate vs. Standard Variable Rate (SVR)",
      excerpt:
        "Comparison Rate vs. Standard Variable Rate (SVR): Do You Really Understand the Difference? ",
      date: "2025-02-11",
    },
    {
      slug: "why-are-more-people-becoming-mortgage-prisoners",
      title: "Why Are More People Becoming Mortgage Prisoners?",
      excerpt:
        "many borrowers are finding it increasingly difficult to refinance their existing loans, especially those with higher loan amounts. This phenomenon has been coined as Mortgage Prisoners.",
      date: "2025-02-17",
    },  
    {
      slug: "bridging-loans",
      title: "Bridging Loans: Should You Buy or Sell First When Moving Homes?",
      excerpt:
        "bridging loans—a financial solution designed to help you secure your next home while selling your existing on.",
      date: "2025-02-24",
    },
    {
      slug: "can-parents-apply-for-a-home-loan",
      title: "Can Parents on Parental Leave Still Apply for a Home Loan?",
      excerpt:
        "A couple, already homeowners with an existing mortgage, faced financial strain due to rising interest rates.",
      date: "2025-02-26",
    },   
    {
      slug: "Offset-account-vs-redraw-facility",
      title: "Offset Account vs. Redraw Facility",
      excerpt:
        "Offset Account vs. Redraw Facility: Which Saves You More on Your Home Loan?",
      date: "2025-03-03",
    },
    {
      slug: "fixed-rate-expiring-high-interest-rates",
      title: "Fixed Rate Expiring? Facing High Interest Rates?",
      excerpt:
        "If your fixed-rate home loan is about to expire, you might be in for a shock—going from historically low rates (around 2%) to standard variable rates exceeding 7%.",
      date: "2025-03-11",
    },
    {
      slug: "final-inspection-before-property-settlement",
      title: "Final Inspection Before Property Settlement! Did You Get It Right",
      excerpt:
        "How important is the final inspection before property settlement? If it has been a few months since you first exchanged contracts, anything could have happened in the meantime",
      date: "2025-03-13",
    },
    {
      slug: "what-income-proof-does-a-PAYG-director-need",
      title: "What Income Proof Does a PAYG Director Need?",
      excerpt:
        "Can Self-Employed Individuals Pay Themselves a Salary to Apply for a Loan? What Income Proof Does a PAYG Director Need?",
      date: "2025-03-17",
    },
    {
      slug: "get-loan-and-save",
      title: "How to Get a 90% Loan and Save Nearly $40,000 on LMI",
      excerpt:
        "Our recent clients, a married couple with no children, were looking to buy their first home. The wife is a registered nurse working at a local medical center. Two years ago, they applied for the 887 visa and recently received their visa grant letter.",
      date: "2025-03-28",
    },
    {
      slug: "buy-a-home-with-loan",
      title: "Buy a Home with a 90% Loan",
      excerpt:
        "Buy a Home with a 90% Loan—No LMI? These Professionals in Australia Are in Luck!",
      date: "2025-04-04",
    },     
    {
      slug: "default-payments-amidst-continuous-interest-rate-hike",
      title: "Be Aware of Default Payments Amidst Continuous Interest Rate Hike",
      excerpt:
        "For those with home loans, take note! With recent interest rate hikes from banks, monthly repayment pressure has been growing, and many people are experiencing default payments—failure to pay their home loans on time.",
      date: "2025-04-07",
    },
    {
      slug: "how-banks-approve-loans-in-australia",
      title: "How Banks Approve Loans in Australia?",
      excerpt:
        "When applying for a loan in Australia, different banks and financial institutions may have slightly varied processes, but they all generally follow a common principle: the 5C Loan Approval Principle.",
      date: "2025-06-10",
    },  
    {
      slug: "fbaa-calls-for-a-review-of-the-home-loan",
      title: "FBAA Calls for a Review of the Home Loan \"Buffer\"",
      excerpt:
        "FBAA Calls for a Review of the Home Loan \"Buffer\" – What Does It Mean for You?Thinking of buying a home or applying for a mortgage? Then you need to know about the loan buffer – a key factor affecting your borrowing power!",
      date: "2025-07-01",
    },   
    {
      slug: "how-to-balance-family-and-career-in-australia",
      title: "How to Balance Family and Career in Australia",
      excerpt:
        "Maternity Leave or Mortgage? Why Not Both! How to Balance Family and Career in Australia.",
      date: "2025-07-27",
    },
    {
      slug: "home-loan-application-benefits",
      title: "Home Loan Application Benefits",
      excerpt:
        "Did You Know Government Benefits Can Boost Your Home Loan Application? Let’s Find Out How!",
      date: "2025-08-22",
    },
    {
      slug: "what-is-a-rate-lock-mortgage",
      title: "What Is a 'Rate Lock' Mortgage? ",
      excerpt:
        "Have you ever applied for a fixed rate home loan when interest rates looked favourable, only to find the rate had gone up by the time your loan was settled?",
      date: "2025-09-10",
    },
    {
      slug: "new-opportunity-to-get-a-government-boost",
      title: "New Financial Year, New Opportunity to Get a Government Boost!",
      excerpt:
        "Recently, Australian citizens and permanent residents (PR) can access the First Home Guarantee (FHBG) scheme. With as little as a 5% deposit, you could own your first home without needing to pay thousands in Lenders Mortgage Insurance (LMI).",
      date: "2025-10-17",
    },
    {
      slug: "boost-your-borrowing-power",
      title: "Boost Your Borrowing Power by 20% Without Increasing Your Income!",
      excerpt:
        "Recently, Australian citizens and permanent residents (PR) can access the First Home Guarantee (FHBG) scheme. With as little as a 5% deposit, you could own your first home without needing to pay thousands in Lenders Mortgage Insurance (LMI).",
      date: "2025-11-11",
    },
    {
      slug: "how-we-secured-a-complex-trust-loan",
      title: "How We Secured a Complex Trust Loan Just Days Before Settlement?",
      excerpt:
        "Buying property under a trust structure can offer long-term benefits like asset protection, tax efficiency, and strategic financial planning — but when it comes to getting the loan approved, the process is often far from simple.",
      date: "2025-12-05",
    },    
  ],
  zh: [
    {
      slug: "choosing-the-right-mortgage-broker",
      title: "如何选择合适的房贷经纪人",
      excerpt:
        "了解挑选房贷经纪人时需要考虑的关键因素和必问问题，帮助您找到真正站在您立场的一位伙伴。",
      date: "2025-01-20",
    },
    {
      slug: "understanding-mortgage-rates",
      title: "如何看懂房贷利率",
      excerpt:
        "了解房贷利率的构成，以及信用评分、贷款期限和市场环境等关键影响因素。",
      date: "2025-01-15",
    },
    {
      slug: "first-home-buyer-guide",
      title: "首次购房指南",
      excerpt:
        "为首次购房者准备的完整流程指南，从资金准备到贷款审批，一步步拆解。",
      date: "2025-01-10",
    },
    {
      slug: "tips-for-loan-approval",
      title: "提升贷款获批率的小贴士",
      excerpt: "从信用记录到资料准备，多维度提升您的贷款通过率。",
      date: "2025-01-05",
    },
    {
      slug: "loan-process-revealed",
      title: "贷款流程大揭秘 (Loan Process Revealed)",
      excerpt: "有很多新贷款的小伙伴一定都遇到过这样的问题：第一次做贷款，对整体的流程什么的都不懂，被动的跟着broker或者银行走是不是很没有安全感？今天，小编就很贴心的为大家准备了贷款的全部流程以及所需的材料，快跟我一起来看一下吧!",
      date: "2025-04-07",
    },
    {
      slug: "company-depreciation-can-support-loan",
      title: "自雇人士看过来~公司折旧也是可以support我们的贷款",
      excerpt: " 自己做生意的话在贷款的时候有什么要注意的呢？今天，小编就专门为自雇人士带来一个小福利，给大家讲讲自己开公司有哪些小tips可以增加咱们的贷款能力。",
      date: "2025-05-02",
    },
    {
      slug: "incomes-can-help-us-increase-our-loan-capacity",
      title: "除基本工资外，还有哪些收入是可以帮助我们增加贷款能力的？",
      excerpt:
        "除基本工资外，还有哪些收入是可以帮助我们增加贷款能力的？今天我们就来聊一聊收入中的额外收入是如何计算的。",
      date: "2025-05-27",
    },
    {
      slug: "the-loan-interest-rate-might-become",
      title: "错过这篇文章，你的贷款利率可能就变成了7%",
      excerpt:
        "Yellow Brick Road 执行主席、抵押贷款市场先驱 Mark Bouris在最近的The Adviser播客上发出警告：固定利率借款人将受到标准浮动利率的打击！ 还款利率直接被银行提高了？！",
      date: "2025-06-04",
    },
    {
      slug: "can-one-obtain-a-loan-with-a-poor-credit-record",
      title: "案例分析 - 信用记录不良可以获得贷款吗？",
      excerpt:
        "账单（gas, electric, water, phone等等），如果这份账单过了due date还未被支付，那么，您的信用记录上就会出现一次default。",
      date: "2025-07-07",
    },
    {
      slug: "taking-on-multiple-jobs-to-further-enhance-ones-ability-to-take-out-loans",
      title: "如何用多份工作来进一步增加自己的贷款能力？",
      excerpt:
        "今天小编以这个真实case为例，跟大家讲一讲如何不靠政府，靠自己勤劳的双手来增加自己的借贷能力-double job income 多份工作收入。",
      date: "2025-08-13",
    },
    {
      slug: "get-a-loan-without-having-to-pay-LMI",
      title: "如何贷款100% 还不用付LMI",
      excerpt:
        "今天我们就来讲一讲Family Guarantee Mortgage – 家庭担保贷款方案。",
      date: "2025-09-07",
    },
    {
      slug: "choose-fixed-or-floating-mortgage-in-Australia?",
      title: "澳洲房贷该选固定还是该选浮动？",
      excerpt:
        "在澳洲贷款大致分为三种，客户在买房申请贷款的时候，可以选择Fixed rate和Variable rate，以及Split loans，即Fixed rate和Variable rate的组合。客户可以根据自己的需求来选择利率的类型。",
      date: "2025-09-19",
    },
    {
      slug: "do-you-know-common-debt-reducer",
      title: "如何最大化贷款能力？Common Debt Reducer 你了解吗?",
      excerpt:
        "假设你与他人（如伴侣、朋友、家人亲戚、同事等）有一套写在两人共同名下的房屋贷款，现在你想要以个人名义单独申请一套新的房屋贷款。那么，银行会对你的个人债务做出怎样的评估呢？",
      date: "2025-10-13",
    },
    {
      slug: "why-prepaying-interest",
      title: "为什么要提前⽀付利息？",
      excerpt:
        "这是⼀些合格投资者⼝袋⾥有更多钱的⽅法！",
      date: "2025-10-20",
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
              <p className="text-[#666666] mb-4 grow">{post.excerpt}</p>
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
