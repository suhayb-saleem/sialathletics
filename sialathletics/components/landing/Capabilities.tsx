import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

const capabilities = [
  {
    title: 'OEM manufacturing',
    desc: 'Send us your drawings and materials. We build to your measurements, and cut a new mould if the shape does not exist yet.',
    image: '/images/manufacturing/oem-manufacturing.png',
    alt: 'OEM prototype padel racket freshly printed with its graphic design',
  },
  {
    title: 'ODM private label',
    desc: 'Start from one of our racket or paddle shapes, then choose the lay-up, core, texture, graphics and packaging.',
    image: '/images/manufacturing/odm-manufacturing.png',
    alt: 'Three padel racket private-label design variations laid out with material and colour swatches',
  },
  {
    title: 'Quality control',
    desc: 'Every batch is weighed, deflection-tested and inspected in Sialkot before it ships, and the QC report ships with it.',
    image: '/images/manufacturing/quality-control.png',
    alt: 'Padel racket undergoing precision testing on a quality control rig',
  },
];

export function Capabilities() {
  return (
    <section className="hp-craft hp-block hp-block--alt" id="capabilities">
      <div className="hp-shell">
        <Reveal className="hp-block__head">
          <h2 className="hp-display hp-h2">What we do for you</h2>
          <p className="hp-lede">
            Rackets and paddles for brands and resellers, made start to finish under one roof.
          </p>
        </Reveal>

        <div className="hp-craft__grid">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.1} className="hp-craft__item">
              <div className="hp-craft__frame">
                <Image src={cap.image} alt={cap.alt} fill sizes="(max-width: 860px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <h3 className="hp-display hp-craft__title">{cap.title}</h3>
              <p className="hp-craft__desc">{cap.desc}</p>
            </Reveal>
          ))}
        </div>

        <div className="hp-block__foot">
          <Link href="/manufacturing" className="hp-link">
            Everything we do, and how <b aria-hidden="true">→</b>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
