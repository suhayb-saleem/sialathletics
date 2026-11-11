import type { Metadata } from 'next';
import CTABanner from '@/components/landing/CTABanner';
import PageHero from '@/components/ui/PageHero';
import AboutStory from '@/components/about/AboutStory';
import AboutValues from '@/components/about/AboutValues';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Us — Padel & Pickleball Manufacturer',
  description: 'SIAL Athletics makes carbon padel rackets, pickleball paddles, bags and jerseys for brands worldwide, factory-direct from Sialkot, Pakistan.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd('About', '/about')} />
      <PageHero
        crumb="About"
        title="About SIAL Athletics."
        subtitle="We make private-label padel rackets, pickleball paddles, bags and jerseys for brands, clubs and distributors, in our own factory in Sialkot, Pakistan."
      />
      <AboutStory />
      <AboutValues />
      <CTABanner
        headline="Want to talk through an order?"
        subtext="Manufacturing, samples, timelines. Send us a brief and we reply within 24 hours."
        primaryLabel="Get a quote"
      />
    </main>
  );
}
