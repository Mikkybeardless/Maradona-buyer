// next.config.mjs or next.config.js (with "type": "module" in package.json)
import bundleAnalyzer from '@next/bundle-analyzer';
import TerserPlugin from 'terser-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/daiprengq/**',
      },
      {
        protocol: 'http',
        hostname: 'dsstaging.eu-north-1.elasticbeanstalk.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'https://ds.reconnaissancetechnologies.com',
        pathname: '/uploads/**',
      },
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // removes ALL console.* calls
              drop_debugger: true, // removes debugger statements
            },
          },
        })
      );
    }
    return config;
  },
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
