import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The products page was served from /catalogue while every label for it
      // said "Products". Renamed to match. The browser carries the #padel and
      // #pickleball fragments across the redirect on its own.
      { source: '/catalogue', destination: '/products', permanent: true },
      { source: '/catalogue/:path*', destination: '/products', permanent: true },
      // The /guides section was published and submitted to IndexNow before
      // being folded into /blog. All three guides now exist as blog posts
      // under the same slugs, so each old URL redirects to its own post
      // rather than dumping every visitor on the index.
      { source: '/guides/oem-vs-odm-padel-manufacturing', destination: '/blog/oem-vs-odm-padel-manufacturing', permanent: true },
      { source: '/guides/custom-padel-racket-manufacturing', destination: '/blog/custom-padel-racket-manufacturing', permanent: true },
      { source: '/guides/how-pickleball-paddles-are-manufactured', destination: '/blog/how-pickleball-paddles-are-manufactured', permanent: true },
      { source: '/guides', destination: '/blog', permanent: true },
      // Retired post — it was live and submitted to IndexNow, so send it to
      // the index rather than letting it 404.
      { source: '/blog/how-to-vet-a-sports-equipment-factory', destination: '/blog', permanent: true },
      // Anything else that was under /guides falls back to the index.
      { source: '/guides/:slug', destination: '/blog', permanent: true },
      // Padel images were renamed to descriptive filenames for image search.
      // Keep the old paths alive for anything that already indexed them.
      { source: '/images/products/home_padel_teardrop.png', destination: '/images/products/custom-teardrop-padel-racket-oem.png', permanent: true },
      { source: '/images/products/padel/:shape(round|teardrop|diamond)-:n(\\d).png', destination: '/images/products/padel/custom-:shape-padel-racket-:n.png', permanent: true },
      // Jersey images, renamed the same way.
      { source: '/images/products/home_jersey_black-red.webp', destination: '/images/products/custom-sublimated-padel-jersey.webp', permanent: true },
      { source: '/images/products/jerseys/black-red-crew.:ext(png|webp)', destination: '/images/products/jerseys/custom-padel-jersey-black-red-crew.webp', permanent: true },
      { source: '/images/products/jerseys/white-red-vneck.webp', destination: '/images/products/jerseys/custom-padel-jersey-white-red-vneck.webp', permanent: true },
      { source: '/images/products/jerseys/blue-crew-mesh.webp', destination: '/images/products/jerseys/custom-padel-jersey-blue-mesh.webp', permanent: true },
      { source: '/images/products/jerseys/navy-white-polo.webp', destination: '/images/products/jerseys/custom-padel-polo-navy-white.webp', permanent: true },
    ];
  },
};

export default nextConfig;
