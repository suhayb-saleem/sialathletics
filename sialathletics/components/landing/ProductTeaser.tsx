import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

const categories = [
  {
    title: 'Padel rackets',
    desc: 'Round, teardrop, diamond and hybrid shapes, or a custom mould we cut for you.',
    href: '/products#padel',
    image: '/images/products/padel_backgroundless.png',
    alt: 'Carbon padel racket',
  },
  {
    title: 'Pickleball paddles',
    desc: 'Control, balanced and power builds on a polypropylene honeycomb core.',
    href: '/products#pickleball',
    // Cut out from the Perseus elongated product shot. The old
    // "pickleball_backgroundless" render was a padel racket — perforated face,
    // throat and wrist strap — so it was wrong for this card.
    image: '/images/products/pickleball_elongated_cutout.png',
    alt: 'SIAL Athletics elongated carbon pickleball paddle',
  },
];

// Two category cards over a washed-out court backdrop: the product cut-out sits
// bottom-right behind the copy and lifts with the card on hover.
export function Range() {
  return (
    <section className="hp-range" id="range">
      <div className="hp-range__bg">
        <Image src="/images/home/about_lifestyle.jpg" alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} />
      </div>
      <div className="hp-range__scrim" aria-hidden="true" />

      <div className="hp-shell hp-range__inner">
        <Reveal className="hp-range__head">
          <h2 className="hp-display hp-range__title">Padel and pickleball, made to order.</h2>
          <p className="hp-range__intro">
            Pick your shape, materials, texture and finish. We build it for you.
          </p>
        </Reveal>

        <div className="hp-range__cats">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.1}>
              <Link href={cat.href} className="hp-cat">
                <h3 className="hp-cat__title">{cat.title}</h3>
                <p className="hp-cat__desc">{cat.desc}</p>
                <span className="hp-cat__cta">See the shapes <b aria-hidden="true">→</b></span>
                <span className="hp-cat__media" aria-hidden="true">
                  <Image src={cat.image} alt={cat.alt} fill sizes="(max-width: 720px) 40vw, 12rem" style={{ objectFit: 'contain', objectPosition: 'bottom right' }} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Range;
