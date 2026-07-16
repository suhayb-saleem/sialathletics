'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
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
    <section className="site-section" style={{ background: 'var(--bg-base)', borderTop: '1px solid var(--line)' }}>
      <div className="about-section-grid container-custom">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease: EASE }}>
          <SectionLabel>About SIAL Athletics</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', color: 'var(--white)', margin: '1.25rem 0 1.5rem' }}>
            Your edge starts<br />at the source.
          </h2>
          <p className="body-copy" style={{ maxWidth: '480px', marginBottom: '2.5rem' }}>
            SIAL Athletics manufactures premium padel rackets in Sialkot — Pakistan&apos;s sporting goods capital and source of much of the world&apos;s hand-stitched footballs. We bring factory precision and carbon fiber technology direct, without the middleman.
          </p>
          <Link href="/about" className="about-section-link">
            Our story <span aria-hidden="true">↗</span>
          </Link>
        </motion.div>

        <motion.div className="about-section-stats" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay: 0.1, ease: EASE }}>
          {stats.map((s) => (
            <div key={s.label} className="about-section-stat">
              <div className="display-title about-section-stat__value">
                <AnimatedCounter to={s.to} suffix={s.suffix} duration={s.duration} isMillions={s.isMillions} />
              </div>
              <div className="about-section-stat__label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .about-section-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .about-section-link { display: inline-flex; align-items: center; gap: .5rem; color: var(--white); font-size: .72rem; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; text-decoration: none; border-bottom: 2px solid var(--red); padding-bottom: 4px; transition: color .2s var(--ease-standard); }
        .about-section-link:hover { color: var(--red); }
        .about-section-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 12px; overflow: hidden; }
        .about-section-stat { background: var(--bg-card); padding: 2.5rem 2rem; display: flex; flex-direction: column; gap: .5rem; }
        .about-section-stat__value { font-size: clamp(2.5rem, 4vw, 3.5rem); color: var(--white); line-height: 1; letter-spacing: -.02em; }
        .about-section-stat__label { color: var(--red); font-size: .68rem; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; }
        @media (max-width: 768px) {
          .about-section-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}</style>
    </section>
  );
}
