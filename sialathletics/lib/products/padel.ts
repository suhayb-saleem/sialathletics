import type { Family, OptionGroup } from './types';

/* Every figure below is transcribed from the OEM padel catalogue
 * (SIAL_Athletics_OEM_Padel_Catalogue.pdf). Nothing here is estimated — if a
 * spec is not in the catalogue it is not shown. Each family lists the first
 * three moulds from its catalogue page. */

const PADEL_SHARED: [string, string][] = [
  ['Weight', '360 ±10 g'],
  ['Length', '455–460 mm'],
];

export const padelFamilies: Family[] = [
  {
    id: 'round',
    title: 'Round',
    tagline: 'Centred sweet spot · low balance · control',
    blurb:
      'Balanced, centred sweet spot and the most forgiving of the three families. Low balance point, control-oriented. Best suited to club, academy and rental programmes.',
    models: [
      {
        code: 'SA-4013',
        image: '/images/products/padel/custom-round-padel-racket-1.png',
        alt: 'Custom round padel racket, black carbon face with white hole detailing — OEM padel racket by SIAL Athletics',
        specs: [['Thickness', '38 mm'], ...PADEL_SHARED, ['Width', '260 mm'], ['Frame length', '90 cm'], ['Balance', 'Low']],
      },
      {
        code: 'SA-4015',
        image: '/images/products/padel/custom-round-padel-racket-2.png',
        alt: 'Round carbon padel racket with a compact hole pattern, private-label blank made in Sialkot',
        specs: [['Thickness', '38 mm'], ...PADEL_SHARED, ['Width', '260 mm'], ['Frame length', '91 cm'], ['Balance', 'Low']],
      },
      {
        code: 'SA-4018',
        image: '/images/products/padel/custom-round-padel-racket-3.png',
        alt: 'Round control padel racket with a 36 mm black carbon fiber face',
        specs: [['Thickness', '36 mm'], ...PADEL_SHARED, ['Width', '260 mm'], ['Frame length', '90 cm'], ['Balance', 'Low']],
      },
    ],
  },
  {
    id: 'teardrop',
    title: 'Teardrop',
    tagline: 'Sweet spot above centre · mid balance · all-round',
    blurb:
      'Sweet spot sits slightly above centre. Mid balance blends control and power. The broadest-appeal family for intermediate to advanced players.',
    models: [
      {
        code: 'SA-4003',
        image: '/images/products/padel/custom-teardrop-padel-racket-1.png',
        alt: 'Custom teardrop padel racket, black carbon face with red hole rings — OEM padel racket by SIAL Athletics',
        specs: [['Thickness', '38 mm'], ...PADEL_SHARED, ['Width', '260 mm'], ['Frame length', '90 cm'], ['Balance', 'Mid']],
      },
      {
        code: 'SA-4012',
        image: '/images/products/padel/custom-teardrop-padel-racket-2.png',
        alt: 'Teardrop carbon padel racket with a matte black face, private-label blank made in Sialkot',
        specs: [['Thickness', '38 mm'], ...PADEL_SHARED, ['Width', '260 mm'], ['Frame length', '91 cm'], ['Balance', 'Mid']],
      },
      {
        code: 'SA-4042',
        image: '/images/products/padel/custom-teardrop-padel-racket-3.png',
        alt: 'Teardrop all-round padel racket, black carbon fiber face on a 258 mm width',
        specs: [['Thickness', '38 mm'], ...PADEL_SHARED, ['Width', '258 mm'], ['Frame length', '89 cm'], ['Balance', 'Mid']],
      },
    ],
  },
  {
    id: 'diamond',
    title: 'Diamond',
    tagline: 'High sweet spot · high balance · power',
    blurb:
      'Sweet spot high in the head with a high balance point for maximum power on the smash. Aimed at advanced and competition-level play.',
    models: [
      {
        code: 'SA-4020',
        image: '/images/products/padel/custom-diamond-padel-racket-1.png',
        alt: 'Custom diamond padel racket, chequered carbon weave with a red throat — OEM padel racket by SIAL Athletics',
        specs: [['Thickness', '38 mm'], ...PADEL_SHARED, ['Width', '260 mm'], ['Frame length', '90 cm'], ['Balance', 'High']],
      },
      {
        code: 'SA-4029',
        image: '/images/products/padel/custom-diamond-padel-racket-2.png',
        alt: 'Diamond power padel racket, black carbon face with white hole detailing, made in Sialkot',
        specs: [['Thickness', '38 mm'], ...PADEL_SHARED, ['Width', '261 mm'], ['Frame length', '91 cm'], ['Balance', 'High']],
      },
      {
        code: 'SA-4043',
        image: '/images/products/padel/custom-diamond-padel-racket-3.png',
        alt: 'Diamond padel racket with a textured black carbon fiber face',
        specs: [['Thickness', '38 mm'], ...PADEL_SHARED, ['Width', '260 mm'], ['Frame length', '90 cm'], ['Balance', 'High']],
      },
    ],
  },
];

/* Build options — transcribed from page 1 of the padel catalogue. */
export const padelOptions: OptionGroup[] = [
  { title: 'Shape', items: ['Round', 'Teardrop', 'Diamond', 'Hybrid', 'Custom Mould'] },
  { title: 'Carbon Options', items: ['3K Carbon Fiber', '12K Carbon Fiber', '18K Carbon Fiber', '24K Carbon Fiber', 'Silver Carbon Fiber', 'Kevlar Carbon Hybrid'] },
  { title: 'Core Options', items: ['Black EVA (High-Density)', 'Soft EVA (13–15°)', 'Memory / High-Rebound EVA'] },
  { title: 'Frame Construction', items: ['Monoblock Carbon Frame', 'Carbon Frame + Glass Fiber Face', 'Reinforced Frame', 'Integrated Protectors', 'Composite Bonding'] },
  { title: 'Surface Textures', items: ['Smooth Finish', 'Sand Grit', '3D Grain', '3D Hexagon', 'Hybrid (Sand + 3D)'] },
  { title: 'Paint & Coating', items: ['Matte Finish', 'Glossy Finish', 'UV-Resistant Paint', 'Chameleon Paint', 'Metallic Decals', 'Water-Transfer Decals', 'High-Contrast Neon Colors', 'Sublimation'] },
];
