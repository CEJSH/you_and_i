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
          <p className="text-sm lg:text-[20px] font-semibold uppercase tracking-[0.2em] text-cyan-300/60">
            <HeadingChars text={copy.eyebrow} />
          </p>
          <h2 className="mt-4 text-xl font-semibold text-white sm:text-5xl">
            <HeadingChars text={copy.title} />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-14 overflow-hidden rounded-2xl shimmer-border bg-white/5 backdrop-blur-lg p-4 sm:p-8 lg:p-10"
        >
          <div className="mb-10 grid grid-cols-1 gap-6 border-b border-white/6 pb-8 sm:grid-cols-3">
            {copy.top.map((stat) => (
              <div key={stat.desc}>
                <p className="text-2xl font-semibold text-white sm:text-4xl">
                  <BodyChars text={stat.value} />
                  {stat.unit && (
                    <span className="ml-1 text-sm sm:text-base lg:text-xl font-normal text-slate-200">
                      <BodyChars text={stat.unit} />
                    </span>
                  )}
                </p>
                <p className="mt-1 text-sm lg:text-[20px] tracking-wider text-slate-200">
                  <BodyChars text={stat.desc} />
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {copy.bars.map((bar, i) => {
              return (
                <div key={bar.label} className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm lg:text-[20px] font-semibold text-slate-200">
                      <BodyChars text={bar.label} />
                    </span>
                    <span className="text-lg font-semibold tabular-nums text-white sm:text-xl lg:text-3xl">
                      <CountValue target={bar.value} inView={inView} />
                      <span className="ml-1 text-sm lg:text-[20px] font-normal text-slate-200">
                        <BodyChars text="TPS" />
                      </span>
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className={`h-full rounded-full bg-linear-to-r ${bar.color}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${bar.pct}%` } : { width: 0 }}
                      transition={{
                        duration: 1.4,
                        delay: 0.15 + i * 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/5 blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
});
