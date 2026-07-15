"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useTheme } from "./ThemeProvider";

type Project = {
  number: string;
  title: string;
  description: string;
  discipline: string;
  year: string;
  technologies: string[];
  link: string;
  image: string;
  secondaryImage?: string;
  imageClassName: string;
  emphasizedImage?: boolean;
  layout: "wide" | "compact";
  presentation: "screenshot" | "mockup" | "photo-pair";
  palette: {
    background: string;
    foreground: string;
    accent: string;
  };
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5 md:h-6 md:w-6"
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectCard({
  project,
  openLabel,
  reducedMotion,
  isDarkMode,
}: {
  project: Project;
  openLabel: string;
  reducedMotion: boolean;
  isDarkMode: boolean;
}) {
  const isWide = project.layout === "wide";

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${openLabel}: ${project.title}`}
      className={
        isWide
          ? "group block h-full lg:col-span-2"
          : "group block h-full"
      }
    >
      <motion.article
        className={[
          "relative isolate flex h-full overflow-hidden rounded-[1.75rem] md:rounded-[2.5rem]",
          "border shadow-[0_18px_52px_rgba(15,23,42,0.07)] transition-colors duration-300",
          isDarkMode
            ? "border-white/10 shadow-black/20 group-hover:border-white/20"
            : "border-gray-200/80 group-hover:border-gray-300",
          "focus-within:ring-2 focus-within:ring-[#c9ff48]",
          isWide
            ? "min-h-[34rem] flex-col lg:min-h-[42rem]"
            : "min-h-[37rem] flex-col md:min-h-[41rem]",
        ].join(" ")}
        style={{
          backgroundColor: isDarkMode ? "#1f2937" : project.palette.background,
          color: isDarkMode ? "#ffffff" : project.palette.foreground,
        }}
        initial={{ opacity: 0, y: reducedMotion ? 0 : 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage: `linear-gradient(to right, ${
              isDarkMode ? "rgba(255,255,255,.08)" : "rgba(15,23,42,.055)"
            } 1px, transparent 1px), linear-gradient(to bottom, ${
              isDarkMode ? "rgba(255,255,255,.08)" : "rgba(15,23,42,.055)"
            } 1px, transparent 1px)`,
            backgroundSize: isWide ? "48px 48px" : "36px 36px",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,.8), transparent 78%)",
          }}
        />

        <div
          aria-hidden="true"
          className={[
            "absolute rounded-full blur-3xl",
            isWide
              ? "-right-20 top-36 h-72 w-72 md:h-[28rem] md:w-[28rem]"
              : "-right-24 top-48 h-72 w-72",
          ].join(" ")}
          style={{ backgroundColor: project.palette.accent, opacity: 0.13 }}
        />

        <div
          className={[
            "relative z-20 grid gap-7 p-6 sm:p-8 md:p-10",
            isWide
              ? "md:grid-cols-[minmax(0,1.35fr)_minmax(16rem,.65fr)] lg:p-12"
              : "grid-cols-1",
          ].join(" ")}
        >
          <div>
            <div className="mb-6 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] md:text-xs">
              <span
                className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border px-2"
                style={{
                  borderColor: isDarkMode
                    ? "rgba(255,255,255,.2)"
                    : `${project.palette.accent}55`,
                  color: isDarkMode ? "#ffffff" : project.palette.accent,
                }}
              >
                {project.number}
              </span>
              <span>{project.discipline}</span>
            </div>

            <h3
              className={[
                "font-[var(--font-montserrat)] font-bold leading-[0.93] tracking-[-0.055em]",
                isWide
                  ? "max-w-3xl text-[clamp(2.8rem,7vw,6rem)]"
                  : "text-[clamp(2.6rem,4.5vw,4.25rem)]",
              ].join(" ")}
            >
              {project.title}
            </h3>
          </div>

          <div
            className={[
              "flex flex-col",
              isWide ? "md:items-end md:text-right" : "",
            ].join(" ")}
          >
            <span className="mb-5 font-mono text-xs uppercase tracking-[0.18em] opacity-70">
              {project.year}
            </span>
            <p
              className={[
                "max-w-md text-sm leading-relaxed opacity-80 sm:text-base",
                isWide ? "md:max-w-sm" : "",
              ].join(" ")}
            >
              {project.description}
            </p>
            <div
              className={[
                "mt-6 flex flex-wrap gap-x-4 gap-y-2",
                isWide ? "md:justify-end" : "",
              ].join(" ")}
            >
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="font-mono text-[0.68rem] uppercase tracking-[0.12em] opacity-70"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className={[
            "relative z-10 mt-auto flex items-end overflow-hidden",
            isWide
              ? project.emphasizedImage
                ? "h-[20rem] px-2 pb-0 pt-2 sm:h-[27rem] sm:px-5 lg:h-[34rem] lg:px-10"
                : "h-[18rem] px-3 pb-0 pt-4 sm:h-[23rem] sm:px-8 lg:h-[29rem] lg:px-16"
              : "h-[20rem] px-3 pb-5 pt-8 sm:h-[24rem] sm:px-6",
          ].join(" ")}
        >
          <div
            className={`relative mx-auto flex h-full w-full items-end justify-center transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.015] motion-reduce:transform-none motion-reduce:transition-none ${project.imageClassName}`}
            style={{ transformOrigin: "50% 100%" }}
          >
            {project.presentation === "photo-pair" && project.secondaryImage ? (
              <div className="flex h-full w-full items-end justify-center gap-3 sm:gap-5">
                {[project.image, project.secondaryImage].map((image, index) => (
                  <Image
                    key={image}
                    src={image}
                    alt={`${project.title} ${index === 0 ? "prototype and team" : "hackathon presentation"}`}
                    width={1536}
                    height={2048}
                    sizes="(max-width: 1024px) 45vw, 420px"
                    className="h-auto max-h-full w-[calc(50%-0.375rem)] rounded-[1rem] border border-black/10 object-contain shadow-[0_20px_42px_rgba(15,23,42,.16)] sm:w-[calc(50%-0.625rem)] md:rounded-[1.4rem]"
                  />
                ))}
              </div>
            ) : project.presentation === "screenshot" ? (
              <Image
                src={project.image}
                alt={`${project.title} interface preview`}
                width={1470}
                height={956}
                sizes={
                  isWide
                    ? "(max-width: 1024px) 100vw, 760px"
                    : "(max-width: 1024px) 100vw, 600px"
                }
                className={clsx(
                  "max-h-full w-auto max-w-full rounded-[1rem] border object-contain shadow-[0_24px_48px_rgba(15,23,42,.16)] md:rounded-[1.4rem]",
                  isDarkMode
                    ? "border-white/15 bg-gray-950"
                    : "border-gray-200 bg-white",
                )}
              />
            ) : (
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes={
                  isWide
                    ? "(max-width: 1024px) 100vw, 1200px"
                    : "(max-width: 1024px) 100vw, 650px"
                }
                className="object-contain drop-shadow-[0_24px_28px_rgba(0,0,0,0.26)]"
              />
            )}
          </div>
        </div>

        <div
          className={[
            "absolute bottom-5 right-20 z-30 grid h-14 w-14 place-items-center rounded-full",
            "text-white shadow-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none md:bottom-8 md:right-8 md:h-16 md:w-16",
          ].join(" ")}
          style={{ backgroundColor: project.palette.accent }}
        >
          <ArrowIcon />
        </div>

        <div
          className="absolute inset-x-0 bottom-0 z-20 h-1 origin-left scale-x-0 transition-transform duration-700 ease-out group-hover:scale-x-100"
          style={{ backgroundColor: project.palette.accent }}
        />
      </motion.article>
    </a>
  );
}

const Projects: React.FC = () => {
  const t = useTranslations("Projects");
  const { isDarkMode } = useTheme();
  const reducedMotion = useReducedMotion() ?? false;

  const projects: Project[] = [
    {
      number: "01",
      title: t("projects.1.title"),
      description: t("showcase.strunzova.description"),
      discipline: t("showcase.strunzova.discipline"),
      year: `2025 — ${t("showcase.terms.web")}`,
      technologies: ["Next.js", "TypeScript", "UI/UX", "SEO"],
      link: "https://strunzovapila.vercel.app",
      image: "/strunzovapilamockup2.png",
      imageClassName: "max-w-[78rem]",
      emphasizedImage: true,
      layout: "wide",
      presentation: "mockup",
      palette: {
        background: "#faf9f7",
        foreground: "#181613",
        accent: "#b3392f",
      },
    },
    {
      number: "02",
      title: t("showcase.duocardsLanding.title"),
      description: t("showcase.duocardsLanding.description"),
      discipline: t("showcase.duocardsLanding.discipline"),
      year: `2026 — ${t("showcase.terms.website")}`,
      technologies: [
        t("showcase.terms.productDesign"),
        t("showcase.terms.landingPage"),
        "i18n",
        t("showcase.terms.responsiveDesign"),
      ],
      link: "https://www.duocards.xyz/",
      image: "/work/Screenshot 2026-07-15 at 10.13.25.png",
      imageClassName: "max-w-[43rem]",
      layout: "compact",
      presentation: "screenshot",
      palette: {
        background: "#f8f7ff",
        foreground: "#172033",
        accent: "#6657e8",
      },
    },
    {
      number: "03",
      title: t("showcase.duocardsApp.title"),
      description: t("showcase.duocardsApp.description"),
      discipline: t("showcase.duocardsApp.discipline"),
      year: `2026 — ${t("showcase.terms.product")}`,
      technologies: [
        t("showcase.terms.dashboard"),
        t("showcase.terms.aiWorkflow"),
        t("showcase.terms.authentication"),
        t("showcase.terms.dataInterface"),
      ],
      link: "https://app.duocards.xyz/dashboard",
      image: "/work/Screenshot 2026-07-15 at 10.14.54.png",
      imageClassName: "max-w-[43rem]",
      layout: "compact",
      presentation: "screenshot",
      palette: {
        background: "#f6f8fc",
        foreground: "#172033",
        accent: "#4755c9",
      },
    },
    {
      number: "04",
      title: t("showcase.clubRecords.title"),
      description: t("showcase.clubRecords.description"),
      discipline: t("showcase.clubRecords.discipline"),
      year: `2026 — ${t("showcase.terms.dataApp")}`,
      technologies: [
        t("showcase.terms.dataInterface"),
        t("showcase.terms.search"),
        t("showcase.terms.filters"),
        t("showcase.terms.bilingual"),
      ],
      link: "https://y-ten-bice-34.vercel.app/",
      image: "/work/Screenshot 2026-07-15 at 10.15.48.png",
      imageClassName: "max-w-[43rem]",
      layout: "compact",
      presentation: "screenshot",
      palette: {
        background: "#f5f8fd",
        foreground: "#101a31",
        accent: "#2878e8",
      },
    },
    {
      number: "05",
      title: t("showcase.travelGlobe.title"),
      description: t("showcase.travelGlobe.description"),
      discipline: t("showcase.travelGlobe.discipline"),
      year: `2026 — ${t("showcase.terms.app3d")}`,
      technologies: [
        t("showcase.terms.globe3d"),
        t("showcase.terms.travelSets"),
        t("showcase.terms.photos"),
        t("showcase.terms.bilingual"),
      ],
      link: "https://vibecoding-five-xi.vercel.app/",
      image: "/work/Screenshot 2026-07-15 at 10.16.18.png",
      imageClassName: "max-w-[43rem]",
      layout: "compact",
      presentation: "screenshot",
      palette: {
        background: "#fff7f9",
        foreground: "#24131a",
        accent: "#f04f78",
      },
    },
    {
      number: "06",
      title: t("showcase.braille.title"),
      description: t("showcase.braille.description"),
      discipline: t("showcase.braille.discipline"),
      year: `2025 — ${t("showcase.terms.hackathon")}`,
      technologies: [
        "C# / WPF",
        "Micro:bit",
        "Python",
        t("showcase.terms.printing3d"),
      ],
      link: "https://github.com/danicek555/PomuckaBraille-Hackathon2025",
      image: "/work/braille-project.jpg",
      secondaryImage: "/work/braille-presentation.jpg",
      imageClassName: "max-w-[58rem]",
      layout: "wide",
      presentation: "photo-pair",
      palette: {
        background: "#fbfaef",
        foreground: "#17180f",
        accent: "#a6ad00",
      },
    },
    {
      number: "07",
      title: t("showcase.autobot.title"),
      description: t("showcase.autobot.description"),
      discipline: t("showcase.autobot.discipline"),
      year: `2024 — ${t("showcase.terms.system")}`,
      technologies: [
        "Node.js",
        "Puppeteer",
        t("showcase.terms.automation"),
        t("showcase.terms.data"),
      ],
      link: "https://github.com/danicek555/Auto-Kupovani-Listku",
      image: "/macbook_autobot.png",
      imageClassName: "max-w-[78rem]",
      emphasizedImage: true,
      layout: "wide",
      presentation: "mockup",
      palette: {
        background: "#f7faf4",
        foreground: "#11120d",
        accent: "#4d7c0f",
      },
    },
  ];

  return (
    <section
      id="work"
      className={clsx(
        "relative overflow-hidden px-4 py-24 transition-colors duration-300 sm:px-6 md:py-32 lg:px-10 lg:py-36",
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900",
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            isDarkMode
              ? "radial-gradient(circle at 20% 8%, rgba(74,222,128,.07), transparent 25%)"
              : "radial-gradient(circle at 50% 0%, rgba(74,222,128,.055), transparent 28%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.header
          className="mx-auto mb-14 max-w-4xl text-center md:mb-20"
          initial={{ opacity: 0, y: reducedMotion ? 0 : 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-green-600 dark:bg-green-500/10 dark:text-green-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            {t("badge")}
          </div>

          <h2 className="font-[var(--font-montserrat)] text-4xl font-bold tracking-[-0.045em] sm:text-5xl md:text-6xl">
            {t("title")}
          </h2>
          <p
            className={clsx(
              "mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg",
              isDarkMode ? "text-gray-300" : "text-gray-600",
            )}
          >
            {t("showcase.statementLead")} {t("showcase.statementAccent")}{" "}
            {t("showcase.intro")}
          </p>
          <div
            className={clsx(
              "mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em]",
              isDarkMode ? "text-gray-300" : "text-gray-600",
            )}
          >
            <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_14px_rgba(34,197,94,.5)]" />
            {t("showcase.availability")}
          </div>
        </motion.header>

        <div className="grid gap-5 md:gap-7 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
              openLabel={t("showcase.openProject")}
              reducedMotion={reducedMotion}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        <motion.div
          className={clsx(
            "mt-14 grid gap-6 border-b border-t py-7 font-mono text-[0.68rem] uppercase tracking-[0.16em] sm:grid-cols-3 md:mt-20 md:text-xs",
            isDarkMode
              ? "border-white/15 text-gray-400"
              : "border-gray-200 text-gray-500",
          )}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span>01 / {t("showcase.capabilityOne")}</span>
          <span>02 / {t("showcase.capabilityTwo")}</span>
          <span>03 / {t("showcase.capabilityThree")}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
