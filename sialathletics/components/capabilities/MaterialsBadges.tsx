'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const materialFamilies = [
  {
    key: 'carbon',
    tab: 'Carbon Fiber',
    title: 'Carbon Fiber Grades',
    desc: 'The face material sets stiffness, feel, and price. All grades below are available across our range.',
    image: '/images/manufacturing/carbon-types.png',
    alt: 'Comparison of 3K, 12K, 18K, and 24K carbon fiber weave grades',
  },
  {
    key: 'eva',
    tab: 'EVA Core',
    title: 'Core (EVA Foam)',
    desc: 'The core defines the feel — soft for control, firm for power.',
    image: '/images/manufacturing/eva-core.png',
    alt: 'Comparison of black EVA, soft EVA, and memory/high-rebound EVA core foams',
  },
  {
    key: 'texture',
    tab: 'Surface Texture',
    title: 'Surface Texture',
    desc: '3D texture is molded into the frame and does not wear off. Sand finishes grip harder when new but soften with play.',
    image: '/images/manufacturing/textures.png',
    alt: 'Comparison of 3D, matte, glossy, and sand-paint surface finish options',
  },
] as const;

const shapes: { key: 'teardrop' | 'round' | 'diamond'; name: string; desc: string }[] = [
  { key: 'teardrop', name: 'Teardrop', desc: 'All-rounder — balanced sweet spot and power.' },
  { key: 'round', name: 'Round', desc: 'Control-oriented, largest sweet spot.' },
  { key: 'diamond', name: 'Diamond', desc: 'Power-oriented, weight toward the head.' },
];

export default function MaterialsBadges() {
  return (
    <section style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)', borderTop: '1px solid var(--hp-ink-line)', padding: 'var(--hp-gap) 0' }}>
      <div className="hp-shell">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2.5rem', maxWidth: '640px' }}
        >
          <h2 className="hp-display hp-h2">Materials we work with</h2>
          <p className="hp-lede" style={{ marginBottom: '1.75rem' }}>
            Every grade, core and finish below is available across our racket lines. We match the
            combination to your price point and play style.
          </p>
          <div className="mat-points">
            {[
              'Carbon fiber in 3K, 12K, 18K, and 24K grades',
              'EVA foam cores in multiple hardness levels',
              'Several surface textures for spin and control',
              'Molded and hybrid frame options',
            ].map((point) => (
              <div key={point} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--hp-ink-45)', fontFamily: 'var(--hp-body)', fontSize: '0.9rem', lineHeight: 1.55, flexShrink: 0 }}>—</span>
                <span style={{ fontFamily: 'var(--hp-body)', fontSize: '0.92rem', color: 'var(--hp-ink-70)', lineHeight: 1.55 }}>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Material families — tabbed reference panel (distinct from the
            alternating image/text rows used elsewhere on the site) */}
        <MaterialTabs />

        {/* Frame & Spec + Shapes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.24 }}
          style={{ borderTop: '1px solid var(--hp-ink-line)', paddingTop: '2rem' }}
        >
          <h3 className="hp-display" style={{ fontSize: '1.3rem', color: 'var(--hp-ink)', marginBottom: '1.5rem', marginTop: 0 }}>
            Frame and spec
          </h3>
          <div className="materials-spec-grid" style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
            {[
              { label: 'Construction', value: 'Integrated frame and protector construction as standard; composite bonding available for multi-material hybrids' },
              { label: 'Thickness', value: '38mm standard' },
              { label: 'Weight', value: '350–380g (350–360g lightweight, 370g+ power)' },
              { label: 'Balance', value: 'Low / Mid / High, 260–275mm' },
            ].map((spec) => (
              <div key={spec.label}>
                <p className="hp-kicker" style={{ margin: 0, marginBottom: '0.35rem' }}>
                  {spec.label}
                </p>
                <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.92rem', color: 'var(--hp-ink)', lineHeight: 1.6, margin: 0 }}>
                  {spec.value}
                </p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--hp-ink-line)', paddingTop: '1.75rem', display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
            {shapes.map((shape) => (
              <div key={shape.key} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Image src={`/images/${shape.key}_icon.png`} alt={`${shape.name} racket shape icon`} width={48} height={48} />
                <div>
                  <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.92rem', fontWeight: 600, color: 'var(--hp-ink)', margin: 0 }}>{shape.name}</p>
                  <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.85rem', color: 'var(--hp-ink-70)', margin: 0 }}>{shape.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .mat-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem 1.5rem;
        }
        .materials-spec-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 1024px) {
          .materials-spec-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .mat-points {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 520px) {
          .materials-spec-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

function MaterialTabs() {
  const [active, setActive] = useState<typeof materialFamilies[number]['key']>('carbon');

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '3rem' }}
    >
      <div className="mat-tabs" role="tablist" aria-label="Material families">
        {materialFamilies.map((m) => (
          <button
            key={m.key}
            role="tab"
            type="button"
            aria-selected={active === m.key}
            className={`mat-tabs__btn${active === m.key ? ' is-active' : ''}`}
            onClick={() => setActive(m.key)}
          >
            {m.tab}
          </button>
        ))}
      </div>

      {/* Every panel is rendered and the inactive ones are hidden with CSS,
          rather than only mounting the active tab. Mounting one at a time
          kept two thirds of this section out of the server HTML, so crawlers
          never saw the core and texture copy. */}
      <div className="mat-panel">
        {materialFamilies.map((m) => (
          <motion.div
            key={m.key}
            role="tabpanel"
            hidden={m.key !== active}
            animate={{ opacity: m.key === active ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mat-panel__media">
              <Image src={m.image} alt={m.alt} fill sizes="(max-width: 900px) 100vw, 1100px" style={{ objectFit: 'contain' }} priority={m.key === 'carbon'} />
            </div>
            <div className="mat-panel__body">
              <h3 className="hp-display mat-panel__title">{m.title}</h3>
              <p className="mat-panel__desc">{m.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .mat-tabs { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 1.5rem; }
        .mat-tabs__btn {
          font-family: var(--hp-body); font-size: 0.88rem; font-weight: 600;
          color: var(--hp-ink-70); background: transparent;
          border: 1px solid var(--hp-ink-line); padding: 0.65rem 1.2rem; cursor: pointer;
          transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .mat-tabs__btn:hover { color: var(--hp-ink); border-color: var(--hp-ink); }
        .mat-tabs__btn.is-active { color: var(--hp-paper); background: var(--hp-ink); border-color: var(--hp-ink); }
        .mat-panel { background: var(--surface); border: 1px solid var(--hp-ink-line); }
        .mat-panel__media { position: relative; width: 100%; aspect-ratio: 16 / 9; background: var(--surface-sunken); }
        .mat-panel__body { padding: 1.5rem 1.75rem 1.85rem; border-top: 1px solid var(--hp-ink-line); }
        .mat-panel__title { font-size: clamp(1.2rem, 2.2vw, 1.5rem); color: var(--hp-ink); margin: 0 0 0.5rem; }
        .mat-panel__desc { font-family: var(--hp-body); font-size: 0.95rem; line-height: 1.65; color: var(--hp-ink-70); margin: 0; max-width: 46rem; }
        @media (max-width: 640px) {
          .mat-panel__media { aspect-ratio: 4 / 3; }
        }
      `}</style>
    </motion.div>
  );
}
