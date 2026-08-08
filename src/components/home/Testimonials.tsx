'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/data/timberData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const item = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-[var(--bg-card)] border-b border-[var(--border-color)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-color)] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="subtitle-badge">
              <MessageSquare className="w-4 h-4 text-[#8B5E3C]" /> Client Endorsements
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--text-main)]">
              Trusted by Leading Architects &amp; Builders
            </h2>
            <p className="text-base text-[var(--text-muted)]">
              Read how our timber supply quality and reliable logistics empower major commercial &amp; residential developments across India.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[#C79A63] text-[var(--text-main)] transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[#C79A63] text-[var(--text-main)] transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Card Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-12 rounded-3xl bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-xl relative"
            >
              <Quote className="w-16 h-16 text-[#C79A63]/20 absolute top-8 right-8" />

              <div className="space-y-6 relative z-10">
                {/* 5-Star Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-lg sm:text-2xl font-serif text-[var(--text-main)] leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="pt-6 border-t border-[var(--border-color)] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C79A63]">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-[var(--text-main)]">{item.name}</h4>
                      <p className="text-xs text-[var(--text-muted)]">{item.role} — <span className="font-semibold text-[var(--brand-primary)]">{item.company}</span></p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--bg-card)] text-[#8B5E3C] border border-[var(--border-color)]">
                    Project: {item.projectType}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 pt-6">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? 'w-8 bg-[#C79A63]' : 'w-2.5 bg-[var(--border-color)]'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
