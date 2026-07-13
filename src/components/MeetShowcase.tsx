"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  Calendar,
  ExternalLink,
  MapPin,
  Medal,
  Mountain,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { useLocale } from "next-intl";
import clsx from "clsx";
import { useTheme } from "./ThemeProvider";
import VideoPlayer from "./VideoPlayer";

export type MeetVideo =
  | { type: "youtube"; id: string; title: string }
  | { type: "local"; src: string; title: string };

export type MeetShowcaseProps = {
  badge: string;
  title: string;
  subtitle: string;
  location: string;
  dateLabel: string;
  heroImage: string;
  intro: string;
  stats: Array<{
    value: string;
    label: string;
    medal?: boolean;
    /** Medal accent colour for the stat tile; defaults to gold/amber. */
    medalTone?: "gold" | "silver" | "bronze";
  }>;
  results: Array<{
    event: string;
    finalTime: string;
    placement?: string;
    medal?: "gold" | "silver" | "bronze";
    pb?: boolean;
    progression?: Array<{ stage: string; time: string; pb?: boolean }>;
    /** Cumulative split times, final leg included (e.g. 50 m → 31.44, 100 m → 1:05.89). */
    splits?: Array<{ distance: string; time: string; label?: string }>;
    /** Altitude-adjusted (sea-level equivalent) time, e.g. "1:49.19". */
    adjusted?: string;
  }>;
  /** Note shown as a hero chip, e.g. "Denver · 1 600 m n. m." */
  altitudeNote?: string;
  highlights: string[];
  gallery: Array<{
    src: string;
    caption: string;
    objectPosition?: string;
    /** Show the whole image (letterboxed) instead of cropping to fill. */
    contain?: boolean;
  }>;
  videos?: MeetVideo[];
  links: Array<{ label: string; url: string }>;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const ROBOTO = { fontFamily: "'Roboto', sans-serif" } as const;

const MEDAL_THEME = {
  gold: {
    text: "text-amber-500",
    border: "from-amber-300 via-amber-400 to-amber-500/30",
    glow: "shadow-[0_0_60px_-15px_rgba(251,191,36,0.5)]",
    dot: "bg-amber-400 ring-2 ring-amber-400/40",
  },
  silver: {
    text: "text-slate-400",
    border: "from-slate-300 via-slate-400 to-slate-400/30",
    glow: "shadow-[0_0_60px_-15px_rgba(148,163,184,0.5)]",
    dot: "bg-slate-400 ring-2 ring-slate-400/40",
  },
  bronze: {
    text: "text-amber-600",
    border: "from-amber-500 via-amber-600 to-amber-700/40",
    glow: "shadow-[0_0_60px_-15px_rgba(217,119,6,0.5)]",
    dot: "bg-amber-600 ring-2 ring-amber-600/40",
  },
} as const;

function parseTimeToSeconds(time: string): number | null {
  const match = /^(?:(\d+):)?(\d{1,2})\.(\d{2})$/.exec(time.trim());
  if (!match) return null;
  const minutes = match[1] ? parseInt(match[1], 10) : 0;
  return minutes * 60 + parseInt(match[2], 10) + parseInt(match[3], 10) / 100;
}

function formatDelta(delta: number, cs: boolean): string {
  const sign = delta <= 0 ? "−" : "+";
  const value = Math.abs(delta).toFixed(2);
  return `${sign}${cs ? value.replace(".", ",") : value} s`;
}

function formatSeconds(total: number): string {
  if (total < 60) return total.toFixed(2);
  const minutes = Math.floor(total / 60);
  const rest = total - minutes * 60;
  return `${minutes}:${rest.toFixed(2).padStart(5, "0")}`;
}

/** Animated count-up for stat values such as "3.", "2×" or "50 m". */
function StatValue({ value, reduced }: { value: string; reduced: boolean }) {
  const match = /^(\d+)([\s\S]*)$/.exec(value);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const hasNumber = match !== null;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!hasNumber) return;
    if (!inView) {
      // Safety net: never leave the stat stuck at 0 if the observer misfires.
      const fallback = window.setTimeout(() => setDisplay(target), 2500);
      return () => window.clearTimeout(fallback);
    }
    if (reduced) {
      setDisplay(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [hasNumber, inView, reduced, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {hasNumber ? `${display}${suffix}` : value}
    </span>
  );
}

/** Small green pill with a soft, infinitely pulsing ring. */
function PbBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-green-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
      <TrendingUp className="h-3 w-3" />
      {label}
    </span>
  );
}

function SectionHeader({
  number,
  title,
  isDarkMode,
  reduced,
}: {
  number: string;
  title: string;
  isDarkMode: boolean;
  reduced: boolean;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="flex items-baseline gap-4"
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-green-500 tabular-nums">
          {number}
        </span>
        <h2
          className={clsx(
            "text-3xl font-black uppercase tracking-tight transition-colors duration-300 md:text-5xl",
            isDarkMode ? "text-white" : "text-black",
          )}
          style={ROBOTO}
        >
          {title}
        </h2>
      </motion.div>
      <motion.div
        initial={{ scaleX: reduced ? 1 : 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
        className={clsx(
          "mt-5 h-px origin-left",
          isDarkMode ? "bg-white/10" : "bg-black/10",
        )}
      />
    </div>
  );
}

export default function MeetShowcase({
  badge,
  title,
  subtitle,
  location,
  dateLabel,
  altitudeNote,
  heroImage,
  intro,
  stats,
  results,
  highlights,
  gallery,
  videos,
  links,
}: MeetShowcaseProps) {
  const { isDarkMode } = useTheme();
  const locale = useLocale();
  const cs = locale === "cs";
  const reduced = useReducedMotion() ?? false;

  const labels = {
    results: cs ? "Výsledky" : "Results",
    moments: cs ? "Momenty" : "Moments",
    videos: cs ? "Videa" : "Videos",
    highlights: cs ? "Zajímavosti" : "Highlights",
    links: cs ? "Odkazy" : "Links",
    pb: cs ? "OSOBNÍ REKORD" : "PERSONAL BEST",
    splits: cs ? "Mezičasy" : "Splits",
    lap: cs ? "úsek" : "lap",
    adjusted: cs ? "Přepočet ≈" : "Sea level ≈",
    medal: cs
      ? { gold: "Zlato", silver: "Stříbro", bronze: "Bronz" }
      : { gold: "Gold", silver: "Silver", bronze: "Bronze" },
  };

  // Page scroll progress bar (swimming-lane style line at the very top).
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Hero parallax.
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "18%"]);
  const heroScale = useTransform(heroProgress, [0, 1], [1.12, 1]);

  const hairline = isDarkMode ? "border-white/10" : "border-black/10";
  const hairlineBg = isDarkMode ? "bg-white/10" : "bg-black/10";
  const mutedText = isDarkMode ? "text-gray-400" : "text-gray-500";
  const surface = isDarkMode ? "bg-gray-900" : "bg-white";
  const neutralChip = isDarkMode
    ? "border-white/10 bg-white/5 text-gray-300"
    : "border-black/10 bg-black/5 text-gray-600";

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: EASE,
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };
  const nodeVariants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };
  const lineVariants: Variants = {
    hidden: { scaleX: reduced ? 1 : 0, opacity: reduced ? 0 : 1 },
    visible: { scaleX: 1, opacity: 1, transition: { duration: 0.8, ease: EASE } },
  };

  const hasGallery = gallery.length > 0;
  const hasVideos = Boolean(videos && videos.length > 0);
  let sectionIndex = 2;
  const sectionNumbers = {
    results: "01",
    highlights: "02",
    moments: hasGallery ? String(++sectionIndex).padStart(2, "0") : "",
    videos: hasVideos ? String(++sectionIndex).padStart(2, "0") : "",
    links: String(++sectionIndex).padStart(2, "0"),
  };

  const renderProgression = (
    progression: NonNullable<MeetShowcaseProps["results"][number]["progression"]>,
    medal?: "gold" | "silver" | "bronze",
  ) => (
    <div className="flex w-full items-start">
      {progression.map((round, index) => {
        const previous =
          index > 0 ? parseTimeToSeconds(progression[index - 1].time) : null;
        const current = parseTimeToSeconds(round.time);
        const delta =
          previous !== null && current !== null ? current - previous : null;
        const isFinal = index === progression.length - 1;

        return (
          <Fragment key={round.stage}>
            {index > 0 && (
              <motion.span
                aria-hidden
                variants={lineVariants}
                className={clsx(
                  "mt-[5px] h-px min-w-6 flex-1 origin-left",
                  medal && isFinal
                    ? "bg-gradient-to-r from-green-500/60 to-amber-400/80"
                    : "bg-green-500/40",
                )}
              />
            )}
            <motion.div
              variants={nodeVariants}
              className="flex flex-col items-center px-2 text-center"
            >
              <span
                className={clsx(
                  "h-2.5 w-2.5 rounded-full",
                  medal && isFinal
                    ? MEDAL_THEME[medal].dot
                    : round.pb
                      ? "bg-green-500 ring-2 ring-green-500/30"
                      : "bg-green-500/80",
                )}
              />
              <span
                className={clsx(
                  "mt-2 text-[10px] font-bold uppercase tracking-widest",
                  mutedText,
                )}
              >
                {round.stage}
              </span>
              <span
                className={clsx(
                  "mt-0.5 text-sm font-bold tabular-nums",
                  medal && isFinal
                    ? MEDAL_THEME[medal].text
                    : isDarkMode
                      ? "text-white"
                      : "text-gray-900",
                )}
                style={ROBOTO}
              >
                {round.time}
              </span>
              {delta !== null && (
                <span
                  className={clsx(
                    "mt-0.5 text-[11px] font-semibold tabular-nums",
                    delta < 0 ? "text-green-500" : mutedText,
                  )}
                >
                  {formatDelta(delta, cs)}
                </span>
              )}
              {round.pb && (
                <span className="mt-1 rounded-full bg-green-500/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-green-500">
                  PB
                </span>
              )}
            </motion.div>
          </Fragment>
        );
      })}
    </div>
  );

  const renderSplits = (
    splits: NonNullable<MeetShowcaseProps["results"][number]["splits"]>,
  ) => {
    const laps = splits.map((split, index) => {
      const current = parseTimeToSeconds(split.time);
      const previous =
        index > 0 ? parseTimeToSeconds(splits[index - 1].time) : 0;
      const lap =
        current !== null && previous !== null ? current - previous : null;
      return { ...split, lap };
    });
    const validLaps = laps
      .map((lap) => lap.lap)
      .filter((lap): lap is number => lap !== null);
    const fastest = validLaps.length > 1 ? Math.min(...validLaps) : null;

    return (
      <div className="mt-6">
        <p
          className={clsx(
            "flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em]",
            mutedText,
          )}
        >
          <span aria-hidden className="h-px w-6 bg-green-500/60" />
          {labels.splits}
        </p>
        <div
          className={clsx(
            "mt-3 flex divide-x overflow-x-auto rounded-xl border",
            hairline,
            isDarkMode ? "divide-white/10" : "divide-black/10",
          )}
        >
          {laps.map((split, index) => (
            <motion.div
              key={split.distance}
              initial={{ opacity: 0, y: reduced ? 0 : 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.45, ease: EASE, delay: index * 0.06 }}
              className="min-w-[84px] flex-1 px-3 py-2.5 text-center"
            >
              <p
                className={clsx(
                  "text-[10px] font-bold uppercase tracking-widest",
                  mutedText,
                )}
              >
                {split.distance} m{split.label ? ` · ${split.label}` : ""}
              </p>
              <p
                className={clsx(
                  "mt-1 text-sm font-bold tabular-nums",
                  isDarkMode ? "text-white" : "text-gray-900",
                )}
                style={ROBOTO}
              >
                {split.time}
              </p>
              {split.lap !== null && (
                <p
                  className={clsx(
                    "mt-0.5 text-[11px] font-semibold tabular-nums",
                    fastest !== null && split.lap === fastest
                      ? "text-green-500"
                      : mutedText,
                  )}
                >
                  {formatSeconds(split.lap)}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className={clsx(
        "min-h-screen transition-colors duration-300",
        surface,
        isDarkMode ? "text-white" : "text-gray-900",
      )}
    >
      {/* Scroll progress — swimming-lane line pinned to the top */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <motion.div
          className="h-0.5 origin-left bg-green-500"
          style={{ scaleX: progress }}
        />
        <div className={clsx("h-px", hairlineBg)} />
      </div>

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative flex h-[92svh] min-h-[560px] flex-col justify-end overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={reduced ? undefined : { y: heroY, scale: heroScale }}
        >
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25" />
        <div className="absolute inset-0 bg-green-950/15 mix-blend-multiply" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 text-white md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-4 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.3em] text-green-400"
          >
            <span className="relative flex h-2 w-2">
              {!reduced && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            {badge}
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: reduced ? 0 : "110%", opacity: reduced ? 0 : 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
              className="text-[clamp(2.75rem,8vw,6.5rem)] font-black uppercase leading-[0.95] tracking-tight"
              style={ROBOTO}
            >
              {title}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
            className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-green-300 md:text-base"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            {[
              { icon: MapPin, text: location },
              { icon: Calendar, text: dateLabel },
              ...(altitudeNote
                ? [{ icon: Mountain, text: altitudeNote }]
                : []),
            ].map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
              >
                <Icon className="h-4 w-4 text-green-400" />
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        {!reduced && (
          <div className="absolute bottom-5 left-1/2 z-10 hidden h-12 w-px -translate-x-1/2 bg-white/25 md:block">
            <motion.span
              className="absolute -left-[2.5px] h-1.5 w-1.5 rounded-full bg-green-400"
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        )}
      </section>

      {/* INTRO — editorial standfirst with drop cap */}
      <section className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className={clsx(
            "border-l-2 border-green-500 pl-6 text-xl leading-relaxed md:text-2xl",
            "first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-black first-letter:leading-[0.85] first-letter:text-green-500 md:first-letter:text-7xl",
            isDarkMode ? "text-gray-300" : "text-gray-700",
          )}
          style={ROBOTO}
        >
          {intro}
        </motion.p>
      </section>

      {/* STATS — full-width strip with hairline cross */}
      <section className={clsx("border-y", hairline)}>
        <div
          className={clsx(
            "mx-auto grid max-w-6xl grid-cols-2 gap-px",
            hairlineBg,
            stats.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4",
          )}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: index * 0.1 }}
              className={clsx(
                "relative overflow-hidden px-6 py-10 text-center md:py-14",
                surface,
                stats.length % 2 === 1 &&
                  index === stats.length - 1 &&
                  "col-span-2 md:col-span-1",
              )}
            >
              {stat.medal && (
                <>
                  <span
                    aria-hidden
                    className={clsx(
                      "absolute left-1/2 top-6 h-28 w-28 -translate-x-1/2 rounded-full blur-3xl",
                      stat.medalTone === "silver"
                        ? "bg-slate-400/20"
                        : stat.medalTone === "bronze"
                          ? "bg-amber-600/15"
                          : "bg-amber-400/15",
                    )}
                  />
                  <Medal
                    className={clsx(
                      "relative mx-auto mb-2 h-5 w-5",
                      stat.medalTone === "silver"
                        ? "text-slate-400"
                        : stat.medalTone === "bronze"
                          ? "text-amber-600"
                          : "text-amber-500",
                    )}
                  />
                </>
              )}
              <p
                className={clsx(
                  "relative text-5xl font-black md:text-6xl",
                  stat.medal
                    ? stat.medalTone === "silver"
                      ? "text-slate-400"
                      : stat.medalTone === "bronze"
                        ? "text-amber-600"
                        : "text-amber-500"
                    : isDarkMode
                      ? "text-white"
                      : "text-black",
                )}
                style={ROBOTO}
              >
                <StatValue value={stat.value} reduced={reduced} />
              </p>
              <p
                className={clsx(
                  "relative mt-3 text-xs font-semibold uppercase tracking-[0.25em]",
                  mutedText,
                )}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeader
          number={sectionNumbers.results}
          title={labels.results}
          isDarkMode={isDarkMode}
          reduced={reduced}
        />

        <div className="space-y-6">
          {results.map((result, index) => {
            const ordinal = String(index + 1).padStart(2, "0");
            const medal = result.medal;
            const inner = (
              <div className="md:grid md:grid-cols-12 md:items-center md:gap-6">
                <div className="hidden md:block md:col-span-1">
                  <span
                    aria-hidden
                    className={clsx(
                      "text-6xl font-black leading-none tabular-nums",
                      medal && MEDAL_THEME[medal].text,
                    )}
                    style={
                      medal
                        ? ROBOTO
                        : {
                            ...ROBOTO,
                            color: "transparent",
                            WebkitTextStroke: isDarkMode
                              ? "1px rgba(255,255,255,0.25)"
                              : "1px rgba(0,0,0,0.2)",
                          }
                    }
                  >
                    {ordinal}
                  </span>
                </div>

                <div
                  className={clsx(
                    result.progression ? "md:col-span-5" : "md:col-span-9",
                  )}
                >
                  {medal && (
                    <p
                      className={clsx(
                        "mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em]",
                        MEDAL_THEME[medal].text,
                      )}
                    >
                      <Medal className="h-4 w-4" />
                      {labels.medal[medal]}
                    </p>
                  )}
                  <h3
                    className={clsx(
                      "text-2xl font-bold md:text-3xl",
                      isDarkMode ? "text-white" : "text-gray-900",
                    )}
                    style={ROBOTO}
                  >
                    {result.event}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {result.placement && (
                      <span
                        className={clsx(
                          "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide",
                          neutralChip,
                        )}
                      >
                        {result.placement}
                      </span>
                    )}
                    {result.pb && <PbBadge label={labels.pb} />}
                  </div>
                </div>

                <div className="mt-4 md:order-last md:col-span-2 md:mt-0 md:text-right">
                  <p
                    className={clsx(
                      "text-4xl font-black tabular-nums md:text-[2.6rem]",
                      medal
                        ? MEDAL_THEME[medal].text
                        : isDarkMode
                          ? "text-white"
                          : "text-black",
                    )}
                    style={ROBOTO}
                  >
                    {result.finalTime}
                  </p>
                  {result.adjusted && (
                    <p
                      className={clsx(
                        "mt-1 text-xs font-semibold uppercase tracking-wider",
                        mutedText,
                      )}
                    >
                      {labels.adjusted}{" "}
                      <span className="tabular-nums text-green-500">
                        {result.adjusted}
                      </span>
                    </p>
                  )}
                </div>

                {result.progression && (
                  <div className="mt-6 md:col-span-4 md:mt-0">
                    {renderProgression(result.progression, medal)}
                  </div>
                )}
              </div>
            );
            const innerWithSplits = (
              <>
                {inner}
                {result.splits && renderSplits(result.splits)}
              </>
            );

            if (medal) {
              // Medal result — visually dominant card with a golden gradient border.
              return (
                <motion.div
                  key={result.event}
                  variants={rowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10% 0px" }}
                  className={clsx(
                    "rounded-2xl bg-gradient-to-br p-px",
                    MEDAL_THEME[medal].border,
                    MEDAL_THEME[medal].glow,
                  )}
                >
                  <div
                    className={clsx(
                      "relative overflow-hidden rounded-[15px] px-6 py-8 md:px-8",
                      isDarkMode ? "bg-gray-800" : "bg-white",
                    )}
                  >
                    <Trophy
                      aria-hidden
                      className={clsx(
                        "absolute -right-5 -top-5 h-36 w-36 opacity-[0.06]",
                        MEDAL_THEME[medal].text,
                      )}
                    />
                    {innerWithSplits}
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={result.event}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10% 0px" }}
                className={clsx(
                  "border-b px-1 py-7 transition-colors duration-300 md:py-8",
                  hairline,
                  isDarkMode ? "hover:bg-white/[0.03]" : "hover:bg-black/[0.02]",
                )}
              >
                {innerWithSplits}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <SectionHeader
          number={sectionNumbers.highlights}
          title={labels.highlights}
          isDarkMode={isDarkMode}
          reduced={reduced}
        />
        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {highlights.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: (index % 2) * 0.1 }}
              className={clsx("flex items-start gap-4 border-t pt-5", hairline)}
            >
              <span
                className="text-2xl font-black leading-none text-green-500 tabular-nums"
                style={ROBOTO}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p
                className={clsx(
                  "leading-relaxed",
                  isDarkMode ? "text-gray-300" : "text-gray-700",
                )}
              >
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALLERY — asymmetric mosaic on desktop, scroll-snap strip on mobile */}
      {hasGallery && (
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <SectionHeader
          number={sectionNumbers.moments}
          title={labels.moments}
          isDarkMode={isDarkMode}
          reduced={reduced}
        />
        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {gallery.map((photo, index) => {
            const isLead = index === 0;
            return (
              <motion.figure
                key={photo.src}
                initial={{ opacity: 0, y: reduced ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.6,
                  ease: EASE,
                  delay: (index % 3) * 0.08,
                }}
                className={clsx(
                  "group relative w-[78vw] max-w-sm shrink-0 snap-center overflow-hidden rounded-2xl md:w-auto md:max-w-none md:shrink",
                  isLead && "md:col-span-2 md:row-span-2",
                  photo.contain
                    ? "aspect-[4/3] bg-black"
                    : clsx("aspect-[4/3]", isLead && "md:aspect-auto"),
                )}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes={
                    isLead
                      ? "(max-width: 768px) 78vw, 66vw"
                      : "(max-width: 768px) 78vw, 33vw"
                  }
                  style={
                    photo.objectPosition && !photo.contain
                      ? { objectPosition: photo.objectPosition }
                      : undefined
                  }
                  className={clsx(
                    "transition-transform duration-700 ease-out",
                    photo.contain
                      ? "object-contain"
                      : "object-cover group-hover:scale-[1.03]",
                  )}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 pt-12 transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-green-400">
                    FIG. {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-white">
                    {photo.caption}
                  </span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </section>
      )}

      {/* VIDEOS — rendered only when at least one video exists */}
      {videos && videos.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
          <SectionHeader
            number={sectionNumbers.videos}
            title={labels.videos}
            isDarkMode={isDarkMode}
            reduced={reduced}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {videos.map((video, index) => (
              <motion.div
                key={video.type === "youtube" ? video.id : video.src}
                initial={{ opacity: 0, y: reduced ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.6,
                  ease: EASE,
                  delay: (index % 2) * 0.1,
                }}
              >
                {video.type === "youtube" ? (
                  <VideoPlayer
                    videoId={video.id}
                    title={video.title}
                    priority={index === 0}
                  />
                ) : (
                  <figure>
                    <video
                      controls
                      preload="metadata"
                      className="max-h-[70vh] w-full rounded-2xl bg-black shadow-2xl"
                      src={video.src}
                    />
                    <figcaption
                      className={clsx(
                        "mt-3 text-sm font-semibold",
                        isDarkMode ? "text-gray-300" : "text-gray-700",
                      )}
                    >
                      {video.title}
                    </figcaption>
                  </figure>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* LINKS */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <SectionHeader
          number={sectionNumbers.links}
          title={labels.links}
          isDarkMode={isDarkMode}
          reduced={reduced}
        />
        <div className="flex flex-wrap gap-4">
          {links.map((link, index) => (
            <motion.a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, ease: EASE, delay: index * 0.08 }}
              whileTap={{ scale: reduced ? 1 : 0.98 }}
              className={clsx(
                "group inline-flex min-h-12 items-center gap-3 rounded-full px-6 py-3 text-sm font-bold transition-colors duration-300",
                index === 0
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : clsx(
                      "border",
                      isDarkMode
                        ? "border-green-500/50 text-green-400 hover:bg-green-500/10"
                        : "border-green-500/60 text-green-600 hover:bg-green-500/10",
                    ),
              )}
            >
              {link.label}
              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
