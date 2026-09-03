import type { ContentBlock } from '@/components/content/ContentBlocks';

// Blog posts. Every specification quoted here (MOQs, lead times, carbon
// grades, EVA hardness, core thickness, QC sequence, shipping terms) comes
// from data/faq.ts or the catalogue platform data — nothing is invented.
//
// Imagery comes only from /images/blog — supplied factory and diagram
// photography plus Unsplash-licensed stock (free for commercial use, no
// attribution required). Nothing here may reuse an image that appears on
// another page of the site, and no post may use the same image twice.
// Alt text must describe what a photo actually shows: several of these are
// stock, so never imply they are our facility.
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
      src: '/images/blog/sialkot-factory-floor.png',
      alt: 'Workers finishing sports goods across a large Sialkot factory floor',
    },
    blocks: [
      {
        type: 'p',
        text: 'If you have sourced sports equipment before, you have probably been quoted by a company in Sialkot without necessarily knowing where it was. The city sits in the north-east of Punjab, Pakistan, and it has been making sporting goods for well over a century — long enough that the skill base, not the labour cost, is the reason it is still the default answer for a lot of equipment categories.',
      },

      { type: 'h2', text: 'Why the supporting trades matter' },
      {
        type: 'p',
        text: 'That history matters to a buyer for one practical reason: the supporting trades already exist. Mold makers, composite specialists, grip and packaging suppliers, and freight forwarders who understand sports exports are all within driving distance of each other. A factory here is not assembling parts shipped in from three countries.',
      },
      {
        type: 'p',
        text: 'The industry grew up around hand-stitched footballs, which is still what Sialkot is best known for internationally. Composite products — rackets, paddles, protective equipment — came later, but they inherited the same production culture: hand skill on the finishing steps, with tooling and presses doing the structural work.',
      },

      { type: 'h2', text: 'What it means for your order' },
      {
        type: 'p',
        text: 'What this means when you place an order is mostly about flexibility. Because the tooling and the skilled steps are in one building, changing a spec between samples is a conversation rather than a re-quote from a different supplier. It is also why minimums here can be low — ours are 24 units for padel rackets and 50 for pickleball paddles — where a factory built purely around high-volume automation would need far more to justify a run.',
      },

      { type: 'h2', text: 'The catch: not every supplier manufactures' },
      {
        type: 'p',
        text: 'The honest counterpoint: Sialkot has a very wide range of suppliers, and not all of them manufacture. A significant number of companies quoting from the city are trading houses that subcontract production elsewhere. That is not automatically a problem, but it does change who is accountable when a batch is wrong. It is worth asking directly whether the company you are speaking to owns the factory floor.',
      },

      { type: 'h2', text: 'Export logistics' },
      {
        type: 'p',
        text: 'The other thing worth knowing is that export logistics from here are routine. We ship FOB Karachi by default, with EXW Sialkot available if you would rather arrange your own pickup, and we handle the export documentation either way.',
      },
    ],
    related: [
      { label: 'About SIAL Athletics', href: '/about' },
      { label: 'How we manufacture', href: '/manufacturing' },
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
        text: 'In an ODM (original design manufacturer) program, you select an existing, proven shape and customize everything around it: carbon grade, core, surface texture, graphics, colorways, grip, edge guard branding, and retail packaging. Weight and balance come with the mould you pick. The mold already exists, so there is no tooling cost and no tooling delay.',
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
      { label: 'Get a factory quote', href: '/contact' },
    ],
  },

  {
    slug: 'custom-padel-racket-manufacturing',
    title: 'Custom padel racket manufacturing: shapes, carbon grades and MOQs',
    metaTitle: 'Custom Padel Racket Manufacturing — Shapes, Carbon & MOQ',
    metaDescription:
      'What is actually customizable on a padel racket: round, teardrop and diamond shapes, 3K-24K carbon, EVA cores, surface textures, and real MOQs.',
    category: 'Product design',
    date: PUBLISHED,
    summary:
      'A custom padel racket is defined by four decisions: shape, face material, core, and surface texture. Together they set how the racket plays and what it costs. Everything below is selectable on a production order, with a minimum of 24 units.',
    hero: {
      src: '/images/blog/racket-assembly.png',
      alt: 'Workers hand-finishing padel rackets at benches in a Sialkot workshop',
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

      { type: 'h2', text: 'Surface texture sets spin' },
      {
        type: 'p',
        text: 'There are two ways to get grip: 3D relief molded into the frame, which cannot wear away, and a sand particle finish, which bites harder when new but smooths with play. Options are smooth, sand grit, 3D grain, 3D hexagon, or a hybrid that combines sand over a molded relief so performance fades gradually instead of falling away.',
      },

      { type: 'h2', text: 'The full spec sheet' },
      {
        type: 'table',
        rows: [
          ['Frame shape', 'Round, teardrop, diamond, hybrid, or a custom mold'],
          ['Face material', '3K / 12K / 18K / 24K carbon, silver carbon, fiberglass-carbon hybrid, Kevlar-carbon blend'],
          ['Core', 'Black high-density EVA, soft EVA 13-15°, memory high-rebound EVA'],
          ['Texture', 'Smooth, sand grit, 3D grain, 3D hexagon, or hybrid sand and 3D'],
          ['Weight and balance', 'Not selected separately — they result from the shape and core, typically 350-380g and 260-275mm'],
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
      src: '/images/blog/factory-floor.jpg',
      alt: 'Worker operating press machinery on a factory production floor',
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
        type: 'p',
        text: 'Every production order ships with a batch-level QC report documenting tested samples, pass rates, and any corrective actions taken during the run. If a manufacturing defect appears after delivery, it can be reported within 30 days with photos and batch records.',
      },

      {
        type: 'image',
        src: '/images/blog/container-port.jpg',
        alt: 'Stacked shipping containers and gantry cranes at an export terminal',
        caption: 'Cartons are prepared for palletized freight so stock arrives shelf-ready.',
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
      src: '/images/blog/carbon-grades-comparison.png',
      alt: 'Labelled comparison of 3K, 12K, 18K and 24K carbon fibre weaves showing how tow thickness changes the pattern',
    },
    blocks: [
      {
        type: 'p',
        text: 'The K in 3K carbon stands for thousand. It is the number of individual filaments bundled into each tow — the strand that gets woven into the fabric. 3K means roughly 3,000 filaments per tow, 24K means roughly 24,000. That is the whole definition. It is a measure of construction, not a grade of quality, which is the single most common misunderstanding when brands are specifying a first racket.',
      },

      { type: 'h2', text: 'Why the weave looks different' },
      {
        type: 'p',
        text: 'Because a 24K tow is much thicker than a 3K tow, the weave it produces is visually larger — the big chequerboard pattern you see on premium rackets. A 3K weave is tight and fine. That difference in appearance is why the number ended up being used as a marketing signal, and why buyers often assume 24K is simply the better option.',
      },

      { type: 'h2', text: 'What changes between grades' },
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

      { type: 'h2', text: 'Why stiffer is not always better' },
      {
        type: 'p',
        text: 'A stiffer face transfers more energy back into the ball, which reads as power. It also transmits more vibration to the arm. This is why a 24K face is not the right answer for every product: on a racket aimed at club players, that stiffness can make the racket feel harsh and unforgiving, and the larger sweet spot they actually need gets harder to deliver.',
      },

      { type: 'h2', text: 'Layup matters as much as grade' },
      {
        type: 'p',
        text: 'Grade is also not the only lever. Fiberglass-carbon hybrid and Kevlar-carbon blend layups are both available, and they change the feel in ways a straight carbon grade cannot — fiberglass adds flex and returns more power off the face, Kevlar adds damping. If you have a specific feel or a specific price target in mind, the layup is often a better place to solve it than the K number.',
      },

      { type: 'h2', text: 'Specify the face and core together' },
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
      src: '/images/blog/padel-shapes-balance.png',
      alt: 'Diamond, hybrid, teardrop and round padel rackets compared with their balance points marked',
    },
    blocks: [
      {
        type: 'p',
        text: 'Shape is the first decision in a padel racket spec because it defines who the racket is for. Everything after it — carbon grade, core, texture — adjusts the character. Shape sets it.',
      },

      { type: 'h2', text: 'How shape changes the swing' },
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

      { type: 'h2', text: 'Which shape to launch with' },
      {
        type: 'p',
        text: 'For a first product line, teardrop is usually the right starting point. It is the shape most players can use, which makes it the safest single SKU if you are only launching one. Round is the natural second addition if you sell into clubs and academies, where beginners and improvers dominate. Diamond is the one to add last — it sells to a narrower, more advanced audience, and it is the shape most likely to sit on a shelf if your customer base is not there yet.',
      },

      { type: 'h2', text: 'Weight and balance follow from the build' },
      {
        type: 'p',
        text: 'Weight and balance are not specified off a list. They are the result of the shape, the carbon grade and the core you choose, and they land in the usual 350-380g range with a balance point around 260-275mm. A round racket in a soft core naturally sits lower and lighter than a diamond in high-density EVA — the shape does that, not a number you tick.',
      },
      {
        type: 'p',
        text: 'If you have a target feel rather than a target figure, describe the player and we will tell you which combination gets closest. Chasing an exact gram count usually means compromising something that matters more.',
      },

      { type: 'h2', text: 'When you need a custom mold' },
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
      src: '/images/blog/eva-core-vs-foam.png',
      alt: 'Labelled comparison of EVA closed-cell foam and open-cell polyurethane foam with their properties listed',
    },
    blocks: [
      {
        type: 'p',
        text: 'The face gets the attention, but the core is what the player feels. It sits between the two carbon faces and determines how long the ball stays on the racket, how much energy comes back, and how much shock reaches the arm over a two-hour match.',
      },

      { type: 'h2', text: 'How EVA density works' },
      {
        type: 'p',
        text: 'EVA — ethylene-vinyl acetate — is a closed-cell foam. Denser foam compresses less, returns energy faster, and feels firmer. Softer foam compresses more, holds the ball fractionally longer, and feels more controlled. That is the entire trade-off, and every core option is a point on it.',
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
        type: 'image',
        src: '/images/blog/available-materials.jpg',
        alt: 'Chart of available racket materials including EVA soft core foam, fibreglass, carbon and Kevlar',
        caption: 'Core stock sits alongside the face materials it gets paired with.',
      },

      { type: 'h2', text: 'Comfort is a commercial decision' },
      {
        type: 'p',
        text: 'Comfort is the factor most often underweighted when brands spec a first line. Padel has a large recreational player base, many of whom play several times a week and are prone to elbow problems. A softer core is frequently the better commercial decision even when a firmer one would test better with advanced players, simply because it suits more of the people actually buying.',
      },

      { type: 'h2', text: 'Specify core and face together' },
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
      src: '/images/blog/pickleball-paddle-thickness.png',
      alt: 'Three SIAL Athletics pickleball paddles shown side by side labelled 13mm, 14mm and 16mm thickness',
    },
    blocks: [
      {
        type: 'p',
        text: 'A pickleball paddle is a face material bonded to a polypropylene honeycomb core. The face sets spin and surface behaviour; the core thickness sets feel. Of the two, core thickness is the specification players notice most immediately.',
      },

      { type: 'h2', text: 'How core thickness changes feel' },
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

      { type: 'h2', text: 'Which thicknesses to carry' },
      {
        type: 'p',
        text: 'The market has moved toward thicker cores over the last few years as the soft game has become more central to how pickleball is played at club level. If you are building a range and can only carry two, 16mm and 14mm cover more of the market than 13mm and 16mm would.',
      },

      { type: 'h2', text: 'Face, shape and finishing' },
      {
        type: 'p',
        text: 'Face material is specified separately, so a single range can carry both. Carbon fiber gives a firmer, more controlled response with more bite for spin; fiberglass flexes more and returns more power off the face. Shape — including elongated profiles that extend reach at the cost of a narrower face — is chosen alongside the core.',
      },

      { type: 'h2', text: 'Minimums' },
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
    title: 'Padel racket surfaces: sand roughness, 3D roughness and hybrid',
    metaTitle: 'Padel Racket Surfaces — Sand vs 3D vs Hybrid Roughness',
    metaDescription:
      'Sand roughness, 3D roughness and hybrid padel surfaces compared: how each generates spin, how quickly it fades, and which suits which player.',
    category: 'Product design',
    date: PUBLISHED,
    summary:
      'Sand grips the ball chemically and fades; 3D texture grips it mechanically and lasts. Hybrid surfaces use both so performance drops off gradually instead of falling away.',
    hero: {
      src: '/images/blog/surface-textures-comparison.png',
      alt: 'Comparison of sand roughness, 3D roughness, hybrid and smooth padel racket surfaces with macro detail of each',
    },
    blocks: [
      {
        type: 'p',
        text: 'Surface is the specification buyers argue about most and understand least. Two rackets with identical carbon, identical core and identical shape can feel completely different on a cut simply because of how the face is finished — and, more importantly, they can age completely differently.',
      },

      { type: 'h2', text: 'How spin is actually generated' },
      {
        type: 'p',
        text: 'Spin comes from the ball gripping the face for a fraction longer than it otherwise would, so the racket can rotate it rather than just push it. There are two separate ways to achieve that grip, and they behave differently over the life of the racket.',
      },
      {
        type: 'list',
        items: [
          'Frictional grip — an abrasive surface catches the ball\'s felt. Strong immediately, strongest on slow, soft shots, and it wears down with use.',
          'Mechanical grip — a raised, molded relief physically deforms against the ball. It needs racket-head speed to engage, and because it is part of the frame it cannot wear away.',
        ],
      },
      {
        type: 'p',
        text: 'Most marketing collapses these into one number — "more spin" — which is why two rackets advertised the same way can behave nothing alike after three months.',
      },

      { type: 'h2', text: 'Sand roughness' },
      {
        type: 'p',
        text: 'Sand roughness applies fine particles — typically silica or quartz — to the face on top of the carbon. It produces the highest initial friction of any finish, and it is noticeably effective on the soft game, where the ball is moving slowly and there is little head speed to work with.',
      },
      {
        type: 'p',
        text: 'The trade-off is wear. Ball felt is mildly abrasive, so every shot works on the particle layer like very fine sandpaper. The surface smooths first in exactly the spot the player uses most — the middle of the sweet spot — so the spin loss is gradual, uneven, and most obvious to the player who liked the racket best.',
      },

      { type: 'h2', text: '3D roughness' },
      {
        type: 'p',
        text: 'A 3D surface is a geometric relief molded into the frame itself — a grain, a hexagon pattern, or a similar repeating structure. It is not a coating, so there is nothing to wear off. The pattern is as present in year two as it was on day one.',
      },
      {
        type: 'p',
        text: 'The catch is that it needs speed. Mechanical grip engages when the ball is driven into the relief hard enough to deform against it, which means a 3D face can feel comparatively plain on soft, slow shots and come alive on fast ones. Players who win with touch sometimes find pure 3D underwhelming; players who swing hard usually prefer it.',
      },

      { type: 'h2', text: 'Hybrid surfaces' },
      {
        type: 'p',
        text: 'A hybrid combines both: a molded relief with a particle finish over it. New, it behaves like a sand racket, because the particles dominate. As those particles wear, the underlying 3D structure is progressively exposed and takes over the work.',
      },
      {
        type: 'p',
        text: 'That is the real argument for hybrid, and it is about ageing rather than peak performance. A sand racket falls off a cliff; a hybrid slides down a ramp. For a brand selling to clubs and regular players, that difference shows up in returns and repeat orders more than in any first impression.',
      },

      { type: 'h2', text: 'The comparison' },
      {
        type: 'table',
        rows: [
          ['Initial spin', 'Sand: very high. Hybrid: high. 3D: medium, rising with head speed.'],
          ['How the grip works', 'Sand: friction. 3D: mechanical deformation. Hybrid: both.'],
          ['Over a season', 'Sand: drops noticeably. Hybrid: gradual. 3D: essentially unchanged.'],
          ['Feel', 'Sand: soft and grippy. 3D: firm and clean. Hybrid: in between.'],
          ['Suits', 'Sand: touch players, soft game. 3D: fast, aggressive swings. Hybrid: mixed ranges and club use.'],
          ['Ball wear', 'Sand: highest. Hybrid: moderate. 3D: lowest.'],
        ],
      },

      { type: 'h2', text: 'Choosing a surface for your line' },
      {
        type: 'p',
        text: 'There is no best surface, only a best fit for who buys the racket. If your customer is a club or an academy where rackets get used daily and replaced slowly, favour 3D or hybrid — the racket still performs at the end of the season, and it is easier on balls, which clubs buy in volume. If you sell to competitive players who replace equipment often and want maximum bite out of the box, sand is defensible.',
      },
      {
        type: 'p',
        text: 'One practical note that rarely makes it into a brief: heavily molded patterns constrain where artwork sits cleanly. Decide the surface before you finalise graphics, not after.',
      },
      {
        type: 'p',
        text: 'All three approaches are available across our range, specified per model, so a single line can carry a sand-finished control racket and a 3D competition model without a second tooling programme.',
      },
    ],
    related: [
      { label: 'Carbon fiber grades explained', href: '/blog/carbon-fiber-grades-3k-12k-18k-24k-explained' },
      { label: 'Round, teardrop or diamond', href: '/blog/padel-racket-shapes-round-teardrop-diamond' },
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
      src: '/images/blog/production-planning.png',
      alt: 'Staff checking finished rackets against a production plan board on the factory floor',
    },
    blocks: [
      {
        type: 'p',
        text: 'Quality control is the part of manufacturing buyers ask about least and get burned by most. A factory that inspects by eye at the end of a run will catch obvious cosmetic faults and miss everything structural. The distinction worth asking about is whether inspection is a fixed sequence applied to every batch or a spot check applied when there is time.',
      },

      { type: 'h2', text: 'The six checks' },
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

      { type: 'h2', text: 'Why the weight tolerance matters' },
      {
        type: 'p',
        text: 'The weight tolerance is the one worth dwelling on. A ±0.1oz band is tight enough that two rackets from the same batch feel the same in the hand. Brands that skip this end up with returns from customers who bought a second racket and found it played differently — a problem that is invisible at the factory and expensive at retail.',
      },

      { type: 'h2', text: 'Documentation you receive' },
      {
        type: 'p',
        text: 'Every production order ships with a batch-level QC report documenting the samples tested, pass rates, and any corrective action taken during the run. If a manufacturing defect does appear after delivery, it can be reported within 30 days with photos and batch records, and we review each claim individually.',
      },

      { type: 'h2', text: 'What to ask a supplier' },
      {
        type: 'p',
        text: 'When you are comparing manufacturers, ask for a sample QC report before you place an order. A factory that produces one immediately has the process. A factory that has to build one for you does not.',
      },
    ],
    related: [
      { label: 'How we manufacture', href: '/manufacturing' },
      { label: 'Full buyer FAQ', href: '/faq' },
    ],
  },


  {
    slug: 'padel-vs-pickleball-differences',
    title: 'Padel vs pickleball: what actually makes them different',
    metaTitle: 'Padel vs Pickleball — Court, Rules and Equipment Compared',
    metaDescription:
      'Padel and pickleball compared: court size, walls, scoring, serve rules, and how the rackets and paddles are built differently.',
    category: 'The sports',
    date: PUBLISHED,
    summary:
      'They look similar — solid stringless bats, small courts, doubles — but they are different sports. Padel is played off enclosed glass walls with a pressurised ball; pickleball is played on an open badminton-sized court with a perforated plastic ball.',
    hero: {
      src: '/images/blog/pickleball-paddles.jpg',
      alt: 'Two pickleball paddles leaning against a court net with three yellow balls',
    },
    blocks: [
      {
        type: 'p',
        text: 'People coming from tennis tend to lump padel and pickleball together, and from a distance the confusion is fair: both are played with a solid bat that has no strings, both are dominated by doubles, and both use a court much smaller than a tennis court. Underneath that, almost everything is different — including how the equipment has to be built.',
      },

      { type: 'h2', text: 'The court is the biggest difference' },
      {
        type: 'p',
        text: 'A padel court is enclosed. It is 20m by 10m, surrounded by glass and mesh, and the walls are in play — the ball can be taken off the back glass, which is why rallies last far longer than the court size suggests. Learning to use the wall is most of the learning curve.',
      },
      {
        type: 'p',
        text: 'A pickleball court is open, and much smaller: 20ft by 44ft, the same footprint as a doubles badminton court. There are no walls, so a ball that passes you is gone. The defining feature instead is the non-volley zone — the "kitchen" — a seven-foot strip either side of the net where you cannot hit the ball out of the air.',
      },

      { type: 'h2', text: 'The ball changes everything' },
      {
        type: 'p',
        text: 'Padel uses a ball that looks like a tennis ball and is slightly less pressurised. It bounces high and fast, and it holds pace off the glass. Pickleball uses a rigid perforated plastic ball that is far lighter, slows quickly through the air, and barely bounces by comparison.',
      },
      {
        type: 'p',
        text: 'That single difference explains most of the equipment divergence. A padel racket has to absorb and redirect a heavy, fast ball. A pickleball paddle has to generate pace against a light one that does very little on its own.',
      },

      { type: 'h2', text: 'How the equipment differs' },
      {
        type: 'table',
        rows: [
          ['Padel racket', 'Carbon or fibreglass face over an EVA foam core, around 38mm thick, 350-380g, perforated, with a wrist strap.'],
          ['Pickleball paddle', 'Carbon or fibreglass face over a polypropylene honeycomb core, 13-16mm thick, considerably lighter, solid face, no holes.'],
          ['Why the core differs', 'EVA foam handles the repeated impact of a pressurised ball; honeycomb returns energy to a ball that carries little of its own.'],
          ['Why the holes', 'Padel rackets are perforated to cut air resistance on a heavier, faster swing. Pickleball paddles are not.'],
        ],
      },

      { type: 'h2', text: 'Serving and scoring' },
      {
        type: 'p',
        text: 'Both sports serve underarm, which is part of why both are easy to pick up. Padel serves must bounce before being struck and are played into the diagonal box, with tennis scoring — 15, 30, 40, game. Pickleball serves are hit on the full without bouncing, and in most formats only the serving side can score, so games swing on holding serve.',
      },

      { type: 'h2', text: 'Which is growing faster?' },
      {
        type: 'p',
        text: 'Both are growing quickly, in different places. Pickleball has expanded fastest in North America, helped by how cheap it is to convert existing tennis and badminton courts. Padel is strongest in Spain and Latin America and has spread rapidly through Europe and the Middle East, though it needs purpose-built courts, which slows expansion and raises the cost of entry.',
      },
      {
        type: 'p',
        text: 'For a brand deciding which to stock, that geography usually matters more than the sports themselves. Both use the same manufacturing base, so carrying the two is not the jump it appears to be — the face materials and finishing processes overlap almost entirely, and only the core and mould differ.',
      },
    ],
    related: [
      { label: 'Pickleball paddle core thickness', href: '/blog/pickleball-paddle-core-thickness-13mm-14mm-16mm' },
      { label: 'Round, teardrop or diamond', href: '/blog/padel-racket-shapes-round-teardrop-diamond' },
      { label: 'Browse platforms', href: '/catalogue' },
    ],
  },

  {
    slug: 'carbon-fibre-vs-fibreglass-padel-rackets',
    title: 'Carbon fibre vs fibreglass: which face material is better?',
    metaTitle: 'Carbon Fibre vs Fibreglass Padel Rackets — Which Is Better',
    metaDescription:
      'Carbon fibre and fibreglass padel racket faces compared on power, control, comfort, durability and cost — and when a hybrid layup beats both.',
    category: 'Materials',
    date: PUBLISHED,
    summary:
      'Neither is better outright. Carbon is stiffer, so it returns more of what you put in and grips the ball harder; fibreglass flexes, so it gives more free power and is kinder on the arm. The right answer depends on who is holding the racket.',
    hero: {
      src: '/images/blog/fibreglass-vs-carbon.png',
      alt: 'Side-by-side comparison of woven fibreglass and woven carbon fibre cloth with magnified detail of each weave',
    },
    blocks: [
      {
        type: 'p',
        text: 'This is the first question most brands ask when specifying a face, and it is usually framed as a quality question — carbon good, fibreglass cheap. That framing is wrong, and it leads brands to over-specify rackets for players who would enjoy a softer one more.',
      },

      { type: 'h2', text: 'What each material actually does' },
      {
        type: 'p',
        text: 'Carbon fibre is stiff. It deforms very little on impact, so it returns energy quickly and predictably, and the surface holds the ball firmly enough to bite for spin. You feel exactly what you did — including your mistakes.',
      },
      {
        type: 'p',
        text: 'Fibreglass flexes. The face deforms slightly and springs back, adding pace the player did not have to generate. That trampoline effect is why a fibreglass racket can feel more powerful than a carbon one in the hands of someone with a slower swing, even though carbon is the "higher performance" material.',
      },

      { type: 'h2', text: 'Side by side' },
      {
        type: 'table',
        rows: [
          ['Stiffness', 'Carbon: high. Fibreglass: low to moderate.'],
          ['Power source', 'Carbon: comes from the player. Fibreglass: partly from the face.'],
          ['Control and spin', 'Carbon: more precise, grips harder. Fibreglass: less bite.'],
          ['Comfort', 'Fibreglass: absorbs more shock. Carbon: transmits more to the arm.'],
          ['Durability', 'Carbon: holds its properties longer. Fibreglass: softens with heavy use.'],
          ['Cost', 'Fibreglass is the more accessible option at every volume.'],
        ],
      },

      {
        type: 'image',
        src: '/images/blog/carbon-fabric-types.jpg',
        alt: 'Chart of composite fabric types including glass fibre, 3K, 12K, 18K, Kevlar and titanium carbon weaves',
        caption: 'The full range of face fabrics, from glass fibre through to Kevlar and titanium carbon blends.',
      },

      { type: 'h2', text: 'The comfort argument nobody makes' },
      {
        type: 'p',
        text: 'Padel has a large recreational base playing several times a week, and elbow and shoulder complaints are common. A stiff carbon face transmits more vibration into the arm than fibreglass does. For a range aimed at club players rather than competitors, that is a genuine commercial consideration, not a compromise — softer rackets get played more and returned less.',
      },

      { type: 'h2', text: 'Hybrids and blends' },
      {
        type: 'p',
        text: 'The choice is not binary. Fibreglass-carbon hybrid layups place each material where it helps, and Kevlar-carbon blends add damping while keeping stiffness. If you have a specific feel or a specific price point to hit, the layup is usually a better lever than switching material outright.',
      },

      { type: 'h2', text: 'How to decide for your line' },
      {
        type: 'list',
        items: [
          'Beginner and club ranges — fibreglass or a hybrid. More forgiving, more comfortable, and cheaper to reach a price point.',
          'All-round flagship models — 12K or 18K carbon, which balances stiffness against cost.',
          'Competition tier — 24K carbon, for players with the swing speed to use the stiffness.',
          'Mixed range — specify per model rather than committing the whole line to one material.',
        ],
      },
    ],
    related: [
      { label: 'Carbon fibre grades explained', href: '/blog/carbon-fiber-grades-3k-12k-18k-24k-explained' },
      { label: 'EVA core hardness explained', href: '/blog/eva-core-hardness-explained' },
      { label: 'Configure a spec', href: '/catalogue' },
    ],
  },

  {
    slug: 'how-to-choose-your-first-padel-racket',
    title: 'How to choose your first padel racket',
    metaTitle: 'How to Choose Your First Padel Racket — Beginner Guide',
    metaDescription:
      'A beginner guide to buying a padel racket: which shape, weight, balance and core to look for, and the mistakes that cost new players most.',
    category: 'Buying guide',
    date: PUBLISHED,
    summary:
      'Buy round, light and soft. Almost every beginner mistake comes from buying the racket a professional uses instead of the one that suits a developing swing.',
    hero: {
      src: '/images/blog/padel-rackets-court.png',
      alt: 'Two unbranded carbon padel rackets and balls resting against the net on a blue court',
    },
    blocks: [
      {
        type: 'p',
        text: 'Padel is unusually easy to start and unusually easy to buy badly for. The rackets that get marketed hardest are the ones professionals use, and those are close to the worst possible choice for someone who has played five times.',
      },

      { type: 'h2', text: 'Start with shape' },
      {
        type: 'p',
        text: 'Round is the beginner shape, and this is not a compromise. A round racket puts the sweet spot low and central, closest to your hand, which means off-centre hits — most of your hits, early on — still go where you intended. It is also the most forgiving on the wrist.',
      },
      {
        type: 'p',
        text: 'Diamond rackets concentrate weight high in the head. They hit harder if you catch the ball perfectly and punish you severely if you do not. Teardrop sits between the two and is a reasonable second racket once your contact is consistent.',
      },

      { type: 'h2', text: 'Then weight and balance' },
      {
        type: 'p',
        text: 'Padel rackets typically run 350-380g, with the balance point somewhere between 260 and 275mm. Lighter and lower-balanced is easier: the racket moves faster, reacts better at the net, and is far less tiring across two hours.',
      },
      {
        type: 'p',
        text: 'Heavier rackets do generate more power, but only if you can still swing them properly at the end of a match. Most players overestimate the weight they want.',
      },

      { type: 'h2', text: 'The core matters more than you think' },
      {
        type: 'p',
        text: 'A soft EVA core — around 13-15° hardness — holds the ball fractionally longer, which improves control and, more importantly, absorbs shock. Padel elbow is common among people who play several times a week on stiff equipment. A softer core is the single easiest thing to get right for comfort.',
      },

      { type: 'h2', text: 'Face material' },
      {
        type: 'p',
        text: 'Fibreglass or a low-grade carbon such as 3K suits a first racket. Both flex more than high-grade carbon, which adds forgiveness and free power at slower swing speeds. Save 18K and 24K carbon for when your technique can use the stiffness.',
      },

      { type: 'h2', text: 'Mistakes worth avoiding' },
      {
        type: 'list',
        items: [
          'Buying the racket your favourite professional uses. It is almost certainly a heavy diamond.',
          'Choosing on looks. Graphics tell you nothing about shape, weight or core.',
          'Assuming a higher carbon number is better. It means a bigger weave, not a better racket.',
          'Skipping the wrist strap. It is mandatory on most courts, and it protects other players.',
          'Ignoring grip size. Too thin makes you squeeze harder, which is how elbows get injured.',
        ],
      },

      { type: 'h2', text: 'A sensible first spec' },
      {
        type: 'p',
        text: 'If you want one answer: a round racket, around 355-365g, low balance, soft EVA core, fibreglass or 3K carbon face. That covers most new players comfortably for a year or two, and by the time it wears out you will know from experience what you want to change.',
      },
    ],
    related: [
      { label: 'Round, teardrop or diamond', href: '/blog/padel-racket-shapes-round-teardrop-diamond' },
      { label: 'Carbon fibre vs fibreglass', href: '/blog/carbon-fibre-vs-fibreglass-padel-rackets' },
      { label: 'Padel vs pickleball', href: '/blog/padel-vs-pickleball-differences' },
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
