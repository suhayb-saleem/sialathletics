// The order process. This is the one place numbering earns its keep — the
// steps happen in sequence — so the numbers stay, small and grey.
const steps = [
  { title: 'Brief', desc: 'Send your specs, target price and order volume. We reply within 24 hours.' },
  { title: 'Sample', desc: 'A physical sample for testing and approval, 3–4 weeks from spec approval.' },
  { title: 'Production', desc: 'Bulk manufacturing, 30–45 days after sample approval and deposit.' },
  { title: 'Inspection', desc: 'Final checks against the agreed spec, batch by batch, with a QC report.' },
  { title: 'Delivery', desc: 'Export cleared and freight arranged, door to warehouse.' },
];

export default function ProcessTimeline() {
  return (
    <section className="site-section" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)', borderTop: '1px solid var(--hp-ink-line)' }}>
      <div className="container-custom">
        <div style={{ maxWidth: '46rem', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <h2 className="hp-display hp-h2">How an order runs</h2>
        </div>

        <ol className="process">
          {steps.map((step, i) => (
            <li key={step.title} className="process__step">
              <span className="process__num" aria-hidden="true">{i + 1}</span>
              <h3 className="hp-display process__title">{step.title}</h3>
              <p className="process__desc">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .process { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(5, 1fr); gap: 0 clamp(1.25rem, 2.5vw, 2rem); border-top: 1px solid var(--hp-ink-line); }
        .process__step { position: relative; padding-top: 1.4rem; }
        /* the rule above each step fills in on hover, so the row reads as a track */
        .process__step::after { content: ""; position: absolute; top: -1px; left: 0; right: 0; height: 2px; background: var(--hp-red); transform: scaleX(0); transform-origin: left; transition: transform 0.45s var(--hp-ease); }
        .process__step:hover::after { transform: scaleX(1); }
        .process__num { display: block; font-family: var(--hp-body); font-size: 0.8rem; color: var(--hp-ink-45); margin-bottom: 0.9rem; }
        .process__title { margin: 0 0 0.45rem; font-size: 1.1rem; color: var(--hp-ink); }
        .process__desc { margin: 0; font-family: var(--hp-body); font-size: 0.9rem; line-height: 1.6; color: var(--hp-ink-70); }
        @media (max-width: 900px) { .process { grid-template-columns: repeat(2, 1fr); gap: 1.75rem 2rem; } }
        @media (max-width: 480px) { .process { grid-template-columns: 1fr; gap: 1.5rem; } }
      `}</style>
    </section>
  );
}
