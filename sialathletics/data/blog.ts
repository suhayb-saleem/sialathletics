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
    if (b.type === 'p') return n + b.text.split(/\s+/).length;
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
