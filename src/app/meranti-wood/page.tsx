'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, ShieldCheck, CheckCircle2, Droplets, Flame, Cpu, ArrowRight, Download, Send } from 'lucide-react';
import { MERANTI_COMPARISON, FAQS_DATA } from '@/data/timberData';
import QuoteModal from '@/components/ui/QuoteModal';

export default function MerantiWoodPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const merantiFaqs = FAQS_DATA.filter((f) => f.category === 'meranti');

  const uses = [
    { title: 'Door Frames & Shutters', desc: 'Resists expansion and sagging; ideal for grand entryways and solid internal doors.', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80' },
    { title: 'Window Assemblies', desc: 'Precision stability ensuring smooth glass sash operation without climate warping.', img: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=600&q=80' },
    { title: 'Bespoke Furniture', desc: 'Stains evenly to rich walnut, mahogany, or teak shades with uniform grain.', img: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80' },
    { title: 'Interior Cladding', desc: 'Modern acoustic fluted paneling and feature wall timber paneling.', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <div className="pt-24 bg-[var(--bg-primary)] min-h-screen">
      {/* Hero Header */}
      <section className="relative py-24 bg-gradient-to-r from-[#1F1F1F] via-[#5C3A21] to-[#1F1F1F] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C79A63]/20 text-[#E6C89C] text-xs font-semibold uppercase tracking-wider border border-[#C79A63]/30">
            <Sparkles className="w-4 h-4 text-[#C79A63]" /> Flagship Timber Showcase
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-white">
            Grade-A Seasoned Meranti Wood
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            The premier choice for doors, windows, structural framing, and luxury interior joinery across India. Sourced directly from certified sustainable tropical forests.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-[#C79A63] hover:bg-[#E6C89C] text-black font-bold text-sm shadow-xl transition-all flex items-center gap-2"
            >
              Order Meranti Wood Planks <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Overview & Physical Properties */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="subtitle-badge">Material Excellence</div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--text-main)]">
              What Makes Meranti Wood Extraordinary?
            </h2>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              Meranti Wood (Shorea species) is a tropical hardwood renowned for its straight grain, minimum knotting, and remarkable structural stability. RPSS Timbers imports Dark Red and Light Red Meranti logs, which undergo strict vacuum preservative treatment and automated 14-day kiln curing.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C79A63] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-main)]">Termite &amp; Borer Shield</h4>
                  <p className="text-xs text-[var(--text-muted)]">Pressure treated to resist biological degradation.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-3">
                <Droplets className="w-5 h-5 text-[#C79A63] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-main)]">10% - 12% Moisture Content</h4>
                  <p className="text-xs text-[var(--text-muted)]">Computer kiln cured to stop warp &amp; twisting.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-3">
                <Flame className="w-5 h-5 text-[#C79A63] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-main)]">3,800 N Janka Rating</h4>
                  <p className="text-xs text-[var(--text-muted)]">Optimal density balance for machining &amp; load.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C79A63] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-main)]">Flawless Polish Finish</h4>
                  <p className="text-xs text-[var(--text-muted)]">Absorbs stains uniformly with zero blotching.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--bg-card)]">
              <Image
                src="https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1000&q=80"
                alt="Meranti Wood Log Stack"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Primary Applications Cards */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="subtitle-badge">Versatile Applications</div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--text-main)]">
              Where Meranti Wood Excels
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uses.map((u, i) => (
              <div key={i} className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-sm hover:shadow-lg transition-all space-y-4">
                <div className="relative h-48 w-full">
                  <Image src={u.img} alt={u.title} fill className="object-cover" />
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="font-serif font-bold text-lg text-[var(--text-main)]">{u.title}</h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl space-y-6">
          <h3 className="text-2xl font-serif font-bold text-[var(--text-main)]">
            Timber Specification Comparison Matrix
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--border-color)] text-[var(--brand-primary)]">
                  <th className="py-3 px-4 uppercase font-semibold">Parameter</th>
                  <th className="py-3 px-4 uppercase font-bold text-[#8B5E3C] bg-[var(--bg-primary)]">Meranti (RPSS)</th>
                  <th className="py-3 px-4 uppercase font-semibold">Teak Wood</th>
                  <th className="py-3 px-4 uppercase font-semibold">Sheesham Wood</th>
                  <th className="py-3 px-4 uppercase font-semibold">Pine Wood</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-color)]">
                {MERANTI_COMPARISON.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-3 px-4 font-semibold text-[var(--text-main)]">{row.feature}</td>
                    <td className="py-3 px-4 font-bold text-[var(--brand-primary)] bg-[var(--bg-primary)]">{row.meranti}</td>
                    <td className="py-3 px-4 text-[var(--text-muted)]">{row.teak}</td>
                    <td className="py-3 px-4 text-[var(--text-muted)]">{row.sheesham}</td>
                    <td className="py-3 px-4 text-[var(--text-muted)]">{row.pine}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Meranti Accordion FAQ */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl font-serif font-bold text-[var(--text-main)] text-center">
            Frequently Asked Questions About Meranti Wood
          </h3>
          <div className="space-y-4">
            {merantiFaqs.map((faq, idx) => (
              <div key={faq.id} className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left font-serif font-bold text-lg text-[var(--text-main)] flex justify-between items-center"
                >
                  <span>{faq.question}</span>
                  <span className="text-[#C79A63] text-xl">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed pt-2 border-t border-[var(--border-color)]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </section>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultProduct="Meranti Wood (Flagship)"
      />
    </div>
  );
}
