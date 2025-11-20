import { Section } from '@/components/Section';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Sample blog posts data
const blogPosts: Record<string, { title: string; content: string; date: string }> = {
  'understanding-mortgage-rates': {
    title: 'Understanding Mortgage Rates',
    date: '2024-01-15',
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
  'first-home-buyer-guide': {
    title: 'First Home Buyer Guide',
    date: '2024-01-10',
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
  'tips-for-loan-approval': {
    title: 'Tips for Loan Approval',
    date: '2024-01-05',
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
};

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Blog Post Not Found - Open Mortgage',
    };
  }

  return {
    title: `${post.title} - Open Mortgage Blog`,
    description: `Read about ${post.title.toLowerCase()} on our blog`,
  };
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}) {
  const { locale, slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <Section className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <Link 
          href={`/${locale}/blogs`}
          className="text-[#0d3250] hover:text-[#1a4a70] mb-6 inline-block"
        >
          ← Back to Blogs
        </Link>
        
        <article>
          <h1 className="text-4xl font-bold text-[#0d3250] mb-4">{post.title}</h1>
          <div className="text-[#666666] mb-8">
            Published: {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
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

