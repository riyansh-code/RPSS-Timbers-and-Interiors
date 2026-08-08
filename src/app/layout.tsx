import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import MainShell from '@/components/layout/MainShell';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RPSS Timbers & Interiors | Premium Meranti Wood & Hardwood Supplier India',
  description: 'RPSS Timbers and Interiors is India’s premier supplier of Grade-A Meranti wood, seasoned structural hardwoods, furniture lumber, and architectural wood panels for construction and luxury interiors.',
  keywords: [
    'Meranti Wood India',
    'RPSS Timbers',
    'Timber Supplier Yamunanagar',
    'Kiln Dried Hardwood',
    'Door Frame Timber',
    'Furniture Wood Supplier',
    'Construction Lumber India',
    'Architectural Wood Panels'
  ],
  authors: [{ name: 'RPSS Timbers & Interiors' }],
  openGraph: {
    title: 'RPSS Timbers & Interiors | Premium Timber Solutions Built on Trust',
    description: 'Supplying high-quality timber and Meranti wood across India for construction, interiors, furniture, and commercial projects.',
    url: 'https://rpsstimbers.com',
    siteName: 'RPSS Timbers & Interiors',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'RPSS Timbers & Interiors Warehouse',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'RPSS Timbers and Interiors',
  description: 'Supplying high-quality timber and Meranti wood across India for construction, interiors, furniture, and commercial projects.',
  url: 'https://rpsstimbers.com',
  telephone: '+919876543210',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Timber Market Area',
    addressLocality: 'Yamunanagar',
    addressRegion: 'Haryana',
    postalCode: '135001',
    addressCountry: 'IN',
  },
  openingHours: 'Mo-Sa 09:00-19:00',
  priceRange: '₹₹₹',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <MainShell>{children}</MainShell>
      </body>
    </html>
  );
}
