import React from 'react';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

export function CatalogueHero() {
  return (
    <section
      className="relative overflow-hidden font-body"
      style={{
        background: 'radial-gradient(120% 90% at 92% 0%, rgba(226,27,45,0.12), transparent 46%), var(--hp-black)',
        borderBottom: '1px solid var(--hp-hair)', paddingTop: '160px', paddingBottom: '4rem',
      }}
    >
      <div className="hp-shell relative z-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

        {/* Breadcrumb */}
        <div style={{ display: 'inline-flex', gap: '0.75rem', alignItems: 'center', fontFamily: 'var(--hp-body)', fontSize: '0.68rem', fontWeight: 650, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--hp-ivory-60)', marginBottom: '2.5rem' }}>
          <Link href="/" style={{ color: 'var(--hp-ivory-60)', textDecoration: 'none', transition: 'color 0.2s' }}
             onMouseEnter={e => (e.currentTarget.style.color = 'var(--hp-ivory)')}
             onMouseLeave={e => (e.currentTarget.style.color = 'var(--hp-ivory-60)')}>
            Home
          </Link>
          <span style={{ color: 'var(--hp-red)', fontWeight: 'bold' }}>/</span>
          <span style={{ color: 'var(--hp-ivory)', fontWeight: 700 }}>Products</span>
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <SectionLabel className="justify-center mb-1">
            Our products
          </SectionLabel>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--hp-ivory)', margin: '0.5rem 0 1rem' }} className="display-title select-none">
            The full lineup.
          </h1>
          <p style={{ fontFamily: 'var(--hp-body)', fontSize: '1rem', color: 'var(--hp-ivory-60)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.65, textAlign: 'center' }}>
            Premium pickleball paddles and padel rackets. Factory-direct. Pro-grade. US-ready.
          </p>
        </div>
      </div>
    </section>
  );
}
