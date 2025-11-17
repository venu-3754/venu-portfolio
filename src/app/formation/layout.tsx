import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Education & Certifications - Academic Background',
  description: 'Academic background in Computer Science and Engineering with specialization in Cybersecurity.',
  url: '/formation',
  type: 'profile',
  tags: ['education', 'certifications', 'computer science', 'physics degree', 'information security', 'professional development'],
});

export default function FormationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
