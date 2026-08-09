'use client';

import { ArrowRight, Globe, Mail, MapPin, Phone, Users } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';

export default function ContactPage() {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="pt-24 bg-[var(--bg-primary)] min-h-screen">
      <section className="py-20 bg-gradient-to-r from-[#1F1F1F] via-[#5C3A21] to-[#1F1F1F] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="subtitle-badge border border-[#C79A63]/40 text-[#E6C89C] mx-auto">
            <Phone className="w-4 h-4 text-[#C79A63]" /> Work With RPSS
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight">
            Let&apos;s Build the Right Connection
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-light">
            For more than five decades, RPSS has built its business around timber, long-term
            relationships and a deep understanding of the Indian market. Today, that experience is
            being extended into a broader international sourcing and trading network.
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
                  For International Suppliers
                </h2>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Looking to enter or expand in the Indian market? RPSS can be a reliable channel
                partner for suitable international suppliers.
              </p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                We are interested in suppliers looking to enter India, develop long-term distribution
                relationships, find Indian demand, offer regular products, explore stock opportunities
                or discuss representation where appropriate.
              </p>
            </div>
            <button
              onClick={() => openEnquiry('supplier')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C79A63] hover:bg-[#E6C89C] text-black font-bold text-sm shadow-md transition-all"
            >
              BECOME A SUPPLIER <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[#C79A63]" />
                <h2 className="text-2xl font-serif font-bold text-[var(--text-main)]">
                  For Indian Buyers
                </h2>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Looking for reliable international supply? Tell RPSS what you need and we can explore
                suitable sources from Australia and other international markets.
              </p>
            </div>
            <button
              onClick={() => openEnquiry('buyer')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--brand-primary)] hover:bg-[#8B5E3C] text-white font-bold text-sm shadow-md transition-all"
            >
              FOR BUYERS <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--bg-card)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold text-[var(--text-main)]">
              Information We Need
            </h2>
            <div className="space-y-4 text-sm text-[var(--text-muted)] leading-relaxed">
              <p>
                <strong className="text-[var(--text-main)]">Buyer form:</strong> Name, company,
                location, phone, email, product, species/type, grade, dimensions, quantity,
                destination, delivery period, target price, detailed specifications and supporting
                documents/photos.
              </p>
              <p>
                <strong className="text-[var(--text-main)]">Supplier form:</strong> Company name,
                contact person, country, website, email/phone, products supplied, catalogue,
                photos/videos, certifications and factory/warehouse information. Suppliers can also
                indicate available or surplus opportunities in a subtle, non-intrusive way.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-6">
            <h3 className="text-2xl font-serif font-bold text-[var(--text-main)]">Contact</h3>
            <div className="space-y-5 text-sm text-[var(--text-muted)]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C79A63] shrink-0 mt-0.5" />
                <div>
                  <p>
                    <strong className="text-[var(--text-main)]">Australia:</strong> Canberra, ACT —
                    Australian sourcing operation — Puneet Arora
                  </p>
                  <p className="mt-1">
                    <strong className="text-[var(--text-main)]">India:</strong> Amritsar, Punjab |
                    Jammu &amp; Kashmir — Mr. Sham Sunder Arora
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C79A63] shrink-0 mt-0.5" />
                <div>
                  <p>
                    <a href="tel:+61431764492" className="hover:text-[var(--brand-primary)]">
                      Australia: +61 431 764 492
                    </a>
                  </p>
                  <p>
                    <a href="tel:+919419184550" className="hover:text-[var(--brand-primary)]">
                      India: +91 94191 84550
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C79A63] shrink-0" />
                <a
                  href="mailto:puneet.arora2702@gmail.com"
                  className="hover:text-[var(--brand-primary)]"
                >
                  puneet.arora2702@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#C79A63] shrink-0" />
                <a
                  href="https://www.rpsstimbers.com"
                  className="hover:text-[var(--brand-primary)]"
                >
                  www.rpsstimbers.com
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => openEnquiry('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--brand-primary)] hover:bg-[#8B5E3C] text-white font-bold text-sm shadow-md transition-all"
              >
                CONTACT RPSS
              </button>
              <button
                onClick={() => openEnquiry('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-color)] hover:border-[#C79A63] text-[var(--text-main)] font-bold text-sm transition-all"
              >
                TALK TO RPSS
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[var(--text-main)]">
          Five Decades of Experience. A Global Sourcing Future.
        </h2>
        <p className="text-base text-[var(--text-muted)] leading-relaxed">
          For Indian buyers, RPSS aims to provide broader access to reliable international sources.
          For international suppliers, RPSS aims to provide a knowledgeable channel into the Indian
          market.
        </p>
      </section>
    </div>
  );
}
