'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';

export default function Footer() {
  const { openEnquiry } = useEnquiry();

  return (
    <footer className="bg-[#191512] text-[#E5DCD3] pt-16 pb-8 border-t border-[#332A24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#332A24]">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5E3C] to-[#C79A63] flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">
                R
              </div>
              <div>
                <span className="block font-serif font-bold text-xl text-white tracking-tight">
                  RPSS TIMBERS
                </span>
                <span className="block text-[10px] uppercase tracking-widest font-semibold text-[#C79A63]">
                  Global Timber &amp; Product Sourcing
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A89C92] leading-relaxed max-w-sm">
              Connecting International &amp; Australian Suppliers with Indian Markets. With a legacy
              spanning more than 50 years in the timber trade, RPSS Timbers brings established Indian
              market knowledge together with an expanding international sourcing network.
            </p>

          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white border-b border-[#332A24] pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A89C92]">
              <li>
                <Link href="/" className="hover:text-[#C79A63] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C79A63]" /> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#C79A63] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C79A63]" /> About RPSS
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#C79A63] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C79A63]" /> Products &amp; Sourcing
                </Link>
              </li>
              <li>
                <Link
                  href="/how-we-work"
                  className="hover:text-[#C79A63] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C79A63]" /> How We Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#C79A63] transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C79A63]" /> Work With RPSS
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white border-b border-[#332A24] pb-2">
              Sourcing Focus
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A89C92]">
              <li>
                <Link href="/products" className="hover:text-[#C79A63] transition-colors">
                  Timber &amp; Wood Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C79A63] transition-colors">
                  Plywood &amp; Allied Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C79A63] transition-colors">
                  Buyer-Specific Sourcing
                </Link>
              </li>
              <li>
                <button
                  onClick={() => openEnquiry('product')}
                  className="text-[#C79A63] hover:underline font-medium text-left"
                >
                  ENQUIRE ABOUT A PRODUCT
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white border-b border-[#332A24] pb-2">
              Contact RPSS Timbers
            </h4>
            <ul className="space-y-3 text-sm text-[#A89C92]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C79A63] shrink-0 mt-0.5" />
                <div>
                  <p>
                    <strong className="text-white">India:</strong> Amritsar, Punjab | Jammu &amp;
                    Kashmir
                  </p>
                  <p>
                    <strong className="text-white">Australia:</strong> Canberra, ACT — Australian
                    sourcing operation
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C79A63] shrink-0 mt-0.5" />
                <div>
                  <p>
                    <a href="tel:+919419184550" className="hover:text-white transition-colors">
                      <strong className="text-white">India:</strong> +91 94191 84550
                    </a>
                  </p>
                  <p>
                    <a href="tel:+61431764492" className="hover:text-white transition-colors">
                      <strong className="text-white">Australia:</strong> +61 431 764 492
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C79A63] shrink-0" />
                <a
                  href="mailto:rpss1974@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  rpss1974@gmail.com
                </a>
              </li>
              <li>
                <button
                  onClick={() => openEnquiry('contact')}
                  className="text-[#C79A63] hover:underline font-medium"
                >
                  CONTACT RPSS
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8A7E74] gap-4">
          <p>
            © {new Date().getFullYear()} RPSS Timbers. All Rights Reserved. Global Timber &amp;
            Product Sourcing.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Trade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
