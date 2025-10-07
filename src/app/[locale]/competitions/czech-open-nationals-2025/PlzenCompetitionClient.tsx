"use client";

import Image from "next/image";
import { MapPin, Calendar, Trophy, Target } from "lucide-react";
import { useTheme } from "../../../../components/ThemeProvider";
import { useTranslations, useLocale } from "next-intl";
import clsx from "clsx";
import VideoGallery from "../../../../components/VideoGallery";

export default function PlzenCompetitionClient() {
  const { isDarkMode } = useTheme();
  const locale = useLocale();

  const events = [
    {
      event: "200m Prsa",
      eventEn: "200m Breaststroke",
      result: "Finále",
      resultEn: "Final",
      time: "2:27.11",
      description:
        "Výborný výkon v technické disciplíně prsou. Rozplavby: 2:29.37, finále: 2:27.11",
      descriptionEn:
        "Excellent performance in the technical breaststroke discipline. Heats: 2:29.37, final: 2:27.11",
    },
    {
      event: "100m Motýlek",
      eventEn: "100m Butterfly",
      result: "Rozplavby",
      resultEn: "Heats",
      time: "0:59.23",
      description:
        "Rychlý výkon v motýlku pod 1:00. Technicky náročná disciplína vyžadující sílu a koordinaci.",
      descriptionEn:
        "Fast performance in butterfly under 1:00. Technically demanding discipline requiring strength and coordination.",
    },
    {
      event: "200m Polohový závod",
      eventEn: "200m Individual Medley",
      result: "Finále",
      resultEn: "Final",
      time: "2:12.66",
      description:
        "Konzistentní výkon ve všech čtyřech stylech. Rozplavby: 2:12.24, finále: 2:12.66",
      descriptionEn:
        "Consistent performance in all four strokes. Heats: 2:12.24, final: 2:12.66",
    },
    {
      event: "400m Polohový závod",
      eventEn: "400m Individual Medley",
      result: "Finále",
      resultEn: "Final",
      time: "4:47.51",
      description:
        "Nejnáročnější disciplína s výborným finálním časem. Rozplavby: 4:52.28, finále: 4:47.51",
      descriptionEn:
        "Most demanding discipline with excellent final time. Heats: 4:52.28, final: 4:47.51",
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
            src="/mcrplzen252.jpg"
            alt="Plzen Regional Swimming Championship 2025"
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
              {locale === "en" ? "Czech Nationals" : "Mistrovství ČR"}
            </span>
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {locale === "en" ? "3rd Round CP" : "3. kolo ČP"}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            {locale === "en"
              ? "Czech Open Nationals 2025"
              : "Mistrovství ČR 2025 OPEN"}
          </h1>

          <div
            className={clsx(
              "rounded-2xl p-8 inline-flex items-center gap-6 shadow-2xl transition-colors duration-300",
              isDarkMode
                ? "bg-gray-800/95 text-white"
                : "bg-white/95 text-gray-900"
            )}
          >
            <div className="text-6xl">🏊‍♂️</div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">
                {locale === "en" ? "Czech Championship" : "České mistrovství"}
              </h3>
              <p
                className={clsx(
                  "text-lg transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                )}
              >
                {locale === "en"
                  ? "3rd Round Czech Cup in Plzen"
                  : "3. kolo Českého poháru v Plzni"}
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
                  {locale === "en" ? "Location" : "Místo"}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {locale === "en"
                    ? "Plzen, Czech Republic"
                    : "Plzeň, Česká republika"}
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
                  {locale === "en" ? "Date" : "Datum"}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  15.05.2025 - 18.05.2025
                </p>
              </div>
            </div>
            <div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
            >
              <Trophy className="w-8 h-8 text-blue-600" />
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  {locale === "en" ? "Level" : "Úroveň"}
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {locale === "en"
                    ? "Czech Open Nationals"
                    : "Mistrovství ČR OPEN"}
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
                {locale === "en"
                  ? "Czech Open Nationals 2025"
                  : "Mistrovství ČR 2025 OPEN"}
              </h2>
              <p
                className={clsx(
                  "text-lg mb-6 leading-relaxed transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                {locale === "en"
                  ? "The Czech Open Nationals 2025 in Plzen represented the third round of the Czech Cup and brought excellent performances in all disciplines. The competition was held in a modern swimming facility in Plzen with participation from the best swimmers from across the Czech Republic."
                  : "Mistrovství ČR 2025 OPEN v Plzni představovalo třetí kolo Českého poháru a přineslo výborné výkony ve všech disciplínách. Soutěž se konala v moderním plaveckém areálu v Plzni s účastí nejlepších plavců z celé České republiky."}
              </p>
              <div className="border-l-4 border-blue-600 pl-6 mb-6">
                <p
                  className={clsx(
                    "text-xl font-medium leading-relaxed transition-colors duration-300",
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  )}
                >
                  {locale === "en"
                    ? "Outstanding performance in the 400m individual medley with a time of 4:47.51 in the final showed excellent fitness and technical preparation in all four strokes."
                    : "Vynikající výkon v 400m polohovém závodu s časem 4:47.51 ve finále ukázal výbornou kondici a technickou připravenost ve všech čtyřech stylech."}
                </p>
              </div>
              <p
                className={clsx(
                  "text-lg leading-relaxed transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                {locale === "en"
                  ? "Participation in this championship represented an important step in the 2025 season and showed consistent performances across all swimming disciplines."
                  : "Účast na tomto mistrovství představovala důležitý krok v sezóně 2025 a ukázala konzistentní výkony napříč všemi plaveckými disciplínami."}
              </p>
            </div>
            <div className="relative">
              <Image
                src="/mcrplzen251.jpg"
                alt="Plzen swimming facility"
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
              {locale === "en"
                ? "Championship Results"
                : "Výsledky mistrovství"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={clsx(
                    "p-6 rounded-xl border transition-all duration-300 hover:shadow-lg",
                    isDarkMode
                      ? "bg-gradient-to-br from-blue-900/30 to-green-900/30 border-gray-700"
                      : "bg-gradient-to-br from-blue-50 to-green-50 border-gray-200"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-blue-600 mt-1" />
                    <div className="flex-1">
                      <h3
                        className={clsx(
                          "font-bold mb-2 transition-colors duration-300",
                          isDarkMode ? "text-white" : "text-gray-900"
                        )}
                      >
                        {locale === "en" ? event.eventEn : event.event}
                        <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {locale === "en" ? "50m pool" : "50m bazén"}
                        </span>
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                          {locale === "en" ? event.resultEn : event.result}
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
                        {locale === "en"
                          ? event.descriptionEn
                          : event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <VideoGallery
            title="Swimming Competition Videos"
            subtitle="Experience my competitive swimming journey"
            videos={[
              {
                id: "1",
                videoId: "Nm6LNRUCTCM",
                title: "Czech National Championship",
                category: "Competition",
              },
              // Add more videos...
            ]}
            columns={2}
          />
          {/* Championship Highlights */}
          <div className="mt-16 text-center">
            <h2
              className={clsx(
                "text-4xl font-bold mb-8 transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              {locale === "en"
                ? "Championship Experience"
                : "Zkušenost z mistrovství"}
            </h2>
            <div
              className={clsx(
                "rounded-2xl p-8 transition-colors duration-300",
                isDarkMode
                  ? "bg-gradient-to-r from-blue-900/30 to-green-900/30"
                  : "bg-gradient-to-r from-blue-50 to-green-50"
              )}
            >
              <div className="max-w-3xl mx-auto">
                <p
                  className={clsx(
                    "text-xl leading-relaxed mb-6 transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  {locale === "en"
                    ? "The Czech Open Nationals 2025 in Plzen provided an excellent platform for developing competitive skills and gaining valuable experience in a supportive yet competitive environment."
                    : "Mistrovství ČR 2025 OPEN v Plzni poskytlo vynikající platformu pro rozvoj konkurenčních dovedností a získání cenných zkušeností v podporujícím, ale zároveň konkurenčním prostředí."}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Trophy className="w-8 h-8 text-blue-600" />
                  <span
                    className={clsx(
                      "text-lg font-semibold transition-colors duration-300",
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    )}
                  >
                    {locale === "en"
                      ? "National Level Development"
                      : "Rozvoj na národní úrovni"}
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
