"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import clsx from "clsx";

const GeorgiaTechCommitment: React.FC = () => {
  const { isDarkMode } = useTheme();
  const t = useTranslations("GeorgiaTech");

  const commitmentParagraphs = [
    t("commitment.p1"),
    t("commitment.p2"),
    t("commitment.p3"),
    t("commitment.p4"),
  ];

  const personalBests = [
    { event: t("pbs.breast200"), time: t("pbs.breast200Time") },
    { event: t("pbs.breast100"), time: t("pbs.breast100Time") },
    { event: t("pbs.im200"), time: t("pbs.im200Time") },
    { event: t("pbs.im400"), time: t("pbs.im400Time") },
  ];

  return (
    <section
      id="georgia-tech"
      className={clsx(
        "py-16 px-8 transition-colors duration-300",
        isDarkMode ? "bg-gray-900" : "bg-white"
      )}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative max-w-xl mx-auto lg:mx-0"
          >
            <div className="relative">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.4 },
                }}
                className="relative overflow-hidden rounded-lg"
              >
                <Image
                  src="/commitment/gt-commitment.jpg"
                  alt={t("imageAlt")}
                  width={659}
                  height={879}
                  className="rounded-lg object-cover w-full h-auto"
                  quality={85}
                />
                <div className="absolute bottom-0 inset-x-0 px-5 py-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-green-400 text-xs font-bold uppercase tracking-wider">
                    {t("photoCaption")}
                  </p>
                  <p className="text-white text-sm font-semibold mt-0.5">
                    {t("photoSubcaption")}
                  </p>
                </div>
              </motion.div>

              {/* Floating accent element */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-500 rounded-full opacity-20"
              />
            </div>

            {/* Personal bests below photo */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {personalBests.map((pb, i) => (
                <motion.div
                  key={pb.event}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 * i }}
                  viewport={{ once: true }}
                  className={clsx(
                    "rounded-lg px-4 py-3 text-center shadow-lg transition-colors duration-300",
                    isDarkMode ? "bg-gray-700" : "bg-white"
                  )}
                >
                  <p className="text-green-500 text-xs font-bold uppercase tracking-wider mb-1">
                    {pb.event}
                  </p>
                  <p
                    className={clsx(
                      "text-lg font-bold tabular-nums transition-colors duration-300",
                      isDarkMode ? "text-white" : "text-gray-800"
                    )}
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {pb.time}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-green-500 uppercase text-xs font-bold tracking-wider"
              style={{ fontWeight: 700, fontFamily: "'Roboto', sans-serif" }}
            >
              🐝 {t("badge")}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className={clsx(
                "text-3xl font-bold leading-tight transition-colors duration-300",
                isDarkMode ? "text-white" : "text-black"
              )}
              style={{ fontWeight: 700, fontFamily: "'Roboto', sans-serif" }}
            >
              {t("title")}
            </motion.h2>

            <div className="flex flex-wrap gap-2">
              <span
                className={clsx(
                  "inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300",
                  isDarkMode
                    ? "bg-green-500/15 text-green-400 border border-green-500/30"
                    : "bg-green-50 text-green-600 border border-green-200"
                )}
              >
                {t("classHighSchool")}
              </span>
              <span
                className={clsx(
                  "inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300",
                  isDarkMode
                    ? "bg-gray-800 text-gray-300 border border-gray-700"
                    : "bg-gray-100 text-gray-600 border border-gray-200"
                )}
              >
                {t("classCollege")}
              </span>
            </div>

            {commitmentParagraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                viewport={{ once: true }}
                className={clsx(
                  "leading-relaxed transition-colors duration-300",
                  i === 0
                    ? clsx(
                        "text-lg font-semibold",
                        isDarkMode ? "text-white" : "text-gray-800"
                      )
                    : clsx(
                        "text-base",
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      )
                )}
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-green-500 text-lg font-bold tracking-wide"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              {t("commitment.p5")}
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                x: 4,
                transition: { duration: 0.2 },
              }}
              href="https://ramblinwreck.com/sports/c-swim/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 font-medium inline-flex items-center transition-colors duration-300 text-sm sm:text-base"
            >
              {t("cta")}
              <span className="ml-1">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GeorgiaTechCommitment;
