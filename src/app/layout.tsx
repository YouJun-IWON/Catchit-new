import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ModalProvider } from '@/components/providers/modal-provider';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/navbar/navbar';

import siteMetadata from '@/constants/siteMetaData';
import Footer from '@/components/footer/footer';
import { SheetProvider } from '@/components/providers/sheet-provider';
import Script from 'next/script';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    // meta
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'ko-KR',
    type: 'website',
  },
  robots: {
    // google bot
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'relative min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <SheetProvider />
        <ModalProvider />
        <main className='relative flex flex-col min-h-screen'>
          <div className='flex-grow flex-1'>{children}</div>
        </main>
        <Toaster />
      </body>
      <Script
        src='//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
        defer
      />
    </html>
  );
}
