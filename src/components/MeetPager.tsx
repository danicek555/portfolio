"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "./ThemeProvider";

/**
 * Ordered list of competition detail pages (same order as the homepage
 * "Recent Race Performances" carousel). `i` maps to the index in the
 * `Competitions.competitions` i18n array so the titles stay localized.
 */
const MEETS: { slug: string; i: number }[] = [
  { slug: "speedo-junior-nationals-2026", i: 13 },
  { slug: "czech-open-nationals-2026", i: 12 },
  { slug: "praha-2026", i: 11 },
  { slug: "czech-junior-nationals-2026", i: 10 },
  { slug: "speedo-sectionals-2026", i: 9 },
  { slug: "colorado-senior-meet-2026", i: 8 },
  { slug: "colorado-open-2026", i: 14 },
  { slug: "pioneer-open-2026", i: 7 },
  { slug: "invitational-2026", i: 6 },
  { slug: "czech-junior-nationals-2025", i: 5 },
  { slug: "czech-open-nationals-2025", i: 4 },
  { slug: "team-championship-finals-2025", i: 0 },
  { slug: "slovakia-cup-2024", i: 1 },
  { slug: "lifesaving-worlds-australia", i: 2 },
  { slug: "czech-youth-nationals-2024", i: 3 },
];

const MeetPager: React.FC = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Competitions");
  const { isDarkMode } = useTheme();

  const match = pathname.match(/\/competitions\/([^/]+)\/?$/);
  const slug = match?.[1];
  const index = MEETS.findIndex((m) => m.slug === slug);
  if (index === -1) return null; // not a known meet detail page

  const prev = MEETS[index - 1];
  const next = MEETS[index + 1];

  const link = (slugPart: string) => `/${locale}/competitions/${slugPart}`;

  const sideClass = clsx(
    "group flex min-w-0 items-center gap-2 transition-colors duration-200",
    isDarkMode
      ? "text-gray-300 hover:text-white"
      : "text-gray-600 hover:text-gray-900",
  );

  return (
    <nav
      aria-label={locale === "cs" ? "Navigace mezi závody" : "Meet navigation"}
      className={clsx(
        "w-full border-b transition-colors duration-300",
        isDarkMode
          ? "border-gray-700 bg-gray-900/95 text-white"
          : "border-gray-200 bg-white/95 text-black",
        "backdrop-blur supports-[backdrop-filter]:bg-opacity-80",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-8">
        {/* Previous (newer meet, up the list) */}
        {prev ? (
          <Link href={link(prev.slug)} className={sideClass}>
            <ChevronLeft className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5" />
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-green-500">
                {locale === "cs" ? "Předchozí" : "Previous"}
              </span>
              <span className="hidden truncate text-sm font-medium sm:inline">
                {t(`competitions.${prev.i}.title`)}
              </span>
            </span>
          </Link>
        ) : (
          <span aria-hidden className="w-4" />
        )}

        {/* All meets */}
        <Link
          href={`/${locale}#competitions`}
          className={clsx(
            "flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200",
            isDarkMode
              ? "border-gray-700 text-gray-300 hover:border-green-500 hover:text-white"
              : "border-gray-200 text-gray-600 hover:border-green-500 hover:text-gray-900",
          )}
        >
          <LayoutGrid className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">
            {locale === "cs" ? "Všechny závody" : "All meets"}
          </span>
        </Link>

        {/* Next (older meet, down the list) */}
        {next ? (
          <Link
            href={link(next.slug)}
            className={clsx(sideClass, "justify-end text-right")}
          >
            <span className="flex min-w-0 flex-col items-end leading-tight">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-green-500">
                {locale === "cs" ? "Další" : "Next"}
              </span>
              <span className="hidden truncate text-sm font-medium sm:inline">
                {t(`competitions.${next.i}.title`)}
              </span>
            </span>
            <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <span aria-hidden className="w-4" />
        )}
      </div>
    </nav>
  );
};

export default MeetPager;
