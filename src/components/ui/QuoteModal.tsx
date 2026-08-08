'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send, ShieldCheck, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, defaultProduct = '' }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    product: defaultProduct || 'meranti-wood',
    quantity: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback if confetti fails
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[var(--bg-card)] rounded-2xl shadow-2xl border border-[var(--border-color)] overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--border-color)] bg-[var(--brand-primary)] text-white">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#C79A63] font-semibold">RPSS Timbers & Interiors</span>
              <h3 className="text-xl md:text-2xl font-serif font-bold">Request a Custom Timber Quote</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close quote modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-16 h-16 bg-[#C79A63]/20 text-[#C79A63] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-[var(--text-main)]">Quote Request Received!</h4>
                <p className="text-[var(--text-muted)] max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[var(--brand-primary)]">{formData.name}</span>. Our timber specialists will review your requirements and respond with competitive mill pricing within 2 business hours.
                </p>
                <div className="p-4 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-color)] max-w-md mx-auto text-sm text-[var(--text-muted)] flex items-center justify-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#8B5E3C]" />
                  Need urgent supply? Call us directly: <a href="tel:+919876543210" className="font-semibold text-[var(--brand-primary)] hover:underline">+91 98765 43210</a>
                </div>
                <button
                  onClick={handleReset}
                  className="mt-4 px-6 py-2.5 bg-[var(--brand-primary)] text-white font-medium rounded-lg hover:bg-[#8B5E3C] transition-colors"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[#C79A63]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[#C79A63]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[#C79A63]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-1">
                      Company / Firm Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Builders & Architects"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[#C79A63]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-1">
                      Select Timber Product *
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[#C79A63]"
                    >
                      <option value="meranti-wood">Meranti Wood (Flagship)</option>
                      <option value="hardwood-timber">Seasoned Hardwood Timber</option>
                      <option value="construction-timber">Construction & Formwork Timber</option>
                      <option value="interior-wood-panels">Architectural Interior Panels</option>
                      <option value="furniture-grade-timber">Furniture-Grade Timber</option>
                      <option value="custom-timber-orders">Custom Milling & Dimensions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-1">
                      Approx Quantity / Volume
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 500 Cu.Ft or 200 Logs"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[#C79A63]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-1">
                    Requirement Details / Dimensions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify dimensions (e.g. 4x2 inches, length 8ft), moisture specifications, or site location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[#C79A63]"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Guaranteed Quality & Confidentiality
                  </span>

                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] hover:bg-[#8B5E3C] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Send className="w-4 h-4" /> Submit Quotation Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
