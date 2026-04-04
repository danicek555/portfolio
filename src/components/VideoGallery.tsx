"use client";

import { useTheme } from "./ThemeProvider";
import VideoPlayer from "./VideoPlayer";
import clsx from "clsx";

interface Video {
  id: string;
  videoId: string;
  title: string;
  description?: string;
  duration?: string;
  views?: string;
  thumbnail?: string;
  category?: string;
}

interface VideoGalleryProps {
  videos: Video[];
  title: string;
  subtitle?: string;
  columns?: 1 | 2 | 3;
  className?: string;
}

export default function VideoGallery({
  videos,
  title,
  subtitle,
  columns = 2,
  className = "",
}: VideoGalleryProps) {
  const { isDarkMode } = useTheme();

  const gridCols = {
    1: "grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <section className={clsx("py-20 px-6", className)}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={clsx(
              "text-4xl font-bold mb-4 transition-colors duration-300",
              isDarkMode ? "text-white" : "text-gray-900"
            )}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={clsx(
                "text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Video Grid */}
        <div className={clsx("grid gap-8", gridCols[columns])}>
          {videos.map((video) => (
            <div key={video.id} className="group">
              {video.category && (
                <div className="mb-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
                    {video.category}
                  </span>
                </div>
              )}
              <VideoPlayer
                videoId={video.videoId}
                title={video.title}
                description={video.description}
                duration={video.duration}
                views={video.views}
                thumbnail={video.thumbnail}
                className="transform transition-all duration-300 group-hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div
            className={clsx(
              "inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105",
              isDarkMode
                ? "bg-gradient-to-r from-red-600 to-red-700 text-white"
                : "bg-gradient-to-r from-red-500 to-red-600 text-white"
            )}
          >
            <span className="font-medium">More videos coming soon</span>
            <span className="text-xl">🎬</span>
          </div>
        </div>
      </div>
    </section>
  );
}
