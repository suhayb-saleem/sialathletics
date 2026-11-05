import type { Family, OptionGroup } from './types';

/* Transcribed from the company portfolio (Company_portfolio.pdf, "Jerseys &
 * Apparel" page). Four production blocks, each with its own material, fit,
 * neck and finish. */

export const jerseyFamilies: Family[] = [
  {
    id: 'team-jerseys',
    title: 'Team Jerseys',
    tagline: 'Full-sublimation kit · your colourway, artwork and numbering',
    blurb:
      'Full-sublimation kit built to the same brand identity as the hardware. Four production blocks, each available in your own colourway, artwork, numbering and sponsor placement.',
    models: [
      {
        code: 'jersey-black-red-crew',
        name: 'Black / Red — Crew Neck',
        image: '/images/products/jerseys/custom-padel-jersey-black-red-crew.webp',
        alt: 'Custom sublimated padel jersey, black and red crew neck in moisture-wicking polyester, made by SIAL Athletics',
        specs: [
          ['Material', '100% polyester interlock, moisture wicking'],
          ['Fit', 'Athletic / slim'],
          ['Neck', 'Crew, contrast rib collar and cuff'],
          ['Finish', 'Full sublimation'],
        ],
      },
      {
        code: 'jersey-white-red-vneck',
        name: 'White / Red — V-Neck',
        image: '/images/products/jerseys/custom-padel-jersey-white-red-vneck.webp',
        alt: 'White and red V-neck padel shirt with full sublimation print, custom team jersey by SIAL Athletics',
        specs: [
          ['Material', '100% polyester interlock'],
          ['Fit', 'Athletic / slim'],
          ['Neck', 'V-neck with contrast collar'],
          ['Finish', 'Full sublimation'],
        ],
      },
      {
        code: 'jersey-blue-crew-mesh',
        name: 'Blue — Crew, Mesh Panels',
        image: '/images/products/jerseys/custom-padel-jersey-blue-mesh.webp',
        alt: 'Blue sublimated padel jersey with breathable mesh side panels, custom padel clothing for clubs',
        specs: [
          ['Material', 'Polyester interlock + mesh panels'],
          ['Fit', 'Athletic / slim'],
          ['Neck', 'Crew, contrast rib collar and cuff'],
          ['Finish', 'Full sublimation'],
        ],
      },
      {
        code: 'jersey-navy-white-polo',
        name: 'Navy / White — Polo',
        image: '/images/products/jerseys/custom-padel-polo-navy-white.webp',
        alt: 'Navy and white padel polo shirt in polyester pique with an embroidered logo, custom padel clothing',
        specs: [
          ['Material', 'Polyester pique, breathable'],
          ['Fit', 'Athletic / regular'],
          ['Neck', 'Polo collar, three buttons'],
          ['Finish', 'Embroidered logo or print'],
        ],
      },
    ],
  },
];

/* Build options — transcribed from the same portfolio page. */
export const jerseyOptions: OptionGroup[] = [
  { title: 'Fabrics & Finishes', items: ['Polyester Interlock', 'Polyester Pique', 'Mesh Panel', 'Full Sublimation', 'Embroidery', 'Rib Trim'] },
  { title: 'Garment Types', items: ['Shirts', 'Shorts', 'Polos', 'Tracksuits'] },
  { title: 'Print Methods', items: ['Sublimation', 'Screen Print', 'Embroidery'] },
  { title: 'Sizing', items: ['Men', 'Women', 'Junior', 'Custom Sets'] },
];
