'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, ShieldCheck, Target, Eye, Heart, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import CTABanner from '@/components/home/CTABanner';

export default function AboutPage() {
  const milestones = [
    { year: '2001', title: 'Company Inception', desc: 'Established as a regional timber log trading firm in Yamunanagar, Haryana.' },
    { year: '2008', title: 'Kiln Seasoning Plant', desc: 'Invested in automated computerized dry kiln facilities to deliver 100% warp-free lumber.' },
    { year: '2014', title: 'Direct Meranti Imports', desc: 'Formed direct import partnerships with Grade-A sustainable concessions in Southeast Asia.' },
    { year: '2019', title: 'Interior Panel Division', desc: 'Launched architectural wood cladding, fluted panels, and custom S4S milling services.' },
    { year: '2024+', title: 'Nationwide Logistics Network', desc: 'Expanded supply capacity to over 500+ major commercial, hotel, and residential developments across India.' },
  ];

  const values = [
    { icon: ShieldCheck, title: 'Uncompromising Quality', desc: 'Zero defect tolerance. Every plank is moisture-tested and grade-sorted before dispatch.' },
    { icon: Heart, title: 'Customer First Integrity', desc: 'Transparent itemized cubic footage billing with no hidden fees or volume padding.' },
    { icon: Target, title: 'Sustainable Forestry', desc: 'Exclusive sourcing from certified renewable timber plantations protecting global ecology.' },
    { icon: Sparkles, title: 'Precision Milling', desc: 'State-of-the-art CNC band saw machinery delivering ±0.5mm dimension accuracy.' },
  ];

  return (
    <div className="pt-24 bg-[var(--bg-primary)]">
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-r from-[#1F1F1F] via-[#5C3A21] to-[#1F1F1F] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="subtitle-badge border border-[#C79A63]/40 text-[#E6C89C] mx-auto">
            <Award className="w-4 h-4 text-[#C79A63]" /> About RPSS Timbers &amp; Interiors
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-white">
            Our Story, Values &amp; Vision
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Building India’s most trusted timber supply infrastructure with sustainable wood sourcing and master seasoning.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="subtitle-badge">
              <Building2 className="w-4 h-4 text-[#8B5E3C]" /> Two Decades of Excellence
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--text-main)]">
              Redefining Wood Quality for Modern India
            </h2>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              Founded over two decades ago, RPSS Timbers and Interiors began with a simple mission: to supply Indian builders, architects, and artisans with timber that never warps, cracks, or fails under structural load.
            </p>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              By pioneering computerized kiln drying techniques and establishing direct import pipelines for authentic Meranti Wood, we eliminated the inconsistent quality and high wastage traditionally associated with timber procurement.
            </p>
            
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                <span className="block font-serif font-bold text-2xl text-[var(--brand-primary)]">100,000+</span>
                <span className="text-xs text-[var(--text-muted)] font-medium uppercase">Cu.Ft Monthly Capacity</span>
              </div>
              <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                <span className="block font-serif font-bold text-2xl text-[var(--brand-primary)]">100%</span>
                <span className="text-xs text-[var(--text-muted)] font-medium uppercase">Kiln Dried Guaranteed</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--bg-card)]">
              <Image
                src="https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1200&q=80"
                alt="RPSS Timber Yard Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[var(--bg-card)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#5C3A21] text-white flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[var(--text-main)]">Our Mission</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              To deliver premium-grade, sustainably harvested timber products with precise seasoning, competitive factory pricing, and flawless nationwide delivery, enabling architects and builders to bring world-class wood architecture to life.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#C79A63] text-black flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[var(--text-main)]">Our Vision</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              To be India’s premier authority and benchmark brand in structural timber and Meranti wood solutions, recognized for environmental stewardship, technological milling innovation, and customer trust.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="subtitle-badge">Core Pillars</div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--text-main)]">
            The Principles That Guide RPSS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const IconC = v.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-3 shadow-sm">
                <IconC className="w-8 h-8 text-[#C79A63]" />
                <h4 className="text-lg font-serif font-bold text-[var(--text-main)]">{v.title}</h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-[var(--bg-card)] border-t border-[var(--border-color)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="subtitle-badge">Journey of Growth</div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--text-main)]">
              Our Journey Over the Years
            </h2>
          </div>

          <div className="space-y-6">
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)]"
              >
                <div className="px-4 py-2 rounded-xl bg-[var(--brand-primary)] text-white font-serif font-bold text-lg shrink-0">
                  {m.year}
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-[var(--text-main)]">{m.title}</h4>
                  <p className="text-sm text-[var(--text-muted)]">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner onOpenQuote={() => {}} />
    </div>
  );
}
