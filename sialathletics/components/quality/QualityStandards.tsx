'use client';
import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';

const standards = [
  { title: 'USAPA-approved specs', desc: 'All paddles meet USA Pickleball Association equipment specifications for surface texture, paddle size, and performance limits.' },
  { title: 'Padel build tolerances', desc: 'Padel rackets are held to a standard 38mm thickness ceiling, a 350–380g weight range, and 260–275mm balance depending on shape — verified batch by batch before shipment.' },
  { title: 'US import ready', desc: 'SIAL Athletics products are manufactured and documented for smooth US Customs clearance. HTS classification and compliance docs included.' },
  { title: 'Batch-level reporting', desc: 'Every production order comes with a QC report documenting tested samples, pass rates, and any corrective actions taken.' },
];

export default function QualityStandards() {
  return (
    <section className="site-section" style={{ background: 'var(--bg-base)', borderTop: '1px solid var(--line)' }}>
      <div className="container-custom">
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <SectionLabel>What we comply with</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--white)', marginTop: '0.9rem' }}>
            The standards we build to.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {standards.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6, borderColor: 'var(--red-border)', boxShadow: '0 20px 45px rgba(226, 27, 45, 0.14)' }}
              transition={{
                y: { type: 'spring', stiffness: 350, damping: 26 },
                default: { duration: 0.5, delay: i * 0.08 },
              }}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', borderTop: '3px solid var(--red)', padding: '2.25rem 2rem', borderRadius: '12px' }}
              className="group"
            >
              <h3 className="display-title group-hover:text-[var(--red)] transition-colors duration-200" style={{ fontSize: '1.4rem', color: 'var(--white)', marginBottom: '0.85rem' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--white-60)', lineHeight: 1.7 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
