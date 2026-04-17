"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  PROFILE,
  ROLES,
  PUBLICATIONS,
  INTERNSHIPS,
  EDUCATION,
} from "@/lib/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="mt-24 scroll-mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-baseline gap-4 mb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-400">
          {label}
        </span>
        <div className="h-px flex-1 bg-stone-200" />
      </div>
      <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 mb-12 leading-[1.05]">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

export default function MinimalPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-stone-800 selection:bg-stone-900 selection:text-stone-50">
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-[#fbfaf7]/70 border-b border-stone-200/60">
        <div className="mx-auto max-w-2xl px-6 py-4 flex items-center justify-between text-sm">
          <Link href="/" className="font-serif italic text-lg text-stone-900">
            {PROFILE.name}
          </Link>
          <div className="flex gap-6 text-stone-500">
            <a href="#work" className="hover:text-stone-900 transition-colors">
              Work
            </a>
            <a href="#writing" className="hover:text-stone-900 transition-colors">
              Writing
            </a>
            <a
              href={PROFILE.resume}
              className="hover:text-stone-900 transition-colors"
            >
              Résumé
            </a>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-2xl px-6 pb-32">
        {/* Hero */}
        <motion.header
          className="pt-24 sm:pt-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-400 mb-8">
            Machine Learning Engineer · {PROFILE.location.split(",")[0]}
          </div>
          <h1 className="font-serif text-6xl sm:text-7xl text-stone-900 leading-[1.02] mb-8">
            <span className="italic text-stone-500">I am</span> {PROFILE.name}.
          </h1>
          <p className="text-xl sm:text-2xl text-stone-600 leading-relaxed font-serif italic max-w-xl">
            {PROFILE.tagline}
          </p>

          <div className="mt-12 flex items-start gap-6">
            <Image
              src={PROFILE.photo}
              alt={PROFILE.name}
              width={96}
              height={96}
              className="h-24 w-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
            <div className="flex flex-col gap-2 text-sm text-stone-500 pt-2">
              <a
                href={`mailto:${PROFILE.email}`}
                className="hover:text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 transition-colors"
              >
                {PROFILE.email}
              </a>
              <div className="flex gap-5">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-stone-900 transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={PROFILE.scholar}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-stone-900 transition-colors"
                >
                  Scholar ↗
                </a>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Experience */}
        <Section id="work" label="01 — Work" title="Where I've built things">
          <div className="space-y-16">
            {ROLES.map((role) => (
              <article
                key={`${role.company}-${role.period}`}
                className="grid grid-cols-[auto_1fr] gap-6"
              >
                <div className="pt-1">
                  <div className="h-10 w-10 rounded-md bg-white border border-stone-200 flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={role.logo}
                      alt={role.logoAlt ?? role.company}
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-serif text-2xl text-stone-900">
                      {role.company}
                    </h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400">
                      {role.period}
                    </span>
                  </div>
                  <div className="text-[15px] text-stone-500 mt-0.5">
                    {role.title} · {role.location}
                  </div>
                  <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-stone-700">
                    {role.bullets.map((b, i) => (
                      <li key={i} className="pl-4 relative">
                        <span className="absolute left-0 top-[0.7em] h-px w-2 bg-stone-300" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Publications */}
        <Section id="writing" label="02 — Writing" title="Published research">
          <div className="space-y-10">
            {PUBLICATIONS.map((p) => (
              <article
                key={p.title}
                className="border-b border-stone-200 pb-10 last:border-0"
              >
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <h3 className="font-serif text-2xl text-stone-900 leading-snug group-hover:italic transition-all">
                    {p.title} <span className="text-stone-400">↗</span>
                  </h3>
                </a>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-stone-400">
                  {p.venue}
                </div>
                <p className="mt-2 text-sm text-stone-500 italic">{p.authors}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-stone-700">
                  {p.abstract}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* Internships */}
        <Section id="earlier" label="03 — Earlier" title="Before all of this">
          <div className="space-y-8">
            {INTERNSHIPS.map((it) => (
              <div key={it.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-serif text-xl text-stone-900">
                    {it.company}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-400">
                    {it.period}
                  </span>
                </div>
                <div className="text-[14px] text-stone-500 mt-0.5">
                  {it.title} · {it.location}
                </div>
                <ul className="mt-3 space-y-1.5 text-[14px] leading-relaxed text-stone-600">
                  {it.bullets.map((b, i) => (
                    <li key={i} className="pl-4 relative">
                      <span className="absolute left-0 top-[0.7em] h-px w-2 bg-stone-300" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" label="04 — Education" title="Education">
          <div>
            <a
              href={EDUCATION.url}
              target="_blank"
              rel="noreferrer"
              className="font-serif text-2xl text-stone-900 hover:italic transition-all"
            >
              {EDUCATION.school} ↗
            </a>
            <div className="text-[15px] text-stone-600 mt-1">
              {EDUCATION.degree} · {EDUCATION.detail}
            </div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-stone-400 mt-1">
              {EDUCATION.period}
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" label="05 — Contact" title="Say hello">
          <div className="grid sm:grid-cols-2 gap-6 text-[15px]">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                Email
              </div>
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900"
              >
                {PROFILE.email}
              </a>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                Where
              </div>
              <span className="text-stone-900">{PROFILE.location}</span>
            </div>
          </div>
        </Section>

        <footer className="mt-32 pt-8 border-t border-stone-200 flex items-center justify-between text-xs text-stone-400">
          <span>© {new Date().getFullYear()} {PROFILE.name}</span>
          <Link href="/" className="hover:text-stone-900 transition-colors">
            ← Back to chooser
          </Link>
        </footer>
      </div>
    </main>
  );
}
