import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import { SmoothScrollProvider } from '@/lib/lenis';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://trionforgesports.com'),
  title: 'TrionForge Sports — Premium Pickleball Paddles & Padel Rackets',
  description: 'Factory-direct premium pickleball paddles and padel rackets manufactured in Sialkot. OEM, ODM, and private label programs for US brands and retailers.',
  keywords: ['pickleball paddles wholesale', 'padel rackets manufacturer', 'OEM pickleball', 'Sialkot sports manufacturer', 'private label pickleball'],
  openGraph: {
    title: 'TrionForge Sports',
    description: 'Premium factory-direct pickleball and padel equipment for US brands.',
    images: ['/images/logo.svg'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-brand-dark text-white select-none">
        <SmoothScrollProvider>
          <Navbar />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
