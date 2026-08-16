'use client';

import { ArrowRight, Globe, Users } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';
import { useLanguage } from '@/context/LanguageContext';

export default function CTABanner() {
  const { openEnquiry } = useEnquiry();
  const { t } = useLanguage();

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#1F1F1F] via-[#5C3A21] to-[#1F1F1F] text-white overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C79A63]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#E6C89C] font-bold">
            {t.cta.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight">
            {t.cta.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-[#C79A63]" />
                <h3 className="text-2xl font-serif font-bold text-white">{t.cta.suppliersTitle}</h3>
              </div>
              <p className="text-base text-gray-200 leading-relaxed">{t.cta.suppliersBody}</p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => openEnquiry('supplier')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#C79A63] to-[#8B5E3C] hover:from-[#E6C89C] hover:to-[#C79A63] text-black font-bold text-sm shadow-xl transition-all group"
              >
                {t.common.forSuppliers}{' '}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[#C79A63]" />
                <h3 className="text-2xl font-serif font-bold text-white">{t.cta.buyersTitle}</h3>
              </div>
              <p className="text-base text-gray-200 leading-relaxed">{t.cta.buyersBody}</p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => openEnquiry('buyer')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/30 hover:bg-white/10 text-white font-bold text-sm shadow-lg transition-all"
              >
                {t.common.forBuyers}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
