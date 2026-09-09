import Image from 'next/image';
import Link from 'next/link';

export default function AboutStory() {
  return (
    <section className="site-section" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
      <div className="about-story container-custom">
        <div className="about-story__media">
          <Image
            src="/images/warehouse.png"
            alt="SIAL Athletics facility exterior in Sialkot, Pakistan"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div>
          <h2 className="hp-display hp-h2">From Sialkot to your shelves</h2>
          <p className="body-copy" style={{ margin: '1.25rem 0 1rem' }}>
            We manufacture padel rackets and pickleball paddles in Sialkot, Pakistan, a city with
            over a century of experience making sporting goods.
          </p>
          <p className="body-copy" style={{ margin: '0 0 1rem' }}>
            Our factory combines that experience with modern materials and equipment. Every racket
            and paddle is checked before it leaves the building.
          </p>
          <p className="body-copy" style={{ margin: '0 0 1.75rem' }}>
            Brands, retailers and distributors come to us for{' '}
            <Link href="/manufacturing" className="hp-link">custom builds to their own spec</Link>{' '}
            or one of our designs with their branding.
          </p>
          <Link href="/products" className="hp-btn hp-btn--ink">
            See the range <span className="hp-btn__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <style>{`
        .about-story { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 5vw, 4.5rem); align-items: center; }
        .about-story__media { position: relative; aspect-ratio: 4 / 3; overflow: hidden; background: var(--hp-paper-2); }
        @media (max-width: 768px) {
          .about-story { grid-template-columns: 1fr; gap: 1.75rem; }
        }
      `}</style>
    </section>
  );
}
