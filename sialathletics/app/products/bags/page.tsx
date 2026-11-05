import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/landing/CTABanner';
import SpecConfigurator from '@/components/catalogue/SpecConfigurator';
import FamilyBlock from '@/components/products/FamilyBlock';
import ProductPageStyles from '@/components/products/ProductPageStyles';
import JsonLd from '@/components/seo/JsonLd';
import { nestedBreadcrumbJsonLd } from '@/lib/seo';
import { bagFamilies, bagOptions } from '@/lib/products/bags';
import { categoryPageJsonLd } from '@/lib/products/jsonld';

export const metadata: Metadata = {
  title: 'Custom Racket Bags — OEM Bags',
  description:
    'Custom padel bags, racket covers and paddle sleeves with your logo, from single sleeves to thermal tournament bags. Made in Sialkot, Pakistan.',
  alternates: { canonical: '/products/bags' },
};

const pageJsonLd = categoryPageJsonLd({
  path: '/products/bags',
  topic: 'Custom padel bags and racket bags',
  title: metadata.title as string,
  description: metadata.description as string,
  families: bagFamilies,
});

export default function BagsPage() {
  return (
    <main style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
      <JsonLd data={nestedBreadcrumbJsonLd({ name: 'Products', path: '/products' }, { name: 'Bags', path: '/products/bags' })} />
      <JsonLd data={pageJsonLd} />

      <PageHero
        crumb="Bags"
        parentCrumb={{ label: 'Products', href: '/products' }}
        title="Custom racket bags."
        subtitle="Kit bags, racket covers and paddle sleeves, from a single-paddle sleeve to a thermal tournament bag. Every style can carry your logo, colours and trims."
        compact
      />

      <section className="site-section plat-anchor" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
        <div className="container-custom">
          {bagFamilies.map((f) => <FamilyBlock key={f.id} family={f} />)}

          <div className="opt-section">
            <h3 className="hp-display opt-section__title">Build your bag</h3>
            <p className="opt-section__intro">
              Pick the options you want, then send them to us as a quote request.
            </p>
            <SpecConfigurator category="Bag" groups={bagOptions} />
          </div>
        </div>
      </section>

      <CTABanner
        headline="Found a bag you like?"
        subtext="Send us the style, your target price and the quantity. We reply within 24 hours."
        primaryLabel="Start an inquiry"
      />
      <ProductPageStyles />
    </main>
  );
}
