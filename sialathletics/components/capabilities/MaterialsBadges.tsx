'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import RacketShapeIcon from '@/components/ui/RacketShapeIcon';

const groups = [
  {
    title: 'CARBON FIBER GRADES',
    items: [
      { name: '3K Carbon Fiber', desc: 'Our standard weave — the most widely used grade across the range, balancing stiffness and cost for everyday builds.' },
      { name: '12K Carbon Fiber', desc: 'Heavier tow count than 3K, adding stiffness for a firmer, more powerful ball response.' },
      { name: '18K Carbon Fiber', desc: 'Higher fiber density for advanced, performance-tier builds that need more rigidity without added bulk.' },
      { name: '24K Carbon Fiber', desc: 'Our premium grade — maximum stiffness-to-weight ratio, reserved for competition-level rackets.' },
      { name: 'Fiberglass/Carbon Hybrid', desc: 'Blends fiberglass flex with carbon rigidity for a softer feel, favored in control-oriented builds.' },
      { name: 'Kevlar-Carbon Blend', desc: 'Silver/red premium line — Kevlar’s impact resistance layered with carbon stiffness for our professional-tier rackets.' },
    ],
  },
  {
    title: 'CORE (EVA FOAM)',
    items: [
      { name: 'Black EVA', desc: 'High-density foam, preferred for power and durability in harder-hitting builds.' },
      { name: 'Soft EVA (13–15° hardness)', desc: 'A softer compound tuned for comfort and shock absorption in control-oriented rackets.' },
      { name: 'Memory / High-Rebound EVA', desc: 'Engineered to return to shape rapidly after impact, holding consistent response across a long session.' },
    ],
  },
  {
    title: 'SURFACE TEXTURE',
    items: [
      { name: '3D Grain / Hexagon Mold', desc: 'Texture molded directly into the frame — permanent, won’t wear off like a sprayed-on coating.' },
      { name: 'Sand Grit Finish', desc: 'A rough, gritty surface finish built for maximum spin generation.' },
      { name: '3D Decals', desc: 'Raised graphical elements that double as extra points of ball friction.' },
    ],
  },
];

const shapes: { key: 'teardrop' | 'round' | 'diamond'; name: string; desc: string }[] = [
  { key: 'teardrop', name: 'Teardrop', desc: 'All-rounder — balanced sweet spot and power.' },
  { key: 'round', name: 'Round', desc: 'Control-oriented, largest sweet spot.' },
  { key: 'diamond', name: 'Diamond', desc: 'Power-oriented, weight toward the head.' },
];

export default function MaterialsBadges() {
  return (
    <section className="site-section" style={{ background: 'var(--bg-base)', borderTop: '1px solid var(--line)' }}>
      <div className="container-custom">
        <div style={{ marginBottom: '3rem' }}>
          <SectionLabel>Materials</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--white)', marginTop: '0.9rem' }}>
            Materials we work with.
          </h2>
          <p className="body-copy" style={{ marginTop: '1rem', maxWidth: '640px' }}>
            Every grade, core, and finish below is available across our racket lines. We spec the combination to your target price point and play style — nothing here is a placeholder claim.
          </p>
        </div>

        {/* Banner image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ position: 'relative', aspectRatio: '21/6', overflow: 'hidden', border: '1px solid var(--line)', marginBottom: '3rem' }}
        >
          <Image
            src="/images/materials/carbon-fiber-weave.jpg"
            alt="Close-up of woven carbon fiber composite"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(9,10,11,0.85) 0%, rgba(9,10,11,0.2) 55%, transparent 100%)' }} />
          <div style={{ position: 'absolute', left: '2rem', bottom: '1.5rem', right: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.14em', color: 'var(--white-60)', textTransform: 'uppercase' }}>
              Woven carbon fiber composite
            </p>
          </div>
        </motion.div>

        {/* Groups */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', borderTop: '3px solid var(--red)', padding: '2rem' }}
            >
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--white)', marginBottom: '1.5rem' }}>
                {group.title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {group.items.map((item) => (
                  <div key={item.name}>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--white)', margin: 0, marginBottom: '0.3rem' }}>
                      {item.name}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--white-60)', lineHeight: 1.6, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Frame & Spec + Shapes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.24 }}
          style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', borderTop: '3px solid var(--red)', padding: '2rem' }}
        >
          <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--white)', marginBottom: '1.5rem' }}>
            FRAME & SPEC
          </h3>
          <div className="materials-spec-grid" style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
            {[
              { label: 'Construction', value: 'Monoblock frame with integrated protector standard; composite bonding for multi-material hybrids' },
              { label: 'Thickness', value: '38mm standard' },
              { label: 'Weight', value: '350–380g (350–360g lightweight, 370g+ power)' },
              { label: 'Balance', value: 'Low / Mid / High, 260–275mm' },
            ].map((spec) => (
              <div key={spec.label}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--red)', textTransform: 'uppercase', margin: 0, marginBottom: '0.4rem' }}>
                  {spec.label}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--white-90)', lineHeight: 1.6, margin: 0 }}>
                  {spec.value}
                </p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '1.75rem', display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}>
            {shapes.map((shape) => (
              <div key={shape.key} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <RacketShapeIcon shape={shape.key} size={48} />
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--white)', margin: 0 }}>{shape.name}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--white-60)', margin: 0 }}>{shape.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .materials-spec-grid { grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 900px) {
          .materials-spec-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .materials-spec-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
