import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Web Development & Cybersecurity Projects',
  description: 'Explore web development & cybersecurity projects.',
  url: '/projects',
  type: 'website',
  tags: ['cybersecurity projects', 'XSS', 'SQL Injection', 'web security', 'web development projects'],
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
