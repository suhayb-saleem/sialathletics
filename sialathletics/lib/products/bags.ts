import type { Family, OptionGroup } from './types';

/* Transcribed from the company portfolio (Company_portfolio.pdf, "Bags &
 * Covers" page). Nine named styles, split into two families: bags carried on
 * their own, and covers/sleeves that protect a single racket or paddle. */

export const bagFamilies: Family[] = [
  {
    id: 'kit-bags',
    title: 'Kit & Court Bags',
    tagline: 'Cut, printed and trimmed to your brand',
    blurb:
      'From a court backpack to a thermal tournament bag. Every style is cut, printed and trimmed to your brand, with your choice of shell fabric, lining and hardware.',
    models: [
      {
        code: 'bag-tournament-thermal',
        name: 'Tournament Kit Bag',
        image: '/images/products/bags/tournament-thermal.png',
        alt: 'SIAL Athletics tournament kit bag with a thermal compartment',
        specs: [['Feature', 'Thermal compartment']],
      },
      {
        code: 'bag-large-backpack-harness',
        name: 'Large Kit Bag',
        image: '/images/products/bags/large-backpack-harness.png',
        alt: 'SIAL Athletics large kit bag with a backpack harness',
        specs: [['Feature', 'Backpack harness']],
      },
      {
        code: 'bag-pickleball-vented',
        name: 'Pickleball Kit Bag',
        image: '/images/products/bags/pickleball-vented.png',
        alt: 'SIAL Athletics pickleball kit bag with a ventilated shoe compartment',
        specs: [['Feature', 'Ventilated shoe compartment']],
      },
      {
        code: 'bag-pro-racine-pu',
        name: 'Pro Kit Bag',
        image: '/images/products/bags/pro-racine-pu.png',
        alt: 'SIAL Athletics pro kit bag in a Racine PU synthetic leather shell',
        specs: [['Shell', 'Racine PU synthetic leather']],
      },
      {
        code: 'bag-shoulder-kit',
        name: 'Shoulder Kit Bag',
        image: '/images/products/bags/shoulder-kit-bag.png',
        alt: 'SIAL Athletics shoulder kit bag with an adjustable strap',
        specs: [['Carry', 'Single shoulder strap']],
      },
      {
        code: 'bag-court-backpack',
        name: 'Court Backpack',
        image: '/images/products/bags/court-backpack.png',
        alt: 'SIAL Athletics court backpack sized for a single paddle',
        specs: [['Carry', 'Backpack']],
      },
    ],
  },
  {
    id: 'racket-protection',
    title: 'Racket & Paddle Protection',
    tagline: 'Sleeves and covers for a single racket or paddle',
    blurb:
      'Single- and two-racket protection, from a padded zip sleeve to a full PU cover, cut and printed to your artwork.',
    models: [
      {
        code: 'bag-two-racket',
        name: 'Two-Racket Bag',
        image: '/images/products/bags/two-racket-bag.png',
        alt: 'SIAL Athletics two-racket bag with a carry handle',
        specs: [['Capacity', '2 rackets']],
      },
      {
        code: 'bag-racket-cover-pu',
        name: 'Racket Cover',
        image: '/images/products/bags/racket-cover-pu.png',
        alt: 'SIAL Athletics PU racket cover',
        specs: [['Shell', 'PU']],
      },
      {
        code: 'bag-padded-paddle-sleeve',
        name: 'Padded Paddle Sleeve',
        image: '/images/products/bags/padded-paddle-sleeve.png',
        alt: 'SIAL Athletics padded, zippered paddle sleeve',
        specs: [['Protection', 'Padded, zippered']],
      },
    ],
  },
];

/* Build options — transcribed from the same portfolio page. */
export const bagOptions: OptionGroup[] = [
  { title: 'Shell', items: ['Polyester / Nylon Blend', 'Kadora Heavy-Duty Nylon', 'Racine PU / PVC Synthetic Leather', 'Premium Synthetic Leather'] },
  { title: 'Protection', items: ['Thermotech Foil-Backed Lining', 'Closed-Cell EPE Foam', 'High-Density EVA Shock Padding', 'Isometric Thermal Wrap'] },
  { title: 'Compartment', items: ['Ventilated Shoe Compartment', 'Breathable Mesh & Eyelets', '210D / 420D Soft Lining', 'Isolated Wet-Gear Pocket'] },
  { title: 'Hardware', items: ['SBS Nylon Coil Zippers', 'Moulded Ergonomic Pullers', '3D Air-Mesh Shoulder Straps', 'EVA-Padded Lumbar Panel'] },
];
