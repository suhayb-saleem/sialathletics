'use client';

import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const proof = ['OEM & private label', '24-unit padel MOQ', 'Built in Sialkot'];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="home-hero">
      <div className="home-hero__grain texture-noise" aria-hidden="true" />
      <div className="home-hero__line" aria-hidden="true" />
      <div className="container-custom home-hero__grid">
        <motion.div className="home-hero__content" initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [0.16, 1, .3, 1] }}>
          <p className="eyebrow">Padel racket manufacturing</p>
          <h1 className="display-title home-hero__title">The edge<br /><span>behind your</span><br />brand.</h1>
          <p className="home-hero__copy">Performance padel rackets engineered for serious brands, clubs, and distributors. From carbon layup to retail-ready delivery, we build your next line at the source.</p>
          <div className="home-hero__actions">
            <Button href="/catalogue?filter=padel" size="lg">Explore padel rackets</Button>
            <Button href="/capabilities" variant="outline" size="lg">How we manufacture</Button>
          </div>
          <ul className="home-hero__proof" aria-label="SIAL Athletics highlights">
            {proof.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </motion.div>

        <motion.div className="home-hero__visual" initial={reduceMotion ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .1, ease: [0.16, 1, .3, 1] }}>
          <div className="home-hero__visual-label"><span>01</span><span>Forge series / padel</span></div>
          <div className="home-hero__image-wrap" style={{ position: 'relative' }}>
            <Image src="/images/products/sa-forge-padel-teardrop.jpg" alt="SIAL Athletics Forge teardrop padel racket" fill priority sizes="(max-width: 820px) 88vw, 50vw" style={{ objectFit: 'contain' }} />
          </div>
          <Link href="/catalogue?filter=padel" className="home-hero__spec-link">View the range <span aria-hidden="true">↗</span></Link>
        </motion.div>
      </div>
    </section>
  );
}
