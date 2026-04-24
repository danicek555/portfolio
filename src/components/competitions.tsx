"use client";

import { useCallback, useEffect, useState } from "react";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const competitions: Competition[] = [
    {
      title: t("competitions.6.title"),
      description: t("competitions.6.description"),
      link: "/competitions/invitational-2026",
      img: "/ostrava1.jpg",
    },
    {
      title: t("competitions.7.title"),
      description: t("competitions.7.description"),
      link: "/competitions/pioneer-open-2026",
      img: "/mcrplzen252.jpg",
    },
    {
      title: t("competitions.8.title"),
      description: t("competitions.8.description"),
      link: "/competitions/colorado-senior-meet-2026",
      img: "/mcr2025.jpg",
    },
    {
      title: t("competitions.9.title"),
      description: t("competitions.9.description"),
      link: "/competitions/speedo-sectionals-2026",
      img: "/podoliFoto.jpg",
    },
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

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesToShow(1);
        setIsMobile(true);
      } else if (width < 1024) {
        setSlidesToShow(2);
        setIsMobile(false);
      } else {
        setSlidesToShow(3);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = Math.max(0, competitions.length - slidesToShow);
  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= maxSlide;

  useEffect(() => {
    if (currentSlide > maxSlide) {
      setCurrentSlide(maxSlide);
    }
  }, [currentSlide, maxSlide]);

  const nextSlide = useCallback(() => {
    if (isTransitioning || isAtEnd) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
    window.setTimeout(() => setIsTransitioning(false), 250);
  }, [isTransitioning, isAtEnd, maxSlide]);

  const prevSlide = useCallback(() => {
    if (isTransitioning || isAtStart) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
    window.setTimeout(() => setIsTransitioning(false), 250);
  }, [isTransitioning, isAtStart]);

  const renderCompetitionCard = (comp: Competition, index: number) => (
    <motion.div
      key={index}
      className={clsx(
        "rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 select-none",
        isDarkMode ? "bg-gray-700" : "bg-white",
      )}
      whileHover={{ scale: isMobile ? 1 : 1.02 }}
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
          <div className="relative">
            <div className="overflow-hidden py-2 sm:py-4 md:py-8">
              <motion.div
                className="flex gap-4 sm:gap-6 md:gap-8"
                animate={{
                  x: `calc(-${currentSlide * (100 / slidesToShow)}% - ${
                    currentSlide * (isMobile ? 1 : 2)
                  }rem)`,
                }}
                transition={{
                  type: "tween",
                  duration: 0.25,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {competitions.map((comp, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "shrink-0",
                      slidesToShow === 1
                        ? "w-full"
                        : slidesToShow === 2
                          ? "w-1/2"
                          : "w-full md:w-1/3",
                    )}
                  >
                    {renderCompetitionCard(comp, index)}
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              onClick={prevSlide}
              disabled={isAtStart}
              aria-label="Previous competitions"
              className={clsx(
                "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10",
                isAtStart ? "opacity-50 cursor-not-allowed" : "hover:scale-110",
                isDarkMode
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800 shadow-lg",
                !isAtStart &&
                  (isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-50"),
              )}
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              disabled={isAtEnd}
              aria-label="Next competitions"
              className={clsx(
                "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10",
                isAtEnd ? "opacity-50 cursor-not-allowed" : "hover:scale-110",
                isDarkMode
                  ? "bg-gray-700 text-white"
                  : "bg-white text-gray-800 shadow-lg",
                !isAtEnd &&
                  (isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-50"),
              )}
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Competitions;
