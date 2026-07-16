'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import Button from '@/components/ui/Button';

export default function ProductTeaser() {
  const featured = products.filter((product) => product.category === 'padel').slice(0, 3);
  return <section className="site-section product-teaser"><div className="container-custom">
    <div className="section-heading"><div><p className="eyebrow">The padel range</p><h2 className="display-title">Three shapes.<br />One exacting standard.</h2></div><p className="body-copy">A focused platform for control, balanced play, and power—ready for your materials, graphics, and market.</p></div>
    <div className="product-teaser-grid">{featured.map((product, index) => <motion.article key={product.id} className="product-teaser-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: index * .08, duration: .55 }}>
      <div className="product-teaser-card__image" style={{ position: 'relative' }}><Image src={product.imagePath} alt={product.name} fill sizes="(max-width: 780px) 100vw, 33vw" style={{ objectFit: 'contain' }} />{product.badge && <span>{product.badge}</span>}</div>
      <div className="product-teaser-card__body"><p>Padel / {product.specs.find((spec) => spec.label === 'Shape')?.value}</p><h3 className="display-title">{product.name.replace('SA ', '')}</h3><span>{product.tagline}</span><Link href={`/catalogue?filter=padel&product=${product.id}`}>View specification <b aria-hidden="true">↗</b></Link></div>
    </motion.article>)}</div>
    <div className="product-teaser__action"><Button href="/catalogue?filter=padel" variant="outline">View all padel rackets</Button></div>
  </div></section>;
}
