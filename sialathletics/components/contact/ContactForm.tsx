'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    productLine: 'Padel Rackets',
    orderVolume: 'Sample Only (1-5 units)',
    message: '',
    website: '', // honeypot
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formSectionRef = useRef<HTMLElement>(null);

  // Pre-fill from the catalogue spec configurator: /contact?line=...&spec=...
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const spec = params.get('spec');
    const line = params.get('line');
    if (!spec && !line) return;
    setFormData((prev) => ({
      ...prev,
      message: spec ?? prev.message,
      productLine:
        line && ['Padel Rackets', 'Pickleball Paddles', 'Both Lines', 'Other Accessories'].includes(line)
          ? line
          : prev.productLine,
    }));
    // Bring the pre-filled form into view so the hand-off is obvious.
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Client-side validation: Required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    // Client-side validation: Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    // Honeypot spam protection check
    if (formData.website) {
      // Quietly mock success for bots
      setSubmitted(true);
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          country: formData.country.trim(),
          productLine: formData.productLine,
          orderVolume: formData.orderVolume,
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          productLine: 'Padel Rackets',
          orderVolume: 'Sample Only (1-5 units)',
          message: '',
          website: '',
        });
      } else {
        setError(result.error || 'Failed to submit inquiry. Please check the fields and try again.');
      }
    } catch {
      setError('A network error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="site-section" style={{ position: 'relative', isolation: 'isolate', background: 'var(--hp-paper)', borderTop: '1px solid var(--hp-ink-line)', overflow: 'hidden', scrollMarginTop: '90px' }} ref={formSectionRef}>
      <div className="hp-weave--paper" aria-hidden="true" />
      <div className="hp-grain--paper" aria-hidden="true" />
      
      {/* Futuristic glow elements - adjusted for light mode */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', aspectRatio: '1', background: 'radial-gradient(circle, rgba(226,27,45,0.08) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50%', aspectRatio: '1', background: 'radial-gradient(circle, rgba(226,27,45,0.05) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto' }}>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <SectionLabel light>Reach us directly</SectionLabel>
          <h2 className="display-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--hp-ink)', margin: '1.2rem 0 0', textShadow: '0 0 30px rgba(226,27,45,0.1)' }}>
            We respond<br />within 24 hours.
          </h2>
        </motion.div>

        {/* Form / Success panel */}
        <motion.div 
          className="hp-form" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          style={{
            background: 'rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            boxShadow: '0 0 50px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(255,255,255,0.8)',
            borderRadius: '16px',
            padding: 'clamp(2rem, 4vw, 3.5rem)'
          }}
        >
          {submitted ? (
            <div className="hp-form__success">
              <div className="hp-form__success-icon" style={{ boxShadow: '0 0 30px rgba(226,27,45,0.1)' }}><Check size={30} /></div>
              <h3 style={{ color: 'var(--hp-ink)' }}>Inquiry received.</h3>
              <p style={{ color: 'var(--hp-ink-70)' }}>
                Thank you. Your inquiry report has been compiled and emailed to you as a PDF. Our factory team
                will reach out with pricing and sample options within 24 hours.
              </p>
              <button type="button" className="hp-btn hp-btn--primary" onClick={() => setSubmitted(false)} style={{ marginTop: '1rem' }}>
                <span>Send another inquiry</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="hp-form__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem 2rem' }} noValidate>
              {error && <div className="hp-form__error" style={{ gridColumn: '1 / -1' }}>{error}</div>}

              {/* Honeypot field */}
              <div style={{ display: 'none' }}>
                <label htmlFor="form-website">Website</label>
                <input
                  id="form-website"
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="hp-field">
                <label htmlFor="form-name" style={{ color: 'var(--hp-ink-70)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Your name</label>
                <input id="form-name" type="text" required placeholder="e.g. John Doe"
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--hp-ink)' }}
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>

              <div className="hp-field">
                <label htmlFor="form-email" style={{ color: 'var(--hp-ink-70)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Work email</label>
                <input id="form-email" type="email" required placeholder="john@company.com"
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--hp-ink)' }}
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>

              <div className="hp-field">
                <label htmlFor="form-phone" style={{ color: 'var(--hp-ink-70)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Contact number</label>
                <input id="form-phone" type="tel" placeholder="+1 (555) 000-0000"
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--hp-ink)' }}
                  value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>

              <div className="hp-field">
                <label htmlFor="form-company" style={{ color: 'var(--hp-ink-70)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Company name</label>
                <input id="form-company" type="text" required placeholder="e.g. Pro Padel Inc"
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--hp-ink)' }}
                  value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
              </div>

              <div className="hp-field">
                <label htmlFor="form-country" style={{ color: 'var(--hp-ink-70)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Country / region</label>
                <input id="form-country" type="text" placeholder="e.g. United States"
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--hp-ink)' }}
                  value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
              </div>

              <div className="hp-field">
                <label htmlFor="form-interest" style={{ color: 'var(--hp-ink-70)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Product line</label>
                <select id="form-interest" value={formData.productLine} onChange={(e) => setFormData({ ...formData, productLine: e.target.value })}
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--hp-ink)' }}>
                  <option value="Padel Rackets">Padel Rackets</option>
                  <option value="Pickleball Paddles">Pickleball Paddles</option>
                  <option value="Both Lines">Both Lines</option>
                  <option value="Other Accessories">Other Accessories</option>
                </select>
              </div>

              <div className="hp-field">
                <label htmlFor="form-volume" style={{ color: 'var(--hp-ink-70)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Order volume</label>
                <select id="form-volume" value={formData.orderVolume} onChange={(e) => setFormData({ ...formData, orderVolume: e.target.value })}
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--hp-ink)' }}>
                  <option value="Sample Only (1-5 units)">Sample Only (1-5 units)</option>
                  <option value="50-100 Units (Starter)">50-100 Units (Starter)</option>
                  <option value="100-500 Units (Growth)">100-500 Units (Growth)</option>
                  <option value="500+ Units (Enterprise)">500+ Units (Enterprise)</option>
                </select>
              </div>

              <div className="hp-field" style={{ gridColumn: '1 / -1' }}>
                <label htmlFor="form-message" style={{ color: 'var(--hp-ink-70)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Message</label>
                <textarea id="form-message" required rows={formData.message.length > 160 ? 10 : 5}
                  placeholder="Specify target specifications, material preferences, logo engraving, or custom request details…"
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(0,0,0,0.1)', color: 'var(--hp-ink)', resize: 'vertical' }}
                  value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              </div>

              <div className="hp-form__submit" style={{ gridColumn: '1 / -1', marginTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <button type="submit" className="hp-btn hp-btn--primary" disabled={submitting} style={{ width: '100%', maxWidth: '300px' }}>
                  <span>{submitting ? 'Submitting inquiry…' : 'Submit inquiry'}</span>
                </button>
                <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.75rem', color: 'var(--hp-ink-45)', textAlign: 'center', marginTop: '1.5rem', letterSpacing: '0.1em' }}>
                  We typically respond within 1 business day.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
