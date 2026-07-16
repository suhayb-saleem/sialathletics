'use client';
import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumb: string;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export default function PageHero({ eyebrow, title, subtitle, crumb }: PageHeroProps) {
  const reduceMotion = useReducedMotion();
  const words = title.split(' ');

  return (
    <section className="page-hero">
      <div className="container-custom">
        <nav aria-label="Breadcrumb" className="page-hero__crumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="page-hero__crumb-current">{crumb}</span>
        </nav>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <SectionLabel>{eyebrow}</SectionLabel>
        </motion.div>

        <h1 className="display-title page-hero__title">
          {words.map((word, i) => (
            <span key={i} className="page-hero__word">
              <motion.span
                initial={reduceMotion ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: EASE }}
                style={{ display: 'block' }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {subtitle && (
          <motion.p
            className="page-hero__subtitle"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
