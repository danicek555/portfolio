"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import clsx from "clsx";

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
                      "rounded-3xl p-8 md:p-16 transition-all duration-500",
                      isDarkMode
                        ? "bg-gray-800 group-hover:bg-gray-700"
                        : "bg-gray-100 group-hover:bg-gray-150"
                    )}
                  >
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
                    "rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform border",
                    isDarkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-100"
                  )}
                >
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
