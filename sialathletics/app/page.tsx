import './home.css';
import type { Metadata } from 'next';
import Hero from '@/components/landing/Hero';
import FactoryIntro from '@/components/landing/FactoryIntro';
import { Range } from '@/components/landing/ProductTeaser';
import { Capabilities } from '@/components/landing/Capabilities';
import WhoWeWorkWith from '@/components/landing/WhoWeWorkWith';
import GlobalReach from '@/components/landing/GlobalReach';
import LatestPosts from '@/components/landing/LatestPosts';
import CTABanner from '@/components/landing/CTABanner';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Padel Racket & Pickleball Paddle Manufacturer — SIAL Athletics' },
  description: 'OEM and private-label padel rackets and pickleball paddles for brands and distributors, plus bags and jerseys. Factory-direct from Sialkot, Pakistan.',
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
  '@id': 'https://www.sialathletics.com/#organization',
  name: 'SIAL Athletics',
  url: 'https://www.sialathletics.com',
  logo: 'https://www.sialathletics.com/images/logo-dark.png',
  image: 'https://www.sialathletics.com/images/og-card.png',
  description: 'OEM and private-label manufacturer of carbon padel rackets and pickleball paddles, also making beach rackets, racket bags and team jerseys. Based in Sialkot, Pakistan.',
  // Product lines in priority order.
  knowsAbout: [
    'Padel racket manufacturing',
    'Custom padel rackets',
    'Carbon fiber padel rackets',
    'Sports goods manufacturing',
    'Pickleball paddles',
    'Custom pickleball paddles',
    'Carbon fiber pickleball paddles',
    'Beach tennis rackets',
    'Racket bags',
    'Padel clothing',
    'Custom padel jerseys',
    'Sublimated teamwear',
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
      <LatestPosts />
      <CTABanner
        headline="Got a design in mind?"
        subtext="A sketch or a reference photo is enough to start."
      />
    </div>
  );
}
