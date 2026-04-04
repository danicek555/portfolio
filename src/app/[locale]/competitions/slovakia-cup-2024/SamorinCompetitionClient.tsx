"use client";

import Image from "next/image";
import { MapPin, Calendar, Users, Clock } from "lucide-react";
import { useTheme } from "../../../../components/ThemeProvider";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface Event {
  event: string;
  time: string;
  description: string;
}

export default function SamorinCompetitionClient() {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Samorin");

  const events = t.raw("events.eventsList");

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src="/samorin.jpg"
              alt="Slovakia Cup Šamorín 2024"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider"
            >
              {t("hero.badge1")}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
            >
              {t("hero.badge2")}
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            {t("hero.title")}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block text-blue-400"
            >
              {t("hero.subtitle")}
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            className={`${
              isDarkMode ? "bg-gray-800/95" : "bg-white/95"
            } rounded-2xl p-8 inline-flex items-center gap-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            } shadow-2xl transition-colors duration-300`}
          >
            <motion.div
              initial={{ rotate: -20, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 1,
                type: "spring",
                stiffness: 200,
              }}
              className="text-6xl"
            >
              🏊‍♂️
            </motion.div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">
                {t("hero.eventTitle")}
              </h3>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } text-lg transition-colors duration-300`}
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
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: MapPin,
                title: t("info.location"),
                value: t("info.locationValue"),
              },
              {
                icon: Calendar,
                title: t("info.date"),
                value: t("info.dateValue"),
              },
              {
                icon: Users,
                title: t("info.competition"),
                value: t("info.competitionValue"),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`flex items-center gap-4 p-6 ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-50"
                } rounded-xl transition-colors duration-300 cursor-pointer`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-8 h-8 text-purple-600" />
                </motion.div>
                <div>
                  <h3
                    className={`font-bold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    } transition-colors duration-300`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    } transition-colors duration-300`}
                  >
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2
                className={`text-4xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                } mb-6 transition-colors duration-300`}
              >
                {t("story.title")}
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } mb-6 leading-relaxed transition-colors duration-300`}
              >
                {t("story.paragraph1")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="border-l-4 border-purple-600 pl-6 mb-6"
              >
                <p
                  className={`text-xl ${
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  } font-medium leading-relaxed transition-colors duration-300`}
                >
                  {t("story.highlight")}
                </p>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className={`text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } leading-relaxed transition-colors duration-300`}
              >
                {t("story.paragraph2")}
              </motion.p>
            </motion.div>
            <motion.div
              variants={slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-xl"
              >
                <Image
                  src="/samorin.jpg"
                  alt="Slovakia Cup competition"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover w-full h-80"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Events Participated */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-4xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              } mb-8 text-center transition-colors duration-300`}
            >
              {t("events.title")}
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {events.map((event: Event, index: number) => (
                <motion.div
                  key={index}
                  variants={fadeInScale}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-50 hover:bg-gray-100"
                  } rounded-xl transition-all duration-300 cursor-pointer`}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Clock className="w-8 h-8 text-purple-600" />
                    </motion.div>
                    <div>
                      <h3
                        className={`font-bold ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        } mb-1 transition-colors duration-300`}
                      >
                        {event.event}
                        <span className="ml-2 text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                          25m bazén
                        </span>
                      </h3>
                      <p className="text-purple-600 font-semibold text-sm mb-2">
                        {event.time}
                      </p>
                      <p
                        className={`${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        } text-sm transition-colors duration-300`}
                      >
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
