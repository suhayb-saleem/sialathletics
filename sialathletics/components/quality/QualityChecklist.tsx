'use client';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const checks = [
  'Surface Roughness Testing (USAPA ≤ 30µm limit)',
  'Deflection & Compression Testing',
  'Weight Consistency ± 0.1oz per batch',
  'Edge Guard Seal & Adhesion Test',
  'Handle Torque Strength Test',
  'Visual Inspection — Zero defect tolerance',
];

export default function QualityChecklist() {
  return (
    <section className="site-section" style={{ background: 'var(--bg-raised)' }}>
      <div className="qc-checklist-grid container-custom" style={{ display: 'grid', gap: '5rem', alignItems: 'center' }}>

        {/* Left - Checklist */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <SectionLabel>Our QC process</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)', color: 'var(--white)', lineHeight: 0.98, margin: '1.25rem 0 2rem' }}>
            Tested.<br />Certified.<br />Shipped.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {checks.map((check, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--white-90)', fontWeight: 600, lineHeight: 1.5 }}>{check}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Right - Quality Assurance graphic block */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          whileHover={{ borderColor: 'var(--red-border)', boxShadow: '0 30px 60px rgba(226, 27, 45, 0.14)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, var(--bg-card), var(--bg-base))', border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', position: 'relative', overflow: 'hidden', borderRadius: '12px' }}
          className="group shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
        >
          {/* Glowing Icon Frame */}
          <div
            style={{
              padding: '1.25rem',
              background: 'linear-gradient(135deg, rgba(226, 27, 45, 0.1), transparent)',
              border: '1px solid rgba(226, 27, 45, 0.25)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(226, 27, 45, 0.15)',
              transition: 'all 0.3s ease',
            }}
            className="group-hover:border-[var(--red)] group-hover:shadow-[0_0_25px_rgba(226,27,45,0.35)]"
          >
            <ShieldCheck size={48} color="var(--red)" />
          </div>
          <span style={{ color: 'var(--white)', fontSize: '0.72rem', fontFamily: 'var(--font-body)', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>QUALITY CERTIFICATION ACTIVE</span>
        </motion.div>
      </div>

      <style>{`
        .qc-checklist-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .qc-checklist-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}</style>
    </section>
  );
}
