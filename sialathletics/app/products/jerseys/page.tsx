import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/landing/CTABanner';
import SpecConfigurator from '@/components/catalogue/SpecConfigurator';
import FamilyBlock from '@/components/products/FamilyBlock';
import ProductPageStyles from '@/components/products/ProductPageStyles';
import JsonLd from '@/components/seo/JsonLd';
import { nestedBreadcrumbJsonLd } from '@/lib/seo';
import { jerseyFamilies, jerseyOptions } from '@/lib/products/jerseys';
import { jerseyJsonLd } from '@/lib/products/jsonld';

export const metadata: Metadata = {
  title: 'Custom Padel Jerseys & Padel Clothing',
  description:
    'Custom padel jerseys and padel clothing: sublimated shirts, polos, shorts and tracksuits with your logo, for clubs and brands. Made in Sialkot.',
  keywords: [
    'custom padel jerseys',
    'padel clothing manufacturer',
    'padel shirts with logo',
    'sublimated padel jerseys',
    'custom padel polo shirts',
    'padel teamwear',
    'custom sports jerseys manufacturer Pakistan',
  ],
  alternates: { canonical: '/products/jerseys' },
  openGraph: {
    title: 'Custom Padel Jerseys & Padel Clothing — SIAL Athletics',
    description: 'Sublimated padel shirts, polos, shorts and tracksuits in your club colours, made in Sialkot.',
    images: [{ url: '/images/products/custom-sublimated-padel-jersey.webp', alt: 'Custom sublimated padel jersey in black and red' }],
  },
};

const productJsonLd = jerseyFamilies.flatMap((f) => f.models.map((m) => jerseyJsonLd(m, f)));

export default function JerseysPage() {
  return (
    <main style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
      <JsonLd data={nestedBreadcrumbJsonLd({ name: 'Products', path: '/products' }, { name: 'Jerseys', path: '/products/jerseys' })} />
      {productJsonLd.map((p, i) => <JsonLd key={i} data={p} />)}

      <PageHero
        crumb="Jerseys"
        parentCrumb={{ label: 'Products', href: '/products' }}
        title="Custom jerseys."
        subtitle="Full sublimation in four styles, printed with your club colours, artwork and numbers."
        compact
      />

      <section className="site-section plat-anchor" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
        <div className="container-custom">
          {jerseyFamilies.map((f) => <FamilyBlock key={f.id} family={f} />)}

          <div className="opt-section">
            <h3 className="hp-display opt-section__title">Build your jersey</h3>
            <p className="opt-section__intro">
              Pick the options you want, then send them to us as a quote request.
            </p>
            <SpecConfigurator category="Jersey" groups={jerseyOptions} />
          </div>
        </div>
      </section>

      <CTABanner
        headline="Found a style you like?"
        subtext="Send us the style, your target price and the quantity. We reply within 24 hours."
        primaryLabel="Start an inquiry"
      />
      <ProductPageStyles />
    </main>
  );
}
