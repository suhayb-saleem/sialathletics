import type { Metadata } from 'next';
import CTABanner from '@/components/landing/CTABanner';
import PageHero from '@/components/ui/PageHero';
import CapabilityCards from '@/components/capabilities/CapabilityCards';
import ProcessTimeline from '@/components/capabilities/ProcessTimeline';
import MaterialsBadges from '@/components/capabilities/MaterialsBadges';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Sports Goods Manufacturing — OEM & ODM',
  description: 'How we build padel rackets, pickleball paddles, beach rackets, bags and jerseys: carbon lay-ups, precision moulding, QC testing and export.',
  alternates: { canonical: '/manufacturing' },
};

export default function ManufacturingPage() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd('Manufacturing', '/manufacturing')} />
      <PageHero
        crumb="Manufacturing"
        title="Sports goods manufacturing, end to end."
        subtitle="Padel rackets, pickleball paddles, beach rackets, bags and jerseys, made start to finish in our own factory in Sialkot: moulding, lay-up, finishing, inspection and export."
        image="/images/manufacturing/manufacturing_section.png"
        imageAlt="Studio product photo of a SIAL Athletics carbon fiber padel racket"
      />
      <CapabilityCards />
      <ProcessTimeline />
      <MaterialsBadges />
      <CTABanner
        headline="Ready to spec your first order?"
        subtext="Send us your requirements and we reply within 24 hours."
        primaryLabel="Get a quote"
      />
    </main>
  );
}
