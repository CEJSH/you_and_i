"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Layers, Cpu, Globe } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const pillarIcons = [Layers, Cpu, Globe]
const pillarStyles = [
  {
    gradient: "from-primary/20 to-primary/5",
    borderColor: "border-primary/20",
    iconColor: "text-primary",
  },
  {
    gradient: "from-accent/20 to-accent/5",
    borderColor: "border-accent/20",
    iconColor: "text-accent",
  },
  {
    gradient: "from-chart-3/20 to-chart-3/5",
    borderColor: "border-chart-3/20",
    iconColor: "text-chart-3",
  },
]

function PillarCard({
  pillarIndex,
  index,
}: {
  pillarIndex: number
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { locale, t } = useI18n()
  const pillar = t.ecosystem.pillars[pillarIndex]
  const style = pillarStyles[pillarIndex]
  const Icon = pillarIcons[pillarIndex]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`group relative overflow-hidden rounded-2xl border ${style.borderColor} bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/40`}
    >
      {/* Gradient top bar */}
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${style.gradient}`}
      />

      <div
        className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border ${style.borderColor} bg-gradient-to-br ${style.gradient}`}
      >
        <Icon className={`h-6 w-6 ${style.iconColor}`} />
      </div>

      <p className="mb-1 text-xs font-medium tracking-widest text-muted-foreground uppercase">
        {pillar.subtitle[locale]}
      </p>
      <h3 className="mb-3 text-2xl font-bold text-foreground">{pillar.title[locale]}</h3>
      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
        {pillar.description[locale]}
      </p>

      <ul className="flex flex-col gap-2">
        {pillar.features[locale].map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span className={`h-1 w-1 rounded-full ${style.iconColor} bg-current`} />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function EcosystemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { locale, t } = useI18n()

  return (
    <section id="ecosystem" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium tracking-widest text-primary uppercase">
            {t.ecosystem.label[locale]}
          </span>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl text-balance">
            {t.ecosystem.title[locale]}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {t.ecosystem.description[locale]}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <PillarCard key={i} pillarIndex={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
