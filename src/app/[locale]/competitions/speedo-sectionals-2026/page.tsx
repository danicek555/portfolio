import type { Metadata } from "next";
import SectionalsClient26 from "./SectionalsClient26";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "Four Corners Speedo Sectionals 2026 - Daniel Mitka",
  description:
    "Seven personal bests and five top-8 finishes at the 2026 Four Corners Speedo Sectionals in Carmel, Indiana, racing for the University of Denver Hilltoppers.",
  alternates: {
    canonical: `${siteUrl}/competitions/speedo-sectionals-2026`,
  },
};

export default function SpeedoSectionals2026Page() {
  return <SectionalsClient26 />;
}
