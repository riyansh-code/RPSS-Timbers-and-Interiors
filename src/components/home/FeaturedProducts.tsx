'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Eye, Send } from 'lucide-react';
import { PRODUCTS_DATA, Product } from '@/data/timberData';
import ProductDetailModal from '../ui/ProductDetailModal';

interface FeaturedProductsProps {
  onOpenQuote: (productName?: string) => void;
}

export default function FeaturedProducts({ onOpenQuote }: FeaturedProductsProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-24 bg-[var(--bg-card)] border-b border-[var(--border-color)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-color)] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="subtitle-badge">
              <Sparkles className="w-4 h-4 text-[#8B5E3C]" /> Premium Timber Collection
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[var(--text-main)]">
              Our Featured Timber Products
            </h2>
            <p className="text-base text-[var(--text-muted)]">
              Explore our range of kiln-dried Meranti wood, high-density structural hardwoods, and architectural wood paneling engineered for endurance.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[#C79A63] text-[var(--text-main)] font-semibold text-sm transition-all"
          >
            View All Products Catalog <ArrowRight className="w-4 h-4 text-[#C79A63]" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_DATA.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-[var(--bg-primary)] rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Badge if Flagship */}
              {product.isFlagship && (
                <div className="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#5C3A21] to-[#C79A63] text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Flagship Product
                </div>
              )}

              {/* Image Container with Zoom effect */}
              <div className="relative h-64 w-full overflow-hidden bg-black/10">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#E6C89C]">
                    {product.specifications.density}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#E6C89C] transition-colors">
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-xs font-medium text-[#8B5E3C] uppercase tracking-wide">
                    {product.tagline}
                  </p>
                  <p className="text-sm text-[var(--text-muted)] line-clamp-3 leading-relaxed">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Applications Pill Preview */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {product.applications.slice(0, 2).map((app, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-[var(--bg-card)] text-[var(--text-muted)] text-[11px] font-medium border border-[var(--border-color)]">
                      {app}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center gap-1.5 text-xs font-bold text-[var(--brand-primary)] hover:text-[#C79A63] transition-colors"
                  >
                    <Eye className="w-4 h-4" /> Learn Specs
                  </button>

                  <button
                    onClick={() => onOpenQuote(product.name)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--brand-primary)] hover:bg-[#8B5E3C] text-white text-xs font-semibold shadow-md transition-all"
                  >
                    <Send className="w-3.5 h-3.5" /> Quote
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuote={(name) => onOpenQuote(name)}
      />
    </section>
  );
}
