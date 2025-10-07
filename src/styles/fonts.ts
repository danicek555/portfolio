import { Montserrat, Roboto } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-montserrat",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "sans-serif",
  ],
  preload: true,
  adjustFontFallback: true,
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "sans-serif",
  ],
  preload: true,
  adjustFontFallback: true,
});

// Combined font family string for use in components
export const fontFamily = `${roboto.variable} ${montserrat.variable}`;
