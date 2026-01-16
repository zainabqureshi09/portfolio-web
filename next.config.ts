import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/zainabqureshi09',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/zainab-ayaz-3081482b5/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
