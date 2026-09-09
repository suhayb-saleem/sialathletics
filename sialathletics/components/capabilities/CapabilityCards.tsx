import Image from 'next/image';

type Capability = { title: string; desc: string; image: string; alt: string };

const capabilities: Capability[] = [
  {
    title: 'OEM manufacturing',
    desc: 'Send us your design and we build it to your drawings, materials and tolerances.',
    image: '/images/manufacturing/oem-manufacturing.png',
    alt: 'OEM prototype padel racket freshly printed with its graphic design',
  },
  {
    title: 'ODM private label',
    desc: 'Choose one of our racket or paddle shapes, then customise the build and the branding.',
    image: '/images/manufacturing/odm-manufacturing.png',
    alt: 'Three padel racket private-label design variations laid out with material and colour swatches',
  },
  {
    title: 'Product development and prototyping',
    desc: 'We build and test a physical prototype with you before anything goes into production. A new mould reaches prototype in 3–4 weeks.',
    image: '/images/manufacturing/product-prototyping.png',
    alt: 'Finished padel racket prototypes and a precision mould on the factory floor',
  },
  {
    title: 'Quality control',
    desc: 'Materials, weight and finish are checked on every batch before it ships, and a batch QC report ships with the order.',
    image: '/images/manufacturing/quality-control.png',
    alt: 'Padel racket undergoing precision testing on a quality control rig',
  },
  {
    title: 'Packaging and fulfilment',
    desc: 'Retail packaging designed and produced with the order: gift boxes, hang tags, QR labels, poly bags.',
    image: '/images/manufacturing/packaging.png',
    alt: 'Padel racket carefully bubble-wrapped and boxed for shipment',
  },
  {
    title: 'Global logistics',
    desc: 'Export paperwork and freight to your warehouse, anywhere. FOB Karachi by default, EXW Sialkot on request.',
    image: '/images/manufacturing/cargo-ship.jpg',
    alt: 'Container ship loaded with export cargo at port',
  },
];

// Six services as a plain photo grid: image, title, one or two sentences.
export default function CapabilityCards() {
  return (
    <section className="site-section" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)' }}>
      <div className="container-custom">
        <div style={{ maxWidth: '46rem', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <h2 className="hp-display hp-h2">What we offer</h2>
        </div>

        <div className="cap-grid">
          {capabilities.map((cap) => (
            <article key={cap.title} className="cap-item">
              <div className="cap-item__frame">
                <Image src={cap.image} alt={cap.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <h3 className="hp-display cap-item__title">{cap.title}</h3>
              <p className="cap-item__desc">{cap.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .cap-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(1.5rem, 3vw, 2.5rem) clamp(1.25rem, 2.5vw, 2rem); }
        .cap-item { display: flex; flex-direction: column; gap: 0.6rem; }
        .cap-item__frame { position: relative; aspect-ratio: 4 / 3; overflow: hidden; background: var(--hp-paper-2); border: 1px solid var(--hp-ink-line); }
        .cap-item__frame img { transition: transform 0.7s var(--hp-ease); }
        .cap-item:hover .cap-item__frame img { transform: scale(1.045); }
        .cap-item__title { margin: 0.5rem 0 0; font-size: 1.15rem; color: var(--hp-ink); }
        .cap-item__desc { margin: 0; font-family: var(--hp-body); font-size: 0.93rem; line-height: 1.62; color: var(--hp-ink-70); }
        @media (max-width: 1100px) { .cap-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 700px) { .cap-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
