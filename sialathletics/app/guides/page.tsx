import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/landing/CTABanner';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';
import { guides } from '@/data/guides';

export const metadata: Metadata = {
  title: 'Guides — Padel & Pickleball Manufacturing',
  description:
    'Practical guides for brands sourcing padel rackets and pickleball paddles: OEM vs ODM, carbon grades and shapes, MOQs, lead times, and how paddles are built.',
  alternates: { canonical: '/guides' },
};

export default function GuidesPage() {
  return (
    <main style={{ background: 'var(--hp-paper)' }}>
      <JsonLd data={breadcrumbJsonLd('Guides', '/guides')} />
      <PageHero
        crumb="Guides"
        eyebrow="Buyer guides"
        title="Guides for buyers."
        subtitle="Straight answers on specs, minimums, and how the factory works."
      />

      <section className="site-section" style={{ borderTop: '1px solid var(--hp-ink-line)' }}>
        <div className="hp-shell">
          <div className="guide-grid">
            {guides.map((guide, i) => (
              <article key={guide.slug} className="guide-card">
                <span className="guide-card__num">0{i + 1}</span>
                <h2 className="guide-card__title">
                  <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                </h2>
                <p className="guide-card__desc">{guide.summary}</p>
                <span className="guide-card__cta" aria-hidden="true">
                  Read guide <b>→</b>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to spec your line?"
        subtext="Send us your requirements and we'll respond within 24 hours."
        primaryLabel="Get a quote"
        primaryHref="/contact"
        secondaryLabel="View products"
        secondaryHref="/catalogue"
        index="SIAL / 07"
      />

      <style>{`
        .guide-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .guide-card {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding: 1.9rem;
          background: var(--surface);
          border: 1px solid var(--hp-ink-line);
          border-top: 3px solid var(--hp-red);
          box-shadow: var(--shadow-sm);
          transition: transform 0.4s var(--hp-ease), box-shadow 0.4s var(--hp-ease);
        }
        .guide-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
        .guide-card__num {
          font-family: var(--hp-display);
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          color: var(--hp-red);
        }
        .guide-card__title {
          margin: 0;
          font-family: var(--hp-display);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          font-size: 1.15rem;
          line-height: 1.15;
          color: var(--hp-ink);
        }
        .guide-card__title a { text-decoration: none; color: inherit; }
        /* Card-wide click target driven by the title link. */
        .guide-card__title a::after { content: ""; position: absolute; inset: 0; }
        .guide-card { position: relative; }
        .guide-card__desc {
          margin: 0;
          font-family: var(--hp-body);
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--hp-ink-70);
        }
        .guide-card__cta {
          margin-top: auto;
          padding-top: 1.1rem;
          font-family: var(--hp-body);
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--hp-ink);
        }
        .guide-card__cta b { color: var(--hp-red); }
        @media (max-width: 900px) {
          .guide-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
