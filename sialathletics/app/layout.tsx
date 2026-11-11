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
  // Titles name the product the way overseas buyers search for it ("padel
  // racket manufacturer", "OEM", "private label"). Sialkot stays out of titles
  // and headings: queries containing "Sialkot" come mostly from Pakistan, so
  // the location sits at the end of descriptions and in body copy instead.
  title: {
    default: 'SIAL Athletics — Padel Racket & Pickleball Paddle OEM Manufacturer',
    template: '%s — SIAL Athletics',
  },
  description: 'OEM and private-label padel rackets and pickleball paddles for brands and distributors, plus bags and jerseys. Factory-direct from Sialkot, Pakistan.',
  keywords: [
    'padel racket manufacturer',
    'padel racket OEM manufacturer',
    'custom padel rackets',
    'custom padel racket private label',
    'wholesale padel rackets',
    'carbon fiber padel rackets',
    'padel racket supplier',
    'pickleball paddle manufacturer',
    'custom pickleball paddles',
    'wholesale pickleball paddles OEM',
    'ODM pickleball paddle supplier',
    'padel racket manufacturer Pakistan',
    'beach tennis racket manufacturer',
    'custom padel bags',
    'custom padel jerseys',
    'padel clothing manufacturer',
    'sports equipment manufacturer Sialkot',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.sialathletics.com',
    siteName: 'SIAL Athletics',
    title: 'SIAL Athletics — Padel Racket & Pickleball Paddle OEM Manufacturer',
    description: 'Carbon padel rackets and pickleball paddles with your logo, plus bags and jerseys. OEM and private label, factory-direct from Sialkot.',
    images: [{ url: '/images/og-card.png', width: 1200, height: 630, alt: 'SIAL Athletics — padel racket and pickleball paddle manufacturer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIAL Athletics — Padel Racket & Pickleball Paddle OEM Manufacturer',
    description: 'Carbon padel rackets and pickleball paddles with your logo, plus bags and jerseys. Factory-direct from Sialkot.',
    images: ['/images/og-card.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${spaceGrotesk.variable} ${archivo.variable} antialiased`}><body className="min-h-screen flex flex-col"><ContactModalProvider><SmoothScrollProvider><Navbar /><div className="flex-1">{children}</div><Footer /><CookieConsent /></SmoothScrollProvider><ContactModal /><ContactModalTimer /><WhatsAppButton /></ContactModalProvider></body></html>;
}
