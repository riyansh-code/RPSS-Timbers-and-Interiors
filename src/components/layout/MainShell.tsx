'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from '../ui/BackToTop';
import EnquiryModal from '../ui/EnquiryModal';
import { EnquiryProvider } from '@/context/EnquiryContext';

export default function MainShell({ children }: { children: React.ReactNode }) {
  return (
    <EnquiryProvider>
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <EnquiryModal />
        <BackToTop />
      </div>
    </EnquiryProvider>
  );
}
