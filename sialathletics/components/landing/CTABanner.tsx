'use client';
import { motion, useReducedMotion } from 'motion/react';
import Button from '@/components/ui/Button';

interface CTABannerProps { headline?: string; subtext?: string; primaryLabel?: string; primaryHref?: string; secondaryLabel?: string; secondaryHref?: string; }

export default function CTABanner({ headline = 'Ready to build a better padel line?', subtext = 'Bring us your target player, price point, and design direction. We will shape the manufacturing program around it.', primaryLabel = 'Start an inquiry', primaryHref = '/contact', secondaryLabel = 'Explore capabilities', secondaryHref = '/capabilities' }: CTABannerProps) {
  const reduceMotion = useReducedMotion();
  return <section className="cta-band"><div className="container-custom cta-band__inner"><motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65 }}><p className="eyebrow">Start at the source</p><h2 className="display-title">{headline}</h2><p>{subtext}</p><div><Button href={primaryHref} size="lg">{primaryLabel}</Button><Button href={secondaryHref} variant="outline" size="lg">{secondaryLabel}</Button></div></motion.div><p className="cta-band__index" aria-hidden="true">SIAL / 02</p></div></section>;
}
