import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/landing/CTABanner';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Products — Padel Rackets & Sports Goods',
  description:
    'Custom padel rackets, pickleball paddles, beach rackets, jerseys and bags. OEM and private label, made in our own factory in Sialkot, Pakistan.',
  alternates: { canonical: '/products' },
};

const categories: {
  title: string;
  desc: string;
  href: string;
  image?: string;
  alt?: string;
}[] = [
  {
    title: 'Padel Rackets',
    desc: 'Custom carbon padel rackets in round, teardrop and diamond.',
    href: '/products/padel-rackets',
    image: '/images/products/custom-teardrop-padel-racket-oem.png',
    alt: 'Custom teardrop padel racket with a black carbon face, OEM padel racket made by SIAL Athletics',
  },
  {
    title: 'Pickleball Paddles',
    desc: 'EPP foam and PP honeycomb cores, in three shapes.',
    href: '/products/pickleball-paddles',
    image: '/images/products/custom-carbon-pickleball-paddle-oem.png',
    alt: 'Custom carbon fiber pickleball paddle with red halftone graphics, OEM paddle made by SIAL Athletics',
  },
  {
    title: 'Beach Rackets',
    desc: '3K to 24K carbon, EVA cores, sand-grit and 3D finishes.',
    href: '/products/beach-rackets',
    image: '/images/products/beach/3k-soft-eva-printed.png',
    alt: 'SIAL Athletics branded beach racket, 3K carbon face with a soft EVA core',
  },
  {
    title: 'Jerseys',
    desc: 'Full-sublimation kits, polos, tees and shorts.',
    href: '/products/jerseys',
    image: '/images/products/custom-sublimated-padel-jersey.webp',
    alt: 'Custom sublimated padel jersey in black and red, made by SIAL Athletics',
  },
  {
    title: 'Bags',
    desc: 'Kit bags, racket covers and paddle sleeves.',
    href: '/products/bags',
    image: '/images/products/bags/pro-racine-pu.png',
    alt: 'SIAL Athletics pro kit bag in a Racine PU synthetic leather shell',
  },
];

export default function ProductsPage() {
  return (
    <main style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
      <JsonLd data={breadcrumbJsonLd('Products', '/products')} />

      <PageHero
        crumb="Products"
        title="Padel rackets and more."
        subtitle="Everything here is made in our own factory in Sialkot, Pakistan. Pick a category to see the moulds, materials and options."
        compact
      />

      <section className="site-section">
        <div className="container-custom">
          <div className="prod-grid">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="prod-card">
                {cat.image && (
                  <span className="prod-card__media" aria-hidden="true">
                    <Image src={cat.image} alt={cat.alt ?? ''} fill sizes="(max-width: 720px) 45vw, 220px" style={{ objectFit: 'contain' }} />
                  </span>
                )}
                <span className="prod-card__body">
                  <span className="prod-card__title">{cat.title}</span>
                  <span className="prod-card__desc">{cat.desc}</span>
                  <span className="prod-card__cta" aria-hidden="true">See the range →</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Not sure where to start?"
        subtext="Tell us what you sell and who you sell to, and we'll suggest a starting point. We reply within 24 hours."
        primaryLabel="Start an inquiry"
      />

      <style>{`
        .prod-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .prod-card {
          position: relative;
          display: flex;
          flex-direction: column;
          background: var(--surface);
          border: 1px solid var(--hp-ink-line);
          padding: 1.5rem;
          min-height: 220px;
          text-decoration: none;
          transition: border-color 0.3s var(--hp-ease);
        }
        .prod-card:hover { border-color: var(--hp-ink-45); }
        .prod-card__media {
          position: relative;
          align-self: center;
          width: 100%;
          height: 110px;
          margin-bottom: 0.5rem;
        }
        .prod-card__media img { transition: transform 0.5s var(--hp-ease); }
        .prod-card:hover .prod-card__media img { transform: scale(1.04); }
        .prod-card__body { margin-top: auto; display: flex; flex-direction: column; gap: 0.35rem; }
        .prod-card__title {
          font-family: var(--font-display), sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--hp-ink);
        }
        .prod-card__desc {
          font-family: var(--hp-body);
          font-size: 0.85rem;
          line-height: 1.5;
          color: var(--hp-ink-70);
        }
        .prod-card__cta {
          margin-top: 0.4rem;
          font-family: var(--hp-body);
          font-size: 0.78rem;
          font-weight: 650;
          letter-spacing: 0.04em;
          color: var(--hp-ink);
        }
        @media (max-width: 860px) {
          .prod-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .prod-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
