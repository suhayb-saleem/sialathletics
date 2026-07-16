'use client';
import { motion } from 'motion/react';
import SectionLabel from '@/components/ui/SectionLabel';

const steps = [
  { num: '01', title: 'Inquiry & brief', desc: 'Share your specs, target price, and order volume. We respond within 24 hours.' },
  { num: '02', title: 'Sampling', desc: 'Receive physical samples for testing and approval within 3-4 weeks.' },
  { num: '03', title: 'Production', desc: 'Full batch manufacturing with daily progress updates and QC checkpoints.' },
  { num: '04', title: 'Quality check', desc: 'Final inspection against agreed specs. USAPA compliance verified per batch.' },
  { num: '05', title: 'Delivery', desc: 'Export cleared, freight arranged, tracking provided door to warehouse.' },
];

export default function ProcessTimeline() {
  return (
    <section className="site-section" style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--line)' }}>
      <div className="container-custom">
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', textAlign: 'center' }}>
          <SectionLabel>How it works</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--white)', marginTop: '0.9rem' }}>
            From concept to champion.
          </h2>
        </div>
        <div className="process-grid" style={{ display: 'grid', position: 'relative' }}>
          {/* Connecting line — desktop only */}
          <div className="process-line" style={{ position: 'absolute', top: '24px', left: '10%', right: '10%', height: '1px', background: 'var(--red-border)', zIndex: 0 }} />
          {steps.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ textAlign: 'center', padding: '0 1rem', position: 'relative', zIndex: 1 }}
            >
              <div style={{ width: '48px', height: '48px', background: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--white)', borderRadius: '10px' }}>
                {num}
              </div>
              <h3 className="display-title" style={{ fontSize: '1.2rem', color: 'var(--white)', marginBottom: '0.5rem' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--white-60)', lineHeight: 1.6 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .process-grid { grid-template-columns: repeat(5, 1fr); gap: 0; }
        @media (max-width: 768px) {
          .process-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
          .process-line { display: none; }
        }
        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </section>
  );
}
