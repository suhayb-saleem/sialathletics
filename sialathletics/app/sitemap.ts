import type { MetadataRoute } from 'next';
import { posts } from '@/data/blog';
import type { Family } from '@/lib/products/types';
import { padelFamilies } from '@/lib/products/padel';
import { pickleballFamilies } from '@/lib/products/pickleball';
import { beachFamilies } from '@/lib/products/beach';
import { jerseyFamilies } from '@/lib/products/jerseys';
import { bagFamilies } from '@/lib/products/bags';

const BASE = 'https://www.sialathletics.com';

// lastmod is only useful to crawlers if it changes when the page does. A
// fresh `new Date()` on every request tells Google everything changed on
// every crawl, so it learns to ignore the field. Bump this when a page's
// content actually changes; blog posts carry their own dates.
const SITE_UPDATED = '2026-09-29';

const abs = (path: string) => `${BASE}${encodeURI(path)}`;
const modelImages = (families: Family[]) => families.flatMap((f) => f.models.map((m) => abs(m.image)));

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (
    path: string,
    priority: number,
    changeFrequency: 'weekly' | 'monthly' | 'yearly',
    images?: string[],
  ) => ({ url: `${BASE}${path}`, lastModified: SITE_UPDATED, changeFrequency, priority, ...(images?.length ? { images } : {}) });

  return [
    page('/', 1, 'weekly', [
      abs('/images/home/home_section_white_background.png'),
      abs('/images/products/home_padel_teardrop.png'),
      abs('/images/products/home_pickleball_red-halftone.png'),
      abs('/images/products/home_beach_3k-soft-eva.png'),
      abs('/images/products/home_bags_large-kit.png'),
      abs('/images/products/home_jersey_black-red.webp'),
    ]),
    page('/products', 0.9, 'weekly'),
    // Product lines in priority order.
    page('/products/padel-rackets', 0.9, 'weekly', modelImages(padelFamilies)),
    page('/products/pickleball-paddles', 0.85, 'weekly', modelImages(pickleballFamilies)),
    page('/products/beach-rackets', 0.8, 'weekly', modelImages(beachFamilies)),
    page('/products/bags', 0.75, 'weekly', modelImages(bagFamilies)),
    page('/products/jerseys', 0.75, 'weekly', modelImages(jerseyFamilies)),
    page('/manufacturing', 0.8, 'monthly'),
    page('/about', 0.7, 'monthly'),
    page('/faq', 0.7, 'monthly'),
    page('/blog', 0.8, 'weekly'),
    ...posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: p.date,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      ...(p.hero ? { images: [abs(p.hero.src)] } : {}),
    })),
    page('/contact', 0.7, 'yearly'),
    page('/terms', 0.2, 'yearly'),
    page('/privacy', 0.2, 'yearly'),
  ];
}
