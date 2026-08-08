'use client';

import { motion } from 'framer-motion';
import { HardHat, Armchair, Palette, Compass, Building, Hotel, Landmark, Home, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function IndustriesServed() {
  const industries = [
    {
      name: 'Construction Contractors',
      icon: HardHat,
      desc: 'High-strength shuttering timber, formwork runners, and scaffolding lumber.',
      tag: 'Bulk Supply'
    },
    {
      name: 'Furniture Craftsmen',
      icon: Armchair,
      desc: 'Kiln-dried, knot-free seasoned planks ideal for tables, cabinetry & carving.',
      tag: 'Furniture Grade'
    },
    {
      name: 'Interior Designers',
      icon: Palette,
      desc: 'Fluted wall paneling, ceiling baffles, and decorative architectural wood trim.',
      tag: 'Design Solutions'
    },
    {
      name: 'Architectural Firms',
      icon: Compass,
      desc: 'Precision CAD-milled wood frames, custom moldings, and large span trusses.',
      tag: 'Bespoke Specifications'
    },
    {
      name: 'Commercial Builders',
      icon: Building,
      desc: 'Heavy structural hardwood beams and fire-retardant commercial joinery.',
      tag: 'Structural Grade'
    },
    {
      name: 'Hotels & Hospitality',
      icon: Hotel,
      desc: 'Luxury lobby wall cladding, boutique doors, and durable patio timber.',
      tag: 'Luxury Grade'
    },
    {
      name: 'Commercial Real Estate',
      icon: Landmark,
      desc: 'Corporate office fit-outs, executive boardrooms, and acoustic wood paneling.',
      tag: 'Corporate Solutions'
    },
    {
      name: 'Residential Projects',
      icon: Home,
      desc: 'Bespoke entry doors, window shutters, hardwood flooring, and pergolas.',
      tag: 'Residential Solutions'
    }
  ];

  return (
    <section className="py-24 bg-[var(--bg-card)] border-b border-[var(--border-color)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="subtitle-badge">
            <Building className="w-4 h-4 text-[#8B5E3C]" /> Industries &amp; Clients
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--text-main)]">
            Empowering Projects Across India
          </h2>
          <p className="text-base text-[var(--text-muted)]">
            From high-rise commercial towers to artisan woodworking studios, we tailor wood supply to every sector.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[#C79A63] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[var(--brand-primary)] text-white group-hover:bg-[#C79A63] group-hover:text-black transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--bg-card)] text-[var(--brand-secondary)] border border-[var(--border-color)]">
                      {ind.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[var(--text-main)] group-hover:text-[var(--brand-primary)] transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] mt-4">
                  <Link href="/products" className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--brand-primary)] group-hover:text-[#C79A63] transition-colors">
                    Explore Relevant Wood <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
