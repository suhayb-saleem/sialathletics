import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import CTABanner from '@/components/landing/CTABanner';
import SpecConfigurator from '@/components/catalogue/SpecConfigurator';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Padel & Pickleball Manufacturing Platforms',
  description: 'Configure your padel racket or pickleball paddle line on our manufacturing platforms: round, teardrop, diamond, and hybrid molds, fully customizable.',
  alternates: { canonical: '/products' },
};

/* ------------------------------------------------------------------ */
/* Platform data                                                       */
/* ------------------------------------------------------------------ */

type Platform = {
  name: string;
  tag: string;
  desc: string;
  meter: number | null; // 0-100 control→power position; null = custom/to-spec
  image?: string;
};

const padelPlatforms: Platform[] = [
  {
    name: 'Round',
    tag: 'Control',
    desc: 'The largest sweet spot, for precision and consistency. Good for club and beginner lines.',
    meter: 14,
    image: '/images/products/round_padel.png',
  },
  {
    name: 'Teardrop',
    tag: 'Balanced Performance',
    desc: 'A balance of control and power. Our most popular shape for a flagship model.',
    meter: 50,
    image: '/images/products/teardrop_padel.png',
  },
  {
    name: 'Diamond',
    tag: 'Maximum Power',
    desc: 'Head-weighted for aggressive play. Built for advanced and competition lines.',
    meter: 88,
    image: '/images/products/Diamond_padel.png',
  },
  {
    name: 'Hybrid',
    tag: 'To Your Specification',
    desc: 'A shape built around your play style, anywhere between round and diamond. We can also build a fully custom mold.',
    meter: null,
    image: '/images/products/hybrid_padel.png',
  },
];

const pickleballPlatforms: Platform[] = [
  {
    name: 'Control',
    tag: 'Touch & Placement',
    desc: 'A thicker core tuned for feel and placement — for players who win with the soft game.',
    meter: 14,
    image: '/images/products/pickleball_widebody.png',
  },
  {
    name: 'Balanced',
    tag: 'All-Court Performance',
    desc: 'Pop without losing touch. A good base for a brand\'s core model.',
    meter: 50,
    image: '/images/products/pickleball_hybrid.png',
  },
  {
    name: 'Power',
    tag: 'Drive & Speed',
    desc: 'A thinner core and firmer face for drive, speed, and put-aways.',
    meter: 86,
    image: '/images/products/pickleball elongated.png',
  },
];

/* ------------------------------------------------------------------ */
/* Manufacturing options                                               */
/* ------------------------------------------------------------------ */

const padelOptions: { title: string; items: string[] }[] = [
  {
    title: 'Shape',
    items: ['Round', 'Teardrop', 'Diamond', 'Hybrid', 'Custom Mold'],
  },
  {
    title: 'Carbon Options',
    items: ['3K Carbon Fiber', '12K Carbon Fiber', '18K Carbon Fiber', '24K Carbon Fiber', 'Silver Carbon Fiber', 'Kevlar Carbon Hybrid'],
  },
  {
    title: 'Core Options',
    items: ['Black EVA (High-Density)', 'Soft EVA (13–15°)', 'Memory / High-Rebound EVA'],
  },
  {
    title: 'Frame Construction',
    items: ['Monoblock Carbon Frame', 'Carbon Frame + Glass Fiber Face', 'Reinforced Frame', 'Integrated Protectors', 'Composite Bonding'],
  },
  {
    title: 'Surface Textures',
    items: ['Smooth Finish', 'Sand Grit', '3D Grain', '3D Hexagon', 'Hybrid (Sand + 3D)'],
  },
  {
    title: 'Paint & Coating',
    items: ['Matte Finish', 'Glossy Finish', 'UV-Resistant Paint', 'Chameleon Paint', 'Metallic Decals', 'Water-Transfer Decals', 'High-Contrast Neon Colors', 'Sublimation'],
  },
];

const pickleballOptions: { title: string; items: string[] }[] = [
  {
    title: 'Face Materials',
    items: ['Carbon Fiber (T300 / T700)', 'Raw T700 Carbon Fiber', '3K Carbon Fiber', 'Fiberglass', 'Kevlar'],
  },
  // Core is not a chip group: every paddle uses a polypropylene honeycomb
  // core, so it is stated in the section intro rather than offered as a
  // one-option choice.
  {
    title: 'Thickness Options',
    items: ['13 mm', '14 mm', '16 mm'],
  },
  {
    title: 'Edge Construction',
    items: ['Low Profile Edge Guard', 'TPU Edge Guard', 'Slim Edge Protection', 'Integrated Thermoformed Edges', 'Edgeless Design'],
  },
  {
    title: 'Grip Options',
    items: ['Perforated Cushion Grip', 'Moisture-Wicking Grip', 'PU Leather Grip', 'Synthetic Rubber Grip', 'Ergonomic Ribbed Grip'],
  },
  {
    title: 'Surface Finishes',
    items: ['Raw Carbon Texture', 'Micro Texture', 'Sandblasted Grit Finish', 'Friction-Enhanced Grit Paint'],
  },
  {
    title: 'Branding & Printing',
    items: ['UV Printing', 'Silk Screen Printing', 'Water Decals', 'Digital Printing', 'Laser Engraving', 'Full Surface Sublimation', 'Heat Transfer Printing'],
  },
];

const services: { title: string; items: string[] }[] = [
  {
    title: 'Manufacturing Services',
    items: ['OEM Manufacturing', 'ODM Manufacturing', 'Private Label', 'Bespoke Production', 'Thermoforming'],
  },
  {
    title: 'Customization',
    items: ['Logo', 'Colors', 'Graphics', 'Size', 'Brand Personalization', 'Edge Guard', 'Handle Wrap', 'Custom Packaging'],
  },
  {
    title: 'Sampling & MOQ',
    items: ['Custom Sample Development', 'Low MOQ Options', 'Flexible Production Quantities'],
  },
];

/* ------------------------------------------------------------------ */
/* Static building blocks (server-rendered, CSS-only effects)          */
/* ------------------------------------------------------------------ */

function PlatformCard({ platform, category }: { platform: Platform; category: string }) {
  return (
    <article className="plat-card">
      <div className={`plat-card__media${platform.image ? '' : ' plat-card__media--empty'}`} aria-hidden="true" style={{ position: 'relative' }}>
        {platform.image ? (
          <Image src={platform.image} alt={`SIAL Athletics ${platform.name} ${category} — ${platform.tag}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: 'contain', padding: '0.75rem' }} />
        ) : (
          <span className="plat-card__media-label">Visual coming soon</span>
        )}
      </div>
      <div className="plat-card__body">
        <h3 className="hp-display plat-card__name">{platform.name}</h3>
        <p className="plat-card__tag">{platform.tag}</p>
        <p className="plat-card__desc">{platform.desc}</p>
        <div className="plat-card__meter">
          <div className="plat-card__meter-labels"><span>Control</span><span>Power</span></div>
          <div className="plat-card__meter-track">
            {platform.meter === null
              ? <span className="plat-card__meter-fill" />
              : <span className="plat-card__meter-dot" style={{ left: `${platform.meter}%` }} />}
          </div>
          {platform.meter === null && <p className="plat-card__meter-note">Tuned anywhere on the spectrum</p>}
        </div>
      </div>
    </article>
  );
}

function OptionGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="opt-group">
      <h4 className="opt-group__title">{title}</h4>
      <div className="opt-group__chips">
        {items.map((item) => (
          <span key={item} className="opt-group__chip">{item}</span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Structured data — Product schema built from the actual platform     */
/* data above (no invented pricing/availability: these are build-to-   */
/* order manufacturing platforms, not fixed retail SKUs).               */
/* ------------------------------------------------------------------ */

function platformJsonLd(platform: Platform, category: 'Padel Racket' | 'Pickleball Paddle') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `SIAL Athletics ${platform.name} ${category}`,
    description: platform.desc,
    category,
    brand: { '@type': 'Brand', name: 'SIAL Athletics' },
    ...(platform.image ? { image: `https://www.sialathletics.com${encodeURI(platform.image)}` } : {}),
  };
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CataloguePage() {
  return (
    <main style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
      <JsonLd data={breadcrumbJsonLd('Products', '/products')} />
      {[...padelPlatforms.map((p) => platformJsonLd(p, 'Padel Racket')), ...pickleballPlatforms.map((p) => platformJsonLd(p, 'Pickleball Paddle'))].map((p, i) => (
        <JsonLd key={i} data={p} />
      ))}
      <PageHero
        crumb="Products"
        title="Padel rackets and pickleball paddles, built to spec."
        subtitle="Pick a shape, then customise the materials, branding and packaging. Every model here is a starting point, not a fixed SKU."
        image="/images/products/productpage_section.png"
        imageAlt="Carbon padel racket manufactured by SIAL Athletics"
      />

      {/* How the platform model works */}
      <section className="site-section" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)', borderTop: '1px solid var(--hp-ink-line)' }}>
        <div className="container-custom">
          <div className="plat-steps">
            {[
              { title: 'Choose a shape', desc: 'Start from one of our existing racket or paddle shapes, or brief a custom mould.' },
              // Weight and balance follow from the mould and core, they are not
              // picked from a list — see data/faq.ts.
              { title: 'Spec the build', desc: 'Pick the lay-up, core, texture and finish.' },
              { title: 'Make it yours', desc: 'Add your logo and colours. We sample it, you approve it, we produce it.' },
            ].map((step) => (
              <div key={step.title} className="plat-step">
                <h3 className="hp-display plat-step__title">{step.title}</h3>
                <p className="plat-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------- PADEL ------------------------- */}
      <section id="padel" className="site-section plat-anchor" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)', borderTop: '1px solid var(--hp-ink-line)' }}>
        <div className="container-custom">
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '680px' }}>
            <h2 className="hp-display hp-h2">Padel rackets</h2>
            <p className="hp-lede">
              Four shapes, from control to power. Every one is fully customisable, and we can
              cut a custom mould if you need something different. Weight and balance follow from
              the mould and core you pick, and land in the usual 350–380g range.
            </p>
          </div>

          <div className="plat-grid plat-grid--4">
            {padelPlatforms.map((p) => <PlatformCard key={p.name} platform={p} category="Padel Racket" />)}
          </div>

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
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '680px' }}>
            <h2 className="hp-display hp-h2">Pickleball paddles</h2>
            <p className="hp-lede">
              Three builds: control, balanced and power. Every paddle is built on a
              polypropylene honeycomb core, with the face, thickness, edge, grip, finish and
              branding specified to your requirements.
            </p>
          </div>

          <div className="plat-grid plat-grid--3">
            {pickleballPlatforms.map((p) => <PlatformCard key={p.name} platform={p} category="Pickleball Paddle" />)}
          </div>

          <div className="opt-section">
            <h3 className="hp-display opt-section__title">Pickleball build options</h3>
            <p className="opt-section__intro">
              Pick the options you want, then send them to us as a quote request.
            </p>
            <SpecConfigurator category="Pickleball paddle" productLine="Pickleball Paddles" groups={pickleballOptions} />
          </div>
        </div>
      </section>

      {/* ----------------------- SERVICES ----------------------- */}
      <section className="site-section" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)', borderTop: '1px solid var(--hp-ink-line)' }}>
        <div className="container-custom">
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '680px' }}>
            <h2 className="hp-display hp-h2">Services around the build</h2>
            <p className="hp-lede">
              See{' '}
              <Link href="/manufacturing" className="hp-link">how we manufacture</Link> or read the{' '}
              <Link href="/faq" className="hp-link">buyer FAQ</Link>.
            </p>
          </div>
          <div className="opt-grid opt-grid--services">
            {services.map((group) => <OptionGroup key={group.title} {...group} />)}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to configure your line?"
        subtext="Tell us the shape, target price point and volume. We reply within 24 hours."
        primaryLabel="Start an inquiry"
      />

      <style>{`
        .plat-anchor { scroll-margin-top: 90px; }

        /* --- how-it-works steps --- */
        .plat-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          border-top: 1px solid var(--hp-ink-line);
        }
        .plat-step { padding-top: 1.4rem; }
        .plat-step__title { font-size: 1.1rem; color: var(--hp-ink); margin: 0 0 0.45rem; }
        .plat-step__desc {
          font-family: var(--hp-body);
          font-size: 0.85rem;
          color: var(--hp-ink-70);
          line-height: 1.6;
          margin: 0;
        }

        /* --- platform cards --- */
        .plat-grid { display: grid; gap: 1.5rem; }
        .plat-grid--4 { grid-template-columns: repeat(4, 1fr); }
        .plat-grid--3 { grid-template-columns: repeat(3, 1fr); }
        .plat-card {
          background: var(--surface);
          border: 1px solid var(--hp-ink-line);
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s ease;
        }
        .plat-card:hover { border-color: var(--hp-ink-45); }
        .plat-card__media {
          aspect-ratio: 1 / 1;
          border-bottom: 1px solid var(--hp-ink-line);
          /* Clean surface so cut-out product PNGs sit flush, with no pattern behind them. */
          background: var(--surface);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        /* The hatch pattern is only for cards still awaiting a photo. */
        .plat-card__media--empty {
          background:
            repeating-linear-gradient(-45deg, transparent 0 14px, rgba(20, 17, 15, 0.05) 14px 15px);
        }
        .plat-card__media-label {
          font-family: var(--hp-body);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--hp-ink-70);
          opacity: 0.6;
          border: 1px dashed var(--hp-ink-line);
          padding: 0.5rem 0.9rem;
        }
        .plat-card__body { padding: 1.5rem; display: flex; flex-direction: column; flex: 1; }
        .plat-card__name { font-size: 1.35rem; color: var(--hp-ink); margin: 0 0 0.25rem; }
        .plat-card__tag {
          font-family: var(--hp-body);
          font-size: 0.82rem;
          color: var(--hp-ink-45);
          margin: 0 0 0.8rem;
        }
        .plat-card__desc {
          font-family: var(--hp-body);
          font-size: 0.9rem;
          color: var(--hp-ink-70);
          line-height: 1.65;
          margin: 0 0 1.4rem;
          flex: 1;
        }
        .plat-card__meter-labels {
          display: flex;
          justify-content: space-between;
          font-family: var(--hp-body);
          font-size: 0.72rem;
          color: var(--hp-ink-45);
          margin-bottom: 0.45rem;
        }
        .plat-card__meter-track {
          position: relative;
          height: 2px;
          background: var(--hp-ink-line);
        }
        .plat-card__meter-dot {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--hp-ink);
        }
        .plat-card__meter-fill {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, var(--hp-ink-45), transparent);
        }
        .plat-card__meter-note {
          font-family: var(--hp-body);
          font-size: 0.66rem;
          color: var(--hp-ink-70);
          margin: 0.5rem 0 0;
          letter-spacing: 0.04em;
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
        .opt-grid--services { grid-template-columns: repeat(3, 1fr); }
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
        @media (max-width: 1100px) {
          .plat-grid--4 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 1024px) {
          .opt-grid { grid-template-columns: repeat(2, 1fr); }
          .plat-steps { grid-template-columns: 1fr; gap: 1.5rem; }
        }
        @media (max-width: 860px) {
          .plat-grid--3 { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .plat-grid--4 { grid-template-columns: 1fr; }
          .opt-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
