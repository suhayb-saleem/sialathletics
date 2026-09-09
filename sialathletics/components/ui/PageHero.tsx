'use client';
import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  crumb: string;
  /** Full-bleed backdrop photo; a white wash keeps the ink type legible over it. */
  image?: string;
  imageAlt?: string;
  /** Trims the vertical padding, for index pages where the list below
   *  should be visible without scrolling. */
  compact?: boolean;
};

const EASE = [0.16, 1, 0.3, 1] as const;

// Page opener: breadcrumb, one big title, optional one-line subtitle.
// No kicker label above the title — the title is the label.
export default function PageHero({ title, subtitle, crumb, image, imageAlt, compact }: PageHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className={`hp-pagehero${image ? ' hp-pagehero--media' : ''}${compact ? ' hp-pagehero--compact' : ''}`}>
      {image && (
        <>
          <div className="hp-pagehero__bg">
            <Image src={image} alt={imageAlt ?? ''} fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center right' }} />
          </div>
          <div className="hp-pagehero__scrim" aria-hidden="true" />
        </>
      )}
      <div className="hp-shell">
        <nav aria-label="Breadcrumb" className="hp-pagehero__crumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="hp-pagehero__crumb-current">{crumb}</span>
        </nav>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h1 className="hp-display hp-pagehero__title">{title}</h1>
          {subtitle && <p className="hp-pagehero__subtitle">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
