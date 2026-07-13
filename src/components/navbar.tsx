"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence, animate } from "framer-motion";
import clsx from "clsx";
import { useState } from "react";

/** Height of the sticky navbar used as scroll offset. */
const SCROLL_OFFSET = 72;

type NavItem = { key: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { key: "home", href: "/#home" },
  { key: "about", href: "/#about" },
  { key: "competitions", href: "/#competitions" },
  { key: "progression", href: "/#progression" },
  { key: "work", href: "/#work" },
  { key: "blog", href: "/blog" },
];

const Navbar: React.FC = () => {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /**
   * Smooth-scroll to the section when it exists on the current page;
   * otherwise fall back to regular navigation (e.g. from /competitions/*).
   */
  const handleAnchorClick =
    (href: string, afterClick?: () => void) =>
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      afterClick?.();
      if (!href.startsWith("/#")) return;
      const target = document.getElementById(href.slice(2));
      if (!target) return;
      event.preventDefault();
      const top =
        target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      animate(window.scrollY, Math.max(top, 0), {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (value) => window.scrollTo(0, value),
      });
      window.history.pushState(null, "", href);
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
        onMouseLeave={() => setHovered(null)}
        className={clsx(
          "hidden md:flex items-center space-x-8 font-montserrat text-lg",
          isDarkMode ? "text-white" : "text-black"
        )}
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.key} className="relative">
            <Link
              href={item.href}
              onClick={handleAnchorClick(item.href)}
              onMouseEnter={() => setHovered(item.key)}
              onFocus={() => setHovered(item.key)}
              className={clsx(
                "relative inline-block pb-1 transition-colors no-underline font-bold",
                isDarkMode ? "hover:text-gray-300" : "hover:text-gray-600"
              )}
              style={{ fontWeight: 700 }}
            >
              {t(item.key)}
              <AnimatePresence>
                {hovered === item.key && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-green-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 30,
                    }}
                  />
                )}
              </AnimatePresence>
            </Link>
          </li>
        ))}
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
        <li>
          <a
            href="https://github.com/danicek555"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
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
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </li>
      </ul>

      {/* Mobile hamburger menu button */}
      <button
        onClick={toggleMenu}
        className={clsx(
          "md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 transition-all duration-500",
          isDarkMode ? "text-white" : "text-black"
        )}
      >
        <span
          className={clsx(
            "block w-6 h-0.5 transition-all duration-500",
            isDarkMode ? "bg-white" : "bg-black",
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          )}
        />
        <span
          className={clsx(
            "block w-6 h-0.5 transition-all duration-500",
            isDarkMode ? "bg-white" : "bg-black",
            isMenuOpen ? "opacity-0" : ""
          )}
        />
        <span
          className={clsx(
            "block w-6 h-0.5 transition-all duration-500",
            isDarkMode ? "bg-white" : "bg-black",
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          )}
        />
      </button>

      {/* Mobile menu */}
      <div
        className={clsx(
          "md:hidden absolute top-full left-0 w-full transition-all duration-500 ease-in-out",
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200",
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        )}
      >
        <ul className="flex flex-col space-y-0 font-montserrat">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                onClick={handleAnchorClick(item.href, closeMenu)}
                className={clsx(
                  "block px-4 py-4 transition-colors no-underline font-bold border-b",
                  isDarkMode
                    ? "hover:bg-gray-700 border-gray-700 text-white"
                    : "hover:bg-gray-50 border-gray-200 text-black"
                )}
                style={{ fontWeight: 700 }}
              >
                {t(item.key)}
              </Link>
            </li>
          ))}
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
          <li>
            <a
              href="https://github.com/danicek555"
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
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
