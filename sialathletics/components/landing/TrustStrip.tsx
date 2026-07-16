'use client';
import { Factory, Layers3, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'motion/react';

const items = [
  { Icon: Factory, label: 'Sialkot-built', detail: 'Factory direct' },
  { Icon: Layers3, label: 'Carbon platforms', detail: 'Round / teardrop / diamond' },
  { Icon: ShieldCheck, label: 'Batch control', detail: 'Quality-led production' },
  { Icon: Truck, label: 'Export ready', detail: 'Brands to distributors' },
];

export default function TrustStrip() {
  return <section className="trust-strip" aria-label="SIAL Athletics manufacturing highlights"><div className="container-custom trust-strip__grid">{items.map(({ Icon, label, detail }, index) => <motion.div key={label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }}><Icon size={18} strokeWidth={1.5} /><div><strong>{label}</strong><span>{detail}</span></div></motion.div>)}</div></section>;
}
