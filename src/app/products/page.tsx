'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Eye, Send, Filter, Check } from 'lucide-react';
import { PRODUCTS_DATA, Product } from '@/data/timberData';
import ProductDetailModal from '@/components/ui/ProductDetailModal';
import QuoteModal from '@/components/ui/QuoteModal';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteProduct, setQuoteProduct] = useState<string>('');
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'meranti', label: 'Meranti Wood' },
    { id: 'hardwood', label: 'Seasoned Hardwood' },
    { id: 'construction', label: 'Construction Timber' },
    { id: 'interior', label: 'Interior Wood Panels' },
    { id: 'timber', label: 'Furniture & Custom' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  const handleOpenQuote = (productName: string) => {
    setQuoteProduct(productName);
    setIsQuoteOpen(true);
  };

  return (
    <div className="pt-24 bg-[var(--bg-primary)] min-h-screen">
      {/* Header Banner */}
      <section className="py-16 bg-gradient-to-r from-[#1F1F1F] via-[#5C3A21] to-[#1F1F1F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="subtitle-badge border border-[#C79A63]/40 text-[#E6C89C] mx-auto">
            <Sparkles className="w-4 h-4 text-[#C79A63]" /> Catalog &amp; Specifications
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Timber &amp; Wood Solutions Catalog
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Filter our kiln-dried timber species, structural logs, interior paneling, and custom milling options.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-[var(--brand-primary)] text-white shadow-lg scale-105'
                  : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] hover:border-[#C79A63]'
              }`}
            >
              {activeCategory === cat.id && <Check className="w-4 h-4 text-[#C79A63]" />}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Product Image */}
                <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#C79A63] text-black rounded-full shadow">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#E6C89C] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-300">{product.tagline}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-[var(--text-muted)] line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specifications Badge */}
                  <div className="p-3 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)] space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-muted)] font-medium">Density:</span>
                      <span className="font-semibold text-[var(--text-main)]">{product.specifications.density}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-muted)] font-medium">Moisture:</span>
                      <span className="font-semibold text-[var(--text-main)]">{product.specifications.moistureContent}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex items-center gap-1.5 text-xs font-bold text-[var(--brand-primary)] hover:text-[#C79A63] transition-colors"
                    >
                      <Eye className="w-4 h-4" /> Technical Specs
                    </button>

                    <button
                      onClick={() => handleOpenQuote(product.name)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--brand-primary)] hover:bg-[#8B5E3C] text-white text-xs font-semibold shadow-md transition-all"
                    >
                      <Send className="w-3.5 h-3.5" /> Inquire Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuote={handleOpenQuote}
      />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultProduct={quoteProduct}
      />
    </div>
  );
}
