"use client";

import { useState, useEffect, useCallback } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  const competitions: Competition[] = [
    {
      title: t("competitions.5.title"),
      description: t("competitions.5.description"),
      link: "/competitions/czech-junior-nationals-2025",
      img: "/mcr2025.jpg",
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
    {
      title: t("competitions.4.title"),
      description: t("competitions.4.description"),
      link: "/competitions/czech-open-nationals-2025",
      img: "/plzen.jpg",
    },
  ];

  // Responsive slides to show
  const [slidesToShow, setSlidesToShow] = useState(3);

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

  const hasMoreThanMax = competitions.length > slidesToShow;
  const maxSlide = competitions.length - slidesToShow;
  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= maxSlide;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const newSlide = prev + 1;
      // Stop at the boundary instead of wrapping
      return newSlide > maxSlide ? prev : newSlide;
    });
  }, [maxSlide]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const newSlide = prev - 1;
      // Stop at the boundary instead of wrapping
      return newSlide < 0 ? prev : newSlide;
    });
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!hasMoreThanMax || isMobile) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && !isAtStart) {
        prevSlide();
      } else if (event.key === "ArrowRight" && !isAtEnd) {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasMoreThanMax, isMobile, nextSlide, prevSlide, isAtStart, isAtEnd]);

  // Prevent browser's default horizontal scroll behavior
  useEffect(() => {
    const handleWheel = (event: Event) => {
      const wheelEvent = event as WheelEvent;
      if (Math.abs(wheelEvent.deltaX) > Math.abs(wheelEvent.deltaY)) {
        event.preventDefault();
      }
    };

    const container = document.querySelector("[data-competitions-container]");
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, []);

  // Handle wheel events for trackpad scrolling
  const handleWheel = useCallback(
    (event: React.WheelEvent) => {
      if (!hasMoreThanMax || isMobile) return;

      const deltaX = event.deltaX;
      const deltaY = event.deltaY;

      // Only prevent default if there's significant horizontal movement
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
        event.preventDefault();
        event.stopPropagation();

        if (deltaX > 0 && !isAtEnd) {
          nextSlide();
        } else if (deltaX < 0 && !isAtStart) {
          prevSlide();
        }
      }
    },
    [hasMoreThanMax, isMobile, nextSlide, prevSlide, isAtStart, isAtEnd]
  );

  const renderCompetitionCard = (comp: Competition, index: number) => (
    <motion.div
      key={index}
      className={clsx(
        "rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 select-none",
        isDarkMode ? "bg-gray-700" : "bg-white",
        hasMoreThanMax ? "min-w-0 flex-shrink-0" : ""
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
              : "object-[50%_30%]"
          )}
          priority
        />
      </div>
      <div className="p-3 sm:p-4 md:p-6">
        <h3
          className={clsx(
            "text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-colors duration-300",
            isDarkMode ? "text-white" : "text-gray-800"
          )}
        >
          {comp.title}
        </h3>
        <p
          className={clsx(
            "mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base transition-colors duration-300",
            isDarkMode ? "text-gray-300" : "text-gray-600"
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
        isDarkMode ? "bg-gray-800" : "bg-gray-50"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-green-500 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            {t("badge")}
          </h3>
          <h2
            className={clsx(
              "text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 transition-colors duration-300",
              isDarkMode ? "text-white" : "text-gray-800"
            )}
          >
            {t("title")}
          </h2>
        </div>

        {hasMoreThanMax ? (
          // Slider Layout for more competitions than can fit
          <div className="relative">
            {/* Slider Container with touch support */}
            <div
              className="overflow-hidden py-2 sm:py-4 md:py-8 select-none"
              onWheel={handleWheel}
              data-competitions-container
              style={{
                touchAction: "pan-y pinch-zoom",
                overscrollBehavior: "contain",
              }}
            >
              <motion.div
                className="flex gap-4 sm:gap-6 md:gap-8 select-none"
                drag="x"
                dragConstraints={{
                  left: -(competitions.length - slidesToShow) * 400, // Approximate slide width
                  right: 0,
                }}
                dragElastic={0.1}
                dragMomentum={false}
                onDragEnd={(_, info) => {
                  const threshold = 50;
                  if (info.offset.x > threshold && !isAtStart) {
                    prevSlide();
                  } else if (info.offset.x < -threshold && !isAtEnd) {
                    nextSlide();
                  }
                }}
                animate={{
                  x: `calc(-${currentSlide * (100 / slidesToShow)}% - ${
                    currentSlide * (isMobile ? 1 : 2)
                  }rem)`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                style={{
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  msUserSelect: "none",
                }}
              >
                {competitions.map((comp, index) => (
                  <div
                    key={index}
                    className={clsx(
                      "flex-shrink-0",
                      slidesToShow === 1
                        ? "w-full"
                        : slidesToShow === 2
                        ? "w-1/2"
                        : "w-full md:w-1/3"
                    )}
                  >
                    {renderCompetitionCard(comp, index)}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows for larger screens */}
            {!isMobile && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={isAtStart}
                  className={clsx(
                    "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10",
                    isAtStart
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:scale-110",
                    isDarkMode
                      ? "bg-gray-700 text-white"
                      : "bg-white text-gray-800 shadow-lg",
                    !isAtStart &&
                      (isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-50")
                  )}
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  disabled={isAtEnd}
                  className={clsx(
                    "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10",
                    isAtEnd
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:scale-110",
                    isDarkMode
                      ? "bg-gray-700 text-white"
                      : "bg-white text-gray-800 shadow-lg",
                    !isAtEnd &&
                      (isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-50")
                  )}
                >
                  →
                </button>
              </>
            )}

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {Array.from({
                length: competitions.length - slidesToShow + 1,
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={clsx(
                    "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300",
                    currentSlide === index
                      ? "bg-green-500 scale-110"
                      : isDarkMode
                      ? "bg-gray-600 hover:bg-gray-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                />
              ))}
            </div>

            {/* Competition Counter */}
            <div className="text-center mt-3 sm:mt-4">
              <span
                className={clsx(
                  "text-xs sm:text-sm transition-colors duration-300",
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                )}
              >
                {currentSlide + 1} -{" "}
                {Math.min(currentSlide + slidesToShow, competitions.length)} of{" "}
                {competitions.length} competitions
              </span>
            </div>

            {/* Navigation Help */}
            <div className="text-center mt-2">
              <span
                className={clsx(
                  "text-xs transition-colors duration-300",
                  isDarkMode ? "text-gray-500" : "text-gray-500"
                )}
              >
                {isMobile
                  ? "Swipe to navigate"
                  : "Drag to navigate • Use ← → keys • Trackpad scroll"}
              </span>
            </div>
          </div>
        ) : (
          // Regular Grid Layout for fewer competitions
          <div
            className={clsx(
              "grid gap-4 sm:gap-6 md:gap-8",
              competitions.length === 1
                ? "grid-cols-1 max-w-md mx-auto"
                : competitions.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}
          >
            {competitions.map((comp, index) =>
              renderCompetitionCard(comp, index)
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Competitions;
