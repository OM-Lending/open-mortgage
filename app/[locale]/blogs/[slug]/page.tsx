import { Section } from "@/components/Section";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type BlogPost = {
  title: string;
  content: string;
  date: string;
};

type LocaleKey = "en" | "zh";

const blogPostsByLocale: Record<LocaleKey, Record<string, BlogPost>> = {
  en: {
    "choosing-the-right-mortgage-broker": {
      title: "Choosing the Right Mortgage Broker",
      date: "2024-01-20",
      content: `
        <h2>Why Your Choice of Broker Matters</h2>
        <p>A good mortgage broker does more than compare interest rates. The right broker will understand your goals, explain complex products in plain language, and advocate for you with lenders from application through to settlement.</p>

        <h3>1. Check Experience and Licensing</h3>
        <p>Ask how long they have been in the industry, what qualifications they hold, and which regulators or industry bodies they are registered with. An experienced, properly licensed broker is more likely to anticipate hurdles before they arise.</p>

        <h3>2. Understand Their Lender Panel</h3>
        <p>No broker works with every lender, but they should have access to a broad panel that includes major banks and specialist lenders. Ask which lenders they regularly use and why, and whether they can explain the differences between them for your situation.</p>

        <h3>3. Ask How They Are Paid</h3>
        <p>Most brokers are paid by the lender, not by you directly, but it is important to understand whether there are any additional fees. A transparent broker will clearly outline any upfront or ongoing costs and provide this information in writing.</p>

        <h3>4. Look for Clear Communication</h3>
        <p>You should feel comfortable asking questions at every stage. Choose a broker who responds promptly, explains options in simple terms, and sets realistic expectations about timing, documentation, and possible outcomes.</p>

        <h3>5. Assess Their Support After Settlement</h3>
        <p>The relationship should not end when your loan settles. A strong broker will review your loan regularly, help you understand rate changes, and discuss refinancing opportunities when it makes sense.</p>

        <p>By taking the time to ask these questions and compare options, you can partner with a broker who understands your needs and supports your long-term property and financial goals.</p>
      `,
    },
    "understanding-mortgage-rates": {
      title: "Understanding Mortgage Rates",
      date: "2024-01-15",
      content: `
        <h2>How Mortgage Rates Work</h2>
        <p>Mortgage rates are the interest rates charged on home loans. They can vary significantly based on several factors including your credit score, loan amount, loan term, and market conditions.</p>
        
        <h3>Factors Affecting Mortgage Rates</h3>
        <ul>
          <li><strong>Credit Score:</strong> Higher credit scores typically result in lower interest rates.</li>
          <li><strong>Loan Amount:</strong> Larger loans may have different rate structures.</li>
          <li><strong>Loan Term:</strong> Shorter terms often have lower rates but higher monthly payments.</li>
          <li><strong>Market Conditions:</strong> Economic factors influence overall rate trends.</li>
        </ul>
        
        <h3>Fixed vs Variable Rates</h3>
        <p>Fixed rates remain constant throughout the loan term, providing stability and predictability. Variable rates can fluctuate with market conditions, potentially offering lower initial rates but with less certainty.</p>
        
        <p>Understanding these factors can help you make informed decisions when choosing a mortgage product that suits your financial situation.</p>
      `,
    },
    "first-home-buyer-guide": {
      title: "First Home Buyer Guide",
      date: "2024-01-10",
      content: `
        <h2>Your Journey to Home Ownership</h2>
        <p>Buying your first home is an exciting milestone. This guide will help you navigate the process from start to finish.</p>
        
        <h3>Step 1: Assess Your Financial Situation</h3>
        <p>Before you start looking at properties, it's important to understand your financial position. Calculate your savings, assess your income stability, and review your credit score.</p>
        
        <h3>Step 2: Save for a Deposit</h3>
        <p>Most lenders require a deposit of at least 10-20% of the property value. Start saving early and consider government assistance programs for first home buyers.</p>
        
        <h3>Step 3: Get Pre-Approval</h3>
        <p>Obtaining pre-approval gives you a clear idea of your borrowing capacity and shows sellers you're a serious buyer.</p>
        
        <h3>Step 4: Find Your Property</h3>
        <p>Work with real estate agents and attend open houses. Consider location, property condition, and future growth potential.</p>
        
        <h3>Step 5: Finalize Your Loan</h3>
        <p>Once you've found your property, work with your mortgage broker to finalize the loan application and complete the purchase.</p>
      `,
    },
    "tips-for-loan-approval": {
      title: "Tips for Loan Approval",
      date: "2024-01-05",
      content: `
        <h2>Maximize Your Chances of Loan Approval</h2>
        <p>Getting approved for a loan requires careful preparation. Here are some tips to improve your approval chances.</p>
        
        <h3>Improve Your Credit Score</h3>
        <p>Your credit score is a key factor in loan approval. Pay bills on time, reduce existing debt, and avoid applying for multiple credit products simultaneously.</p>
        
        <h3>Reduce Your Debt-to-Income Ratio</h3>
        <p>Lenders prefer borrowers with lower debt-to-income ratios. Pay down existing debts and avoid taking on new debt before applying.</p>
        
        <h3>Save for a Larger Deposit</h3>
        <p>A larger deposit reduces the lender's risk and can improve your approval chances. It may also help you secure better interest rates.</p>
        
        <h3>Provide Complete Documentation</h3>
        <p>Ensure all required documents are accurate and up-to-date. Incomplete applications can delay or derail the approval process.</p>
        
        <h3>Work with a Mortgage Broker</h3>
        <p>Professional mortgage brokers understand lender requirements and can help match you with the right loan product for your situation.</p>
      `,
    },
  },
  zh: {
    "choosing-the-right-mortgage-broker": {
      title: "如何选择合适的房贷经纪人",
      date: "2024-01-20",
      content: `
        <h2>为什么选择经纪人很重要？</h2>
        <p>优秀的房贷经纪人不只是帮您对比利率。合适的经纪人会理解您的购房目标，用简单清晰的语言解释复杂产品，并在申请到放款的全过程中代表您与各家贷款机构沟通。</p>

        <h3>1. 了解经纪人的经验与资质</h3>
        <p>您可以询问他们从业时间、专业资格，以及受哪家监管机构或行业协会监管。经验丰富、具备正式牌照的经纪人，更能提前识别潜在问题并为您做好准备。</p>

        <h3>2. 关注他们合作的贷款机构范围</h3>
        <p>没有任何一位经纪人可以覆盖所有银行，但他们应当接触到足够广泛的贷款机构，包括主要银行与非银行机构。可以问问他们常用哪些机构、原因是什么，以及这些选择对您的具体情况意味着什么。</p>

        <h3>3. 弄清经纪人的收入来源</h3>
        <p>多数经纪人的佣金由贷款机构支付，而不是直接向客户收费，但了解是否有额外费用依然很重要。透明的经纪人会清楚说明任何前期或持续费用，并以书面形式提供。</p>

        <h3>4. 观察沟通是否清晰顺畅</h3>
        <p>在整个申请过程中，您都应该可以放心提问。选择一位能够及时回复、用通俗方式解释选项，并对时间表、所需文件以及可能结果给出现实预期的经纪人。</p>

        <h3>5. 看重成交后的持续服务</h3>
        <p>优质的经纪服务不会在贷款放款后结束。一位真正站在您立场的经纪人，会定期帮您回顾现有贷款，解释利率变化，并在合适时机讨论再融资等选择。</p>

        <p>通过提前准备这些问题并认真比较不同经纪人，您可以找到一位理解您需求、并在长期房产与财务规划中持续支持您的合作伙伴。</p>
      `,
    },
    "understanding-mortgage-rates": {
      title: "看懂房贷利率",
      date: "2024-01-15",
      content: `
        <h2>房贷利率是如何形成的？</h2>
        <p>房贷利率是您为房屋贷款支付的利息成本。利率高低会直接影响每月还款额，并受到多方面因素影响，包括个人信用评分、贷款金额、贷款年限以及整体市场环境等。</p>
        
        <h3>影响房贷利率的主要因素</h3>
        <ul>
          <li><strong>信用评分：</strong>信用记录越好，通常可以享受越优惠的利率。</li>
          <li><strong>贷款金额：</strong>贷款额度大小可能会对应不同的利率结构。</li>
          <li><strong>贷款期限：</strong>较短的贷款期限往往利率更低，但每月还款压力更大。</li>
          <li><strong>市场环境：</strong>宏观经济与央行政策会影响整体利率水平。</li>
        </ul>
        
        <h3>固定利率与浮动利率</h3>
        <p>固定利率在约定期限内保持不变，有助于锁定每月还款金额，方便规划预算。浮动利率则会随市场变化调整，起初可能更低，但未来存在一定不确定性。</p>
        
        <p>了解这些关键因素，可以帮助您在选择房贷产品时做出更适合自身情况的决定。</p>
      `,
    },
    "first-home-buyer-guide": {
      title: "首次购房全攻略",
      date: "2024-01-10",
      content: `
        <h2>迈向自住房的第一步</h2>
        <p>首次购房是重要的人生里程碑。本指南将从资金准备到贷款审批，帮助您理清每个关键步骤。</p>
        
        <h3>第一步：评估自身财务状况</h3>
        <p>在看房之前，先梳理好自己的财务基础。计算可用储蓄、评估收入稳定性，并了解自己的信用评分。</p>
        
        <h3>第二步：为首付款储蓄</h3>
        <p>大多数贷款机构会要求房价 10–20% 的首付款。建议尽早开始储蓄，并留意适用于首次购房者的政府补贴或优惠政策。</p>
        
        <h3>第三步：获取贷款预审批</h3>
        <p>预审批可以让您更清楚自己的借款能力，也向卖家表明您是有诚意并具备资金实力的买家。</p>
        
        <h3>第四步：挑选合适房产</h3>
        <p>与房产中介合作并参加开放看房活动，综合考虑地段、房屋状况及未来升值潜力。</p>
        
        <h3>第五步：完成贷款与交割</h3>
        <p>选定房产后，与您的贷款经纪人合作完成正式贷款申请与批核流程，最终完成交割并拿到钥匙。</p>
      `,
    },
    "tips-for-loan-approval": {
      title: "提升贷款审批通过率的实用技巧",
      date: "2024-01-05",
      content: `
        <h2>让贷款更容易获批</h2>
        <p>要顺利通过贷款审批，需要在申请前做好充分准备。以下建议可以帮助您提升通过率。</p>
        
        <h3>提高信用评分</h3>
        <p>良好的信用记录是审批的重要考量。按时还款、减少现有负债，并避免短时间内频繁申请多个信贷产品。</p>
        
        <h3>降低负债收入比</h3>
        <p>贷款机构更偏好负债收入比较低的申请人。可以通过提前偿还部分债务、控制新增负债来优化这一比例。</p>
        
        <h3>准备更充足的首付款</h3>
        <p>更高比例的首付款可以降低贷款机构的风险，有助于提升获批率，并争取更优惠的利率。</p>
        
        <h3>提交完整且真实的资料</h3>
        <p>确保所有收入、资产与负债证明文件真实且齐全，不完整或信息不一致的申请往往会被延迟甚至拒绝。</p>
        
        <h3>与专业房贷经纪人合作</h3>
        <p>经验丰富的房贷经纪人熟悉不同贷款机构的要求，可以帮助您挑选合适的产品并优化申请材料，提高整体通过率。</p>
      `,
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang: LocaleKey = locale === "zh" ? "zh" : "en";
  const post = blogPostsByLocale[lang][slug];
  const t = await getTranslations({ locale: lang, namespace: "blogs" });

  if (!post) {
    return {
      title: t("blogNotFoundTitle"),
    };
  }

  return {
    title: `${post.title}${t("blogSeoTitleSuffix")}`,
    description: t("blogSeoDescription"),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const lang: LocaleKey = locale === "zh" ? "zh" : "en";
  const post = blogPostsByLocale[lang][slug];

  if (!post) {
    notFound();
  }

  const t = await getTranslations({ locale: lang, namespace: "blogs" });

  return (
    <Section className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <Link
          href={`/${locale}/blogs`}
          className="text-[#0d3250] hover:text-[#1a4a70] mb-6 inline-block"
        >
          {t("backToBlogs")}
        </Link>

        <article>
          <h1 className="text-4xl font-bold text-[#0d3250] mb-4">
            {post.title}
          </h1>
          <div className="text-[#666666] mb-8">
            {t("publishedOn")}{" "}
            {new Date(post.date).toLocaleDateString(
              lang === "zh" ? "zh-CN" : "en-AU",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          </div>

          <div
            className="prose prose-lg max-w-none text-[#666666]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </Section>
  );
}
