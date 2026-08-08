'use client';

import { useState } from 'react';
import Hero from '@/components/home/Hero';
import CompanyIntro from '@/components/home/CompanyIntro';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseRPSS from '@/components/home/WhyChooseRPSS';
import MerantiHighlight from '@/components/home/MerantiHighlight';
import IndustriesServed from '@/components/home/IndustriesServed';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import Testimonials from '@/components/home/Testimonials';
import CTABanner from '@/components/home/CTABanner';
import QuoteModal from '@/components/ui/QuoteModal';

export default function HomePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState('');

  const handleOpenQuote = (productName: string = '') => {
    setQuoteProduct(productName);
    setIsQuoteOpen(true);
  };

  return (
    <>
      <Hero onOpenQuote={() => handleOpenQuote('')} />
      <CompanyIntro />
      <FeaturedProducts onOpenQuote={handleOpenQuote} />
      <WhyChooseRPSS />
      <MerantiHighlight onOpenQuote={handleOpenQuote} />
      <IndustriesServed />
      <ProcessTimeline />
      <Testimonials />
      <CTABanner onOpenQuote={() => handleOpenQuote('')} />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultProduct={quoteProduct}
      />
    </>
  );
}
