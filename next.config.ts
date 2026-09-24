import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.mortgageinternational.co.uk/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
