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
  // Padel rackets bring in nearly all inquiries, so every default leads with
  // "padel racket manufacturer"; the other lines follow in priority order.
  // Keywords mirror the phrases buyers actually search (Search Console and
  // Bing Webmaster queries), not internal product names.
  title: {
    default: 'Padel Racket Manufacturer in Sialkot | SIAL Athletics',
    template: '%s — SIAL Athletics',
  },
  description: 'Custom padel rackets made in Sialkot, Pakistan. OEM and private label, plus pickleball paddles, beach rackets, bags and jerseys from the same factory.',
  keywords: [
    'padel racket manufacturer',
    'padel racket manufacturer Pakistan',
    'padel racket manufacturer Sialkot',
    'custom padel rackets',
    'OEM padel racket manufacturer',
    'private label padel rackets',
    'carbon fiber padel racket supplier',
    'wholesale padel rackets',
    'pickleball paddle manufacturer',
    'custom pickleball paddles',
    'pickleball paddle manufacturer Pakistan',
    'carbon fiber pickleball paddle supplier',
    'beach tennis racket manufacturer',
    'custom padel bags',
    'custom padel jerseys',
    'padel clothing manufacturer',
    'sports goods manufacturer Sialkot',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.sialathletics.com',
    siteName: 'SIAL Athletics',
    title: 'SIAL Athletics — Padel Racket Manufacturer in Sialkot, Pakistan',
    description: 'Custom carbon padel rackets with your logo, plus pickleball paddles, beach rackets, bags and jerseys. Factory-direct OEM and private label from Sialkot.',
    images: [{ url: '/images/og-card.png', width: 1200, height: 630, alt: 'SIAL Athletics — padel racket and sports goods manufacturer, Sialkot, Pakistan' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIAL Athletics — Padel Racket Manufacturer in Sialkot, Pakistan',
    description: 'Custom carbon padel rackets with your logo, plus pickleball paddles, beach rackets, bags and jerseys. Factory-direct from Sialkot.',
    images: ['/images/og-card.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${spaceGrotesk.variable} ${archivo.variable} antialiased`}><body className="min-h-screen flex flex-col"><ContactModalProvider><SmoothScrollProvider><Navbar /><div className="flex-1">{children}</div><Footer /><CookieConsent /></SmoothScrollProvider><ContactModal /><ContactModalTimer /><WhatsAppButton /></ContactModalProvider></body></html>;
}
