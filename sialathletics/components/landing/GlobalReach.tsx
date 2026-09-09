import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

// Dot-matrix world map, one char per dot on a 60x24 equirectangular grid.
// '.' water · 'x' land (dim) · lit served regions: 'n' North America ·
// 's' South America · 'e' Europe · 'm' Middle East · 'a' Africa ·
// 'p' Asia-Pacific · 'h' Sialkot HQ hub.
const GRID = [
  '........nnnnnnnnn...xxxxx.......xxxxxxxxxxxxxxxxxxxxxxxxx...',
  '..nnnnn.nnnnnnnnnnn.xxxxx....eeeexxxxxxxxxxxxxxxxxxxxxxxx..',
  '.nnnnnnnnnnnnnnnnnn..xxx..e..eeeeexxxxxxxxxxxxxxxxxxxxxxx..',
  '......nnnnnnnnnnnnn.........e.eeexxxxxxxxxxxxxxxxxxxxxxx...',
  '......nnnnnnnnnnnn.........eeeeeeexxxxxxxxxxxxxxxxxxxxxx....',
  '.....nnnnnnnnnnnn...........eeeeeexxxxxxxxxxxpppppppp.......',
  '....nnnnnnnnnnnnn..........eeeeeeemmxxxxxxxxxpppppppp.......',
  '.....nnnnnnnnnnn...........eeeemmmmmmmmxxxxxpppppppppp......',
  '.....nnnnnnnnn............aaaaaaaammmmmxhxxxppppppp.........',
  '......nnnnnn.............aaaaaaaaaammmm..xxxx.pppp..........',
  '.......nnnnn............aaaaaaaaaaaamm...xxx..ppppp.........',
  '........nnnnn..........aaaaaaaaaaaaa....xx...pppppp........',
  '..........ssss...........aaaaaaaaaaaa.....x...ppppppp.......',
  '...........sssss..........aaaaaaaaaa.........ppppppppp......',
  '...........ssssss..........aaaaaaaa...........ppppppppp.....',
  '...........ssssss...........aaaaaaa............pppppppp.....',
  '...........sssss............aaaaaa..............pppppp......',
  '...........sssss.............aaaaa.a...........pppppppp.....',
  '...........ssss..............aaaa..............pppppppp.....',
  '...........ssss..............aaa................pppppp......',
  '...........sss......................................pppp......',
  '...........ss..........................................pp...',
  '...........ss.........................................p....',
  '...........ss.................................................',
];

const SPACING = 12;
const HUB = { x: 40 * SPACING + 6, y: 8 * SPACING + 6 };

const regions = [
  { name: 'North America', markets: 'United States, Canada, Mexico' },
  { name: 'Europe', markets: 'Spain, France, Germany, Italy, United Kingdom, Netherlands, Sweden' },
  { name: 'Middle East', markets: 'United Arab Emirates, Saudi Arabia, Qatar' },
  { name: 'Asia-Pacific', markets: 'Australia, South Korea, Singapore' },
  { name: 'South America', markets: 'Key markets across the region' },
  { name: 'Africa', markets: 'Key markets across the region' },
];

export default function GlobalReach() {
  const dots: { cx: number; cy: number; kind: string }[] = [];
  GRID.forEach((row, r) => {
    row.split('').forEach((ch, c) => {
      if (ch === '.' || c >= 60) return;
      dots.push({ cx: c * SPACING + 6, cy: r * SPACING + 6, kind: ch });
    });
  });

  return (
    <section className="hp-reach hp-block">
      <div className="hp-shell">
        <Reveal className="hp-reach__head">
          <h2 className="hp-display hp-h2">Built in Sialkot, shipped worldwide</h2>
          <p className="hp-lede">
            We ship FOB Karachi by default and handle the export paperwork. EXW Sialkot is
            available if you would rather arrange your own freight.
          </p>
        </Reveal>

        <Reveal className="hp-reach__map" delay={0.08}>
          <svg
            viewBox="0 0 720 300"
            role="img"
            aria-label="Stylised world map showing SIAL Athletics export regions: North America, South America, Europe, the Middle East, Africa, and Asia-Pacific, shipped from Sialkot, Pakistan"
          >
            {/* export arcs from the Sialkot hub */}
            <path className="gr-arc" d={`M ${HUB.x} ${HUB.y} Q 300 -20 150 62`} fill="none" stroke="var(--hp-red)" strokeWidth="1.2" opacity="0.55" />
            <path className="gr-arc gr-arc--2" d={`M ${HUB.x} ${HUB.y} Q 430 10 368 56`} fill="none" stroke="var(--hp-red)" strokeWidth="1.2" opacity="0.55" />
            <path className="gr-arc gr-arc--3" d={`M ${HUB.x} ${HUB.y} Q 560 140 612 216`} fill="none" stroke="var(--hp-red)" strokeWidth="1.2" opacity="0.55" />

            {dots.map((d, i) =>
              d.kind === 'h' ? null : (
                <circle
                  key={i}
                  cx={d.cx}
                  cy={d.cy}
                  r={d.kind === 'x' ? 2.4 : 2.8}
                  fill={d.kind === 'x' ? 'rgba(16, 17, 19, 0.13)' : 'var(--hp-red)'}
                  opacity={d.kind === 'x' ? 1 : 0.9}
                />
              ),
            )}

            {/* Sialkot HQ hub */}
            <circle className="gr-pulse" cx={HUB.x} cy={HUB.y} r="5" fill="none" stroke="var(--hp-red)" strokeWidth="1.5" />
            <circle cx={HUB.x} cy={HUB.y} r="4" fill="var(--hp-ink)" />
            <line x1={HUB.x} y1={HUB.y + 8} x2={HUB.x} y2={HUB.y + 22} stroke="rgba(16,17,19,0.35)" strokeWidth="1" />
            <text x={HUB.x} y={HUB.y + 34} textAnchor="middle" fill="var(--hp-ink)" style={{ font: '700 9px var(--hp-body)', letterSpacing: '0.18em' }}>
              SIALKOT HQ
            </text>
          </svg>
        </Reveal>

        <dl className="hp-reach__regions">
          {regions.map((region) => (
            <div key={region.name}>
              <dt>{region.name}</dt>
              <dd>{region.markets}</dd>
            </div>
          ))}
        </dl>

        <div className="hp-block__foot">
          <Link href="/contact" className="hp-link">
            Not listed? Ask us <b aria-hidden="true">→</b>
          </Link>
        </div>
      </div>
    </section>
  );
}
