import type { Metadata } from 'next';
import { Space_Grotesk, Archivo } from 'next/font/google';
import { SmoothScrollProvider } from '@/lib/lenis';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
// Site-wide monumental display face (replaces the old Syncopate treatment everywhere).
const archivo = Archivo({ subsets: ['latin'], weight: ['500', '600', '700', '800', '900'], variable: '--font-display', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sialathletics.com'),
  title: 'SIAL Athletics — Premium Padel Racket Manufacturer',
  description: 'Premium padel racket manufacturing for brands, retailers, and distributors. OEM, ODM, and private-label programs from Sialkot.',
  keywords: ['padel racket manufacturer', 'OEM padel rackets', 'private label padel', 'carbon fiber padel rackets', 'sports equipment wholesale'],
  openGraph: { title: 'SIAL Athletics', description: 'Premium padel rackets. Precision engineering. Private-label manufacturing.', siteName: 'SIAL Athletics' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${spaceGrotesk.variable} ${archivo.variable} antialiased`}><body className="min-h-screen flex flex-col"><SmoothScrollProvider><Navbar /><div className="flex-1">{children}</div><Footer /></SmoothScrollProvider></body></html>;
}
