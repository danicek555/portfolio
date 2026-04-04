"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Play, ExternalLink, Clock, Eye, Loader2 } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import clsx from "clsx";
import Image from "next/image";

interface VideoPlayerProps {
  videoId: string;
  title: string;
  description?: string;
  duration?: string;
  views?: string;
  thumbnail?: string;
  className?: string;
  priority?: boolean; // For above-the-fold videos
}

export default function VideoPlayer({
  videoId,
  title,
  description,
  duration,
  views,
  thumbnail,
  className = "",
  priority = false,
}: VideoPlayerProps) {
  const { isDarkMode } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  // Use smaller, faster-loading thumbnails by default
  const getThumbnailUrl = (quality: "medium" | "high" | "max" = "high") => {
    if (thumbnail) return thumbnail;

    const qualities = {
      medium: "mqdefault", // 320x180
      high: "hqdefault", // 480x360
      max: "maxresdefault", // 1280x720
    };

    return `https://img.youtube.com/vi/${videoId}/${qualities[quality]}.jpg`;
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!containerRef.current || priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px", // Start loading 50px before coming into view
        threshold: 0.1,
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [priority]);

  const handlePlayClick = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handleOpenInYouTube = useCallback(() => {
    window.open(youtubeUrl, "_blank");
  }, [youtubeUrl]);

  const handleImageLoad = useCallback(() => {
    setThumbnailLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setThumbnailLoaded(true);
  }, []);

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="absolute inset-0 animate-pulse">
      <div
        className={clsx(
          "w-full h-full",
          isDarkMode ? "bg-gray-700" : "bg-gray-300"
        )}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-gray-400 animate-spin" />
      </div>
    </div>
  );

  // Optimized YouTube iframe with loading
  const YouTubeEmbed = () => (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&loading=lazy`}
      className="w-full h-full"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      loading="lazy"
      title={title}
    />
  );

  return (
    <div className={clsx("w-full", className)} ref={containerRef}>
      <div
        className={clsx(
          "rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-3xl",
          isDarkMode ? "bg-gray-800" : "bg-white"
        )}
      >
        {/* Video Container */}
        <div className="relative aspect-video bg-black">
          {!isPlaying ? (
            // Thumbnail with Play Button
            <div className="relative w-full h-full group cursor-pointer">
              {/* Skeleton loader while not in view or loading */}
              {(!isInView || !thumbnailLoaded) && <SkeletonLoader />}

              {/* Thumbnail Image - only load when in view */}
              {isInView && (
                <Image
                  src={
                    imageError
                      ? getThumbnailUrl("max")
                      : getThumbnailUrl("high")
                  }
                  alt={title}
                  fill
                  className={clsx(
                    "object-cover transition-all duration-500",
                    thumbnailLoaded
                      ? "opacity-100 group-hover:scale-105"
                      : "opacity-0"
                  )}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  priority={priority}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

              {/* Play Button - only show when thumbnail is loaded */}
              {thumbnailLoaded && (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={handlePlayClick}
                >
                  <div className="bg-red-600 hover:bg-red-700 text-white rounded-full p-6 transition-all duration-300 transform group-hover:scale-110 shadow-2xl hover:shadow-red-500/25">
                    <Play className="w-12 h-12 ml-1" fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Duration Badge */}
              {duration && thumbnailLoaded && (
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm">
                  {duration}
                </div>
              )}
            </div>
          ) : (
            // YouTube Embed - lazy loaded
            <YouTubeEmbed />
          )}
        </div>

        {/* Video Info */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3
              className={clsx(
                "text-xl font-bold leading-tight transition-colors duration-300 line-clamp-2",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              {title}
            </h3>
            <button
              onClick={handleOpenInYouTube}
              className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 flex-shrink-0",
                isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              )}
              aria-label={`Open ${title} in YouTube`}
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">YouTube</span>
            </button>
          </div>

          {/* Video Stats */}
          {(views || duration) && (
            <div className="flex items-center gap-4 mb-4">
              {views && (
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-red-600" />
                  <span
                    className={clsx(
                      "text-sm transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {views} views
                  </span>
                </div>
              )}
              {duration && !isPlaying && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-600" />
                  <span
                    className={clsx(
                      "text-sm transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {duration}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          {description && (
            <p
              className={clsx(
                "text-sm leading-relaxed transition-colors duration-300 line-clamp-3",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
