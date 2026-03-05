"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { locale, t } = useI18n()

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/6 blur-[150px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-foreground md:text-6xl text-balance">
            {t.cta.title1[locale]}
            <br />
            <span className="text-gradient-primary">{t.cta.title2[locale]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            {t.cta.description[locale]}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:contact@youni-holdings.com"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_oklch(0.7_0.18_200_/_0.3)]"
            >
              {t.cta.contactBtn[locale]}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#ecosystem"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-8 py-4 text-sm font-medium text-secondary-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
            >
              {t.cta.exploreBtn[locale]}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
