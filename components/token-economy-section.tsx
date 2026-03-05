"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Wallet, BarChart3, Users, Zap } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const utilityIcons = [Wallet, BarChart3, Users, Zap]

export function TokenEconomySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { locale, t } = useI18n()

  return (
    <section id="technology" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0 animated-grid" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-primary/4 blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium tracking-widest text-primary uppercase">
            {t.tokenEconomy.label[locale]}
          </span>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl text-balance">
            {t.tokenEconomy.title[locale]}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {t.tokenEconomy.description[locale]}
          </p>
        </motion.div>

        {/* Orb visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative mx-auto mb-20 flex h-64 w-64 items-center justify-center md:h-80 md:w-80"
        >
          {/* Rings */}
          <div className="absolute inset-0 rounded-full border border-primary/10 animate-[spin_30s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-accent/10 animate-[spin_25s_linear_infinite_reverse]" />
          <div className="absolute inset-8 rounded-full border border-primary/15 animate-[spin_20s_linear_infinite]" />

          {/* Core glow */}
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 md:h-36 md:w-36">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl" />
            <div className="relative flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground md:text-3xl">Y&I</span>
              <span className="text-[10px] tracking-widest text-primary uppercase">
                {t.tokenEconomy.tokenLabel[locale]}
              </span>
            </div>
          </div>

          {/* Orbiting dots */}
          {[0, 90, 180, 270].map((deg, i) => (
            <motion.div
              key={deg}
              className="absolute h-3 w-3 rounded-full bg-primary/60"
              style={{
                top: "50%",
                left: "50%",
              }}
              animate={{
                x: [
                  Math.cos((deg * Math.PI) / 180) * 120,
                  Math.cos(((deg + 360) * Math.PI) / 180) * 120,
                ],
                y: [
                  Math.sin((deg * Math.PI) / 180) * 120,
                  Math.sin(((deg + 360) * Math.PI) / 180) * 120,
                ],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>

        {/* Utility cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.tokenEconomy.utilities.map((util, i) => {
            const Icon = utilityIcons[i]
            return (
              <motion.div
                key={util.label[locale]}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="group rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-6 text-center transition-all duration-500 hover:border-primary/30 hover:bg-card/50"
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">{util.label[locale]}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {util.description[locale]}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
