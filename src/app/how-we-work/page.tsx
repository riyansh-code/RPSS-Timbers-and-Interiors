'use client';

import { ArrowRight, CheckCircle2, Compass, Package, Scale, Warehouse } from 'lucide-react';
import CTABanner from '@/components/home/CTABanner';
import { useEnquiry } from '@/context/EnquiryContext';
import { useLanguage } from '@/context/LanguageContext';

export default function HowWeWorkPage() {
  const { openEnquiry } = useEnquiry();
  const { t } = useLanguage();

  const steps = t.howWeWork.steps;
  const assessment = t.howWeWork.assessmentItems;

  return (
    <div className="pt-24 bg-[var(--bg-primary)] min-h-screen">
      <section className="py-20 bg-gradient-to-r from-[#1F1F1F] via-[#5C3A21] to-[#1F1F1F] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="subtitle-badge border border-[#C79A63]/40 text-[#E6C89C] mx-auto">
            <Compass className="w-4 h-4 text-[#C79A63]" /> {t.howWeWork.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight">
            {t.howWeWork.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-light">
            {t.howWeWork.intro}
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-lg space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[var(--text-main)]">
                {t.howWeWork.suppliersTitle}
              </h2>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {t.howWeWork.suppliersBody}
              </p>
            </div>
            <button
              onClick={() => openEnquiry('supplier')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C79A63] hover:bg-[#E6C89C] text-black font-bold text-sm shadow-md transition-all"
            >
              {t.howWeWork.becomeSupplier} <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-lg space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[var(--text-main)]">
                {t.howWeWork.buyersTitle}
              </h2>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {t.howWeWork.buyersBody}
              </p>
            </div>
            <button
              onClick={() => openEnquiry('buyer')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--brand-primary)] hover:bg-[#8B5E3C] text-white font-bold text-sm shadow-md transition-all"
            >
              {t.howWeWork.submitRequirement} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--bg-card)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-serif font-bold text-[var(--text-main)]">
              {t.howWeWork.transactionTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step) => (
              <div
                key={step}
                className="p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-center"
              >
                <span className="font-serif font-bold text-[var(--text-main)]">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4">
            <Scale className="w-8 h-8 text-[#C79A63]" />
            <h3 className="text-xl font-serif font-bold text-[var(--text-main)]">
              {t.howWeWork.assessmentTitle}
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {t.howWeWork.assessmentBody}
            </p>
            <ul className="space-y-2 pt-2">
              {assessment.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[var(--text-main)]">
                  <CheckCircle2 className="w-4 h-4 text-[#C79A63] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4">
            <Warehouse className="w-8 h-8 text-[#C79A63]" />
            <h3 className="text-xl font-serif font-bold text-[var(--text-main)]">
              {t.howWeWork.stockTitle}
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {t.howWeWork.stockBody}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] space-y-4">
            <Package className="w-8 h-8 text-[#C79A63]" />
            <h3 className="text-xl font-serif font-bold text-[var(--text-main)]">
              {t.howWeWork.commercialTitle}
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              {t.howWeWork.commercialBody}
            </p>
            <p className="text-sm font-semibold text-[var(--text-main)] leading-relaxed">
              {t.howWeWork.commercialNote}
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
