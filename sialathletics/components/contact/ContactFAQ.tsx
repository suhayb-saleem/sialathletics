'use client';
import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import { contactFaqs as faqs } from '@/data/contactFaq';

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const id = useId();

  return (
    <section style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)', padding: 'var(--hp-gap) var(--hp-pad)', borderTop: '1px solid var(--hp-ink-line)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 className="hp-display hp-h2">Before you write</h2>
        </div>
        <div>
          {faqs.map(({ q, a }, index) => {
            const isOpen = open === index;
            const panelId = `${id}-${index}`;
            return (
              <div key={q} style={{ borderBottom: '1px solid var(--hp-ink-line)' }}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem', color: 'var(--hp-ink)' }}
                >
                  <h3 style={{ fontFamily: 'var(--hp-body)', fontSize: 'clamp(1rem, 1.6vw, 1.12rem)', margin: 0, fontWeight: 600, lineHeight: 1.4 }}>{q}</h3>
                  {isOpen ? <Minus size={18} style={{ flexShrink: 0, color: 'var(--hp-ink-45)' }} /> : <Plus size={18} style={{ flexShrink: 0, color: 'var(--hp-ink-45)' }} />}
                </button>
                {/* CSS-based collapse (not conditional mounting) so the answer
                    stays in the server-rendered HTML for crawlers, even though
                    it's visually collapsed until the user opens it. */}
                <div
                  id={panelId}
                  aria-hidden={!isOpen}
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.25s ease',
                  }}
                >
                  <div style={{ overflow: 'hidden', minHeight: 0 }}>
                    <p className="body-copy" style={{ margin: '0', paddingBottom: '1.5rem', fontSize: '.94rem' }}>{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/faq" className="hp-link">
            See the full FAQ <b aria-hidden="true">→</b>
          </Link>
        </div>
      </div>
    </section>
  );
}
