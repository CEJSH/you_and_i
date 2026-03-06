"use client";

import { motion, useInView } from "framer-motion";
import { useRef, memo } from "react";
import { pageCopy } from "@/lib/page-copy";
import { HeadingChars, BodyChars, AmbientSweep } from "@/components/animation-utils";

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
    { name: "ETH", tps: 84 },
    { name: "BNB", tps: 66 },
    { name: "MATIC", tps: 62 },
    { name: "AVAX", tps: 74 },
    { name: "SOL", tps: 89 },
    { name: "ARB", tps: 72 },
    { name: "OP", tps: 84 },
  ];
  const label = copy.chartTitle;

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
          <p className="text-sm lg:text-[20px] font-semibold uppercase tracking-[0.2em] text-cyan-300/60">
            <HeadingChars text={copy.eyebrow} />
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
            <HeadingChars text={copy.title} />
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-xl leading-relaxed text-slate-200">
            <BodyChars text={copy.desc} />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl shimmer-border bg-[#0a0c14]"
        >
          <div className="grid grid-cols-4 gap-2 p-2 sm:p-4 lg:grid-cols-5">
            {bars.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/6 bg-white/8 p-2"
              >
                <p className="text-[10px] leading-tight uppercase tracking-wider text-slate-200 sm:text-sm lg:text-[20px]">
                  <BodyChars text={s.label} />
                </p>
                <p
                  className={`mt-1 text-[12px] sm:text-sm lg:text-xl font-semibold ${s.color}`}
                >
                  <BodyChars text={s.value} />
                </p>
              </div>
            ))}

            <div className="col-span-4 flex flex-col rounded-xl border border-white/6 bg-white/8 p-3 sm:p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm lg:text-[20px] uppercase tracking-wider text-slate-200">
                  {label}
                </p>
                <div className="flex gap-3">
                  {copy.timeframe.map((t) => (
                    <span
                      key={t}
                      className={`text-xs lg:text-[20px] ${t === copy.timeframe[2] ? "text-cyan-300" : "text-slate-200"}`}
                    >
                      <BodyChars text={t} />
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex min-h-30 flex-1 items-end gap-0.75">
                {chart.map((h, i) => (
                  <motion.div
                    key={`${h.name}-${i}`}
                    className="flex-1 rounded-t bg-linear-to-t from-cyan-500/30 to-cyan-300/50"
                    initial={{ height: 0 }}
                    whileInView={{
                      height: `${[92, 74, 88, 68, 83, 56, 81][i]}%`,
                    }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.03 }}
                  />
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/6 pt-4">
                {copy.bulletItems.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-sm lg:text-[20px] text-slate-200"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#67e8f9"
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

            <div className="col-span-full rounded-xl border border-white/6 bg-white/8 p-4 lg:col-start-5 lg:row-span-2 lg:row-start-1">
              <p className="text-sm lg:text-[20px] uppercase tracking-wider text-slate-200">
                <BodyChars text={copy.chainTitle} />
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {copy.chainItems.map((chain, i) => (
                  <motion.div
                    key={chain.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.04 }}
                    className="flex items-center gap-2 rounded-lg border border-white/4 bg-white/8 px-3 py-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400/80" />
                    <span className="text-sm lg:text-[20px] font-semibold text-slate-200">
                      <BodyChars text={chain.name} />
                    </span>
                    <span className="ml-auto text-sm lg:text-[20px] tabular-nums text-slate-200">
                      <BodyChars text={`${chain.tps} ${copy.tpsLabel}`} />
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/5 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-cyan-400/4 blur-[60px]" />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-cyan-400/30 to-transparent opacity-0"
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
