import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The /guides section was published and submitted to IndexNow before
      // being folded into /blog. All three guides now exist as blog posts
      // under the same slugs, so each old URL redirects to its own post
      // rather than dumping every visitor on the index.
      { source: '/guides/oem-vs-odm-padel-manufacturing', destination: '/blog/oem-vs-odm-padel-manufacturing', permanent: true },
      { source: '/guides/custom-padel-racket-manufacturing', destination: '/blog/custom-padel-racket-manufacturing', permanent: true },
      { source: '/guides/how-pickleball-paddles-are-manufactured', destination: '/blog/how-pickleball-paddles-are-manufactured', permanent: true },
      { source: '/guides', destination: '/blog', permanent: true },
      // Anything else that was under /guides falls back to the index.
      { source: '/guides/:slug', destination: '/blog', permanent: true },
    ];
  },
};

export default nextConfig;
