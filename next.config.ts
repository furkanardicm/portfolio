import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**',
    },
    {
      protocol: 'http',
      hostname: '**',
    }
  ]  
};

export default nextConfig;
