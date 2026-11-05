import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { posts, readMinutes } from '@/data/blog';

// The home page is the page search engines crawl most, so linking the newest
// posts from here gets them discovered and crawled sooner than /blog alone.
const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

export default function LatestPosts() {
  return (
    <section className="hp-posts hp-block hp-block--alt">
      <div className="hp-shell">
        <Reveal className="hp-block__head">
          <h2 className="hp-display hp-h2">From the blog</h2>
        </Reveal>

        <div className="hp-posts__grid">
          {latest.map((post) => (
            <article key={post.slug} className="hp-post">
              <div className="hp-post__media">
                {post.hero && <Image src={post.hero.src} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" style={{ objectFit: 'cover' }} />}
              </div>
              <div className="hp-post__body">
                <span className="hp-post__meta">{post.category} · {readMinutes(post)} min read</span>
                <h3 className="hp-post__title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="hp-block__foot">
          <Link href="/blog" className="hp-link">
            All articles <b aria-hidden="true">→</b>
          </Link>
        </div>
      </div>
    </section>
  );
}
