import type { Metadata } from 'next';
import CTABanner from '@/components/landing/CTABanner';
import PageHero from '@/components/ui/PageHero';
import QualityChecklist from '@/components/quality/QualityChecklist';
import QualityStandards from '@/components/quality/QualityStandards';

export const metadata: Metadata = {
  title: 'Quality Standards — SIAL Athletics',
  description: 'USAPA-compliant manufacturing. Every SIAL Athletics paddle meets strict surface roughness, deflection, and dimensional standards.',
};

export default function QualityPage() {
  return (
    <main>
      <PageHero
        crumb="Quality"
        eyebrow="Our promise"
        title="Quality without compromise."
        subtitle="Every racket we ship meets its build tolerances — dimension, weight, and balance verified batch by batch."
      />
      <QualityChecklist />
      <QualityStandards />
      <CTABanner
        headline="Quality you can put your brand on."
        subtext="Let's discuss your requirements and manufacturing specs."
        primaryLabel="Get a quote"
        primaryHref="/contact"
        secondaryLabel="View products"
        secondaryHref="/catalogue"
        index="SIAL / 05"
      />
    </main>
  );
}
