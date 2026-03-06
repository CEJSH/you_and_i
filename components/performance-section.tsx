"use client";

import { motion, useInView } from "framer-motion";
import { useRef, memo } from "react";
import { pageCopy } from "@/lib/page-copy";
import { HeadingChars, BodyChars, AmbientSweep, CountValue } from "@/components/animation-utils";

export const PerformanceSection = memo(function PerformanceSection({
  copy,
  reduceMotion,
}: {
  copy: (typeof pageCopy)["ko"]["performance"];
  reduceMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.15 });
  return (
    <section
      ref={ref}
      className="relative z-10 overflow-hidden px-4 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-36 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_88%_10%,rgba(45,212,191,0.16),transparent_52%),radial-gradient(circle_at_24%_86%,rgba(139,92,246,0.1),transparent_56%),linear-gradient(172deg,rgba(10,14,34,0.84),rgba(10,6,28,0.9))] before:opacity-44"
    >
      <AmbientSweep
        angle="160deg"
        color="rgba(45,212,191,0.13)"
        duration={22}
        zIndex="-z-20"
        active={inView && !reduceMotion}
      />
      <div className="pointer-events-none absolute inset-0 -z-5 bg-[linear-gradient(to_right,rgba(125,211,252,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(125,211,252,0.08)_1px,transparent_1px)] bg-[size:60px_34px] opacity-15" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-130px] top-10 h-72 w-72 rounded-full bg-sky-300/10 blur-[95px]"
        animate={
          inView
            ? {
                x: [0, -30, 0],
                y: [0, -16, 0],
                opacity: [0.06, 0.15, 0.06],
              }
            : undefined
        }
        transition={
          inView
            ? { duration: 12, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
      />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/60">
            <HeadingChars text={copy.eyebrow} />
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tighter bg-[linear-gradient(135deg,#ffffff,#c0c8d8,#ffffff)] bg-clip-text text-transparent">
            <HeadingChars text={copy.title} />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-14 overflow-hidden rounded-2xl border-t border-l border-t-white/15 border-l-white/15 bg-slate-900/40 backdrop-blur-2xl p-5 sm:p-8 lg:p-10"
        >
          {/* Noise texture */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')] bg-repeat" />

          {/* Atmospheric Cyan Glow — organic floating blob */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-20 top-1/2 -z-1 h-64 w-64 rounded-full bg-cyan-500/8 blur-[100px]"
            animate={
              inView
                ? {
                    x: [0, 60, 20, 0],
                    y: [-40, 20, -20, -40],
                    scale: [1, 1.2, 0.9, 1],
                    opacity: [0.06, 0.14, 0.08, 0.06],
                  }
                : undefined
            }
            transition={
              inView
                ? { duration: 14, repeat: Infinity, ease: "easeInOut" }
                : undefined
            }
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-16 -bottom-10 -z-1 h-52 w-52 rounded-full bg-violet-500/6 blur-[90px]"
            animate={
              inView
                ? {
                    x: [0, -30, 10, 0],
                    y: [0, -30, 10, 0],
                    opacity: [0.04, 0.12, 0.06, 0.04],
                  }
                : undefined
            }
            transition={
              inView
                ? { duration: 10, repeat: Infinity, ease: "easeInOut" }
                : undefined
            }
          />

          {/* Top metrics row */}
          <div className="mb-10 grid grid-cols-1 gap-6 border-b border-white/6 pb-8 sm:grid-cols-3">
            {copy.top.map((stat, i) => (
              <motion.div
                key={stat.desc}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              >
                <p className="font-mono font-bold text-4xl tracking-tighter text-cyan-400 transition-transform duration-300 group-hover:-translate-y-1">
                  <BodyChars text={stat.value} />
                  {stat.unit && (
                    <span className="ml-1.5 text-lg font-bold tracking-normal text-cyan-400/70">
                      <BodyChars text={stat.unit} />
                    </span>
                  )}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  <BodyChars text={stat.desc} />
                </p>
              </motion.div>
            ))}
          </div>

          {/* Progress bars */}
          <div className="space-y-7">
            {copy.bars.map((bar, i) => {
              return (
                <div key={bar.label} className="space-y-2.5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-slate-400">
                      <BodyChars text={bar.label} />
                    </span>
                    <span className="font-mono font-bold text-xl tabular-nums tracking-tight text-cyan-400">
                      <CountValue target={bar.value} inView={inView} />
                      <span className="ml-1 text-xs font-medium tracking-normal text-slate-500">
                        <BodyChars text="TPS" />
                      </span>
                    </span>
                  </div>
                  <div className="relative h-1.5 w-full rounded-full bg-white/5">
                    {/* Glow trail behind bar */}
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full bg-cyan-500/15 blur-[6px]"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${bar.pct}%` } : { width: 0 }}
                      transition={{
                        duration: 1.4,
                        delay: 0.15 + i * 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    />
                    {/* Main neon bar */}
                    <motion.div
                      className={`relative h-full rounded-full bg-linear-to-r ${bar.color}`}
                      style={{
                        boxShadow:
                          i === 0
                            ? "0 0 14px rgba(6, 182, 212, 0.5), 0 0 4px rgba(6, 182, 212, 0.3)"
                            : "0 0 8px rgba(100, 116, 139, 0.3)",
                      }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${bar.pct}%` } : { width: 0 }}
                      transition={{
                        duration: 1.4,
                        delay: 0.15 + i * 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      {/* Bright endpoint indicator */}
                      <span
                        className={`absolute right-0 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full animate-pulse ${
                          i === 0
                            ? "bg-white shadow-[0_0_8px_rgba(6,182,212,0.9),0_0_20px_rgba(6,182,212,0.5)]"
                            : "bg-slate-300/80 shadow-[0_0_6px_rgba(148,163,184,0.5)]"
                        }`}
                      />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Static ambient glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/5 blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
});
