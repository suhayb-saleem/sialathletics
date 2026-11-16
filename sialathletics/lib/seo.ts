import type { Metadata } from 'next';

const BASE = 'https://www.sialathletics.com';

// Mirrors the visible breadcrumb in PageHero (Home / <crumb>) as schema —
// only used on pages that actually render that breadcrumb in the UI.
export function breadcrumbJsonLd(crumb: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: crumb, item: `${BASE}${path}` },
    ],
  };
}

/** Breadcrumb for a page nested one level deeper: Home / Guides / <title>. */
export function nestedBreadcrumbJsonLd(

  parent: { name: string; path: string },
  child: { name: string; path: string },
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: parent.name, item: `${BASE}${parent.path}` },
      { '@type': 'ListItem', position: 3, name: child.name, item: `${BASE}${child.path}` },
    ],
  };
}

const SITE_NAME = 'SIAL Athletics';
const SHARE_IMAGE = { url: '/images/og-card.png', width: 1200, height: 630, alt: 'SIAL Athletics — padel racket and pickleball paddle manufacturer' };

/** Adds link-preview tags (Open Graph and Twitter) to a page's metadata.
 *
 *  Without this a page inherits the root layout's tags, so every page shared
 *  on WhatsApp, LinkedIn or Facebook showed the home page's title and URL.
 *  The preview title and description follow the page's own, unless the page
 *  sets `openGraph.title` / `description` / `images` to say something else. */
export function withShare(pagePath: string, meta: Metadata): Metadata {
  const t = meta.title;
  const pageTitle =
    typeof t === 'string' ? `${t} — ${SITE_NAME}` : t && typeof t === 'object' && 'absolute' in t ? t.absolute : SITE_NAME;
  const own = (meta.openGraph ?? {}) as { title?: string; description?: string; images?: { url: string; alt?: string }[] };
  const title = own.title ?? pageTitle;
  const description = own.description ?? meta.description ?? undefined;
  const images = own.images ?? [SHARE_IMAGE];
  return {
    ...meta,
    openGraph: { type: 'website', siteName: SITE_NAME, locale: 'en', url: `${BASE}${pagePath}`, title, description, images },
    twitter: { card: 'summary_large_image', title, description, images: images.map((i) => i.url) },
  };
}

/** A list of pages (product categories, blog posts) as schema.org ItemList. */
export function itemListJsonLd(name: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: `${BASE}${item.path}`,
    })),
  };
}
