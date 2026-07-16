'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

type AnimatedCounterProps = {
  to: number;
  suffix?: string;
  duration?: number;
  isMillions?: boolean;
};

// Single source of truth for the count-up animation used across the site.
export default function AnimatedCounter({ to, suffix = '+', duration = 1800, isMillions = false }: AnimatedCounterProps) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const ran = useRef(false);

  useEffect(() => {
    if (!inView || ran.current) return;
    ran.current = true;
    if (reduceMotion) { requestAnimationFrame(() => setN(to)); return; }
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setN(Math.floor(ease(p) * to));
      if (p < 1) requestAnimationFrame(tick);
      else setN(to);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration, reduceMotion]);

  const display = isMillions ? `${(n / 1_000_000).toFixed(0)}M` : n.toLocaleString();
  return <span ref={ref}>{display}{suffix}</span>;
}
