'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

type InfoCardProps = {
  icon?: LucideIcon;
  num?: string;
  title: string;
  desc: string;
  tags?: string[];
  index?: number;
};

// Shared editorial info card — icon/number + title + description (+ optional
// tags). Single source of truth for the "capability / value / standard" card
// pattern reused across About, Capabilities, and Quality.
export default function InfoCard({ icon: Icon, num, title, desc, tags, index = 0 }: InfoCardProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className="hp-infocard"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
    >
      {(Icon || num) && (
        <div className="hp-infocard__top">
          {Icon && <span className="hp-infocard__icon"><Icon size={20} /></span>}
          {num && <span className="hp-infocard__num">{num}</span>}
        </div>
      )}
      <h3 className="hp-infocard__title">{title}</h3>
      <p className="hp-infocard__desc">{desc}</p>
      {tags && tags.length > 0 && (
        <div className="hp-infocard__tags">
          {tags.map((tag) => <span className="hp-infocard__tag" key={tag}>{tag}</span>)}
        </div>
      )}
    </motion.div>
  );
}
