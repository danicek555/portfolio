"use client";

import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import clsx from "clsx";

const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Hero");

  return (
    <section
      id="home"
      className="relative h-screen flex items-center px-20 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/skokDoVody.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Background Overlay */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-black/40"
      />

      {/* Content */}
      <div className="relative z-10 text-left max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className={clsx(
            "text-6xl font-bold mb-6 font-montserrat transition-colors duration-300",
            isDarkMode ? "text-blue-100" : "text-white"
          )}
        >
          Daniel Mitka
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className={clsx(
            "text-2xl mb-8 leading-relaxed font-montserrat transition-colors duration-300",
            isDarkMode ? "text-blue-200" : "text-gray-100"
          )}
        >
          {t("subtitle")}
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            y: -2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          href="#footer"
          className={clsx(
            "inline-block px-8 py-3 rounded font-bold text-lg transition-all duration-300",
            isDarkMode
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-green-500 hover:bg-green-600 text-white"
          )}
        >
          {t("cta")}
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
