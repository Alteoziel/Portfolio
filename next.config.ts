import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence Next 16 Turbopack warning if we later need webpack-only aliases
  turbopack: {},
};

export default nextConfig;