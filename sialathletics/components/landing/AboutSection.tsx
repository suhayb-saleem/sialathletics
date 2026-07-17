'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  { to: 10, suffix: '+', label: 'Years manufacturing', duration: 1600 },
  { to: 300, suffix: '+', label: 'Global clients', duration: 1800 },
  { to: 50, suffix: '+', label: 'Countries reached', duration: 1500 },
  { to: 1_000_000, suffix: '+', label: 'Products built', duration: 2000, isMillions: true },
];

export default function AboutSection() {
  return (
    <section className="hp-metrics">
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'url(/images/about_lifestyle.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.16,
          maskImage: 'linear-gradient(90deg, transparent, #000 55%)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 55%)',
        }}
      />
      <div className="hp-weave" aria-hidden="true" />

      <div className="hp-shell hp-metrics__inner">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="hp-eyebrow">Built in Sialkot</span>
          <h2 className="hp-display hp-metrics__title">Your edge starts<br /><span>at the source.</span></h2>
          <p className="hp-metrics__copy">
            SIAL Athletics manufactures premium padel rackets in Sialkot — Pakistan&apos;s sporting
            goods capital and source of much of the world&apos;s hand-stitched footballs. We bring
            factory precision and carbon fiber technology direct, without the middleman.
          </p>
          <Link href="/about" className="hp-link">Our story <b aria-hidden="true">↗</b></Link>
        </motion.div>

        <motion.div
          className="hp-metrics__grid"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        >
          {stats.map((s) => (
            <div className="hp-metric" key={s.label}>
              <div className="hp-metric__value">
                <AnimatedCounter to={s.to} suffix={s.suffix} duration={s.duration} isMillions={s.isMillions} />
              </div>
              <div className="hp-metric__label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
