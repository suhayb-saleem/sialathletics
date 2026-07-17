'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'padel',
    moq: '50-100',
    message: '',
    website: '', // honeypot
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    if (formData.website) {
      setSubmitted(true);
      return;
    }

    setSubmitting(true);

    const productLineMap: Record<string, string> = {
      pickleball: 'Pickleball Paddles',
      padel: 'Padel Rackets',
      both: 'Both Lines',
      accessories: 'Other Accessories',
    };

    const orderVolumeMap: Record<string, string> = {
      '50-100': '50-100 Units (Starter)',
      '100-500': '100-500 Units (Growth)',
      '500+': '500+ Units (Enterprise)',
      samples: 'Sample Only (1-5 units)',
    };

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      country: 'N/A',
      productLine: productLineMap[formData.interest] || formData.interest,
      orderVolume: orderVolumeMap[formData.moq] || formData.moq,
      message: formData.message.trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', interest: 'padel', moq: '50-100', message: '', website: '' });
      } else {
        setError(result.error || 'Failed to submit inquiry. Please check the fields and try again.');
      }
    } catch {
      setError('A network error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const contactRows = [
    { Icon: MapPin, k: 'Factory HQ', v: 'Sialkot, Pakistan', href: undefined as string | undefined },
    { Icon: Mail, k: 'Email inquiry', v: 'info@sialathletics.com', href: 'mailto:info@sialathletics.com' },
    { Icon: Phone, k: 'Phone', v: '+92 335 5933174', href: 'tel:+923355933174' },
  ];

  return (
    <section className="hp-contact" id="contact">
      <div className="hp-weave" aria-hidden="true" />
      <div className="hp-shell hp-contact__inner">
        {/* Left: intro + details */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <span className="hp-eyebrow">Start the program</span>
          <h2 className="hp-display hp-contact__title">Get a factory<br />quote direct.</h2>
          <p className="hp-contact__copy">
            Connect with our product development team in Sialkot to arrange sample delivery,
            pricing sheets, and custom mold quotes.
          </p>
          <div className="hp-contact__rows">
            {contactRows.map(({ Icon, k, v, href }) => {
              const inner = (
                <>
                  <Icon size={18} strokeWidth={1.6} />
                  <div>
                    <div className="hp-contact__row-k">{k}</div>
                    <div className="hp-contact__row-v">{v}</div>
                  </div>
                </>
              );
              return href ? (
                <a key={k} href={href} className="hp-contact__row">{inner}</a>
              ) : (
                <div key={k} className="hp-contact__row">{inner}</div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          className="hp-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
        >
          {submitted ? (
            <div className="hp-form__success">
              <div className="hp-form__success-icon"><Check size={30} /></div>
              <h3>Inquiry received.</h3>
              <p>
                Thank you. A product specialist will contact you within 24 hours with details,
                custom options, and digital PDF catalogs.
              </p>
              <button type="button" className="hp-btn hp-btn--ghost" onClick={() => setSubmitted(false)} style={{ marginTop: '0.6rem' }}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="hp-form__grid" noValidate>
              {error && <div className="hp-form__error">{error}</div>}

              <div style={{ display: 'none' }}>
                <label htmlFor="landing-website">Website</label>
                <input id="landing-website" type="text" name="website" value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })} tabIndex={-1} autoComplete="off" />
              </div>

              <div className="hp-field">
                <label htmlFor="name">Your name</label>
                <input id="name" type="text" required placeholder="e.g. John Doe"
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>

              <div className="hp-field">
                <label htmlFor="email">Work email</label>
                <input id="email" type="email" required placeholder="john@company.com"
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>

              <div className="hp-field">
                <label htmlFor="company">Company name</label>
                <input id="company" type="text" required placeholder="e.g. Pro Padel Inc"
                  value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
              </div>

              <div className="hp-field">
                <label htmlFor="interest">Product line</label>
                <select id="interest" value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })}>
                  <option value="padel">Padel Rackets</option>
                  <option value="pickleball">Pickleball Paddles</option>
                  <option value="both">Both Lines</option>
                  <option value="accessories">Other Accessories</option>
                </select>
              </div>

              <div className="hp-field hp-field--full">
                <label htmlFor="moq">Target order volume (MOQ)</label>
                <select id="moq" value={formData.moq} onChange={(e) => setFormData({ ...formData, moq: e.target.value })}>
                  <option value="50-100">50 – 100 Units (Starter)</option>
                  <option value="100-500">100 – 500 Units (Growth)</option>
                  <option value="500+">500+ Units (Enterprise)</option>
                  <option value="samples">Sample order only</option>
                </select>
              </div>

              <div className="hp-field hp-field--full">
                <label htmlFor="message">Tell us about your project</label>
                <textarea id="message" rows={4} required
                  placeholder="Target specifications, material preferences, logo engraving, or custom request details…"
                  value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              </div>

              <div className="hp-form__submit">
                <button type="submit" className="hp-btn hp-btn--primary" disabled={submitting}>
                  <Send size={15} />
                  <span>{submitting ? 'Submitting…' : 'Submit B2B inquiry'}</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
