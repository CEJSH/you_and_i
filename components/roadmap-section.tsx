"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useI18n } from "@/lib/i18n"

export function RoadmapSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { locale, t } = useI18n()

  const statuses = ["current", "upcoming", "future"] as const

  return (
    <section id="roadmap" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-accent/4 blur-[150px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium tracking-widest text-primary uppercase">
            {t.roadmap.label[locale]}
          </span>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl text-balance">
            {t.roadmap.title[locale]}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {t.roadmap.description[locale]}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />

          <div className="grid gap-8 md:grid-cols-3">
            {t.roadmap.phases.map((phase, i) => {
              const status = statuses[i]
              return (
                <motion.div
                  key={phase.phase[locale]}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="relative mb-8 flex items-center gap-4 md:flex-col md:items-start md:gap-3">
                    <div
                      className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 ${
                        status === "current"
                          ? "border-primary bg-primary/10"
                          : "border-border bg-card/50"
                      }`}
                    >
                      {status === "current" && (
                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                      )}
                      <span
                        className={`relative text-sm font-bold ${
                          status === "current" ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`rounded-xl border p-6 transition-all duration-500 ${
                      status === "current"
                        ? "border-primary/30 bg-primary/5 glow-cyan"
                        : "border-border/50 bg-card/30"
                    }`}
                  >
                    <div className="mb-1 text-xs font-medium tracking-widest text-primary uppercase">
                      {phase.phase[locale]}
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-foreground">
                      {phase.title[locale]}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {phase.items[locale].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <div
                            className={`h-1.5 w-1.5 rounded-full ${
                              status === "current"
                                ? "bg-primary"
                                : "bg-muted-foreground/30"
                            }`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
