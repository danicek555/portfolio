"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const GeorgiaTechCommitment: React.FC = () => {
  const { isDarkMode } = useTheme();
  const t = useTranslations("GeorgiaTech");

  const commitmentParagraphs = [
    t("commitment.p1"),
    t("commitment.p2"),
    t("commitment.p3"),
    t("commitment.p4"),
    t("commitment.p5"),
  ];

  const personalBests = [
    { event: t("pbs.breast200"), time: t("pbs.breast200Time") },
    { event: t("pbs.breast100"), time: t("pbs.breast100Time") },
    { event: t("pbs.im200"), time: t("pbs.im200Time") },
    { event: t("pbs.im400"), time: t("pbs.im400Time") },
  ];

  return (
    <section
      id="georgia-tech"
      className="relative py-20 px-8 overflow-hidden"
      style={{
        background: isDarkMode
          ? "linear-gradient(135deg, #001a33 0%, #003057 50%, #001428 100%)"
          : "linear-gradient(135deg, #003057 0%, #004080 60%, #003057 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EAAA00' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#EAAA00] opacity-[0.06] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#EAAA00] opacity-[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
              background: "rgba(234, 170, 0, 0.15)",
              color: "#EAAA00",
              border: "1px solid rgba(234, 170, 0, 0.3)",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            🐝 {t("badge")}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative max-w-md mx-auto lg:mx-0 lg:sticky lg:top-24"
          >
            <div
              className="absolute -inset-1 rounded-2xl opacity-60"
              style={{
                background:
                  "linear-gradient(135deg, #EAAA00 0%, #B3A369 50%, #EAAA00 100%)",
              }}
            />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <Image
                src="/profilovaFotka.jpg"
                alt={t("imageAlt")}
                width={500}
                height={620}
                className="w-full h-auto object-cover"
                quality={90}
              />
              <div
                className="absolute bottom-0 inset-x-0 px-5 py-4"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 48, 87, 0.95) 0%, transparent 100%)",
                }}
              >
                <p className="text-[#EAAA00] text-xs font-bold uppercase tracking-wider">
                  {t("photoCaption")}
                </p>
                <p className="text-white text-sm font-semibold mt-0.5">
                  {t("photoSubcaption")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
              style={{ background: "#EAAA00" }}
            >
              <span
                className="text-[#003057] font-black text-xl"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                GT
              </span>
            </motion.div>

            {/* Personal bests below photo on mobile, stays with photo on desktop */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {personalBests.map((pb, i) => (
                <motion.div
                  key={pb.event}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 * i }}
                  viewport={{ once: true }}
                  className="rounded-xl px-4 py-3 text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(234, 170, 0, 0.25)",
                  }}
                >
                  <p className="text-[#EAAA00] text-xs font-bold uppercase tracking-wider mb-1">
                    {pb.event}
                  </p>
                  <p
                    className="text-white text-lg font-bold tabular-nums"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {pb.time}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Commitment text column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-5"
          >
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight text-white"
              style={{ fontWeight: 700, fontFamily: "'Roboto', sans-serif" }}
            >
              {t("title")}
            </h2>

            <div
              className="flex flex-wrap gap-2"
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{
                  background: "rgba(234, 170, 0, 0.2)",
                  color: "#EAAA00",
                  border: "1px solid rgba(234, 170, 0, 0.35)",
                }}
              >
                {t("classHighSchool")}
              </span>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                {t("classCollege")}
              </span>
            </div>

            <div
              className="rounded-2xl px-6 py-6 space-y-4"
              style={{
                background: "rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(234, 170, 0, 0.15)",
              }}
            >
              {commitmentParagraphs.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 * i }}
                  viewport={{ once: true }}
                  className={
                    i === 0
                      ? "text-[#EAAA00] text-lg font-semibold leading-relaxed"
                      : "text-blue-100 text-base leading-relaxed"
                  }
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="https://ramblinwreck.com/sports/swimming-and-diving/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300"
              style={{
                background: "#EAAA00",
                color: "#003057",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              {t("cta")} →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GeorgiaTechCommitment;
