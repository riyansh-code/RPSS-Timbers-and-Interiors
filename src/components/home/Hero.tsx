'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ov-roundlogs.jpg"
          alt="Pine and hardwood round logs"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-75 contrast-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-[#5C3A21]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-black/60" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-[#C79A63]/30 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#E6C89C] shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-[#C79A63]" />
          {t.hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight text-white leading-[1.15]"
        >
          {t.hero.titleBefore} <br className="hidden sm:inline" />
          <span className="gold-gradient-text">{t.hero.titleHighlight}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed"
        >
          <p>
            {t.hero.bodyBefore}{' '}
            <strong className="font-semibold text-white">{t.hero.bodyStrong}</strong>
            {t.hero.bodyAfter}
          </p>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">{t.hero.scroll}</span>
        <ChevronDown className="w-5 h-5 text-[#C79A63]" />
      </motion.div>
    </section>
  );
}
