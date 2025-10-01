"use client";

import { Home, Trophy, Search, ArrowRight, Waves } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import { Link } from "../i18n/navigation";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Bubble {
  id: number;
  width: number;
  height: number;
  left: number;
  top: number;
  animationDelay: number;
  animationDuration: number;
}

export default function NotFoundClient() {
  const { isDarkMode } = useTheme();
  const t = useTranslations("NotFound");
  const [isAnimating, setIsAnimating] = useState(true);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate bubble data only on client side to avoid hydration mismatch
    const bubbleData: Bubble[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      width: Math.random() * 80 + 20,
      height: Math.random() * 80 + 20,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: Math.random() * 4 + 2,
    }));
    setBubbles(bubbleData);

    const timer = setTimeout(() => setIsAnimating(false), 30000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Search,
      title: t("features.0.title"),
      description: t("features.0.description"),
    },
    {
      icon: Waves,
      title: t("features.1.title"),
      description: t("features.1.description"),
    },
    {
      icon: Trophy,
      title: t("features.2.title"),
      description: t("features.2.description"),
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={clsx(
          "min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300 pt-24",
          isDarkMode ? "bg-gray-900" : "bg-white"
        )}
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Floating bubbles */}
          <AnimatePresence>
            {bubbles.map((bubble, index) => (
              <motion.div
                key={bubble.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className={clsx(
                  "absolute rounded-full opacity-20 animate-pulse",
                  isDarkMode ? "bg-blue-400" : "bg-blue-300"
                )}
                style={{
                  width: `${bubble.width}px`,
                  height: `${bubble.height}px`,
                  left: `${bubble.left}%`,
                  top: `${bubble.top}%`,
                  animationDelay: `${bubble.animationDelay}s`,
                  animationDuration: `${bubble.animationDuration}s`,
                }}
              />
            ))}
          </AnimatePresence>

          {/* Wave patterns */}
          <motion.div
            className="absolute bottom-0 left-0 right-0"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <svg
              viewBox="0 0 1200 200"
              className={clsx(
                "w-full h-32 opacity-10",
                isDarkMode ? "fill-blue-400" : "fill-blue-300"
              )}
            >
              <path d="M0,100 C300,150 900,50 1200,100 L1200,200 L0,200 Z" />
            </svg>
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 right-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <svg
              viewBox="0 0 1200 200"
              className={clsx(
                "w-full h-24 opacity-5",
                isDarkMode ? "fill-blue-500" : "fill-blue-400"
              )}
              style={{ transform: "translateY(20px)" }}
            >
              <path d="M0,120 C300,80 900,160 1200,120 L1200,200 L0,200 Z" />
            </svg>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          variants={containerVariants}
        >
          {/* 404 Hero */}
          <motion.div className="mb-16" variants={staggerContainer}>
            <motion.div
              variants={fadeInScale}
              transition={{ duration: 0.15, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.15 },
              }}
              whileTap={{ scale: 0.95 }}
              className={clsx(
                "inline-flex items-center justify-center w-32 h-32 rounded-full mb-8 transition-all duration-500 cursor-pointer",
                isDarkMode
                  ? "bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-500/25"
                  : "bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/25",
                isAnimating ? "animate-bounce" : ""
              )}
            >
              <span className="text-4xl font-bold text-white">
                {t("subtitle")}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={clsx(
                "text-6xl md:text-8xl font-bold mb-6 transition-colors duration-300",
                isDarkMode
                  ? "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              )}
            >
              {t("title")}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className={clsx(
                "text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}
            >
              {t("description")}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.15, ease: "easeOut" }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.15 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/">
                  <div
                    className={clsx(
                      "inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 group",
                      isDarkMode
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25"
                        : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25"
                    )}
                  >
                    <Home className="w-5 h-5" />
                    {t("homeButton")}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.15, ease: "easeOut", delay: 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.15 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/#competitions">
                  <div
                    className={clsx(
                      "inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 group",
                      isDarkMode
                        ? "bg-gray-800 hover:bg-gray-700 text-white border-2 border-gray-700"
                        : "bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 shadow-md"
                    )}
                  >
                    <Trophy className="w-5 h-5" />
                    {t("competitionsButton")}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: 0.5,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{
                  duration: 0.15,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.15 },
                }}
                className={clsx(
                  "p-8 rounded-2xl transition-all duration-300 group cursor-pointer",
                  isDarkMode
                    ? "bg-gray-800/50 hover:bg-gray-800 border border-gray-700"
                    : "bg-gray-50/50 hover:bg-gray-50 border border-gray-200"
                )}
              >
                <motion.div
                  className={clsx(
                    "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300",
                    isDarkMode
                      ? "bg-blue-600/20 group-hover:bg-blue-600/30"
                      : "bg-blue-100 group-hover:bg-blue-200"
                  )}
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.3 },
                  }}
                >
                  <feature.icon
                    className={clsx(
                      "w-8 h-8",
                      isDarkMode ? "text-blue-400" : "text-blue-600"
                    )}
                  />
                </motion.div>
                <h3
                  className={clsx(
                    "text-xl font-bold mb-4 transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {feature.title}
                </h3>
                <p
                  className={clsx(
                    "leading-relaxed transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            variants={fadeInScale}
            transition={{ duration: 0.15, ease: "easeOut", delay: 0.8 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.15 },
            }}
            className={clsx(
              "inline-flex items-center gap-3 px-6 py-4 rounded-full transition-colors duration-300 mb-20 cursor-pointer",
              isDarkMode
                ? "bg-yellow-900/30 border border-yellow-600/30 text-yellow-300"
                : "bg-yellow-50 border border-yellow-200 text-yellow-800"
            )}
          >
            <motion.div
              className="text-2xl"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              🏊‍♂️
            </motion.div>
            <span className="font-medium">{t("funFact")}</span>
          </motion.div>

          {/* Floating elements for extra beauty */}
          <motion.div
            className="absolute top-20 left-10"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <div
              className={clsx(
                "w-8 h-8 rounded-full",
                isDarkMode ? "bg-blue-500/20" : "bg-blue-300/30"
              )}
            />
          </motion.div>
          <motion.div
            className="absolute top-32 right-16"
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: 1,
              ease: "easeInOut",
            }}
          >
            <div
              className={clsx(
                "w-6 h-6 rounded-full",
                isDarkMode ? "bg-purple-500/20" : "bg-purple-300/30"
              )}
            />
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-20"
            animate={{
              y: [0, -25, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              delay: 2,
              ease: "easeInOut",
            }}
          >
            <div
              className={clsx(
                "w-4 h-4 rounded-full",
                isDarkMode ? "bg-teal-500/20" : "bg-teal-300/30"
              )}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
