"use client";

import Image from "next/image";
import { Award, MapPin, Calendar, Users } from "lucide-react";
import { useTheme } from "../../../../components/ThemeProvider";
import { useTranslations } from "next-intl";
import clsx from "clsx";

export default function AustraliaCompetitionClient() {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Australia");

  const achievements = [
    {
      position: t("results.achievements.0.position"),
      event: t("results.achievements.0.event"),
      description: t("results.achievements.0.description"),
      highlight: true,
    },
    {
      position: t("results.achievements.1.position"),
      event: t("results.achievements.1.event"),
      description: t("results.achievements.1.description"),
    },
    {
      position: t("results.achievements.2.position"),
      event: t("results.achievements.2.event"),
      description: t("results.achievements.2.description"),
    },
    {
      position: t("results.achievements.3.position"),
      event: t("results.achievements.3.event"),
      description: t("results.achievements.3.description"),
    },
  ];

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
            src="/winPhoto.jpg"
            alt="Competition victory moment"
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
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              {t("hero.badge1")}
            </span>
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {t("hero.badge2")}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            {t("hero.title")}
            <span className="block text-yellow-400">{t("hero.subtitle")}</span>
          </h1>

          <div
            className={clsx(
              "rounded-2xl p-8 inline-flex items-center gap-6 shadow-2xl transition-colors duration-300",
              isDarkMode
                ? "bg-gray-800/95 text-white"
                : "bg-white/95 text-gray-900"
            )}
          >
            <div className="text-6xl">🥈</div>
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
                {t("hero.partner")}
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
              <MapPin className="w-8 h-8 text-blue-600" />
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
              <Calendar className="w-8 h-8 text-blue-600" />
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
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {t("info.category")}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {t("info.categoryValue")}
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
              <div className="border-l-4 border-blue-600 pl-6 mb-6">
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
                src="/fotkaWithAdam.jpg"
                alt="Daniel with Adam Pekař at the championship"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Achievements Grid */}
          <div>
            <h2
              className={clsx(
                "text-4xl font-bold mb-8 text-center transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              {t("results.title")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={clsx(
                    "p-6 rounded-xl transition-all duration-300 hover:scale-105",
                    achievement.highlight
                      ? isDarkMode
                        ? "bg-gradient-to-br from-yellow-900/50 to-yellow-800/50 border-2 border-yellow-500"
                        : "bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300"
                      : isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-50 hover:bg-gray-100"
                  )}
                >
                  <div className="text-center">
                    {achievement.highlight && (
                      <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    )}
                    <span
                      className={clsx(
                        "text-4xl font-bold block mb-3",
                        achievement.highlight
                          ? "text-yellow-600"
                          : "text-blue-600"
                      )}
                    >
                      {achievement.position}
                    </span>
                    <h3
                      className={clsx(
                        "font-bold mb-2 transition-colors duration-300",
                        isDarkMode ? "text-white" : "text-gray-900"
                      )}
                    >
                      {achievement.event}
                    </h3>
                    <p
                      className={clsx(
                        "text-sm transition-colors duration-300",
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      )}
                    >
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mt-16">
            <h2
              className={clsx(
                "text-4xl font-bold mb-8 text-center transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              {t("gallery.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src="/zapadPhoto.jpg"
                  alt="Championship moment 1"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src="/behaciPhoto_temp.jpg"
                  alt="Championship moment 2"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  style={{ objectPosition: "center 20%" }}
                  priority
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src="/ausFoto_temp.jpg"
                  alt="Championship team photo"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
