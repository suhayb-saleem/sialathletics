'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import ContactFormFields from '@/components/contact/ContactFormFields';
import type { ContactPrefill } from '@/lib/contactModal';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactForm() {
  const [prefill, setPrefill] = useState<ContactPrefill | null>(null);
  const formSectionRef = useRef<HTMLElement>(null);

  // Pre-fill from the catalogue spec configurator: /contact?line=...&spec=...
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const spec = params.get('spec');
    const line = params.get('line');
    if (!spec && !line) return;
    setPrefill({ message: spec ?? undefined, productLine: line ?? undefined });
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section className="site-section" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)', borderTop: '1px solid var(--hp-ink-line)', scrollMarginTop: '90px' }} ref={formSectionRef}>
      <div className="container-custom" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ maxWidth: '46rem', marginBottom: '2.5rem' }}>
          <h2 className="hp-display hp-h2">Send us your brief</h2>
          <p className="hp-lede">
            Target player, price point, order volume and any design direction. We reply within 24 hours.
            Or write to <a href="mailto:info@sialathletics.com" className="hp-link">info@sialathletics.com</a>.
          </p>
        </div>

        <motion.div
          className="hp-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          <ContactFormFields theme="light" prefill={prefill} />
        </motion.div>
      </div>
    </section>
  );
}
