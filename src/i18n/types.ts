export type Locale = 'en' | 'hi' | 'pa' | 'ur';

export const LOCALES: Locale[] = ['en', 'hi', 'pa', 'ur'];

export const LOCALE_META: Record<
  Locale,
  { label: string; nativeLabel: string; short: string; dir: 'ltr' | 'rtl' }
> = {
  en: { label: 'English', nativeLabel: 'English', short: 'EN', dir: 'ltr' },
  hi: { label: 'Hindi', nativeLabel: 'हिन्दी', short: 'HI', dir: 'ltr' },
  pa: { label: 'Punjabi', nativeLabel: 'ਪੰਜਾਬੀ', short: 'PA', dir: 'ltr' },
  ur: { label: 'Urdu', nativeLabel: 'اردو', short: 'UR', dir: 'rtl' },
};

export const STORAGE_KEY = 'rpss-language';
export const LANGUAGE_CHOSEN_KEY = 'rpss-language-chosen';
