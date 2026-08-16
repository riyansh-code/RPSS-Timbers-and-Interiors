import { en, type Dictionary } from './en';
import { hi } from './hi';
import { pa } from './pa';
import { ur } from './ur';
import type { Locale } from './types';
import { PRODUCTS_DATA, type Product } from '@/data/timberData';

export { LOCALES, LOCALE_META, STORAGE_KEY, LANGUAGE_CHOSEN_KEY } from './types';
export type { Locale } from './types';
export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  hi,
  pa,
  ur,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export function getTranslatedProducts(locale: Locale): Product[] {
  const dict = getDictionary(locale);
  return PRODUCTS_DATA.map((product) => {
    const translated = dict.products[product.id as keyof typeof dict.products];
    if (!translated) return product;
    return {
      ...product,
      name: translated.name,
      tagline: translated.tagline,
      shortDesc: translated.shortDesc,
      description: translated.description,
      specifications: translated.specifications,
      applications: translated.applications,
      features: translated.features,
    };
  });
}
