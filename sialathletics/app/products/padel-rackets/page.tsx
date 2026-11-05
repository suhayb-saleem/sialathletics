import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/landing/CTABanner';
import SpecConfigurator from '@/components/catalogue/SpecConfigurator';
import FamilyBlock from '@/components/products/FamilyBlock';
import ProductPageStyles from '@/components/products/ProductPageStyles';
import JsonLd from '@/components/seo/JsonLd';
import { nestedBreadcrumbJsonLd } from '@/lib/seo';
import { padelFamilies, padelOptions } from '@/lib/products/padel';
import { categoryPageJsonLd } from '@/lib/products/jsonld';

export const metadata: Metadata = {
  title: 'Custom Padel Rackets — OEM Manufacturer',
  description:
    'Custom carbon padel rackets with your logo. Round, teardrop and diamond moulds in 3K to 24K carbon with EVA cores, made in Sialkot, Pakistan.',
  keywords: [
    'custom padel rackets',
    'OEM padel racket manufacturer',
    'private label padel rackets',
    'carbon fiber padel racket supplier',
    'bulk padel rackets',
    'padel racket manufacturer Sialkot',
  ],
  alternates: { canonical: '/products/padel-rackets' },
  openGraph: {
    title: 'Custom Padel Rackets — OEM Padel Racket Manufacturer | SIAL Athletics',
    description: 'Round, teardrop and diamond carbon padel rackets with your logo, made in Sialkot, Pakistan.',
    images: [{ url: '/images/products/custom-teardrop-padel-racket-oem.png', alt: 'Custom teardrop carbon padel racket' }],
  },
};

const pageJsonLd = categoryPageJsonLd({
  path: '/products/padel-rackets',
  topic: 'Custom padel rackets',
  title: metadata.title as string,
  description: metadata.description as string,
  families: padelFamilies,
});

export default function PadelRacketsPage() {
  return (
    <main style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
      <JsonLd data={nestedBreadcrumbJsonLd({ name: 'Products', path: '/products' }, { name: 'Padel Rackets', path: '/products/padel-rackets' })} />
      <JsonLd data={pageJsonLd} />

      <PageHero
        crumb="Padel Rackets"
        parentCrumb={{ label: 'Products', href: '/products' }}
        title="Custom padel rackets."
        subtitle="Round, teardrop and diamond moulds in 3K to 24K carbon with EVA cores. Every mould starts as a blank, so the finish and artwork are yours to choose."
        compact
      />

      <section className="site-section plat-anchor" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
        <div className="container-custom">
          {padelFamilies.map((f) => <FamilyBlock key={f.id} family={f} />)}

          <div className="opt-section">
            <h3 className="hp-display opt-section__title">Build your padel racket</h3>
            <p className="opt-section__intro">
              Pick the options you want, then send them to us as a quote request.
            </p>
            <SpecConfigurator category="Padel racket" groups={padelOptions} />
          </div>
        </div>
      </section>

      <CTABanner
        headline="Found a shape you like?"
        subtext="Send us the mould, your target price and the quantity. We reply within 24 hours."
        primaryLabel="Start an inquiry"
      />
      <ProductPageStyles />
    </main>
  );
}
