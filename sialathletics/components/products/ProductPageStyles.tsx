// Shared styling for every per-category product page (family blocks, model
// cards, build-option grid). One copy so the padel, pickleball, beach,
// jersey and bag pages stay visually identical without repeating the block.
export default function ProductPageStyles() {
  return (
    <style>{`
      .plat-anchor { scroll-margin-top: 90px; }

      /* --- shape family / series block --- */
      .fam + .fam { margin-top: clamp(2.75rem, 5vw, 4rem); }
      .fam__head {
        max-width: 46rem;
        margin-bottom: 1.6rem;
        padding-top: 1.4rem;
        border-top: 1px solid var(--hp-ink-line);
      }
      .fam__title { font-size: clamp(1.35rem, 2.4vw, 1.7rem); color: var(--hp-ink); margin: 0; }
      .fam__tagline {
        font-family: var(--hp-body);
        font-size: 0.85rem;
        color: var(--hp-ink-45);
        margin: 0.35rem 0 0;
      }
      .fam__blurb {
        font-family: var(--hp-body);
        font-size: 0.95rem;
        line-height: 1.62;
        color: var(--hp-ink-70);
        margin: 0.75rem 0 0;
      }

      /* --- model cards --- */
      .model-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
      .model-card {
        display: flex;
        flex-direction: column;
        background: var(--surface);
        border: 1px solid var(--hp-ink-line);
        transition: border-color 0.3s var(--hp-ease);
      }
      .model-card:hover { border-color: var(--hp-ink-45); }
      .model-card__media {
        position: relative;
        aspect-ratio: 4 / 3;
        background: var(--surface);
        border-bottom: 1px solid var(--hp-ink-line);
        overflow: hidden;
      }
      .model-card__media img { transition: transform 0.6s var(--hp-ease); padding: 0.9rem; }
      .model-card:hover .model-card__media img { transform: scale(1.04); }
      .model-card__body { padding: 1.25rem 1.35rem 1.4rem; display: flex; flex-direction: column; flex: 1; }
      .model-card__name { font-size: 1.1rem; color: var(--hp-ink); margin: 0; }
      .model-card__specs { margin: 1rem 0 0; display: grid; gap: 0; }
      /* Padel cards carry no heading, so the table starts flush. */
      .model-card__specs:first-child { margin-top: 0; }
      .model-card__specs > div {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.45rem 0;
        border-top: 1px solid var(--hp-ink-line-soft);
      }
      .model-card__specs dt {
        font-family: var(--hp-body);
        font-size: 0.8rem;
        color: var(--hp-ink-45);
        flex: 0 0 auto;
      }
      .model-card__specs dd {
        margin: 0;
        font-family: var(--hp-body);
        font-size: 0.8rem;
        color: var(--hp-ink);
        text-align: right;
        line-height: 1.45;
      }

      /* --- option groups --- */
      .opt-section { margin-top: clamp(3rem, 6vw, 4.5rem); }
      .opt-section__title { font-size: clamp(1.4rem, 2.6vw, 1.8rem); color: var(--hp-ink); margin: 0 0 0.8rem; }
      .opt-section__intro {
        font-family: var(--hp-body);
        font-size: 0.9rem;
        color: var(--hp-ink-70);
        line-height: 1.65;
        max-width: 620px;
        margin: 0 0 2rem;
      }
      .opt-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
      }
      .opt-group {
        background: var(--surface);
        border: 1px solid var(--hp-ink-line);
        padding: 1.5rem;
      }
      .opt-group__title {
        font-family: var(--hp-body);
        font-size: 0.92rem;
        font-weight: 600;
        color: var(--hp-ink);
        margin: 0 0 1rem;
      }
      .opt-group__chips { display: flex; flex-wrap: wrap; gap: 0.45rem; }
      .opt-group__chip {
        font-family: var(--hp-body);
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--hp-ink-70);
        border: 1px solid var(--hp-ink-line);
        padding: 0.32rem 0.6rem;
      }
      button.opt-group__chip {
        background: transparent;
        cursor: pointer;
        transition: border-color 0.18s ease, color 0.18s ease, background 0.18s ease;
      }
      button.opt-group__chip:hover { border-color: var(--hp-ink-45); color: var(--hp-ink); }
      .opt-group__chip.is-selected {
        border-color: var(--hp-ink);
        color: var(--hp-paper);
        background: var(--hp-ink);
      }
      .spec-bar {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.25rem;
        margin-top: 2rem;
      }
      .spec-bar .hp-btn:disabled { opacity: 0.4; cursor: not-allowed; }
      .spec-bar__count { font-family: var(--hp-body); font-size: 0.8rem; color: var(--hp-ink-70); }
      .spec-bar__clear {
        background: none;
        border: none;
        cursor: pointer;
        font-family: var(--hp-body);
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--hp-ink-70);
        text-decoration: underline;
        text-underline-offset: 0.25em;
        padding: 0;
      }

      /* --- responsive --- */
      @media (max-width: 1024px) {
        .opt-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 860px) {
        .model-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 600px) {
        .model-grid { grid-template-columns: 1fr; }
        .opt-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  );
}
