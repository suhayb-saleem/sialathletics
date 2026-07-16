'use client';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const stats = [
  { to: 10, suffix: '+', label: 'Years manufacturing', duration: 1800 },
  { to: 300, suffix: '+', label: 'Global clients', duration: 2000 },
  { to: 50, suffix: '+', label: 'Countries reached', duration: 1600 },
  { to: 1_000_000, suffix: '+', label: 'Products built', duration: 2200, isMillions: true },
];

export default function AboutStats() {
  return (
    <section style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="about-stats-grid container-custom">
        {stats.map((s) => (
          <div key={s.label} className="about-stats-item">
            <div className="about-stats-value display-title">
              <AnimatedCounter to={s.to} suffix={s.suffix} duration={s.duration} isMillions={s.isMillions} />
            </div>
            <div className="about-stats-label">{s.label}</div>
          </div>
        ))}
      </div>
      <style>{`
        .about-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .about-stats-item { padding: clamp(2.5rem, 5vw, 3.5rem) 1.5rem; text-align: center; border-right: 1px solid var(--line); }
        .about-stats-item:last-child { border-right: none; }
        .about-stats-value { font-size: clamp(2.5rem, 4vw, 3.5rem); color: var(--white); line-height: 1; letter-spacing: -.02em; }
        .about-stats-label { margin-top: .65rem; color: var(--red); font-size: .68rem; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; }
        @media (max-width: 768px) {
          .about-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .about-stats-item:nth-child(2) { border-right: none; }
          .about-stats-item:nth-child(1), .about-stats-item:nth-child(2) { border-bottom: 1px solid var(--line); }
        }
        @media (max-width: 480px) {
          .about-stats-grid { grid-template-columns: 1fr; }
          .about-stats-item { border-right: none; border-bottom: 1px solid var(--line); }
          .about-stats-item:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  );
}
