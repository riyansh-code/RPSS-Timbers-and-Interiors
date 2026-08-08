'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    requirement: 'meranti-wood',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 90, spread: 60, origin: { y: 0.6 } });
    } catch {
      // ignore fallback
    }
  };

  return (
    <div className="pt-24 bg-[var(--bg-primary)] min-h-screen">
      {/* Header Banner */}
      <section className="py-20 bg-gradient-to-r from-[#1F1F1F] via-[#5C3A21] to-[#1F1F1F] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="subtitle-badge border border-[#C79A63]/40 text-[#E6C89C] mx-auto">
            <Phone className="w-4 h-4 text-[#C79A63]" /> Connect With RPSS
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-white">
            Contact Our Wood Specialists
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Get instant timber quotes, site dispatch estimates, or technical species guidance for your project.
          </p>
        </div>
      </section>

      {/* Main Split Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl space-y-6">
              <h3 className="text-2xl font-serif font-bold text-[var(--text-main)]">
                Corporate Headquarters &amp; Sawmill Hub
              </h3>

              <div className="space-y-6 text-sm text-[var(--text-muted)]">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#5C3A21]/10 text-[#5C3A21] dark:text-[#C79A63] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-main)] text-base">Processing Hub Address</h4>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      Timber Market Area, Yamunanagar, Haryana 135001, India
                    </p>
                    <p className="text-xs text-[var(--brand-primary)] font-semibold mt-1">
                      Regional Depot: Kirti Nagar Timber Market, New Delhi 110015
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#5C3A21]/10 text-[#5C3A21] dark:text-[#C79A63] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-main)] text-base">Direct Phone Lines</h4>
                    <a href="tel:+919876543210" className="text-xs font-semibold text-[var(--brand-primary)] hover:underline block">
                      +91 98765 43210 (Sales &amp; Dispatch)
                    </a>
                    <a href="tel:+919876543211" className="text-xs text-[var(--text-muted)] hover:underline block">
                      +91 98765 43211 (Mill Office)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#5C3A21]/10 text-[#5C3A21] dark:text-[#C79A63] shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-main)] text-base">Official Email</h4>
                    <a href="mailto:sales@rpsstimbers.com" className="text-xs font-semibold text-[var(--brand-primary)] hover:underline block">
                      sales@rpsstimbers.com
                    </a>
                    <a href="mailto:quotes@rpsstimbers.com" className="text-xs text-[var(--text-muted)] hover:underline block">
                      quotes@rpsstimbers.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#5C3A21]/10 text-[#5C3A21] dark:text-[#C79A63] shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-main)] text-base">Operating Hours</h4>
                    <p className="text-xs text-[var(--text-muted)]">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-xs text-[var(--text-muted)]">Sunday: Closed (Emergency Site Dispatch Available)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Card Placeholder */}
            <div className="p-4 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-md overflow-hidden space-y-3">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-800 flex items-center justify-center text-center p-6 border border-[var(--border-color)]">
                <iframe
                  title="RPSS Yamunanagar Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110197.83447915598!2d77.22849312678887!3d30.12903704256247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ef99b50e30349%3A0xe543c7b748eb114d!2sYamuna%20Nagar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter opacity-90 grayscale hover:grayscale-0 transition-all duration-300"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] px-2">
                <span>Yamunanagar Processing Hub</span>
                <span className="font-bold text-[var(--brand-primary)]">Directions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Inquiry Form */}
          <div className="lg:col-span-7 bg-[var(--bg-card)] p-8 sm:p-12 rounded-3xl border border-[var(--border-color)] shadow-xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-20 h-20 bg-[#C79A63]/20 text-[#C79A63] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-[var(--text-main)]">Inquiry Successfully Sent!</h3>
                <p className="text-[var(--text-muted)] max-w-md mx-auto">
                  Thank you, <span className="font-bold text-[var(--brand-primary)]">{formData.name}</span>. Our timber technical representative will review your requirements and get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-8 py-3 rounded-xl bg-[var(--brand-primary)] text-white font-bold hover:bg-[#8B5E3C] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[var(--text-main)]">Submit Your Requirements</h3>
                  <p className="text-xs text-[var(--text-muted)]">Fill out the form below to receive competitive mill pricing.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] focus:ring-2 focus:ring-[#C79A63] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] focus:ring-2 focus:ring-[#C79A63] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@firm.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] focus:ring-2 focus:ring-[#C79A63] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-2">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sharma Architecture &amp; Design"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] focus:ring-2 focus:ring-[#C79A63] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-2">
                    Wood Product Requirement *
                  </label>
                  <select
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] focus:ring-2 focus:ring-[#C79A63] focus:outline-none"
                  >
                    <option value="meranti-wood">Meranti Wood (Red &amp; Dark Red)</option>
                    <option value="hardwood-timber">Seasoned Hardwood Timber</option>
                    <option value="construction-timber">Construction &amp; Scaffolding Wood</option>
                    <option value="interior-wood-panels">Architectural Interior Panels</option>
                    <option value="furniture-grade-timber">Furniture-Grade Timber</option>
                    <option value="custom-timber-orders">Custom Timber Milling &amp; Sawing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-[var(--text-muted)] mb-2">
                    Message / Specifications
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on quantity (Cu.Ft / Logs), preferred sizes, or site delivery location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] focus:ring-2 focus:ring-[#C79A63] focus:outline-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Direct Mill Response Within 2 Hours
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[var(--brand-primary)] hover:bg-[#8B5E3C] text-white font-bold shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Submit Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
