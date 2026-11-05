import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/landing/CTABanner';
import SpecConfigurator from '@/components/catalogue/SpecConfigurator';
import FamilyBlock from '@/components/products/FamilyBlock';
import ProductPageStyles from '@/components/products/ProductPageStyles';
import JsonLd from '@/components/seo/JsonLd';
import { nestedBreadcrumbJsonLd } from '@/lib/seo';
import { beachFamilies, beachOptions } from '@/lib/products/beach';
import { categoryPageJsonLd } from '@/lib/products/jsonld';

export const metadata: Metadata = {
  title: 'Custom Beach Rackets — OEM Manufacturer',
  description:
    'OEM beach tennis rackets in 3K to 24K carbon, on the same lay-ups as our padel rackets. Your face, core, finish and logo, made in Sialkot.',
  alternates: { canonical: '/products/beach-rackets' },
};

const pageJsonLd = categoryPageJsonLd({
  path: '/products/beach-rackets',
  topic: 'Custom beach tennis rackets',
  title: metadata.title as string,
  description: metadata.description as string,
  families: beachFamilies,
});

export default function BeachRacketsPage() {
  return (
    <main style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
      <JsonLd data={nestedBreadcrumbJsonLd({ name: 'Products', path: '/products' }, { name: 'Beach Rackets', path: '/products/beach-rackets' })} />
      <JsonLd data={pageJsonLd} />

      <PageHero
        crumb="Beach Rackets"
        parentCrumb={{ label: 'Products', href: '/products' }}
        title="Custom beach rackets."
        subtitle="3K to 24K carbon on the same lay-ups as our padel rackets. You choose the face, core, finish and artwork."
        compact
      />

      <section className="site-section plat-anchor" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
        <div className="container-custom">
          {beachFamilies.map((f) => <FamilyBlock key={f.id} family={f} />)}

          <div className="opt-section">
            <h3 className="hp-display opt-section__title">Build your beach racket</h3>
            <p className="opt-section__intro">
              Pick the options you want, then send them to us as a quote request.
            </p>
            <SpecConfigurator category="Beach racket" groups={beachOptions} />
          </div>
        </div>
      </section>

      <CTABanner
        headline="Found a finish you like?"
        subtext="Send us the finish, your target price and the quantity. We reply within 24 hours."
        primaryLabel="Start an inquiry"
      />
      <ProductPageStyles />
    </main>
  );
}
