'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, ShieldCheck, Truck, BadgePercent, Scissors, Users, CheckCircle2, Trees as Tree } from 'lucide-react';
import CTABanner from '@/components/home/CTABanner';

export default function WhyChooseUsPage() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '100% Computerized Kiln Seasoning',
      subtitle: 'Eliminating Moisture Variance',
      desc: 'Green timber contains 40%+ moisture, leading to warping and splitting. Our automated kiln dry chambers reduce moisture precisely to 10%-12% over 14 days, guaranteeing lifetime dimensional stability.'
    },
    {
      icon: Tree,
      title: 'Certified Sustainable Forestry',
      subtitle: 'Responsible Plantation Import',
      desc: 'We import timber strictly from certified renewable concessions in Southeast Asia and South America, ensuring legally harvested logs with full CITES and forestry chain-of-custody documentation.'
    },
    {
      icon: Scissors,
      title: 'CAD-Guided Precision Milling',
      subtitle: 'Sub-Millimeter Saw Accuracy',
      desc: 'Our Yamunanagar sawmill facility houses automated band saws and 4-side planer (S4S) machines. We cut timber within ±0.5mm tolerance, reducing on-site labor and material scrap.'
    },
    {
      icon: BadgePercent,
      title: 'Transparent Direct Mill Rates',
      subtitle: 'Zero Middleman Markup',
      desc: 'Buying directly from RPSS eliminates regional distributor markups. We provide clear cubic feet itemized billing, volume discounts, and guaranteed price stability for long-term contracts.'
    },
    {
      icon: Truck,
      title: 'Dedicated Pan-India Logistics',
      subtitle: 'Rapid Dispatch Fleet',
      desc: 'Our logistics fleet operates round-the-clock from our Yamunanagar and Delhi NCR hubs. We handle loading, moisture-proof tarpaulin strapping, and direct jobsite unloading across all states.'
    },
    {
      icon: Users,
      title: '25+ Years of Wood Craftsmanship',
      subtitle: 'Technical Advisory Service',
      desc: 'Our seasoned timber engineers work closely with architectural firms, hotel developers, and furniture designers to recommend the perfect wood species, grain orientation, and protective coatings.'
    }
  ];

  return (
    <div className="pt-24 bg-[var(--bg-primary)] min-h-screen">
      {/* Header Banner */}
      <section className="py-20 bg-gradient-to-r from-[#1F1F1F] via-[#5C3A21] to-[#1F1F1F] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="subtitle-badge border border-[#C79A63]/40 text-[#E6C89C] mx-auto">
            <Award className="w-4 h-4 text-[#C79A63]" /> Uncompromising Standards
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-white">
            Why Leading Builders Choose RPSS
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Discover the technology, seasoning rigor, and logistics reliability that set RPSS Timbers apart.
          </p>
        </div>
      </section>

      {/* Pillars Breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div key={idx} className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-md hover:shadow-xl transition-all space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[var(--brand-primary)] text-white flex items-center justify-center">
                  <IconComp className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#C79A63] tracking-wider">{p.subtitle}</span>
                  <h3 className="text-xl font-serif font-bold text-[var(--text-main)]">{p.title}</h3>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{p.desc}</p>
                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#8B5E3C]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> RPSS Certified Standard
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner onOpenQuote={() => {}} />
    </div>
  );
}
