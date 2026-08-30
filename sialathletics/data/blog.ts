import type { ContentBlock } from '@/components/content/ContentBlocks';

// Blog posts. Every specification quoted here (MOQs, lead times, carbon
// grades, EVA hardness, core thickness, QC sequence, shipping terms) comes
// from data/faq.ts or the catalogue platform data — nothing is invented.
//
// Imagery is mostly licensed stock under /images/blog (Unsplash licence:
// free for commercial use, no attribution required), kept separate from the
// photography used elsewhere on the site. Five slots deliberately still use
// our own images because no stock equivalent carries the same information:
// the labelled carbon-grade, EVA-density and texture comparisons, the real
// deflection test rig, and the padel shape render. Alt text must describe
// what a photo actually shows — do not imply stock photos are our facility.
//
// All posts share one publication date because the library was published in
// one go. Do not back-date new posts; set the date they actually go live.

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  date: string; // ISO, used for both display and schema
  /** Answer-first summary — also used as the card blurb. */
  summary: string;
  hero: { src: string; alt: string };
  blocks: ContentBlock[];
  related: { label: string; href: string }[];
};

const PUBLISHED = '2026-08-28';

export const posts: BlogPost[] = [
  {
    slug: 'why-sialkot-makes-the-worlds-sporting-goods',
    title: "Why Sialkot makes so much of the world's sporting goods",
    metaTitle: "Why Sialkot Makes the World's Sporting Goods",
    metaDescription:
      'Sialkot has built sports equipment for over a century. Why the city became a global manufacturing hub, and what that means when you source padel rackets there.',
    category: 'Sourcing',
    date: PUBLISHED,
    summary:
      'A city of roughly a million people supplies sports equipment to brands worldwide. The reason is accumulated skill, not cheap labour.',
    hero: {
      src: '/images/blog/factory-floor.jpg',
      alt: 'Worker operating press machinery on an industrial factory production floor',
    },
    blocks: [
      {
        type: 'p',
        text: 'If you have sourced sports equipment before, you have probably been quoted by a company in Sialkot without necessarily knowing where it was. The city sits in the north-east of Punjab, Pakistan, and it has been making sporting goods for well over a century — long enough that the skill base, not the labour cost, is the reason it is still the default answer for a lot of equipment categories.',
      },
      {
        type: 'p',
        text: 'That history matters to a buyer for one practical reason: the supporting trades already exist. Mold makers, composite specialists, grip and packaging suppliers, and freight forwarders who understand sports exports are all within driving distance of each other. A factory here is not assembling parts shipped in from three countries.',
      },
      {
        type: 'p',
        text: 'The industry grew up around hand-stitched footballs, which is still what Sialkot is best known for internationally. Composite products — rackets, paddles, protective equipment — came later, but they inherited the same production culture: hand skill on the finishing steps, with tooling and presses doing the structural work.',
      },
      {
        type: 'image',
        src: '/images/blog/container-port.jpg',
        alt: 'Container terminal at dusk with stacked shipping containers and gantry cranes',
        caption:
          'Export volume is part of why the supporting trades cluster in one city — freight forwarding included.',
      },
      {
        type: 'p',
        text: 'What this means when you place an order is mostly about flexibility. Because the tooling and the skilled steps are in one building, changing a spec between samples is a conversation rather than a re-quote from a different supplier. It is also why minimums here can be low — ours are 24 units for padel rackets and 50 for pickleball paddles — where a factory built purely around high-volume automation would need far more to justify a run.',
      },
      {
        type: 'p',
        text: 'The honest counterpoint: Sialkot has a very wide range of suppliers, and not all of them manufacture. A significant number of companies quoting from the city are trading houses that subcontract production elsewhere. That is not automatically a problem, but it does change who is accountable when a batch is wrong. It is worth asking directly whether the company you are speaking to owns the factory floor.',
      },
      {
        type: 'p',
        text: 'The other thing worth knowing is that export logistics from here are routine. We ship FOB Karachi by default, with EXW Sialkot available if you would rather arrange your own pickup, and we handle the export documentation either way.',
      },
    ],
    related: [
      { label: 'About SIAL Athletics', href: '/about' },
      { label: 'How we manufacture', href: '/manufacturing' },
      { label: 'How to vet a factory before you order', href: '/blog/how-to-vet-a-sports-equipment-factory' },
    ],
  },

  {
    slug: 'oem-vs-odm-padel-manufacturing',
    title: 'OEM vs ODM: how to choose a padel racket manufacturer',
    metaTitle: 'OEM vs ODM Padel Racket Manufacturing — Which to Choose',
    metaDescription:
      'OEM means we build your design; ODM means you brand one of ours. How to choose between them, with real MOQs, lead times and tooling costs.',
    category: 'Sourcing',
    date: PUBLISHED,
    summary:
      'OEM means you supply the design and the factory builds exactly to it. ODM means you start from a shape the factory already tools and add your own branding. For most new brands, ODM is faster and cheaper to launch; OEM makes sense once you need a product no one else can copy.',
    hero: {
      src: '/images/blog/molding-workshop.jpg',
      alt: 'Molding machinery and material hoppers inside a composites workshop',
    },
    blocks: [
      { type: 'h2', text: 'What OEM actually means' },
      {
        type: 'p',
        text: 'In an OEM (original equipment manufacturer) program, you own the design. You send technical drawings or CAD files with your measurements, tolerances, and material specification, and the factory builds to that spec. If the shape does not exist yet, a new mold is developed for it — at SIAL Athletics a new mold reaches a physical prototype in 3-4 weeks.',
      },
      {
        type: 'p',
        text: 'OEM gives you a product that is genuinely yours, which matters if you are building a brand around a specific playing characteristic. The trade-off is cost and time: mold development is an upfront investment, and you carry the risk of the design being right.',
      },

      { type: 'h2', text: 'What ODM actually means' },
      {
        type: 'p',
        text: 'In an ODM (original design manufacturer) program, you select an existing, proven shape and customize everything visible: carbon grade, core, surface texture, weight, balance, graphics, colorways, grip, edge guard branding, and retail packaging. The mold already exists, so there is no tooling cost and no tooling delay.',
      },
      {
        type: 'p',
        text: 'This is how most brands launch. You are not buying a generic product — two brands can build on the same shape and end up with rackets that play and look completely differently, because the carbon grade and core do most of the work.',
      },

      { type: 'h2', text: 'Side by side' },
      {
        type: 'table',
        rows: [
          ['Who designs it', 'OEM: you. ODM: you pick an existing shape and specify the build.'],
          ['Tooling cost', 'OEM: new mold may be required. ODM: none — the mold exists.'],
          ['Time to first sample', 'Both 3-4 weeks from specification approval; a new OEM mold also reaches prototype in 3-4 weeks.'],
          ['Exclusivity', 'OEM: the shape is yours. ODM: the shape is shared, your spec and branding are not.'],
          ['Best for', 'OEM: established brands with a specific design. ODM: new lines, faster launches, testing a market.'],
        ],
      },

      { type: 'h2', text: 'What to ask any manufacturer before you commit' },
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
      {
        type: 'image',
        src: '/images/blog/factory-floor.jpg',
        alt: 'Worker operating press machinery on an industrial factory production floor',
        caption: 'Ask to see the production floor. A company that cannot show you one on short notice may not have one.',
      },

      { type: 'h2', text: 'Which one should you pick?' },
      {
        type: 'p',
        text: 'If you are launching a first line, testing a new market, or need stock on a shelf this season, start with ODM. You avoid tooling cost, you get to market faster, and the product is still specified and branded entirely by you.',
      },
      {
        type: 'p',
        text: 'Move to OEM when you have proven demand and need a shape competitors cannot order. Many brands run both: an ODM core range for volume, with one OEM flagship on a mold of their own.',
      },
    ],
    related: [
      { label: 'Custom padel racket manufacturing', href: '/blog/custom-padel-racket-manufacturing' },
      { label: 'How to vet a factory before you order', href: '/blog/how-to-vet-a-sports-equipment-factory' },
      { label: 'Get a factory quote', href: '/contact' },
    ],
  },

  {
    slug: 'custom-padel-racket-manufacturing',
    title: 'Custom padel racket manufacturing: shapes, carbon grades and MOQs',
    metaTitle: 'Custom Padel Racket Manufacturing — Shapes, Carbon & MOQ',
    metaDescription:
      'What is actually customizable on a padel racket: round, teardrop and diamond shapes, 3K-24K carbon, EVA cores, weight and balance ranges, and real MOQs.',
    category: 'Product design',
    date: PUBLISHED,
    summary:
      'A custom padel racket is defined by four decisions: shape, face material, core, and surface texture. Together they set how the racket plays and what it costs. Everything below is selectable on a production order, with a minimum of 24 units.',
    hero: {
      src: '/images/blog/carbon-weave.jpg',
      alt: 'Close-up of a woven carbon fiber composite panel showing the weave pattern',
    },
    blocks: [
      { type: 'h2', text: 'Shape sets the playing character' },
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

      { type: 'h2', text: 'Carbon grade sets stiffness, feel and price' },
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

      { type: 'h2', text: 'The core sets how it feels at contact' },
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
      {
        type: 'image',
        src: '/images/manufacturing/eva-core.png',
        alt: 'Comparison of black high-density EVA, soft EVA and memory high-rebound EVA core foams',
        caption: 'The three core options, showing the difference in cell structure between densities.',
      },

      { type: 'h2', text: 'Surface texture sets spin' },
      {
        type: 'p',
        text: 'Texture is molded directly into the frame rather than sprayed on as a coating, so it does not wear off with use. Options include 3D grain, 3D hexagon mold, sand grit, and 3D decals.',
      },
      {
        type: 'image',
        src: '/images/manufacturing/textures.png',
        alt: 'Comparison of 3D, matte, glossy and sand-paint surface finish options on padel rackets',
        caption: 'Texture options side by side. All are molded into the frame rather than sprayed on.',
      },

      { type: 'h2', text: 'Weight, balance and finishing' },
      {
        type: 'table',
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

      { type: 'h2', text: 'Minimums, samples and timing' },
      {
        type: 'p',
        text: 'The minimum order is 24 units for padel rackets. Sample orders of 1-5 units are available at a higher per-unit cost, and the sample cost may be credited toward a confirmed bulk order.',
      },
      {
        type: 'p',
        text: 'Physical samples take 3-4 weeks from specification approval — photos and weight specs are sent for review before the sample ships. Bulk production runs 30-45 days after sample approval and deposit. You can also combine padel rackets and pickleball paddles, and multiple models within each, in a single program.',
      },
    ],
    related: [
      { label: 'Carbon fiber grades explained', href: '/blog/carbon-fiber-grades-3k-12k-18k-24k-explained' },
      { label: 'Round, teardrop or diamond', href: '/blog/padel-racket-shapes-round-teardrop-diamond' },
      { label: 'Configure a spec and request a quote', href: '/catalogue' },
    ],
  },

  {
    slug: 'how-pickleball-paddles-are-manufactured',
    title: 'How pickleball paddles are manufactured',
    metaTitle: 'How Pickleball Paddles Are Manufactured — OEM Guide',
    metaDescription:
      'How a pickleball paddle is built: face materials, polypropylene honeycomb cores, 13-16mm thickness, edge construction, and the QC checks before shipment.',
    category: 'Manufacturing',
    date: PUBLISHED,
    summary:
      'A pickleball paddle is a face material bonded to a honeycomb core, finished with an edge guard and grip. The face sets power and spin, the core thickness sets feel, and the bond between them determines how long the paddle lasts. Minimum order is 50 units.',
    hero: {
      src: '/images/blog/pickleball-paddles.jpg',
      alt: 'Two pickleball paddles leaning against a court net with three yellow balls',
    },
    blocks: [
      { type: 'h2', text: 'The face: carbon or fiberglass' },
      {
        type: 'p',
        text: 'The face is the hitting surface and the main lever on how the paddle plays. Carbon fiber gives a firmer, more controlled response with more bite for spin; fiberglass flexes more and returns more power off the face. Face material is specified per model, so a range can carry both.',
      },

      { type: 'h2', text: 'The core: polypropylene honeycomb' },
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

      { type: 'h2', text: 'Shape, edge and grip' },
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

      { type: 'h2', text: 'Quality control before anything ships' },
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
        type: 'image',
        src: '/images/blog/qc-caliper.jpg',
        alt: 'Technician measuring a machined part with a digital caliper beside an inspection sheet',
        caption: 'Dimensional checks are recorded per batch, not spot-checked at the end of a run.',
      },
      {
        type: 'p',
        text: 'Every production order ships with a batch-level QC report documenting tested samples, pass rates, and any corrective actions taken during the run. If a manufacturing defect appears after delivery, it can be reported within 30 days with photos and batch records.',
      },

      { type: 'h2', text: 'Packing and delivery' },
      {
        type: 'p',
        text: 'Each paddle is individually protected in its retail packaging, then packed into export-grade cartons prepared for palletized freight, so stock arrives shelf-ready. We ship worldwide — North America, Europe, the Middle East, Asia-Pacific, Latin America and Africa — FOB Karachi by default, or EXW Sialkot on request.',
      },
      {
        type: 'p',
        text: 'Minimum order is 50 units for pickleball paddles. Samples take 3-4 weeks from specification approval, and bulk production runs 30-45 days after sample approval and deposit.',
      },
    ],
    related: [
      { label: 'Core thickness: 13mm, 14mm or 16mm', href: '/blog/pickleball-paddle-core-thickness-13mm-14mm-16mm' },
      { label: 'What happens in quality control', href: '/blog/what-happens-in-quality-control' },
      { label: 'See pickleball platforms', href: '/catalogue#pickleball' },
    ],
  },

  {
    slug: 'carbon-fiber-grades-3k-12k-18k-24k-explained',
    title: '3K, 12K, 18K, 24K: what carbon fiber grades actually mean',
    metaTitle: 'Carbon Fiber Grades Explained — 3K, 12K, 18K, 24K',
    metaDescription:
      'What the K number in carbon fiber means, how 3K, 12K, 18K and 24K weaves differ in stiffness, feel and cost, and how to pick a grade for your racket line.',
    category: 'Materials',
    date: PUBLISHED,
    summary:
      'The K number counts filaments per tow, not quality. Higher is not automatically better — it changes stiffness, feel and price.',
    hero: {
      src: '/images/blog/carbon-weave.jpg',
      alt: 'Close-up of a woven carbon fiber composite panel showing the weave pattern',
    },
    blocks: [
      {
        type: 'p',
        text: 'The K in 3K carbon stands for thousand. It is the number of individual filaments bundled into each tow — the strand that gets woven into the fabric. 3K means roughly 3,000 filaments per tow, 24K means roughly 24,000. That is the whole definition. It is a measure of construction, not a grade of quality, which is the single most common misunderstanding when brands are specifying a first racket.',
      },
      {
        type: 'p',
        text: 'Because a 24K tow is much thicker than a 3K tow, the weave it produces is visually larger — the big chequerboard pattern you see on premium rackets. A 3K weave is tight and fine. That difference in appearance is why the number ended up being used as a marketing signal, and why buyers often assume 24K is simply the better option.',
      },
      {
        type: 'image',
        src: '/images/manufacturing/carbon-types.png',
        alt: 'Macro detail of 3K, 12K, 18K and 24K carbon fiber weaves shown next to each other for comparison',
        caption: 'The same four grades side by side. The visual difference is tow thickness, not material quality.',
      },
      {
        type: 'p',
        text: 'What actually changes between grades, in practice:',
      },
      {
        type: 'list',
        items: [
          '3K — a tighter weave with a softer, more forgiving response. The most accessible price point, and a sensible face for control-oriented and entry-level lines.',
          '12K and 18K — the middle of the range. These are where most flagship models land, because they balance stiffness against cost without committing to either extreme.',
          '24K — the stiffest and most responsive, with the large weave pattern buyers associate with premium product. Best suited to competition-tier rackets aimed at advanced players.',
        ],
      },
      {
        type: 'p',
        text: 'A stiffer face transfers more energy back into the ball, which reads as power. It also transmits more vibration to the arm. This is why a 24K face is not the right answer for every product: on a racket aimed at club players, that stiffness can make the racket feel harsh and unforgiving, and the larger sweet spot they actually need gets harder to deliver.',
      },
      {
        type: 'p',
        text: 'Grade is also not the only lever. Fiberglass-carbon hybrid and Kevlar-carbon blend layups are both available, and they change the feel in ways a straight carbon grade cannot — fiberglass adds flex and returns more power off the face, Kevlar adds damping. If you have a specific feel or a specific price target in mind, the layup is often a better place to solve it than the K number.',
      },
      {
        type: 'p',
        text: 'One practical note on specifying: the face grade interacts with the core. A stiff 24K face over a soft 13-15° EVA core plays very differently from the same face over black high-density EVA. Decide the two together rather than in sequence.',
      },
    ],
    related: [
      { label: 'EVA core hardness explained', href: '/blog/eva-core-hardness-explained' },
      { label: 'How we manufacture', href: '/manufacturing' },
      { label: 'Configure a spec', href: '/catalogue' },
    ],
  },

  {
    slug: 'padel-racket-shapes-round-teardrop-diamond',
    title: 'Round, teardrop or diamond: choosing a padel racket shape',
    metaTitle: 'Padel Racket Shapes — Round vs Teardrop vs Diamond',
    metaDescription:
      'How round, teardrop and diamond padel racket shapes differ in sweet spot, balance and playing character — and which to choose for your product line.',
    category: 'Product design',
    date: PUBLISHED,
    summary:
      'Shape decides where the sweet spot sits and how the weight swings. Pick it based on who the racket is for, not on what looks premium.',
    hero: {
      src: '/images/products/teardrop_padel.png',
      alt: 'Teardrop-shaped carbon fiber padel racket manufactured by SIAL Athletics',
    },
    blocks: [
      {
        type: 'p',
        text: 'Shape is the first decision in a padel racket spec because it defines who the racket is for. Everything after it — carbon grade, core, texture — adjusts the character. Shape sets it.',
      },
      {
        type: 'p',
        text: 'The mechanism is simple. Moving material toward the head raises the balance point and the sweet spot, which increases power and reduces forgiveness. Moving it toward the handle does the opposite. The three standard shapes are three positions along that trade-off.',
      },
      {
        type: 'table',
        rows: [
          ['Round', 'Lowest balance, largest sweet spot, most forgiving. The control shape.'],
          ['Teardrop', 'Mid balance. Bridges control and power — the most versatile of the three.'],
          ['Diamond', 'Head-weighted, higher sweet spot, most demanding. The power shape.'],
          ['Hybrid', 'A blended geometry developed around a specific play profile, anywhere between round and diamond.'],
        ],
      },
      {
        type: 'p',
        text: 'For a first product line, teardrop is usually the right starting point. It is the shape most players can use, which makes it the safest single SKU if you are only launching one. Round is the natural second addition if you sell into clubs and academies, where beginners and improvers dominate. Diamond is the one to add last — it sells to a narrower, more advanced audience, and it is the shape most likely to sit on a shelf if your customer base is not there yet.',
      },
      {
        type: 'image',
        src: '/images/blog/molding-workshop.jpg',
        alt: 'Molding machinery and material hoppers inside a composites workshop',
        caption: 'Molding equipment of the kind a new shape runs on. A new mold reaches physical prototype in 3-4 weeks.',
      },
      {
        type: 'p',
        text: 'Weight and balance are specified separately from shape, and they can shift the character within a shape. Our range is 350-380g with a balance point from 260-275mm. A teardrop specified at 350g with a low balance will play more like a control racket than a heavy round one will. If you are trying to hit a particular feel, these two numbers are the fine adjustment.',
      },
      {
        type: 'p',
        text: 'If none of the three standard shapes fits what you are trying to build, a custom mold can be developed. That is the point at which you move from an ODM programme to a genuine OEM one — you own the geometry, and no one else can order it.',
      },
    ],
    related: [
      { label: 'OEM and ODM programmes', href: '/manufacturing' },
      { label: 'Browse padel platforms', href: '/catalogue#padel' },
      { label: 'Carbon fiber grades explained', href: '/blog/carbon-fiber-grades-3k-12k-18k-24k-explained' },
    ],
  },

  {
    slug: 'eva-core-hardness-explained',
    title: 'EVA core hardness: how the foam changes the way a racket plays',
    metaTitle: 'EVA Core Hardness Explained — Padel Racket Cores',
    metaDescription:
      'Black high-density, soft 13-15° and memory high-rebound EVA cores compared: how each one changes feel, power and comfort in a padel racket.',
    category: 'Materials',
    date: PUBLISHED,
    summary:
      'The core is what the player actually feels at contact. Three EVA options cover most requirements, and the choice is about comfort as much as power.',
    hero: {
      src: '/images/manufacturing/eva-core.png',
      alt: 'Comparison of black high-density EVA, soft EVA and memory high-rebound EVA core foams',
    },
    blocks: [
      {
        type: 'p',
        text: 'The face gets the attention, but the core is what the player feels. It sits between the two carbon faces and determines how long the ball stays on the racket, how much energy comes back, and how much shock reaches the arm over a two-hour match.',
      },
      {
        type: 'p',
        text: 'EVA — ethylene-vinyl acetate — is a closed-cell foam. Denser foam compresses less, returns energy faster, and feels firmer. Softer foam compresses more, holds the ball fractionally longer, and feels more controlled. That is the entire trade-off, and every core option is a point on it.',
      },
      {
        type: 'image',
        src: '/images/blog/molding-workshop.jpg',
        alt: 'Material hoppers and processing machinery in a composites workshop',
        caption: 'Core stock is cut and bonded in house, so density is specified per production run.',
      },
      {
        type: 'list',
        items: [
          'Black high-density EVA — the firmest option. More power, and it holds its properties over long play, which matters for rackets that get used daily.',
          'Soft EVA at 13-15° hardness — more dwell time and more control, and noticeably easier on the elbow and shoulder.',
          'Memory / high-rebound EVA — recovers its shape quickly for a livelier response, and stays consistent across a long session.',
        ],
      },
      {
        type: 'p',
        text: 'Comfort is the factor most often underweighted when brands spec a first line. Padel has a large recreational player base, many of whom play several times a week and are prone to elbow problems. A softer core is frequently the better commercial decision even when a firmer one would test better with advanced players, simply because it suits more of the people actually buying.',
      },
      {
        type: 'p',
        text: 'Core and face should be chosen together. A soft core under a stiff 24K face produces a very different racket from the same core under 3K, and specifying them separately is how brands end up with a sample that technically matches the brief but does not feel like what they imagined.',
      },
    ],
    related: [
      { label: 'Carbon fiber grades explained', href: '/blog/carbon-fiber-grades-3k-12k-18k-24k-explained' },
      { label: 'How we manufacture', href: '/manufacturing' },
      { label: 'Get a quote', href: '/contact' },
    ],
  },

  {
    slug: 'pickleball-paddle-core-thickness-13mm-14mm-16mm',
    title: 'Pickleball paddle core thickness: 13mm, 14mm or 16mm',
    metaTitle: 'Pickleball Paddle Core Thickness — 13mm vs 14mm vs 16mm',
    metaDescription:
      'How polypropylene honeycomb core thickness changes a pickleball paddle: 13mm for drive and speed, 16mm for control, 14mm in between.',
    category: 'Product design',
    date: PUBLISHED,
    summary:
      'Core thickness is the biggest single influence on how a paddle feels. Thinner is faster, thicker is more controlled.',
    hero: {
      src: '/images/blog/pickleball-paddles.jpg',
      alt: 'Two pickleball paddles leaning against a court net with three yellow balls',
    },
    blocks: [
      {
        type: 'p',
        text: 'A pickleball paddle is a face material bonded to a polypropylene honeycomb core. The face sets spin and surface behaviour; the core thickness sets feel. Of the two, core thickness is the specification players notice most immediately.',
      },
      {
        type: 'p',
        text: 'The honeycomb structure absorbs energy on impact and returns it. A thicker core has more material to compress, so it absorbs more and returns less — which produces a softer, more controlled response and a slightly larger effective sweet spot. A thinner core compresses less and returns more, which reads as pop.',
      },
      {
        type: 'table',
        rows: [
          ['13mm', 'The thinnest option. Firmer and faster, favouring drive, speed and put-aways.'],
          ['14mm', 'A middle ground — keeps pop without giving up touch.'],
          ['16mm', 'The thickest. More dwell time and control, best for the soft game and placement.'],
        ],
      },
      {
        type: 'p',
        text: 'The market has moved toward thicker cores over the last few years as the soft game has become more central to how pickleball is played at club level. If you are building a range and can only carry two, 16mm and 14mm cover more of the market than 13mm and 16mm would.',
      },
      {
        type: 'image',
        src: '/images/blog/container-port.jpg',
        alt: 'Stacked shipping containers and cranes at a container port',
        caption: 'Finished paddles are individually protected, then packed into export-grade cartons for freight.',
      },
      {
        type: 'p',
        text: 'Face material is specified separately, so a single range can carry both. Carbon fiber gives a firmer, more controlled response with more bite for spin; fiberglass flexes more and returns more power off the face. Shape — including elongated profiles that extend reach at the cost of a narrower face — is chosen alongside the core.',
      },
      {
        type: 'p',
        text: 'Minimum order for pickleball paddles is 50 units, and you can combine paddles and padel rackets, and multiple models within each, into one production programme.',
      },
    ],
    related: [
      { label: 'How we manufacture', href: '/manufacturing' },
      { label: 'Browse pickleball platforms', href: '/catalogue#pickleball' },
      { label: 'Get a quote', href: '/contact' },
    ],
  },

  {
    slug: 'padel-racket-surface-texture-and-spin',
    title: 'How surface texture affects spin — and why sprayed grit wears off',
    metaTitle: 'Padel Racket Surface Texture & Spin Explained',
    metaDescription:
      'Molded 3D grain, hexagon, sand grit and 3D decal finishes compared, and why texture molded into the frame outlasts a sprayed-on coating.',
    category: 'Product design',
    date: PUBLISHED,
    summary:
      'Texture generates spin by gripping the ball. How it is applied determines whether it still works after a season of play.',
    hero: {
      src: '/images/blog/carbon-weave.jpg',
      alt: 'Macro detail of a woven carbon composite surface showing its raised texture',
    },
    blocks: [
      {
        type: 'p',
        text: 'Surface texture works by increasing friction between the face and the ball at the moment of contact, letting the racket grip and rotate it rather than simply pushing it. More grip means more spin available to the player.',
      },
      {
        type: 'p',
        text: 'The important distinction is not which texture pattern you choose but how it is applied. Texture that is sprayed onto a finished frame as a grit coating works well when the racket is new and then progressively wears smooth in exactly the area the player uses most. Texture that is molded into the frame is part of the structure, so it does not wear off.',
      },
      {
        type: 'p',
        text: 'We mold texture directly into the frame. The available options are:',
      },
      {
        type: 'list',
        items: [
          '3D grain — a directional surface pattern molded across the face.',
          '3D hexagon — a geometric molded pattern, visually distinctive as well as functional.',
          'Sand grit — a finer, more uniformly abrasive surface.',
          '3D decals — raised applied elements, usually combined with graphics.',
        ],
      },
      {
        type: 'image',
        src: '/images/manufacturing/textures.png',
        alt: 'Macro comparison of molded 3D, matte, glossy and sand-paint padel racket surface finishes',
        caption: 'Texture options shown side by side. All four are molded into the frame rather than sprayed on.',
      },
      {
        type: 'p',
        text: 'There is a durability consideration worth raising with any manufacturer: aggressive texture is harder on balls. A very abrasive surface will generate more spin and wear balls faster, which matters to clubs buying in volume even though it rarely comes up in a product brief.',
      },
      {
        type: 'p',
        text: 'Texture also interacts with your graphics. Heavily molded patterns constrain where artwork sits cleanly, so it is worth deciding the texture before finalising the design rather than after.',
      },
    ],
    related: [
      { label: 'How we manufacture', href: '/manufacturing' },
      { label: 'Carbon fiber grades explained', href: '/blog/carbon-fiber-grades-3k-12k-18k-24k-explained' },
      { label: 'Configure a spec', href: '/catalogue' },
    ],
  },

  {
    slug: 'what-happens-in-quality-control',
    title: 'What actually happens in quality control before your order ships',
    metaTitle: 'Quality Control for Padel Rackets — What We Test',
    metaDescription:
      'The fixed inspection sequence every batch passes before shipment: deflection and compression testing, weight consistency to ±0.1oz, edge and handle testing.',
    category: 'Manufacturing',
    date: PUBLISHED,
    summary:
      'Every batch goes through the same fixed sequence, and every order ships with a QC report. Here is what is measured and why.',
    hero: {
      src: '/images/blog/qc-caliper.jpg',
      alt: 'Technician measuring a machined part with a digital caliper beside an inspection sheet',
    },
    blocks: [
      {
        type: 'p',
        text: 'Quality control is the part of manufacturing buyers ask about least and get burned by most. A factory that inspects by eye at the end of a run will catch obvious cosmetic faults and miss everything structural. The distinction worth asking about is whether inspection is a fixed sequence applied to every batch or a spot check applied when there is time.',
      },
      { type: 'p', text: 'Ours is a fixed sequence. Every batch passes the same six checks:' },
      {
        type: 'list',
        items: [
          'Surface roughness and finish consistency — confirms the molded texture came out uniform across the face.',
          'Deflection and compression testing — measures how the frame and core behave under load, which is where structural faults show up.',
          'Weight consistency held to ±0.1oz — matters most when a customer buys two of the same model and expects them to match.',
          'Edge guard seal and adhesion testing — the edge is where impact damage starts, and a weak bond fails early.',
          'Handle torque strength testing — checks the join between head and handle under twisting load.',
          'Visual inspection with zero defect tolerance — the cosmetic pass, applied last.',
        ],
      },
      {
        type: 'image',
        src: '/images/manufacturing/quality-control.png',
        alt: 'Automated deflection and compression test rig with a padel racket clamped in position',
        caption: 'The deflection rig. Load is applied to the face and the response measured against the spec.',
      },
      {
        type: 'p',
        text: 'The weight tolerance is the one worth dwelling on. A ±0.1oz band is tight enough that two rackets from the same batch feel the same in the hand. Brands that skip this end up with returns from customers who bought a second racket and found it played differently — a problem that is invisible at the factory and expensive at retail.',
      },
      {
        type: 'image',
        src: '/images/blog/factory-floor.jpg',
        alt: 'Worker operating production machinery on a factory floor',
        caption: 'Inspection sits inside the production line rather than only at the end of it.',
      },
      {
        type: 'p',
        text: 'Every production order ships with a batch-level QC report documenting the samples tested, pass rates, and any corrective action taken during the run. If a manufacturing defect does appear after delivery, it can be reported within 30 days with photos and batch records, and we review each claim individually.',
      },
      {
        type: 'p',
        text: 'When you are comparing manufacturers, ask for a sample QC report before you place an order. A factory that produces one immediately has the process. A factory that has to build one for you does not.',
      },
    ],
    related: [
      { label: 'How to vet a factory before you order', href: '/blog/how-to-vet-a-sports-equipment-factory' },
      { label: 'How we manufacture', href: '/manufacturing' },
      { label: 'Full buyer FAQ', href: '/faq' },
    ],
  },

  {
    slug: 'how-to-vet-a-sports-equipment-factory',
    title: 'How to vet a sports equipment factory before you order',
    metaTitle: 'How to Vet a Sports Equipment Factory Before Ordering',
    metaDescription:
      'Seven questions that separate a real manufacturer from a trading company, and what good answers look like on MOQ, samples, QC and shipping terms.',
    category: 'Sourcing',
    date: PUBLISHED,
    summary:
      'Most sourcing problems are visible before you pay a deposit. These are the questions that surface them.',
    hero: {
      src: '/images/blog/factory-floor.jpg',
      alt: 'Industrial factory floor with a worker operating press machinery',
    },
    blocks: [
      {
        type: 'p',
        text: 'The failure mode in sourcing is rarely dramatic. It is a supplier who quotes fast, samples well, and then delivers a bulk run that does not match the sample — at which point your deposit is already spent and your launch date is fixed. Almost all of that risk is diagnosable in the first two conversations.',
      },
      {
        type: 'p',
        text: 'Ask these seven questions. The answers below are ours, included so you have something concrete to compare against — the point is not that every factory should answer identically, but that a real manufacturer answers specifically and quickly.',
      },
      {
        type: 'list',
        items: [
          'Do you own the factory, or do you subcontract? Trading companies are common and not inherently bad, but you need to know who is accountable for a bad batch.',
          'What is your real minimum order quantity? Ours is 24 units for padel rackets and 50 for pickleball paddles. A vague answer usually means it depends on a subcontractor.',
          'Can I order a sample first, and is the cost credited? Ours is 1-5 units at a higher per-unit cost, creditable toward a confirmed bulk order.',
          'How long from approved spec to delivered bulk? Ours: samples in 3-4 weeks, then 30-45 days for production after sample approval and deposit.',
          'What are the payment terms? Ours are 30% upfront by bank transfer and 70% before shipment. Be cautious of anyone asking for full payment upfront.',
          'What QC documentation comes with the order? Ask to see a sample report. Every order of ours ships with a batch-level QC report.',
          'Which shipping terms, and who handles export paperwork? We default to FOB Karachi, with EXW Sialkot on request, and handle the documentation.',
        ],
      },
      {
        type: 'image',
        src: '/images/blog/container-port.jpg',
        alt: 'Shipping containers stacked at an export terminal with gantry cranes',
        caption: 'Ask any supplier who handles export documentation, and at which point risk transfers to you.',
      },
      {
        type: 'p',
        text: 'Two further checks are worth the effort. First, ask for photographs or a video call from the production floor rather than a brochure — a factory that cannot show you the floor on short notice may not have one. Second, ask what happens if a batch is wrong. A supplier with a defined defect window and claims process has thought about failure; one that says it never happens has not.',
      },
      {
        type: 'p',
        text: 'Finally, be specific in your own brief. The most common cause of a sample that disappoints is a brief that specified a shape and a colour but left weight, balance, core and face grade to the factory. Those four decide how the product plays. If you do not specify them, someone else will.',
      },
    ],
    related: [
      { label: 'What happens in quality control', href: '/blog/what-happens-in-quality-control' },
      { label: 'OEM and ODM programmes', href: '/manufacturing' },
      { label: 'Start an inquiry', href: '/contact' },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

/** Rough read time from the post's own text. Computed, not guessed. */
export function readMinutes(post: BlogPost) {
  const words = post.blocks.reduce((n, b) => {
    if (b.type === 'p' || b.type === 'h2') return n + b.text.split(/\s+/).length;
    if (b.type === 'list') return n + b.items.join(' ').split(/\s+/).length;
    if (b.type === 'table') return n + b.rows.flat().join(' ').split(/\s+/).length;
    return n;
  }, 0);
  return Math.max(2, Math.round(words / 200));
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
