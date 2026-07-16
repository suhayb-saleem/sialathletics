export default function ImagePlaceholder({
  label,
  aspect = '4/3',
  style = {},
}: {
  label: string;
  aspect?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        aspectRatio: aspect,
        background: 'repeating-linear-gradient(135deg, var(--bg-card) 0px, var(--bg-card) 12px, var(--bg-raised) 12px, var(--bg-raised) 24px)',
        border: '1px dashed var(--white-08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        ...style,
      }}
    >
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--white-60)', lineHeight: 1.6, maxWidth: '320px', margin: 0 }}>
        <span style={{ display: 'block', color: 'var(--white)', marginBottom: '0.5rem', textTransform: 'uppercase', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.12em' }}>
          Image placeholder
        </span>
        {label}
      </p>
    </div>
  );
}
