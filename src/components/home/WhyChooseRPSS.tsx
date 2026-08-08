'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Truck, BadgePercent, Users, Scissors, Award } from 'lucide-react';

export default function WhyChooseRPSS() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Premium Quality Assurance',
      desc: 'All Meranti and hardwood timber undergoes rigorous vacuum preservative treatment and 100% computerized kiln curing (10-12% moisture).'
    },
    {
      icon: Truck,
      title: 'Reliable Nationwide Supply',
      desc: 'Our expansive processing hubs in Yamunanagar and Delhi NCR guarantee rapid fleet delivery straight to job sites across India.'
    },
    {
      icon: BadgePercent,
      title: 'Direct Mill Pricing',
      desc: 'Eliminate middleman markups with direct importer pricing, bulk volume discounts, and transparent itemized invoicing.'
    },
    {
      icon: Users,
      title: 'Experienced Wood Specialists',
      desc: 'Backed by over 25 years of timber craftsmanship, guiding architects, builders, and furniture artisans on ideal species selection.'
    },
    {
      icon: Scissors,
      title: 'Custom Sawing & Milling',
      desc: 'High-precision CAD automated sawmills cut timber to your exact architectural specifications with zero material wastage.'
    },
    {
      icon: Award,
      title: 'Sustainably Sourced',
      desc: 'We import timber exclusively from certified sustainable forestry plantations adhering to global environmental standards.'
    }
  ];

  return (
    <section className="py-24 bg-[var(--bg-primary)] border-b border-[var(--border-color)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="subtitle-badge">
            <Award className="w-4 h-4 text-[#8B5E3C]" /> Why RPSS Timbers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--text-main)]">
            Built on Quality. Sustained by Trust.
          </h2>
          <p className="text-base text-[var(--text-muted)] leading-relaxed">
            Discover why leading architectural firms, hotel developers, and construction contractors rely on RPSS Timbers for their wood requirements.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group relative overflow-hidden"
              >
                {/* Accent Top Border Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C79A63] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-14 h-14 rounded-xl bg-[#5C3A21]/10 dark:bg-[#C79A63]/20 text-[#5C3A21] dark:text-[#C79A63] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all duration-300">
                  <IconComp className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-serif font-bold text-[var(--text-main)] group-hover:text-[var(--brand-primary)] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
