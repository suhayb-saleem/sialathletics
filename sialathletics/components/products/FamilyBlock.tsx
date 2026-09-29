import Image from 'next/image';
import type { Family, Model } from '@/lib/products/types';

function ModelCard({ model }: { model: Model }) {
  return (
    <article className="model-card">
      <div className="model-card__media">
        <Image
          src={model.image}
          alt={model.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="model-card__body">
        {model.name && <h4 className="hp-display model-card__name">{model.name}</h4>}
        <dl className="model-card__specs">
          {model.specs.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

export default function FamilyBlock({ family }: { family: Family }) {
  return (
    <div className="fam" id={family.id}>
      <div className="fam__head">
        <h3 className="hp-display fam__title">{family.title}</h3>
        <p className="fam__tagline">{family.tagline}</p>
        <p className="fam__blurb">{family.blurb}</p>
      </div>
      <div className="model-grid">
        {/* Keyed on the image slug, not the mould code: React keys are
            serialised into the RSC payload, so a code used as a key would
            still be published in the page source. */}
        {family.models.map((m) => <ModelCard key={m.image} model={m} />)}
      </div>
    </div>
  );
}
