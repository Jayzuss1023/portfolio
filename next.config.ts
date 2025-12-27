import type NextConfig from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["cdn.sanity.io", "images.unsplash.com"],
  },
};

export default nextConfig;
