import type { Family, OptionGroup } from './types';

/* Every figure below is transcribed from the OEM pickleball catalogue.
 * Nothing here is estimated — if a spec is not in the catalogue it is not
 * shown. */

export const pickleballFamilies: Family[] = [
  {
    id: 'epp-pro',
    title: 'SA EPP Pro',
    tagline: 'EPP foam core · T700 carbon fibre · 16 mm · elongated',
    blurb:
      'EPP foam core under a T700 carbon fibre face. The narrower 18.5 cm width over full length gives the elongated profile: extra reach and leverage on the drive, with the sweet spot sitting higher in the face.',
    models: [
      {
        code: 'SA-PB-101',
        name: 'Volt Green',
        image: '/images/products/pickleball/volt-green.png',
        alt: 'SIAL Athletics Volt Green pickleball paddle, black face with green graphics and white grip',
        specs: [['Core', 'EPP foam'], ['Face', 'T700 carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Elongated'], ['Size', '18.5 × 41.9 cm'], ['Edge / grip', 'White bumper, green inserts, white grip']],
      },
      {
        code: 'SA-PB-102',
        name: 'Crimson White',
        image: '/images/products/pickleball/crimson-white.png',
        alt: 'SIAL Athletics Crimson White pickleball paddle, black face with red graphics and white grip',
        specs: [['Core', 'EPP foam'], ['Face', 'T700 carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Elongated'], ['Size', '18.5 × 41.9 cm'], ['Edge / grip', 'White bumper, red inserts, white grip']],
      },
      {
        code: 'SA-PB-103',
        name: 'Red Halftone',
        image: '/images/products/pickleball/red-halftone.png',
        alt: 'SIAL Athletics Red Halftone pickleball paddle, black face with red halftone graphics',
        specs: [['Core', 'EPP foam'], ['Face', 'T700 carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Elongated'], ['Size', '18.5 × 41.9 cm'], ['Edge / grip', 'Black bumper, black grip']],
      },
    ],
  },
  {
    id: 'pp-classic',
    title: 'SA PP Classic',
    tagline: 'PP honeycomb core · T700 carbon fibre · 16 mm · standard',
    blurb:
      'Polypropylene honeycomb core under a T700 carbon fibre face. Softer, quieter and more absorbent at contact than foam, with a wider 19.1 cm face for a larger sweet spot.',
    models: [
      {
        code: 'SA-PB-201',
        name: 'Signature Red',
        image: '/images/products/pickleball/signature-red.png',
        alt: 'SIAL Athletics Signature Red pickleball paddle, black face with red graphics and orange collar',
        specs: [['Core', 'PP honeycomb'], ['Face', 'T700 carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Standard'], ['Size', '19.1 × 41.9 cm'], ['Edge / grip', 'Black bumper, orange collar, black grip']],
      },
      {
        code: 'SA-PB-202',
        name: 'Cobalt Wave',
        image: '/images/products/pickleball/cobalt-wave.png',
        alt: 'SIAL Athletics Cobalt Wave pickleball paddle, dark face with blue graphics and white grip',
        specs: [['Core', 'PP honeycomb'], ['Face', 'T700 carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Standard'], ['Size', '19.1 × 41.9 cm'], ['Edge / grip', 'Blue bumper, white grip']],
      },
    ],
  },
  {
    id: 'open-frame',
    title: 'SA Open Frame',
    tagline: 'Open-throat frame · T700 carbon fibre · 16 mm · standard',
    blurb:
      'An open throat cut into the yoke between face and handle. Removing material there drops swing weight and lets air pass through the frame on the swing, so the paddle comes round faster without losing face area. The most technical construction in the range.',
    models: [
      {
        code: 'SA-PB-301',
        name: 'Carbon Weave',
        image: '/images/products/pickleball/carbon-weave.png',
        alt: 'SIAL Athletics Carbon Weave open-throat pickleball paddle with woven carbon face',
        specs: [['Core', 'PP honeycomb'], ['Face', 'T700 carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Standard'], ['Size', '19.1 × 41.9 cm'], ['Edge / grip', 'Open-throat frame, white bumper, black grip']],
      },
      {
        code: 'SA-PB-302',
        name: 'Cyan Edge',
        image: '/images/products/pickleball/cyan-edge.png',
        alt: 'SIAL Athletics Cyan Edge open-throat pickleball paddle with cyan linework',
        specs: [['Core', 'PP honeycomb'], ['Face', 'T700 carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Standard'], ['Size', '19.1 × 41.9 cm'], ['Edge / grip', 'Open-throat frame, cyan linework, black grip']],
      },
      {
        code: 'SA-PB-303',
        name: 'Arctic White',
        image: '/images/products/pickleball/arctic-white.png',
        alt: 'SIAL Athletics Arctic White open-throat pickleball paddle, white face with black graphics',
        specs: [['Core', 'PP honeycomb'], ['Face', 'T700 carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Standard'], ['Size', '19.1 × 41.9 cm'], ['Edge / grip', 'Open-throat frame, white bumper, white grip']],
      },
    ],
  },
];

/* Build options — transcribed from page 1 of the pickleball catalogue. */
export const pickleballOptions: OptionGroup[] = [
  { title: 'Core', items: ['EPP Foam', 'PP Honeycomb'] },
  { title: 'Core Thickness', items: ['16 mm (standard)', '14 mm (on request)'] },
  { title: 'Face Material', items: ['T700 Carbon Fibre', 'Woven T700', 'Sandblasted T700', 'Fiberglass', 'Kevlar Hybrid'] },
  { title: 'Shape & Size', items: ['Elongated 18.5 × 41.9 cm', 'Standard 19.1 × 41.9 cm', 'Widebody 20.3 × 40.6 cm', 'Custom Shape'] },
  { title: 'Construction', items: ['Thermoformed', 'Cold-Pressed', 'Foam-Injected Walls', 'Unibody Handle', 'Open-Throat Frame'] },
  { title: 'Surface Finish', items: ['Raw Peel-Ply', 'Sandblasting', '3D Texture', 'Matte', 'Gloss'] },
  { title: 'Branding & Print', items: ['Full-Face Sublimation', 'Screen Print', 'Water-Transfer Decals', 'Edge Guard Colour', 'Custom Grip', 'Retail Packaging'] },
];
