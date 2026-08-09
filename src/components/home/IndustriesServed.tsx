'use client';

import { motion } from 'framer-motion';
import { Globe, Users, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function IndustriesServed() {
  const supplierAssistance = [
    'Understanding Indian buyer requirements',
    'Identifying genuine product opportunities',
    'Connecting suitable suppliers with Indian buyers',
    'Facilitating commercial communication',
    'Developing long-term sourcing relationships'
  ];

  const buyerObjectives = [
    'Better access.',
    'Broader sourcing options.',
    'Direct international connections.'
  ];

  return (
    <section className="py-24 bg-[var(--bg-card)] border-b border-[var(--border-color)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="subtitle-badge">
            <Building2 className="w-4 h-4 text-[#8B5E3C]" /> Global Trade Network
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--text-main)]">
            Connecting Suppliers &amp; Buyers Worldwide
          </h2>
          <p className="text-base text-[var(--text-muted)]">
            Bridging international suppliers with established Indian buyers through experienced sourcing and trade facilitation.
          </p>
        </div>

        {/* 2-Column Split: Section 4 & Section 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Section 4: FOR INTERNATIONAL & AUSTRALIAN SUPPLIERS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-lg hover:border-[#C79A63] transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[var(--brand-primary)] text-white">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[var(--text-main)]">
                    FOR INTERNATIONAL &amp; AUSTRALIAN SUPPLIERS
                  </h3>
                  <h4 className="text-sm font-semibold text-[#C79A63]">
                    Looking to access the Indian market?
                  </h4>
                </div>
              </div>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                <strong className="font-bold text-[var(--text-main)]">RPSS Timbers provides international and Australian suppliers with a connection to an established Indian timber market and an experienced sourcing network.</strong>
              </p>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                <strong className="font-bold text-[var(--text-main)]">We understand the requirements of Indian buyers and can help suitable suppliers explore opportunities to supply products into India.</strong>
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-xs uppercase tracking-wider font-bold text-[var(--brand-primary)]">
                  We can assist with:
                </p>
                <ul className="space-y-2 text-sm text-[var(--text-main)]">
                  {supplierAssistance.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C79A63] shrink-0 mt-0.5" />
                      <span className="font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm font-bold text-[var(--brand-primary)] pt-2">
                Become a sourcing partner with RPSS Timbers.
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--border-color)]">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#8B5E3C] via-[#C79A63] to-[#8B5E3C] text-black font-bold text-sm shadow-md hover:scale-105 transition-all"
              >
                SOURCE WITH US <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Section 5: FOR INDIAN BUYERS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-lg hover:border-[#C79A63] transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#C79A63] text-black">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[var(--text-main)]">
                    FOR INDIAN BUYERS
                  </h3>
                  <h4 className="text-sm font-semibold text-[#C79A63]">
                    Looking beyond traditional supply channels?
                  </h4>
                </div>
              </div>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                <strong className="font-bold text-[var(--text-main)]">RPSS Timbers helps Indian buyers access Australian and international suppliers and explore sourcing opportunities beyond conventional domestic channels.</strong>
              </p>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                <strong className="font-bold text-[var(--text-main)]">Our experience in the Indian timber market allows us to understand buyer requirements while our expanding international network enables us to search for suitable sources closer to origin.</strong>
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-xs uppercase tracking-wider font-bold text-[var(--brand-primary)]">
                  Our objective:
                </p>
                <ul className="space-y-2 text-sm text-[var(--text-main)]">
                  {buyerObjectives.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C79A63] shrink-0" />
                      <span className="font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm font-bold text-[var(--brand-primary)] pt-2">
                If you have a specific product or sourcing requirement, talk to us.
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--border-color)]">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[var(--brand-primary)] hover:bg-[#8B5E3C] text-white font-bold text-sm shadow-md hover:scale-105 transition-all"
              >
                SUBMIT YOUR REQUIREMENT <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

