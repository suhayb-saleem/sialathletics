import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import CTABanner from '@/components/landing/CTABanner';
import JsonLd from '@/components/seo/JsonLd';
import { nestedBreadcrumbJsonLd } from '@/lib/seo';
import { Block, ContentBlockStyles } from '@/components/content/ContentBlocks';
import PreferredSource from '@/components/seo/PreferredSource';
import { posts, getPost, readMinutes, formatDate } from '@/data/blog';

const BASE = 'https://www.sialathletics.com';

// Prerender every post at build time so they are static HTML for crawlers.
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${BASE}/blog/${post.slug}`,
      publishedTime: post.date,
      images: [{ url: post.hero.src, alt: post.hero.alt }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const postJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: `${BASE}${encodeURI(post.hero.src)}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'SIAL Athletics', url: BASE },
    publisher: {
      '@type': 'Organization',
      name: 'SIAL Athletics',
      logo: { '@type': 'ImageObject', url: `${BASE}/images/logo.png` },
    },
    mainEntityOfPage: `${BASE}/blog/${post.slug}`,
  };

  return (
    <main style={{ background: 'var(--hp-paper)' }}>
      <JsonLd data={postJsonLd} />
      <JsonLd
        data={nestedBreadcrumbJsonLd({ name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` })}
      />

      <article style={{ paddingTop: '120px' }}>
        <div className="hp-shell" style={{ maxWidth: '780px', padding: '3.5rem 1.5rem 2rem' }}>
          <nav aria-label="Breadcrumb" className="hp-pagehero__crumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link>
          </nav>

          <span className="hp-eyebrow hp-eyebrow--ink">{post.category}</span>
          <h1
            className="hp-display"
            style={{ fontSize: 'clamp(1.9rem, 4.4vw, 3rem)', color: 'var(--hp-ink)', margin: '1rem 0 1rem', lineHeight: 1.06 }}
          >
            {post.title}
          </h1>

          <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.76rem', letterSpacing: '0.06em', color: 'var(--hp-ink-45)', margin: '0 0 2rem' }}>
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {readMinutes(post)} min read
          </p>
        </div>

        {/* Hero image, full content width */}
        <div className="hp-shell" style={{ maxWidth: '780px', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', border: '1px solid var(--hp-ink-line)', background: 'var(--surface-sunken)' }}>
            <Image src={post.hero.src} alt={post.hero.alt} fill priority sizes="(max-width: 820px) 100vw, 780px" style={{ objectFit: 'cover' }} />
          </div>
        </div>

        <div className="hp-shell" style={{ maxWidth: '780px', padding: '2.5rem 1.5rem 5rem' }}>
          {/* Answer-first summary */}
          <p
            style={{
              fontFamily: 'var(--hp-body)',
              fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
              lineHeight: 1.7,
              color: 'var(--hp-ink)',
              margin: '0 0 2.4rem',
              paddingLeft: '1.1rem',
              borderLeft: '3px solid var(--hp-red)',
            }}
          >
            {post.summary}
          </p>

          {post.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem 1.75rem',
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--hp-ink-line)',
            }}
          >
            {post.related.map((link) => (
              <Link key={link.href} href={link.href} className="hp-link">
                {link.label} <b aria-hidden="true">↗</b>
              </Link>
            ))}
          </div>

          <PreferredSource />
        </div>
      </article>

      <CTABanner
        headline="Ready to spec your line?"
        subtext="Send us your requirements and we'll respond within 24 hours."
        primaryLabel="Get a quote"
        primaryHref="/contact"
        secondaryLabel="More articles"
        secondaryHref="/blog"
        index="SIAL / 08"
      />

      <ContentBlockStyles />
    </main>
  );
}
