import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blogs - Open Mortgage',
    description: 'Latest news, tips, and insights about mortgages and loans',
    keywords: 'mortgage blog, loan tips, financial advice',
  };
}

// Sample blog posts data
const blogPosts = [
  {
    slug: 'understanding-mortgage-rates',
    title: 'Understanding Mortgage Rates',
    excerpt: 'Learn about how mortgage rates work and what factors influence them.',
    date: '2024-01-15',
  },
  {
    slug: 'first-home-buyer-guide',
    title: 'First Home Buyer Guide',
    excerpt: 'A comprehensive guide for first-time home buyers navigating the mortgage process.',
    date: '2024-01-10',
  },
  {
    slug: 'tips-for-loan-approval',
    title: 'Tips for Loan Approval',
    excerpt: 'Discover strategies to improve your chances of getting approved for a loan.',
    date: '2024-01-05',
  },
];

export default async function BlogsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'common' });

  return (
    <Section title="Blogs" className="bg-white py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-[#666666] mb-8 text-center">
          Stay informed with our latest articles, tips, and insights about mortgages and loans.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="h-full flex flex-col">
              <h3 className="text-xl font-semibold text-[#0d3250] mb-3">{post.title}</h3>
              <p className="text-[#666666] mb-4 flex-grow">{post.excerpt}</p>
              <div className="text-sm text-[#666666] mb-4">
                Published: {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <Link href={`/${locale}/blogs/${post.slug}`}>
                <Button variant="outline" className="w-full">
                  {t('readMore')}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

