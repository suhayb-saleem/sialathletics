// Unified eyebrow label. Renders the site-standard `.eyebrow` treatment
// (red rule + uppercase micro-label) defined in globals.css, so every
// section eyebrow across the site reads identically.
export default function SectionLabel({
  children,
  className = '',
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={`eyebrow ${className}`}
      style={light ? { color: 'var(--red-dark)' } : undefined}
    >
      {children}
    </span>
  );
}
