'use client';

import { ArrowRight, Globe, Mail, MapPin, Phone, Users } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { openEnquiry } = useEnquiry();
  const { t } = useLanguage();

  return (
    <div className="pt-24 bg-[var(--bg-primary)] min-h-screen">
      <section className="py-20 bg-gradient-to-r from-[#1F1F1F] via-[#5C3A21] to-[#1F1F1F] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="subtitle-badge border border-[#C79A63]/40 text-[#E6C89C] mx-auto">
            <Phone className="w-4 h-4 text-[#C79A63]" /> {t.contact.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight">
            {t.contact.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-light">
            {t.contact.intro}
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-[#C79A63]" />
                <h2 className="text-2xl font-serif font-bold text-[var(--text-main)]">
                  {t.contact.suppliersTitle}
                </h2>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {t.contact.suppliersBody1}
              </p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {t.contact.suppliersBody2}
              </p>
            </div>
            <button
              onClick={() => openEnquiry('supplier')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C79A63] hover:bg-[#E6C89C] text-black font-bold text-sm shadow-md transition-all"
            >
              {t.contact.becomeSupplier} <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[#C79A63]" />
                <h2 className="text-2xl font-serif font-bold text-[var(--text-main)]">
                  {t.contact.buyersTitle}
                </h2>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {t.contact.buyersBody}
              </p>
            </div>
            <button
              onClick={() => openEnquiry('buyer')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--brand-primary)] hover:bg-[#8B5E3C] text-white font-bold text-sm shadow-md transition-all"
            >
              {t.common.forBuyers} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--bg-card)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="w-full max-w-xl p-8 rounded-3xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-6">
            <h3 className="text-2xl font-serif font-bold text-[var(--text-main)] text-center">
              {t.contact.contactHeading}
            </h3>
            <div className="space-y-5 text-sm text-[var(--text-muted)]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C79A63] shrink-0 mt-0.5" />
                <div>
                  <p>
                    <strong className="text-[var(--text-main)]">{t.common.india}:</strong>{' '}
                    {t.contact.indiaContact}
                  </p>
                  <p className="mt-1">
                    <strong className="text-[var(--text-main)]">{t.common.australia}:</strong>{' '}
                    {t.contact.australiaContact}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C79A63] shrink-0 mt-0.5" />
                <div>
                  <p>
                    <a href="tel:+919419184550" className="hover:text-[var(--brand-primary)]">
                      {t.common.india}: +91 94191 84550
                    </a>
                  </p>
                  <p>
                    <a href="tel:+61431764492" className="hover:text-[var(--brand-primary)]">
                      {t.common.australia}: +61 431 764 492
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C79A63] shrink-0" />
                <a
                  href="mailto:rpss1974@gmail.com"
                  className="hover:text-[var(--brand-primary)]"
                >
                  rpss1974@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2 flex justify-center">
              <button
                onClick={() => openEnquiry('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--brand-primary)] hover:bg-[#8B5E3C] text-white font-bold text-sm shadow-md transition-all"
              >
                {t.common.contactRpss}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--text-main)]">
          {t.contact.closingTitle}
        </h2>
        <p className="text-base text-[var(--text-muted)] leading-relaxed">{t.contact.closingBody}</p>
      </section>
    </div>
  );
}
