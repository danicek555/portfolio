"use client";

import Image from "next/image";
import { MapPin, Calendar, Trophy, Target } from "lucide-react";
import { useTheme } from "../../../../components/ThemeProvider";
import clsx from "clsx";
import VideoGallery from "../../../../components/VideoGallery";

export default function PlzenCompetitionClient() {
  const { isDarkMode } = useTheme();

  const events = [
    {
      event: "50m Freestyle",
      result: "Regional Best",
      time: "TBA",
      description: "Sprint freestyle performance",
    },
    {
      event: "100m Freestyle",
      result: "Top 3 Finish",
      time: "TBA",
      description: "Consistent middle distance swimming",
    },
    {
      event: "200m Individual Medley",
      result: "Competed",
      time: "TBA",
      description: "Versatile multi-stroke event",
    },
    {
      event: "50m Butterfly",
      result: "Regional Level",
      time: "TBA",
      description: "Technical butterfly execution",
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
            src="/plzen.jpg"
            alt="Plzen Regional Swimming Championship 2024"
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
              Regional Championship
            </span>
            <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Plzen
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Plzen Regional Swimming
            <span className="block text-blue-400">Championship 2024</span>
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
              <h3 className="text-2xl font-bold mb-2">Regional Excellence</h3>
              <p
                className={clsx(
                  "text-lg transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                )}
              >
                Competing in Western Bohemia
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
                  Location
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  Plzen, Czech Republic
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
                  Date
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  2024
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
                  Level
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  Regional Championship
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
                Regional Competition Excellence
              </h2>
              <p
                className={clsx(
                  "text-lg mb-6 leading-relaxed transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                The Plzen Regional Swimming Championship represents an important
                milestone in competitive swimming development, bringing together
                talented swimmers from across Western Bohemia to compete at the
                highest regional level.
              </p>
              <div className="border-l-4 border-blue-600 pl-6 mb-6">
                <p
                  className={clsx(
                    "text-xl font-medium leading-relaxed transition-colors duration-300",
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  )}
                >
                  Regional championships serve as crucial stepping stones for
                  national qualification, providing athletes with valuable
                  competitive experience and opportunities to achieve personal
                  bests.
                </p>
              </div>
              <p
                className={clsx(
                  "text-lg leading-relaxed transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                Daniel&apos;s participation in this championship demonstrates
                his commitment to competitive excellence and his journey through
                the Czech swimming system from regional to national level.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/plzen.jpg"
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
              Championship Events
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
                        {event.event}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
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
              Regional Championship Experience
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
                  The Plzen Regional Championship provided an excellent platform
                  for developing competitive skills and gaining valuable
                  experience in a supportive yet competitive environment.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Trophy className="w-8 h-8 text-blue-600" />
                  <span
                    className={clsx(
                      "text-lg font-semibold transition-colors duration-300",
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    )}
                  >
                    Regional Level Competition Development
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
