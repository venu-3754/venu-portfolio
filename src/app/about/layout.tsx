import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'About - Web Developer & Cybersecurity Specialist',
  description: 'Learn about my journey in cybersecurity and Blue Team operations. Combining analytical thinking with practical security implementation for robust defensive strategies.',
  url: '#',
  type: 'profile',
  image: '/images/about/profile.png',
  tags: ['about', 'cybersecurity professional', 'web developer', 'cse background', 'career transition'],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
