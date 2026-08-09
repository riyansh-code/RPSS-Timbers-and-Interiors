'use client';

import Hero from '@/components/home/Hero';
import MerantiHighlight from '@/components/home/MerantiHighlight';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseRPSS from '@/components/home/WhyChooseRPSS';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import CTABanner from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <MerantiHighlight />
      <FeaturedProducts />
      <WhyChooseRPSS />
      <ProcessTimeline />
      <CTABanner />
    </>
  );
}
