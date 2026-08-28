import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTABanner from '@/components/landing/CTABanner';
import JsonLd from '@/components/seo/JsonLd';
import { nestedBreadcrumbJsonLd } from '@/lib/seo';
import { Block, ContentBlockStyles } from '@/components/content/ContentBlocks';
import PreferredSource from '@/components/seo/PreferredSource';
import { guides, getGuide } from '@/data/guides';

// Prerender every guide at build time so they are static HTML for crawlers.
export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `/guides/${guide.slug}` },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    author: { '@type': 'Organization', name: 'SIAL Athletics' },
    publisher: {
      '@type': 'Organization',
      name: 'SIAL Athletics',
      logo: { '@type': 'ImageObject', url: 'https://www.sialathletics.com/images/logo.png' },
    },
    mainEntityOfPage: `https://www.sialathletics.com/guides/${guide.slug}`,
  };

  return (
    <main style={{ background: 'var(--hp-paper)' }}>
      <JsonLd data={articleJsonLd} />
      <JsonLd
        data={nestedBreadcrumbJsonLd(
          { name: 'Guides', path: '/guides' },
          { name: guide.title, path: `/guides/${guide.slug}` },
        )}
      />

      <article style={{ paddingTop: '120px' }}>
        <div className="hp-shell" style={{ maxWidth: '780px', padding: '3.5rem 1.5rem 5rem' }}>
          <nav aria-label="Breadcrumb" className="hp-pagehero__crumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/guides">Guides</Link>
          </nav>

          <span className="hp-eyebrow hp-eyebrow--ink">{guide.eyebrow}</span>
          <h1
            className="hp-display"
            style={{ fontSize: 'clamp(2rem, 4.6vw, 3.2rem)', color: 'var(--hp-ink)', margin: '1rem 0 1.4rem', lineHeight: 1.05 }}
          >
            {guide.title}
          </h1>

          {/* Answer-first lede: states the conclusion before the detail. */}
          <p
            style={{
              fontFamily: 'var(--hp-body)',
              fontSize: 'clamp(1rem, 1.2vw, 1.12rem)',
              lineHeight: 1.7,
              color: 'var(--hp-ink)',
              margin: '0 0 2.75rem',
              paddingLeft: '1.1rem',
              borderLeft: '3px solid var(--hp-red)',
            }}
          >
            {guide.lede}
          </p>

          {guide.sections.map((section) => (
            <section key={section.h} style={{ marginBottom: '2.6rem' }}>
              <h2
                className="hp-display"
                style={{
                  fontSize: '1.15rem',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  color: 'var(--hp-ink)',
                  marginBottom: '1rem',
                  paddingBottom: '0.6rem',
                  borderBottom: '1px solid var(--hp-ink-line)',
                }}
              >
                {section.h}
              </h2>
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </section>
          ))}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem 1.75rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--hp-ink-line)' }}>
            {guide.related.map((link) => (
              <Link key={link.href} href={link.href} className="hp-link">
                {link.label} <b aria-hidden="true">↗</b>
              </Link>
            ))}
          </div>

          <PreferredSource />
        </div>
      </article>

      <CTABanner
        headline="Ready to start?"
        subtext="Send us your specs and we'll respond within 24 hours."
        primaryLabel="Get a quote"
        primaryHref="/contact"
        secondaryLabel="Read more guides"
        secondaryHref="/guides"
        index="SIAL / 07"
      />

      <ContentBlockStyles />
    </main>
  );
}
