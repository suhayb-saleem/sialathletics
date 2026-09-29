import type { Family, OptionGroup } from './types';

/* Transcribed from the company portfolio (Company_portfolio.pdf, "Beach
 * Rackets" page). The portfolio shows four example finishes rather than
 * per-model codes, so each is listed by its finish rather than a mould
 * reference. Shared dimensions come from the same page. */

const BEACH_SHARED: [string, string][] = [
  ['Weight', '300–350 g'],
  ['Size', 'Up to 500 × 260 mm (ITF)'],
  ['Thickness', '20–22 mm typical'],
];

export const beachFamilies: Family[] = [
  {
    id: 'beach-rackets',
    title: 'Beach Rackets',
    tagline: 'Same carbon lay-ups as our padel range · built to spec',
    blurb:
      'Beach tennis rackets built on the same carbon lay-ups as our padel range, with your choice of face, core, finish and artwork.',
    models: [
      {
        code: 'beach-plain-weave-gloss',
        name: 'Plain-Weave Gloss',
        image: '/images/products/beach/plain-weave-gloss.png',
        alt: 'SIAL Athletics beach racket, 12K plain-weave carbon face with a gloss finish',
        specs: [['Face', '12K carbon, plain-weave'], ['Surface', 'Gloss'], ...BEACH_SHARED],
      },
      {
        code: 'beach-twill-weave-gloss',
        name: 'Twill-Weave Gloss',
        image: '/images/products/beach/twill-weave-gloss.png',
        alt: 'SIAL Athletics beach racket, twill-weave carbon face with a gloss finish',
        specs: [['Face', 'Carbon, twill-weave'], ['Surface', 'Gloss'], ...BEACH_SHARED],
      },
      {
        code: 'beach-textured-matte',
        name: 'Textured Matte',
        image: '/images/products/beach/textured-matte.png',
        alt: 'SIAL Athletics beach racket with a textured matte finish',
        specs: [['Surface', 'Textured matte finish'], ...BEACH_SHARED],
      },
      {
        code: 'beach-3k-soft-eva-printed',
        name: '3K Soft EVA',
        image: '/images/products/beach/3k-soft-eva-printed.png',
        alt: 'SIAL Athletics branded beach racket, 3K carbon face with a soft EVA core and printed graphics',
        specs: [['Face', '3K carbon'], ['Core', 'Soft EVA'], ['Branding', 'Printed'], ...BEACH_SHARED],
      },
    ],
  },
];

/* Build options. Face is transcribed from the portfolio's beach racket page;
 * Core, Surface and Branding are shared with the padel racket page
 * (lib/products/padel.ts) since beach rackets are built on the same carbon
 * lay-ups and go through the same core, texture and paint processes. */
export const beachOptions: OptionGroup[] = [
  { title: 'Face', items: ['3K Carbon', '12K Carbon', '18K Carbon', '24K Carbon'] },
  { title: 'Core', items: ['Black EVA (High-Density)', 'Soft EVA (13–15°)', 'Memory / High-Rebound EVA'] },
  { title: 'Surface', items: ['Smooth Finish', 'Sand Grit', '3D Grain', '3D Hexagon', 'Hybrid (Sand + 3D)'] },
  { title: 'Branding', items: ['Matte Finish', 'Glossy Finish', 'UV-Resistant Paint', 'Chameleon Paint', 'Metallic Decals', 'Water-Transfer Decals', 'High-Contrast Neon Colors', 'Sublimation'] },
];
