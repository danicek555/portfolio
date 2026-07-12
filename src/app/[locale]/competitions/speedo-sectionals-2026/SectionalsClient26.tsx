"use client";

import Image from "next/image";
import {
  MapPin,
  Calendar,
  Trophy,
  Users,
  Award,
  Target,
  Timer,
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
  cut?: string;
  cutEn?: string;
  pb: boolean;
}

interface RelayResult {
  event: string;
  eventEn: string;
  leg: string;
  legEn: string;
  time: string;
  placement: string;
  placementEn: string;
  pb: boolean;
}

interface GalleryPhoto {
  src: string;
  caption: string;
  captionEn: string;
  portrait?: boolean;
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
    event: "100y prsa",
    eventEn: "100y Breaststroke",
    time: "55.29",
    placement: "5. místo ve finále",
    placementEn: "5th in the final",
    note: "Rozplavby 54.98 — 3. čas rozplaveb a osobní rekord",
    noteEn: "Prelims 54.98 — 3rd seed and a personal best",
    cut: "Limit na Junior Nationals",
    cutEn: "Junior Nationals cut",
    pb: true,
  },
  {
    event: "200y prsa",
    eventEn: "200y Breaststroke",
    time: "1:58.55",
    placement: "4. místo ve finále",
    placementEn: "4th in the final",
    note: "Zlepšení o 2,34 s (rozplavby 2:00.17)",
    noteEn: "Dropped 2.34s (prelims 2:00.17)",
    cut: "Limit na Junior Nationals",
    cutEn: "Junior Nationals cut",
    pb: true,
  },
  {
    event: "200y polohový závod",
    eventEn: "200y Individual Medley",
    time: "1:47.43",
    placement: "6. místo ve finále",
    placementEn: "6th in the final",
    note: "Rozplavby 1:48.35, ve finále zlepšení o 1,76 s",
    noteEn: "Prelims 1:48.35, dropped 1.76s in the final",
    cut: "Limit na Junior Nationals",
    cutEn: "Junior Nationals cut",
    pb: true,
  },
  {
    event: "400y polohový závod",
    eventEn: "400y Individual Medley",
    time: "3:52.71",
    placement: "8. místo ve finále",
    placementEn: "8th in the final",
    note: "Rozplavby 3:53.65, ve finále zlepšení o 1,62 s",
    noteEn: "Prelims 3:53.65, dropped 1.62s in the final",
    cut: "Limit na Winter Juniors",
    cutEn: "Winter Juniors cut",
    pb: true,
  },
  {
    event: "50y volný způsob",
    eventEn: "50y Freestyle",
    time: "20.65",
    placement: "8. místo ve finále",
    placementEn: "8th in the final",
    note: "Rozplavby 20.74, obojí pod dosavadním osobním rekordem",
    noteEn: "Prelims 20.74, both under the previous best",
    pb: true,
  },
];

const relays: RelayResult[] = [
  {
    event: "4×100 polohová štafeta",
    eventEn: "400 Medley Relay",
    leg: "prsařský úsek",
    legEn: "breaststroke leg",
    time: "54.95",
    placement: "3. místo",
    placementEn: "3rd place",
    pb: false,
  },
  {
    event: "4×200 volný způsob",
    eventEn: "800 Free Relay",
    leg: "rozjezd",
    legEn: "leadoff",
    time: "1:39.49",
    placement: "4. místo",
    placementEn: "4th place",
    pb: true,
  },
  {
    event: "4×50 volný způsob",
    eventEn: "200 Free Relay",
    leg: "úsek",
    legEn: "split",
    time: "20.72",
    placement: "6. místo",
    placementEn: "6th place",
    pb: false,
  },
  {
    event: "4×100 volný způsob",
    eventEn: "400 Free Relay",
    leg: "rozjezd",
    legEn: "leadoff",
    time: "45.84",
    placement: "8. místo",
    placementEn: "8th place",
    pb: true,
  },
  {
    event: "4×50 polohová štafeta",
    eventEn: "200 Medley Relay",
    leg: "motýlkový úsek",
    legEn: "butterfly leg",
    time: "22.00",
    placement: "8. místo",
    placementEn: "8th place",
    pb: false,
  },
];

const gallery: GalleryPhoto[] = [
  {
    src: "/sectionals2026/pre-race.jpg",
    caption: "Soustředění chvíli před startem",
    captionEn: "Locked in moments before the race",
  },
  {
    src: "/sectionals2026/team-trophy.jpg",
    caption: "Hilltoppers s trofejemi pro šampiony",
    captionEn: "Hilltoppers with the championship hardware",
  },
  {
    src: "/sectionals2026/tops-duo.jpg",
    caption: "S týmovým parťákem",
    captionEn: "With a teammate",
    portrait: true,
  },
  {
    src: "/sectionals2026/tops-team.jpg",
    caption: "Tým University of Denver Hilltoppers",
    captionEn: "The University of Denver Hilltoppers squad",
  },
  {
    src: "/sectionals2026/tops_picture.jpg",
    caption: "Momentka s týmem",
    captionEn: "A moment with the team",
  },
  {
    src: "/sectionals2026/team-photo.jpg",
    caption: "Týmové foto na závodech",
    captionEn: "Team photo at the meet",
  },
  {
    src: "/sectionals2026/venue-pool.jpg",
    caption: "Bazén v Carmelu, Indiana",
    captionEn: "The pool in Carmel, Indiana",
    portrait: true,
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

export default function SectionalsClient26() {
  const { isDarkMode } = useTheme();
  const locale = useLocale();
  const en = locale === "en";

  const heroStats = [
    {
      value: "7",
      label: en ? "Personal bests" : "Osobních rekordů",
    },
    {
      value: "5×",
      label: en ? "Top 8 finishes" : "Umístění v top 8",
    },
    {
      value: "4",
      label: en ? "Days of racing" : "Dny závodění",
    },
  ];

  const infoCards = [
    {
      icon: MapPin,
      title: en ? "Location" : "Místo",
      value: en ? "Carmel, Indiana, USA" : "Carmel, Indiana, USA",
    },
    {
      icon: Calendar,
      title: en ? "Date" : "Termín",
      value: en ? "March 26–29, 2026" : "26.–29. března 2026",
    },
    {
      icon: Trophy,
      title: en ? "Level" : "Úroveň",
      value: en
        ? "Speedo Sectionals — Four Corners"
        : "Speedo Sectionals — Four Corners",
    },
    {
      icon: Users,
      title: en ? "Team" : "Tým",
      value: "University of Denver Hilltoppers",
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
            src="/sectionals2026/celebration.jpg"
            alt={
              en
                ? "Daniel celebrating in the water after a race at the Four Corners Speedo Sectionals 2026"
                : "Daniel slaví ve vodě po závodě na Four Corners Speedo Sectionals 2026"
            }
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              {en ? "USA Racing Debut Season" : "Americká sezóna"}
            </span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {en ? "7 personal bests" : "7 osobních rekordů"}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {en ? "Four Corners" : "Four Corners"}
            <span className="block text-amber-400">
              {en ? "Speedo Sectionals 2026" : "Speedo Sectionals 2026"}
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
              Carmel, Indiana
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              {en ? "March 26–29, 2026" : "26.–29. března 2026"}
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
                {en ? "The story of the meet" : "Příběh závodu"}
              </p>
              <h2
                className={clsx(
                  "text-4xl font-bold mb-6",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}
              >
                {en
                  ? "Seven best times against elite U.S. competition"
                  : "Sedm osobních rekordů proti americké elitě"}
              </h2>
              <p
                className={clsx(
                  "text-lg mb-6 leading-relaxed",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                {en
                  ? "The Four Corners Speedo Sectionals in Carmel, Indiana, brought together top club swimmers from across the region. Racing in the University of Denver Hilltoppers colors, Daniel took on a four-day program in a fast short-course-yards pool."
                  : "Four Corners Speedo Sectionals v Carmelu v Indianě svedly dohromady nejlepší klubové plavce regionu. Daniel v barvách University of Denver Hilltoppers absolvoval čtyřdenní program v rychlém yardovém bazénu."}
              </p>
              <div className="border-l-4 border-amber-600 pl-6 mb-6">
                <p
                  className={clsx(
                    "text-xl font-medium leading-relaxed",
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  )}
                >
                  {en
                    ? "Seven personal bests and five top-8 finishes — and the Hilltoppers left Carmel with the team trophies."
                    : "Sedm osobních rekordů a pět umístění v top 8 — a Hilltoppers si z Carmelu odvezli týmové trofeje."}
                </p>
              </div>
              <p
                className={clsx(
                  "text-lg leading-relaxed",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                {en
                  ? "The meet was a key checkpoint on the road to the NCAA: pressure execution, morning-to-night doubles and racing wall-to-wall with swimmers headed to top college programs."
                  : "Závod byl důležitou zastávkou na cestě k NCAA: výkony pod tlakem, dvoufázové závodění od rána do večera a souboje bok po boku s plavci mířícími na špičkové univerzitní programy."}
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
                src="/sectionals2026/team-trophy.jpg"
                alt={
                  en
                    ? "University of Denver Hilltoppers celebrating the team titles at the Four Corners Sectionals"
                    : "University of Denver Hilltoppers slaví týmové tituly na Four Corners Sectionals"
                }
                width={800}
                height={533}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/60 backdrop-blur-sm text-white text-sm px-4 py-3">
                {en
                  ? "The Hilltoppers with the Four Corners championship plaques"
                  : "Hilltoppers s trofejemi šampionů Four Corners"}
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
              {en ? "Results — short course yards" : "Výsledky — krátký kurz (25 y)"}
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
                  key={result.eventEn}
                  className={clsx(
                    "p-6 rounded-xl border transition-all duration-300 hover:shadow-lg",
                    result.cut
                      ? isDarkMode
                        ? "bg-gradient-to-br from-blue-900/30 to-amber-900/20 border-blue-800/60"
                        : "bg-gradient-to-br from-blue-50 to-amber-50 border-blue-200"
                      : isDarkMode
                        ? "bg-gray-800 border-gray-700"
                        : "bg-gray-50 border-gray-200"
                  )}
                  variants={itemReveal}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <Target className="w-8 h-8 shrink-0 text-amber-600 mt-1" />
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
                          <span className="px-2 py-1 rounded text-xs font-semibold text-white bg-gray-600">
                            {en ? result.placementEn : result.placement}
                          </span>
                          {result.pb && (
                            <span className="px-2 py-1 rounded text-xs font-semibold text-white bg-amber-600">
                              {en ? "Personal best" : "Osobní rekord"}
                            </span>
                          )}
                          {result.cut && (
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              {en ? result.cutEn : result.cut}
                            </span>
                          )}
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
                        result.cut
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

            {/* Relays */}
            <motion.h3
              className={clsx(
                "text-2xl font-bold mt-12 mb-6 text-center",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
              variants={itemReveal}
            >
              {en ? "Relays with the Hilltoppers" : "Štafety s Hilltoppers"}
            </motion.h3>
            <motion.div
              className={clsx(
                "rounded-2xl border divide-y overflow-hidden",
                isDarkMode
                  ? "border-gray-700 divide-gray-700 bg-gray-800"
                  : "border-gray-200 divide-gray-200 bg-gray-50"
              )}
              variants={itemReveal}
            >
              {relays.map((relay) => (
                <div
                  key={relay.eventEn}
                  className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Timer className="w-5 h-5 shrink-0 text-amber-600" />
                    <span
                      className={clsx(
                        "font-semibold",
                        isDarkMode ? "text-white" : "text-gray-900"
                      )}
                    >
                      {en ? relay.eventEn : relay.event}
                    </span>
                    <span
                      className={clsx(
                        "text-sm",
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      )}
                    >
                      {en ? relay.legEn : relay.leg}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {relay.pb && (
                      <span className="px-2 py-0.5 rounded text-xs font-semibold text-white bg-amber-600">
                        {en ? "PB" : "Osobní rekord"}
                      </span>
                    )}
                    <span
                      className={clsx(
                        "text-sm",
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      )}
                    >
                      {en ? relay.placementEn : relay.placement}
                    </span>
                    <span
                      className={clsx(
                        "text-lg font-bold tabular-nums",
                        isDarkMode ? "text-gray-200" : "text-gray-800"
                      )}
                    >
                      {relay.time}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Gallery */}
          <motion.div
            className="mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionReveal}
          >
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3 text-center"
              variants={itemReveal}
            >
              {en ? "Gallery" : "Galerie"}
            </motion.p>
            <motion.h2
              className={clsx(
                "text-4xl font-bold mb-10 text-center",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
              variants={itemReveal}
            >
              {en ? "Moments from Carmel" : "Momentky z Carmelu"}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.map((photo) => (
                <motion.figure
                  key={photo.src}
                  className={clsx(
                    "group relative overflow-hidden rounded-2xl",
                    photo.portrait ? "row-span-2" : ""
                  )}
                  variants={itemReveal}
                >
                  <Image
                    src={photo.src}
                    alt={en ? photo.captionEn : photo.caption}
                    width={800}
                    height={photo.portrait ? 1067 : 533}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent text-white text-sm px-4 pt-10 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {en ? photo.captionEn : photo.caption}
                  </figcaption>
                </motion.figure>
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
                    ? "Seven personal bests, five top-8 finishes and team trophies with the Hilltoppers — Carmel 2026 was the breakthrough weekend of the American season."
                    : "Sedm osobních rekordů, pět umístění v top 8 a týmové trofeje s Hilltoppers — Carmel 2026 byl průlomový víkend americké sezóny."}
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
                      ? "Four Corners Speedo Sectionals — Carmel, Indiana"
                      : "Four Corners Speedo Sectionals — Carmel, Indiana"}
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
