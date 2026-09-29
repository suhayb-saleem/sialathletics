import type { Metadata } from 'next';
import { Space_Grotesk, Archivo } from 'next/font/google';
import { SmoothScrollProvider } from '@/lib/lenis';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/layout/CookieConsent';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { ContactModalProvider } from '@/lib/contactModal';
import ContactModal from '@/components/contact/ContactModal';
import ContactModalTimer from '@/components/contact/ContactModalTimer';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
// Site-wide monumental display face (replaces the old Syncopate treatment everywhere).
const archivo = Archivo({ subsets: ['latin'], weight: ['500', '600', '700', '800', '900'], variable: '--font-display', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sialathletics.com'),
  icons: {
    icon: [
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  // Positioned as a sports goods manufacturer first, with the product lines
  // named in priority order: padel, pickleball, beach, then bags and jerseys.
  title: {
    default: 'SIAL Athletics — Sports Goods Manufacturer | Padel, Pickleball & Beach Rackets',
    template: '%s — SIAL Athletics',
  },
  description: 'OEM and private-label sports goods manufacturer in Sialkot, Pakistan. Padel rackets, pickleball paddles and beach rackets, plus racket bags and team jerseys, built to your spec.',
  keywords: [
    'sports goods manufacturer',
    'OEM sports equipment manufacturer',
    'sports goods manufacturer Sialkot',
    'padel racket manufacturer',
    'custom padel rackets private label',
    'pickleball paddle manufacturer',
    'beach tennis racket manufacturer',
    'custom padel bags',
    'custom sports jerseys manufacturer',
    'private label sports equipment',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.sialathletics.com',
    siteName: 'SIAL Athletics',
    title: 'SIAL Athletics — Sports Goods Manufacturer in Sialkot',
    description: 'Padel rackets, pickleball paddles, beach rackets, racket bags and team jerseys, made factory-direct in Sialkot. OEM, ODM and private-label programmes.',
    images: [{ url: '/images/og-card.png', width: 1200, height: 630, alt: 'SIAL Athletics — sports goods manufacturer, Sialkot, Pakistan' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIAL Athletics — Sports Goods Manufacturer in Sialkot',
    description: 'Padel rackets, pickleball paddles, beach rackets, racket bags and team jerseys, made factory-direct in Sialkot.',
    images: ['/images/og-card.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${spaceGrotesk.variable} ${archivo.variable} antialiased`}><body className="min-h-screen flex flex-col"><ContactModalProvider><SmoothScrollProvider><Navbar /><div className="flex-1">{children}</div><Footer /><CookieConsent /></SmoothScrollProvider><ContactModal /><ContactModalTimer /><WhatsAppButton /></ContactModalProvider></body></html>;
}
