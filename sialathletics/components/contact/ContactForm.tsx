'use client';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section style={{ background: 'var(--bg-base)', padding: '6rem 1.5rem' }}>
      <div className="contact-form-grid" style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gap: '4rem', alignItems: 'start' }}>

        {/* Left — Contact Info */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--red)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>REACH US DIRECTLY</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--white)', lineHeight: 0.95, marginBottom: '2.5rem' }}>
            WE RESPOND<br />WITHIN 24 HOURS.
          </h2>
          {[
            { Icon: MapPin, label: 'FACTORY HQ', value: 'Sialkot, Punjab, Pakistan' },
            { Icon: Mail, label: 'EMAIL', value: 'info@sialathletics.com' },
            { Icon: Phone, label: 'US PHONE', value: '+1 (xxx) xxx-xxxx' },
          ].map(({ Icon, label, value }, i) => (
            <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: i < 2 ? '1px solid var(--white-08)' : 'none' }}>
              <div
                style={{
                  padding: '0.5rem',
                  background: 'linear-gradient(135deg, rgba(232, 0, 28, 0.08), transparent)',
                  border: '1px solid rgba(232, 0, 28, 0.25)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '3px',
                  flexShrink: 0
                }}
              >
                <Icon size={16} color="var(--red)" />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.25rem' }}>{label}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--white)' }}>{value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right — Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ background: 'var(--bg-card)', border: '1px solid var(--white-08)', padding: '2.5rem', borderRadius: '16px' }}>
          <form onSubmit={handleSubmit}>
            <div className="contact-fields-grid" style={{ display: 'grid', gap: '1.25rem' }}>
              {['Your Name *', 'Work Email *', 'Company Name', 'Country / Region'].map((field) => (
                <div key={field} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{field}</label>
                  <input type="text" style={{ background: 'var(--bg-raised)', border: '1px solid var(--white-08)', padding: '0.75rem 1rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', width: '100%', borderRadius: '8px' }} />
                </div>
              ))}
            </div>
            <div className="contact-fields-grid" style={{ display: 'grid', gap: '1.25rem', marginTop: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Product Line</label>
                <select style={{ background: 'var(--bg-raised)', border: '1px solid var(--white-08)', padding: '0.75rem 1rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', borderRadius: '8px', height: '43px' }}>
                  <option>Pickleball Paddles</option>
                  <option>Padel Rackets</option>
                  <option>Both</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Order Volume</label>
                <select style={{ background: 'var(--bg-raised)', border: '1px solid var(--white-08)', padding: '0.75rem 1rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', borderRadius: '8px', height: '43px' }}>
                  <option>Sample Only (1-5 units)</option>
                  <option>50-100 Units</option>
                  <option>100-500 Units</option>
                  <option>500+ Units</option>
                </select>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1.25rem' }}>
              <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--white-60)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Message</label>
              <textarea rows={4} style={{ background: 'var(--bg-raised)', border: '1px solid var(--white-08)', padding: '0.75rem 1rem', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none', resize: 'vertical', width: '100%', borderRadius: '8px' }} />
            </div>
            
            <div style={{ marginTop: '1.5rem' }}>
              <Button type="submit" variant="primary" size="md" className="w-full">
                SUBMIT INQUIRY
              </Button>
            </div>
            
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--white-60)', textAlign: 'center', marginTop: '1rem' }}>
              We typically respond within 1 business day.
            </p>
          </form>
        </motion.div>
      </div>

      <style>{`
        .contact-form-grid { grid-template-columns: 1fr 1.5fr; }
        .contact-fields-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .contact-form-grid { grid-template-columns: 1fr; }
          .contact-fields-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
