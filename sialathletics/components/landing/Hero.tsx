'use client';

import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? { initial: false as const }
      : { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease: EASE } };

  return (
    <section className="hp-hero">
      <div className="hp-hero__bg">
        <Image
          src="/images/home/home_section_white_background.png"
          alt="Custom carbon padel racket and pickleball paddle made by SIAL Athletics, on a floodlit padel court"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center right' }}
        />
      </div>
      <div className="hp-hero__scrim" aria-hidden="true" />

      <div className="hp-shell">
        <div className="hp-hero__inner">
          {/* The h1 carries the primary search phrase ("padel rackets"), since
              padel brings in nearly every inquiry; the paragraph names the
              other lines. A tagline-only h1 gave crawlers nothing to rank. */}
          <motion.h1 className="hp-display hp-hero__title" {...rise(0)}>
            Custom padel rackets and pickleball paddles.
          </motion.h1>

          <motion.p className="hp-hero__copy" {...rise(0.1)}>
            OEM and private label, made in our own factory in Sialkot. We also make beach rackets, bags and jerseys.
          </motion.p>

          <motion.div className="hp-hero__actions" {...rise(0.18)}>
            <Link href="/products" className="hp-btn hp-btn--primary">
              See the full range <span className="hp-btn__arrow" aria-hidden="true">→</span>
            </Link>
            <Link href="/manufacturing" className="hp-link">
              How we manufacture <b aria-hidden="true">→</b>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
