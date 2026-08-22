'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, CheckCircle2, Globe, Heart, Target, Users } from 'lucide-react';
import CTABanner from '@/components/home/CTABanner';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();
  const experience = t.about.experienceItems;
  const sourcing = t.about.sourcing;
  const whyRpss = t.about.whyItems;

  return (
    <div className="pt-24 bg-[var(--bg-primary)]">
      <section className="relative py-20 bg-gradient-to-r from-[#1F1F1F] via-[#5C3A21] to-[#1F1F1F] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="subtitle-badge border border-[#C79A63]/40 text-[#E6C89C] mx-auto">
            <Award className="w-4 h-4 text-[#C79A63]" /> {t.about.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight">
            {t.about.title}
            <br className="hidden sm:inline" />
            <span className="gold-gradient-text">{t.about.titleHighlight}</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-light">
            {t.about.intro}
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="subtitle-badge">
              <Users className="w-4 h-4 text-[#8B5E3C]" /> {t.about.storyBadge}
            </div>
            <h3 className="text-2xl font-serif font-bold text-[var(--text-main)]">
              {t.about.storyTitle}
            </h3>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              {t.about.storyIntro}
            </p>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              {t.about.storyIntro2}
            </p>
            {t.about.storyParagraphs.map((paragraph, idx) => (
              <p key={`story-${idx}`} className="text-base text-[var(--text-muted)] leading-relaxed">
                {paragraph}
              </p>
            ))}
            <h3 className="text-2xl font-serif font-bold text-[var(--text-main)] pt-2">
              {t.about.todayTitle}
            </h3>
            {t.about.todayParagraphs.map((paragraph, idx) => (
              <p key={`today-${idx}`} className="text-base text-[var(--text-muted)] leading-relaxed">
                {paragraph}
              </p>
            ))}
            <p className="text-base font-serif font-bold text-[var(--text-main)] leading-relaxed pt-2">
              {t.about.storyClosing}
            </p>
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

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="subtitle-badge">
              <Users className="w-4 h-4 text-[#8B5E3C]" /> {t.about.experienceBadge}
            </div>
            <h3 className="text-2xl font-serif font-bold text-[var(--text-main)]">
              {t.about.experienceTitle}
            </h3>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              {t.about.experienceIntro}
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
              <Globe className="w-4 h-4 text-[#8B5E3C]" /> {t.about.sourcingBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--text-main)]">
              {t.about.sourcingTitle}
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
              <Target className="w-4 h-4 text-[#8B5E3C]" /> {t.about.indianMarketBadge}
            </div>
            <h2 className="text-3xl font-serif font-bold text-[var(--text-main)]">
              {t.about.indianMarketTitle}
            </h2>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              {t.about.indianMarketBody}
            </p>
          </div>
          <div className="space-y-4">
            <div className="subtitle-badge">
              <Globe className="w-4 h-4 text-[#8B5E3C]" /> {t.about.australianBadge}
            </div>
            <h2 className="text-3xl font-serif font-bold text-[var(--text-main)]">
              {t.about.australianTitle}
            </h2>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              {t.about.australianBody}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--bg-card)] border-t border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="subtitle-badge mx-auto">
              <Heart className="w-4 h-4 text-[#8B5E3C]" /> {t.about.whyBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--text-main)]">
              {t.about.whyTitle}
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
