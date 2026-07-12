"use client";

import Image from "next/image";
import {
  MapPin,
  Calendar,
  Trophy,
  Medal,
  Target,
  Users,
  Award,
  Clapperboard,
} from "lucide-react";
import { useTheme } from "../../../../components/ThemeProvider";
import { useLocale } from "next-intl";
import VideoPlayer from "../../../../components/VideoPlayer";
import { motion } from "framer-motion";
import clsx from "clsx";

interface RaceResult {
  event: string;
  eventEn: string;
  time: string;
  placement: string;
  placementEn: string;
  note?: string;
  noteEn?: string;
  medal: "silver" | "none";
  finalist: boolean;
}

interface VideoResult {
  event: string;
  eventEn: string;
  videoId: string;
  duration?: string;
  views?: string;
}

const results: RaceResult[] = [
  {
    event: "200m volný způsob",
    eventEn: "200m Freestyle",
    time: "1:55.31",
    placement: "2. místo",
    placementEn: "2nd Place",
    note: "Rozplavby 1:56.69, ve finále zlepšení o více než sekundu",
    noteEn: "Heats 1:56.69, dropped over a second in the final",
    medal: "silver",
    finalist: true,
  },
  {
    event: "200m polohový závod",
    eventEn: "200m Individual Medley",
    time: "2:06.50",
    placement: "2. místo",
    placementEn: "2nd Place",
    note: "Druhé stříbro šampionátu v nejuniverzálnější disciplíně",
    noteEn: "Second silver of the meet in the all-round discipline",
    medal: "silver",
    finalist: true,
  },
  {
    event: "100m volný způsob",
    eventEn: "100m Freestyle",
    time: "52.65",
    placement: "5. místo ve finále",
    placementEn: "5th in the final",
    medal: "none",
    finalist: true,
  },
  {
    event: "100m prsa",
    eventEn: "100m Breaststroke",
    time: "1:07.91",
    placement: "6. místo ve finále",
    placementEn: "6th in the final",
    medal: "none",
    finalist: true,
  },
  {
    event: "50m prsa",
    eventEn: "50m Breaststroke",
    time: "30.85",
    placement: "8. místo ve finále",
    placementEn: "8th in the final",
    note: "Rozplavby 30.20",
    noteEn: "Heats 30.20",
    medal: "none",
    finalist: true,
  },
  {
    event: "200m prsa",
    eventEn: "200m Breaststroke",
    time: "2:30.58",
    placement: "Rozplavby",
    placementEn: "Heats",
    medal: "none",
    finalist: false,
  },
];

// Až budou k dispozici záznamy závodů, stačí sem doplnit YouTube ID
// ve tvaru { event, eventEn, videoId } a sekce videí se vykreslí sama.
const videos: VideoResult[] = [];

const sectionReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function UstiJuniorClient26() {
  const { isDarkMode } = useTheme();
  const locale = useLocale();
  const en = locale === "en";

  const heroStats = [
    {
      value: "2×",
      label: en ? "Silver medals" : "Stříbrné medaile",
    },
    {
      value: "5",
      label: en ? "A-finals" : "Finálových startů",
    },
    {
      value: "6",
      label: en ? "Events raced" : "Disciplín",
    },
  ];

  const infoCards = [
    {
      icon: MapPin,
      title: en ? "Location" : "Místo",
      value: en ? "Ústí nad Labem, Czech Republic" : "Ústí nad Labem",
    },
    {
      icon: Calendar,
      title: en ? "Date" : "Termín",
      value: en ? "May 28–31, 2026" : "28.–31. května 2026",
    },
    {
      icon: Trophy,
      title: en ? "Level" : "Úroveň",
      value: en
        ? "Czech Junior & U22 Nationals"
        : "MČR juniorů a U22",
    },
    {
      icon: Users,
      title: en ? "Club" : "Klub",
      value: "SK Motorlet Praha",
    },
  ];

  return (
    <div
      className={clsx(
        "min-h-screen transition-colors duration-300",
        isDarkMode ? "bg-gray-900" : "bg-white"
      )}
    >
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/mcrJunior2026/venue-usti.jpg"
            alt={
              en
                ? "The pool in Ústí nad Labem during the Czech Junior Nationals 2026"
                : "Bazén v Ústí nad Labem během MČR juniorů 2026"
            }
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              {en ? "National Championship" : "Mistrovství ČR"}
            </span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {en ? "2× Silver" : "2× stříbro"}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {en ? "Czech Junior & U22" : "MČR juniorů a U22"}
            <span className="block text-amber-400">
              {en ? "Nationals 2026" : "Ústí nad Labem 2026"}
            </span>
          </motion.h1>

          <motion.p
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-lg text-gray-200 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              {en ? "Ústí nad Labem, Czech Republic" : "Ústí nad Labem"}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              {en ? "May 28–31, 2026" : "28.–31. května 2026"}
            </span>
          </motion.p>

          <motion.div
            className="grid grid-cols-3 gap-3 md:gap-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-5"
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-400">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-200 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Info cards */}
          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionReveal}
          >
            {infoCards.map((card) => (
              <motion.div
                key={card.title}
                className={clsx(
                  "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                  isDarkMode ? "bg-gray-800" : "bg-gray-50"
                )}
                variants={itemReveal}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <card.icon className="w-8 h-8 shrink-0 text-amber-600" />
                <div>
                  <h3
                    className={clsx(
                      "font-bold",
                      isDarkMode ? "text-white" : "text-gray-900"
                    )}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={clsx(
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {card.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
                {en ? "The story of the meet" : "Příběh šampionátu"}
              </p>
              <h2
                className={clsx(
                  "text-4xl font-bold mb-6",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}
              >
                {en
                  ? "Two silvers at the home-season peak"
                  : "Dvě stříbra na vrcholu domácí sezóny"}
              </h2>
              <p
                className={clsx(
                  "text-lg mb-6 leading-relaxed",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                {en
                  ? "The Czech Junior and U22 National Championships in Ústí nad Labem were the highlight of the home season. Daniel raced a packed program of six events over four days and made five A-finals, backing up fast heats with even faster swims at night."
                  : "Letní mistrovství ČR juniorů a U22 v Ústí nad Labem bylo vrcholem domácí sezóny. Daniel během čtyř dnů absolvoval nabitý program šesti disciplín, probojoval se do pěti finále A a rychlé rozplavby dokázal ve večerních finále ještě zrychlit."}
              </p>
              <div className="border-l-4 border-amber-600 pl-6 mb-6">
                <p
                  className={clsx(
                    "text-xl font-medium leading-relaxed",
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  )}
                >
                  {en
                    ? "Silver in both the 200m freestyle (1:55.31) and the 200m individual medley (2:06.50) — twice just short of a national junior title."
                    : "Stříbro na 200 m volný způsob (1:55.31) i na 200 m polohový závod (2:06.50) — dvakrát jen kousek od juniorského titulu."}
                </p>
              </div>
              <p
                className={clsx(
                  "text-lg leading-relaxed",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                {en
                  ? "Racing for SK Motorlet Praha in the older juniors category, Daniel confirmed his versatility: sprint freestyle, breaststroke and medley — all of it at the sharp end of the national field."
                  : "V barvách SK Motorlet Praha v kategorii starších juniorů potvrdil svou všestrannost: sprinterský kraul, prsa i polohový závod — všechno na špici českého juniorského pole."}
              </p>
            </div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/mcrJunior2026/diplom.jpg"
                alt={
                  en
                    ? "Daniel with the silver medal and diploma for the 200m IM"
                    : "Daniel se stříbrnou medailí a diplomem za 200 m polohový závod"
                }
                width={600}
                height={800}
                className="rounded-2xl shadow-xl object-cover w-full max-h-[640px]"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/60 backdrop-blur-sm text-white text-sm px-4 py-3">
                {en
                  ? "Diploma for 2nd place in the 200m IM — 2:06.50"
                  : "Diplom za 2. místo na 200 m polohový závod — 2:06.50"}
              </div>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionReveal}
          >
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3 text-center"
              variants={itemReveal}
            >
              {en ? "Results" : "Výsledky"}
            </motion.p>
            <motion.h2
              className={clsx(
                "text-4xl font-bold mb-10 text-center",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
              variants={itemReveal}
            >
              {en ? "Race by race" : "Závod po závodu"}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {results.map((result) => (
                <motion.div
                  key={result.event}
                  className={clsx(
                    "p-6 rounded-xl border transition-all duration-300 hover:shadow-lg",
                    result.medal === "silver"
                      ? isDarkMode
                        ? "bg-gradient-to-br from-slate-500/20 to-amber-900/20 border-slate-400/50"
                        : "bg-gradient-to-br from-slate-100 to-amber-50 border-slate-300"
                      : isDarkMode
                        ? "bg-gray-800 border-gray-700"
                        : "bg-gray-50 border-gray-200"
                  )}
                  variants={itemReveal}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {result.medal === "silver" ? (
                        <Medal className="w-8 h-8 shrink-0 text-slate-400 mt-1" />
                      ) : (
                        <Target className="w-8 h-8 shrink-0 text-amber-600 mt-1" />
                      )}
                      <div>
                        <h3
                          className={clsx(
                            "font-bold mb-2",
                            isDarkMode ? "text-white" : "text-gray-900"
                          )}
                        >
                          {en ? result.eventEn : result.event}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className={clsx(
                              "px-2 py-1 rounded text-xs font-semibold text-white",
                              result.medal === "silver"
                                ? "bg-slate-500"
                                : "bg-gray-600"
                            )}
                          >
                            {en ? result.placementEn : result.placement}
                          </span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {en ? "50m pool" : "50m bazén"}
                          </span>
                        </div>
                        {result.note && (
                          <p
                            className={clsx(
                              "text-sm",
                              isDarkMode ? "text-gray-300" : "text-gray-600"
                            )}
                          >
                            {en ? result.noteEn : result.note}
                          </p>
                        )}
                      </div>
                    </div>
                    <div
                      className={clsx(
                        "text-2xl font-bold tabular-nums shrink-0",
                        result.medal === "silver"
                          ? "text-amber-600"
                          : isDarkMode
                            ? "text-gray-200"
                            : "text-gray-800"
                      )}
                    >
                      {result.time}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Videos */}
          <motion.div
            className="mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionReveal}
          >
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3 text-center"
              variants={itemReveal}
            >
              {en ? "Videos" : "Videa"}
            </motion.p>
            <motion.h2
              className={clsx(
                "text-4xl font-bold mb-10 text-center",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
              variants={itemReveal}
            >
              {en ? "Race videos" : "Záznamy závodů"}
            </motion.h2>
            {videos.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {videos.map((video, index) => (
                  <motion.div key={video.videoId} variants={itemReveal}>
                    <VideoPlayer
                      videoId={video.videoId}
                      title={en ? video.eventEn : video.event}
                      duration={video.duration}
                      views={video.views}
                      priority={index < 2}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                className={clsx(
                  "rounded-2xl border-2 border-dashed p-10 text-center",
                  isDarkMode
                    ? "border-gray-700 text-gray-400"
                    : "border-gray-300 text-gray-500"
                )}
                variants={itemReveal}
              >
                <Clapperboard className="w-10 h-10 mx-auto mb-4 text-amber-600" />
                <p className="text-lg font-medium">
                  {en
                    ? "Race videos are on the way — check back soon."
                    : "Záznamy závodů právě připravuji — brzy je zde najdete."}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Closing highlight */}
          <motion.div
            className="mt-20 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionReveal}
          >
            <motion.div
              className={clsx(
                "rounded-2xl p-8",
                isDarkMode
                  ? "bg-gradient-to-r from-amber-900/30 to-blue-900/30"
                  : "bg-gradient-to-r from-amber-50 to-blue-50"
              )}
              variants={itemReveal}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="max-w-3xl mx-auto">
                <p
                  className={clsx(
                    "text-xl leading-relaxed mb-6",
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  {en
                    ? "Two silver medals, five A-finals and a program spanning three strokes — Ústí nad Labem 2026 confirmed the trajectory toward international junior racing and the NCAA."
                    : "Dvě stříbrné medaile, pět finále A a program napříč třemi plaveckými způsoby — Ústí nad Labem 2026 potvrdilo směr k mezinárodním juniorským startům a NCAA."}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Award className="w-8 h-8 text-amber-600" />
                  <span
                    className={clsx(
                      "text-lg font-semibold",
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    )}
                  >
                    {en
                      ? "Vice-champion of the Czech Republic, 200m free & 200m IM"
                      : "Vicemistr ČR na 200 m volný způsob a 200 m polohový závod"}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
