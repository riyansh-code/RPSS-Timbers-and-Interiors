'use client';

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

export type EnquiryType = 'supplier' | 'buyer' | 'contact' | 'product';

interface EnquiryContextValue {
  openEnquiry: (type: EnquiryType, productName?: string) => void;
  closeEnquiry: () => void;
  isOpen: boolean;
  enquiryType: EnquiryType;
  defaultProduct: string;
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState<EnquiryType>('contact');
  const [defaultProduct, setDefaultProduct] = useState('');

  const openEnquiry = useCallback((type: EnquiryType, productName = '') => {
    setEnquiryType(type);
    setDefaultProduct(productName);
    setIsOpen(true);
  }, []);

  const closeEnquiry = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <EnquiryContext.Provider
      value={{ openEnquiry, closeEnquiry, isOpen, enquiryType, defaultProduct }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) {
    throw new Error('useEnquiry must be used within EnquiryProvider');
  }
  return ctx;
}
