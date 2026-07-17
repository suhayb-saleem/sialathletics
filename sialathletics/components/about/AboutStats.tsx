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
    <section style={{ background: 'var(--hp-black)', borderBottom: '1px solid var(--hp-hair)' }}>
      <div className="hp-stat-grid">
        {stats.map((s) => (
          <div key={s.label} className="hp-metric">
            <div className="hp-metric__value">
              <AnimatedCounter to={s.to} suffix={s.suffix} duration={s.duration} isMillions={s.isMillions} />
            </div>
            <div className="hp-metric__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
