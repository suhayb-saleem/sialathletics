'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import ScrollShowcase, { type ShowcaseItem } from '@/components/ui/ScrollShowcase';

const EASE = [0.16, 1, 0.3, 1] as const;

const capabilities: ShowcaseItem[] = [
  {
    title: 'OEM Manufacturing',
    tag: 'Build to your spec',
    desc: 'Send us your CAD designs and specifications. We build to your exact measurements, tolerances, and stiffness profiles using 3K–18K carbon fiber precision molding.',
    image: '/images/materials/carbon-fiber-weave.jpg',
    alt: 'Macro detail of woven carbon fiber sheet — the raw material behind every build',
  },
  {
    title: 'ODM Private Label',
    tag: 'Your brand, our platform',
    desc: 'Leverage our proven padel geometries — teardrop, round, diamond — and pickleball profiles with carbon fiber faces. Customize graphics, colorways, surface textures, and grip accessories to own the shelf.',
    image: '/images/stock/padel-court.jpg',
    alt: 'Indoor padel court with blue playing surface — where your private-label line competes',
  },
  {
    title: 'Quality & Compliance',
    tag: 'Verified batch by batch',
    desc: 'Every batch undergoes rigorous quality assurance at our Sialkot facility. All paddles meet global guidelines for surface roughness, deflection, and dimensional limits.',
    image: '/images/stock/qc-inspection.jpg',
    alt: 'Vernier caliper measuring a component during quality inspection',
  },
];

export function Capabilities() {
  return (
    <section className="hp-craft" id="capabilities" style={{ paddingBottom: 'var(--hp-gap)' }}>
      <div className="hp-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ marginBottom: '3rem', maxWidth: '640px' }}
        >
          <span className="hp-eyebrow hp-eyebrow--ink">Manufacturing power</span>
          <h2 className="hp-display hp-craft__title">Engineered<br />at the source.</h2>
          <p className="hp-craft__intro">
            B2B OEM manufacturing, private-label ODM, and white-label fulfillment for padel rackets
            and pickleball paddles — from raw material selection to final landed delivery, handled
            under one roof.
          </p>
        </motion.div>

        <ScrollShowcase items={capabilities} tone="light" />

        <div className="hp-craft__foot" style={{ marginTop: '2.5rem' }}>
          <Link href="/manufacturing" className="hp-btn hp-btn--ink">
            Explore capabilities <span className="hp-btn__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
