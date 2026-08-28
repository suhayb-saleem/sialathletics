import Link from 'next/link';

// Server-rendered, crawlable text block: states plainly what the company is
// and where it is, in the exact terms buyers search for ("padel racket
// manufacturer in Sialkot"). The hero stays brand-led; this section carries
// the search phrasing — still in the site's simple voice.
export default function FactoryIntro() {
  return (
    <section style={{ background: 'var(--hp-paper)', borderTop: '1px solid var(--hp-ink-line)', padding: 'var(--hp-gap) 0' }}>
      <div className="hp-shell">
        <div style={{ maxWidth: '720px' }}>
          <span className="hp-eyebrow hp-eyebrow--ink">Factory direct</span>
          <h2 className="hp-display" style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)', color: 'var(--hp-ink)', margin: '0.9rem 0 1.2rem', lineHeight: 1.05 }}>
            Padel racket &amp; pickleball paddle manufacturer in Sialkot, Pakistan.
          </h2>
          <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.95rem', color: 'var(--hp-ink-70)', lineHeight: 1.7, margin: '0 0 1rem' }}>
            SIAL Athletics is an OEM and ODM manufacturer of carbon fiber padel rackets and
            pickleball paddles. We build private-label products for sports brands, wholesalers,
            distributors, and clubs — from our own factory in Sialkot.
          </p>
          <p style={{ fontFamily: 'var(--hp-body)', fontSize: '0.95rem', color: 'var(--hp-ink-70)', lineHeight: 1.7, margin: '0 0 1.6rem' }}>
            Sialkot has made the world&apos;s sporting goods for over a century. We ship
            factory-direct worldwide, with low minimum orders and full customization — your
            shape, materials, branding, and packaging.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem 1.75rem' }}>
            <Link href="/manufacturing" className="hp-link">
              How we manufacture <b aria-hidden="true">↗</b>
            </Link>
            <Link href="/catalogue" className="hp-link">
              Wholesale padel rackets &amp; paddles <b aria-hidden="true">↗</b>
            </Link>
            <Link href="/faq" className="hp-link">
              MOQ, sampling &amp; shipping <b aria-hidden="true">↗</b>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
