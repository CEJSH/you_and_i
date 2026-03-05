"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShieldCheck, Fingerprint, Lock, KeyRound, ScanFace, Server } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const securityIcons = [ShieldCheck, Fingerprint, Lock, KeyRound, Server, ScanFace]

export function SecuritySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { locale, t } = useI18n()

  return (
    <section id="security" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/4 blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium tracking-widest text-accent uppercase">
            {t.security.label[locale]}
          </span>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl text-balance">
            {t.security.title[locale]}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {t.security.description[locale]}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.security.features[locale].map((featureLabel, i) => {
            const Icon = securityIcons[i]
            return (
              <motion.div
                key={featureLabel}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-5 transition-all duration-500 hover:border-accent/30 hover:bg-card/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">{featureLabel}</span>
              </motion.div>
            )
          })}
        </div>

        {/* Compliance badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          {t.security.badges[locale].map((badge) => (
            <div
              key={badge}
              className="rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-xs font-medium tracking-widest text-primary uppercase"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
