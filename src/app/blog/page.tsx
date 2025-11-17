import type { Metadata } from 'next';
import { Header } from '@/components/layout';
import BlogSection from '@/components/pages/Blog';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Web Development - Cybersecurity Insights & Articles',
  description: 'Technical articles on Cybersecurity operations, SIEM, incident response, and defensive cybersecurity. Learn from real-world security projects and best practices.',
  url: '/blog',
  type: 'website',
  tags: ['blog', 'cybersecurity articles', 'blue team insights', 'security tutorials', 'threat hunting guides', 'SIEM tutorials'],
});

export default function BlogPage() {
  return (
    <main className="relative cyber-bg-animated">
      <Header />
      <BlogSection />
    </main>
  );
}
