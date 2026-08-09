'use client';

import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-[var(--bg-primary)] border-b border-[var(--border-color)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="subtitle-badge">
            <Compass className="w-4 h-4 text-[#8B5E3C]" /> Vision
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--text-main)]">
            VISION
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-[var(--bg-card)] p-8 sm:p-12 rounded-3xl border border-[var(--border-color)] shadow-md text-center space-y-4"
        >
          <p className="text-lg sm:text-xl font-serif font-semibold text-[var(--text-main)] leading-relaxed">
            To build a global sourcing and trading network that brings Indian buyers closer to
            international sources while creating genuine market opportunities for reliable
            suppliers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
