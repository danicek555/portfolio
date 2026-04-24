"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import clsx from "clsx";

type MeetSummaryClientProps = {
  title: string;
  subtitle: string;
  location: string;
  date: string;
  image: string;
  summary: string;
  highlights: string[];
  results: Array<{ event: string; time: string; placement?: string }>;
  sourceUrl: string;
};

export default function MeetSummaryClient({
  title,
  subtitle,
  location,
  date,
  image,
  summary,
  highlights,
  results,
  sourceUrl,
}: MeetSummaryClientProps) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={clsx(
        "min-h-screen transition-colors duration-300",
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900",
      )}
    >
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image src={image} alt={title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-12 text-white">
          <p className="uppercase tracking-wider text-sm text-green-300 mb-2">
            {subtitle}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">{title}</h1>
          <p className="mt-4 text-base md:text-lg text-gray-100">
            {location} | {date}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Meet Summary</h2>
          <p
            className={clsx(
              "leading-relaxed",
              isDarkMode ? "text-gray-300" : "text-gray-700",
            )}
          >
            {summary}
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">Key Highlights</h3>
          <ul className="space-y-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-green-500 mt-1">•</span>
                <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <aside
          className={clsx(
            "rounded-2xl p-6 border",
            isDarkMode ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200",
          )}
        >
          <h3 className="text-xl font-semibold mb-4">Results Snapshot</h3>
          <div className="space-y-3">
            {results.map((result) => (
              <div key={`${result.event}-${result.time}`} className="rounded-lg p-3 bg-black/5 dark:bg-white/5">
                <p className="font-semibold">{result.event}</p>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                  {result.time}
                  {result.placement ? ` | ${result.placement}` : ""}
                </p>
              </div>
            ))}
          </div>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-5 text-green-500 hover:text-green-600 font-medium"
          >
            View on Swimcloud →
          </a>
        </aside>
      </section>
    </div>
  );
}
