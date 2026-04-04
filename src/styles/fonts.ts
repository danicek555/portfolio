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
  // Optimize font loading - remove latin-ext for faster loading
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Reduced from 300, 400, 700, 900 to only needed weights
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
