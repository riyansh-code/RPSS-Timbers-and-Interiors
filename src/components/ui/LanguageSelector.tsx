'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { LOCALES, LOCALE_META } from '@/i18n';
import { useLanguage } from '@/context/LanguageContext';
import type { Locale } from '@/i18n';

type LanguageSelectorProps = {
  scrolled?: boolean;
  compact?: boolean;
};

export default function LanguageSelector({ scrolled = true, compact = false }: LanguageSelectorProps) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  const choose = (code: Locale) => {
    setLocale(code);
    setOpen(false);
  };

  if (!compact) {
    const shellClass = scrolled
      ? 'border-[var(--border-color)] bg-[var(--bg-card)]/80'
      : 'border-white/25 bg-white/10';
    const idleClass = scrolled
      ? 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-primary)]'
      : 'text-white/75 hover:text-white hover:bg-white/10';
    const activeClass = scrolled
      ? 'bg-[var(--brand-primary)] text-white shadow-sm'
      : 'bg-white text-[#5C3A21] shadow-sm';

    return (
      <div
        className={`inline-flex items-center gap-0.5 rounded-full border p-1 ${shellClass}`}
        role="group"
        aria-label={t.common.language}
      >
        {LOCALES.map((code) => {
          const active = code === locale;
          return (
            <button
              key={code}
              type="button"
              onClick={() => choose(code)}
              aria-pressed={active}
              className={`px-2.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                active ? activeClass : idleClass
              }`}
            >
              {LOCALE_META[code].label}
            </button>
          );
        })}
      </div>
    );
  }

  const meta = LOCALE_META[locale];
  const triggerClass = scrolled
    ? 'border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] hover:border-[#C79A63]'
    : 'border-white/30 bg-white/10 text-white hover:bg-white/20';

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={t.common.language}
        aria-expanded={open}
        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-2 text-xs font-semibold transition-all shadow-sm ${triggerClass}`}
      >
        <Globe className="w-4 h-4 text-[#C79A63]" />
        <span className="font-bold tracking-wide">{meta.short}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute end-0 top-full mt-2 w-44 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] shadow-2xl overflow-hidden z-50">
          <p className="px-3 py-2 text-[10px] uppercase tracking-wider font-semibold text-[var(--text-muted)] border-b border-[var(--border-color)]">
            {t.common.selectLanguage}
          </p>
          <ul className="py-1">
            {LOCALES.map((code) => {
              const item = LOCALE_META[code];
              const active = code === locale;
              return (
                <li key={code}>
                  <button
                    type="button"
                    onClick={() => choose(code)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 text-sm transition-colors ${
                      active
                        ? 'bg-[var(--brand-primary)] text-white'
                        : 'text-[var(--text-main)] hover:bg-[var(--bg-primary)]'
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className={`text-xs ${active ? 'text-white/80' : 'text-[var(--text-muted)]'}`}>
                      {item.nativeLabel}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
