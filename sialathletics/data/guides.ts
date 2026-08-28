// Buyer-education guides. Every figure here comes from the specs already
// published elsewhere on this site (data/faq.ts and the catalogue platform
// data) — nothing is invented. If a spec changes, update it in both places.

export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; head: [string, string]; rows: [string, string][] };

export type GuideSection = {
  h: string;
  blocks: GuideBlock[];
};

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  summary: string;
  /** Answer-first opening — states the conclusion before the detail. */
  lede: string;
  sections: GuideSection[];
  related: { label: string; href: string }[];
};

export const guides: Guide[] = [
  {
    slug: 'oem-vs-odm-padel-manufacturing',
    title: 'OEM vs ODM: how to choose a padel racket manufacturer',
    metaTitle: 'OEM vs ODM Padel Racket Manufacturing — Which to Choose',
    metaDescription:
      'OEM means we build your design; ODM means you brand one of ours. A practical guide to choosing between them, with real MOQs, lead times, and costs.',
    eyebrow: 'Buyer guide',
    summary: 'The practical difference between the two, and which one fits a new brand.',
    lede:
      'OEM means you supply the design and the factory builds exactly to it. ODM means you start from a shape the factory already tools and add your own branding. For most new brands, ODM is faster and cheaper to launch; OEM makes sense once you need a product no one else can copy.',
    sections: [
      {
        h: 'What OEM actually means',
        blocks: [
          {
            type: 'p',
            text: 'In an OEM (original equipment manufacturer) program, you own the design. You send technical drawings or CAD files with your measurements, tolerances, and material specification, and the factory builds to that spec. If the shape does not exist yet, a new mold is developed for it — at SIAL Athletics a new mold reaches a physical prototype in 3-4 weeks.',
          },
          {
            type: 'p',
            text: 'OEM gives you a product that is genuinely yours, which matters if you are building a brand around a specific playing characteristic. The trade-off is cost and time: mold development is an upfront investment, and you carry the risk of the design being right.',
          },
        ],
      },
      {
        h: 'What ODM actually means',
        blocks: [
          {
            type: 'p',
            text: 'In an ODM (original design manufacturer) program, you select an existing, proven shape and customize everything visible: carbon grade, core, surface texture, weight, balance, graphics, colorways, grip, edge guard branding, and retail packaging. The mold already exists, so there is no tooling cost and no tooling delay.',
          },
          {
            type: 'p',
            text: 'This is how most brands launch. You are not buying a generic product — two brands can build on the same shape and end up with rackets that play and look completely differently, because the carbon grade and core do most of the work.',
          },
        ],
      },
      {
        h: 'Side by side',
        blocks: [
          {
            type: 'table',
            head: ['', 'OEM / ODM at a glance'],
            rows: [
              ['Who designs it', 'OEM: you. ODM: you pick an existing shape and specify the build.'],
              ['Tooling cost', 'OEM: new mold may be required. ODM: none — the mold exists.'],
              ['Time to first sample', 'Both 3-4 weeks from specification approval; a new OEM mold also reaches prototype in 3-4 weeks.'],
              ['Exclusivity', 'OEM: the shape is yours. ODM: the shape is shared, your spec and branding are not.'],
              ['Best for', 'OEM: established brands with a specific design. ODM: new lines, faster launches, testing a market.'],
            ],
          },
        ],
      },
      {
        h: 'What to ask any manufacturer before you commit',
        blocks: [
          {
            type: 'p',
            text: 'The answers below are ours. Ask the same questions of anyone you are comparing — vague answers on MOQ, lead time, or QC usually mean the factory is a trading company reselling someone else\'s production.',
          },
          {
            type: 'list',
            items: [
              'What is the real minimum order quantity? Ours is 24 units for padel rackets and 50 units for pickleball paddles.',
              'Can I order a sample first? Yes — 1-5 units at a higher per-unit cost, credited toward a confirmed bulk order.',
              'How long from approved spec to delivered bulk order? Samples in 3-4 weeks, then 30-45 days for production after sample approval and deposit.',
              'What are the payment terms? Ours are 30% upfront by bank transfer, 70% before shipment. Letter of Credit for larger or repeat orders.',
              'What quality documentation comes with the order? Every batch ships with a QC report covering tested samples and pass rates.',
              'Which shipping terms? We default to FOB Karachi, with EXW Sialkot available on request.',
            ],
          },
        ],
      },
      {
        h: 'Which one should you pick?',
        blocks: [
          {
            type: 'p',
            text: 'If you are launching a first line, testing a new market, or need stock on a shelf this season, start with ODM. You avoid tooling cost, you get to market faster, and the product is still specified and branded entirely by you.',
          },
          {
            type: 'p',
            text: 'Move to OEM when you have proven demand and need a shape competitors cannot order. Many brands run both: an ODM core range for volume, with one OEM flagship on a mold of their own.',
          },
        ],
      },
    ],
    related: [
      { label: 'See our manufacturing capabilities', href: '/manufacturing' },
      { label: 'Browse platforms and specs', href: '/catalogue' },
      { label: 'Get a factory quote', href: '/contact' },
    ],
  },
  {
    slug: 'custom-padel-racket-manufacturing',
    title: 'Custom padel racket manufacturing: shapes, carbon grades and MOQs',
    metaTitle: 'Custom Padel Racket Manufacturing — Shapes, Carbon & MOQ',
    metaDescription:
      'What is actually customizable on a padel racket: round, teardrop and diamond shapes, 3K-24K carbon, EVA cores, weight and balance ranges, and real MOQs.',
    eyebrow: 'Buyer guide',
    summary: 'Every spec you choose when ordering a custom padel racket line.',
    lede:
      'A custom padel racket is defined by four decisions: shape, face material, core, and surface texture. Together they set how the racket plays and what it costs. Everything below is selectable on a production order, with a minimum of 24 units.',
    sections: [
      {
        h: 'Shape sets the playing character',
        blocks: [
          {
            type: 'p',
            text: 'Shape determines where the sweet spot sits and how the weight swings. It is the first decision because it defines who the racket is for.',
          },
          {
            type: 'list',
            items: [
              'Round — the largest sweet spot and the most forgiving. The control shape, and the usual base for club, academy, and beginner lines.',
              'Teardrop — a balance of control and power, and the most versatile. The most common choice for a flagship model.',
              'Diamond — head-weighted with a higher sweet spot, for aggressive attacking play. Built for advanced and competition lines.',
              'Hybrid — a blended geometry developed around your target play profile, sitting anywhere between round and diamond.',
            ],
          },
          {
            type: 'p',
            text: 'If none of these fit, a fully custom mold can be developed, with a physical prototype in 3-4 weeks.',
          },
        ],
      },
      {
        h: 'Carbon grade sets stiffness, feel and price',
        blocks: [
          {
            type: 'p',
            text: 'The face material is the single biggest driver of both playing feel and unit cost. Carbon is specified by weave grade — the number refers to how many filaments are in each fibre tow, which changes the surface pattern and the stiffness.',
          },
          {
            type: 'list',
            items: [
              '3K carbon — a tighter weave, softer response, and the most accessible price point.',
              '12K and 18K carbon — the middle of the range, balancing stiffness against cost.',
              '24K carbon — the stiffest and most responsive, for premium and competition-tier products.',
              'Fiberglass-carbon hybrid and Kevlar-carbon blends — alternative layups where you want a specific feel or price target.',
            ],
          },
        ],
      },
      {
        h: 'The core sets how it feels at contact',
        blocks: [
          {
            type: 'p',
            text: 'The EVA foam core determines whether the racket feels plush and controlled or firm and explosive. Three options cover most requirements:',
          },
          {
            type: 'list',
            items: [
              'Black high-density EVA — firmer, more power, holds its properties over long play.',
              'Soft EVA at 13-15° hardness — more dwell time and control, easier on the arm.',
              'Memory / high-rebound EVA — recovers shape quickly for a livelier response.',
            ],
          },
        ],
      },
      {
        h: 'Surface texture sets spin',
        blocks: [
          {
            type: 'p',
            text: 'Texture is molded directly into the frame rather than sprayed on as a coating, so it does not wear off with use. Options include 3D grain, 3D hexagon mold, sand grit, and 3D decals.',
          },
        ],
      },
      {
        h: 'Weight, balance and finishing',
        blocks: [
          {
            type: 'table',
            head: ['Specification', 'Available range'],
            rows: [
              ['Weight', '350-380g'],
              ['Balance', '260-275mm (low, mid, or high)'],
              ['Frame shape', 'Round, teardrop, diamond, hybrid, or a custom mold'],
              ['Face material', '3K / 12K / 18K / 24K carbon, fiberglass-carbon hybrid, Kevlar-carbon blend'],
              ['Core', 'Black high-density EVA, soft EVA 13-15°, memory high-rebound EVA'],
              ['Texture', '3D grain, 3D hexagon, sand grit, 3D decals'],
            ],
          },
          {
            type: 'p',
            text: 'On top of the build, you specify graphics, colorways, grip options, edge guard branding, and retail-ready packaging — gift boxes, hang tags, QR code labels, or poly bags.',
          },
        ],
      },
      {
        h: 'Minimums, samples and timing',
        blocks: [
          {
            type: 'p',
            text: 'The minimum order is 24 units for padel rackets. Sample orders of 1-5 units are available at a higher per-unit cost, and the sample cost may be credited toward a confirmed bulk order.',
          },
          {
            type: 'p',
            text: 'Physical samples take 3-4 weeks from specification approval — photos and weight specs are sent for review before the sample ships. Bulk production runs 30-45 days after sample approval and deposit. You can also combine padel rackets and pickleball paddles, and multiple models within each, in a single program.',
          },
        ],
      },
    ],
    related: [
      { label: 'Configure a spec and request a quote', href: '/catalogue' },
      { label: 'How we manufacture', href: '/manufacturing' },
      { label: 'Full buyer FAQ', href: '/faq' },
    ],
  },
  {
    slug: 'how-pickleball-paddles-are-manufactured',
    title: 'How pickleball paddles are manufactured',
    metaTitle: 'How Pickleball Paddles Are Manufactured — OEM Guide',
    metaDescription:
      'How a pickleball paddle is built: face materials, polypropylene honeycomb cores, 13-16mm thickness, edge construction, and the QC checks before shipment.',
    eyebrow: 'Buyer guide',
    summary: 'From face material and core thickness through to batch inspection.',
    lede:
      'A pickleball paddle is a face material bonded to a honeycomb core, finished with an edge guard and grip. The face sets power and spin, the core thickness sets feel, and the bond between them determines how long the paddle lasts. Minimum order is 50 units.',
    sections: [
      {
        h: 'The face: carbon or fiberglass',
        blocks: [
          {
            type: 'p',
            text: 'The face is the hitting surface and the main lever on how the paddle plays. Carbon fiber gives a firmer, more controlled response with more bite for spin; fiberglass flexes more and returns more power off the face. Face material is specified per model, so a range can carry both.',
          },
        ],
      },
      {
        h: 'The core: polypropylene honeycomb',
        blocks: [
          {
            type: 'p',
            text: 'Under the face sits a polypropylene honeycomb core. The cell structure absorbs and returns energy, and its thickness is the biggest single influence on feel:',
          },
          {
            type: 'list',
            items: [
              '13mm — the thinnest option. Firmer and faster, favouring drive, speed and put-aways.',
              '14mm — a middle ground, keeping pop without losing touch.',
              '16mm — the thickest. More dwell time, more control, best for the soft game and placement.',
            ],
          },
        ],
      },
      {
        h: 'Shape, edge and grip',
        blocks: [
          {
            type: 'p',
            text: 'Paddle shape — including elongated profiles that extend reach at the cost of a narrower face — is selected alongside the core. Edge construction and grip are then specified to finish the build.',
          },
          {
            type: 'list',
            items: [
              'Edge guard, with branding applied to the guard itself if required.',
              'Grip size and wrap, chosen to suit the target player.',
              'Full surface graphics, colorways and logo placement.',
            ],
          },
        ],
      },
      {
        h: 'Quality control before anything ships',
        blocks: [
          {
            type: 'p',
            text: 'Every batch passes a fixed inspection sequence rather than a spot check. The sequence is the same on every run:',
          },
          {
            type: 'list',
            items: [
              'Surface roughness and finish consistency checks.',
              'Deflection and compression testing.',
              'Weight consistency held to ±0.1oz.',
              'Edge guard seal and adhesion testing.',
              'Handle torque strength testing.',
              'Visual inspection with zero defect tolerance.',
            ],
          },
          {
            type: 'p',
            text: 'Every production order ships with a batch-level QC report documenting tested samples, pass rates, and any corrective actions taken during the run. If a manufacturing defect appears after delivery, it can be reported within 30 days with photos and batch records.',
          },
        ],
      },
      {
        h: 'Packing and delivery',
        blocks: [
          {
            type: 'p',
            text: 'Each paddle is individually protected in its retail packaging, then packed into export-grade cartons prepared for palletized freight, so stock arrives shelf-ready. We ship worldwide — North America, Europe, the Middle East, Asia-Pacific, Latin America and Africa — FOB Karachi by default, or EXW Sialkot on request.',
          },
          {
            type: 'p',
            text: 'Minimum order is 50 units for pickleball paddles. Samples take 3-4 weeks from specification approval, and bulk production runs 30-45 days after sample approval and deposit.',
          },
        ],
      },
    ],
    related: [
      { label: 'See pickleball platforms', href: '/catalogue#pickleball' },
      { label: 'How we manufacture', href: '/manufacturing' },
      { label: 'Get a quote', href: '/contact' },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
