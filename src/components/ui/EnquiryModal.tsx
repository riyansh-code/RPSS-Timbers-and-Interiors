'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send, ShieldCheck, Upload } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useEnquiry, type EnquiryType } from '@/context/EnquiryContext';

const inputClass =
  'w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[#C79A63]';
const labelClass = 'block text-xs font-semibold uppercase text-[var(--text-muted)] mb-1';

const FORM_META: Record<
  EnquiryType,
  { heading: string; intro: string; submitLabel: string; success: string }
> = {
  buyer: {
    heading: 'Submit Your Requirement',
    intro:
      'Tell us what you are looking for. The more details you provide, the better we can identify suitable international sources.',
    submitLabel: 'SUBMIT REQUIREMENT',
    success:
      'Thank you. Your requirement has been received. Our team will review the details and contact you at the earliest.',
  },
  supplier: {
    heading: 'Become an RPSS Supplier',
    intro:
      'Are you an international manufacturer, mill, exporter, wholesaler, stockholder or supplier looking to develop opportunities in India? Tell us about your company and products.',
    submitLabel: 'SUBMIT SUPPLIER ENQUIRY',
    success:
      'Thank you for contacting RPSS. We have received your company and product information and will review the opportunity.',
  },
  contact: {
    heading: 'Contact RPSS',
    intro: 'Start a conversation with RPSS. Share a few details and we will get back to you.',
    submitLabel: 'SEND ENQUIRY',
    success:
      'Thank you for contacting RPSS. We have received your enquiry and will get back to you at the earliest.',
  },
  product: {
    heading: 'Product Enquiry',
    intro:
      'Interested in a particular product but not ready to submit a complete purchase requirement? Tell us what you need.',
    submitLabel: 'SEND PRODUCT ENQUIRY',
    success:
      'Thank you for your enquiry. We have received your product enquiry and will contact you at the earliest.',
  },
};

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className={labelClass}>
      {children}
      {required ? ' *' : ''}
    </label>
  );
}

export default function EnquiryModal() {
  const { isOpen, closeEnquiry, enquiryType, defaultProduct } = useEnquiry();
  const [submitted, setSubmitted] = useState(false);
  const meta = FORM_META[enquiryType];

  useEffect(() => {
    if (isOpen) setSubmitted(false);
  }, [isOpen, enquiryType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 80, spread: 65, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    closeEnquiry();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[var(--bg-card)] rounded-2xl shadow-2xl border border-[var(--border-color)] overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-[var(--border-color)] bg-[var(--brand-primary)] text-white shrink-0">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#C79A63] font-semibold">
                  RPSS TIMBERS
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-bold">{meta.heading}</h3>
              </div>
              <button
                onClick={handleClose}
                className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close enquiry form"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

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
                  <h4 className="text-2xl font-serif font-bold text-[var(--text-main)]">
                    Enquiry Received
                  </h4>
                  <p className="text-[var(--text-muted)] max-w-md mx-auto">{meta.success}</p>
                  <button
                    onClick={handleClose}
                    className="mt-4 px-6 py-2.5 bg-[var(--brand-primary)] text-white font-medium rounded-lg hover:bg-[#8B5E3C] transition-colors"
                  >
                    Close Window
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                  <input type="hidden" name="enquiryType" value={enquiryType} />
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{meta.intro}</p>

                  {enquiryType === 'buyer' && <BuyerFields />}
                  {enquiryType === 'supplier' && <SupplierFields />}
                  {enquiryType === 'contact' && <ContactFields />}
                  {enquiryType === 'product' && <ProductFields defaultProduct={defaultProduct} />}

                  <div className="flex items-center justify-between pt-2 gap-4 flex-wrap">
                    <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" /> Confidential commercial enquiry
                    </span>
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] hover:bg-[#8B5E3C] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      <Send className="w-4 h-4" /> {meta.submitLabel}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function BuyerFields() {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-primary)] pt-2">
        Buyer Information
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel required>Full Name</FieldLabel>
          <input name="fullName" type="text" required className={inputClass} />
        </div>
        <div>
          <FieldLabel required>Company Name</FieldLabel>
          <input name="companyName" type="text" required className={inputClass} />
        </div>
        <div>
          <FieldLabel required>City / State</FieldLabel>
          <input name="cityState" type="text" required className={inputClass} />
        </div>
        <div>
          <FieldLabel required>Phone / WhatsApp</FieldLabel>
          <input name="phone" type="tel" required className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel required>Email</FieldLabel>
          <input name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-primary)] pt-2">
        Product Requirement
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <FieldLabel required>Product Required</FieldLabel>
          <input
            name="productRequired"
            type="text"
            required
            placeholder="Including products not listed on the website"
            className={inputClass}
          />
        </div>
        <div>
          <FieldLabel>Species / Product Type</FieldLabel>
          <input name="species" type="text" className={inputClass} />
        </div>
        <div>
          <FieldLabel>Grade / Quality</FieldLabel>
          <input name="grade" type="text" className={inputClass} />
        </div>
        <div>
          <FieldLabel>Thickness (In mm)</FieldLabel>
          <input name="thickness" type="text" className={inputClass} />
        </div>
        <div>
          <FieldLabel>Width (In mm)</FieldLabel>
          <input name="width" type="text" className={inputClass} />
        </div>
        <div>
          <FieldLabel>Length (In mm)</FieldLabel>
          <input name="length" type="text" className={inputClass} />
        </div>
        <div>
          <FieldLabel>Moisture Content / Other Technical Specification</FieldLabel>
          <input name="moisture" type="text" className={inputClass} />
        </div>
        <div>
          <FieldLabel required>Quantity Required</FieldLabel>
          <input name="quantity" type="text" required className={inputClass} />
        </div>
        <div>
          <FieldLabel required>Destination</FieldLabel>
          <input name="destination" type="text" required className={inputClass} />
        </div>
        <div>
          <FieldLabel>Required Delivery Period</FieldLabel>
          <input name="deliveryPeriod" type="text" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel>Detailed Requirements / Additional Information</FieldLabel>
          <textarea name="details" rows={3} className={inputClass} />
        </div>
        <div>
          <FieldLabel>Upload Specification Sheet / Purchase Requirement / Photos</FieldLabel>
          <label className={`${inputClass} flex items-center gap-2 cursor-pointer`}>
            <Upload className="w-4 h-4 text-[#C79A63]" />
            <span className="text-sm text-[var(--text-muted)]">Choose files</span>
            <input name="buyerFiles" type="file" multiple className="hidden" />
          </label>
        </div>
        <div>
          <FieldLabel>How did you hear about RPSS?</FieldLabel>
          <input name="referral" type="text" className={inputClass} />
        </div>
      </div>
    </>
  );
}

function SupplierFields() {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-primary)] pt-2">
        Company Information
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel required>Company Name</FieldLabel>
          <input name="companyName" type="text" required className={inputClass} />
        </div>
        <div>
          <FieldLabel required>Contact Person</FieldLabel>
          <input name="contactPerson" type="text" required className={inputClass} />
        </div>
        <div>
          <FieldLabel required>Country</FieldLabel>
          <input name="country" type="text" required className={inputClass} />
        </div>
        <div>
          <FieldLabel>Website</FieldLabel>
          <input name="website" type="url" placeholder="https://" className={inputClass} />
        </div>
        <div>
          <FieldLabel required>Email</FieldLabel>
          <input name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <FieldLabel required>Phone / WhatsApp</FieldLabel>
          <input name="phone" type="tel" required className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel>Company Profile / About Your Business</FieldLabel>
          <textarea name="companyProfile" rows={3} className={inputClass} />
        </div>
      </div>

      <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-primary)] pt-2">
        Product Information
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <FieldLabel required>Products Supplied</FieldLabel>
          <textarea name="productsSupplied" rows={2} required className={inputClass} />
        </div>
        <div>
          <FieldLabel>Product Catalogue — Upload</FieldLabel>
          <label className={`${inputClass} flex items-center gap-2 cursor-pointer`}>
            <Upload className="w-4 h-4 text-[#C79A63]" />
            <span className="text-sm text-[var(--text-muted)]">Upload catalogue</span>
            <input name="catalogue" type="file" className="hidden" />
          </label>
        </div>
        <div>
          <FieldLabel>Product Photos / Videos — Upload</FieldLabel>
          <label className={`${inputClass} flex items-center gap-2 cursor-pointer`}>
            <Upload className="w-4 h-4 text-[#C79A63]" />
            <span className="text-sm text-[var(--text-muted)]">Upload media</span>
            <input name="media" type="file" multiple accept="image/*,video/*" className="hidden" />
          </label>
        </div>
        <div>
          <FieldLabel>Certifications — Upload</FieldLabel>
          <label className={`${inputClass} flex items-center gap-2 cursor-pointer`}>
            <Upload className="w-4 h-4 text-[#C79A63]" />
            <span className="text-sm text-[var(--text-muted)]">Where applicable</span>
            <input name="certifications" type="file" multiple className="hidden" />
          </label>
        </div>
        <div>
          <FieldLabel>Years in Business</FieldLabel>
          <input name="yearsInBusiness" type="text" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel>Factory / Mill / Warehouse Information</FieldLabel>
          <textarea name="factoryInfo" rows={2} className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel>Main Export Markets</FieldLabel>
          <input name="exportMarkets" type="text" className={inputClass} />
        </div>
      </div>

      <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-primary)] pt-2">
        Stock &amp; Opportunity
      </p>
      <div className="space-y-4">
        <div>
          <FieldLabel>
            Do you currently have available stock or commercially interesting inventory?
          </FieldLabel>
          <select name="stockAvailability" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="from-time-to-time">Available from time to time</option>
            <option value="discuss">Please contact us to discuss</option>
          </select>
        </div>
        <div>
          <FieldLabel>Additional Information / Opportunity Details</FieldLabel>
          <textarea name="additionalInfo" rows={3} className={inputClass} />
        </div>
      </div>
    </>
  );
}

function ContactFields() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <FieldLabel required>Name</FieldLabel>
        <input name="name" type="text" required className={inputClass} />
      </div>
      <div>
        <FieldLabel>Company Name</FieldLabel>
        <input name="companyName" type="text" className={inputClass} />
      </div>
      <div>
        <FieldLabel required>Country</FieldLabel>
        <input name="country" type="text" required className={inputClass} />
      </div>
      <div>
        <FieldLabel required>Email</FieldLabel>
        <input name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <FieldLabel>Phone / WhatsApp</FieldLabel>
        <input name="phone" type="tel" className={inputClass} />
      </div>
      <div>
        <FieldLabel required>I am contacting RPSS as</FieldLabel>
        <select name="contactAs" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select
          </option>
          <option value="indian-buyer">Indian Buyer</option>
          <option value="international-supplier">International Supplier</option>
          <option value="business-partner">Potential Business Partner</option>
          <option value="general">General Enquiry</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <FieldLabel required>Message</FieldLabel>
        <textarea name="message" rows={4} required className={inputClass} />
      </div>
    </div>
  );
}

function ProductFields({ defaultProduct }: { defaultProduct: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <FieldLabel required>Name</FieldLabel>
        <input name="name" type="text" required className={inputClass} />
      </div>
      <div>
        <FieldLabel>Company Name</FieldLabel>
        <input name="companyName" type="text" className={inputClass} />
      </div>
      <div>
        <FieldLabel required>Country / City</FieldLabel>
        <input name="countryCity" type="text" required className={inputClass} />
      </div>
      <div>
        <FieldLabel required>Email</FieldLabel>
        <input name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <FieldLabel>Phone / WhatsApp</FieldLabel>
        <input name="phone" type="tel" className={inputClass} />
      </div>
      <div>
        <FieldLabel required>Product of Interest</FieldLabel>
        <input
          name="productOfInterest"
          type="text"
          required
          defaultValue={defaultProduct}
          className={inputClass}
        />
      </div>
      <div>
        <FieldLabel>Species / Type</FieldLabel>
        <input name="species" type="text" className={inputClass} />
      </div>
      <div>
        <FieldLabel>Quantity Required</FieldLabel>
        <input name="quantity" type="text" className={inputClass} />
      </div>
      <div>
        <FieldLabel>Specification / Size / Grade</FieldLabel>
        <input name="specification" type="text" className={inputClass} />
      </div>
      <div>
        <FieldLabel>Destination</FieldLabel>
        <input name="destination" type="text" className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <FieldLabel>Additional Requirements / Questions</FieldLabel>
        <textarea name="additional" rows={3} className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <FieldLabel>Upload Photo / Specification</FieldLabel>
        <label className={`${inputClass} flex items-center gap-2 cursor-pointer`}>
          <Upload className="w-4 h-4 text-[#C79A63]" />
          <span className="text-sm text-[var(--text-muted)]">If applicable</span>
          <input name="productFiles" type="file" multiple className="hidden" />
        </label>
      </div>
    </div>
  );
}
