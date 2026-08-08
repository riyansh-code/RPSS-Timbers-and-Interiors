'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Flame, Droplets, Sparkles } from 'lucide-react';
import { MERANTI_COMPARISON } from '@/data/timberData';

interface MerantiHighlightProps {
  onOpenQuote: (productName?: string) => void;
}

export default function MerantiHighlight({ onOpenQuote }: MerantiHighlightProps) {
  return (
    <section className="py-24 bg-[#191512] text-white relative overflow-hidden">
      {/* Background Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#C79A63_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C79A63]/20 text-[#E6C89C] text-xs font-semibold uppercase tracking-wider border border-[#C79A63]/30">
              <Sparkles className="w-4 h-4 text-[#C79A63]" /> Flagship Material Showcase
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
              Meranti Wood: The Ultimate Standard in <span className="gold-gradient-text">Architectural Joinery.</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              Meranti is a world-renowned Asian hardwood prized for its exceptionally clean grain, warm reddish-brown palette, and superior stability. Imported by RPSS directly from sustainably managed forests, it is the premier choice for luxury door shutters, frame moldings, and internal joinery across India.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-5 h-5 text-[#C79A63] mb-1" />
                <h4 className="text-xs uppercase text-gray-400 font-semibold">Durability</h4>
                <p className="text-sm font-bold text-white">Class 2 Seasoned</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Droplets className="w-5 h-5 text-[#C79A63] mb-1" />
                <h4 className="text-xs uppercase text-gray-400 font-semibold">Moisture</h4>
                <p className="text-sm font-bold text-white">10 - 12% Kiln Cured</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Flame className="w-5 h-5 text-[#C79A63] mb-1" />
                <h4 className="text-xs uppercase text-gray-400 font-semibold">Hardness</h4>
                <p className="text-sm font-bold text-white">3,800 N (Janka)</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#C79A63] mb-1" />
                <h4 className="text-xs uppercase text-gray-400 font-semibold">Workability</h4>
                <p className="text-sm font-bold text-white">Flawless Finish</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/meranti-wood"
                className="px-6 py-3.5 rounded-xl bg-[#C79A63] hover:bg-[#E6C89C] text-black font-bold text-sm shadow-xl transition-all flex items-center gap-2"
              >
                Deep-Dive Meranti Guide <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => onOpenQuote('Meranti Wood')}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
              >
                Order Meranti Logs &amp; Planks
              </button>
            </div>
          </div>

          {/* Right Showcase Image Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] rounded-2xl overflow-hidden border-2 border-[#C79A63]/30 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
                alt="Meranti Wood Frame & Shutter Showcase"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs text-[#C79A63] font-bold uppercase tracking-widest">RPSS Premium Stock</span>
                <h4 className="text-xl font-serif font-bold text-white">Vacuum Pressure Treated Dark Red Meranti</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Timber Comparison Table Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white">Meranti vs Other Popular Timbers</h3>
              <p className="text-xs text-gray-400">Comparative physical properties &amp; cost value matrix</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-[#C79A63]/20 text-[#C79A63] rounded-full border border-[#C79A63]/30">
              Grade-A Industry Standards
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-[#C79A63]">
                  <th className="py-3 px-4 uppercase font-semibold">Parameter</th>
                  <th className="py-3 px-4 uppercase font-bold text-white bg-[#C79A63]/20 rounded-t-lg">Meranti (RPSS Flagship)</th>
                  <th className="py-3 px-4 uppercase font-semibold">Teak Wood</th>
                  <th className="py-3 px-4 uppercase font-semibold">Sheesham Wood</th>
                  <th className="py-3 px-4 uppercase font-semibold">Pine Wood</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-gray-300">
                {MERANTI_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-white">{row.feature}</td>
                    <td className="py-3 px-4 font-bold text-[#E6C89C] bg-[#C79A63]/10">{row.meranti}</td>
                    <td className="py-3 px-4">{row.teak}</td>
                    <td className="py-3 px-4">{row.sheesham}</td>
                    <td className="py-3 px-4">{row.pine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
