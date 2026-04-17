"use client";

import Link from "next/link";
import { motion } from "motion/react";

const variants = [
  {
    slug: "minimal",
    label: "Minimal",
    tagline: "Editorial. Whitespace. Serif.",
    description:
      "Quiet, text-first, Rauno / Linear-careers energy. Fast to read, timeless.",
    background: "bg-[#fbfaf7]",
    accent: "text-stone-900",
    muted: "text-stone-500",
    preview: (
      <div className="flex flex-col gap-3 p-6 h-full">
        <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-400">
          Machine Learning Engineer
        </div>
        <div className="font-serif text-3xl text-stone-900 leading-[1.05]">
          <span className="italic text-stone-500">I am</span> Aman Saini.
        </div>
        <div className="font-serif italic text-stone-500 text-sm leading-snug">
          LLM post-training, fine-tuning, retrieval, evaluation.
        </div>
        <div className="mt-auto">
          <div className="h-px w-full bg-stone-200 mb-3" />
          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-400">
            01 — Work
          </div>
          <div className="font-serif text-lg text-stone-900 mt-1">Apple</div>
          <div className="text-[11px] text-stone-500">
            ML Engineer · Apr 2025 – Present
          </div>
        </div>
      </div>
    ),
  },
  {
    slug: "bold",
    label: "Bold",
    tagline: "Gradients. Big type. Motion.",
    description:
      "Expressive, kinetic, Vercel-flavor. Immediately leaves an impression.",
    background: "bg-black",
    accent: "text-white",
    muted: "text-white/60",
    preview: (
      <div className="relative flex flex-col gap-3 p-6 h-full overflow-hidden">
        <div
          className="absolute -top-10 -left-10 w-48 h-48 rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle, #ff6b35 0%, #a855f7 50%, transparent 80%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-50"
          style={{
            background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          }}
        />
        <div className="relative font-mono text-[9px] uppercase tracking-[0.25em] text-white/60 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Currently at Apple
        </div>
        <div className="relative font-black tracking-tighter text-white text-4xl leading-[0.9]">
          <div>Aman</div>
          <div
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #ff6b35 0%, #a855f7 50%, #06b6d4 100%)",
            }}
          >
            Saini.
          </div>
        </div>
        <div className="relative text-white/70 text-xs leading-snug mt-1">
          Shipping generative AI at Apple.
        </div>
        <div className="relative mt-auto flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-white text-black px-3 py-1 text-[10px] font-medium">
            Get in touch →
          </span>
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] text-white/80">
            Résumé ↓
          </span>
        </div>
      </div>
    ),
  },
];

export default function ChooserPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
            Redesign preview · pick a direction
          </div>
          <h1
            className="font-black tracking-tighter leading-[1] mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            Two takes on{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ff6b35, #a855f7, #06b6d4)",
              }}
            >
              aman-saini.com
            </span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Same content, two aesthetics. Click either to open the full page —
            then tell me what to push harder, tone down, or blend.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {variants.map((v, i) => (
            <motion.div
              key={v.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
            >
              <Link
                href={`/${v.slug}`}
                className="group block rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all"
              >
                <div
                  className={`${v.background} aspect-[4/5] relative transition-transform group-hover:scale-[1.01]`}
                >
                  {v.preview}
                </div>
                <div className="p-6 bg-neutral-900/60 backdrop-blur border-t border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold tracking-tight">
                      {v.label}
                    </h2>
                    <span className="font-mono text-xs text-white/40 group-hover:text-white transition-colors">
                      /{v.slug} →
                    </span>
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-white/40 mb-3">
                    {v.tagline}
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center text-xs text-white/30 font-mono uppercase tracking-[0.2em]"
        >
          dev preview · nothing shipped to aman-saini.com yet
        </motion.div>
      </div>
    </main>
  );
}
