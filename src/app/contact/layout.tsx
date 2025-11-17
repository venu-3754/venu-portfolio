import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Contact - Drop a Secure Message',
  description: 'Connect for cybersecurity collaboration, consulting, security discussions, web development. Available for projects and professional networking.',
  url: '/contact',
  type: 'website',
  tags: ['contact', 'cybersecurity consulting', 'blue team collaboration', 'security networking', 'professional contact'],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
