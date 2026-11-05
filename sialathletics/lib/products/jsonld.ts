import type { Family, Model } from './types';

/* Structured data for the per-category product pages. No price or
 * availability: these are build-to-order moulds, not retail SKUs.
 *
 * Mould codes are internal, so they are not published — not as text and not
 * as a `sku`. Padel moulds are unbranded blanks that differ only in
 * dimensions, so they are described once per shape family; pickleball
 * designs carry real colourway names and keep an entry each. */

// Ties every product back to the factory, so searches like "padel racket
// manufacturer Sialkot" can connect the product pages to the company.
const SIAL_ORG = {
  '@type': 'Organization',
  name: 'SIAL Athletics',
  url: 'https://www.sialathletics.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Sialkot', addressCountry: 'PK' },
};

export function padelFamilyJsonLd(family: Family) {
  const balance = family.models[0].specs.find(([k]) => k === 'Balance')?.[1] ?? '';
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Custom ${family.title} Padel Racket — OEM & Private Label`,
    description: `${family.blurb} Carbon fiber ${family.title.toLowerCase()} padel racket made to order with your logo by SIAL Athletics, a padel racket manufacturer in Sialkot, Pakistan.`,
    category: 'Sporting Goods > Racket Sports > Padel Rackets',
    brand: { '@type': 'Brand', name: 'SIAL Athletics' },
    manufacturer: SIAL_ORG,
    material: 'Carbon fiber, EVA foam',
    image: family.models.map((m) => `https://www.sialathletics.com${encodeURI(m.image)}`),
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
    manufacturer: SIAL_ORG,
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
    manufacturer: SIAL_ORG,
    image: `https://www.sialathletics.com${encodeURI(model.image)}`,
    additionalProperty: model.specs.map(([name, value]) => ({ '@type': 'PropertyValue', name, value })),
  };
}

export function beachJsonLd(model: Model, family: Family) {
  return namedModelJsonLd(model, family, 'Beach Racket');
}

// Jerseys are listed as padel clothing because that is how buyers search
// for them; the same kit also suits pickleball and beach clubs.
export function jerseyJsonLd(model: Model, family: Family) {
  return {
    ...namedModelJsonLd(model, family, 'Padel Jersey'),
    name: `Custom Padel Jersey — ${model.name}`,
    description: `${family.blurb} Custom padel clothing and teamwear made to order with your logo by SIAL Athletics in Sialkot, Pakistan.`,
    category: 'Apparel & Accessories > Clothing > Activewear > Padel Jerseys',
    material: model.specs.find(([k]) => k === 'Material')?.[1],
    audience: { '@type': 'Audience', audienceType: 'Padel clubs, academies and sports brands' },
  };
}

export function bagJsonLd(model: Model, family: Family) {
  return namedModelJsonLd(model, family, 'Bag');
}
