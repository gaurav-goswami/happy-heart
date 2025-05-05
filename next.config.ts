import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  // keeping images unoptimized because the NewsAPI has different image sources
  images: {
    unoptimized: true,
  },
};

export default withPWA(nextConfig);
