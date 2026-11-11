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
            Padel racket and pickleball paddle manufacturer.
          </h2>
          <div className="hp-intro__copy">
            <p>
              Carbon padel rackets and pickleball paddles, plus beach rackets, bags and jerseys. Your
              logo, materials and packaging, shipped worldwide from our factory in Sialkot, Pakistan.
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
