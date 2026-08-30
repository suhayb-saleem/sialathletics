import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/landing/CTABanner';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';
import { posts, readMinutes, formatDate } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog — Padel & Pickleball Manufacturing',
  description:
    'Technical articles on padel racket and pickleball paddle manufacturing: carbon fiber grades, EVA cores, core thickness, surface texture, quality control and sourcing.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndexPage() {
  const [lead, ...rest] = posts;

  return (
    <main style={{ background: 'var(--hp-paper)' }}>
      <JsonLd data={breadcrumbJsonLd('Blog', '/blog')} />
      <PageHero
        crumb="Blog"
        eyebrow="From the factory"
        title="Blog."
        subtitle="How rackets and paddles are actually built, and what to ask before you order."
      />

      <section className="site-section" style={{ borderTop: '1px solid var(--hp-ink-line)' }}>
        <div className="hp-shell">
          {/* Lead post */}
          <article className="post-lead">
            <Link href={`/blog/${lead.slug}`} className="post-lead__media" aria-hidden="true" tabIndex={-1}>
              <Image src={lead.hero.src} alt="" fill sizes="(max-width: 900px) 100vw, 55vw" style={{ objectFit: 'cover' }} priority />
            </Link>
            <div className="post-lead__body">
              <span className="post-meta">
                {lead.category} · {formatDate(lead.date)} · {readMinutes(lead)} min read
              </span>
              <h2 className="post-lead__title">
                <Link href={`/blog/${lead.slug}`}>{lead.title}</Link>
              </h2>
              <p className="post-lead__desc">{lead.summary}</p>
              <span className="post-lead__cta" aria-hidden="true">Read article <b>→</b></span>
            </div>
          </article>

          {/* Remaining posts */}
          <div className="post-grid">
            {rest.map((post) => (
              <article key={post.slug} className="post-card">
                <Link href={`/blog/${post.slug}`} className="post-card__media" aria-hidden="true" tabIndex={-1}>
                  <Image src={post.hero.src} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                </Link>
                <div className="post-card__body">
                  <span className="post-meta">{post.category} · {readMinutes(post)} min read</span>
                  <h3 className="post-card__title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="post-card__desc">{post.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Have a product in mind?"
        subtext="Send us your specs and we'll respond within 24 hours."
        primaryLabel="Get a quote"
        primaryHref="/contact"
        secondaryLabel="How we manufacture"
        secondaryHref="/manufacturing"
        index="SIAL / 08"
      />

      <style>{`
        .post-meta {
          font-family: var(--hp-body);
          font-size: 0.64rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--hp-red);
        }

        /* --- lead post --- */
        .post-lead {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          gap: 0;
          border: 1px solid var(--hp-ink-line);
          box-shadow: var(--shadow-sm);
          background: var(--surface);
          margin-bottom: 1.25rem;
          overflow: hidden;
        }
        .post-lead__media {
          position: relative;
          min-height: 320px;
          display: block;
          overflow: hidden;
        }
        .post-lead__media img { transition: transform 0.8s var(--hp-ease); }
        .post-lead:hover .post-lead__media img { transform: scale(1.03); }
        .post-lead__body {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          justify-content: center;
          padding: clamp(1.75rem, 3.5vw, 3rem);
        }
        .post-lead__title {
          margin: 0;
          font-family: var(--hp-display);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.015em;
          font-size: clamp(1.35rem, 2.4vw, 1.95rem);
          line-height: 1.08;
          color: var(--hp-ink);
        }
        .post-lead__title a { color: inherit; text-decoration: none; }
        .post-lead__desc {
          margin: 0;
          font-family: var(--hp-body);
          font-size: 0.92rem;
          line-height: 1.65;
          color: var(--hp-ink-70);
        }
        .post-lead__cta {
          margin-top: 0.4rem;
          font-family: var(--hp-body);
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--hp-ink);
        }
        .post-lead__cta b { color: var(--hp-red); }

        /* --- grid --- */
        .post-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .post-card {
          position: relative;
          display: flex;
          flex-direction: column;
          background: var(--surface);
          border: 1px solid var(--hp-ink-line);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          transition: transform 0.4s var(--hp-ease), box-shadow 0.4s var(--hp-ease);
        }
        .post-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
        .post-card__media {
          position: relative;
          display: block;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          border-bottom: 1px solid var(--hp-ink-line);
        }
        .post-card__media img { transition: transform 0.7s var(--hp-ease); }
        .post-card:hover .post-card__media img { transform: scale(1.05); }
        .post-card__body {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          padding: 1.5rem;
          flex: 1;
        }
        .post-card__title {
          margin: 0;
          font-family: var(--hp-display);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          font-size: 1.05rem;
          line-height: 1.15;
          color: var(--hp-ink);
        }
        .post-card__title a { color: inherit; text-decoration: none; }
        /* Card-wide click target */
        .post-card__title a::after { content: ""; position: absolute; inset: 0; }
        .post-card__desc {
          margin: 0;
          font-family: var(--hp-body);
          font-size: 0.86rem;
          line-height: 1.6;
          color: var(--hp-ink-70);
        }

        @media (max-width: 1000px) {
          .post-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .post-lead { grid-template-columns: 1fr; }
          .post-lead__media { min-height: 0; aspect-ratio: 16 / 9; }
        }
        @media (max-width: 640px) {
          .post-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
