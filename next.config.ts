import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Temporarily disable strict mode to debug hydration errors
  experimental: {
    serverActions: {}, // Keep it as an object to satisfy TypeScript's expected structure
  },
};

export default nextConfig;

/*
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // config options here
};

export default nextConfig;
*/
