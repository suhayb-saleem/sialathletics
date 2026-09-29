import type { Family, Model } from './types';

/* Structured data for the per-category product pages. No price or
 * availability: these are build-to-order moulds, not retail SKUs.
 *
 * Mould codes are internal, so they are not published — not as text and not
 * as a `sku`. Padel moulds are unbranded blanks that differ only in
 * dimensions, so they are described once per shape family; pickleball
 * designs carry real colourway names and keep an entry each. */

export function padelFamilyJsonLd(family: Family) {
  const balance = family.models[0].specs.find(([k]) => k === 'Balance')?.[1] ?? '';
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `SIAL Athletics ${family.title} Padel Racket`,
    description: family.blurb,
    category: 'Padel Racket',
    brand: { '@type': 'Brand', name: 'SIAL Athletics' },
    image: `https://www.sialathletics.com${encodeURI(family.models[0].image)}`,
    additionalProperty: [
      ['Shape', family.title],
      ['Weight', '360 ±10 g'],
      ['Length', '455–460 mm'],
      ['Thickness', '36–38 mm'],
      ['Balance', balance],
    ].map(([name, value]) => ({ '@type': 'PropertyValue', name, value })),
  };
}

export function pickleballJsonLd(model: Model, family: Family) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `SIAL Athletics ${model.name} Pickleball Paddle`,
    description: family.blurb,
    category: 'Pickleball Paddle',
    brand: { '@type': 'Brand', name: 'SIAL Athletics' },
    image: `https://www.sialathletics.com${encodeURI(model.image)}`,
    additionalProperty: model.specs.map(([name, value]) => ({ '@type': 'PropertyValue', name, value })),
  };
}

/** Beach rackets, jerseys and bags all carry a real per-model name (unlike
 *  padel's anonymous moulds), so each gets its own Product entry the same
 *  way pickleball's does. One shared builder, parameterised by category. */
function namedModelJsonLd(model: Model, family: Family, category: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `SIAL Athletics ${model.name} ${category}`,
    description: family.blurb,
    category,
    brand: { '@type': 'Brand', name: 'SIAL Athletics' },
    image: `https://www.sialathletics.com${encodeURI(model.image)}`,
    additionalProperty: model.specs.map(([name, value]) => ({ '@type': 'PropertyValue', name, value })),
  };
}

export function beachJsonLd(model: Model, family: Family) {
  return namedModelJsonLd(model, family, 'Beach Racket');
}

export function jerseyJsonLd(model: Model, family: Family) {
  return namedModelJsonLd(model, family, 'Jersey');
}

export function bagJsonLd(model: Model, family: Family) {
  return namedModelJsonLd(model, family, 'Bag');
}
