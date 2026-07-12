import type { Metadata } from "next";
import UstiJuniorClient26 from "./UstiJuniorClient26";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.danielmitka.com";

export const metadata: Metadata = {
  title: "Czech Junior & U22 Nationals 2026 - Daniel Mitka",
  description:
    "Two silver medals at the Czech Junior and U22 National Championships 2026 in Ústí nad Labem — 200m freestyle 1:55.31 and 200m IM 2:06.50, five A-finals across six events.",
  alternates: {
    canonical: `${siteUrl}/competitions/czech-junior-nationals-2026`,
  },
};

export default function CzechJuniorNationals2026Page() {
  return <UstiJuniorClient26 />;
}
