"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  img: string;
  type: "internal" | "external";
  featured?: boolean;
};

const Projects: React.FC = () => {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Projects");
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(
    null
  );

  const projectTips = t.raw("projectTips") as string[][];

  const getProjectTip = (projectIndex: number) => {
    if (!projectTips || projectTips.length === 0) {
      return "💡 Check out this project for more details!";
    }
    // Map project indices to tip arrays
    // projects[0] = "My Love Website" -> projectTips[0] (array of 4 tips)
    // projects[1] = "BETA! Strunzova Pila" -> projectTips[1] (array of 4 tips)
    // projects[2] = "Automatic Bot" -> projectTips[2] (array of 4 tips)
    // projects[3] = "BETA! Duocards" -> projectTips[3] (array of 4 tips)
    const projectTipArray = projectTips[projectIndex % projectTips.length];
    if (!projectTipArray || projectTipArray.length === 0) {
      return "💡 Check out this project for more details!";
    }
    // Get a random tip from this project's 4 tips
    const randomTipIndex = Math.floor(Math.random() * projectTipArray.length);
    return projectTipArray[randomTipIndex];
  };

  const handleMouseEnter = (projectIndex: number) => {
    setHoveredProjectIndex(projectIndex);
  };

  const handleMouseLeave = () => {
    setHoveredProjectIndex(null);
  };

  const projects: Project[] = [
    {
      title: t("projects.1.title"),
      description: t("projects.1.description"),
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      link: "https://strunzovapila.vercel.app",
      img: "/strunzovapilamockup2.png",
      type: "external",
      featured: true,
    },
    {
      title: t("projects.3.title"),
      description: t("projects.3.description"),
      technologies: ["React", "Prisma SQL", "Resend", "Bcrypt"],
      link: "https://duocards-five.vercel.app/",
      img: "/macbook_duocards.png",
      type: "external",
      featured: true,
    },
    {
      title: t("projects.2.title"),
      description: t("projects.2.description"),
      technologies: ["NodeJS", "Javascript", "Puppeteer", "ReCaptcha"],
      link: "",
      img: "/macbook_autobot.png",
      type: "external",
      featured: true,
    },
    {
      title: t("projects.0.title"),
      description: t("projects.0.description"),
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://daniel.mitka.cz/terka/",
      img: "/lovewebsitemockup2.png",
      type: "external",
      featured: true,
    },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section
      id="work"
      className={clsx(
        "py-16 px-8 transition-colors duration-300",
        isDarkMode ? "bg-gray-900" : "bg-white"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-green-500 text-sm font-semibold uppercase tracking-wider mb-4"
          >
            {t("badge")}
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className={clsx(
              "text-4xl md:text-5xl font-bold mb-8 transition-colors duration-300",
              isDarkMode ? "text-white" : "text-gray-800"
            )}
          >
            {t("title")}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-12"
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={fadeInUp}>
              {project.featured ? (
                // Featured Project Design
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={clsx(
                      "rounded-3xl p-8 md:p-16 transition-all duration-500 relative",
                      isDarkMode
                        ? "bg-gray-800 group-hover:bg-gray-700"
                        : "bg-gray-100 group-hover:bg-gray-150"
                    )}
                  >
                    {/* Question Mark Help Icon for this project */}
                    <div className="absolute bottom-4 right-4 z-10">
                      <div className="relative">
                        {/* Tooltip */}
                        {hoveredProjectIndex === i && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={clsx(
                              "absolute bottom-12 right-0 w-72 p-4 rounded-xl shadow-2xl border backdrop-blur-sm",
                              isDarkMode
                                ? "bg-gray-800/95 border-gray-600 text-white"
                                : "bg-white/95 border-gray-200 text-gray-800"
                            )}
                          >
                            <div className="text-sm font-medium leading-relaxed">
                              {getProjectTip(i)}
                            </div>
                            {/* Arrow pointing down */}
                            <div
                              className={clsx(
                                "absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4",
                                isDarkMode
                                  ? "border-l-transparent border-r-transparent border-t-gray-800/95"
                                  : "border-l-transparent border-r-transparent border-t-white/95"
                              )}
                            />
                          </motion.div>
                        )}

                        {/* Question Mark Icon */}
                        <motion.button
                          onMouseEnter={() => handleMouseEnter(i)}
                          onMouseLeave={handleMouseLeave}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          className="text-green-500 hover:text-green-400"
                          aria-label="Helpful tips about this project"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M396.138,85.295c-13.172-25.037-33.795-45.898-59.342-61.03C311.26,9.2,280.435,0.001,246.98,0.001 c-41.238-0.102-75.5,10.642-101.359,25.521c-25.962,14.826-37.156,32.088-37.156,32.088c-4.363,3.786-6.824,9.294-6.721,15.056 c0.118,5.77,2.775,11.186,7.273,14.784l35.933,28.78c7.324,5.864,17.806,5.644,24.875-0.518c0,0,4.414-7.978,18.247-15.88 c13.91-7.85,31.945-14.173,58.908-14.258c23.517-0.051,44.022,8.725,58.016,20.717c6.952,5.941,12.145,12.594,15.328,18.68 c3.208,6.136,4.379,11.5,4.363,15.574c-0.068,13.766-2.742,22.77-6.603,30.442c-2.945,5.729-6.789,10.813-11.738,15.744 c-7.384,7.384-17.398,14.207-28.634,20.479c-11.245,6.348-23.365,11.932-35.612,18.68c-13.978,7.74-28.77,18.858-39.701,35.544 c-5.449,8.249-9.71,17.686-12.416,27.641c-2.742,9.964-3.98,20.412-3.98,31.071c0,11.372,0,20.708,0,20.708 c0,10.719,8.69,19.41,19.41,19.41h46.762c10.719,0,19.41-8.691,19.41-19.41c0,0,0-9.336,0-20.708c0-4.107,0.467-6.755,0.917-8.436 c0.773-2.512,1.206-3.14,2.47-4.668c1.29-1.452,3.895-3.674,8.698-6.331c7.019-3.946,18.298-9.276,31.07-16.176 c19.121-10.456,42.367-24.646,61.972-48.062c9.752-11.686,18.374-25.758,24.323-41.968c6.001-16.21,9.242-34.431,9.226-53.96 C410.243,120.761,404.879,101.971,396.138,85.295z" />
                            <path d="M228.809,406.44c-29.152,0-52.788,23.644-52.788,52.788c0,29.136,23.637,52.772,52.788,52.772 c29.136,0,52.763-23.636,52.763-52.772C281.572,430.084,257.945,406.44,228.809,406.44z" />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                      {/* Project Info */}
                      <motion.div
                        variants={slideInLeft}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="flex-1 text-center lg:text-left"
                      >
                        <h3
                          className={clsx(
                            "text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300",
                            isDarkMode ? "text-white" : "text-gray-900"
                          )}
                        >
                          {project.title}
                        </h3>
                        {project.title.includes("BETA!") && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={clsx(
                              "mb-6 p-4 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20",
                              isDarkMode ? "text-yellow-200" : "text-yellow-800"
                            )}
                          >
                            <div className="flex items-center">
                              <svg
                                className="w-5 h-5 mr-2 flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="font-medium text-sm">
                                {t("betaWarning")}
                              </span>
                            </div>
                          </motion.div>
                        )}
                        <p
                          className={clsx(
                            "text-xl mb-8 leading-relaxed max-w-2xl transition-colors duration-300",
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          )}
                        >
                          {project.description}
                        </p>

                        {/* Technology Tags */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
                        >
                          {project.technologies.map((tech, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: 0.5 + index * 0.1,
                                duration: 0.4,
                              }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.1 }}
                              className={clsx(
                                "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                                isDarkMode
                                  ? "bg-gray-700 text-gray-300 group-hover:bg-gray-600"
                                  : "bg-gray-200 text-gray-700 group-hover:bg-gray-300"
                              )}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="inline-flex items-center text-green-600 font-semibold text-lg group-hover:text-green-700 transition-colors duration-300"
                        >
                          {t("visitWebsite")}
                          <motion.svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            whileHover={{ x: 4, y: -2 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 20,
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </motion.svg>
                        </motion.div>
                      </motion.div>

                      {/* MacBook Image */}
                      <motion.div
                        variants={slideInRight}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="flex-1 max-w-2xl"
                      >
                        <motion.div
                          whileHover={{
                            scale: 1.05,
                            rotateY: 5,
                            rotateX: 5,
                          }}
                          transition={{ duration: 0.4 }}
                          className="relative"
                        >
                          <Image
                            src={project.img}
                            alt={project.title}
                            width={800}
                            height={500}
                            className="w-full h-auto object-contain drop-shadow-2xl"
                            priority
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.a>
              ) : (
                // Regular Project Card for future projects
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className={clsx(
                    "rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform border relative",
                    isDarkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-100"
                  )}
                >
                  {/* Question Mark Help Icon for this project */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <div className="relative">
                      {/* Tooltip */}
                      {hoveredProjectIndex === i && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className={clsx(
                            "absolute bottom-10 right-0 w-64 p-3 rounded-xl shadow-2xl border backdrop-blur-sm",
                            isDarkMode
                              ? "bg-gray-800/95 border-gray-600 text-white"
                              : "bg-white/95 border-gray-200 text-gray-800"
                          )}
                        >
                          <div className="text-xs font-medium leading-relaxed">
                            {getProjectTip(i)}
                          </div>
                          {/* Arrow pointing down */}
                          <div
                            className={clsx(
                              "absolute top-full right-4 w-0 h-0 border-l-3 border-r-3 border-t-3",
                              isDarkMode
                                ? "border-l-transparent border-r-transparent border-t-gray-800/95"
                                : "border-l-transparent border-r-transparent border-t-white/95"
                            )}
                          />
                        </motion.div>
                      )}

                      {/* Question Mark Icon */}
                      <motion.button
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={handleMouseLeave}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="text-green-500 hover:text-green-400"
                        aria-label="Helpful tips about this project"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M396.138,85.295c-13.172-25.037-33.795-45.898-59.342-61.03C311.26,9.2,280.435,0.001,246.98,0.001 c-41.238-0.102-75.5,10.642-101.359,25.521c-25.962,14.826-37.156,32.088-37.156,32.088c-4.363,3.786-6.824,9.294-6.721,15.056 c0.118,5.77,2.775,11.186,7.273,14.784l35.933,28.78c7.324,5.864,17.806,5.644,24.875-0.518c0,0,4.414-7.978,18.247-15.88 c13.91-7.85,31.945-14.173,58.908-14.258c23.517-0.051,44.022,8.725,58.016,20.717c6.952,5.941,12.145,12.594,15.328,18.68 c3.208,6.136,4.379,11.5,4.363,15.574c-0.068,13.766-2.742,22.77-6.603,30.442c-2.945,5.729-6.789,10.813-11.738,15.744 c-7.384,7.384-17.398,14.207-28.634,20.479c-11.245,6.348-23.365,11.932-35.612,18.68c-13.978,7.74-28.77,18.858-39.701,35.544 c-5.449,8.249-9.71,17.686-12.416,27.641c-2.742,9.964-3.98,20.412-3.98,31.071c0,11.372,0,20.708,0,20.708 c0,10.719,8.69,19.41,19.41,19.41h46.762c10.719,0,19.41-8.691,19.41-19.41c0,0,0-9.336,0-20.708c0-4.107,0.467-6.755,0.917-8.436 c0.773-2.512,1.206-3.14,2.47-4.668c1.29-1.452,3.895-3.674,8.698-6.331c7.019-3.946,18.298-9.276,31.07-16.176 c19.121-10.456,42.367-24.646,61.972-48.062c9.752-11.686,18.374-25.758,24.323-41.968c6.001-16.21,9.242-34.431,9.226-53.96 C410.243,120.761,404.879,101.971,396.138,85.295z" />
                          <path d="M228.809,406.44c-29.152,0-52.788,23.644-52.788,52.788c0,29.136,23.637,52.772,52.788,52.772 c29.136,0,52.763-23.636,52.763-52.772C281.572,430.084,257.945,406.44,228.809,406.44z" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                          className={clsx(
                            "px-2 py-1 rounded text-xs font-medium transition-colors duration-300",
                            isDarkMode
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-100 text-gray-700"
                          )}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <h3
                      className={clsx(
                        "text-xl font-bold mb-3 transition-colors duration-300",
                        isDarkMode ? "text-white" : "text-gray-800"
                      )}
                    >
                      {project.title}
                    </h3>
                    {project.title.includes("BETA!") && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className={clsx(
                          "mb-4 p-3 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20",
                          isDarkMode ? "text-yellow-200" : "text-yellow-800"
                        )}
                      >
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="font-medium text-xs">
                            {t("betaWarning")}
                          </span>
                        </div>
                      </motion.div>
                    )}
                    <p
                      className={clsx(
                        "mb-4 leading-relaxed transition-colors duration-300",
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      )}
                    >
                      {project.description}
                    </p>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                    >
                      {project.type === "internal" ? (
                        <Link
                          href={project.link}
                          className="text-green-500 hover:text-green-600 font-medium inline-flex items-center"
                        >
                          {t("viewProject")}
                        </Link>
                      ) : (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-500 hover:text-green-600 font-medium inline-flex items-center"
                        >
                          {t("viewProject")}
                        </a>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
