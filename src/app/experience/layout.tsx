import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Professional Experience - cybersecurity Career',
  description: 'Professional web developer experience with cybersecurity expertise too, SOC analysis, incident response, and security education. Background in computer science and engineering with spwcialization in cybersecurity.',
  url: '/experience',
  type: 'profile',
  tags: ['professional experience', 'cybersecurity careers', 'SOC analyst', 'security instructor', 'cybersecurity background'],
});

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
