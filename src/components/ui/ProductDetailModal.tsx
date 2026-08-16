'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import Image from 'next/image';
import { Product } from '@/data/timberData';
import { useLanguage } from '@/context/LanguageContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenQuote: (productName: string) => void;
}

export default function ProductDetailModal({ product, onClose, onOpenQuote }: ProductDetailModalProps) {
  const { t } = useLanguage();

  if (!product) return null;

  const categoryLabel =
    t.productModal.categories[product.category as keyof typeof t.productModal.categories] ??
    product.category;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/75 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative max-w-4xl w-full bg-[var(--bg-card)] rounded-2xl shadow-2xl border border-[var(--border-color)] overflow-hidden max-h-[90vh] flex flex-col"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
            aria-label="Close Product Details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto">
            <div className="relative h-64 md:h-80 w-full bg-slate-900">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 800px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-black/40 to-transparent flex items-end p-6 md:p-8">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[#C79A63] text-white rounded-full mb-2">
                    {categoryLabel}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-white shadow-sm">
                    {product.name}
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <p className="text-base text-[var(--text-muted)] leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-lg font-serif font-bold text-[var(--text-main)] flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#C79A63]" /> {t.productModal.techSpecs}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-4 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)]">
                  <div>
                    <span className="block text-xs uppercase text-[var(--text-muted)] font-medium">
                      {t.productModal.density}
                    </span>
                    <span className="font-semibold text-sm text-[var(--text-main)]">
                      {product.specifications.density}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-[var(--text-muted)] font-medium">
                      {t.productModal.moisture}
                    </span>
                    <span className="font-semibold text-sm text-[var(--text-main)]">
                      {product.specifications.moistureContent}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-[var(--text-muted)] font-medium">
                      {t.productModal.durability}
                    </span>
                    <span className="font-semibold text-sm text-[var(--text-main)]">
                      {product.specifications.durability}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-[var(--text-muted)] font-medium">
                      {t.productModal.janka}
                    </span>
                    <span className="font-semibold text-sm text-[var(--text-main)]">
                      {product.specifications.jankaHardness}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-[var(--text-muted)] font-medium">
                      {t.productModal.grain}
                    </span>
                    <span className="font-semibold text-sm text-[var(--text-main)]">
                      {product.specifications.grainPattern}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-[var(--text-muted)] font-medium">
                      {t.productModal.origin}
                    </span>
                    <span className="font-semibold text-sm text-[var(--text-main)]">
                      {product.specifications.origin}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-base font-serif font-bold text-[var(--text-main)] mb-3">
                    {t.productModal.applications}
                  </h4>
                  <ul className="space-y-2">
                    {product.applications.map((app, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-serif font-bold text-[var(--text-main)] mb-3">
                    {t.productModal.features}
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                        <ShieldCheck className="w-4 h-4 text-[#C79A63] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[var(--text-muted)]">{t.productModal.availability}</span>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-lg border border-[var(--border-color)] text-[var(--text-main)] font-medium hover:bg-[var(--bg-primary)] transition-colors w-full sm:w-auto"
                  >
                    {t.common.close}
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenQuote(product.name);
                    }}
                    className="px-6 py-2.5 bg-[var(--brand-primary)] text-white font-semibold rounded-lg hover:bg-[#8B5E3C] shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto transition-colors"
                  >
                    {t.productModal.requestQuote} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
