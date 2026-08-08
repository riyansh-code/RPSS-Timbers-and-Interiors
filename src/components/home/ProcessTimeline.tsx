'use client';

import { motion } from 'framer-motion';
import { PROCESS_TIMELINE } from '@/data/timberData';
import { CheckCircle } from 'lucide-react';

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-[var(--bg-primary)] border-b border-[var(--border-color)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="subtitle-badge">
            <CheckCircle className="w-4 h-4 text-[#8B5E3C]" /> Seamless Order Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--text-main)]">
            How We Deliver Excellence
          </h2>
          <p className="text-base text-[var(--text-muted)]">
            Our structured 6-step process ensures clear pricing, precise sawing, and hassle-free delivery to your site.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#5C3A21] via-[#C79A63] to-[#8B5E3C] -translate-y-1/2 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {PROCESS_TIMELINE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Step Number Badge */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5C3A21] to-[#C79A63] text-white flex items-center justify-center font-serif font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[var(--text-main)] group-hover:text-[var(--brand-primary)] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--border-color)] flex items-center gap-1.5 text-[11px] font-semibold text-[#8B5E3C]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C79A63]" /> Verified Step
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
