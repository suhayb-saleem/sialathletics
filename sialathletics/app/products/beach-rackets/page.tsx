import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/landing/CTABanner';
import SpecConfigurator from '@/components/catalogue/SpecConfigurator';
import FamilyBlock from '@/components/products/FamilyBlock';
import ProductPageStyles from '@/components/products/ProductPageStyles';
import JsonLd from '@/components/seo/JsonLd';
import { nestedBreadcrumbJsonLd } from '@/lib/seo';
import { beachFamilies, beachOptions } from '@/lib/products/beach';
import { beachJsonLd } from '@/lib/products/jsonld';

export const metadata: Metadata = {
  title: 'Beach Racket Manufacturer — OEM Beach Rackets',
  description:
    'Our OEM beach tennis rackets, built on the same carbon lay-ups as our padel range. Per-model face, core and surface options, built to your spec.',
  alternates: { canonical: '/products/beach-rackets' },
};

const productJsonLd = beachFamilies.flatMap((f) => f.models.map((m) => beachJsonLd(m, f)));

export default function BeachRacketsPage() {
  return (
    <main style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
      <JsonLd data={nestedBreadcrumbJsonLd({ name: 'Products', path: '/products' }, { name: 'Beach Rackets', path: '/products/beach-rackets' })} />
      {productJsonLd.map((p, i) => <JsonLd key={i} data={p} />)}

      <PageHero
        crumb="Beach Rackets"
        parentCrumb={{ label: 'Products', href: '/products' }}
        title="Beach rackets, built to spec."
        subtitle="Built on the same carbon lay-ups as our padel range, with your choice of face, core, finish and artwork."
        compact
      />

      <section className="site-section plat-anchor" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
        <div className="container-custom">
          {beachFamilies.map((f) => <FamilyBlock key={f.id} family={f} />)}

          <div className="opt-section">
            <h3 className="hp-display opt-section__title">Beach racket build options</h3>
            <p className="opt-section__intro">
              Pick the options you want, then send them to us as a quote request.
            </p>
            <SpecConfigurator category="Beach racket" productLine="Beach Rackets" groups={beachOptions} />
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to configure your line?"
        subtext="Tell us the finish, target price point and volume. We reply within 24 hours."
        primaryLabel="Start an inquiry"
      />
      <ProductPageStyles />
    </main>
  );
}
