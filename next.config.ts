import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uxwing.com",
        port: "",
        pathname: "/wp-content/themes/uxwing/download/brands-and-social-media/**",
      },
      {
        protocol: "https",
        hostname: "assets.mspimages.in",
        port: "",
        pathname: "/c/**",
      },
    ],
  },
};

export default nextConfig;
