import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // --- Doména danielmitka.com (hlavní web) ---

      // 1) Kořen apexu (http i https, non-www host) → rovnou na kanonické www + /en
      {
        source: "/",
        has: [{ type: "host", value: "danielmitka.com" }],
        destination: "https://www.danielmitka.com/en",
        permanent: true,
      },

      // 2) Všechny ostatní cesty na apexu → stejná cesta na www (zkrátí non-www→www na 1 hop)
      {
        source: "/:path*",
        has: [{ type: "host", value: "danielmitka.com" }],
        destination: "https://www.danielmitka.com/:path*",
        permanent: true,
      },

      // 3) Normalizace lomítka u /en/ a /cs/ (omezí dodatečný hop)
      { source: "/en/", destination: "/en", permanent: true },
      { source: "/cs/", destination: "/cs", permanent: true },

      // --- Subdoména steroid.danielmitka.com ---

      // 4) www.sub → sub (zkrátí www.steroid → steroid na 1 hop)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.steroid.danielmitka.com" }],
        destination: "https://steroid.danielmitka.com/:path*",
        permanent: true,
      },

      // 5) Kořen www.sub → rovnou /en na čisté subdoméně
      {
        source: "/",
        has: [{ type: "host", value: "www.steroid.danielmitka.com" }],
        destination: "https://steroid.danielmitka.com/en",
        permanent: true,
      },

      // --- Obsahové přesměrování slugů (trvale) ---

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
      // KOŘEN www.danielmitka.com -> rovnou /en (nahradí 307 jazykový hop za 308)
      {
        source: "/",
        has: [{ type: "host", value: "www.danielmitka.com" }],
        destination: "/en",
        permanent: true,
      },

      // KOŘEN www.steroid.danielmitka.com -> rovnou /en (taky nahradí 307)
      {
        source: "/",
        has: [{ type: "host", value: "www.steroid.danielmitka.com" }],
        destination: "https://steroid.danielmitka.com/en",
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
