import type { Family } from './types';

/* Structured data for the per-category product pages.
 *
 * These pages are deliberately NOT marked up as schema.org `Product`.
 * Google's product snippets require an `offers` (with a real price),
 * `review` or `aggregateRating`, and every Product without one is reported
 * as an invalid item in Search Console. Our lines are build-to-order with
 * no published price, so a Product entry can never be valid — and inventing
 * a price or reviews to satisfy it would break Google's guidelines.
 *
 * Instead each page is a `CollectionPage` published by the factory, with
 * every product photo as an `ImageObject`. That describes the page
 * accurately, carries the same keywords (names, captions, description),
 * and uses Google's image metadata, which helps the photos in Google Images.
 * None of it is eligible for an error in the Product snippets report.
 *
 * Mould codes are internal, so they are not published. */

const SITE = 'https://www.sialathletics.com';

const SIAL_ORG = {
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'SIAL Athletics',
  url: SITE,
  logo: `${SITE}/images/logo-dark.png`,
  address: { '@type': 'PostalAddress', addressLocality: 'Sialkot', addressCountry: 'PK' },
};

type CategoryPage = {
  path: string;
  /** What the page is about, phrased the way buyers search for it. */
  topic: string;
  title: string;
  description: string;
  families: Family[];
};

export function categoryPageJsonLd({ path, topic, title, description, families }: CategoryPage) {
  const images = families.flatMap((f) =>
    f.models.map((m) => ({
      '@type': 'ImageObject',
      contentUrl: `${SITE}${encodeURI(m.image)}`,
      name: m.name ? `${f.title} ${m.name}` : `${topic} — ${f.title}`,
      caption: m.alt,
      creator: { '@id': SIAL_ORG['@id'] },
      creditText: 'SIAL Athletics',
      copyrightNotice: '© SIAL Athletics',
    })),
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE}${path}#page`,
    url: `${SITE}${path}`,
    name: title,
    description,
    inLanguage: 'en',
    isPartOf: { '@type': 'WebSite', name: 'SIAL Athletics', url: SITE },
    about: { '@type': 'Thing', name: topic },
    publisher: SIAL_ORG,
    primaryImageOfPage: images[0],
    image: images,
  };
}
