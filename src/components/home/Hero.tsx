'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown, ShieldCheck, Award, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white pt-20">
      {/* Background Image with Parallax feel */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2000&q=85"
          alt="RPSS Premium Timber Warehouse"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-75 contrast-110"
          sizes="100vw"
        />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-[#5C3A21]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-black/60" />
      </div>

      {/* Floating Wood Texture Glass Accent 1 */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-8 lg:right-20 hidden md:block z-10 p-4 rounded-2xl glass-effect border border-white/20 shadow-2xl max-w-xs backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#C79A63]/20 text-[#C79A63]">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-white/70 uppercase tracking-widest font-semibold">Flagship Spec</p>
            <p className="text-sm font-serif font-bold text-white">Grade-A Seasoned Meranti</p>
          </div>
        </div>
      </motion.div>

      {/* Floating Wood Texture Glass Accent 2 */}
      <motion.div
        animate={{
          y: [0, 18, 0],
          rotate: [0, -2, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-1/4 left-8 lg:left-20 hidden md:block z-10 p-4 rounded-2xl glass-effect border border-white/20 shadow-2xl max-w-xs backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#8B5E3C]/20 text-[#E0B480]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-white/70 uppercase tracking-widest font-semibold">Moisture Tested</p>
            <p className="text-sm font-serif font-bold text-white">100% Kiln Dried (10-12%)</p>
          </div>
        </div>
      </motion.div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 py-16">
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-[#C79A63]/30 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#E6C89C] shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-[#C79A63]" />
          India’s Trusted Timber &amp; Meranti Wood Supplier
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight text-white leading-[1.15]"
        >
          Premium Timber Solutions <br className="hidden sm:inline" />
          <span className="gold-gradient-text">Built on Trust.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed"
        >
          Supplying high-quality timber and Meranti wood across India for construction, interiors, furniture, and commercial projects.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href="/products"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#8B5E3C] via-[#C79A63] to-[#8B5E3C] text-black font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Explore Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-effect border border-white/30 text-white hover:bg-white/10 font-bold text-base shadow-lg transition-all duration-300"
          >
            Request Quote
          </button>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 text-white/90 hover:text-white font-medium text-base transition-colors text-center"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll to Discover</span>
        <ChevronDown className="w-5 h-5 text-[#C79A63]" />
      </motion.div>
    </section>
  );
}
