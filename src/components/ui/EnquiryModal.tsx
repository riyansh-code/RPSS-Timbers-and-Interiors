'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send, ShieldCheck, Upload } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useEnquiry, type EnquiryType } from '@/context/EnquiryContext';
import { useLanguage } from '@/context/LanguageContext';
import type { Dictionary } from '@/i18n';

type EnquiryFields = Dictionary['enquiry']['fields'];

const inputClass =
  'w-full px-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-main)] focus:outline-none focus:ring-2 focus:ring-[#C79A63]';
const labelClass = 'block text-xs font-semibold uppercase text-[var(--text-muted)] mb-1';

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
  const { t, products } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const meta = t.enquiry.forms[enquiryType as EnquiryType];
  const buyerSpecificName =
    products.find((p) => p.id === 'buyer-specific-sourcing')?.name ?? 'Buyer-Specific Sourcing';

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
                aria-label={t.common.close}
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
                    {t.enquiry.enquiryReceived}
                  </h4>
                  <p className="text-[var(--text-muted)] max-w-md mx-auto">{meta.success}</p>
                  <button
                    onClick={handleClose}
                    className="mt-4 px-6 py-2.5 bg-[var(--brand-primary)] text-white font-medium rounded-lg hover:bg-[#8B5E3C] transition-colors"
                  >
                    {t.enquiry.closeWindow}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                  <input type="hidden" name="enquiryType" value={enquiryType} />
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{meta.intro}</p>

                  {enquiryType === 'buyer' && <BuyerFields fields={t.enquiry.fields} />}
                  {enquiryType === 'supplier' && <SupplierFields fields={t.enquiry.fields} />}
                  {enquiryType === 'contact' && <ContactFields fields={t.enquiry.fields} />}
                  {enquiryType === 'product' && (
                    <ProductFields
                      fields={t.enquiry.fields}
                      defaultProduct={defaultProduct}
                      products={products}
                      buyerSpecificName={buyerSpecificName}
                    />
                  )}

                  <div className="flex items-center justify-between pt-2 gap-4 flex-wrap">
                    <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" /> {t.enquiry.confidential}
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

function BuyerFields({ fields }: { fields: EnquiryFields }) {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-primary)] pt-2">
        {fields.buyerInformation}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel required>{fields.fullName}</FieldLabel>
          <input name="fullName" type="text" required className={inputClass} />
        </div>
        <div>
          <FieldLabel required>{fields.companyName}</FieldLabel>
          <input name="companyName" type="text" required className={inputClass} />
        </div>
        <div>
          <FieldLabel required>{fields.cityState}</FieldLabel>
          <input name="cityState" type="text" required className={inputClass} />
        </div>
        <div>
          <FieldLabel required>{fields.phone}</FieldLabel>
          <input name="phone" type="tel" required className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel required>{fields.email}</FieldLabel>
          <input name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-primary)] pt-2">
        {fields.productRequirement}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <FieldLabel required>{fields.productRequired}</FieldLabel>
          <input
            name="productRequired"
            type="text"
            required
            placeholder={fields.productRequiredPlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <FieldLabel>{fields.species}</FieldLabel>
          <input name="species" type="text" className={inputClass} />
        </div>
        <div>
          <FieldLabel>{fields.grade}</FieldLabel>
          <input name="grade" type="text" className={inputClass} />
        </div>
        <div>
          <FieldLabel>{fields.thickness}</FieldLabel>
          <input name="thickness" type="text" className={inputClass} />
        </div>
        <div>
          <FieldLabel>{fields.width}</FieldLabel>
          <input name="width" type="text" className={inputClass} />
        </div>
        <div>
          <FieldLabel>{fields.length}</FieldLabel>
          <input name="length" type="text" className={inputClass} />
        </div>
        <div>
          <FieldLabel>{fields.moisture}</FieldLabel>
          <input name="moisture" type="text" className={inputClass} />
        </div>
        <div>
          <FieldLabel required>{fields.quantity}</FieldLabel>
          <input name="quantity" type="text" required className={inputClass} />
        </div>
        <div>
          <FieldLabel required>{fields.destination}</FieldLabel>
          <input name="destination" type="text" required className={inputClass} />
        </div>
        <div>
          <FieldLabel>{fields.deliveryPeriod}</FieldLabel>
          <input name="deliveryPeriod" type="text" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel>{fields.details}</FieldLabel>
          <textarea name="details" rows={3} className={inputClass} />
        </div>
        <div>
          <FieldLabel>{fields.uploadBuyer}</FieldLabel>
          <label className={`${inputClass} flex items-center gap-2 cursor-pointer`}>
            <Upload className="w-4 h-4 text-[#C79A63]" />
            <span className="text-sm text-[var(--text-muted)]">{fields.chooseFiles}</span>
            <input name="buyerFiles" type="file" multiple className="hidden" />
          </label>
        </div>
        <div>
          <FieldLabel>{fields.referral}</FieldLabel>
          <input name="referral" type="text" className={inputClass} />
        </div>
      </div>
    </>
  );
}

function SupplierFields({ fields }: { fields: EnquiryFields }) {
  return (
    <>
      <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-primary)] pt-2">
        {fields.companyInformation}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <FieldLabel required>{fields.companyName}</FieldLabel>
          <input name="companyName" type="text" required className={inputClass} />
        </div>
        <div>
          <FieldLabel required>{fields.contactPerson}</FieldLabel>
          <input name="contactPerson" type="text" required className={inputClass} />
        </div>
        <div>
          <FieldLabel required>{fields.country}</FieldLabel>
          <input name="country" type="text" required className={inputClass} />
        </div>
        <div>
          <FieldLabel>{fields.website}</FieldLabel>
          <input name="website" type="url" placeholder="https://" className={inputClass} />
        </div>
        <div>
          <FieldLabel required>{fields.email}</FieldLabel>
          <input name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <FieldLabel required>{fields.phone}</FieldLabel>
          <input name="phone" type="tel" required className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel>{fields.companyProfile}</FieldLabel>
          <textarea name="companyProfile" rows={3} className={inputClass} />
        </div>
      </div>

      <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-primary)] pt-2">
        {fields.productInformation}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <FieldLabel required>{fields.productsSupplied}</FieldLabel>
          <textarea name="productsSupplied" rows={2} required className={inputClass} />
        </div>
        <div>
          <FieldLabel>{fields.catalogue}</FieldLabel>
          <label className={`${inputClass} flex items-center gap-2 cursor-pointer`}>
            <Upload className="w-4 h-4 text-[#C79A63]" />
            <span className="text-sm text-[var(--text-muted)]">{fields.uploadCatalogue}</span>
            <input name="catalogue" type="file" className="hidden" />
          </label>
        </div>
        <div>
          <FieldLabel>{fields.media}</FieldLabel>
          <label className={`${inputClass} flex items-center gap-2 cursor-pointer`}>
            <Upload className="w-4 h-4 text-[#C79A63]" />
            <span className="text-sm text-[var(--text-muted)]">{fields.uploadMedia}</span>
            <input name="media" type="file" multiple accept="image/*,video/*" className="hidden" />
          </label>
        </div>
        <div>
          <FieldLabel>{fields.certifications}</FieldLabel>
          <label className={`${inputClass} flex items-center gap-2 cursor-pointer`}>
            <Upload className="w-4 h-4 text-[#C79A63]" />
            <span className="text-sm text-[var(--text-muted)]">{fields.whereApplicable}</span>
            <input name="certifications" type="file" multiple className="hidden" />
          </label>
        </div>
        <div>
          <FieldLabel>{fields.yearsInBusiness}</FieldLabel>
          <input name="yearsInBusiness" type="text" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel>{fields.factoryInfo}</FieldLabel>
          <textarea name="factoryInfo" rows={2} className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel>{fields.exportMarkets}</FieldLabel>
          <input name="exportMarkets" type="text" className={inputClass} />
        </div>
      </div>

      <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-primary)] pt-2">
        {fields.stockOpportunity}
      </p>
      <div className="space-y-4">
        <div>
          <FieldLabel>{fields.stockQuestion}</FieldLabel>
          <select name="stockAvailability" className={inputClass} defaultValue="">
            <option value="" disabled>
              {fields.selectOption}
            </option>
            <option value="yes">{fields.yes}</option>
            <option value="no">{fields.no}</option>
            <option value="from-time-to-time">{fields.fromTimeToTime}</option>
            <option value="discuss">{fields.discuss}</option>
          </select>
        </div>
        <div>
          <FieldLabel>{fields.additionalInfo}</FieldLabel>
          <textarea name="additionalInfo" rows={3} className={inputClass} />
        </div>
      </div>
    </>
  );
}

function ContactFields({ fields }: { fields: EnquiryFields }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <FieldLabel required>{fields.name}</FieldLabel>
        <input name="name" type="text" required className={inputClass} />
      </div>
      <div>
        <FieldLabel>{fields.companyName}</FieldLabel>
        <input name="companyName" type="text" className={inputClass} />
      </div>
      <div>
        <FieldLabel required>{fields.country}</FieldLabel>
        <input name="country" type="text" required className={inputClass} />
      </div>
      <div>
        <FieldLabel required>{fields.email}</FieldLabel>
        <input name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <FieldLabel>{fields.phone}</FieldLabel>
        <input name="phone" type="tel" className={inputClass} />
      </div>
      <div>
        <FieldLabel required>{fields.contactAs}</FieldLabel>
        <select name="contactAs" required className={inputClass} defaultValue="">
          <option value="" disabled>
            {fields.select}
          </option>
          <option value="indian-buyer">{fields.indianBuyer}</option>
          <option value="international-supplier">{fields.internationalSupplier}</option>
          <option value="business-partner">{fields.businessPartner}</option>
          <option value="general">{fields.general}</option>
          <option value="other">{fields.other}</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <FieldLabel required>{fields.message}</FieldLabel>
        <textarea name="message" rows={4} required className={inputClass} />
      </div>
    </div>
  );
}

function resolveProductSelection(
  defaultProduct: string,
  productNames: string[],
  buyerSpecificName: string
) {
  const listed = productNames.includes(defaultProduct);
  if (!defaultProduct) return { selection: '', customDetail: '' };
  if (listed) return { selection: defaultProduct, customDetail: '' };
  return { selection: buyerSpecificName, customDetail: defaultProduct };
}

function ProductFields({
  fields,
  defaultProduct,
  products,
  buyerSpecificName,
}: {
  fields: EnquiryFields;
  defaultProduct: string;
  products: { id: string; name: string }[];
  buyerSpecificName: string;
}) {
  const productNames = products.map((p) => p.name);
  const initial = resolveProductSelection(defaultProduct, productNames, buyerSpecificName);
  const [productSelection, setProductSelection] = useState(initial.selection);
  const [buyerSpecificDetail, setBuyerSpecificDetail] = useState(initial.customDetail);

  useEffect(() => {
    const names = products.map((p) => p.name);
    const next = resolveProductSelection(defaultProduct, names, buyerSpecificName);
    setProductSelection(next.selection);
    setBuyerSpecificDetail(next.customDetail);
  }, [defaultProduct, buyerSpecificName, products]);

  const isBuyerSpecific = productSelection === buyerSpecificName;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <FieldLabel required>{fields.name}</FieldLabel>
        <input name="name" type="text" required className={inputClass} />
      </div>
      <div>
        <FieldLabel>{fields.companyName}</FieldLabel>
        <input name="companyName" type="text" className={inputClass} />
      </div>
      <div>
        <FieldLabel required>{fields.countryCity}</FieldLabel>
        <input name="countryCity" type="text" required className={inputClass} />
      </div>
      <div>
        <FieldLabel required>{fields.email}</FieldLabel>
        <input name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <FieldLabel>{fields.phone}</FieldLabel>
        <input name="phone" type="tel" className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <FieldLabel required>{fields.productOfInterest}</FieldLabel>
        <select
          required
          value={productSelection}
          onChange={(e) => setProductSelection(e.target.value)}
          name="productOfInterest"
          className={inputClass}
        >
          <option value="" disabled>
            {fields.selectProduct}
          </option>
          {products.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
        {isBuyerSpecific && (
          <div className="mt-3 space-y-1">
            <FieldLabel required>{fields.productRequirementDetail}</FieldLabel>
            <input
              name="buyerSpecificProduct"
              type="text"
              required
              value={buyerSpecificDetail}
              onChange={(e) => setBuyerSpecificDetail(e.target.value)}
              placeholder={fields.productRequirementDetailPlaceholder}
              className={inputClass}
            />
          </div>
        )}
      </div>
      <div>
        <FieldLabel>{fields.speciesType}</FieldLabel>
        <input name="species" type="text" className={inputClass} />
      </div>
      <div>
        <FieldLabel>{fields.quantity}</FieldLabel>
        <input name="quantity" type="text" className={inputClass} />
      </div>
      <div>
        <FieldLabel>{fields.specification}</FieldLabel>
        <input name="specification" type="text" className={inputClass} />
      </div>
      <div>
        <FieldLabel>{fields.destination}</FieldLabel>
        <input name="destination" type="text" className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <FieldLabel>{fields.additionalQuestions}</FieldLabel>
        <textarea name="additional" rows={3} className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <FieldLabel>{fields.uploadPhoto}</FieldLabel>
        <label className={`${inputClass} flex items-center gap-2 cursor-pointer`}>
          <Upload className="w-4 h-4 text-[#C79A63]" />
          <span className="text-sm text-[var(--text-muted)]">{fields.ifApplicable}</span>
          <input name="productFiles" type="file" multiple className="hidden" />
        </label>
      </div>
    </div>
  );
}
