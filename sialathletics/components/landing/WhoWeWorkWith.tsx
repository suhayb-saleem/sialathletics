import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

// Each row answers "is this factory for me?" for one kind of buyer.
const segments = [
  {
    title: 'Brands',
    desc: 'Your own padel and pickleball line. We handle production, materials and quality; you handle the brand.',
  },
  {
    title: 'Distributors and wholesalers',
    desc: 'Steady supply at consistent quality, at whatever volume your market takes.',
  },
  {
    title: 'Clubs and academies',
    desc: 'Rackets and paddles in your club colours, built to stand up to daily coaching use.',
  },
  {
    title: 'Retailers',
    desc: 'Retail-ready product with packaging and export shipping handled for you.',
  },
];

export default function WhoWeWorkWith() {
  return (
    <section className="hp-audience hp-block">
      <div className="hp-shell">
        <div className="hp-audience__grid">
          <Reveal>
            <h2 className="hp-display hp-h2">Who we work with</h2>
            <p className="hp-lede">
              Same factory, same inspection. What changes is the volume and the branding.
            </p>
            <div className="hp-block__foot">
              <Link href="/faq" className="hp-link">
                Common buyer questions <b aria-hidden="true">→</b>
              </Link>
            </div>
          </Reveal>

          <ul className="hp-audience__list">
            {segments.map((seg) => (
              <li key={seg.title}>
                <h3 className="hp-display">{seg.title}</h3>
                <p>{seg.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
