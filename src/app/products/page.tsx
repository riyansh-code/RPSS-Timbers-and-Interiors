'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Eye, Send, Sparkles } from 'lucide-react';
import { PRODUCTS_DATA, Product } from '@/data/timberData';
import ProductDetailModal from '@/components/ui/ProductDetailModal';
import { useEnquiry } from '@/context/EnquiryContext';

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { openEnquiry } = useEnquiry();

  const buyerRequirements = [
    'Product',
    'Species/type',
    'Grade',
    'Dimensions',
    'Quality',
    'Moisture content',
    'Quantity',
    'Destination',
    'Delivery requirements',
    'Commercial parameters',
  ];

  const supplierTypes = [
    'Manufacturers',
    'Timber mills',
    'Exporters',
    'Wholesalers',
    'Distributors',
    'Stockholders',
    'Suppliers with available or surplus inventory',
  ];

  return (
    <div className="pt-24 bg-[var(--bg-primary)] min-h-screen">
      <section className="py-16 bg-gradient-to-r from-[#1F1F1F] via-[#5C3A21] to-[#1F1F1F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="subtitle-badge border border-[#C79A63]/40 text-[#E6C89C] mx-auto">
            <Sparkles className="w-4 h-4 text-[#C79A63]" /> Products &amp; Sourcing
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Our Product Focus
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            RPSS is not limited to one product category. Our sourcing horizon is guided by genuine
            Indian buyer requirements and commercially suitable international supply.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS_DATA.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-serif font-bold">{product.name}</h3>
                  <p className="text-xs text-gray-300">{product.tagline}</p>
                </div>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-1.5">
                    {product.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[var(--text-main)]">
                        <CheckCircle2 className="w-4 h-4 text-[#C79A63] shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex items-center gap-1.5 text-xs font-bold text-[var(--brand-primary)] hover:text-[#C79A63] transition-colors"
                  >
                    <Eye className="w-4 h-4" /> Details
                  </button>
                  <button
                    onClick={() => openEnquiry('product', product.name)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--brand-primary)] hover:bg-[#8B5E3C] text-white text-xs font-semibold shadow-md transition-all"
                  >
                    <Send className="w-3.5 h-3.5" /> ENQUIRE ABOUT A PRODUCT
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[var(--bg-card)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <h2 className="text-3xl font-serif font-bold text-[var(--text-main)]">
              Typical Buyer Requirements
            </h2>
            <p className="text-sm text-[var(--text-muted)]">
              When submitting a requirement, useful details include:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {buyerRequirements.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[var(--text-main)]">
                  <CheckCircle2 className="w-4 h-4 text-[#C79A63] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <button
              onClick={() => openEnquiry('buyer')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--brand-primary)] hover:bg-[#8B5E3C] text-white font-bold text-sm shadow-md transition-all"
            >
              FOR BUYERS <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-5">
            <h2 className="text-3xl font-serif font-bold text-[var(--text-main)]">
              Supplier Opportunities
            </h2>
            <p className="text-sm text-[var(--text-muted)]">
              RPSS is interested in manufacturers, timber mills, exporters, wholesalers,
              distributors, stockholders and suppliers with available or surplus inventory.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {supplierTypes.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[var(--text-main)]">
                  <CheckCircle2 className="w-4 h-4 text-[#C79A63] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <button
              onClick={() => openEnquiry('supplier')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C79A63] hover:bg-[#E6C89C] text-black font-bold text-sm shadow-md transition-all"
            >
              FOR SUPPLIERS <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuote={(name) => openEnquiry('product', name)}
      />
    </div>
  );
}
