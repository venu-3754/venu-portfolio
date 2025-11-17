'use client';

import { type ReactNode } from 'react';
import { m } from 'framer-motion';
import { Calendar, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Experience {
  title: string;
  company: ReactNode;
  period: string;
  description: string;
  icon: ReactNode;
  achievements?: string[];
  companyClassName?: string;
}

const experiences: Experience[] = [
  {
    title: 'Web Developer',
    company: <span>Freelance · Part-time</span>,
    period: 'Jan 2023 - Present',
    description: 'Built and maintained responsive websites for small businesses and personal projects using modern web technologies. Collaborate with clients to understand their requirements and deliver high-quality solutions.',
    icon: <Shield size={20} />,
    achievements: [
      'Designed and deployed Developed and deployed multiple full-stack web applications with integrated authentication, role-based access, and secure APIs',
      'Implemented input validation, encryption, and security headers to prevent XSS, CSRF, and SQL injection attacks',
      'Built custom admin dashboards and data visualization tools using React, Node.js, and MongoDB',
      'Optimized web performance and reduced load times by up to 45% through code and database improvements',
      'Collaborated with cybersecurity professionals to integrate secure coding practices and basic vulnerability assessments during development'
    ]
  },
  {
    title: 'Web Dev & DSA Club Lead',
    company: <span>RGMCET · Weekends</span>,
    period: 'Jun 2024 - Mar 2026',
    description: 'Advanced security monitoring and incident investigation in a 24/7 SOC environment. Performed deep-dive analysis of security alerts, threat intelligence integration, and coordination with security teams for incident containment.',
    icon: <Shield size={20} />,
    achievements: [
      'Organized and led 25+ interactive sessions covering cybersecurity basics, secure coding, and DSA problem-solving',
      'Mentored 40+ juniors, improving their understanding of programming logic and real-world security practices',
      'Delivered topics like phishing defense, password security, and basic web vulnerabilities',
      'Guided students in solving DSA problems to strengthen problem-solving and coding efficiency',
      'Conducted mini-projects combining web development and cybersecurity concepts for applied learning',
      'Fostered a collaborative learning environment that encouraged teamwork, and consistent growth'
    ]
  }
];

export default function ExperienceSection() {
  const title = 'Professional Experience';
  const subtitle = 'TIMELINE';
  const description = 'Experiences that have shaped my journey so far from zero to now';
  const achievementsLabel = 'Key Achievements:';
  
  return (
    <section
      id="experience"
      className="min-h-screen py-20 bg-gradient-to-br from-cyber-teal-dark via-cyber-dark to-cyber-darker"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cyber-cyan font-mono text-sm mb-4 tracking-widest"
          >
            {subtitle}
          </m.p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-cyber-gray-light text-lg max-w-2xl mx-auto mb-6">
            {description}
          </p>
          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mx-auto"
          />
        </m.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-cyber-cyan/20" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <m.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-cyber-cyan border-4 border-cyber-dark flex items-center justify-center text-cyber-dark shadow-neon-cyan">
                    {exp.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="group p-6 bg-cyber-teal-dark/30 backdrop-blur-sm border border-cyber-cyan/20 rounded-xl hover:border-cyber-cyan/50 hover:shadow-glow-cyan transition-all duration-300">
                    {/* Period Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-navy/50 border border-cyber-green/30 rounded-full mb-4">
                      <Calendar size={14} className="text-cyber-green" />
                      <span className="text-sm text-cyber-green font-mono">
                        {exp.period}
                      </span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors text-left">
                      {exp.title}
                    </h3>
                    <p
                      className={`font-mono text-lg mb-4 text-left ${
                        exp.companyClassName ?? 'text-cyber-green'
                      }`}
                    >
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p className="text-cyber-gray leading-relaxed mb-4 text-left">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mt-6">
                        <p className="text-cyber-cyan text-sm font-mono mb-3 text-left">
                          {achievementsLabel}
                        </p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-cyber-gray-light text-sm text-left"
                            >
                              <span className="text-cyber-green mt-1">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </m.div>
            ))}
          </div>
        </div>

        {/* View More Button - Desktop */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-center mt-12"
        >
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg text-cyber-cyan hover:bg-cyber-cyan/20 hover:shadow-neon-cyan transition-all duration-300 group whitespace-nowrap"
          >
            <span className="font-mono text-sm">View More</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </m.div>

        {/* View More Button - Mobile */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:hidden"
        >
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyber-cyan text-cyber-dark font-bold rounded-lg hover:shadow-neon-cyan hover:scale-105 transition-all duration-300 group"
          >
            View Complete Details
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </m.div>
      </div>
    </section>
  );
}
