"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function HeroSection() {
  const { locale, t } = useI18n()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      {/* Radial glow background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-accent/6 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-widest text-primary uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            {t.hero.badge[locale]}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-5xl font-bold leading-tight tracking-tight text-balance md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient-hero">
            {t.hero.titleLine1[locale]}
          </span>
          <br />
          <span className="text-foreground">
            {t.hero.titleLine2[locale]}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          {t.hero.description[locale]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#ecosystem"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_oklch(0.7_0.18_200_/_0.3)]"
          >
            {t.hero.exploreBtn[locale]}
          </a>
          <a
            href="#tokenization"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-8 py-3.5 text-sm font-medium text-secondary-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
          >
            {t.hero.learnBtn[locale]}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20"
        >
          <motion.a
            href="#ecosystem"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground"
            aria-label="Scroll down"
          >
            <span className="text-xs tracking-widest uppercase">{t.hero.scroll[locale]}</span>
            <ArrowDown size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
