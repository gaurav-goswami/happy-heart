import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  workboxOptions: {
    skipWaiting: true
  },
});

const nextConfig: NextConfig = {
  // keeping images unoptimized because the NewsAPI has different image sources
  images: {
    unoptimized: true,
  },
  distDir: "build",
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development"
  },
};

export default withPWA(nextConfig);
