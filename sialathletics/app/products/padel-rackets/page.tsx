import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/landing/CTABanner';
import SpecConfigurator from '@/components/catalogue/SpecConfigurator';
import FamilyBlock from '@/components/products/FamilyBlock';
import ProductPageStyles from '@/components/products/ProductPageStyles';
import JsonLd from '@/components/seo/JsonLd';
import { nestedBreadcrumbJsonLd } from '@/lib/seo';
import { padelFamilies, padelOptions } from '@/lib/products/padel';
import { padelFamilyJsonLd } from '@/lib/products/jsonld';

export const metadata: Metadata = {
  title: 'Padel Racket Manufacturer — OEM Moulds',
  description:
    'Our OEM padel racket moulds in round, teardrop and diamond shapes. Per-model dimensions, weight and balance, built to your spec.',
  alternates: { canonical: '/products/padel-rackets' },
};

const productJsonLd = padelFamilies.map(padelFamilyJsonLd);

export default function PadelRacketsPage() {
  return (
    <main style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
      <JsonLd data={nestedBreadcrumbJsonLd({ name: 'Products', path: '/products' }, { name: 'Padel Rackets', path: '/products/padel-rackets' })} />
      {productJsonLd.map((p, i) => <JsonLd key={i} data={p} />)}

      <PageHero
        crumb="Padel Rackets"
        parentCrumb={{ label: 'Products', href: '/products' }}
        title="Padel rackets, built to spec."
        subtitle="Three shape families, three moulds each. Every mould is supplied blank — pick a shape, then specify the build."
        compact
      />

      <section className="site-section plat-anchor" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
        <div className="container-custom">
          {padelFamilies.map((f) => <FamilyBlock key={f.id} family={f} />)}

          <div className="opt-section">
            <h3 className="hp-display opt-section__title">Padel build options</h3>
            <p className="opt-section__intro">
              Pick the options you want, then send them to us as a quote request.
            </p>
            <SpecConfigurator category="Padel racket" productLine="Padel Rackets" groups={padelOptions} />
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
