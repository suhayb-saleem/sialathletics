'use client';
import { useId, useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import { faqCategories } from '@/data/faq';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FaqSections() {
  const [open, setOpen] = useState<string | null>(null);
  const id = useId();

  return (
    <section style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)', padding: 'var(--hp-gap) var(--hp-pad)' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
        {faqCategories.map((cat) => (
          <motion.div
            key={cat.id}
            id={cat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <h2 className="hp-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', color: 'var(--hp-ink)', margin: '0 0 0.75rem' }}>
              {cat.title}
            </h2>
            <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.95rem', color: 'var(--hp-ink-70)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '720px' }}>
              {cat.framing}
            </p>

            <div style={{ borderTop: '1px solid var(--hp-ink-line)' }}>
              {cat.items.map((item, index) => {
                const key = `${cat.id}-${index}`;
                const isOpen = open === key;
                const panelId = `${id}-${key}`;
                return (
                  <div key={item.q} style={{ borderBottom: '1px solid var(--hp-ink-line)' }}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : key)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 0', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem', color: 'var(--hp-ink)' }}
                    >
                      <h3 style={{ fontFamily: 'var(--hp-body)', fontSize: 'clamp(1rem, 1.6vw, 1.12rem)', margin: 0, fontWeight: 600, lineHeight: 1.4 }}>{item.q}</h3>
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
                        <p className="body-copy" style={{ margin: 0, paddingBottom: '1.5rem', fontSize: '.94rem', maxWidth: '720px' }}>{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {cat.related && (
              <div style={{ marginTop: '1.25rem' }}>
                <Link href={cat.related.href} className="hp-link">
                  {cat.related.label} <b aria-hidden="true">→</b>
                </Link>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
