"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, FileCheck, Coins, Vote } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const featureIcons = [FileCheck, Shield, Coins, Vote]

export function TokenizationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { locale, t } = useI18n()

  return (
    <section id="tokenization" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block text-xs font-medium tracking-widest text-accent uppercase">
              {t.tokenization.label[locale]}
            </span>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl text-balance">
              {t.tokenization.title1[locale]}
              <br />
              <span className="text-gradient-primary">{t.tokenization.title2[locale]}</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t.tokenization.description[locale]}
            </p>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">4-Tier</span>
                <span className="text-sm text-muted-foreground">{t.tokenization.stat1Label[locale]}</span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">AES-256</span>
                <span className="text-sm text-muted-foreground">{t.tokenization.stat2Label[locale]}</span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">DAO</span>
                <span className="text-sm text-muted-foreground">{t.tokenization.stat3Label[locale]}</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {t.tokenization.features.map((feature, i) => {
              const Icon = featureIcons[i]
              return (
                <motion.div
                  key={feature.title[locale]}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-6 transition-all duration-500 hover:border-accent/30 hover:bg-card/60"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {feature.title[locale]}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description[locale]}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
