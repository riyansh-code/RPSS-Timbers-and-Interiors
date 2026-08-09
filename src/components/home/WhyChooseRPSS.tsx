'use client';

import { motion } from 'framer-motion';
import { Globe, Users, Award, Building2, HeartHandshake } from 'lucide-react';

export default function WhyChooseRPSS() {
  const features = [
    {
      icon: Award,
      title: '50+ YEARS OF MARKET EXPERIENCE',
      desc: 'Decades of timber trade experience informing every sourcing decision.',
    },
    {
      icon: Building2,
      title: 'ESTABLISHED INDIAN MARKET PRESENCE',
      desc: 'Established operations serving buyers across key North Indian markets.',
    },
    {
      icon: Globe,
      title: 'INTERNATIONAL SOURCING EXPERIENCE',
      desc: 'Proven experience sourcing across multiple international origins.',
    },
    {
      icon: Users,
      title: 'DIRECT-SOURCE VISION',
      desc: 'Building direct relationships that bring buyers closer to origin supply.',
    },
    {
      icon: HeartHandshake,
      title: 'LONG-TERM RELATIONSHIPS',
      desc: 'Focused on sustainable supplier and buyer partnerships over one-off deals.',
    },
  ];

  return (
    <section className="py-24 bg-[var(--bg-primary)] border-b border-[var(--border-color)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="subtitle-badge">
            <Award className="w-4 h-4 text-[#8B5E3C]" /> Why RPSS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--text-main)]">
            WHY RPSS
          </h2>
          <p className="text-base text-[var(--text-muted)] leading-relaxed">
            50+ years of market experience | Established Indian market presence | International
            sourcing experience | Direct-source vision | Long-term relationships
          </p>
        </div>

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
                className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C79A63] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-[#5C3A21]/10 dark:bg-[#C79A63]/20 text-[#5C3A21] dark:text-[#C79A63] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-all duration-300">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[var(--text-main)] group-hover:text-[var(--brand-primary)] transition-colors uppercase">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
