'use client';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export default function BlogGrid() {
  return (
    <section style={{ background: 'var(--bg-light-alt)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: 'var(--bg-light)', border: '1px solid var(--border-light)', overflow: 'hidden', cursor: 'pointer' }}
              whileHover={{ borderColor: 'rgba(232, 0, 28, 0.4)', y: -6, boxShadow: '0 20px 45px rgba(232,0,28,0.06)' }}
              className="transition-all duration-300 group"
            >
              {/* Image placeholder with icon */}
              <div style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg, var(--bg-light-alt), var(--bg-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', borderBottom: '1px solid var(--border-light)' }}>
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: 'var(--red)', padding: '4px 10px', fontFamily: 'var(--font-body)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--white)', zIndex: 1, fontWeight: 700 }}>
                  {post.category}
                </div>
                <FileText size={40} className="text-black/5 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>{post.date}</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>{post.readTime}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--text-dark)', lineHeight: 1.1, marginBottom: '0.75rem', textTransform: 'uppercase' }} className="group-hover:text-[var(--red)] transition-colors duration-150">{post.title}</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {post.excerpt}
                </p>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }} className="group-hover:text-[var(--text-dark)] transition-colors duration-150">READ MORE →</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
