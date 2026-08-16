'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  dictionaries,
  getTranslatedProducts,
  LANGUAGE_CHOSEN_KEY,
  LOCALE_META,
  STORAGE_KEY,
  type Dictionary,
  type Locale,
} from '@/i18n';
import type { Product } from '@/data/timberData';

type LanguageContextValue = {
  locale: Locale;
  dir: 'ltr' | 'rtl';
  t: Dictionary;
  products: Product[];
  showLanguagePopup: boolean;
  setLocale: (locale: Locale) => void;
  confirmLanguage: (locale: Locale) => void;
  closeLanguagePopup: () => void;
  ready: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'hi' || value === 'pa' || value === 'ur';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const chosen = localStorage.getItem(LANGUAGE_CHOSEN_KEY);
      if (isLocale(saved)) {
        setLocaleState(saved);
      }
      if (chosen !== '1') {
        setShowLanguagePopup(true);
      }
    } catch {
      setShowLanguagePopup(true);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const meta = LOCALE_META[locale];
    document.documentElement.lang = locale === 'pa' ? 'pa' : locale;
    document.documentElement.dir = meta.dir;
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore
    }
  }, [locale, ready]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
      localStorage.setItem(LANGUAGE_CHOSEN_KEY, '1');
    } catch {
      // ignore
    }
  }, []);

  const confirmLanguage = useCallback((next: Locale) => {
    setLocaleState(next);
    setShowLanguagePopup(false);
    try {
      localStorage.setItem(STORAGE_KEY, next);
      localStorage.setItem(LANGUAGE_CHOSEN_KEY, '1');
    } catch {
      // ignore
    }
  }, []);

  const closeLanguagePopup = useCallback(() => {
    setShowLanguagePopup(false);
    try {
      localStorage.setItem(LANGUAGE_CHOSEN_KEY, '1');
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore
    }
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dir: LOCALE_META[locale].dir,
      t: dictionaries[locale],
      products: getTranslatedProducts(locale),
      showLanguagePopup,
      setLocale,
      confirmLanguage,
      closeLanguagePopup,
      ready,
    }),
    [locale, showLanguagePopup, setLocale, confirmLanguage, closeLanguagePopup, ready]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
