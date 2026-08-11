'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Award,
  CheckCircle2,
  Globe,
  Heart,
  Target,
  Users,
} from 'lucide-react';
import CTABanner from '@/components/home/CTABanner';

export default function AboutPage() {
  const experience = [
    'Timber purchasing',
    'International sourcing',
    'Direct imports',
    'Wholesale distribution',
    'Supplier negotiations',
    'Product selection',
    'Customer relationships',
    'Commercial management',
    'Indian market knowledge',
  ];

  const whyRpss = [
    'Trust',
    'Genuine dealing',
    'Fairness',
    'Product knowledge',
    'Reliable supply',
    'Quality',
    'Consistent service',
  ];

  const sourcing = [
    {
      title: 'Pine',
      desc: 'Germany, Australia, Russia, New Zealand and Austria.',
    },
    {
      title: 'Hardwood',
      desc: 'Meranti, Kapur and Sal, including sourcing experience from Malaysia.',
    },
    {
      title: 'Teak',
      desc: 'Brazil, Mexico and South America.',
    },
  ];

  return (
    <div className="pt-24 bg-[var(--bg-primary)]">
      <section className="relative py-20 bg-gradient-to-r from-[#1F1F1F] via-[#5C3A21] to-[#1F1F1F] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="subtitle-badge border border-[#C79A63]/40 text-[#E6C89C] mx-auto">
            <Award className="w-4 h-4 text-[#C79A63]" /> About RPSS
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight">
            Five Decades of Timber Trade.
            <br className="hidden sm:inline" />
            <span className="gold-gradient-text"> Building the Next Generation of Global Sourcing.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-light">
            RPSS was established in 1974 by Mr. Sham Sunder Arora in Jammu as a timber wholesaler and
            commission agent. The business remains family-operated, with established operations in
            Jammu &amp; Kashmir, Amritsar and Gandhidham (Gujarat).
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="subtitle-badge">
              <Users className="w-4 h-4 text-[#8B5E3C]" /> Our Experience
            </div>
            <h3 className="text-2xl font-serif font-bold text-[var(--text-main)]">Our Experience</h3>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              RPSS experience includes timber purchasing, international sourcing, direct imports,
              wholesale distribution, supplier negotiations, product selection, customer
              relationships, commercial management and Indian market knowledge.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {experience.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[var(--text-main)]">
                  <CheckCircle2 className="w-4 h-4 text-[#C79A63] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--bg-card)]">
              <Image
                src="/images/ov-kd-pine.jpg"
                alt="KD pine and sawn timber sourcing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-card)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="subtitle-badge mx-auto">
              <Globe className="w-4 h-4 text-[#8B5E3C]" /> International Sourcing
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--text-main)]">
              International Sourcing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sourcing.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-3"
              >
                <h4 className="text-xl font-serif font-bold text-[var(--text-main)]">{item.title}</h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="subtitle-badge">
              <Target className="w-4 h-4 text-[#8B5E3C]" /> Indian Market
            </div>
            <h2 className="text-3xl font-serif font-bold text-[var(--text-main)]">Indian Market</h2>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              RPSS primarily serves Jammu &amp; Kashmir and Punjab with a strong connection to
              Srinagar and Amritsar. Customers include timber wholesalers and retailers, furniture
              manufacturers, plywood manufacturers, construction businesses, interior businesses and
              other traders.
            </p>
          </div>
          <div className="space-y-4">
            <div className="subtitle-badge">
              <Globe className="w-4 h-4 text-[#8B5E3C]" /> Australian Presence
            </div>
            <h2 className="text-3xl font-serif font-bold text-[var(--text-main)]">
              Australian Presence
            </h2>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              RPSS Timbers — Canberra, Australian sourcing operation. The Australian operation works
              alongside the established Indian business to develop supplier relationships and
              international sourcing opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-card)] border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="subtitle-badge mx-auto">
              <Heart className="w-4 h-4 text-[#8B5E3C]" /> Why RPSS
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--text-main)]">
              Why RPSS
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {whyRpss.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-center"
              >
                <span className="font-serif font-bold text-[var(--text-main)]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
