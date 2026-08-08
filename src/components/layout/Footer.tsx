'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowRight, Instagram, Linkedin, Facebook, Twitter, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  return (
    <footer className="bg-[#191512] text-[#E5DCD3] pt-16 pb-8 border-t border-[#332A24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#332A24]">
          {/* Company Column */}
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
                  &amp; Interiors
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A89C92] leading-relaxed max-w-sm">
              India’s premier importer and nationwide supplier of Grade-A Meranti Wood, seasoned structural hardwoods, and customized interior timber solutions. Built on trust, sustainability, and craftsmanship.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#C79A63]">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Sustainable Forestry Sourcing</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-[#28221D] hover:bg-[#C79A63] hover:text-black transition-colors text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-lg bg-[#28221D] hover:bg-[#C79A63] hover:text-black transition-colors text-white">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-lg bg-[#28221D] hover:bg-[#C79A63] hover:text-black transition-colors text-white">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-[#28221D] hover:bg-[#C79A63] hover:text-black transition-colors text-white">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
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
                <Link href="/about" className="hover:text-[#C79A63] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C79A63]" /> About RPSS
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C79A63] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C79A63]" /> Timber Products
                </Link>
              </li>
              <li>
                <Link href="/meranti-wood" className="hover:text-[#C79A63] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C79A63]" /> Meranti Showcase
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#C79A63] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C79A63]" /> Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-[#C79A63] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C79A63]" /> Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#C79A63] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C79A63]" /> Timber FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C79A63] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C79A63]" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Timber Solutions */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white border-b border-[#332A24] pb-2">
              Wood Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A89C92]">
              <li>
                <Link href="/meranti-wood" className="hover:text-[#C79A63] transition-colors">
                  Red &amp; Dark Meranti Wood
                </Link>
              </li>
              <li>
                <Link href="/products?cat=hardwood" className="hover:text-[#C79A63] transition-colors">
                  Kiln-Dried Hardwoods
                </Link>
              </li>
              <li>
                <Link href="/products?cat=construction" className="hover:text-[#C79A63] transition-colors">
                  Construction Shuttering Wood
                </Link>
              </li>
              <li>
                <Link href="/products?cat=interior" className="hover:text-[#C79A63] transition-colors">
                  Architectural Interior Panels
                </Link>
              </li>
              <li>
                <Link href="/products?cat=furniture" className="hover:text-[#C79A63] transition-colors">
                  Furniture-Grade Cured Planks
                </Link>
              </li>
              <li>
                <button onClick={onOpenQuote} className="text-[#C79A63] hover:underline font-medium text-left">
                  + Custom Sawing &amp; Milling
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white border-b border-[#332A24] pb-2">
              Corporate Office
            </h4>
            <ul className="space-y-3 text-sm text-[#A89C92]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C79A63] shrink-0 mt-0.5" />
                <span>Timber Market Area, Yamunanagar, Haryana &amp; Kirti Nagar, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C79A63] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C79A63] shrink-0" />
                <a href="mailto:sales@rpsstimbers.com" className="hover:text-white transition-colors">sales@rpsstimbers.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C79A63] shrink-0" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8A7E74] gap-4">
          <p>© {new Date().getFullYear()} RPSS Timbers and Interiors. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Supply</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
