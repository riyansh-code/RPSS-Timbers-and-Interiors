'use client';

import { useState } from 'react';
import { HelpCircle, Search } from 'lucide-react';
import { FAQS_DATA } from '@/data/timberData';
import CTABanner from '@/components/home/CTABanner';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCat, setActiveCat] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'meranti', label: 'Meranti Wood' },
    { id: 'ordering', label: 'Ordering & Pricing' },
    { id: 'delivery', label: 'Logistics & Shipping' },
    { id: 'technical', label: 'Technical & Seasoning' },
  ];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCat = activeCat === 'all' || faq.category === activeCat;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-24 bg-[var(--bg-primary)] min-h-screen">
      {/* Header Banner */}
      <section className="py-20 bg-gradient-to-r from-[#1F1F1F] via-[#5C3A21] to-[#1F1F1F] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="subtitle-badge border border-[#C79A63]/40 text-[#E6C89C] mx-auto">
            <HelpCircle className="w-4 h-4 text-[#C79A63]" /> Knowledge Base
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Find answers regarding wood species selection, kiln seasoning standards, delivery timelines, and custom milling orders.
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. Meranti durability, delivery speed, termite treatment)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[#C79A63] shadow-sm"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCat === cat.id
                  ? 'bg-[var(--brand-primary)] text-white shadow-md'
                  : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] hover:border-[#C79A63]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions List */}
        <div className="space-y-4 pt-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-[var(--text-muted)]">
              No matching questions found. Please contact our support team directly.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => (
              <div key={faq.id} className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left font-serif font-bold text-lg text-[var(--text-main)] flex justify-between items-center"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className="text-[#C79A63] text-2xl font-sans">{openIndex === idx ? '−' : '+'}</span>
                </button>

                {openIndex === idx && (
                  <p className="mt-4 text-sm text-[var(--text-muted)] leading-relaxed pt-3 border-t border-[var(--border-color)]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </section>

      <CTABanner onOpenQuote={() => {}} />
    </div>
  );
}
