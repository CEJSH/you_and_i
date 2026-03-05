"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { locale, t } = useI18n()
  const categories = t.footer.categories[locale]

  return (
    <footer className="relative border-t border-border/50 bg-card/20 px-6 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-sm font-bold text-primary">Y&I</span>
              </div>
              <span className="text-lg font-bold text-foreground tracking-tight">YOU&I</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t.footer.brand[locale]}
            </p>
          </div>

          {/* Links */}
          {Object.entries(categories).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold text-foreground">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {(links as string[]).map((link: string) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-border/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              {t.footer.copyright[locale]}
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-xs text-muted-foreground/60"
            >
              {t.footer.disclaimer[locale]}
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}
