'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Trees as Tree, Users, Building2, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function CompanyIntro() {
  const stats = [
    { value: '50+', label: 'Years Legacy', icon: Building2 },
    { value: '1974', label: 'Established', icon: Award },
    { value: '2', label: 'Showroom Depots', icon: Tree },
    { value: 'Global', label: 'Sourcing Network', icon: Users },
  ];

  return (
    <section className="py-24 bg-[var(--bg-primary)] border-b border-[var(--border-color)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[450px] sm:h-[520px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--bg-card)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1200&q=80"
                alt="RPSS Premium Wood Processing Yard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-effect text-white border border-white/20">
                <span className="text-xs uppercase tracking-widest text-[#C79A63] font-bold block mb-1">
                  Heritage of Trust &amp; Craftsmanship
                </span>
                <p className="text-sm font-serif italic text-white/90">
                  &ldquo;Connecting reliable suppliers and exporters across Australia and global markets with established buyers in India.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Overlapping Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 sm:right-6 bg-[var(--brand-primary)] text-white p-6 rounded-2xl shadow-2xl border-2 border-[var(--brand-accent)] hidden sm:flex items-center gap-4 max-w-xs"
            >
              <div className="p-3 bg-[#C79A63] text-black rounded-xl font-bold font-serif text-2xl">
                50+
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-white">Years of Legacy</h4>
                <p className="text-xs text-white/80">Established in 1974</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Company Story & Features */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="subtitle-badge">
                <Award className="w-4 h-4 text-[#8B5E3C]" /> Our Heritage &amp; Journey
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--text-main)] leading-tight">
                FROM A TRUSTED INDIAN TIMBER BUSINESS <br />
                <span className="text-[var(--brand-primary)]">TO A GLOBAL SOURCING NETWORK</span>
              </h2>

              <p className="text-base text-[var(--text-muted)] leading-relaxed">
                RPSS Timbers was established in <strong className="font-semibold text-[var(--text-main)]">1974 by Mr. Sham Sunder Arora</strong> and has grown into an established timber wholesale business serving customers across North India.
              </p>

              <p className="text-base text-[var(--text-muted)] leading-relaxed">
                With established <strong className="font-semibold text-[var(--text-main)]">warehouses and showrooms in Amritsar, Punjab and Jammu</strong>, RPSS has developed a strong understanding of timber products, buyer requirements and the Indian market.
              </p>

              <p className="text-base text-[var(--text-muted)] leading-relaxed">
                Our next chapter is focused on taking that experience beyond traditional sourcing channels.
              </p>

              <p className="text-base text-[var(--text-muted)] leading-relaxed">
                Rather than relying solely on intermediaries, our vision is to develop <strong className="font-semibold text-[var(--text-main)]">direct relationships with exporters and suppliers across different continents</strong>, creating broader sourcing opportunities and bringing our Indian buyers closer to the original source.
              </p>
            </motion.div>

            {/* Key Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#C79A63] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-main)]">Established Indian Presence</h4>
                  <p className="text-xs text-[var(--text-muted)]">Warehouses &amp; Showrooms in Amritsar &amp; Jammu</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C79A63] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-main)]">Direct International Sourcing</h4>
                  <p className="text-xs text-[var(--text-muted)]">Connecting exporters with Indian buyers</p>
                </div>
              </div>
            </motion.div>

            {/* Animated Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[var(--border-color)]"
            >
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div key={idx} className="text-center p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                    <IconComponent className="w-5 h-5 text-[#C79A63] mx-auto mb-1" />
                    <span className="block font-serif font-extrabold text-2xl text-[var(--brand-primary)]">
                      {stat.value}
                    </span>
                    <span className="block text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

