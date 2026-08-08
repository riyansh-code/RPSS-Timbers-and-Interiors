'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import { GalleryItem } from '@/data/timberData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({ item, onClose, onPrev, onNext }: LightboxModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        <button
          onClick={onPrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-5xl w-full bg-[var(--bg-card)] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row max-h-[85vh]"
        >
          <div className="relative w-full md:w-2/3 h-64 md:h-[600px] bg-black">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
          </div>

          <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[#C79A63]/20 text-[#C79A63] rounded-full">
                {item.category}
              </span>
              <h3 className="text-2xl font-serif font-bold text-[var(--text-main)]">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {item.description}
              </p>
              {item.location && (
                <div className="flex items-center gap-2 text-xs font-medium text-[var(--brand-secondary)] pt-2 border-t border-[var(--border-color)]">
                  <MapPin className="w-4 h-4 text-[#C79A63]" />
                  {item.location}
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-[var(--border-color)] mt-6 text-xs text-[var(--text-muted)] flex items-center justify-between">
              <span>RPSS Timbers Media Archive</span>
              <span className="font-semibold text-[var(--brand-primary)]">High-Res Spec</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
