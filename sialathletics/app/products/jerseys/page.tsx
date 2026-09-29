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
  title: 'Custom Jerseys — OEM Sportswear',
  description:
    'Our OEM team jerseys, full-sublimation kit for padel, pickleball and beach sports brands and clubs. Per-style material, fit and finish, built to your spec.',
  alternates: { canonical: '/products/jerseys' },
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
        title="Custom jerseys, built to spec."
        subtitle="Full-sublimation kit built to your brand identity. Four production blocks, each available in your own colourway, artwork and numbering."
        compact
      />

      <section className="site-section plat-anchor" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
        <div className="container-custom">
          {jerseyFamilies.map((f) => <FamilyBlock key={f.id} family={f} />)}

          <div className="opt-section">
            <h3 className="hp-display opt-section__title">Jersey build options</h3>
            <p className="opt-section__intro">
              Pick the options you want, then send them to us as a quote request.
            </p>
            <SpecConfigurator category="Jersey" productLine="Jerseys" groups={jerseyOptions} />
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
