const PATHS: Record<string, string> = {
  teardrop: 'M32 4C18 4 8 16 8 30c0 15 10 26 24 30 14-4 24-15 24-30C56 16 46 4 32 4Z',
  round: 'M32 4C16.5 4 8 14.5 8 30s8.5 26 24 26 24-10.5 24-26S47.5 4 32 4Z',
  diamond: 'M32 4c-9 10-20 16-24 26 4 10 15 16 24 26 9-10 20-16 24-26-4-10-15-16-24-26Z',
};

export default function RacketShapeIcon({ shape, size = 64 }: { shape: 'teardrop' | 'round' | 'diamond'; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={PATHS[shape]} stroke="var(--red)" strokeWidth="2" strokeLinejoin="round" />
      <line x1="32" y1="60" x2="32" y2="52" stroke="var(--red)" strokeWidth="2" />
    </svg>
  );
}
