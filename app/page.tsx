"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  PROFILE,
  ROLES,
  PUBLICATIONS,
  INTERNSHIPS,
  EDUCATION,
} from "@/lib/resume";

function GradientOrbs() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px] opacity-60"
        style={{
          background:
            "radial-gradient(circle, #ff6b35 0%, #f7931e 30%, transparent 70%)",
        }}
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-50"
        style={{
          background:
            "radial-gradient(circle, #a855f7 0%, #6366f1 40%, transparent 70%)",
        }}
        animate={{ x: [0, -60, 0], y: [0, 80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full blur-[100px] opacity-40"
        style={{
          background:
            "radial-gradient(circle, #06b6d4 0%, #3b82f6 40%, transparent 70%)",
        }}
        animate={{ x: [0, 50, 0], y: [0, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function GridOverlay() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <GradientOrbs />
      <GridOverlay />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-6 w-full py-28"
        style={{ y, opacity }}
      >
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/60">
                Currently at Apple · Building Apple Intelligence
              </span>
            </motion.div>

            <motion.h1
              className="font-sans font-black tracking-tighter text-white leading-[0.9]"
              style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block">Aman</span>
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #ff6b35 0%, #a855f7 50%, #06b6d4 100%)",
                }}
              >
                Saini.
              </span>
            </motion.h1>

            <motion.div
              className="mt-10 max-w-2xl space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl sm:text-2xl text-white leading-relaxed">
                ML Engineer at Apple.
              </p>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                Generative AI · LLM Post-training · Reinforcement Learning ·
                LLM Alignment · Natural Language Generation · Classic ML
              </p>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href={`mailto:${PROFILE.email}`}
                className="group relative inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 font-medium text-sm transition-transform hover:scale-[1.02]"
              >
                Get in touch
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm text-white/60 hover:text-white transition-colors px-3 py-3"
              >
                LinkedIn ↗
              </a>
              <a
                href={PROFILE.scholar}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm text-white/60 hover:text-white transition-colors px-3 py-3"
              >
                Google Scholar ↗
              </a>
            </motion.div>
          </div>

          {/* Right: portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto lg:ml-auto w-full max-w-[420px] aspect-square order-first lg:order-last"
          >
            {/* Animated gradient ring */}
            <motion.div
              className="absolute -inset-2 rounded-[2rem] opacity-80 blur-xl"
              style={{
                background:
                  "conic-gradient(from 0deg, #ff6b35, #a855f7, #06b6d4, #ff6b35)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-[2px] rounded-[2rem]"
              style={{
                background:
                  "conic-gradient(from 0deg, #ff6b35, #a855f7, #06b6d4, #ff6b35)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="relative h-full w-full rounded-[2rem] overflow-hidden bg-neutral-900"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PROFILE.photo}
                alt={PROFILE.name}
                className="h-full w-full object-cover object-top"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function SectionHeading({
  label,
  title,
  accent,
}: {
  label: string;
  title: string;
  accent: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-6">
        <span
          className="h-2 w-2 rounded-full"
          style={{ background: accent }}
        />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">
          {label}
        </span>
      </div>
      <h2
        className="font-sans font-black tracking-tighter text-white leading-[0.95]"
        style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
      >
        {title}
      </h2>
    </motion.div>
  );
}

function Experience() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="01 / Work" title="Experience." accent="#ff6b35" />

        <div className="space-y-6">
          {ROLES.map((role, idx) => (
            <motion.article
              key={`${role.company}-${role.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 sm:p-10 hover:border-white/20 hover:bg-white/[0.04] transition-all"
            >
              <div className="absolute top-0 left-8 h-px w-20 bg-gradient-to-r from-orange-500 via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-white flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={role.logo}
                    alt={role.logoAlt ?? role.company}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-3xl font-bold tracking-tight text-white">
                      {role.company}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-white/40">
                      {role.period}
                    </span>
                  </div>
                  <div className="text-white/60 mt-1">
                    {role.title} · {role.location}
                  </div>
                  <ul className="mt-6 space-y-3 text-white/75 leading-relaxed">
                    {role.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span
                          className="flex-shrink-0 mt-2.5 h-1 w-1 rounded-full"
                          style={{ background: "#ff6b35" }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="02 / Research" title="Published work." accent="#a855f7" />

        <div className="grid gap-6 md:grid-cols-2">
          {PUBLICATIONS.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative block rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:border-purple-400/50 hover:bg-white/[0.04] transition-all overflow-hidden"
            >
              <div
                className="absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity"
                style={{ background: "#a855f7" }}
              />
              <div className="relative">
                <div className="font-mono text-[11px] uppercase tracking-wider text-purple-300/70 mb-4">
                  {p.venue}
                </div>
                <h3 className="text-2xl font-bold text-white leading-tight mb-3 group-hover:text-purple-200 transition-colors">
                  {p.title}{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </h3>
                <p className="text-sm text-white/50 italic mb-4">
                  {p.authors}
                </p>
                <p className="text-white/70 leading-relaxed text-[15px]">
                  {p.abstract}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Earlier() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="03 / Earlier" title="Internships." accent="#06b6d4" />

        <div className="grid gap-8 md:grid-cols-3">
          {INTERNSHIPS.map((it, idx) => (
            <motion.div
              key={it.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:border-cyan-400/40 transition-colors"
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-cyan-300/70 mb-3">
                {it.period}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{it.company}</h3>
              <div className="text-sm text-white/50 mb-4">
                {it.title} · {it.location}
              </div>
              <ul className="space-y-2 text-sm text-white/70 leading-relaxed">
                {it.bullets.map((b, i) => (
                  <li key={i}>· {b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationBlock() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="04 / Education" title="Education." accent="#f59e0b" />

        <motion.a
          href={EDUCATION.url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="group block rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:border-amber-400/50 transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
            <h3 className="text-3xl font-bold text-white group-hover:text-amber-200 transition-colors">
              {EDUCATION.school} ↗
            </h3>
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/40">
              {EDUCATION.period}
            </span>
          </div>
          <div className="mt-2 text-white/60">
            {EDUCATION.degree} · {EDUCATION.detail}
          </div>
        </motion.a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-30"
          style={{
            background:
              "radial-gradient(circle, #ff6b35 0%, #a855f7 50%, transparent 80%)",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="font-sans font-black tracking-tighter text-white leading-[0.95] mb-8"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Let&apos;s{" "}
            <span
              className="italic bg-clip-text text-transparent inline-block pr-[0.22em]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ff6b35 0%, #a855f7 100%)",
              }}
            >
              talk
            </span>
            .
          </h2>
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-3 text-xl sm:text-2xl text-white hover:text-orange-300 transition-colors group"
          >
            <span className="underline underline-offset-8 decoration-white/30 group-hover:decoration-orange-300">
              {PROFILE.email}
            </span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <div className="mt-10 flex items-center justify-center gap-8 text-sm text-white/50">
            <span>{PROFILE.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main
      id="top"
      className="relative min-h-screen bg-black text-white overflow-x-hidden"
    >
      {/* Sticky nav */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a
            href="#top"
            className="text-sm font-bold tracking-tight text-white hover:text-orange-300 transition-colors"
            aria-label="Back to top"
          >
            AS
          </a>
          <div className="flex items-center gap-6 sm:gap-8 text-xs font-mono uppercase tracking-[0.2em] text-white/60">
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#research" className="hover:text-white transition-colors">
              Research
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <div id="work">
        <Experience />
      </div>
      <div id="research">
        <Publications />
      </div>
      <Earlier />
      <EducationBlock />
      <div id="contact">
        <Contact />
      </div>

      <footer className="border-t border-white/10 py-8 px-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between text-xs text-white/40">
          <span>
            © {new Date().getFullYear()} {PROFILE.name}
          </span>
          <a href="#top" className="hover:text-white transition-colors">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
