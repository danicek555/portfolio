"use client";

import Image from "next/image";
import {
  Award,
  Calendar,
  Clapperboard,
  ExternalLink,
  MapPin,
  Medal,
  Mountain,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import clsx from "clsx";
import { useTheme } from "./ThemeProvider";
import VideoPlayer from "./VideoPlayer";
import type { MeetShowcaseProps } from "./MeetShowcase";

/**
 * MeetRecap — the "classic" meet page template (hero photo, info cards,
 * story, result cards) refreshed with splits, round progressions and
 * altitude-adjusted times. Shares its props with MeetShowcase so meets
 * can switch between the two templates by swapping the import.
 */

const MEDAL_COLOR = {
  gold: "text-amber-500",
  silver: "text-slate-400",
  bronze: "text-amber-700",
} as const;

const MEDAL_CARD = {
  dark: {
    gold: "bg-gradient-to-br from-amber-500/20 to-amber-900/20 border-amber-500/50",
    silver:
      "bg-gradient-to-br from-slate-500/20 to-slate-800/30 border-slate-400/50",
    bronze:
      "bg-gradient-to-br from-amber-800/30 to-orange-900/20 border-amber-700/50",
  },
  light: {
    gold: "bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-300",
    silver: "bg-gradient-to-br from-slate-100 to-gray-50 border-slate-300",
    bronze: "bg-gradient-to-br from-orange-50 to-amber-50 border-amber-400",
  },
} as const;

function parseTime(time: string): number | null {
  const match = /^(?:(\d+):)?(\d{1,2})\.(\d{2})$/.exec(time.trim());
  if (!match) return null;
  return (
    (match[1] ? parseInt(match[1], 10) : 0) * 60 +
    parseInt(match[2], 10) +
    parseInt(match[3], 10) / 100
  );
}

function formatLap(total: number): string {
  if (total < 60) return total.toFixed(2);
  const minutes = Math.floor(total / 60);
  return `${minutes}:${(total - minutes * 60).toFixed(2).padStart(5, "0")}`;
}

const sectionReveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function MeetRecap({
  badge,
  title,
  subtitle,
  location,
  dateLabel,
  heroImage,
  heroContain,
  heroPosition,
  intro,
  stats,
  results,
  highlights,
  gallery,
  videos,
  links,
  altitudeNote,
}: MeetShowcaseProps) {
  const { isDarkMode } = useTheme();
  const locale = useLocale();
  const cs = locale === "cs";

  const labels = {
    story: cs ? "Příběh závodu" : "The story of the meet",
    momentsTitle: cs ? "Klíčové momenty" : "Key moments",
    results: cs ? "Výsledky" : "Results",
    raceByRace: cs ? "Závod po závodu" : "Race by race",
    splits: cs ? "Mezičasy" : "Splits",
    adjusted: cs ? "přepočet na hladinu moře" : "sea-level equivalent",
    pb: cs ? "Osobní rekord" : "Personal best",
    videos: cs ? "Videa" : "Videos",
    videosTitle: cs ? "Záznamy závodů" : "Race videos",
    videosEmpty: cs
      ? "Záznamy závodů právě připravuji — brzy je zde najdete."
      : "Race videos are on the way — check back soon.",
    gallery: cs ? "Momenty" : "Moments",
    links: cs ? "Odkazy" : "Links",
    level: cs ? "Úroveň" : "Level",
    place: cs ? "Místo" : "Location",
    date: cs ? "Termín" : "Date",
    altitude: cs ? "Nadmořská výška" : "Altitude",
  };

  const infoCards = [
    { icon: MapPin, title: labels.place, value: location },
    { icon: Calendar, title: labels.date, value: dateLabel },
    { icon: Trophy, title: labels.level, value: subtitle },
    ...(altitudeNote
      ? [{ icon: Mountain, title: labels.altitude, value: altitudeNote }]
      : []),
  ];

  return (
    <div
      className={clsx(
        "min-h-screen transition-colors duration-300",
        isDarkMode ? "bg-gray-900" : "bg-white",
      )}
    >
      {/* Hero */}
      <section className="relative flex h-[90vh] min-h-[540px] items-center justify-center overflow-hidden text-white">
        <div className="absolute inset-0 bg-neutral-950">
          {heroContain ? (
            // Whole photo, centered on a solid dark backdrop (no blur, no crop)
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-contain"
              priority
            />
          ) : (
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover"
              style={heroPosition ? { objectPosition: heroPosition } : undefined}
              priority
            />
          )}
          <div
            className={clsx(
              "absolute inset-0",
              heroContain
                ? "bg-gradient-to-b from-black/50 via-transparent to-black/70"
                : "bg-gradient-to-b from-black/70 via-black/50 to-black/80",
            )}
          />
        </div>

        <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            className="mb-6 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white">
              {badge}
            </span>
            {stats[0] && (
              <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                {stats[0].value} {stats[0].label}
              </span>
            )}
          </motion.div>

          <motion.h1
            className="mb-6 text-5xl font-bold leading-tight md:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-lg text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-5 w-5 text-amber-400" />
              {location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-5 w-5 text-amber-400" />
              {dateLabel}
            </span>
          </motion.p>

          <motion.div
            className="mx-auto grid max-w-xl grid-cols-3 gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-5 backdrop-blur-md"
              >
                <div className="text-3xl font-bold text-amber-400 md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-gray-200 md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          {/* Info cards */}
          <motion.div
            className={clsx(
              "mb-20 grid gap-6 sm:grid-cols-2",
              infoCards.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3",
            )}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionReveal}
          >
            {infoCards.map((card) => (
              <motion.div
                key={card.title}
                className={clsx(
                  "flex items-center gap-4 rounded-xl p-6 transition-colors duration-300",
                  isDarkMode ? "bg-gray-800" : "bg-gray-50",
                )}
                variants={itemReveal}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <card.icon className="h-8 w-8 shrink-0 text-amber-600" />
                <div>
                  <h3
                    className={clsx(
                      "font-bold",
                      isDarkMode ? "text-white" : "text-gray-900",
                    )}
                  >
                    {card.title}
                  </h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    {card.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Story + key moments */}
          <div className="mb-20 grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600">
                {labels.story}
              </p>
              <p
                className={clsx(
                  "mb-6 text-lg leading-relaxed",
                  isDarkMode ? "text-gray-300" : "text-gray-700",
                )}
              >
                {intro}
              </p>
              {highlights[0] && (
                <div className="border-l-4 border-amber-600 pl-6">
                  <p
                    className={clsx(
                      "text-xl font-medium leading-relaxed",
                      isDarkMode ? "text-gray-200" : "text-gray-800",
                    )}
                  >
                    {highlights[0]}
                  </p>
                </div>
              )}
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionReveal}
              className="space-y-4"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
                {labels.momentsTitle}
              </p>
              {highlights.slice(1).map((highlight) => (
                <motion.div
                  key={highlight}
                  variants={itemReveal}
                  className={clsx(
                    "flex items-start gap-4 rounded-xl p-5",
                    isDarkMode ? "bg-gray-800" : "bg-gray-50",
                  )}
                >
                  <Award className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
                  <p
                    className={clsx(
                      "leading-relaxed",
                      isDarkMode ? "text-gray-300" : "text-gray-700",
                    )}
                  >
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionReveal}
          >
            <motion.p
              className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-amber-600"
              variants={itemReveal}
            >
              {labels.results}
            </motion.p>
            <motion.h2
              className={clsx(
                "mb-10 text-center text-4xl font-bold",
                isDarkMode ? "text-white" : "text-gray-900",
              )}
              variants={itemReveal}
            >
              {labels.raceByRace}
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              {results.map((result) => {
                const laps = result.splits?.map((split, index) => {
                  const current = parseTime(split.time);
                  const previous =
                    index > 0
                      ? parseTime(result.splits![index - 1].time)
                      : 0;
                  return {
                    ...split,
                    lap:
                      current !== null && previous !== null
                        ? current - previous
                        : null,
                  };
                });

                return (
                  <motion.div
                    key={result.event}
                    className={clsx(
                      "min-w-0 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg",
                      result.medal
                        ? MEDAL_CARD[isDarkMode ? "dark" : "light"][
                            result.medal
                          ]
                        : isDarkMode
                          ? "border-gray-700 bg-gray-800"
                          : "border-gray-200 bg-gray-50",
                    )}
                    variants={itemReveal}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        {result.medal ? (
                          <Medal
                            className={clsx(
                              "mt-1 h-8 w-8 shrink-0",
                              MEDAL_COLOR[result.medal],
                            )}
                          />
                        ) : (
                          <Target className="mt-1 h-8 w-8 shrink-0 text-amber-600" />
                        )}
                        <div>
                          <h3
                            className={clsx(
                              "mb-2 font-bold",
                              isDarkMode ? "text-white" : "text-gray-900",
                            )}
                          >
                            {result.event}
                          </h3>
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            {result.placement && (
                              <span
                                className={clsx(
                                  "rounded px-2 py-1 text-xs font-semibold text-white",
                                  result.medal ? "bg-amber-600" : "bg-gray-600",
                                )}
                              >
                                {result.placement}
                              </span>
                            )}
                            {result.pb && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-green-500 px-2 py-1 text-xs font-semibold text-white">
                                <TrendingUp className="h-3 w-3" />
                                {labels.pb}
                              </span>
                            )}
                          </div>
                          {result.progression && (
                            <p
                              className={clsx(
                                "text-sm tabular-nums",
                                isDarkMode ? "text-gray-300" : "text-gray-600",
                              )}
                            >
                              {result.progression
                                .map((round) => `${round.stage} ${round.time}`)
                                .join(" → ")}
                            </p>
                          )}
                          {result.adjusted && (
                            <p
                              className={clsx(
                                "mt-1 text-xs",
                                isDarkMode ? "text-gray-400" : "text-gray-500",
                              )}
                            >
                              ≈{" "}
                              <span className="font-semibold tabular-nums text-green-500">
                                {result.adjusted}
                              </span>{" "}
                              {labels.adjusted}
                            </p>
                          )}
                        </div>
                      </div>
                      <div
                        className={clsx(
                          "shrink-0 text-2xl font-bold tabular-nums",
                          result.medal
                            ? "text-amber-600"
                            : isDarkMode
                              ? "text-gray-200"
                              : "text-gray-800",
                        )}
                      >
                        {result.finalTime}
                      </div>
                    </div>

                    {laps && (
                      <div
                        className={clsx(
                          "mt-4 flex divide-x overflow-x-auto rounded-lg border",
                          isDarkMode
                            ? "divide-gray-700 border-gray-700"
                            : "divide-gray-200 border-gray-200",
                        )}
                      >
                        {laps.map((split) => (
                          <div
                            key={split.distance}
                            className="min-w-[72px] flex-1 px-2 py-2 text-center"
                          >
                            <p
                              className={clsx(
                                "text-[10px] font-bold uppercase tracking-wider",
                                isDarkMode ? "text-gray-400" : "text-gray-500",
                              )}
                            >
                              {split.distance}
                              {split.label ? ` · ${split.label}` : ""}
                            </p>
                            <p
                              className={clsx(
                                "text-sm font-bold tabular-nums",
                                isDarkMode ? "text-white" : "text-gray-900",
                              )}
                            >
                              {split.time}
                            </p>
                            {split.lap !== null && (
                              <p
                                className={clsx(
                                  "text-[11px] tabular-nums",
                                  isDarkMode
                                    ? "text-gray-400"
                                    : "text-gray-500",
                                )}
                              >
                                {formatLap(split.lap)}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Gallery (optional) */}
          {gallery.length > 0 && (
            <motion.div
              className="mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={sectionReveal}
            >
              <motion.p
                className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-amber-600"
                variants={itemReveal}
              >
                {labels.gallery}
              </motion.p>
              <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
                {gallery.map((photo) => (
                  <motion.figure
                    key={photo.src}
                    variants={itemReveal}
                    className="relative aspect-[4/3] w-[80vw] max-w-sm shrink-0 snap-center overflow-hidden rounded-xl md:w-auto md:max-w-none md:shrink"
                  >
                    {photo.contain && (
                      // Blurred, zoomed copy of the same photo fills the frame
                      // behind the whole (letterboxed) image instead of a flat
                      // black backdrop.
                      <Image
                        src={photo.src}
                        alt=""
                        aria-hidden
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="scale-110 object-cover blur-2xl"
                      />
                    )}
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={
                        photo.objectPosition && !photo.contain
                          ? { objectPosition: photo.objectPosition }
                          : undefined
                      }
                      className={clsx(
                        "transition-transform duration-500",
                        photo.contain
                          ? "object-contain"
                          : "object-cover hover:scale-105",
                      )}
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 py-3 text-sm font-medium text-white">
                      {photo.caption}
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </motion.div>
          )}

          {/* Videos */}
          {videos && (
            <motion.div
              className="mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionReveal}
            >
              <motion.p
                className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-amber-600"
                variants={itemReveal}
              >
                {labels.videos}
              </motion.p>
              <motion.h2
                className={clsx(
                  "mb-10 text-center text-4xl font-bold",
                  isDarkMode ? "text-white" : "text-gray-900",
                )}
                variants={itemReveal}
              >
                {labels.videosTitle}
              </motion.h2>
              {videos.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {videos.map((video, index) => (
                    <motion.div
                      key={video.type === "youtube" ? video.id : video.src}
                      variants={itemReveal}
                    >
                      {video.type === "youtube" ? (
                        <VideoPlayer
                          videoId={video.id}
                          title={video.title}
                          priority={index === 0}
                        />
                      ) : (
                        <figure>
                          <div className="relative flex justify-center overflow-hidden rounded-xl bg-black shadow-lg">
                            {video.poster && (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={video.poster}
                                alt=""
                                aria-hidden
                                className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl"
                              />
                            )}
                            <video
                              controls
                              preload="metadata"
                              poster={video.poster}
                              className="relative z-10 max-h-[70vh] w-auto max-w-full"
                              src={video.src}
                            />
                          </div>
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
              ) : (
                <motion.div
                  className={clsx(
                    "rounded-2xl border-2 border-dashed p-10 text-center",
                    isDarkMode
                      ? "border-gray-700 text-gray-400"
                      : "border-gray-300 text-gray-500",
                  )}
                  variants={itemReveal}
                >
                  <Clapperboard className="mx-auto mb-4 h-10 w-10 text-amber-600" />
                  <p className="text-lg font-medium">{labels.videosEmpty}</p>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Links */}
          {links.length > 0 && (
            <motion.div
              className="mt-20 flex flex-wrap items-center justify-center gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionReveal}
            >
              {links.map((link) => (
                <motion.a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemReveal}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-700"
                >
                  {link.label}
                  <ExternalLink className="h-4 w-4" />
                </motion.a>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
