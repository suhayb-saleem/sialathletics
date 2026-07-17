import type { Metadata } from 'next';
import CTABanner from '@/components/landing/CTABanner';
import PageHero from '@/components/ui/PageHero';
import AboutStory from '@/components/about/AboutStory';
import AboutStats from '@/components/about/AboutStats';
import AboutValues from '@/components/about/AboutValues';

export const metadata: Metadata = {
  title: 'About SIAL Athletics — Our Story & Manufacturing Heritage',
  description: 'Learn about SIAL Athletics, our manufacturing heritage in Sialkot, and our mission to bring premium pickleball and padel equipment to the US market.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        crumb="About"
        eyebrow="Our story"
        title="Who we are."
        subtitle="Built in Sialkot. Trusted worldwide."
      />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <CTABanner
        headline="Want to know more about our process?"
        subtext="Let's talk manufacturing, samples, and timelines."
        primaryLabel="Get a quote"
        primaryHref="/contact"
        secondaryLabel="View products"
        secondaryHref="/catalogue"
        index="SIAL / 03"
      />
    </main>
  );
}
