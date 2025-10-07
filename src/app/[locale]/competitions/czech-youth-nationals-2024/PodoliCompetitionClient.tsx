"use client";

import Image from "next/image";
import { MapPin, Calendar, Trophy, Target } from "lucide-react";
import { useTheme } from "../../../../components/ThemeProvider";
import { useTranslations } from "next-intl";
import clsx from "clsx";

export default function PodoliCompetitionClient() {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Podoli");

  const events = t.raw("events.eventsList") as Array<{
    event: string;
    result: string;
    time: string;
    description: string;
  }>;

  return (
    <div
      className={clsx(
        "min-h-screen transition-colors duration-300",
        isDarkMode ? "bg-gray-900" : "bg-white"
      )}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/podoliFoto.jpg"
            alt="Czech National Swimming Championship 2024"
            fill
            className="object-cover"
            priority
          />
          <div
            className={clsx(
              "absolute inset-0 transition-all duration-300",
              isDarkMode ? "bg-black/70" : "bg-black/50"
            )}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              {t("hero.badge1")}
            </span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {t("hero.badge2")}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            {t("hero.title")}
            <span className="block text-red-400">{t("hero.subtitle")}</span>
          </h1>

          <div
            className={clsx(
              "rounded-2xl p-8 inline-flex items-center gap-6 shadow-2xl transition-colors duration-300",
              isDarkMode
                ? "bg-gray-800/95 text-white"
                : "bg-white/95 text-gray-900"
            )}
          >
            <div className="text-6xl">🇨🇿</div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">
                {t("hero.eventTitle")}
              </h3>
              <p
                className={clsx(
                  "text-lg transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                )}
              >
                {t("hero.eventDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Details */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Event Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
            >
              <MapPin className="w-8 h-8 text-red-600" />
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {t("info.location")}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {t("info.locationValue")}
                </p>
              </div>
            </div>
            <div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
            >
              <Calendar className="w-8 h-8 text-red-600" />
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {t("info.date")}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {t("info.dateValue")}
                </p>
              </div>
            </div>
            <div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
            >
              <Trophy className="w-8 h-8 text-red-600" />
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {t("info.level")}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {t("info.levelValue")}
                </p>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2
                className={clsx(
                  "text-4xl font-bold mb-6 transition-colors duration-300",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}
              >
                {t("story.title")}
              </h2>
              <p
                className={clsx(
                  "text-lg mb-6 leading-relaxed transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                {t("story.paragraph1")}
              </p>
              <div className="border-l-4 border-red-600 pl-6 mb-6">
                <p
                  className={clsx(
                    "text-xl font-medium leading-relaxed transition-colors duration-300",
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  )}
                >
                  {t("story.highlight")}
                </p>
              </div>
              <p
                className={clsx(
                  "text-lg leading-relaxed transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                {t("story.paragraph2")}
              </p>
            </div>
            <div className="relative">
              <Image
                src="/podoliFoto.jpg"
                alt="Podolí swimming complex"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Competition Events */}
          <div>
            <h2
              className={clsx(
                "text-4xl font-bold mb-8 text-center transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              {t("events.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={clsx(
                    "p-6 rounded-xl border transition-all duration-300 hover:shadow-lg",
                    isDarkMode
                      ? "bg-gradient-to-br from-red-900/30 to-blue-900/30 border-gray-700"
                      : "bg-gradient-to-br from-red-50 to-blue-50 border-gray-200"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-red-600 mt-1" />
                    <div className="flex-1">
                      <h3
                        className={clsx(
                          "font-bold mb-2 transition-colors duration-300",
                          isDarkMode ? "text-white" : "text-gray-900"
                        )}
                      >
                        {event.event}
                        <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          50m bazén
                        </span>
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                          {event.result}
                        </span>
                        <span
                          className={clsx(
                            "text-sm transition-colors duration-300",
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          )}
                        >
                          {event.time}
                        </span>
                      </div>
                      <p
                        className={clsx(
                          "text-sm transition-colors duration-300",
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        )}
                      >
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Championship Highlights */}
          <div className="mt-16 text-center">
            <h2
              className={clsx(
                "text-4xl font-bold mb-8 transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              {t("highlights.title")}
            </h2>
            <div
              className={clsx(
                "rounded-2xl p-8 transition-colors duration-300",
                isDarkMode
                  ? "bg-gradient-to-r from-red-900/30 to-blue-900/30"
                  : "bg-gradient-to-r from-red-50 to-blue-50"
              )}
            >
              <div className="max-w-3xl mx-auto">
                <p
                  className={clsx(
                    "text-xl leading-relaxed mb-6 transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  {t("highlights.description")}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Trophy className="w-8 h-8 text-red-600" />
                  <span
                    className={clsx(
                      "text-lg font-semibold transition-colors duration-300",
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    )}
                  >
                    {t("highlights.experience")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
