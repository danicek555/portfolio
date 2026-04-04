"use client";

import Image from "next/image";
import { MapPin, Calendar, Trophy, Target } from "lucide-react";
import { useTheme } from "../../../../components/ThemeProvider";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function PodoliCompetitionClient() {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Podoli");

  const events = t.raw("events.eventsList") as Array<{
    event: string;
    result: string;
    time: string;
    description: string;
  }>;

  return (
    <div
      className={clsx(
        "min-h-screen transition-colors duration-150",
        isDarkMode ? "bg-gray-900" : "bg-white"
      )}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/podoliFoto.jpg"
            alt="Czech National Swimming Championship 2024"
            fill
            className="object-cover"
            priority
          />
          <div
            className={clsx(
              "absolute inset-0 transition-all duration-150",
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
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <motion.span
              className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.badge1")}
            </motion.span>
            <motion.span
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.badge2")}
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 80,
              damping: 12,
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t("hero.title")}
            </motion.span>
            <motion.span
              className="block text-red-400"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t("hero.subtitle")}
            </motion.span>
          </motion.h1>

          <motion.div
            className={clsx(
              "rounded-2xl p-8 inline-flex items-center gap-6 shadow-2xl transition-colors duration-150",
              isDarkMode
                ? "bg-gray-800/95 text-white"
                : "bg-white/95 text-gray-900"
            )}
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 80,
              damping: 15,
            }}
            whileHover={{
              scale: 1.02,
              y: -5,
              rotateY: 5,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
            }}
          >
            <motion.div
              className="text-6xl"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🇨🇿
            </motion.div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">
                {t("hero.eventTitle")}
              </h3>
              <p
                className={clsx(
                  "text-lg transition-colors duration-150",
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                )}
              >
                {t("hero.eventDescription")}
              </p>
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
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-150",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
              variants={{
                hidden: { opacity: 0, x: -50, rotateY: -15 },
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
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  color: "#dc2626",
                }}
                transition={{ duration: 0.6 }}
              >
                <MapPin className="w-8 h-8 text-red-600" />
              </motion.div>
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-150",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {t("info.location")}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-150",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {t("info.locationValue")}
                </p>
              </div>
            </motion.div>
            <motion.div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-150",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.8 },
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
                rotateY: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  color: "#dc2626",
                }}
                transition={{ duration: 0.6 }}
              >
                <Calendar className="w-8 h-8 text-red-600" />
              </motion.div>
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-150",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {t("info.date")}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-150",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {t("info.dateValue")}
                </p>
              </div>
            </motion.div>
            <motion.div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-150",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
              variants={{
                hidden: { opacity: 0, x: 50, rotateY: 15 },
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
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  color: "#dc2626",
                }}
                transition={{ duration: 0.6 }}
              >
                <Trophy className="w-8 h-8 text-red-600" />
              </motion.div>
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-150",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {t("info.level")}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-150",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {t("info.levelValue")}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Story */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12 mb-16"
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
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                  },
                },
              }}
            >
              <motion.h2
                className={clsx(
                  "text-4xl font-bold mb-6 transition-colors duration-150",
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
                {t("story.title")}
              </motion.h2>
              <motion.p
                className={clsx(
                  "text-lg mb-6 leading-relaxed transition-colors duration-150",
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
                {t("story.paragraph1")}
              </motion.p>
              <motion.div
                className="border-l-4 border-red-600 pl-6 mb-6"
                variants={{
                  hidden: { opacity: 0, x: -30, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 120,
                      damping: 15,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.02,
                  x: 5,
                  boxShadow: "0 10px 30px rgba(220, 38, 38, 0.2)",
                }}
              >
                <p
                  className={clsx(
                    "text-xl font-medium leading-relaxed transition-colors duration-150",
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  )}
                >
                  {t("story.highlight")}
                </p>
              </motion.div>
              <motion.p
                className={clsx(
                  "text-lg leading-relaxed transition-colors duration-150",
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
                {t("story.paragraph2")}
              </motion.p>
            </motion.div>
            <motion.div
              className="relative"
              variants={{
                hidden: { opacity: 0, x: 50, scale: 0.9, rotateY: 15 },
                visible: {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  rotateY: 0,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                  },
                },
              }}
              whileHover={{
                scale: 1.02,
                rotateY: -5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Image
                src="/podoliFoto.jpg"
                alt="Podolí swimming complex"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>

          {/* Competition Events */}
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
                "text-4xl font-bold mb-8 text-center transition-colors duration-150",
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
              {t("events.title")}
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-6"
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
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  className={clsx(
                    "p-6 rounded-xl border transition-all duration-150",
                    isDarkMode
                      ? "bg-gradient-to-br from-red-900/30 to-blue-900/30 border-gray-700"
                      : "bg-gradient-to-br from-red-50 to-blue-50 border-gray-200"
                  )}
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: -10 },
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
                    scale: 1.02,
                    y: -5,
                    rotateY: 3,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        color: "#dc2626",
                      }}
                      transition={{ duration: 0.1, ease: "easeOut" }}
                    >
                      <Target className="w-8 h-8 text-red-600 mt-1" />
                    </motion.div>
                    <div className="flex-1">
                      <h3
                        className={clsx(
                          "font-bold mb-2 transition-colors duration-150",
                          isDarkMode ? "text-white" : "text-gray-900"
                        )}
                      >
                        {event.event}
                        <motion.span
                          className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.1, ease: "easeOut" }}
                        >
                          50m bazén
                        </motion.span>
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <motion.span
                          className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold"
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          transition={{ duration: 0.1, ease: "easeOut" }}
                        >
                          {event.result}
                        </motion.span>
                        <span
                          className={clsx(
                            "text-sm transition-colors duration-150",
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          )}
                        >
                          {event.time}
                        </span>
                      </div>
                      <p
                        className={clsx(
                          "text-sm transition-colors duration-300",
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        )}
                      >
                        {event.description}
                      </p>
                    </div>
                  </div>
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
                "text-4xl font-bold mb-8 transition-colors duration-150",
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
              {t("highlights.title")}
            </motion.h2>
            <motion.div
              className={clsx(
                "rounded-2xl p-8 transition-colors duration-150",
                isDarkMode
                  ? "bg-gradient-to-r from-red-900/30 to-blue-900/30"
                  : "bg-gradient-to-r from-red-50 to-blue-50"
              )}
              variants={{
                hidden: { opacity: 0, scale: 0.9, rotateX: -10 },
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
                    "text-xl leading-relaxed mb-6 transition-colors duration-150",
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
                  {t("highlights.description")}
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
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      color: "#dc2626",
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Trophy className="w-8 h-8 text-red-600" />
                  </motion.div>
                  <span
                    className={clsx(
                      "text-lg font-semibold transition-colors duration-150",
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    )}
                  >
                    {t("highlights.experience")}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
