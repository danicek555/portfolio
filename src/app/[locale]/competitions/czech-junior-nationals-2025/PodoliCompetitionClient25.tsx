"use client";

import Image from "next/image";
import { MapPin, Calendar, Trophy, Target, Medal, Award } from "lucide-react";
import { useTheme } from "../../../../components/ThemeProvider";
import { useTranslations, useLocale } from "next-intl";
import VideoPlayer from "../../../../components/VideoPlayer";
import { motion } from "framer-motion";
import clsx from "clsx";

// Define interfaces for type safety
interface VideoResult {
  event: string;
  eventEn: string;
  result: string;
  resultEn: string;
  time: string;
  description: string;
  descriptionEn: string;
  videoId: string;
  duration: string;
  views: string;
}

export default function PodoliCompetitionClient25() {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Podoli2025");
  const locale = useLocale();

  // Video data with YouTube IDs
  const videoResults: VideoResult[] = [
    {
      event: "400m Polohový závod Finále - České juniorské mistrovství 2025",
      eventEn: "400m Individual Medley Final - Czech Junior Championship 2025",
      result: "3. místo",
      resultEn: "3rd Place",
      time: "4:43.14",
      description:
        "Bronzová medaile v nejnáročnější disciplíně plavání. 400m polohový závod testuje všechny čtyři styly a vyžaduje maximální kondici. Výkon 4:43.14 přinesl zasloužené třetí místo na českém juniorském mistrovství.",
      descriptionEn:
        "Bronze medal in the most demanding swimming discipline. The 400m individual medley tests all four strokes and requires maximum fitness. The 4:43.14 performance earned a well-deserved third place at the Czech Junior Championship.",
      videoId: "hGz2USOYI9o",
      duration: "5:33",
      views: "1.2K",
    },
    {
      event: "200m Polohový závod Finále - České juniorské mistrovství 2025",
      eventEn: "200m Individual Medley Final - Czech Junior Championship 2025",
      result: "4. místo",
      resultEn: "4th Place",
      time: "2:11.96",
      description:
        "Těsné čtvrté místo v rychlé polohové disciplíně. 200m polohový závod vyžaduje precizní techniku ve všech čtyřech stylech. Čas 2:11.96 ukázal výbornou kondici a technickou připravenost.",
      descriptionEn:
        "Close fourth place in the fast individual medley discipline. The 200m individual medley requires precise technique in all four strokes. The 2:11.96 time showed excellent fitness and technical preparation.",
      videoId: "Wax8A4dUpSE",
      duration: "4:25",
      views: "890",
    },
    {
      event: "200m Volný způsob SwimOff- České juniorské mistrovství 2025",
      eventEn: "200m Freestyle SwimOff - Czech Junior Championship 2025",
      result: "1. místo SwimOff",
      resultEn: "1st Place SwimOff",
      time: "1:58.75",
      description:
        "Vítězství v dramatickém SwimOff závodu o postup do finále. 200m volný způsob vyžaduje vytrvalost a strategické rozložení sil. Čas 1:58.75 zajistil postup do finále a ukázal mentální sílu.",
      descriptionEn:
        "Victory in the dramatic SwimOff race for advancement to the final. The 200m freestyle requires endurance and strategic energy distribution. The 1:58.75 time secured advancement to the final and showed mental strength.",
      videoId: "cX0ecF9EbUo",
      duration: "2:43",
      views: "756",
    },
    {
      event: "200m Prsa Finále - České juniorské mistrovství 2025",
      eventEn: "200m Breaststroke Final - Czech Junior Championship 2025",
      result: "6. místo",
      resultEn: "6th Place",
      time: "2:31.30",
      description:
        "Solidní výkon v technicky náročné disciplíně prsou. 200m prsa vyžaduje dokonalou koordinaci rukou, nohou a dýchání. Čas 2:31.30 přinesl šesté místo v silné konkurenci.",
      descriptionEn:
        "Solid performance in the technically demanding breaststroke discipline. The 200m breaststroke requires perfect coordination of arms, legs and breathing. The 2:31.30 time earned sixth place in strong competition.",
      videoId: "9Y7zUzaKJMI",
      duration: "4:11",
      views: "634",
    },
    {
      event: "200m Prsa rozplavby - České juniorské mistrovství 2025",
      eventEn: "200m Breaststroke Heats - Czech Junior Championship 2025",
      result: "Výběr",
      resultEn: "Selection",
      time: "2:30.36",
      description:
        "Úspěšný postup z rozplaveb do finále v disciplíně prsou. Rozplavby ukázaly konzistentní techniku a správné tempo. Čas 2:30.36 zajistil kvalifikaci do finále mistrovství.",
      descriptionEn:
        "Successful advancement from heats to final in the breaststroke discipline. The heats showed consistent technique and proper pacing. The 2:30.36 time secured qualification for the championship final.",
      videoId: "gT-J9WULX5g",
      duration: "3:15",
      views: "1.5K",
    },
    {
      event: "200m Polohový závod rozplavby - České juniorské mistrovství 2025",
      eventEn: "200m Individual medley heats - Czech Junior Championship 2025",
      result: "Výběr",
      resultEn: "Selection",
      time: "N/A",
      description:
        "Kvalifikační závod v polohovém závodu s výborným časem 2:11.74. Rozplavby prokázaly všestrannost ve všech čtyřech plaveckých stylech. Výkon zajistil postup do finále a ukázal připravenost na vrchol.",
      descriptionEn:
        "Qualifying race in the individual medley with an excellent time of 2:11.74. The heats demonstrated versatility in all four swimming strokes. The performance secured advancement to the final and showed readiness for the peak.",
      videoId: "lzIXrfZIh-E",
      duration: "2:45",
      views: "1.1K",
    },
    {
      event: "200m Volný způsob rozplavby - České juniorské mistrovství 2025",
      eventEn: "200m Freestyle heats - Czech Junior Championship 2025",
      result: "Výběr",
      resultEn: "Selection",
      time: "2:00.46",
      description:
        "Silný výkon v rozplavbách volného způsobu s časem 2:00.46. 200m volný způsob testuje vytrvalost a schopnost udržet konzistentní tempo. Výkon zajistil postup do SwimOff a ukázal výbornou kondici.",
      descriptionEn:
        "Strong performance in the freestyle heats with a time of 2:00.46. The 200m freestyle tests endurance and the ability to maintain consistent pace. The performance secured advancement to the SwimOff and showed excellent fitness.",
      videoId: "ZBSe7icCLSc",
      duration: "4:20",
      views: "2.1K",
    },
  ];

  // Competition results data
  const results = [
    {
      event: "400m Polohový závod",
      eventEn: "400m Individual Medley",
      result: "3. místo",
      resultEn: "3rd Place",
      time: "4:43.14",
      description: "Bronzová medaile v nejnáročnější disciplíně",
      descriptionEn: "Bronze medal in the most demanding discipline",
      medal: "bronze",
    },
    {
      event: "200m Polohový závod",
      eventEn: "200m Individual Medley",
      result: "4. místo",
      resultEn: "4th Place",
      time: "2:11.74",
      description: "Rozplavby: 2:11.74, finále: 2:11.96",
      descriptionEn: "Heats: 2:11.74, Final: 2:11.96",
      medal: "none",
    },
    {
      event: "200m Volný způsob",
      eventEn: "200m Freestyle",
      result: "1. místo SwimOff",
      resultEn: "1st Place SwimOff",
      time: "1:58.75",
      description: "Rozplavby: 2:00.46, SwimOff: 1:58.75",
      descriptionEn: "Heats: 2:00.46, SwimOff: 1:58.75",
      medal: "none",
    },
    {
      event: "200m Prsa",
      eventEn: "200m Breaststroke",
      result: "6. místo",
      resultEn: "6th Place",
      time: "2:30.36",
      description: "Rozplavby: 2:30.36, Finals: 2:31.30",
      descriptionEn: "Heats: 2:30.36, Finals: 2:31.30",
      medal: "none",
    },
  ];

  return (
    <div
      className={clsx(
        "min-h-screen transition-colors duration-300",
        isDarkMode ? "bg-gray-900" : "bg-white"
      )}
    >
      {/* Hero Section with Video Placeholder */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/mcr2025junior.jpg"
            alt="Czech National Junior Championship 2025"
            fill
            className="object-cover"
            priority
          />
          <div
            className={clsx(
              "absolute inset-0 transition-all duration-300",
              isDarkMode ? "bg-black/75" : "bg-black/60"
            )}
          />
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              {t("hero.badge1")}
            </span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {t("hero.badge2")}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            {t("hero.title")}
            <span className="block text-amber-400">{t("hero.subtitle")}</span>
          </h1>

          <div
            className={clsx(
              "rounded-2xl p-8 inline-flex items-center gap-6 shadow-2xl transition-colors duration-300",
              isDarkMode
                ? "bg-gray-800/95 text-white"
                : "bg-white/95 text-gray-900"
            )}
          >
            <div className="text-6xl">🥉</div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">
                {t("hero.eventTitle")}
              </h3>
              <p
                className={clsx(
                  "text-lg transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                )}
              >
                {t("hero.eventDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Details */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Event Info */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
            >
              <MapPin className="w-8 h-8 text-amber-600" />
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {t("info.location")}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {t("info.locationValue")}
                </p>
              </div>
            </div>
            <div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
            >
              <Calendar className="w-8 h-8 text-amber-600" />
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {t("info.date")}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {t("info.dateValue")}
                </p>
              </div>
            </div>
            <div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
            >
              <Trophy className="w-8 h-8 text-amber-600" />
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {t("info.level")}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {t("info.levelValue")}
                </p>
              </div>
            </div>
            <div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
            >
              <Medal className="w-8 h-8 text-amber-600" />
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {t("info.achievement")}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {t("info.achievementValue")}
                </p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2
                className={clsx(
                  "text-4xl font-bold mb-6 transition-colors duration-300",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}
              >
                {t("story.title")}
              </h2>
              <p
                className={clsx(
                  "text-lg mb-6 leading-relaxed transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                {t("story.paragraph1")}
              </p>
              <div className="border-l-4 border-amber-600 pl-6 mb-6">
                <p
                  className={clsx(
                    "text-xl font-medium leading-relaxed transition-colors duration-300",
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  )}
                >
                  {t("story.highlight")}
                </p>
              </div>
              <p
                className={clsx(
                  "text-lg leading-relaxed transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                {t("story.paragraph2")}
              </p>
            </div>
            <div className="relative">
              <Image
                src="/mcr2025juniorvyhlaseni.jpg"
                alt="Podolí swimming complex 2025"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Results Section */}
          <div>
            <h2
              className={clsx(
                "text-4xl font-bold mb-8 text-center transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              {t("results.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={clsx(
                    "p-6 rounded-xl border transition-all duration-300 hover:shadow-lg",
                    isDarkMode
                      ? "bg-gradient-to-br from-amber-900/30 to-blue-900/30 border-gray-700"
                      : "bg-gradient-to-br from-amber-50 to-blue-50 border-gray-200"
                  )}
                >
                  <div className="flex items-start gap-4">
                    {result.medal === "bronze" ? (
                      <Medal className="w-8 h-8 text-amber-600 mt-1" />
                    ) : (
                      <Target className="w-8 h-8 text-amber-600 mt-1" />
                    )}
                    <div className="flex-1">
                      <h3
                        className={clsx(
                          "font-bold mb-2 transition-colors duration-300",
                          isDarkMode ? "text-white" : "text-gray-900"
                        )}
                      >
                        {locale === "en" ? result.eventEn : result.event}
                        <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {locale === "en" ? "50m pool" : "50m bazén"}
                        </span>
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={clsx(
                            "px-2 py-1 rounded text-xs font-semibold",
                            result.medal === "bronze"
                              ? "bg-amber-600 text-white"
                              : "bg-gray-600 text-white"
                          )}
                        >
                          {locale === "en" ? result.resultEn : result.result}
                        </span>
                        <span
                          className={clsx(
                            "text-sm transition-colors duration-300",
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          )}
                        >
                          {result.time}
                        </span>
                      </div>
                      <p
                        className={clsx(
                          "text-sm transition-colors duration-300",
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        )}
                      >
                        {locale === "en"
                          ? result.descriptionEn
                          : result.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
              {t("videos.title")}
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              {videoResults.map((result: VideoResult, index: number) => (
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
                    priority={index < 3} // Prioritize first 3 videos for faster loading
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Championship Highlights */}
          <div className="mt-16 text-center">
            <h2
              className={clsx(
                "text-4xl font-bold mb-8 transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              {t("highlights.title")}
            </h2>
            <div
              className={clsx(
                "rounded-2xl p-8 transition-colors duration-300",
                isDarkMode
                  ? "bg-gradient-to-r from-amber-900/30 to-blue-900/30"
                  : "bg-gradient-to-r from-amber-50 to-blue-50"
              )}
            >
              <div className="max-w-3xl mx-auto">
                <p
                  className={clsx(
                    "text-xl leading-relaxed mb-6 transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  {t("highlights.description")}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Award className="w-8 h-8 text-amber-600" />
                  <span
                    className={clsx(
                      "text-lg font-semibold transition-colors duration-300",
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    )}
                  >
                    {t("highlights.experience")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
