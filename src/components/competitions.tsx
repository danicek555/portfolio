"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import clsx from "clsx";

type Competition = {
  title: string;
  description: string;
  link: string;
  img: string;
};

const Competitions: React.FC = () => {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Competitions");

  const competitions: Competition[] = [
    {
      title: t("competitions.5.title"),
      description: t("competitions.5.description"),
      link: "/competitions/czech-junior-nationals-2025",
      img: "/mcr2025.jpg",
    },
    {
      title: t("competitions.4.title"),
      description: t("competitions.4.description"),
      link: "/competitions/czech-open-nationals-2025",
      img: "/mcrplzen252.jpg",
    },
    {
      title: t("competitions.0.title"),
      description: t("competitions.0.description"),
      link: "/competitions/team-championship-finals-2025",
      img: "/ostrava1.jpg",
    },
    {
      title: t("competitions.1.title"),
      description: t("competitions.1.description"),
      link: "/competitions/slovakia-cup-2024",
      img: "/samorin.jpg",
    },
    {
      title: t("competitions.2.title"),
      description: t("competitions.2.description"),
      link: "/competitions/lifesaving-worlds-australia",
      img: "/ausFoto_temp.jpg",
    },
    {
      title: t("competitions.3.title"),
      description: t("competitions.3.description"),
      link: "/competitions/czech-youth-nationals-2024",
      img: "/podoliFoto.jpg",
    },
  ];

  const renderCompetitionCard = (comp: Competition, index: number) => (
    <motion.div
      key={index}
      className={clsx(
        "rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 select-none",
        isDarkMode ? "bg-gray-700" : "bg-white",
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      }}
    >
      <div className="relative h-48 sm:h-64 md:h-80">
        <Image
          src={comp.img}
          alt={comp.title}
          fill
          className={clsx(
            "object-cover",
            comp.img === "/samorin.jpg" || comp.img === "/ausFoto_temp.jpg"
              ? "object-center"
              : "object-[50%_30%]",
          )}
          quality={85}
          loading={index < 3 ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-3 sm:p-4 md:p-6">
        <h3
          className={clsx(
            "text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-colors duration-300",
            isDarkMode ? "text-white" : "text-gray-800",
          )}
        >
          {comp.title}
        </h3>
        <p
          className={clsx(
            "mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base transition-colors duration-300",
            isDarkMode ? "text-gray-300" : "text-gray-600",
          )}
        >
          {comp.description}
        </p>
        <Link
          href={comp.link}
          className="text-green-500 hover:text-green-600 font-medium inline-flex items-center transition-colors duration-300 text-sm sm:text-base"
        >
          {t("cta")}
          <motion.span
            className="ml-1"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            →
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );

  return (
    <section
      id="competitions"
      className={clsx(
        "py-12 sm:py-16 px-4 sm:px-8 transition-colors duration-300",
        isDarkMode ? "bg-gray-800" : "bg-gray-50",
      )}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="text-green-500 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            {t("badge")}
          </h3>
          <h2
            className={clsx(
              "text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 transition-colors duration-300",
              isDarkMode ? "text-white" : "text-gray-800",
            )}
          >
            {t("title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div
            className={clsx(
              "grid gap-4 sm:gap-6 md:gap-8",
              competitions.length === 1
                ? "grid-cols-1 max-w-md mx-auto"
                : competitions.length === 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
            )}
          >
            {competitions.map((comp, index) =>
              renderCompetitionCard(comp, index),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Competitions;
