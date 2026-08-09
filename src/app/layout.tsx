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
  title: 'RPSS Timbers | Global Timber & Product Sourcing',
  description:
    'Connecting International & Australian Suppliers with Indian Markets. With a legacy spanning more than 50 years in the timber trade, RPSS Timbers brings established Indian market knowledge together with an expanding international sourcing network.',
  keywords: [
    'RPSS Timbers',
    'Global Timber Sourcing',
    'Australian Timber Exporters',
    'Indian Timber Wholesale',
    'Amritsar Timber Market',
    'Jammu Timber Market',
    'Canberra Timber Sourcing',
    'Pine and Hardwood Sourcing',
  ],
  authors: [{ name: 'RPSS Timbers' }],
  openGraph: {
    title: 'RPSS Timbers | Global Timber & Product Sourcing',
    description: 'Connecting International & Australian Suppliers with Indian Markets.',
    url: 'https://www.rpsstimbers.com',
    siteName: 'RPSS Timbers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'RPSS Timbers Global Sourcing',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RPSS Timbers',
  description: 'Connecting International & Australian Suppliers with Indian Markets.',
  url: 'https://www.rpsstimbers.com',
  email: 'puneet.arora2702@gmail.com',
  telephone: ['+61431764492', '+919419184550'],
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Canberra',
      addressRegion: 'ACT',
      addressCountry: 'AU',
      description: 'Australian sourcing operation',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Amritsar',
      addressRegion: 'Punjab',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Jammu',
      addressRegion: 'Jammu and Kashmir',
      addressCountry: 'IN',
    },
  ],
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
