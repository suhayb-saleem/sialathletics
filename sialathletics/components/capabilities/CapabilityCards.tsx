'use client';
import { motion } from 'motion/react';
import { Settings, Layers, PenTool, ShieldCheck, Package, Globe } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const capabilities = [
  { Icon: Settings, title: 'OEM manufacturing', desc: 'Send us your CAD files and tolerances. We build to spec using monoblock carbon fiber hot-press molding — frame and protector formed as one piece — with CNC-precision molds for teardrop, round, and diamond geometries.' },
  { Icon: Layers, title: 'ODM private label', desc: 'Choose from proven teardrop (all-rounder), round (control), or diamond (power) shapes. Customize graphics, colorways, surface texture, edge guard branding, and packaging.' },
  { Icon: PenTool, title: 'Mold design & prototyping', desc: 'Need a new shape? Our R&D team handles mold design and produces physical prototypes within 3-4 weeks for your approval.' },
  { Icon: ShieldCheck, title: 'Quality control & testing', desc: 'Every batch is tested for USAPA surface roughness compliance, deflection tolerance, and edge seal integrity — weight held to 350–380g and balance calibrated to 260–275mm.' },
  { Icon: Package, title: 'Custom packaging', desc: 'Retail-ready packaging design and production included. Gift boxes, hang tags, QR code labels, and poly bags — all customizable.' },
  { Icon: Globe, title: 'Global logistics', desc: 'We handle export documentation and US customs compliance, with export experience to North America, Europe, and Central America.' },
];

export default function CapabilityCards() {
  return (
    <section className="site-section" style={{ background: 'var(--bg-raised)' }}>
      <div className="container-custom">
        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <SectionLabel>Our capabilities</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--white)', marginTop: '0.9rem' }}>
            Built for brands who demand more.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {capabilities.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6, borderColor: 'var(--red-border)', boxShadow: '0 20px 45px rgba(226, 27, 45, 0.14)' }}
              transition={{
                y: { type: 'spring', stiffness: 350, damping: 26 },
                default: { duration: 0.5, delay: i * 0.06 },
              }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--line)',
                borderLeft: '3px solid var(--red)',
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
