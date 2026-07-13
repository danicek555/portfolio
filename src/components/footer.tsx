"use client";

import {
  Mail,
  Phone,
  ExternalLink,
  Linkedin,
  Instagram,
  Github,
  Waves,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import clsx from "clsx";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Footer");
  const reduced = useReducedMotion() ?? false;

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.14, delayChildren: 0.1 },
    },
  };
  const column: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };
  const link: Variants = {
    hidden: { opacity: 0, x: reduced ? 0 : -8 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE } },
  };

  const iconHover = reduced
    ? undefined
    : { scale: 1.18, y: -3, transition: { type: "spring" as const, stiffness: 320, damping: 18 } };
  const iconTap = reduced ? undefined : { scale: 0.9 };

  const socials = [
    {
      href: "https://www.linkedin.com/in/daniel-mitka-b90595215/",
      label: "LinkedIn",
      icon: Linkedin,
      tooltip: t("linkedinTooltip"),
      external: true,
    },
    {
      href: "https://www.instagram.com/dan_mitka",
      label: "Instagram",
      icon: Instagram,
      tooltip: t("instagramTooltip"),
      external: false,
    },
    {
      href: "https://github.com/danicek555",
      label: "GitHub",
      icon: Github,
      tooltip: t("githubTooltip"),
      external: true,
    },
    {
      href: "https://www.swimcloud.com/swimmer/1828936",
      label: "Swimcloud",
      icon: Waves,
      tooltip: t("swimcloudTooltip"),
      external: true,
    },
  ];

  const linkClass = clsx(
    "flex items-center transition-colors duration-200",
    isDarkMode
      ? "text-gray-300 hover:text-white"
      : "text-gray-600 hover:text-gray-800",
  );

  return (
    <footer
      id="footer"
      className={clsx(
        "transition-colors duration-300",
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {/* Contact Information */}
          <motion.div variants={column}>
            <h3 className="text-lg font-semibold mb-4">{t("contact")}</h3>
            <motion.div className="space-y-3" variants={container}>
              <motion.a
                href="mailto:danmitka@gmail.com"
                className={linkClass}
                variants={link}
              >
                <Mail className="w-4 h-4 mr-2" />
                danmitka@gmail.com
              </motion.a>
              <motion.a
                href="tel:+420735872528"
                className={linkClass}
                variants={link}
              >
                <Phone className="w-4 h-4 mr-2" />
                +420 735 872 528
              </motion.a>
              <motion.a
                href="https://vysledky.czechswimming.cz/lide/59887000"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                variants={link}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t("swimmingStatistics")}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={column}>
            <h3 className="text-lg font-semibold mb-4">{t("socialMedia")}</h3>
            <div className="flex space-x-4">
              {socials.map(({ href, label, icon: Icon, tooltip, external }) => (
                <div key={label} className="relative group">
                  <motion.a
                    href={href}
                    target="_blank"
                    {...(external ? { rel: "noopener noreferrer" } : {})}
                    className={clsx(
                      "inline-flex transition-colors duration-200",
                      isDarkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-800",
                    )}
                    aria-label={label}
                    whileHover={iconHover}
                    whileTap={iconTap}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                  <div
                    className={clsx(
                      "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10",
                      isDarkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-800 text-white",
                    )}
                  >
                    {tooltip}
                    <div
                      className={clsx(
                        "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2",
                        isDarkMode
                          ? "border-l-transparent border-r-transparent border-t-gray-700"
                          : "border-l-transparent border-r-transparent border-t-gray-800",
                      )}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <motion.a
              href="https://steroid.danielmitka.com"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "mt-3 inline-flex items-center transition-colors duration-200",
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-800",
              )}
              variants={link}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              steroid.danielmitka.com
            </motion.a>
          </motion.div>

          {/* About */}
          <motion.div variants={column}>
            <h3 className="text-lg font-semibold mb-4">{t("about")}</h3>
            <p
              className={clsx(
                "text-sm leading-relaxed",
                isDarkMode ? "text-gray-300" : "text-gray-600",
              )}
            >
              {t("aboutDescription")}
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className={clsx(
            "border-t mt-8 pt-6 text-center",
            isDarkMode ? "border-gray-600" : "border-gray-200",
          )}
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5% 0px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
        >
          <p
            className={clsx(
              "text-sm",
              isDarkMode ? "text-gray-400" : "text-gray-500",
            )}
          >
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
