'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { LOCALES, LOCALE_META } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';
import type { Locale } from '@/i18n';

export default function LanguagePopup() {
  const { showLanguagePopup, confirmLanguage, ready, locale } = useLanguage();

  useEffect(() => {
    if (!showLanguagePopup) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [showLanguagePopup]);

  if (!ready) return null;

  return (
    <AnimatePresence>
      {showLanguagePopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', damping: 24, stiffness: 280 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="language-popup-title"
            className="relative z-10 w-full max-w-md rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl overflow-hidden"
          >
            <div className="bg-[var(--brand-primary)] text-white px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#E6C89C]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#E6C89C] font-semibold">
                    RPSS Timbers
                  </p>
                  <h2 id="language-popup-title" className="text-xl font-serif font-bold">
                    Select Language
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Choose your preferred language to continue.
              </p>
              <p className="text-xs font-semibold text-[#C79A63]">Default: English</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {LOCALES.map((code: Locale) => {
                  const item = LOCALE_META[code];
                  const selected = code === locale;
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => confirmLanguage(code)}
                      className={`rounded-xl border px-4 py-3 text-left transition-all hover:border-[#C79A63] hover:shadow-md ${
                        selected
                          ? 'border-[#C79A63] bg-[var(--bg-primary)] ring-1 ring-[#C79A63]/40'
                          : 'border-[var(--border-color)] bg-[var(--bg-primary)]'
                      }`}
                    >
                      <span className="block text-base font-serif font-bold text-[var(--text-main)]">
                        {item.label}
                      </span>
                      <span className="block text-xs text-[var(--text-muted)] mt-0.5">
                        {item.nativeLabel}
                      </span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => confirmLanguage('en')}
                className="w-full mt-2 py-3 rounded-xl bg-[var(--brand-primary)] text-white font-semibold text-sm hover:bg-[#8B5E3C] transition-colors"
              >
                Continue with English
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
