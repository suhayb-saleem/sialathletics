import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

const categories: {
  title: string;
  desc: string;
  href: string;
  image?: string;
  alt?: string;
}[] = [
  {
    title: 'Padel rackets',
    desc: 'Round, teardrop and diamond mould families, or a custom shape we cut for you.',
    href: '/products/padel-rackets',
    image: '/images/products/home_padel_teardrop.png',
    alt: 'SIAL Athletics teardrop padel racket, black carbon face',
  },
  {
    title: 'Pickleball paddles',
    desc: 'EPP foam or PP honeycomb cores, in elongated, standard and widebody shapes.',
    href: '/products/pickleball-paddles',
    // Cut out from the catalogue product shot so it sits on the card as a
    // silhouette rather than a white box.
    image: '/images/products/home_pickleball_red-halftone.png',
    alt: 'SIAL Athletics Red Halftone carbon pickleball paddle',
  },
  {
    title: 'Beach rackets',
    desc: '3K to 24K carbon, EVA cores, sand-grit and 3D finishes.',
    href: '/products/beach-rackets',
    // Border-seeded flood-fill cutout of the portfolio's 3K/soft-EVA sample.
    image: '/images/products/home_beach_3k-soft-eva.png',
    alt: 'SIAL Athletics branded beach racket, 3K carbon face with a soft EVA core',
  },
  {
    title: 'Jerseys',
    desc: 'Full-sublimation kits, polos, tees and shorts.',
    href: '/products/jerseys',
    // Already backgroundless — supplied as a transparent render, not cut out.
    image: '/images/products/home_jersey_black-red.webp',
    alt: 'SIAL Athletics black and red crew neck jersey',
  },
  {
    title: 'Bags',
    desc: 'Kit bags, racket covers and paddle sleeves.',
    href: '/products/bags',
    // Border-seeded flood-fill cutout of the portfolio's large kit bag.
    image: '/images/products/home_bags_large-kit.png',
    alt: 'SIAL Athletics large kit bag with a backpack harness',
  },
];

// Five category cards over a washed-out court backdrop: each product cut-out
// sits bottom-right behind the copy and lifts with the card on hover.
// hp-cat--no-media is a fallback for a category added without a shot yet —
// none currently need it.
export function Range() {
  return (
    <section className="hp-range" id="range">
      <div className="hp-range__bg">
        <Image src="/images/home/about_lifestyle.jpg" alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} />
      </div>
      <div className="hp-range__scrim" aria-hidden="true" />

      <div className="hp-shell hp-range__inner">
        <Reveal className="hp-range__head">
          <h2 className="hp-display hp-range__title">See everything we build.</h2>
          <p className="hp-range__intro">
            Padel rackets, pickleball paddles and beach rackets, plus bags and jerseys — five product lines from one factory in Sialkot.
          </p>
        </Reveal>

        <div className="hp-range__cats">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.1}>
              <Link href={cat.href} className={`hp-cat${cat.image ? '' : ' hp-cat--no-media'}`}>
                <h3 className="hp-cat__title">{cat.title}</h3>
                <p className="hp-cat__desc">{cat.desc}</p>
                <span className="hp-cat__cta">See the range <b aria-hidden="true">→</b></span>
                {cat.image && (
                  <span className="hp-cat__media" aria-hidden="true">
                    <Image src={cat.image} alt={cat.alt ?? ''} fill sizes="(max-width: 720px) 40vw, 12rem" style={{ objectFit: 'contain', objectPosition: 'bottom right' }} />
                  </span>
                )}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Range;
