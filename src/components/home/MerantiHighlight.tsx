'use client';

import Image from 'next/image';
import { ArrowRight, Building2, FileText, Globe, Sparkles, Users } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';

export default function MerantiHighlight() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="py-24 bg-[#191512] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#C79A63_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C79A63]/20 text-[#E6C89C] text-xs font-semibold uppercase tracking-wider border border-[#C79A63]/30">
              <Sparkles className="w-4 h-4 text-[#C79A63]" /> What We Do
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">WHAT WE DO</h2>

            <p className="text-base sm:text-xl text-gray-200 font-medium leading-relaxed">
              RPSS Timbers connects international suppliers with Indian buyers. We source timber,
              agricultural products and other products according to genuine market requirements,
              while building long-term supplier and buyer relationships.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <Globe className="w-6 h-6 text-[#C79A63]" />
                <h4 className="text-sm font-bold text-white">Supplier Sourcing</h4>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <Building2 className="w-6 h-6 text-[#C79A63]" />
                <h4 className="text-sm font-bold text-white">Product Sourcing</h4>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <Users className="w-6 h-6 text-[#C79A63]" />
                <h4 className="text-sm font-bold text-white">Buyer-Supplier Connection</h4>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <FileText className="w-6 h-6 text-[#C79A63]" />
                <h4 className="text-sm font-bold text-white">Trade Facilitation</h4>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openEnquiry('supplier')}
                className="px-6 py-3.5 rounded-xl bg-[#C79A63] hover:bg-[#E6C89C] text-black font-bold text-sm shadow-xl transition-all flex items-center gap-2"
              >
                FOR SUPPLIERS <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => openEnquiry('buyer')}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
              >
                FOR BUYERS
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] rounded-2xl overflow-hidden border-2 border-[#C79A63]/30 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
                alt="RPSS Global Timber & Product Sourcing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs text-[#C79A63] font-bold uppercase tracking-widest">
                  Key Areas
                </span>
                <h4 className="text-xl font-serif font-bold text-white">
                  Supplier Sourcing | Product Sourcing | Buyer-Supplier Connection | Trade
                  Facilitation
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
