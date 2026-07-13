"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { TrendingDown, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useTranslations, useLocale } from "next-intl";
import clsx from "clsx";
import progressionData from "../data/progression.json";

type Swim = {
  date: string;
  secs: number;
  meet: string;
  location?: string;
  place?: string;
  round?: string;
  slug?: string;
};

type EventKey = keyof typeof progressionData;
type CourseKey = "LCM" | "SCM" | "SCY";

const EVENT_KEYS: EventKey[] = ["200IM", "400IM", "100BR", "200BR"];
const COURSE_KEYS: CourseKey[] = ["LCM", "SCM", "SCY"];

const CHART = { width: 820, height: 380, top: 24, right: 24, bottom: 40, left: 64 };

function formatTime(secs: number): string {
  if (secs < 60) return secs.toFixed(2);
  const minutes = Math.floor(secs / 60);
  return `${minutes}:${(secs - minutes * 60).toFixed(2).padStart(5, "0")}`;
}

function formatDate(date: string, locale: string): string {
  return new Date(date).toLocaleDateString(locale === "cs" ? "cs-CZ" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const FROM_YEAR = "2022";
const ROUND_RANK: Record<string, number> = { PRE: 0, SEM: 1, FIN: 2 };

const Progression: React.FC = () => {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Progression");
  const locale = useLocale();
  const router = useRouter();
  const cs = locale === "cs";

  const openMeet = (slug?: string) => {
    if (slug) router.push(`/${locale}/competitions/${slug}`);
  };

  const roundLabel = (code?: string) => {
    if (!code) return "";
    const map: Record<string, string> = cs
      ? { PRE: "rozplavby", SEM: "semifinále", FIN: "finále" }
      : { PRE: "prelims", SEM: "semis", FIN: "final" };
    return map[code] ?? "";
  };

  const [eventKey, setEventKey] = useState<EventKey>("200IM");
  const [courseKey, setCourseKey] = useState<CourseKey>("LCM");
  const [pbOnly, setPbOnly] = useState(false);
  const [hovered, setHovered] = useState<{
    x: number;
    y: number;
    swim: Swim & { pb: boolean };
  } | null>(null);

  const swims = useMemo(() => {
    const raw = (
      (progressionData[eventKey] as Record<string, Swim[]>)[courseKey] as Swim[]
    ).filter((s) => s.date >= FROM_YEAR);
    // Chronological order; within a single day prelims come before finals.
    const sorted = [...raw].sort((a, b) =>
      a.date === b.date
        ? (ROUND_RANK[a.round ?? ""] ?? 0) - (ROUND_RANK[b.round ?? ""] ?? 0)
        : a.date.localeCompare(b.date),
    );
    let best = Infinity;
    const marked = sorted.map((swim) => {
      const pb = swim.secs < best;
      if (pb) best = swim.secs;
      return { ...swim, pb };
    });
    return pbOnly ? marked.filter((swim) => swim.pb) : marked;
  }, [eventKey, courseKey, pbOnly]);

  const chart = useMemo(() => {
    if (swims.length === 0) return null;
    const { width, height, top, right, bottom, left } = CHART;
    const innerW = width - left - right;
    const innerH = height - top - bottom;

    const dates = swims.map((s) => new Date(s.date).getTime());
    const times = swims.map((s) => s.secs);
    const minDate = Math.min(...dates);
    const maxDate = Math.max(...dates);
    const dateSpan = Math.max(maxDate - minDate, 1);
    const minTime = Math.min(...times);
    const maxTime = Math.max(...times);
    const pad = Math.max((maxTime - minTime) * 0.08, 0.4);
    const lo = minTime - pad;
    const hi = maxTime + pad;

    // Faster times sit lower on the chart, so an improving line slopes down.
    const x = (d: string) =>
      left + ((new Date(d).getTime() - minDate) / dateSpan) * innerW;
    const y = (secs: number) => top + ((hi - secs) / (hi - lo)) * innerH;

    const points = swims.map((swim) => ({ swim, px: x(swim.date), py: y(swim.secs) }));
    // Spread same-day swims (prelims/finals) horizontally so they don't stack.
    const byDate = new Map<string, typeof points>();
    points.forEach((p) => {
      const arr = byDate.get(p.swim.date) ?? [];
      arr.push(p);
      byDate.set(p.swim.date, arr);
    });
    byDate.forEach((arr) => {
      if (arr.length < 2) return;
      const spacing = 12;
      arr.forEach((p, i) => {
        p.px += (i - (arr.length - 1) / 2) * spacing;
      });
    });
    const path = points
      .map((p, i) => `${i === 0 ? "M" : "L"}${p.px.toFixed(1)},${p.py.toFixed(1)}`)
      .join(" ");

    const tickCount = 5;
    const yTicks = Array.from({ length: tickCount }, (_, i) => {
      const secs = lo + ((hi - lo) * i) / (tickCount - 1);
      return { secs, py: y(secs) };
    });

    const years: { label: string; px: number }[] = [];
    const startYear = new Date(minDate).getFullYear();
    const endYear = new Date(maxDate).getFullYear();
    for (let yr = startYear; yr <= endYear; yr++) {
      const ts = new Date(`${yr}-07-01`).getTime();
      if (ts >= minDate && ts <= maxDate) {
        years.push({
          label: String(yr),
          px: left + ((ts - minDate) / dateSpan) * innerW,
        });
      }
    }
    return { points, path, yTicks, years };
  }, [swims]);

  const stats = useMemo(() => {
    if (swims.length === 0) return null;
    const times = swims.map((s) => s.secs);
    const best = Math.min(...times);
    const first = swims[0].secs;
    return {
      best,
      improvement: first - best,
      count: swims.length,
      span: `${swims[0].date.slice(0, 4)}–${swims[swims.length - 1].date.slice(0, 4)}`,
    };
  }, [swims]);

  const pillClass = (active: boolean) =>
    clsx(
      "rounded-full px-4 py-2 text-sm font-bold transition-all duration-200",
      active
        ? "bg-green-500 text-white shadow-md"
        : isDarkMode
          ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
          : "bg-white text-gray-600 shadow-sm hover:bg-gray-100",
    );

  return (
    <section
      id="progression"
      className={clsx(
        "py-12 sm:py-16 px-4 sm:px-8 transition-colors duration-300",
        isDarkMode ? "bg-gray-900" : "bg-white",
      )}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="text-green-500 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            {t("badge")}
          </h3>
          <h2
            className={clsx(
              "text-3xl sm:text-4xl md:text-5xl font-bold transition-colors duration-300",
              isDarkMode ? "text-white" : "text-gray-800",
            )}
          >
            {t("title")}
          </h2>
          <p
            className={clsx(
              "mt-4 max-w-2xl mx-auto text-sm sm:text-base",
              isDarkMode ? "text-gray-400" : "text-gray-500",
            )}
          >
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col items-center gap-4"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {EVENT_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => setEventKey(key)}
                className={pillClass(eventKey === key)}
              >
                {t(`events.${key}`)}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {COURSE_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => setCourseKey(key)}
                className={pillClass(courseKey === key)}
              >
                {t(`courses.${key}`)}
              </button>
            ))}
            <button
              onClick={() => setPbOnly((v) => !v)}
              className={clsx(
                "ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all duration-200 border",
                pbOnly
                  ? "border-green-500 bg-green-500/15 text-green-500"
                  : isDarkMode
                    ? "border-gray-600 text-gray-400 hover:border-gray-500"
                    : "border-gray-300 text-gray-500 hover:border-gray-400",
              )}
            >
              <TrendingDown className="h-4 w-4" />
              {t("pbOnly")}
            </button>
          </div>
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          onMouseLeave={() => setHovered(null)}
          className={clsx(
            "relative rounded-2xl p-4 sm:p-6 transition-colors duration-300",
            isDarkMode ? "bg-gray-800" : "bg-gray-50 shadow-sm",
          )}
        >
          {chart ? (
            <>
              <svg
                viewBox={`0 0 ${CHART.width} ${CHART.height}`}
                className="w-full"
                role="img"
                aria-label={t("title")}
              >
                {/* Grid + Y axis */}
                {chart.yTicks.map((tick) => (
                  <g key={tick.secs}>
                    <line
                      x1={CHART.left}
                      x2={CHART.width - CHART.right}
                      y1={tick.py}
                      y2={tick.py}
                      stroke={isDarkMode ? "#ffffff14" : "#00000010"}
                    />
                    <text
                      x={CHART.left - 10}
                      y={tick.py + 4}
                      textAnchor="end"
                      fontSize="12"
                      className="tabular-nums"
                      fill={isDarkMode ? "#9ca3af" : "#6b7280"}
                    >
                      {formatTime(tick.secs)}
                    </text>
                  </g>
                ))}
                {/* Year labels */}
                {chart.years.map((year) => (
                  <text
                    key={year.label}
                    x={year.px}
                    y={CHART.height - 12}
                    textAnchor="middle"
                    fontSize="12"
                    fill={isDarkMode ? "#9ca3af" : "#6b7280"}
                  >
                    {year.label}
                  </text>
                ))}
                {/* Line */}
                <motion.path
                  key={`${eventKey}-${courseKey}-${pbOnly}`}
                  d={chart.path}
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth={2.5}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                />
                {/* Points */}
                {chart.points.map(({ swim, px, py }, i) => {
                  const active =
                    hovered?.swim.date === swim.date &&
                    hovered?.swim.secs === swim.secs;
                  return (
                    <g key={`${swim.date}-${swim.secs}-${i}`}>
                      <motion.circle
                        cx={px}
                        cy={py}
                        r={(swim.pb ? 5.5 : 4) * (active ? 1.5 : 1)}
                        fill={
                          swim.pb ? "#22c55e" : isDarkMode ? "#4b5563" : "#d1d5db"
                        }
                        stroke={isDarkMode ? "#1f2937" : "#ffffff"}
                        strokeWidth={1.5}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.15 + i * 0.02 }}
                        style={{ pointerEvents: "none" }}
                      />
                      {/* Larger invisible hit area for easier hover/click */}
                      <circle
                        cx={px}
                        cy={py}
                        r={14}
                        fill="transparent"
                        className={swim.slug ? "cursor-pointer" : "cursor-default"}
                        onMouseEnter={() =>
                          setHovered({
                            x: (px / CHART.width) * 100,
                            y: (py / CHART.height) * 100,
                            swim,
                          })
                        }
                        onClick={() => openMeet(swim.slug)}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Tooltip */}
              {hovered && (
                <div
                  className={clsx(
                    "absolute z-10 w-52 -translate-x-1/2 rounded-xl px-4 py-3 pr-7 text-left shadow-xl",
                    isDarkMode
                      ? "bg-gray-900 border border-gray-700"
                      : "bg-white border border-gray-200",
                  )}
                  style={{
                    left: `${hovered.x}%`,
                    top: `calc(${hovered.y}% - 8px)`,
                    transform: "translate(-50%, -100%)",
                  }}
                >
                  <button
                    type="button"
                    aria-label={cs ? "Zavřít" : "Close"}
                    onClick={(e) => {
                      e.stopPropagation();
                      setHovered(null);
                    }}
                    className={clsx(
                      "absolute right-1.5 top-1.5 rounded-full p-0.5 transition-colors",
                      isDarkMode
                        ? "text-gray-500 hover:text-white hover:bg-gray-800"
                        : "text-gray-400 hover:text-gray-900 hover:bg-gray-100",
                    )}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                  <p
                    className={clsx(
                      "text-lg font-bold tabular-nums",
                      hovered.swim.pb
                        ? "text-green-500"
                        : isDarkMode
                          ? "text-white"
                          : "text-gray-900",
                    )}
                  >
                    {formatTime(hovered.swim.secs)}
                    {hovered.swim.pb && (
                      <span className="ml-2 rounded-full bg-green-500/15 px-2 py-0.5 text-[10px] font-bold uppercase text-green-500">
                        PB
                      </span>
                    )}
                  </p>
                  <p
                    className={clsx(
                      "mt-1 text-xs font-semibold leading-snug",
                      isDarkMode ? "text-gray-200" : "text-gray-700",
                    )}
                  >
                    {hovered.swim.meet}
                  </p>
                  <p
                    className={clsx(
                      "mt-0.5 text-[11px]",
                      isDarkMode ? "text-gray-400" : "text-gray-500",
                    )}
                  >
                    {formatDate(hovered.swim.date, locale)}
                    {hovered.swim.place
                      ? ` · ${hovered.swim.place}${cs ? " místo" : ""}`
                      : ""}
                    {hovered.swim.round ? ` · ${roundLabel(hovered.swim.round)}` : ""}
                  </p>
                  {hovered.swim.slug && (
                    <p className="mt-1.5 text-[11px] font-bold text-green-500">
                      {cs ? "→ Zobrazit závod" : "→ View meet"}
                    </p>
                  )}
                </div>
              )}
            </>
          ) : (
            <p
              className={clsx(
                "py-16 text-center",
                isDarkMode ? "text-gray-400" : "text-gray-500",
              )}
            >
              {t("noData")}
            </p>
          )}
        </motion.div>

        {/* Stats */}
        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {[
              { label: t("stats.best"), value: formatTime(stats.best) },
              {
                label: t("stats.improvement"),
                value: `−${stats.improvement.toFixed(2)} s`,
              },
              { label: t("stats.swims"), value: String(stats.count) },
              { label: t("stats.span"), value: stats.span },
            ].map((item) => (
              <div
                key={item.label}
                className={clsx(
                  "rounded-xl px-4 py-3 text-center transition-colors duration-300",
                  isDarkMode ? "bg-gray-800" : "bg-gray-50 shadow-sm",
                )}
              >
                <p className="text-green-500 text-[11px] font-bold uppercase tracking-wider">
                  {item.label}
                </p>
                <p
                  className={clsx(
                    "mt-1 text-lg font-bold tabular-nums",
                    isDarkMode ? "text-white" : "text-gray-800",
                  )}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        <p
          className={clsx(
            "mt-6 text-center text-xs",
            isDarkMode ? "text-gray-500" : "text-gray-400",
          )}
        >
          {t("note")}
        </p>
      </div>
    </section>
  );
};

export default Progression;
