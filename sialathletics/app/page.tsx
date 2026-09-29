import './home.css';
import type { Metadata } from 'next';
import Hero from '@/components/landing/Hero';
import FactoryIntro from '@/components/landing/FactoryIntro';
import { Range } from '@/components/landing/ProductTeaser';
import { Capabilities } from '@/components/landing/Capabilities';
import WhoWeWorkWith from '@/components/landing/WhoWeWorkWith';
import GlobalReach from '@/components/landing/GlobalReach';
import CTABanner from '@/components/landing/CTABanner';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Sports Goods Manufacturer — Padel, Pickleball & Beach Rackets | SIAL Athletics' },
  description: 'OEM and private-label sports goods from Sialkot, Pakistan: padel rackets, pickleball paddles and beach rackets, plus racket bags and team jerseys.',
  alternates: { canonical: '/' },
};

// Lets search engines show "SIAL Athletics" as the site name in results.
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SIAL Athletics',
  url: 'https://www.sialathletics.com',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SIAL Athletics',
  url: 'https://www.sialathletics.com',
  logo: 'https://www.sialathletics.com/images/logo-dark.png',
  image: 'https://www.sialathletics.com/images/og-card.png',
  description: 'OEM and private-label sports goods manufacturer in Sialkot, Pakistan, making padel rackets, pickleball paddles, beach rackets, racket bags and team jerseys.',
  // Product lines in priority order.
  knowsAbout: [
    'Sports goods manufacturing',
    'Padel rackets',
    'Pickleball paddles',
    'Beach tennis rackets',
    'Racket bags',
    'Sports jerseys',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sialkot',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'info@sialathletics.com',
    telephone: '+92-300-5933179',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://www.linkedin.com/company/sial-athletics/',
    'https://www.instagram.com/sial_athletics/',
  ],
  foundingDate: '2026',
};

export default function Home() {
  return (
    <div className="hp">
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={organizationJsonLd} />
      <Hero />
      <FactoryIntro />
      <Range />
      <Capabilities />
      <WhoWeWorkWith />
      <GlobalReach />
      <CTABanner
        headline="Build a better product line."
        subtext="Tell us what you want to build and your budget. We'll send samples, specs and a quote."
      />
    </div>
  );
}
