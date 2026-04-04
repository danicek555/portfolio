"use client";

import Image from "next/image";
import { Award, MapPin, Calendar, Users } from "lucide-react";
import { useTheme } from "../../../../components/ThemeProvider";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function AustraliaCompetitionClient() {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Australia");

  const achievements = [
    {
      position: t("results.achievements.0.position"),
      event: t("results.achievements.0.event"),
      description: t("results.achievements.0.description"),
      isSilver: true,
    },
    {
      position: t("results.achievements.1.position"),
      event: t("results.achievements.1.event"),
      description: t("results.achievements.1.description"),
    },
    {
      position: t("results.achievements.2.position"),
      event: t("results.achievements.2.event"),
      description: t("results.achievements.2.description"),
    },
    {
      position: t("results.achievements.3.position"),
      event: t("results.achievements.3.event"),
      description: t("results.achievements.3.description"),
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
            src="/winPhoto.jpg"
            alt="Competition victory moment"
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
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <motion.span
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider"
              whileHover={{
                scale: 1.1,
                rotate: 3,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {t("hero.badge1")}
            </motion.span>
            <motion.span
              className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
              whileHover={{
                scale: 1.1,
                rotate: -3,
                boxShadow: "0 10px 25px rgba(220, 38, 38, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {t("hero.badge2")}
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 80,
              damping: 12,
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 100,
              }}
            >
              {t("hero.title")}
            </motion.span>
            <motion.span
              className="block text-yellow-400"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 100,
              }}
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
            initial={{ opacity: 0, scale: 0.7, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 1.3,
              type: "spring",
              stiffness: 80,
              damping: 15,
            }}
            whileHover={{
              scale: 1.05,
              y: -10,
              rotateY: 5,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
            }}
          >
            <motion.div
              className="text-6xl"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            >
              🥈
            </motion.div>
            <div className="text-left">
              <motion.h3
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {t("hero.eventTitle")}
              </motion.h3>
              <motion.p
                className={clsx(
                  "text-lg transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {t("hero.partner")}
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
            <motion.div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
              variants={{
                hidden: { opacity: 0, x: -100, rotateY: -90 },
                visible: {
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  color: "#3b82f6",
                }}
                transition={{ duration: 0.6 }}
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
                hidden: { opacity: 0, y: 100, scale: 0.8 },
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
              whileHover={{
                scale: 1.05,
                y: -8,
                rotateX: 5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  color: "#3b82f6",
                }}
                transition={{ duration: 0.6 }}
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
                hidden: { opacity: 0, x: 100, rotateY: 90 },
                visible: {
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                rotateY: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  color: "#3b82f6",
                }}
                transition={{ duration: 0.6 }}
              >
                <Users className="w-8 h-8 text-blue-600" />
              </motion.div>
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {t("info.category")}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {t("info.categoryValue")}
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
              <div className="border-l-4 border-blue-600 pl-6 mb-6">
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
                src="/fotkaWithAdam.jpg"
                alt="Daniel with Adam Pekař at the championship"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Achievements Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
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
              {t("results.title")}
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className={clsx(
                    "p-6 rounded-xl transition-all duration-300",
                    achievement.isSilver
                      ? isDarkMode
                        ? "bg-gradient-to-br from-gray-700/50 to-gray-600/50 border-2 border-gray-400"
                        : "bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300"
                      : isDarkMode
                      ? "bg-gray-800"
                      : "bg-gray-50"
                  )}
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.8, rotateX: -20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotateX: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div className="text-center">
                    {achievement.isSilver && (
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          rotate: 360,
                          color: "#6b7280",
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Award className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                      </motion.div>
                    )}
                    <motion.span
                      className={clsx(
                        "text-4xl font-bold block mb-3",
                        achievement.isSilver ? "text-gray-500" : "text-blue-600"
                      )}
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        color: achievement.isSilver ? "#9ca3af" : "#2563eb",
                      }}
                    >
                      {achievement.position}
                    </motion.span>
                    <h3
                      className={clsx(
                        "font-bold mb-2 transition-colors duration-300",
                        isDarkMode ? "text-white" : "text-gray-900"
                      )}
                    >
                      {achievement.event}
                    </h3>
                    <p
                      className={clsx(
                        "text-sm transition-colors duration-300",
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      )}
                    >
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo Gallery */}
          <motion.div
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
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
              {t("gallery.title")}
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-3 gap-6"
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
              <motion.div
                className="relative h-64 rounded-xl overflow-hidden group"
                variants={{
                  hidden: { opacity: 0, scale: 0.8, rotateY: -20 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Image
                  src="/zapadPhoto.jpg"
                  alt="Championship moment 1"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </motion.div>
              <motion.div
                className="relative h-64 rounded-xl overflow-hidden group"
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 50 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Image
                  src="/behaciPhoto_temp.jpg"
                  alt="Championship moment 2"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  style={{ objectPosition: "center 20%" }}
                  priority
                />
              </motion.div>
              <motion.div
                className="relative h-64 rounded-xl overflow-hidden group"
                variants={{
                  hidden: { opacity: 0, scale: 0.8, rotateY: 20 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: -5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Image
                  src="/ausFoto_temp.jpg"
                  alt="Championship team photo"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
