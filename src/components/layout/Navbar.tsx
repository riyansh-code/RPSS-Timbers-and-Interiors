'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Trees as Tree, PhoneCall, ChevronRight } from 'lucide-react';
import DarkModeToggle from '../ui/DarkModeToggle';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Meranti Wood', href: '/meranti-wood' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
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
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5C3A21] to-[#C79A63] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <span className="font-serif font-bold text-xl tracking-tighter">R</span>
          </div>
          <div>
            <span className={`block font-serif font-bold text-lg sm:text-xl tracking-tight ${scrolled ? 'text-[var(--text-main)]' : 'text-white'}`}>
              RPSS TIMBERS
            </span>
            <span className={`block text-[10px] uppercase tracking-widest font-semibold ${scrolled ? 'text-[var(--brand-accent)]' : 'text-[#C79A63]'}`}>
              &amp; Interiors
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
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

        {/* Header Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <DarkModeToggle />

          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#5C3A21] to-[#8B5E3C] hover:from-[#8B5E3C] hover:to-[#5C3A21] text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Request Quote
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden items-center gap-3">
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

      {/* Mobile Navigation Drawer */}
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
                    key={link.name}
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
                    onOpenQuote();
                  }}
                  className="w-full py-3.5 rounded-xl bg-[var(--brand-primary)] text-white text-center font-bold shadow-md hover:bg-[#8B5E3C] transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
