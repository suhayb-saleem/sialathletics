import Image from 'next/image';

// Shared long-form content primitives, used by both the buyer guides and the
// blog so the two stay visually identical and there is one renderer to fix.
export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; rows: [string, string][] }
  | { type: 'image'; src: string; alt: string; caption?: string };

export function Block({ block }: { block: ContentBlock }) {
  if (block.type === 'p') {
    return <p className="rt__p">{block.text}</p>;
  }

  if (block.type === 'list') {
    return (
      <ul className="rt__list">
        {block.items.map((item) => (
          <li key={item}>
            <span aria-hidden="true">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === 'image') {
    return (
      <figure className="rt__figure">
        <div className="rt__figure-frame">
          <Image src={block.src} alt={block.alt} fill sizes="(max-width: 820px) 100vw, 780px" style={{ objectFit: 'cover' }} />
        </div>
        {block.caption && <figcaption className="rt__caption">{block.caption}</figcaption>}
      </figure>
    );
  }

  return (
    <div className="rt__table-wrap">
      <table className="rt__table">
        <tbody>
          {block.rows.map(([k, v]) => (
            <tr key={k}>
              <th scope="row">{k}</th>
              <td>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Styles for the block primitives above. Render once per page. */
export function ContentBlockStyles() {
  return (
    <style>{`
      .rt__p {
        font-family: var(--hp-body);
        font-size: 0.95rem;
        line-height: 1.75;
        color: var(--hp-ink-70);
        margin: 0 0 1rem;
      }
      .rt__list {
        list-style: none;
        margin: 0 0 1.2rem;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
      }
      .rt__list li {
        display: flex;
        gap: 0.7rem;
        align-items: flex-start;
        font-family: var(--hp-body);
        font-size: 0.92rem;
        line-height: 1.65;
        color: var(--hp-ink-70);
      }
      .rt__list li > span:first-child { color: var(--hp-red); font-weight: 800; flex-shrink: 0; }

      .rt__figure { margin: 1.6rem 0 1.8rem; }
      .rt__figure-frame {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        border: 1px solid var(--hp-ink-line);
        background: var(--surface-sunken);
      }
      .rt__caption {
        margin-top: 0.7rem;
        font-family: var(--hp-body);
        font-size: 0.76rem;
        line-height: 1.55;
        color: var(--hp-ink-45);
      }

      .rt__table-wrap { overflow-x: auto; margin: 0 0 1.2rem; }
      .rt__table {
        width: 100%;
        border-collapse: collapse;
        font-family: var(--hp-body);
        font-size: 0.9rem;
      }
      .rt__table th,
      .rt__table td {
        text-align: left;
        vertical-align: top;
        padding: 0.85rem 1rem 0.85rem 0;
        border-bottom: 1px solid var(--hp-ink-line);
        line-height: 1.6;
      }
      .rt__table th { width: 34%; color: var(--hp-ink); font-weight: 700; padding-right: 1.5rem; }
      .rt__table td { color: var(--hp-ink-70); }
      @media (max-width: 560px) {
        .rt__table th { width: 40%; }
      }
    `}</style>
  );
}
