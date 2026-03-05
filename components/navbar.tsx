"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { locale, toggleLocale, t } = useI18n()

  const navLinks = [
    { label: t.nav.ecosystem[locale], href: "#ecosystem" },
    { label: t.nav.tokenization[locale], href: "#tokenization" },
    { label: t.nav.technology[locale], href: "#technology" },
    { label: t.nav.roadmap[locale], href: "#roadmap" },
    { label: t.nav.security[locale], href: "#security" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
              <span className="text-sm font-bold text-primary">Y&I</span>
            </div>
            <span className="text-lg font-bold text-foreground tracking-tight">
              YOU&I
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {/* Language toggle */}
            <button
              onClick={toggleLocale}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-secondary/50 px-3 py-2 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-foreground"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              <span className="uppercase">{locale === "ko" ? "EN" : "KO"}</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/20 hover:border-primary/50"
            >
              {t.nav.getStarted[locale]}
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLocale}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-secondary/50 px-3 py-2 text-xs font-medium text-muted-foreground"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              <span className="uppercase">{locale === "ko" ? "EN" : "KO"}</span>
            </button>
            <button
              className="text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-20"
          >
            <nav className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-primary"
              >
                {t.nav.getStarted[locale]}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
