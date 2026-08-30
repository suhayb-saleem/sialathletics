/**
 * Google "Preferred Sources" button.
 * https://developers.google.com/search/docs/appearance/preferred-sources
 *
 * The plain `<script async>` below is Google's documented markup. React 19
 * hoists async scripts into <head> and dedupes them by `src`, so this renders
 * exactly as the docs specify and still loads once even though the component
 * appears on many article pages. next/script's default `afterInteractive`
 * strategy was avoided deliberately: it injects the script only after
 * hydration, which risks Google's script running its DOM scan too late for
 * the button to ever render.
 *
 * Only rendered on blog post pages, so the rest of the site does not pay for
 * a script it never uses.
 */
export default function PreferredSource() {
  return (
    <aside className="pref-src" aria-label="Follow SIAL Athletics on Google">
      <script async src="https://news.google.com/swg/js/v1/publisher.js" />

      <div className="pref-src__text">
        <span className="hp-eyebrow hp-eyebrow--ink">Follow us on Google</span>
        <p className="pref-src__copy">
          Add SIAL Athletics as a preferred source to see our manufacturing articles more often in
          Google Search.
        </p>
      </div>

      {/* Google renders the button into this element. The attribute must be
          present exactly as documented; the spread keeps TypeScript happy. */}
      <div className="pref-src__btn">
        <div {...{ 'google-add-preferred-source-btn': '' }} data-theme="dark" />
      </div>

      <style>{`
        .pref-src {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem 2rem;
          margin-top: 2.5rem;
          padding: 1.5rem;
          background: var(--surface-2);
          border: 1px solid var(--hp-ink-line);
        }
        .pref-src__text { flex: 1 1 20rem; min-width: 0; }
        .pref-src__copy {
          margin: 0.7rem 0 0;
          font-family: var(--hp-body);
          font-size: 0.86rem;
          line-height: 1.6;
          color: var(--hp-ink-70);
          max-width: 32rem;
        }
        /* Google injects an absolutely-positioned iframe and sets the host it
           owns to width:100%. The host therefore has no intrinsic width, so
           this wrapper must supply a definite one — sized by content it would
           collapse to 0 and the button would render invisible. */
        .pref-src__btn {
          flex: 0 0 auto;
          width: 240px;
          min-height: 60px;
        }
        @media (max-width: 640px) {
          .pref-src { padding: 1.25rem; }
          .pref-src__btn { flex: 1 1 100%; width: 100%; }
        }
      `}</style>
    </aside>
  );
}
