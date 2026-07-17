import type { Metadata } from 'next';
import CTABanner from '@/components/landing/CTABanner';
import PageHero from '@/components/ui/PageHero';
import CapabilityCards from '@/components/capabilities/CapabilityCards';
import ProcessTimeline from '@/components/capabilities/ProcessTimeline';
import MaterialsBadges from '@/components/capabilities/MaterialsBadges';

export const metadata: Metadata = {
  title: 'Manufacturing Capabilities — SIAL Athletics',
  description: 'End-to-end sports equipment manufacturing: OEM, ODM, private label, carbon fiber molding, quality control, and global logistics from Sialkot.',
};

export default function CapabilitiesPage() {
  return (
    <main>
      <PageHero
        crumb="Manufacturing"
        eyebrow="What we do"
        title="End-to-end manufacturing."
        subtitle="From concept to courier — we handle the full production cycle."
      />
      <CapabilityCards />
      <ProcessTimeline />
      <MaterialsBadges />
      <CTABanner
        headline="Ready to spec your first order?"
        subtext="Send us your requirements and we'll respond within 24 hours."
        primaryLabel="Get a quote"
        primaryHref="/contact"
        secondaryLabel="View products"
        secondaryHref="/catalogue"
        index="SIAL / 04"
      />
    </main>
  );
}
