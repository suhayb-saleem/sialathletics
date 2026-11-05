import type { Family, OptionGroup } from './types';

/* Every figure below is transcribed from the OEM pickleball catalogue.
 * Nothing here is estimated — if a spec is not in the catalogue it is not
 * shown. */

export const pickleballFamilies: Family[] = [
  {
    id: 'epp-pro',
    title: 'SA EPP Pro',
    tagline: 'EPP foam core · carbon fibre · 16 mm · elongated',
    blurb:
      'EPP foam core under a carbon fibre face. The narrower 18.5 cm width over full length gives the elongated profile: extra reach and leverage on the drive, with the sweet spot sitting higher in the face.',
    models: [
      {
        code: 'SA-PB-101',
        name: 'Volt Green',
        image: '/images/products/pickleball/custom-foam-core-pickleball-paddle-volt-green.png',
        alt: 'Custom foam core pickleball paddle, carbon fiber face with volt green graphics — OEM paddle by SIAL Athletics',
        specs: [['Core', 'EPP foam'], ['Face', 'carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Elongated'], ['Size', '18.5 × 41.9 cm'], ['Edge / grip', 'White bumper, green inserts, white grip']],
      },
      {
        code: 'SA-PB-102',
        name: 'Crimson White',
        image: '/images/products/pickleball/custom-foam-core-pickleball-paddle-crimson-white.png',
        alt: 'Elongated EPP foam core pickleball paddle with a 16 mm carbon fiber face, crimson and white',
        specs: [['Core', 'EPP foam'], ['Face', 'carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Elongated'], ['Size', '18.5 × 41.9 cm'], ['Edge / grip', 'White bumper, red inserts, white grip']],
      },
      {
        code: 'SA-PB-103',
        name: 'Red Halftone',
        image: '/images/products/pickleball/custom-foam-core-pickleball-paddle-red-halftone.png',
        alt: 'Carbon fiber pickleball paddle with red halftone graphics, private-label paddle made in Sialkot',
        specs: [['Core', 'EPP foam'], ['Face', 'carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Elongated'], ['Size', '18.5 × 41.9 cm'], ['Edge / grip', 'Black bumper, black grip']],
      },
    ],
  },
  {
    id: 'pp-classic',
    title: 'SA PP Classic',
    tagline: 'PP honeycomb core · carbon fibre · 16 mm · standard',
    blurb:
      'Polypropylene honeycomb core under a carbon fibre face. Softer, quieter and more absorbent at contact than foam, with a wider 19.1 cm face for a larger sweet spot.',
    models: [
      {
        code: 'SA-PB-201',
        name: 'Signature Red',
        image: '/images/products/pickleball/custom-honeycomb-pickleball-paddle-signature-red.png',
        alt: 'Custom honeycomb core pickleball paddle, carbon fiber face with red graphics — OEM paddle by SIAL Athletics',
        specs: [['Core', 'PP honeycomb'], ['Face', 'carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Standard'], ['Size', '19.1 × 41.9 cm'], ['Edge / grip', 'Black bumper, orange collar, black grip']],
      },
      {
        code: 'SA-PB-202',
        name: 'Cobalt Wave',
        image: '/images/products/pickleball/custom-honeycomb-pickleball-paddle-cobalt-wave.png',
        alt: 'PP honeycomb pickleball paddle with a 16 mm carbon fiber face and cobalt blue graphics',
        specs: [['Core', 'PP honeycomb'], ['Face', 'carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Standard'], ['Size', '19.1 × 41.9 cm'], ['Edge / grip', 'Blue bumper, white grip']],
      },
    ],
  },
  {
    id: 'open-frame',
    title: 'SA Open Frame',
    tagline: 'Open-throat frame · carbon fibre · 16 mm · standard',
    blurb:
      'An open throat cut into the yoke between face and handle. Removing material there drops swing weight and lets air pass through the frame on the swing, so the paddle comes round faster without losing face area. The most technical construction in the range.',
    models: [
      {
        code: 'SA-PB-301',
        name: 'Carbon Weave',
        image: '/images/products/pickleball/custom-open-throat-pickleball-paddle-carbon-weave.png',
        alt: 'Open-throat pickleball paddle with a woven carbon fiber face, custom OEM paddle',
        specs: [['Core', 'PP honeycomb'], ['Face', 'carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Standard'], ['Size', '19.1 × 41.9 cm'], ['Edge / grip', 'Open-throat frame, white bumper, black grip']],
      },
      {
        code: 'SA-PB-302',
        name: 'Cyan Edge',
        image: '/images/products/pickleball/custom-open-throat-pickleball-paddle-cyan-edge.png',
        alt: 'Custom open-throat carbon pickleball paddle with cyan linework, made in Sialkot',
        specs: [['Core', 'PP honeycomb'], ['Face', 'carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Standard'], ['Size', '19.1 × 41.9 cm'], ['Edge / grip', 'Open-throat frame, cyan linework, black grip']],
      },
      {
        code: 'SA-PB-303',
        name: 'Arctic White',
        image: '/images/products/pickleball/custom-open-throat-pickleball-paddle-arctic-white.png',
        alt: 'White open-throat pickleball paddle with black graphics, private-label carbon paddle by SIAL Athletics',
        specs: [['Core', 'PP honeycomb'], ['Face', 'carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Standard'], ['Size', '19.1 × 41.9 cm'], ['Edge / grip', 'Open-throat frame, white bumper, white grip']],
      },
    ],
  },
];

/* Build options — transcribed from page 1 of the pickleball catalogue. */
export const pickleballOptions: OptionGroup[] = [
  { title: 'Core', items: ['EPP Foam', 'PP Honeycomb'] },
  { title: 'Core Thickness', items: ['16 mm (standard)', '14 mm (on request)'] },
  { title: 'Face Material', items: ['3K Carbon Fibre', '12K Carbon Fibre', '18K Carbon Fibre', '24K Carbon Fibre', 'Woven Carbon', 'Sandblasted Carbon', 'Fiberglass', 'Kevlar Hybrid'] },
  { title: 'Shape & Size', items: ['Elongated 18.5 × 41.9 cm', 'Standard 19.1 × 41.9 cm', 'Widebody 20.3 × 40.6 cm', 'Custom Shape'] },
  { title: 'Construction', items: ['Thermoformed', 'Cold-Pressed', 'Foam-Injected Walls', 'Unibody Handle', 'Open-Throat Frame'] },
  { title: 'Surface Finish', items: ['Raw Peel-Ply', 'Sandblasting', '3D Texture', 'Matte', 'Gloss'] },
  { title: 'Branding & Print', items: ['Full-Face Sublimation', 'Screen Print', 'Water-Transfer Decals', 'Edge Guard Colour', 'Custom Grip', 'Retail Packaging'] },
];
