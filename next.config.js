// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static HTML export
  distDir: 'out',    // Output directory for the static build
  images: {
    unoptimized: true, // Required for static export
  },
  // Base path for GitHub Pages (use empty string for custom domain)
  basePath: '',
  // Trailing slash is required for static export
  trailingSlash: true,
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
