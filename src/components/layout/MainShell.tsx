'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from '../ui/BackToTop';
import EnquiryModal from '../ui/EnquiryModal';
import LanguagePopup from '../ui/LanguagePopup';
import { EnquiryProvider } from '@/context/EnquiryContext';
import { LanguageProvider } from '@/context/LanguageContext';

export default function MainShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <EnquiryProvider>
        <div className="min-h-screen flex flex-col justify-between">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <EnquiryModal />
          <LanguagePopup />
          <BackToTop />
        </div>
      </EnquiryProvider>
    </LanguageProvider>
  );
}
