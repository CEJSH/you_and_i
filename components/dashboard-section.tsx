"use client";

import { motion, useInView } from "framer-motion";
import { useRef, memo } from "react";
import { pageCopy } from "@/lib/page-copy";
import {
  HeadingChars,
  BodyChars,
  AmbientSweep,
} from "@/components/animation-utils";

const chartHeights = [92, 74, 88, 68, 83, 56, 81];

export const DashboardSection = memo(function DashboardSection({
  copy,
  reduceMotion,
}: {
  copy: (typeof pageCopy)["ko"]["dashboard"];
  reduceMotion: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { amount: 0.15 });
  const bars = copy.tabs;
  const chart = [
    { name: "ETH" },
    { name: "BNB" },
    { name: "MATIC" },
    { name: "AVAX" },
    { name: "SOL" },
    { name: "ARB" },
    { name: "OP" },
  ];

  return (
    <section className="relative z-10 overflow-hidden px-4 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-36 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_15%_12%,rgba(56,189,248,0.16),transparent_56%),radial-gradient(circle_at_88%_86%,rgba(139,92,246,0.12),transparent_60%),linear-gradient(175deg,rgba(8,14,32,0.84),rgba(12,6,30,0.94))] before:opacity-50">
      <AmbientSweep
        angle="35deg"
        color="rgba(125,211,252,0.12)"
        duration={20}
        zIndex="-z-20"
        active={inView && !reduceMotion}
      />
      <div className="pointer-events-none absolute inset-0 -z-5 bg-[linear-gradient(to_right,rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:80px_52px] opacity-15" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-28 top-8 h-80 w-80 rounded-full bg-cyan-300/12 blur-[100px]"
        animate={
          inView
            ? {
                x: [0, 34, 0],
                y: [0, 8, 0],
                opacity: [0.08, 0.16, 0.08],
              }
            : undefined
        }
        transition={
          inView
            ? { duration: 10, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
      />

      <div ref={sectionRef} className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mb-10 max-w-lg"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/60">
            <HeadingChars text={copy.eyebrow} />
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tighter bg-[linear-gradient(135deg,#ffffff,#c0c8d8,#ffffff)] bg-clip-text text-transparent">
            <HeadingChars text={copy.title} />
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            <BodyChars text={copy.desc} />
          </p>
        </motion.div>

        {/* ── Console Wrapper ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#080a12]/90 backdrop-blur-xl p-4 sm:p-6 lg:p-8"
        >
          {/* Inner glow blobs */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/8 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/6 blur-[80px]" />

          {/* ── KPI Row ── */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {bars.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/5 bg-white/3 p-3 sm:p-4"
              >
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  <BodyChars text={s.label} />
                </p>
                <p
                  className="mt-1.5 font-mono text-xl font-bold tabular-nums text-cyan-400"
                >
                  <BodyChars text={s.value} />
                </p>
              </div>
            ))}
          </div>

          {/* ── Chart + Chain List ── */}
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {/* Chart */}
            <div className="relative rounded-2xl border border-white/5 bg-white/3 p-4 sm:p-5">
              {/* Background grid */}
              <div className="pointer-events-none absolute inset-4 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:calc(100%/7)_25%] opacity-50" />

              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold tracking-tighter text-white">
                  {copy.chartTitle}
                </p>
                <div className="flex gap-2">
                  {copy.timeframe.map((t) => (
                    <span
                      key={t}
                      className={`rounded-md px-2 py-0.5 font-mono text-xs ${t === copy.timeframe[2] ? "bg-cyan-400/10 text-cyan-400" : "text-slate-400"}`}
                    >
                      <BodyChars text={t} />
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mt-6 flex h-40 items-end gap-2 sm:h-48">
                {chart.map((h, i) => (
                  <div
                    key={h.name}
                    className="flex h-full flex-1 flex-col items-center justify-end"
                  >
                    <motion.div
                      className="w-full max-w-10 rounded-lg bg-linear-to-t from-cyan-500/20 via-cyan-400/50 to-cyan-300 shadow-[0_-4px_12px_rgba(34,211,238,0.25)]"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${chartHeights[i]}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.04 }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex gap-2">
                {chart.map((h) => (
                  <span
                    key={h.name}
                    className="flex-1 text-center font-mono text-[10px] text-slate-400/60 sm:text-xs"
                  >
                    {h.name}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/5 pt-4">
                {copy.bulletItems.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-sm text-slate-400"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Chain List */}
            <div className="rounded-2xl border border-white/5 bg-white/3 p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold tracking-tighter text-white">
                  <BodyChars text={copy.chainTitle} />
                </p>
                <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-emerald-400/80">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Live
                </span>
              </div>
              <div className="mt-3 flex flex-col gap-1.5">
                {copy.chainItems.map((chain, i) => (
                  <motion.div
                    key={chain.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.04 }}
                    className="flex items-center gap-2.5 rounded-xl bg-white/3 px-3 py-2 transition-colors duration-200 hover:bg-white/6"
                  >
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-emerald-400/60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-sm font-medium text-white">
                      <BodyChars text={chain.name} />
                    </span>
                    <span className="ml-auto font-mono text-sm font-bold tabular-nums text-cyan-400">
                      <BodyChars text={`${chain.tps}`} />
                    </span>
                    <span className="text-[10px] uppercase text-slate-400/60">
                      {copy.tpsLabel}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Scanning light */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/30 to-transparent opacity-0"
            animate={
              inView
                ? {
                    opacity: [0, 0.55, 0],
                    x: ["-100%", "100%", "100%"],
                  }
                : undefined
            }
            transition={
              inView
                ? {
                    duration: 4.4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.6,
                  }
                : undefined
            }
          />
        </motion.div>
      </div>
    </section>
  );
});
