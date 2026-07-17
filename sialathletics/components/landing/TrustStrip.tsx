'use client';

// Kinetic credential ribbon — replaces the old 4-icon trust strip with an
// infinite marquee of manufacturing credentials (premium racket-brand idiom).
const CREDENTIALS = [
  'OEM & Private Label',
  'Carbon Monoblock Hot-Press',
  '24-Unit MOQ',
  'USAPA-Compliant Batches',
  '3K–24K Carbon Layup',
  'Teardrop · Round · Diamond',
  'Built in Sialkot',
  'Export-Ready Programs',
];

export default function CredentialMarquee() {
  const loop = [...CREDENTIALS, ...CREDENTIALS];
  return (
    <section className="hp-marquee" aria-label="SIAL Athletics manufacturing credentials">
      <div className="hp-marquee__track">
        {loop.map((item, i) => (
          <span className="hp-marquee__item" key={`${item}-${i}`} aria-hidden={i >= CREDENTIALS.length}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
