import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/landing/CTABanner';
import SpecConfigurator from '@/components/catalogue/SpecConfigurator';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Padel Racket & Pickleball Paddle Moulds',
  description:
    'Our OEM padel racket moulds in round, teardrop and diamond, and pickleball paddles in EPP foam and PP honeycomb cores. Per-model dimensions, weights and balance.',
  alternates: { canonical: '/products' },
};

/* ------------------------------------------------------------------ */
/* Model data                                                          */
/*                                                                     */
/* Every figure below is transcribed from the OEM catalogues           */
/* (SIAL_Athletics_OEM_Padel_Catalogue.pdf and the pickleball          */
/* equivalent). Nothing here is estimated — if a spec is not in the    */
/* catalogue it is not shown. Each family lists the first three moulds */
/* from its catalogue page.                                            */
/* ------------------------------------------------------------------ */

type Model = {
  /** Internal mould reference. Never rendered, never published — it is only
   *  a stable key and a way to trace a card back to the catalogue. */
  code: string;
  /** Pickleball designs carry a public colourway name; padel moulds do not. */
  name?: string;
  image: string;
  alt: string;
  specs: [string, string][];
};

type Family = {
  id: string;
  title: string;
  tagline: string;
  blurb: string;
  models: Model[];
};

const PADEL_SHARED: [string, string][] = [
  ['Weight', '360 ±10 g'],
  ['Length', '455–460 mm'],
];

const padelFamilies: Family[] = [
  {
    id: 'round',
    title: 'Round',
    tagline: 'Centred sweet spot · low balance · control',
    blurb:
      'Balanced, centred sweet spot and the most forgiving of the three families. Low balance point, control-oriented. Best suited to club, academy and rental programmes.',
    models: [
      {
        code: 'SA-4013',
        image: '/images/products/padel/round-1.png',
        alt: 'Round padel racket mould, black carbon face with white hole detailing',
        specs: [['Thickness', '38 mm'], ...PADEL_SHARED, ['Width', '260 mm'], ['Frame length', '90 cm'], ['Balance', 'Low']],
      },
      {
        code: 'SA-4015',
        image: '/images/products/padel/round-2.png',
        alt: 'Round padel racket mould, black carbon face with a compact hole pattern',
        specs: [['Thickness', '38 mm'], ...PADEL_SHARED, ['Width', '260 mm'], ['Frame length', '91 cm'], ['Balance', 'Low']],
      },
      {
        code: 'SA-4018',
        image: '/images/products/padel/round-3.png',
        alt: 'Round padel racket mould with a 36 mm black carbon face',
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
        image: '/images/products/padel/teardrop-1.png',
        alt: 'Teardrop padel racket mould, black carbon face with red hole rings',
        specs: [['Thickness', '38 mm'], ...PADEL_SHARED, ['Width', '260 mm'], ['Frame length', '90 cm'], ['Balance', 'Mid']],
      },
      {
        code: 'SA-4012',
        image: '/images/products/padel/teardrop-2.png',
        alt: 'Teardrop padel racket mould with a matte black carbon face',
        specs: [['Thickness', '38 mm'], ...PADEL_SHARED, ['Width', '260 mm'], ['Frame length', '91 cm'], ['Balance', 'Mid']],
      },
      {
        code: 'SA-4042',
        image: '/images/products/padel/teardrop-3.png',
        alt: 'Teardrop padel racket mould, black carbon face on the narrower 258 mm width',
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
        image: '/images/products/padel/diamond-1.png',
        alt: 'Diamond padel racket mould, chequered carbon weave with a red throat detail',
        specs: [['Thickness', '38 mm'], ...PADEL_SHARED, ['Width', '260 mm'], ['Frame length', '90 cm'], ['Balance', 'High']],
      },
      {
        code: 'SA-4029',
        image: '/images/products/padel/diamond-2.png',
        alt: 'Diamond padel racket mould, black carbon face with white hole detailing',
        specs: [['Thickness', '38 mm'], ...PADEL_SHARED, ['Width', '261 mm'], ['Frame length', '91 cm'], ['Balance', 'High']],
      },
      {
        code: 'SA-4043',
        image: '/images/products/padel/diamond-3.png',
        alt: 'Diamond padel racket mould with a textured black carbon face',
        specs: [['Thickness', '38 mm'], ...PADEL_SHARED, ['Width', '260 mm'], ['Frame length', '90 cm'], ['Balance', 'High']],
      },
    ],
  },
];

const pickleballFamilies: Family[] = [
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
      {
        code: 'SA-PB-203',
        name: 'Azure Grit',
        image: '/images/products/pickleball/azure-grit.png',
        alt: 'SIAL Athletics Azure Grit pickleball paddle, black face with blue bumper and blue grip',
        specs: [['Core', 'PP honeycomb'], ['Face', 'T700 carbon fibre'], ['Thickness', '16 mm'], ['Shape', 'Standard'], ['Size', '19.1 × 41.9 cm'], ['Edge / grip', 'Blue bumper, blue grip']],
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

/* ------------------------------------------------------------------ */
/* Build options — transcribed from page 1 of each catalogue           */
/* ------------------------------------------------------------------ */

const padelOptions: { title: string; items: string[] }[] = [
  { title: 'Shape', items: ['Round', 'Teardrop', 'Diamond', 'Hybrid', 'Custom Mould'] },
  { title: 'Carbon Options', items: ['3K Carbon Fiber', '12K Carbon Fiber', '18K Carbon Fiber', '24K Carbon Fiber', 'Silver Carbon Fiber', 'Kevlar Carbon Hybrid'] },
  { title: 'Core Options', items: ['Black EVA (High-Density)', 'Soft EVA (13–15°)', 'Memory / High-Rebound EVA'] },
  { title: 'Frame Construction', items: ['Monoblock Carbon Frame', 'Carbon Frame + Glass Fiber Face', 'Reinforced Frame', 'Integrated Protectors', 'Composite Bonding'] },
  { title: 'Surface Textures', items: ['Smooth Finish', 'Sand Grit', '3D Grain', '3D Hexagon', 'Hybrid (Sand + 3D)'] },
  { title: 'Paint & Coating', items: ['Matte Finish', 'Glossy Finish', 'UV-Resistant Paint', 'Chameleon Paint', 'Metallic Decals', 'Water-Transfer Decals', 'High-Contrast Neon Colors', 'Sublimation'] },
];

const pickleballOptions: { title: string; items: string[] }[] = [
  { title: 'Core', items: ['EPP Foam', 'PP Honeycomb'] },
  { title: 'Core Thickness', items: ['16 mm (standard)', '14 mm (on request)'] },
  { title: 'Face Material', items: ['T700 Carbon Fibre', 'Woven T700', 'Sandblasted T700', 'Fiberglass', 'Kevlar Hybrid'] },
  { title: 'Shape & Size', items: ['Elongated 18.5 × 41.9 cm', 'Standard 19.1 × 41.9 cm', 'Widebody 20.3 × 40.6 cm', 'Custom Shape'] },
  { title: 'Construction', items: ['Thermoformed', 'Cold-Pressed', 'Foam-Injected Walls', 'Unibody Handle', 'Open-Throat Frame'] },
  { title: 'Surface Finish', items: ['Raw Peel-Ply', 'Sandblasting', '3D Texture', 'Matte', 'Gloss'] },
  { title: 'Branding & Print', items: ['Full-Face Sublimation', 'Screen Print', 'Water-Transfer Decals', 'Edge Guard Colour', 'Custom Grip', 'Retail Packaging'] },
];

/* ------------------------------------------------------------------ */
/* Static building blocks (server-rendered, CSS-only effects)          */
/* ------------------------------------------------------------------ */

function ModelCard({ model }: { model: Model }) {
  return (
    <article className="model-card">
      <div className="model-card__media">
        <Image
          src={model.image}
          alt={model.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="model-card__body">
        {model.name && <h4 className="hp-display model-card__name">{model.name}</h4>}
        <dl className="model-card__specs">
          {model.specs.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

function FamilyBlock({ family }: { family: Family }) {
  return (
    <div className="fam" id={family.id}>
      <div className="fam__head">
        <h3 className="hp-display fam__title">{family.title}</h3>
        <p className="fam__tagline">{family.tagline}</p>
        <p className="fam__blurb">{family.blurb}</p>
      </div>
      <div className="model-grid">
        {/* Keyed on the image slug, not the mould code: React keys are
            serialised into the RSC payload, so a code used as a key would
            still be published in the page source. */}
        {family.models.map((m) => <ModelCard key={m.image} model={m} />)}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Structured data — built from the catalogue models above. No price   */
/* or availability: these are build-to-order moulds, not retail SKUs.  */
/* ------------------------------------------------------------------ */

/**
 * Mould codes are internal, so they are not published — not as text and not as
 * a `sku`. Padel moulds are unbranded blanks that differ only in dimensions, so
 * they are described once per shape family; pickleball designs carry real
 * colourway names and keep an entry each.
 */
function padelFamilyJsonLd(family: Family) {
  const balance = family.models[0].specs.find(([k]) => k === 'Balance')?.[1] ?? '';
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `SIAL Athletics ${family.title} Padel Racket`,
    description: family.blurb,
    category: 'Padel Racket',
    brand: { '@type': 'Brand', name: 'SIAL Athletics' },
    image: `https://www.sialathletics.com${encodeURI(family.models[0].image)}`,
    additionalProperty: [
      ['Shape', family.title],
      ['Weight', '360 ±10 g'],
      ['Length', '455–460 mm'],
      ['Thickness', '36–38 mm'],
      ['Balance', balance],
    ].map(([name, value]) => ({ '@type': 'PropertyValue', name, value })),
  };
}

function pickleballJsonLd(model: Model, family: Family) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `SIAL Athletics ${model.name} Pickleball Paddle`,
    description: family.blurb,
    category: 'Pickleball Paddle',
    brand: { '@type': 'Brand', name: 'SIAL Athletics' },
    image: `https://www.sialathletics.com${encodeURI(model.image)}`,
    additionalProperty: model.specs.map(([name, value]) => ({ '@type': 'PropertyValue', name, value })),
  };
}

const allModels = [
  ...padelFamilies.map(padelFamilyJsonLd),
  ...pickleballFamilies.flatMap((f) => f.models.map((m) => pickleballJsonLd(m, f))),
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function ProductsPage() {
  return (
    <main style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
      <JsonLd data={breadcrumbJsonLd('Products', '/products')} />
      {allModels.map((p, i) => <JsonLd key={i} data={p} />)}

      <PageHero
        crumb="Products"
        title="Padel rackets and pickleball paddles, built to spec."
        subtitle="Every mould is supplied blank. Pick a shape, then specify the build."
        image="/images/products/productpage_section.png"
        imageAlt="Carbon padel racket manufactured by SIAL Athletics"
      />

      {/* ------------------------- PADEL ------------------------- */}
      <section id="padel" className="site-section plat-anchor" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)', borderTop: '1px solid var(--hp-ink-line)' }}>
        <div className="container-custom">
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '720px' }}>
            <h2 className="hp-display hp-h2">Padel rackets</h2>
            <p className="hp-lede">
              Three shape families, three moulds each. Standard build is 360 ±10 g,
              455–460 mm long, 36–38 mm thick.
            </p>
          </div>

          {padelFamilies.map((f) => <FamilyBlock key={f.id} family={f} />)}

          <div className="opt-section">
            <h3 className="hp-display opt-section__title">Padel build options</h3>
            <p className="opt-section__intro">
              Pick the options you want, then send them to us as a quote request.
            </p>
            <SpecConfigurator category="Padel racket" productLine="Padel Rackets" groups={padelOptions} />
          </div>
        </div>
      </section>

      {/* ----------------------- PICKLEBALL ----------------------- */}
      <section id="pickleball" className="site-section plat-anchor" style={{ background: 'var(--surface-2)', backgroundImage: 'var(--hp-tex)', borderTop: '1px solid var(--hp-ink-line)' }}>
        <div className="container-custom">
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '720px' }}>
            <h2 className="hp-display hp-h2">Pickleball paddles</h2>
            <p className="hp-lede">
              Two cores across three shapes, all on a T700 carbon fibre face at 16 mm.
              Every design can be built on either core, in any shape.
            </p>
          </div>

          {pickleballFamilies.map((f) => <FamilyBlock key={f.id} family={f} />)}

          <div className="opt-section">
            <h3 className="hp-display opt-section__title">Pickleball build options</h3>
            <p className="opt-section__intro">
              Pick the options you want, then send them to us as a quote request.
            </p>
            <SpecConfigurator category="Pickleball paddle" productLine="Pickleball Paddles" groups={pickleballOptions} />
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to configure your line?"
        subtext="Tell us the mould, target price point and volume. We reply within 24 hours."
        primaryLabel="Start an inquiry"
      />
      <style>{`
        .plat-anchor { scroll-margin-top: 90px; }

        /* --- shape family / series block --- */
        .fam + .fam { margin-top: clamp(2.75rem, 5vw, 4rem); }
        .fam__head {
          max-width: 46rem;
          margin-bottom: 1.6rem;
          padding-top: 1.4rem;
          border-top: 1px solid var(--hp-ink-line);
        }
        .fam__title { font-size: clamp(1.35rem, 2.4vw, 1.7rem); color: var(--hp-ink); margin: 0; }
        .fam__tagline {
          font-family: var(--hp-body);
          font-size: 0.85rem;
          color: var(--hp-ink-45);
          margin: 0.35rem 0 0;
        }
        .fam__blurb {
          font-family: var(--hp-body);
          font-size: 0.95rem;
          line-height: 1.62;
          color: var(--hp-ink-70);
          margin: 0.75rem 0 0;
        }

        /* --- model cards --- */
        .model-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .model-card {
          display: flex;
          flex-direction: column;
          background: var(--surface);
          border: 1px solid var(--hp-ink-line);
          transition: border-color 0.3s var(--hp-ease);
        }
        .model-card:hover { border-color: var(--hp-ink-45); }
        .model-card__media {
          position: relative;
          aspect-ratio: 4 / 3;
          background: var(--surface);
          border-bottom: 1px solid var(--hp-ink-line);
          overflow: hidden;
        }
        .model-card__media img { transition: transform 0.6s var(--hp-ease); padding: 0.9rem; }
        .model-card:hover .model-card__media img { transform: scale(1.04); }
        .model-card__body { padding: 1.25rem 1.35rem 1.4rem; display: flex; flex-direction: column; flex: 1; }
        .model-card__name { font-size: 1.1rem; color: var(--hp-ink); margin: 0; }
        .model-card__specs { margin: 1rem 0 0; display: grid; gap: 0; }
        /* Padel cards carry no heading, so the table starts flush. */
        .model-card__specs:first-child { margin-top: 0; }
        .model-card__specs > div {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.45rem 0;
          border-top: 1px solid var(--hp-ink-line-soft);
        }
        .model-card__specs dt {
          font-family: var(--hp-body);
          font-size: 0.8rem;
          color: var(--hp-ink-45);
          flex: 0 0 auto;
        }
        .model-card__specs dd {
          margin: 0;
          font-family: var(--hp-body);
          font-size: 0.8rem;
          color: var(--hp-ink);
          text-align: right;
          line-height: 1.45;
        }

        /* --- option groups --- */
        .opt-section { margin-top: clamp(3rem, 6vw, 4.5rem); }
        .opt-section__title { font-size: clamp(1.4rem, 2.6vw, 1.8rem); color: var(--hp-ink); margin: 0 0 0.8rem; }
        .opt-section__intro {
          font-family: var(--hp-body);
          font-size: 0.9rem;
          color: var(--hp-ink-70);
          line-height: 1.65;
          max-width: 620px;
          margin: 0 0 2rem;
        }
        .opt-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .opt-group {
          background: var(--surface);
          border: 1px solid var(--hp-ink-line);
          padding: 1.5rem;
        }
        .opt-group__title {
          font-family: var(--hp-body);
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--hp-ink);
          margin: 0 0 1rem;
        }
        .opt-group__chips { display: flex; flex-wrap: wrap; gap: 0.45rem; }
        .opt-group__chip {
          font-family: var(--hp-body);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--hp-ink-70);
          border: 1px solid var(--hp-ink-line);
          padding: 0.32rem 0.6rem;
        }
        button.opt-group__chip {
          background: transparent;
          cursor: pointer;
          transition: border-color 0.18s ease, color 0.18s ease, background 0.18s ease;
        }
        button.opt-group__chip:hover { border-color: var(--hp-ink-45); color: var(--hp-ink); }
        .opt-group__chip.is-selected {
          border-color: var(--hp-ink);
          color: var(--hp-paper);
          background: var(--hp-ink);
        }
        .spec-bar {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-top: 2rem;
        }
        .spec-bar .hp-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .spec-bar__count { font-family: var(--hp-body); font-size: 0.8rem; color: var(--hp-ink-70); }
        .spec-bar__clear {
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--hp-body);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--hp-ink-70);
          text-decoration: underline;
          text-underline-offset: 0.25em;
          padding: 0;
        }

        /* --- responsive --- */
        @media (max-width: 1024px) {
          .opt-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 860px) {
          .model-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .model-grid { grid-template-columns: 1fr; }
          .opt-grid { grid-template-columns: 1fr; }
        }
      `}</style>

    </main>
  );
}
