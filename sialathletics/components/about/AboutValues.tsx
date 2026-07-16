'use client';
import { motion } from 'motion/react';
import { Crosshair, Hammer, Eye, Clock } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const values = [
  { Icon: Crosshair, title: 'Precision', desc: 'Every gram, every millimeter engineered to spec. No shortcuts, no tolerance creep.' },
  { Icon: Hammer, title: 'Craftsmanship', desc: "Sialkot's 100-year legacy in sporting goods. That heritage lives in every racket we ship." },
  { Icon: Eye, title: 'Transparency', desc: 'Direct factory relationships. No markup layers. You know exactly what you pay for and why.' },
  { Icon: Clock, title: 'Reliability', desc: 'On-time delivery. Every order. Every time. Your production schedule is our commitment.' },
];

export default function AboutValues() {
  return (
    <section className="site-section" style={{ background: 'var(--bg-base)' }}>
      <div className="container-custom">
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '640px' }}>
          <SectionLabel>What drives us</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--white)', marginTop: '0.9rem' }}>
            Our core values.
          </h2>
          <p className="body-copy" style={{ marginTop: '1rem' }}>
            Four principles that shape how we run the factory floor, quote a job, and ship an order.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {values.map(({ Icon, title, desc }, i) => (
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
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--line)',
                borderTop: '3px solid var(--red)',
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                borderRadius: '12px',
              }}
              className="group"
            >
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '0.6rem',
                  background: 'linear-gradient(135deg, rgba(226, 27, 45, 0.08), transparent)',
                  border: '1px solid rgba(226, 27, 45, 0.2)',
                  borderRadius: '8px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
                className="group-hover:border-[var(--red)] group-hover:shadow-[0_0_15px_rgba(226,27,45,0.25)]"
              >
                <Icon size={20} color="var(--red)" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <h3 className="display-title group-hover:text-[var(--red)] transition-colors duration-200" style={{ fontSize: '1.4rem', color: 'var(--white)', margin: 0 }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--white-60)', margin: 0, lineHeight: 1.7 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
