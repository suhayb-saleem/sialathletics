import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/landing/CTABanner';
import SpecConfigurator from '@/components/catalogue/SpecConfigurator';
import FamilyBlock from '@/components/products/FamilyBlock';
import ProductPageStyles from '@/components/products/ProductPageStyles';
import JsonLd from '@/components/seo/JsonLd';
import { nestedBreadcrumbJsonLd } from '@/lib/seo';
import { pickleballFamilies, pickleballOptions } from '@/lib/products/pickleball';
import { pickleballJsonLd } from '@/lib/products/jsonld';

export const metadata: Metadata = {
  title: 'Custom Pickleball Paddles — OEM Manufacturer',
  description:
    'OEM pickleball paddles with your logo: EPP foam or PP honeycomb cores in elongated, standard and open-throat shapes. Made in Sialkot, Pakistan.',
  alternates: { canonical: '/products/pickleball-paddles' },
};

const productJsonLd = pickleballFamilies.flatMap((f) => f.models.map((m) => pickleballJsonLd(m, f)));

export default function PickleballPaddlesPage() {
  return (
    <main style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
      <JsonLd data={nestedBreadcrumbJsonLd({ name: 'Products', path: '/products' }, { name: 'Pickleball Paddles', path: '/products/pickleball-paddles' })} />
      {productJsonLd.map((p, i) => <JsonLd key={i} data={p} />)}

      <PageHero
        crumb="Pickleball Paddles"
        parentCrumb={{ label: 'Products', href: '/products' }}
        title="Custom pickleball paddles."
        subtitle="EPP foam or PP honeycomb cores on a 16 mm T700 carbon face, in elongated, standard and open-throat shapes. Every design works on either core."
        compact
      />

      <section className="site-section plat-anchor" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
        <div className="container-custom">
          {pickleballFamilies.map((f) => <FamilyBlock key={f.id} family={f} />)}

          <div className="opt-section">
            <h3 className="hp-display opt-section__title">Build your pickleball paddle</h3>
            <p className="opt-section__intro">
              Pick the options you want, then send them to us as a quote request.
            </p>
            <SpecConfigurator category="Pickleball paddle" groups={pickleballOptions} />
          </div>
        </div>
      </section>

      <CTABanner
        headline="Found a paddle you like?"
        subtext="Send us the design, your target price and the quantity. We reply within 24 hours."
        primaryLabel="Start an inquiry"
      />
      <ProductPageStyles />
    </main>
  );
}
