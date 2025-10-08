import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // EN
      {
        source: "/en/competitions/ostrava",
        destination: "/en/competitions/team-championship-finals-2025",
        permanent: true,
      },
      {
        source: "/en/competitions/podoli",
        destination: "/en/competitions/czech-youth-nationals-2024",
        permanent: true,
      },

      // CS
      {
        source: "/cs/competitions/plzen",
        destination: "/cs/competitions/czech-open-nationals-2025",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/vi/**",
      },
    ],
    // Image optimization for SEO
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
  },
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // Compression and performance
  compress: true,
  poweredByHeader: false,
  // Static file caching
  async headers() {
    return [
      {
        source: "/profilovaFotka.jpg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*\\.(jpg|jpeg|png|webp|avif|gif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
