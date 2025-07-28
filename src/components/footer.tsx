"use client";

import { Mail, Phone, ExternalLink, Facebook, Instagram } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import clsx from "clsx";

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Footer");

  return (
    <footer
      id="footer"
      className={clsx(
        "transition-colors duration-300",
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contact")}</h3>
            <div className="space-y-3">
              <a
                href="mailto:danmitka@gmail.com"
                className={clsx(
                  "flex items-center transition-colors duration-200",
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-800"
                )}
              >
                <Mail className="w-4 h-4 mr-2" />
                danmitka@gmail.com
              </a>
              <a
                href="tel:+420735872528"
                className={clsx(
                  "flex items-center transition-colors duration-200",
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-800"
                )}
              >
                <Phone className="w-4 h-4 mr-2" />
                +420 735 872 528
              </a>
              <a
                href="https://vysledky.czechswimming.cz/lide/59887000"
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  "flex items-center transition-colors duration-200",
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-800"
                )}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {t("swimmingStatistics")}
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("socialMedia")}</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className={clsx(
                  "transition-colors duration-200",
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-800"
                )}
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/dan_mitka"
                target="_blank"
                className={clsx(
                  "transition-colors duration-200",
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-800"
                )}
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("about")}</h3>
            <p
              className={clsx(
                "text-sm leading-relaxed",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}
            >
              {t("aboutDescription")}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={clsx(
            "border-t mt-8 pt-6 text-center",
            isDarkMode ? "border-gray-600" : "border-gray-200"
          )}
        >
          <p
            className={clsx(
              "text-sm",
              isDarkMode ? "text-gray-400" : "text-gray-500"
            )}
          >
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
