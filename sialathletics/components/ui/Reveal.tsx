'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Scroll-reveal wrapper. Children are passed in as a prop, so a Server
 * Component can wrap its own server-rendered markup in this without the
 * content itself becoming client-side — the markup still ships in the HTML,
 * this only animates the container.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section';
}) {
  const reduce = useReducedMotion();
  const Tag = as === 'section' ? motion.section : motion.div;

  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}
