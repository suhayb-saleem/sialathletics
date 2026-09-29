import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

// Server-rendered, crawlable intro: says plainly what the company is and
// where it is, in the terms buyers search for.
export default function FactoryIntro() {
  return (
    <section className="hp-intro hp-block">
      <div className="hp-shell">
        <Reveal className="hp-intro__grid">
          <h2 className="hp-display hp-intro__title">
            Sports goods manufacturer in Sialkot, Pakistan.
          </h2>
          <div className="hp-intro__copy">
            <p>
              SIAL Athletics is an OEM and ODM manufacturer of sports equipment and apparel. Our core
              line is carbon fibre padel rackets, alongside pickleball paddles, beach rackets, racket
              bags and team jerseys, built as private-label product for sports brands, wholesalers,
              distributors and clubs, in our own factory.
            </p>
            <p>
              Sialkot has made the world&apos;s sporting goods for over a century. We ship
              factory-direct worldwide, with full customisation: your specification, materials,
              branding and packaging.
            </p>
            <div className="hp-intro__links">
              <Link href="/about" className="hp-link">About the factory</Link>
              <Link href="/faq" className="hp-link">MOQ, sampling and shipping</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
