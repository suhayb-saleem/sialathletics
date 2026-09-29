import type { Metadata } from 'next';
import CTABanner from '@/components/landing/CTABanner';
import PageHero from '@/components/ui/PageHero';
import AboutStory from '@/components/about/AboutStory';
import AboutValues from '@/components/about/AboutValues';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Us — Sports Goods Manufacturer in Sialkot',
  description: 'Sports goods manufacturer in Sialkot, Pakistan, making padel rackets, pickleball paddles, beach rackets, bags and jerseys for brands worldwide.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd('About', '/about')} />
      <PageHero
        crumb="About"
        title="Who we are."
        subtitle="A sports goods manufacturer in Sialkot, Pakistan, building private-label padel rackets, pickleball paddles and more for brands, clubs and distributors."
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
