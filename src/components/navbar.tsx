"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useState } from "react";

const Navbar: React.FC = () => {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={clsx(
        "sticky top-0 w-full flex items-center justify-between px-4 sm:px-10 py-4 border-b shadow-md z-50 transition-colors duration-300",
        isDarkMode
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-white border-gray-200 text-black"
      )}
    >
      <Link
        href="/"
        className={clsx(
          "text-xl sm:text-2xl font-bold font-montserrat tracking-wide no-underline transition-colors duration-300",
          isDarkMode ? "text-white" : "text-black"
        )}
        style={{ fontWeight: 700 }}
      >
        DANIEL MITKA
      </Link>

      {/* Desktop menu */}
      <ul
        className={clsx(
          "hidden md:flex items-center space-x-8 font-montserrat text-lg",
          isDarkMode ? "text-white" : "text-black"
        )}
      >
        <li>
          <Link
            href="/#home"
            className={clsx(
              "transition-colors no-underline font-bold",
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            )}
            style={{ fontWeight: 700 }}
          >
            {t("home")}
          </Link>
        </li>
        <li>
          <Link
            href="/#about"
            className={clsx(
              "transition-colors no-underline font-bold",
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            )}
            style={{ fontWeight: 700 }}
          >
            {t("about")}
          </Link>
        </li>
        <li>
          <Link
            href="/#competitions"
            className={clsx(
              "transition-colors no-underline font-bold",
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            )}
            style={{ fontWeight: 700 }}
          >
            {t("competitions")}
          </Link>
        </li>
        <li>
          <Link
            href="/#work"
            className={clsx(
              "transition-colors no-underline font-bold",
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            )}
            style={{ fontWeight: 700 }}
          >
            {t("work")}
          </Link>
        </li>
        <li>
          <a
            href="https://www.instagram.com/dan_mitka"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "flex items-center transition-colors no-underline font-bold",
              isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
            )}
            style={{ fontWeight: 700 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </li>
      </ul>

      {/* Mobile hamburger menu button */}
      <button
        onClick={toggleMenu}
        className={clsx(
          "md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 transition-all duration-300",
          isDarkMode ? "text-white" : "text-black"
        )}
      >
        <span
          className={clsx(
            "block w-6 h-0.5 transition-all duration-300",
            isDarkMode ? "bg-white" : "bg-black",
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          )}
        />
        <span
          className={clsx(
            "block w-6 h-0.5 transition-all duration-300",
            isDarkMode ? "bg-white" : "bg-black",
            isMenuOpen ? "opacity-0" : ""
          )}
        />
        <span
          className={clsx(
            "block w-6 h-0.5 transition-all duration-300",
            isDarkMode ? "bg-white" : "bg-black",
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          )}
        />
      </button>

      {/* Mobile menu */}
      <div
        className={clsx(
          "md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out",
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200",
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        )}
      >
        <ul className="flex flex-col space-y-0 font-montserrat">
          <li>
            <Link
              href="/#home"
              onClick={closeMenu}
              className={clsx(
                "block px-4 py-4 transition-colors no-underline font-bold border-b",
                isDarkMode
                  ? "hover:bg-gray-700 border-gray-700 text-white"
                  : "hover:bg-gray-50 border-gray-200 text-black"
              )}
              style={{ fontWeight: 700 }}
            >
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              onClick={closeMenu}
              className={clsx(
                "block px-4 py-4 transition-colors no-underline font-bold border-b",
                isDarkMode
                  ? "hover:bg-gray-700 border-gray-700 text-white"
                  : "hover:bg-gray-50 border-gray-200 text-black"
              )}
              style={{ fontWeight: 700 }}
            >
              {t("about")}
            </Link>
          </li>
          <li>
            <Link
              href="/#competitions"
              onClick={closeMenu}
              className={clsx(
                "block px-4 py-4 transition-colors no-underline font-bold border-b",
                isDarkMode
                  ? "hover:bg-gray-700 border-gray-700 text-white"
                  : "hover:bg-gray-50 border-gray-200 text-black"
              )}
              style={{ fontWeight: 700 }}
            >
              {t("competitions")}
            </Link>
          </li>
          <li>
            <Link
              href="/#work"
              onClick={closeMenu}
              className={clsx(
                "block px-4 py-4 transition-colors no-underline font-bold border-b",
                isDarkMode
                  ? "hover:bg-gray-700 border-gray-700 text-white"
                  : "hover:bg-gray-50 border-gray-200 text-black"
              )}
              style={{ fontWeight: 700 }}
            >
              {t("work")}
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/dan_mitka"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className={clsx(
                "flex items-center px-4 py-4 transition-colors no-underline font-bold",
                isDarkMode
                  ? "hover:bg-gray-700 text-white"
                  : "hover:bg-gray-50 text-black"
              )}
              style={{ fontWeight: 700 }}
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
