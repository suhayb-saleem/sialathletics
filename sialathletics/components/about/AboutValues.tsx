import PhotoSlider, { type SlidePhoto } from '@/components/ui/PhotoSlider';

// A walk through the floor in production order: drilling, pressing,
// inspection, despatch. Captions say what the photo shows and one concrete
// thing about how we work — no slogans.
const photos: SlidePhoto[] = [
  {
    image: '/images/holemachine.png',
    alt: 'Precision drilling machine boring the face of a padel racket',
    caption: 'Face drilling. Hole pattern and depth follow the mould spec, not a hand jig.',
  },
  {
    image: '/images/warehouse_interior.png',
    alt: 'Factory floor with hydraulic presses and finished rackets staged for the next stage of production',
    caption: 'Press hall. Rackets come off the presses here and move straight to finishing.',
  },
  {
    image: '/images/rack.png',
    alt: 'Rows of finished padel rackets staged on a factory rack',
    caption: 'Finished rackets staged for inspection. Every unit is weighed before it is packed.',
  },
  {
    image: '/images/forklift.png',
    alt: 'Forklift loading export cartons at the SIAL Athletics facility',
    caption: 'Export cartons leaving the site. We ship FOB Karachi and handle the paperwork.',
  },
];

export default function AboutValues() {
  return (
    <section className="site-section" style={{ background: 'var(--hp-paper)', backgroundImage: 'var(--hp-wash)', borderTop: '1px solid var(--hp-ink-line)' }}>
      <div className="container-custom">
        <div style={{ maxWidth: '46rem', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <h2 className="hp-display hp-h2">Inside the factory</h2>
          <p className="hp-lede">
            You work with the factory directly. No agents, no subcontracted production, no hidden markups.
          </p>
        </div>

        <PhotoSlider items={photos} label="Inside the factory" />
      </div>
    </section>
  );
}
