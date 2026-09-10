import type { Metadata } from 'next';
import CTABanner from '@/components/landing/CTABanner';
import PageHero from '@/components/ui/PageHero';
import AboutStory from '@/components/about/AboutStory';
import AboutValues from '@/components/about/AboutValues';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Us — Padel & Pickleball Manufacturer',
  description: 'SIAL Athletics manufactures carbon fiber padel rackets and pickleball paddles in Sialkot, Pakistan, with factory-direct OEM/ODM programs.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd('About', '/about')} />
      <PageHero
        crumb="About"
        title="Who we are."
        subtitle="A padel and pickleball manufacturer in Sialkot, Pakistan, building private-label product for brands, clubs and distributors."
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
