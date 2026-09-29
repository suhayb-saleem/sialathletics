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
  title: 'Pickleball Paddle Manufacturer — OEM Paddles',
  description:
    'Our OEM pickleball paddles in EPP foam and PP honeycomb cores, elongated, standard and open-throat shapes. Per-model dimensions and materials, built to your spec.',
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
        title="Pickleball paddles, built to spec."
        subtitle="Two cores across three shapes, all on a T700 carbon fibre face at 16 mm. Every design can be built on either core, in any shape."
        compact
      />

      <section className="site-section plat-anchor" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
        <div className="container-custom">
          {pickleballFamilies.map((f) => <FamilyBlock key={f.id} family={f} />)}

          <div className="opt-section">
            <h3 className="hp-display opt-section__title">Pickleball build options</h3>
            <p className="opt-section__intro">
              Pick the options you want, then send them to us as a quote request.
            </p>
            <SpecConfigurator category="Pickleball paddle" productLine="Pickleball Paddles" groups={pickleballOptions} />
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to configure your line?"
        subtext="Tell us the mould, target price point and volume. We reply within 24 hours."
        primaryLabel="Start an inquiry"
      />
      <ProductPageStyles />
    </main>
  );
}
