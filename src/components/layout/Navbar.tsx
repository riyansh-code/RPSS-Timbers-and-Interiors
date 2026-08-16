'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import DarkModeToggle from '../ui/DarkModeToggle';
import LanguageSelector from '../ui/LanguageSelector';
import { useEnquiry } from '@/context/EnquiryContext';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.products, href: '/products' },
    { name: t.nav.howWeWork, href: '/how-we-work' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg-card)]/90 backdrop-blur-md shadow-md py-3 border-b border-[var(--border-color)]'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
          <div
            className={`relative w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 lg:w-24 lg:h-24 shrink-0 rounded-full overflow-hidden ring-2 shadow-lg group-hover:scale-105 transition-transform ${
              scrolled
                ? 'bg-white ring-[var(--border-color)]'
                : 'bg-white ring-white/80'
            }`}
          >
            <Image
              src="/images/logo.png"
              alt="RPSS Timbers logo"
              fill
              sizes="(max-width: 640px) 72px, (max-width: 1024px) 80px, 96px"
              className="object-contain p-1"
              priority
            />
          </div>
          <div>
            <span
              className={`block font-serif font-bold text-lg sm:text-xl tracking-tight ${
                scrolled ? 'text-[var(--text-main)]' : 'text-white'
              }`}
            >
              RPSS TIMBERS
            </span>
            <span
              className={`block text-[10px] uppercase tracking-widest font-semibold ${
                scrolled ? 'text-[var(--brand-accent)]' : 'text-[#C79A63]'
              }`}
            >
              {t.nav.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? isActive
                      ? 'text-[#C79A63] font-semibold bg-[var(--bg-primary)]'
                      : 'text-[var(--text-main)] hover:text-[#C79A63]'
                    : isActive
                    ? 'text-[#C79A63] font-semibold bg-white/10'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSelector scrolled={scrolled} />
          <DarkModeToggle />
          <button
            onClick={() => openEnquiry('contact')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#5C3A21] to-[#8B5E3C] hover:from-[#8B5E3C] hover:to-[#5C3A21] text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            {t.common.enquire}
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LanguageSelector scrolled={scrolled} compact />
          <DarkModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg ${scrolled ? 'text-[var(--text-main)]' : 'text-white'} hover:bg-white/10`}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[var(--bg-card)] border-b border-[var(--border-color)] overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-[var(--brand-primary)] text-white font-semibold'
                        : 'text-[var(--text-main)] hover:bg-[var(--bg-primary)]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-[var(--border-color)]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openEnquiry('contact');
                  }}
                  className="w-full py-3.5 rounded-xl bg-[var(--brand-primary)] text-white text-center font-bold shadow-md hover:bg-[#8B5E3C] transition-colors"
                >
                  {t.common.enquire}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
