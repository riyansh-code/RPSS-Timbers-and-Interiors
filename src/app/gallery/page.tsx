'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Camera, Eye, MapPin } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '@/data/timberData';
import LightboxModal from '@/components/ui/LightboxModal';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'storage', label: 'Wood Storage' },
    { id: 'logs', label: 'Timber Logs' },
    { id: 'interiors', label: 'Finished Interiors' },
    { id: 'furniture', label: 'Furniture' },
    { id: 'construction', label: 'Construction Projects' },
    { id: 'warehouse', label: 'Warehouse & Sawmills' },
  ];

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((g) => g.category === activeTab);

  const activeItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handlePrev = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
  };

  return (
    <div className="pt-24 bg-[var(--bg-primary)] min-h-screen">
      {/* Header Banner */}
      <section className="py-16 bg-gradient-to-r from-[#1F1F1F] via-[#5C3A21] to-[#1F1F1F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="subtitle-badge border border-[#C79A63]/40 text-[#E6C89C] mx-auto">
            <Camera className="w-4 h-4 text-[#C79A63]" /> Media &amp; Project Archive
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            Timber Yard &amp; Project Gallery
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Take a visual tour of our climate-monitored storage yards, log seasoning bays, automated sawmills, and completed client installations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setSelectedItemIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === cat.id
                  ? 'bg-[var(--brand-primary)] text-white shadow-md scale-105'
                  : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] hover:border-[#C79A63]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Display */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItemIndex(index)}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-[var(--border-color)] bg-black"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#C79A63] text-black rounded-full shadow">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#E6C89C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2">{item.description}</p>
                  {item.location && (
                    <div className="flex items-center gap-1 text-[11px] text-[#C79A63] pt-1">
                      <MapPin className="w-3 h-3" /> {item.location}
                    </div>
                  )}
                </div>

                {/* Eye Icon Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                  <div className="p-3 rounded-full bg-[#C79A63] text-black shadow-xl">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        onClose={() => setSelectedItemIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
