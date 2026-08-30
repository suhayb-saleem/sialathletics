import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The /guides section was published and submitted to IndexNow before
      // being folded into /blog. Permanent redirects so anything already
      // crawled or linked lands on the blog instead of a 404.
      { source: '/guides', destination: '/blog', permanent: true },
      { source: '/guides/:slug', destination: '/blog', permanent: true },
    ];
  },
};

export default nextConfig;
