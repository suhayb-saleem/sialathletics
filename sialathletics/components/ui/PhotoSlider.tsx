'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export type SlidePhoto = { image: string; alt: string; caption: string };

const SWIPE_PX = 45;

/**
 * Crossfade photo stage.
 *
 * Deliberately does NOT use scroll-snap: with `snap-type: mandatory` and
 * `snap-align: start`, the final slide's snap point sits past the container's
 * maximum scroll, so the browser pulls back to the previous slide every time
 * you reach the end. Nothing is scrolled here — the panes are stacked and only
 * opacity and a slight scale change, so there is no scroll state to fight and
 * no snapping to suspend.
 *
 * Every pane and caption stays in the DOM for crawlers and find-in-page;
 * inactive ones are hidden from the accessibility tree only.
 */
export default function PhotoSlider({ items, label }: { items: SlidePhoto[]; label: string }) {
  const [active, setActive] = useState(0);
  const down = useRef<{ x: number; y: number } | null>(null);

  const go = (i: number) => setActive(Math.max(0, Math.min(items.length - 1, i)));

  const onPointerDown = (e: React.PointerEvent) => {
    down.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const from = down.current;
    down.current = null;
    if (!from) return;
    const dx = e.clientX - from.x;
    const dy = e.clientY - from.y;
    // Horizontal intent only, so a vertical page scroll never changes slide.
    if (Math.abs(dx) < SWIPE_PX || Math.abs(dx) <= Math.abs(dy)) return;
    go(active + (dx < 0 ? 1 : -1));
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1); }
  };

  return (
    <div className="pslider" role="group" aria-roledescription="carousel" aria-label={label}>
      <div className="pslider__body">
        <div className="pslider__left">
          <div
            className="pslider__stage"
            tabIndex={0}
            role="region"
            aria-label={`${label} photos`}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => { down.current = null; }}
            onKeyDown={onKeyDown}
          >
            {items.map((p, i) => (
              <div key={p.image} className="pslider__pane" data-active={i === active} aria-hidden={i !== active}>
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 720px) 92vw, 600px"
                  priority={i === 0}
                  style={{ objectFit: 'cover' }}
                  draggable={false}
                />
              </div>
            ))}
          </div>

          <div className="pslider__rail">
            {items.map((p, i) => (
              <button
                key={p.image}
                type="button"
                className="pslider__seg"
                aria-label={`Show photo ${i + 1} of ${items.length}`}
                aria-current={i === active}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </div>

        <div className="pslider__side">
          <div className="pslider__captions">
            {items.map((p, i) => (
              <p key={p.image} className="pslider__caption" data-active={i === active} aria-hidden={i !== active}>
                {p.caption}
              </p>
            ))}
          </div>

          <div className="pslider__controls">
            <p className="pslider__count" aria-live="polite">
              <span>{String(active + 1).padStart(2, '0')}</span>
              <span className="pslider__count-total"> / {String(items.length).padStart(2, '0')}</span>
            </p>
            <div className="pslider__nav">
              <button
                type="button"
                className="pslider__btn"
                aria-label="Previous photo"
                disabled={active === 0}
                onClick={() => go(active - 1)}
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                className="pslider__btn"
                aria-label="Next photo"
                disabled={active === items.length - 1}
                onClick={() => go(active + 1)}
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Capped and split two-up so the photo stays a reasonable size instead
           of running the full container width. */
        .pslider { max-width: 980px; margin-inline: auto; }
        .pslider__body {
          display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
          gap: clamp(1.5rem, 3vw, 2.75rem); align-items: center;
        }
        .pslider__side { display: flex; flex-direction: column; gap: 1.5rem; }

        .pslider__stage {
          position: relative; aspect-ratio: 3 / 2; overflow: hidden;
          background: var(--hp-paper-2); border: 1px solid var(--hp-ink-line);
          touch-action: pan-y; user-select: none;
        }
        .pslider__stage:focus-visible { outline: 2px solid var(--hp-red); outline-offset: 3px; }
        .pslider__pane {
          position: absolute; inset: 0; opacity: 0; transform: scale(1.045);
          transition: opacity 0.7s var(--hp-ease), transform 1.2s var(--hp-ease);
          pointer-events: none; will-change: opacity, transform;
        }
        .pslider__pane[data-active="true"] { opacity: 1; transform: scale(1); }
        .pslider__pane img { pointer-events: none; }

        .pslider__rail { display: flex; gap: 0.4rem; margin-top: 0.85rem; }
        .pslider__seg { flex: 1; height: 20px; position: relative; background: none; border: none; padding: 0; cursor: pointer; }
        .pslider__seg::before,
        .pslider__seg::after { content: ""; position: absolute; left: 0; right: 0; top: 9px; height: 2px; }
        .pslider__seg::before { background: var(--hp-ink-line); }
        .pslider__seg::after { background: var(--hp-red); transform: scaleX(0); transform-origin: left; transition: transform 0.55s var(--hp-ease); }
        .pslider__seg[aria-current="true"]::after { transform: scaleX(1); }
        .pslider__seg:hover::before { background: var(--hp-ink-45); }

        /* Captions share one grid cell so the block is as tall as the longest
           and nothing shifts as slides change. */
        .pslider__captions { display: grid; }
        .pslider__caption {
          grid-area: 1 / 1; margin: 0;
          font-family: var(--hp-body); font-size: 0.95rem; line-height: 1.62; color: var(--hp-ink-70);
          opacity: 0; transition: opacity 0.45s var(--hp-ease);
        }
        .pslider__caption[data-active="true"] { opacity: 1; }

        .pslider__controls { display: flex; align-items: center; gap: 1.1rem; }
        .pslider__count { margin: 0; font-family: var(--hp-body); font-size: 0.88rem; color: var(--hp-ink); font-variant-numeric: tabular-nums; }
        .pslider__count-total { color: var(--hp-ink-45); }
        .pslider__nav { display: flex; gap: 0.5rem; }
        .pslider__btn {
          width: 42px; height: 42px; display: grid; place-items: center;
          background: transparent; color: var(--hp-ink);
          border: 1px solid var(--hp-ink-line); cursor: pointer;
          transition: background 0.25s var(--hp-ease), color 0.25s var(--hp-ease), border-color 0.25s var(--hp-ease);
        }
        .pslider__btn:hover:not(:disabled) { background: var(--hp-ink); color: var(--hp-paper); border-color: var(--hp-ink); }
        .pslider__btn:disabled { opacity: 0.25; cursor: default; }

        @media (max-width: 720px) {
          .pslider__body { grid-template-columns: 1fr; gap: 1.25rem; }
          .pslider__side { gap: 1.1rem; }
          .pslider__controls { justify-content: space-between; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pslider__pane { transition-duration: 0.15s, 0.01ms; }
          .pslider__caption, .pslider__seg::after { transition-duration: 0.01ms; }
        }
      `}</style>
    </div>
  );
}
