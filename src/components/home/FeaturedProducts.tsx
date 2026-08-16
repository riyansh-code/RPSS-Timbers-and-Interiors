'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Sparkles, Eye, Send } from 'lucide-react';
import type { Product } from '@/data/timberData';
import ProductDetailModal from '../ui/ProductDetailModal';
import { useEnquiry } from '@/context/EnquiryContext';
import { useLanguage } from '@/context/LanguageContext';

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { openEnquiry } = useEnquiry();
  const { t, products } = useLanguage();

  return (
    <section className="py-24 bg-[var(--bg-card)] border-b border-[var(--border-color)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-color)] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="subtitle-badge">
              <Sparkles className="w-4 h-4 text-[#8B5E3C]" /> {t.productFocus.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--text-main)]">
              {t.productFocus.title}
            </h2>
            <p className="text-base text-[var(--text-muted)] leading-relaxed">
              {t.productFocus.intro}
            </p>
          </div>

          <button
            onClick={() => openEnquiry('product')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[#C79A63] text-[var(--text-main)] font-semibold text-sm transition-all"
          >
            {t.common.enquireAboutProduct} <ArrowRight className="w-4 h-4 text-[#C79A63]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-[var(--bg-primary)] rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-56 w-full overflow-hidden bg-black/10">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#E6C89C] transition-colors">
                    {product.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{product.shortDesc}</p>
                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center gap-1 text-xs font-bold text-[var(--brand-primary)] hover:text-[#C79A63] transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" /> {t.common.details}
                  </button>
                  <button
                    onClick={() => openEnquiry('product', product.name)}
                    className="flex items-center gap-1 px-3 py-2 rounded-lg bg-[var(--brand-primary)] hover:bg-[#8B5E3C] text-white text-xs font-semibold shadow-md transition-all"
                  >
                    <Send className="w-3.5 h-3.5" /> {t.common.enquire}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuote={(name) => openEnquiry('product', name)}
      />
    </section>
  );
}
