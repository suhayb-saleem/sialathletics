import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/landing/CTABanner';
import SpecConfigurator from '@/components/catalogue/SpecConfigurator';
import FamilyBlock from '@/components/products/FamilyBlock';
import ProductPageStyles from '@/components/products/ProductPageStyles';
import JsonLd from '@/components/seo/JsonLd';
import { nestedBreadcrumbJsonLd } from '@/lib/seo';
import { bagFamilies, bagOptions } from '@/lib/products/bags';
import { bagJsonLd } from '@/lib/products/jsonld';

export const metadata: Metadata = {
  title: 'Custom Racket Bags — OEM Bags',
  description:
    'Our OEM kit bags, racket covers and paddle sleeves, cut and printed to your brand. Per-style shell, protection and hardware options, built to your spec.',
  alternates: { canonical: '/products/bags' },
};

const productJsonLd = bagFamilies.flatMap((f) => f.models.map((m) => bagJsonLd(m, f)));

export default function BagsPage() {
  return (
    <main style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
      <JsonLd data={nestedBreadcrumbJsonLd({ name: 'Products', path: '/products' }, { name: 'Bags', path: '/products/bags' })} />
      {productJsonLd.map((p, i) => <JsonLd key={i} data={p} />)}

      <PageHero
        crumb="Bags"
        parentCrumb={{ label: 'Products', href: '/products' }}
        title="Racket bags, built to spec."
        subtitle="From a single-paddle sleeve to a thermal tournament kit bag. Every style is cut, printed and trimmed to your brand."
        compact
      />

      <section className="site-section plat-anchor" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
        <div className="container-custom">
          {bagFamilies.map((f) => <FamilyBlock key={f.id} family={f} />)}

          <div className="opt-section">
            <h3 className="hp-display opt-section__title">Bag build options</h3>
            <p className="opt-section__intro">
              Pick the options you want, then send them to us as a quote request.
            </p>
            <SpecConfigurator category="Bag" productLine="Bags" groups={bagOptions} />
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to configure your line?"
        subtext="Tell us the style, target price point and volume. We reply within 24 hours."
        primaryLabel="Start an inquiry"
      />
      <ProductPageStyles />
    </main>
  );
}
