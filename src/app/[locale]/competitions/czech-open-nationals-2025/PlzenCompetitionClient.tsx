"use client";

import Image from "next/image";
import { MapPin, Calendar, Trophy, Target } from "lucide-react";
import { useTheme } from "../../../../components/ThemeProvider";
import { useLocale } from "next-intl";
import clsx from "clsx";

import VideoPlayer from "../../../../components/VideoPlayer";
import { motion } from "framer-motion";

export default function PlzenCompetitionClient() {
  const { isDarkMode } = useTheme();
  const locale = useLocale();

  const events = [
    {
      event: "200m Prsa",
      eventEn: "200m Breaststroke",
      result: "Finále",
      resultEn: "Final",
      time: "2:27.11",
      description:
        "Výborný výkon v technické disciplíně prsou. Rozplavby: 2:29.37, finále: 2:27.11",
      descriptionEn:
        "Excellent performance in the technical breaststroke discipline. Heats: 2:29.37, final: 2:27.11",
    },
    {
      event: "100m Motýlek",
      eventEn: "100m Butterfly",
      result: "Rozplavby",
      resultEn: "Heats",
      time: "0:59.23",
      description:
        "Rychlý výkon v motýlku pod 1:00. Technicky náročná disciplína vyžadující sílu a koordinaci.",
      descriptionEn:
        "Fast performance in butterfly under 1:00. Technically demanding discipline requiring strength and coordination.",
    },
    {
      event: "200m Polohový závod",
      eventEn: "200m Individual Medley",
      result: "Finále",
      resultEn: "Final",
      time: "2:12.66",
      description:
        "Konzistentní výkon ve všech čtyřech stylech. Rozplavby: 2:12.24, finále: 2:12.66",
      descriptionEn:
        "Consistent performance in all four strokes. Heats: 2:12.24, final: 2:12.66",
    },
    {
      event: "400m Polohový závod",
      eventEn: "400m Individual Medley",
      result: "Finále",
      resultEn: "Final",
      time: "4:47.51",
      description:
        "Nejnáročnější disciplína s výborným finálním časem. Rozplavby: 4:52.28, finále: 4:47.51",
      descriptionEn:
        "Most demanding discipline with excellent final time. Heats: 4:52.28, final: 4:47.51",
    },
  ];

  // Video data with YouTube IDs - All videos in 2-column grid
  const videoResults = [
    {
      event: "100m Motýlek Rozplavby - České mistrovství 2025",
      eventEn: "100m Butterfly Heats - Czech Championship 2025",
      result: "Rozplavby",
      resultEn: "Heats",
      time: "0:59.23",
      description:
        "Rychlý výkon v motýlku pod 1:00. Technicky náročná disciplína vyžadující sílu a koordinaci.",
      descriptionEn:
        "Fast performance in butterfly under 1:00. Technically demanding discipline requiring strength and coordination.",
      videoId: "2KqCRdBI2wo",
      duration: "1:27",
      views: "1.2K",
    },
    {
      event: "200m Polohový závod Finále - České mistrovství 2025",
      eventEn: "200m Individual Medley Final - Czech Championship 2025",
      result: "Finále",
      resultEn: "Final",
      time: "2:12.66",
      description:
        "Finální výkon v polohovém závodu s časem 2:12.66. Konzistentní výkon ve všech čtyřech stylech.",
      descriptionEn:
        "Final performance in individual medley with time 2:12.66. Consistent performance in all four strokes.",
      videoId: "6uLoAYOjJXY",
      duration: "4:18",
      views: "890",
    },
    {
      event: "200m Polohový závod Rozplavby - České mistrovství 2025",
      eventEn: "200m Individual Medley Heats - Czech Championship 2025",
      result: "Rozplavby",
      resultEn: "Heats",
      time: "2:12.24",
      description:
        "Kvalifikační závod v polohovém závodu s časem 2:12.24. Výborný postup do finále.",
      descriptionEn:
        "Qualifying race in individual medley with time 2:12.24. Excellent advancement to final.",
      videoId: "gGVCTvq9WDw",
      duration: "2:40",
      views: "756",
    },
    {
      event: "200m Prsa Finále - České mistrovství 2025",
      eventEn: "200m Breaststroke Final - Czech Championship 2025",
      result: "Finále",
      resultEn: "Final",
      time: "2:27.11",
      description:
        "Finální výkon v prsou s časem 2:27.11. Výborný výkon v technické disciplíně prsou.",
      descriptionEn:
        "Final performance in breaststroke with time 2:27.11. Excellent performance in the technical breaststroke discipline.",
      videoId: "oBEKE5B3dlA",
      duration: "3:58",
      views: "1.1K",
    },
    {
      event: "200m Prsa Rozplavby - České mistrovství 2025",
      eventEn: "200m Breaststroke Heats - Czech Championship 2025",
      result: "Rozplavby",
      resultEn: "Heats",
      time: "2:29.37",
      description:
        "Kvalifikační závod v prsou s časem 2:29.37. Úspěšný postup do finále.",
      descriptionEn:
        "Qualifying race in breaststroke with time 2:29.37. Successful advancement to final.",
      videoId: "X1kJNg-B6qQ",
      duration: "2:55",
      views: "890",
    },
    {
      event: "400m Polohový závod Finále - České mistrovství 2025",
      eventEn: "400m Individual Medley Final - Czech Championship 2025",
      result: "Finále",
      resultEn: "Final",
      time: "4:47.51",
      description:
        "Finální výkon v nejnáročnější disciplíně s časem 4:47.51. Vynikající výkon ve všech čtyřech stylech.",
      descriptionEn:
        "Final performance in the most demanding discipline with time 4:47.51. Outstanding performance in all four strokes.",
      videoId: "85nOZt_0jwE",
      duration: "6:30",
      views: "1.5K",
    },
    {
      event: "400m Polohový závod Rozplavby - České mistrovství 2025",
      eventEn: "400m Individual Medley Heats - Czech Championship 2025",
      result: "Rozplavby",
      resultEn: "Heats",
      time: "4:52.28",
      description:
        "Kvalifikační závod v nejnáročnější disciplíně s časem 4:52.28. Výborný postup do finále.",
      descriptionEn:
        "Qualifying race in the most demanding discipline with time 4:52.28. Excellent advancement to final.",
      videoId: "1AWkFUwqreM",
      duration: "5:38",
      views: "1.2K",
    },
  ];

  return (
    <div
      className={clsx(
        "min-h-screen transition-colors duration-300",
        isDarkMode ? "bg-gray-900" : "bg-white"
      )}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/mcrplzen252.jpg"
            alt="Plzen Regional Swimming Championship 2025"
            fill
            className="object-cover"
            priority
          />
          <div
            className={clsx(
              "absolute inset-0 transition-all duration-300",
              isDarkMode ? "bg-black/70" : "bg-black/50"
            )}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              {locale === "en" ? "Czech Nationals" : "Mistrovství ČR"}
            </motion.span>
            <motion.span
              className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {locale === "en" ? "3rd Round CP" : "3. kolo ČP"}
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {locale === "en"
                ? "Czech Open Nationals 2025"
                : "Mistrovství ČR 2025 OPEN"}
            </motion.span>
          </motion.h1>

          <motion.div
            className={clsx(
              "rounded-2xl p-8 inline-flex items-center gap-6 shadow-2xl transition-colors duration-300",
              isDarkMode
                ? "bg-gray-800/95 text-white"
                : "bg-white/95 text-gray-900"
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <motion.div
              className="text-6xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              🏊‍♂️
            </motion.div>
            <div className="text-left">
              <motion.h3
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {locale === "en" ? "Czech Championship" : "České mistrovství"}
              </motion.h3>
              <motion.p
                className={clsx(
                  "text-lg transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {locale === "en"
                  ? "3rd Round Czech Cup in Plzen"
                  : "3. kolo Českého poháru v Plzni"}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competition Details */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Event Info */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-8 h-8 text-blue-600" />
              </motion.div>
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {locale === "en" ? "Location" : "Místo"}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {locale === "en"
                    ? "Plzen, Czech Republic"
                    : "Plzeň, Česká republika"}
                </p>
              </div>
            </motion.div>
            <motion.div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Calendar className="w-8 h-8 text-blue-600" />
              </motion.div>
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {locale === "en" ? "Date" : "Datum"}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  15.05.2025 - 18.05.2025
                </p>
              </div>
            </motion.div>
            <motion.div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Trophy className="w-8 h-8 text-blue-600" />
              </motion.div>
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {locale === "en" ? "Level" : "Úroveň"}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {locale === "en"
                    ? "Czech Open Nationals"
                    : "Mistrovství ČR OPEN"}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2
                className={clsx(
                  "text-4xl font-bold mb-6 transition-colors duration-300",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}
              >
                {locale === "en"
                  ? "Czech Open Nationals 2025"
                  : "Mistrovství ČR 2025 OPEN"}
              </h2>
              <p
                className={clsx(
                  "text-lg mb-6 leading-relaxed transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                {locale === "en"
                  ? "The Czech Open Nationals 2025 in Plzen represented the third round of the Czech Cup and brought excellent performances in all disciplines. The competition was held in a modern swimming facility in Plzen with participation from the best swimmers from across the Czech Republic."
                  : "Mistrovství ČR 2025 OPEN v Plzni představovalo třetí kolo Českého poháru a přineslo výborné výkony ve všech disciplínách. Soutěž se konala v moderním plaveckém areálu v Plzni s účastí nejlepších plavců z celé České republiky."}
              </p>
              <div className="border-l-4 border-blue-600 pl-6 mb-6">
                <p
                  className={clsx(
                    "text-xl font-medium leading-relaxed transition-colors duration-300",
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  )}
                >
                  {locale === "en"
                    ? "Outstanding performance in the 400m individual medley with a time of 4:47.51 in the final showed excellent fitness and technical preparation in all four strokes."
                    : "Vynikající výkon v 400m polohovém závodu s časem 4:47.51 ve finále ukázal výbornou kondici a technickou připravenost ve všech čtyřech stylech."}
                </p>
              </div>
              <p
                className={clsx(
                  "text-lg leading-relaxed transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                {locale === "en"
                  ? "Participation in this championship represented an important step in the 2025 season and showed consistent performances across all swimming disciplines."
                  : "Účast na tomto mistrovství představovala důležitý krok v sezóně 2025 a ukázala konzistentní výkony napříč všemi plaveckými disciplínami."}
              </p>
            </div>
            <div className="relative">
              <Image
                src="/mcrplzen251.jpg"
                alt="Plzen swimming facility"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Competition Events */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.h2
              className={clsx(
                "text-4xl font-bold mb-8 text-center transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {locale === "en"
                ? "Championship Results"
                : "Výsledky mistrovství"}
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  className={clsx(
                    "p-6 rounded-xl border transition-all duration-300 hover:shadow-lg",
                    isDarkMode
                      ? "bg-gradient-to-br from-blue-900/30 to-green-900/30 border-gray-700"
                      : "bg-gradient-to-br from-blue-50 to-green-50 border-gray-200"
                  )}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Target className="w-8 h-8 text-blue-600 mt-1" />
                    </motion.div>
                    <div className="flex-1">
                      <h3
                        className={clsx(
                          "font-bold mb-2 transition-colors duration-300",
                          isDarkMode ? "text-white" : "text-gray-900"
                        )}
                      >
                        {locale === "en" ? event.eventEn : event.event}
                        <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {locale === "en" ? "50m pool" : "50m bazén"}
                        </span>
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <motion.span
                          className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold"
                          whileHover={{ scale: 1.05 }}
                        >
                          {locale === "en" ? event.resultEn : event.result}
                        </motion.span>
                        <motion.span
                          className={clsx(
                            "text-sm transition-colors duration-300",
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          )}
                          whileHover={{ scale: 1.05 }}
                        >
                          {event.time}
                        </motion.span>
                      </div>
                      <p
                        className={clsx(
                          "text-sm transition-colors duration-300",
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        )}
                      >
                        {locale === "en"
                          ? event.descriptionEn
                          : event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h2
              className={clsx(
                "text-4xl font-bold mb-8 text-center transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {locale === "en" ? "Competition Videos" : "Videa ze soutěže"}
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {videoResults.map((result, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <VideoPlayer
                    videoId={result.videoId}
                    title={locale === "en" ? result.eventEn : result.event}
                    description={
                      locale === "en"
                        ? result.descriptionEn
                        : result.description
                    }
                    duration={result.duration}
                    views={result.views}
                    className="mb-4"
                    priority={index < 2}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Championship Highlights */}
          <motion.div
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.4,
                },
              },
            }}
          >
            <motion.h2
              className={clsx(
                "text-4xl font-bold mb-8 transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
            >
              {locale === "en"
                ? "Championship Experience"
                : "Zkušenost z mistrovství"}
            </motion.h2>
            <motion.div
              className={clsx(
                "rounded-2xl p-8 transition-colors duration-300",
                isDarkMode
                  ? "bg-gradient-to-r from-blue-900/30 to-green-900/30"
                  : "bg-gradient-to-r from-blue-50 to-green-50"
              )}
              variants={{
                hidden: { opacity: 0, scale: 0.8, rotateX: -10 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotateX: 0,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                  },
                },
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="max-w-3xl mx-auto">
                <motion.p
                  className={clsx(
                    "text-xl leading-relaxed mb-6 transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  )}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      },
                    },
                  }}
                >
                  {locale === "en"
                    ? "The Czech Open Nationals 2025 in Plzen provided an excellent platform for developing competitive skills and gaining valuable experience in a supportive yet competitive environment."
                    : "Mistrovství ČR 2025 OPEN v Plzni poskytlo vynikající platformu pro rozvoj konkurenčních dovedností a získání cenných zkušeností v podporujícím, ale zároveň konkurenčním prostředí."}
                </motion.p>
                <motion.div
                  className="flex items-center justify-center gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 120,
                        damping: 15,
                      },
                    },
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      color: "#2563eb",
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Trophy className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <motion.span
                    className={clsx(
                      "text-lg font-semibold transition-colors duration-300",
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    )}
                    whileHover={{ scale: 1.05 }}
                  >
                    {locale === "en"
                      ? "National Level Development"
                      : "Rozvoj na národní úrovni"}
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
