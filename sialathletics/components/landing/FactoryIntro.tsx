import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

// Server-rendered, crawlable intro: says plainly what the company is and
// where it is, in the terms buyers search for. The fact row underneath
// carries the four numbers a buyer wants first — all from data/faq.ts.
export default function FactoryIntro() {
  return (
    <section className="hp-intro hp-block">
      <div className="hp-shell">
        <Reveal className="hp-intro__grid">
          <h2 className="hp-display hp-intro__title">
            Padel racket and pickleball paddle manufacturer in Sialkot, Pakistan.
          </h2>
          <div className="hp-intro__copy">
            <p>
              SIAL Athletics is an OEM and ODM manufacturer of carbon fibre padel rackets and
              pickleball paddles. We build private-label products for sports brands, wholesalers,
              distributors and clubs, from our own factory.
            </p>
            <p>
              Sialkot has made the world&apos;s sporting goods for over a century. We ship
              factory-direct worldwide, with low minimums and full customisation: your shape,
              materials, branding and packaging.
            </p>
            <div className="hp-intro__links">
              <Link href="/about" className="hp-link">About the factory</Link>
              <Link href="/faq" className="hp-link">MOQ, sampling and shipping</Link>
            </div>
          </div>
        </Reveal>

        <dl className="hp-facts">
          <div>
            <dt>Factory</dt>
            <dd>Our own, in Sialkot</dd>
          </div>
          <div>
            <dt>Minimum order</dt>
            <dd>24 rackets · 50 paddles</dd>
          </div>
          <div>
            <dt>Samples</dt>
            <dd>3–4 weeks</dd>
          </div>
          <div>
            <dt>Bulk lead time</dt>
            <dd>30–45 days</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
