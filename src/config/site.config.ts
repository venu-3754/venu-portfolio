/**
 * Site Configuration
 *
 * Central configuration for site-wide metadata, branding, and URLs.
 * ⚠️ IMPORTANT: Update these values with your own information!
 *
 * This is a template - replace all placeholder values with your actual details.
 */

export const siteConfig = {
  /**
   * Site identity and branding
   * Replace with your name and professional details
   */
  name: 'Venu - Cybersecurity Enthusiast & Web Developer',
  codename: '#coder', // Your preferred username/handle
  author: {
    name: 'Songa Venu Gopal',
    codename: 'Venu',
    jobTitle: 'Web Developer | Cybersecurity Enthusiast', // Your professional title
    tagline: 'Hey, I’m a collaborative Web Developer with expertise in Cybersecurity too.',
    description: 'I develop everything CSE students do, but I make sure it’s built securely from the start',
    organization: 'Your Organization or Independent',
  },

  /**
   * Site URLs and domains
   * Update with your actual domain
   */
  urls: {
    base: 'https://github.com/venu-3754',
    canonical: 'https://github.com/venu-3754',
  },

  /**
   * Default SEO metadata
   * Customize for better search engine optimization
   */
  seo: {
    title: 'Venu - Professional Portfolio',
    description: 'Professional portfolio showcasing web development projects, blog posts, and expertise. Specializing in cybersecurity too.',
    keywords: [
      'cybersecurity',
      'blue team',
      'defensive security',
      'security analyst',
      'SOC analyst',
      'SIEM',
      'incident response',
      'threat hunting',
      'security operations',
      'Venu', // Replace with your actual name
      'Venu', // Replace with your handle
    ],
  },

  /**
   * Default OG image
   * Path to your social media preview image (recommended: 1200x630px)
   */
  defaultImage: '/images/site/og-default.png',

  /**
   * Supported languages
   * Add or remove languages as needed
   */
  languages: {
    default: 'en-US',
    supported: ['en-US'], // Add 'pt-BR', 'es-ES', etc. as needed
  },

  /**
   * Theme configuration
   */
  theme: {
    defaultMode: 'dark',
    color: '#0a1929', // Your brand color in hex
  },

  /**
   * Educational background
   * Update with your actual educational institutions
   */
  education: [
    {
      name: 'Rajeev Gandhi Memorial College of Engineering and Technology',
      type: 'EducationalOrganization',
    },
    // Add more education entries as needed
  ],

  /**
   * Areas of expertise
   * List your key skills and specializations
   */
  expertise: [
    'Cybersecurity',
    'Web Development',
    'SIEM',
    'Incident Response',
    'Kali Linux',
    'Web Application Security',
    // Add your specific expertise areas
  ],
} as const;

export type SiteConfig = typeof siteConfig;
