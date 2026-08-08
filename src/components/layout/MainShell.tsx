'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import QuoteModal from '../ui/QuoteModal';
import BackToTop from '../ui/BackToTop';

export default function MainShell({ children }: { children: React.ReactNode }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleOpenQuote = (productName: string = '') => {
    setSelectedProduct(productName);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar onOpenQuote={() => handleOpenQuote('')} />
      
      <main className="flex-grow">
        {/* Pass down quote opener to child pages if needed */}
        {children}
      </main>

      <Footer onOpenQuote={() => handleOpenQuote('')} />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultProduct={selectedProduct}
      />

      <BackToTop />
    </div>
  );
}
