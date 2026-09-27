/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Sets the base path for GitHub Pages repository deployments
  basePath: isProd ? '/maham-health' : '',
  assetPrefix: isProd ? '/maham-health/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
