'use client';

import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, Mail } from 'lucide-react';
import Link from 'next/link';

interface CTABannerProps {
  onOpenQuote: () => void;
}

export default function CTABanner({ onOpenQuote }: CTABannerProps) {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#1F1F1F] via-[#5C3A21] to-[#1F1F1F] text-white overflow-hidden">
      {/* Subtle Glowing Ring Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C79A63]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-14 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest text-[#E6C89C] font-bold">
              Direct Mill Supply &amp; Custom Sawing
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight">
              Looking for Premium Timber &amp; Meranti Wood?
            </h2>
            <p className="text-base text-gray-300 font-light leading-relaxed">
              Get an instant itemized mill quotation with certified moisture levels, transparent delivery dates, and direct manufacturer pricing across India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#C79A63] to-[#8B5E3C] hover:from-[#E6C89C] hover:to-[#C79A63] text-black font-bold text-base shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 group"
            >
              Request a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 text-white font-semibold text-base transition-colors text-center flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#C79A63]" /> Speak to Wood Expert
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
