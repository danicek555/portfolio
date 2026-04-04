"use client";

import { useRouter, usePathname } from "../i18n/navigation";
import { useLocale } from "next-intl";
import { useTheme } from "./ThemeProvider";
import clsx from "clsx";
import { useEffect } from "react";

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const { isDarkMode } = useTheme();

  const isEnglish = locale === "en";

  const handleLanguageToggle = () => {
    const nextLocale = isEnglish ? "cs" : "en";
    const pathWithoutLocale =
      pathname.replace(new RegExp(`^/${locale}`), "") || "/";

    // Store current state (no animations)
    sessionStorage.setItem("restoreScrollY", String(window.scrollY));
    sessionStorage.setItem("preserveTheme", JSON.stringify(isDarkMode));

    // Navigate immediately
    router.push(pathWithoutLocale, { locale: nextLocale });
  };

  useEffect(() => {
    const scrollY = sessionStorage.getItem("restoreScrollY");
    if (scrollY !== null) {
      // Restore scroll position instantly
      window.scrollTo(0, parseInt(scrollY, 10));
      sessionStorage.removeItem("restoreScrollY");
    }
  }, []);

  return (
    <button
      onClick={handleLanguageToggle}
      className={clsx(
        "fixed bottom-6 left-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50 font-bold text-lg",
        isDarkMode
          ? "bg-blue-500 hover:bg-blue-400 text-white"
          : "bg-blue-600 hover:bg-blue-500 text-white"
      )}
      aria-label={isEnglish ? "Switch to Czech" : "Switch to English"}
    >
      {isEnglish ? "CS" : "EN"}
    </button>
  );
}
