"use client";

import Image from "next/image";
import { MapPin, Calendar, Trophy, Users, Medal, Timer } from "lucide-react";
import { useTheme } from "../../../../components/ThemeProvider";
import VideoPlayer from "../../../../components/VideoPlayer";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useTranslations } from "next-intl";

// Define interfaces for type safety
interface IndividualResult {
  event: string;
  time: string;
  points: string;
  placement: string;
  category: string;
  description: string;
  videoId: string;
  duration: string;
  views: string;
}

interface TeamAchievement {
  category: string;
  result: string;
  description: string;
  icon: React.ReactNode;
}

export default function OstravaCompetitionClient() {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Ostrava");

  const individualResults = t
    .raw("individualResults.events")
    .map((event: IndividualResult, index: number) => ({
      ...event,
      videoId: ["EHc84z_gTc4", "YjjmiyxTSnU", "Nm6LNRUCTCM", "1ChSgR-nSn0"][
        index
      ],
      duration: ["1:17", "5:22", "2:31", "2:43"][index],
      views: ["530", "756", "304", "947"][index],
    }));

  const teamAchievements = t
    .raw("teamAchievements.achievements")
    .map((achievement: TeamAchievement) => ({
      ...achievement,
      icon:
        achievement.category === "Qualification" ? (
          <Trophy className="w-6 h-6" />
        ) : (
          <Users className="w-6 h-6" />
        ),
    }));

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
            src="/ostrava1.jpg"
            alt="Team Championship Finals Ostrava 2025"
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

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.badge1")}
            </motion.span>
            <motion.span
              className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.badge2")}
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t("hero.title")}
            </motion.span>
            <motion.span
              className="block text-orange-400"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t("hero.subtitle")}
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
            transition={{ duration: 0.8, delay: 1 }}
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
                transition={{ delay: 1.2 }}
              >
                {t("hero.teamName")}
              </motion.h3>
              <motion.p
                className={clsx(
                  "text-lg transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                {t("hero.teamDescription")}
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
                <MapPin className="w-8 h-8 text-orange-600" />
              </motion.div>
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
                <Calendar className="w-8 h-8 text-orange-600" />
              </motion.div>
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
                <Trophy className="w-8 h-8 text-orange-600" />
              </motion.div>
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
              <div className="border-l-4 border-orange-600 pl-6 mb-6">
                <p
                  className={clsx(
                    "text-xl font-medium leading-relaxed transition-colors duration-300",
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  )}
                >
                  &quot;{t("story.quote")}&quot;
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
                src="/ostrava3.jpg"
                alt="Team Championship competition"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Team Achievements */}
          <motion.div
            className="mb-16"
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
              {t("teamAchievements.title")}
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-3 gap-6"
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
              {teamAchievements.map(
                (achievement: TeamAchievement, index: number) => (
                  <motion.div
                    key={index}
                    className={clsx(
                      "text-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg",
                      isDarkMode
                        ? "bg-gradient-to-br from-orange-900/30 to-purple-900/30 border border-gray-700"
                        : "bg-gradient-to-br from-orange-50 to-purple-50 border border-gray-200"
                    )}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex justify-center mb-4">
                      <motion.div
                        className="p-3 rounded-full bg-orange-600 text-white"
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                          transition: { duration: 0.3 },
                        }}
                      >
                        {achievement.icon}
                      </motion.div>
                    </div>
                    <h3
                      className={clsx(
                        "text-xl font-bold mb-2 transition-colors duration-300",
                        isDarkMode ? "text-white" : "text-gray-900"
                      )}
                    >
                      {achievement.category}
                    </h3>
                    <motion.p
                      className="text-2xl font-bold text-orange-600 mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {achievement.result}
                    </motion.p>
                    <p
                      className={clsx(
                        "text-sm transition-colors duration-300",
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      )}
                    >
                      {achievement.description}
                    </p>
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Individual Results */}
          <motion.div
            className="mb-16"
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
              {t("individualResults.title")}
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-6 mb-12"
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
              {individualResults.map(
                (result: IndividualResult, index: number) => (
                  <motion.div
                    key={index}
                    className={clsx(
                      "p-6 rounded-xl border transition-all duration-300 hover:shadow-lg",
                      isDarkMode
                        ? "bg-gradient-to-br from-orange-900/20 to-purple-900/20 border-gray-700"
                        : "bg-gradient-to-br from-orange-50 to-purple-50 border-gray-200"
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
                        className="flex-shrink-0 p-2 rounded-lg bg-orange-600 text-white"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Timer className="w-6 h-6" />
                      </motion.div>
                      <div className="flex-1">
                        <h3
                          className={clsx(
                            "text-xl font-bold mb-2 transition-colors duration-300",
                            isDarkMode ? "text-white" : "text-gray-900"
                          )}
                        >
                          {result.event}
                        </h3>
                        <div className="flex items-center gap-4 mb-3">
                          <motion.span
                            className="text-2xl font-bold text-orange-600"
                            whileHover={{ scale: 1.05 }}
                          >
                            {result.time}
                          </motion.span>
                          <motion.span
                            className="text-sm font-medium text-purple-600"
                            whileHover={{ scale: 1.05 }}
                          >
                            {result.points}
                          </motion.span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Medal className="w-4 h-4 text-orange-600" />
                          <span
                            className={clsx(
                              "font-medium transition-colors duration-300",
                              isDarkMode ? "text-gray-300" : "text-gray-700"
                            )}
                          >
                            {result.placement} in {result.category}
                          </span>
                        </div>
                        <p
                          className={clsx(
                            "text-sm transition-colors duration-300",
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          )}
                        >
                          {result.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>

            {/* Event Videos */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
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
              <motion.h3
                className={clsx(
                  "text-3xl font-bold mb-8 text-center transition-colors duration-300",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {t("eventVideos.title")}
              </motion.h3>
              <motion.div
                className="grid md:grid-cols-2 gap-8"
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
                {individualResults.map(
                  (result: IndividualResult, index: number) => (
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
                        title={`${result.event} - ${t(
                          "eventVideos.videoTitle"
                        )}`}
                        description={t("eventVideos.videoDescription", {
                          event: result.event,
                          time: result.time,
                          points: result.points,
                          placement: result.placement,
                        })}
                        duration={result.duration}
                        views={result.views}
                        className="mb-4"
                        priority={index < 2} // Prioritize first 2 videos for faster loading
                      />
                    </motion.div>
                  )
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Competition Statistics */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div
              className={clsx(
                "p-6 rounded-xl transition-colors duration-300",
                isDarkMode
                  ? "bg-gradient-to-br from-orange-900/30 to-purple-900/30"
                  : "bg-gradient-to-br from-orange-50 to-purple-50"
              )}
            >
              <h3
                className={clsx(
                  "text-2xl font-bold mb-4 transition-colors duration-300",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}
              >
                {t("statistics.competitionOverview.title")}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span
                    className={clsx(
                      "transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {t("statistics.competitionOverview.eventsCompeted")}
                  </span>
                  <span className="font-bold text-orange-600">
                    {t("statistics.competitionOverview.eventsCompetedValue")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={clsx(
                      "transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {t("statistics.competitionOverview.bestPlacement")}
                  </span>
                  <span className="font-bold text-orange-600">
                    {t("statistics.competitionOverview.bestPlacementValue")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={clsx(
                      "transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {t("statistics.competitionOverview.highestPoints")}
                  </span>
                  <span className="font-bold text-orange-600">
                    {t("statistics.competitionOverview.highestPointsValue")}
                  </span>
                </div>
              </div>
            </div>
            <div
              className={clsx(
                "p-6 rounded-xl transition-colors duration-300",
                isDarkMode
                  ? "bg-gradient-to-br from-purple-900/30 to-orange-900/30"
                  : "bg-gradient-to-br from-purple-50 to-orange-50"
              )}
            >
              <h3
                className={clsx(
                  "text-2xl font-bold mb-4 transition-colors duration-300",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}
              >
                {t("statistics.teamPerformance.title")}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span
                    className={clsx(
                      "transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {t("statistics.teamPerformance.mensTeam")}
                  </span>
                  <span className="font-bold text-purple-600">
                    {t("statistics.teamPerformance.mensTeamValue")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={clsx(
                      "transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {t("statistics.teamPerformance.womensTeam")}
                  </span>
                  <span className="font-bold text-purple-600">
                    {t("statistics.teamPerformance.womensTeamValue")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={clsx(
                      "transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {t("statistics.teamPerformance.overallResult")}
                  </span>
                  <span className="font-bold text-purple-600">
                    {t("statistics.teamPerformance.overallResultValue")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Championship Highlights */}
          <div className="text-center">
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
                  ? "bg-gradient-to-r from-orange-900/30 to-purple-900/30"
                  : "bg-gradient-to-r from-orange-50 to-purple-50"
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
                  <Trophy className="w-8 h-8 text-orange-600" />
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
