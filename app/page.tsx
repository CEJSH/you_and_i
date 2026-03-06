"use client";

import { I18nProvider } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n";
import HeroFluidCanvas from "@/components/hero-fluid-canvas";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useState, useRef } from "react";

import { pageCopy } from "@/lib/page-copy";
import { ArrowIcon, EcoIcon, FeatureGraphic } from "@/components/icons";
import NetworkBg from "@/components/network-bg";
import {
  heroReveal,
  createIndexedRevealVariants,
  HeadingChars,
  BodyChars,
  HeroChars,
  SectionDivider,
  AmbientSweep,
  TrustStrip,
} from "@/components/animation-utils";
import { DashboardSection } from "@/components/dashboard-section";
import { PerformanceSection } from "@/components/performance-section";
import { MouseBacklight } from "@/components/mouse-backlight";

/* ── Page ── */

function HomePageContent() {
  const { locale, toggleLocale } = useI18n();
  const copy = pageCopy[locale];
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion() ?? false;
  const heroFloat = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const ambientFloat = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const blobParallax1 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const blobParallax2 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blobParallax3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const networkConverge = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 0.6, 0.85, 0.5, 0],
  );
  const heroRef = useRef<HTMLDivElement>(null);
  const audienceRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const launchRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const heroInView = useInView(heroRef, { once: true, amount: 0.25 });
  const audienceInView = useInView(audienceRef, { once: true, amount: 0.25 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.18 });
  const ecosystemInView = useInView(ecosystemRef, { once: true, amount: 0.2 });
  const launchInView = useInView(launchRef, { once: true, amount: 0.25 });
  const roadmapInView = useInView(roadmapRef, { once: true, amount: 0.25 });
  const contactInView = useInView(contactRef, { once: true, amount: 0.15 });

  const handleLogoClick = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main
      key={locale}
      className="relative isolate min-h-screen overflow-x-hidden bg-[#070a12] text-base sm:text-lg lg:text-2xl leading-[1.7] sm:leading-[1.8] lg:leading-[1.9] text-slate-100 font-semibold"
    >
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.08),transparent_50%)]" />
        <motion.div
          aria-hidden
          style={{ y: blobParallax1 }}
          className="absolute left-[10%] top-[60%] h-105 w-105 rounded-full bg-indigo-500/6 blur-[130px]"
          animate={{ x: [0, 15, -10, 0], opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          style={{ y: blobParallax2 }}
          className="absolute right-[5%] top-[25%] h-90 w-90 rounded-full bg-cyan-400/5 blur-[120px]"
          animate={{ opacity: [0.03, 0.09, 0.03] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          aria-hidden
          style={{ y: blobParallax3 }}
          className="absolute left-[45%] top-[40%] h-125 w-125 rounded-full bg-violet-500/4 blur-[150px]"
          animate={{ x: [0, -25, 18, 0], opacity: [0.02, 0.07, 0.02] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>
      <MouseBacklight />

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/6 bg-[#070a12]/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-0">
          <button
            type="button"
            onClick={handleLogoClick}
            className="cursor-pointer text-base sm:text-lg lg:text-2xl font-extrabold tracking-tight text-white"
          >
            YOU&I
          </button>
          <nav className="hidden items-center gap-8 md:flex">
            {copy.header.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm lg:text-lg text-slate-100 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
              >
                <BodyChars text={link.label} />
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={toggleLocale}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-2.5 text-sm lg:text-lg font-medium uppercase tracking-[0.12em] text-slate-200 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
            >
              {locale === "ko" ? "EN" : "KO"}
            </button>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm sm:text-base lg:text-lg font-medium text-white transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
            >
              {copy.header.cta}
              <ArrowIcon />
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex min-h-11 min-w-11 items-center justify-center text-slate-200 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-white/6 md:hidden"
            >
              <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 sm:py-6 text-sm lg:text-[20px] font-semibold text-slate-200">
                {copy.header.navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm lg:text-[20px] text-slate-100 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
                  >
                    <BodyChars text={link.label} />
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    toggleLocale();
                    setMobileOpen(false);
                  }}
                  className="w-fit px-0 py-0 text-sm lg:text-lg font-medium uppercase tracking-[0.12em] text-slate-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
                >
                  {locale === "ko" ? "EN" : "KO"}
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-0 inline-block text-sm sm:text-base lg:text-lg font-medium text-white transition-colors hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
                >
                  {copy.header.cta}
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* ═══ Hero ═══ */}
      <motion.section
        ref={heroRef}
        id="hero"
        initial="hidden"
        whileInView="show"
        variants={heroReveal.container}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-12 pt-24 sm:px-10 sm:pb-20 sm:pt-32 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-20 before:bg-[radial-gradient(circle_at_72%_18%,rgba(56,189,248,0.16),transparent_60%),radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.12),transparent_56%),linear-gradient(165deg,rgba(4,8,18,0.58),rgba(15,5,30,0.78))] before:opacity-44"
      >
        <AmbientSweep
          angle="130deg"
          color="rgba(125,211,252,0.18)"
          duration={18}
          zIndex="-z-20"
          active={!reduceMotion && heroInView}
        />
        <motion.div
          style={{ y: heroFloat }}
          className="absolute inset-0 -z-10"
          aria-hidden
        >
          <motion.div style={{ y: ambientFloat }} className="absolute inset-0">
            <div className="absolute left-1/2 top-[-18%] h-[140vh] w-[140vw] -translate-x-1/2 overflow-hidden">
              <div className="h-full w-full origin-center scale-105">
                <HeroFluidCanvas reducedMotion={reduceMotion} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center text-center">
          <motion.div variants={heroReveal.textBlock} className="flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm lg:text-[20px] font-semibold uppercase tracking-widest text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <HeroChars text={copy.hero.label} />
            </span>
          </motion.div>
          <motion.h1
            variants={heroReveal.textBlock}
            className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <HeroChars text={copy.hero.title1} className="block text-white" />
            <HeroChars
              text={copy.hero.title2}
              className="mt-2 block bg-linear-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent"
            />
          </motion.h1>
          <motion.p
            variants={heroReveal.textBlock}
            className="mt-6 max-w-2xl text-sm sm:text-base lg:text-xl leading-relaxed text-slate-200"
          >
            <HeroChars text={copy.hero.desc} />
          </motion.p>
          <motion.div
            variants={heroReveal.textBlock}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <motion.a
              href="#contact"
              variants={heroReveal.textBlock}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base lg:text-xl font-semibold text-[#070a12] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
            >
              <HeroChars text={copy.hero.ctaPrimary} />
              <ArrowIcon />
            </motion.a>
            <motion.a
              href="#features"
              variants={heroReveal.textBlock}
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base lg:text-xl font-semibold text-slate-200 transition-all duration-300 hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
            >
              <HeroChars text={copy.hero.ctaSecondary} />
              <ArrowIcon />
            </motion.a>
          </motion.div>
          <motion.div
            variants={heroReveal.textBlock}
            className="mt-14 sm:mt-24 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/6 bg-white/6 sm:grid-cols-4"
          >
            {copy.hero.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative overflow-hidden bg-[#070a12] px-4 py-3 sm:px-6 sm:py-5 text-center transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:scale-[1.015]"
              >
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-cyan-200/45 to-transparent"
                  animate={
                    reduceMotion || !heroInView
                      ? undefined
                      : {
                          x: ["-100%", "150%"],
                          opacity: [0, 0.6, 0],
                        }
                  }
                  transition={
                    reduceMotion || !heroInView
                      ? undefined
                      : {
                          duration: 4.2,
                          repeat: Infinity,
                          repeatDelay: 2.4,
                          ease: "linear",
                        }
                  }
                />
                <p className="text-2xl font-semibold text-white sm:text-3xl">
                  <BodyChars text={stat.value} />
                </p>
                <p className="mt-1 text-sm lg:text-[20px] tracking-wider text-slate-200">
                  <HeroChars text={stat.label} />
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={heroReveal.textBlock} className="mt-16">
            <motion.a
              href="#features"
              animate={
                reduceMotion || !heroInView ? undefined : { y: [0, 6, 0] }
              }
              transition={
                reduceMotion || !heroInView
                  ? undefined
                  : {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              className="inline-flex flex-col items-center gap-2 rounded-full px-1 py-1 text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
            >
              <span className="text-sm lg:text-base uppercase tracking-[0.2em]">
                <HeroChars text={copy.hero.scroll} />
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 3v10M4 9l4 4 4-4" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <TrustStrip
        reduceMotion={reduceMotion}
        active={!reduceMotion}
        badges={copy.trustStrip.badges}
        label={copy.trustStrip.badgeLabel}
      />

      {/* ═══ Features — visual product matrix ═══ */}
      <section
        id="features"
        className="relative z-10 overflow-hidden px-4 py-18 sm:px-10 sm:py-28 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_20%_10%,rgba(45,212,191,0.18),transparent_45%),radial-gradient(circle_at_82%_76%,rgba(139,92,246,0.12),transparent_45%),linear-gradient(to_bottom,rgba(10,12,24,0.8),rgba(12,8,24,0.9))] before:opacity-44"
      >
        <AmbientSweep
          angle="20deg"
          color="rgba(103,232,249,0.13)"
          duration={24}
          zIndex="-z-20"
          active={!reduceMotion && featuresInView}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.14),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.1),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:44px_27px] opacity-12" />
        <div className="pointer-events-none absolute inset-0 -z-5 bg-[radial-gradient(circle_at_18%_70%,rgba(56,189,248,0.08),transparent_60%),radial-gradient(circle_at_82%_20%,rgba(125,211,252,0.08),transparent_65%)]" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-300/14 blur-[95px]"
          animate={
            reduceMotion || !featuresInView
              ? undefined
              : {
                  x: [0, 52, 8, 0],
                  y: [0, 18, -9, 0],
                  opacity: [0.12, 0.2, 0.12],
                }
          }
          transition={
            reduceMotion || !featuresInView
              ? undefined
              : { duration: 14, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sky-300/12 blur-[110px]"
          animate={
            reduceMotion || !featuresInView
              ? undefined
              : {
                  x: [0, -40, -8, 0],
                  y: [0, -12, 8, 0],
                  opacity: [0.1, 0.18, 0.1],
                }
          }
          transition={
            reduceMotion || !featuresInView
              ? undefined
              : {
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }
          }
        />

        <div ref={featuresRef} className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-left"
          >
            <p className="text-sm lg:text-[20px] font-semibold uppercase tracking-[0.2em] text-cyan-300/60">
              <HeadingChars text={copy.features.eyebrow} />
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-5xl">
              <span className="block">
                <HeadingChars text={copy.features.title1} />
              </span>
              <span className="mt-2 block bg-linear-to-r from-cyan-200 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                <HeadingChars text={copy.features.title2} />
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-xl leading-relaxed text-slate-200">
              <BodyChars text={copy.features.desc} />
            </p>
          </motion.div>

          <div className="grid gap-px overflow-hidden rounded-[28px] shimmer-border bg-white/6 shadow-[0_0_40px_rgba(139,92,246,0.04)] md:grid-cols-2 lg:grid-cols-3">
            {copy.features.cards.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.12 + i * 0.1 }}
                className="group relative min-h-70 sm:min-h-90 bg-[linear-gradient(160deg,rgba(10,14,22,0.72),rgba(13,18,28,0.68))] backdrop-blur-md p-4 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:backdrop-blur-xl hover:bg-[linear-gradient(160deg,rgba(14,18,30,0.78),rgba(13,18,28,0.72))] hover:shadow-[inset_0_1px_1px_rgba(34,211,238,0.15),0_0_20px_rgba(34,211,238,0.08)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 -top-12 h-24 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.2),transparent_64%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-12 top-4 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl"
                />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_10%,rgba(34,211,238,0.18),transparent_40%)]" />
                </div>
                <div className="relative mb-3 md:mb-6 border-b border-white/10 pb-1 md:pb-5">
                  <FeatureGraphic type={f.icon} />
                </div>
                <h3 className="relative text-xl md:text-2xl font-semibold text-white">
                  <HeadingChars text={f.title} />
                </h3>
                <p className="relative mt-3 text-sm lg:text-[20px] leading-relaxed text-slate-200/90 font-normal">
                  <BodyChars text={f.text} />
                </p>
                <p className="relative mt-7 inline-flex border-l border-cyan-300/80 pl-3 text-sm lg:text-[20px] font-semibold tracking-wide text-cyan-100">
                  <BodyChars text={f.metric} />
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider reduceMotion={reduceMotion} />

      {/* ═══ Launch highlights (Galxe-style metric rail) ═══ */}
      <section className="relative z-10 overflow-hidden px-4 py-20 sm:px-10 sm:py-28 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_10%_8%,rgba(147,197,253,0.14),transparent_54%),radial-gradient(circle_at_90%_90%,rgba(139,92,246,0.1),transparent_50%),linear-gradient(170deg,rgba(9,14,30,0.82),rgba(12,8,26,0.9))] before:opacity-50">
        <AmbientSweep
          angle="75deg"
          color="rgba(125,211,252,0.14)"
          duration={21}
          zIndex="-z-20"
          active={!reduceMotion && launchInView}
        />
        <div className="pointer-events-none absolute inset-0 -z-5 bg-[linear-gradient(to_right,rgba(147,197,253,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(125,211,252,0.06)_1px,transparent_1px)] bg-[size:52px_38px] opacity-12" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-[-28%] top-8 h-56 w-56 rounded-full bg-cyan-200/12 blur-[100px]"
          animate={
            reduceMotion || !launchInView
              ? undefined
              : {
                  x: [0, -28, 6, 0],
                  opacity: [0.05, 0.14, 0.05],
                }
          }
          transition={
            reduceMotion || !launchInView
              ? undefined
              : {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
        <div
          ref={launchRef}
          className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3"
        >
          {copy.launchHighlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduceMotion ? "show" : "hidden"}
              animate={reduceMotion ? "show" : launchInView ? "show" : "hidden"}
              custom={i}
              variants={createIndexedRevealVariants({
                reduceMotion,
                offsetY: 18,
                duration: 0.7,
                delayStep: 0.7,
                ease: "easeOut",
              })}
              className="relative overflow-hidden rounded-2xl shimmer-border bg-white/5 backdrop-blur-lg px-4 py-5 sm:px-6 sm:py-7 lg:px-8 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:scale-[1.005] hover:backdrop-blur-2xl hover:bg-white/8 hover:shadow-[inset_0_1px_1px_rgba(34,211,238,0.15),0_0_20px_rgba(34,211,238,0.08)]"
            >
              <p className="text-sm lg:text-[20px] uppercase tracking-[0.16em] text-slate-200 font-medium">
                {item.title}
              </p>
              <p className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm lg:text-[20px] text-slate-200">
                {item.desc}
              </p>
              <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={reduceMotion || launchInView ? "filled" : "empty"}
                  variants={{
                    empty: { width: 0 },
                    filled: (index: number) =>
                      reduceMotion
                        ? { width: "88%" }
                        : {
                            width: "88%",
                            transition: {
                              duration: 0.8,
                              delay: index * 0.7 + 0.18,
                              ease: "easeOut",
                            },
                          },
                  }}
                  custom={i}
                  className="h-full rounded-full bg-linear-to-r from-cyan-400/80 to-cyan-200/90"
                />
              </div>
              <div className="pointer-events-none absolute -right-12 -top-10 h-28 w-28 rounded-full bg-cyan-400/8 blur-[34px]" />
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider reduceMotion={reduceMotion} />

      {/* ═══ Dashboard — full-width, text overlaid ═══ */}
      <DashboardSection copy={copy.dashboard} reduceMotion={reduceMotion} />

      <SectionDivider reduceMotion={reduceMotion} />

      {/* ═══ Performance — unified card ═══ */}
      <PerformanceSection copy={copy.performance} reduceMotion={reduceMotion} />

      <SectionDivider reduceMotion={reduceMotion} />

      {/* ═══ Built for teams & builders (inspired by Galxe audience split style) ═══ */}
      <section className="relative z-10 overflow-hidden px-4 py-18 sm:px-10 sm:py-28 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_90%_14%,rgba(45,212,191,0.14),transparent_56%),radial-gradient(circle_at_10%_86%,rgba(139,92,246,0.1),transparent_52%),linear-gradient(168deg,rgba(7,14,22,0.82),rgba(10,5,20,0.9))] before:opacity-50">
        <AmbientSweep
          angle="145deg"
          color="rgba(56,189,248,0.13)"
          duration={23}
          zIndex="-z-20"
          active={!reduceMotion && audienceInView}
        />
        <div className="pointer-events-none absolute inset-0 -z-5 bg-[linear-gradient(to_right,rgba(45,212,191,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(125,211,252,0.1)_1px,transparent_1px)] bg-[size:46px_46px] opacity-12" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-[-18%] top-1/3 h-64 w-64 rounded-full bg-sky-300/10 blur-[110px]"
          animate={
            reduceMotion || !audienceInView
              ? undefined
              : {
                  x: [0, 28, 0],
                  y: [0, -18, 0],
                  opacity: [0.08, 0.18, 0.08],
                }
          }
          transition={
            reduceMotion || !audienceInView
              ? undefined
              : {
                  duration: 11,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
        <div
          ref={audienceRef}
          className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3"
        >
          {copy.audience.blocks.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduceMotion ? "show" : "hidden"}
              animate={
                reduceMotion ? "show" : audienceInView ? "show" : "hidden"
              }
              custom={i}
              variants={createIndexedRevealVariants({
                reduceMotion,
                offsetY: 24,
                duration: 0.45,
                delayStep: 0.45,
                ease: "easeOut",
              })}
              className="group relative rounded-2xl shimmer-border bg-white/6 p-4 sm:p-6 backdrop-blur-xl transition-all duration-300 will-change-transform hover:-translate-y-1 hover:scale-[1.005] hover:bg-white/10 hover:backdrop-blur-2xl hover:shadow-[inset_0_1px_1px_rgba(34,211,238,0.15),0_0_20px_rgba(34,211,238,0.08)]"
            >
              <p className="text-sm lg:text-[20px] uppercase tracking-[0.2em] text-cyan-200/70">
                {`0${i + 1}`}
              </p>
              <h3
                className={`mt-3 text-sm sm:text-base lg:text-xl font-semibold ${i === 0 ? "text-cyan-300" : i === 1 ? "text-sky-300" : "text-blue-300"}`}
              >
                {item.title}
              </h3>
              <p className="mt-4 text-sm lg:text-[20px] leading-relaxed text-slate-200">
                {item.desc}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm lg:text-[20px] font-semibold text-slate-200 transition-colors group-hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
              >
                {item.action}
                <ArrowIcon />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider reduceMotion={reduceMotion} />

      {/* ═══ Ecosystem — network bg with floating cards ═══ */}
      <section
        ref={ecosystemRef}
        id="ecosystem"
        className="relative z-10 overflow-hidden px-4 py-18 sm:px-10 sm:py-36 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.12),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.1),transparent_50%),linear-gradient(170deg,rgba(8,12,24,0.76),rgba(12,6,24,0.86))] before:opacity-50"
      >
        <AmbientSweep
          angle="-20deg"
          color="rgba(56,189,248,0.14)"
          duration={25}
          zIndex="-z-20"
          active={!reduceMotion && ecosystemInView}
        />
        {/* Network bg behind everything */}
        <div className="pointer-events-none absolute inset-0 origin-center scale-55 opacity-40 sm:scale-100">
          <NetworkBg
            reduceMotion={reduceMotion}
            active={!reduceMotion && ecosystemInView}
            convergeFactor={networkConverge}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 -z-5 bg-[linear-gradient(to_right,rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:56px_56px] opacity-15" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#070a12] via-[#070a12]/80 to-[#070a12]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm lg:text-[20px] font-semibold uppercase tracking-[0.2em] text-cyan-300/60">
              <HeadingChars text={copy.ecosystem.eyebrow} />
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
              <HeadingChars text={copy.ecosystem.title} />
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base lg:text-xl leading-relaxed text-slate-200">
              <BodyChars text={copy.ecosystem.desc} />
            </p>
          </motion.div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-3 lg:grid-rows-3">
            {copy.ecosystem.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.06 }}
                className={`group/eco relative overflow-hidden flex items-center gap-3 rounded-xl shimmer-border bg-white/4 backdrop-blur-lg transition-all duration-500 will-change-transform hover:-translate-y-1 hover:bg-white/8 hover:backdrop-blur-2xl hover:shadow-[inset_0_1px_1px_rgba(34,211,238,0.15),0_0_20px_rgba(34,211,238,0.08)] ${
                  i === 0
                    ? "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2 flex-col items-start px-5 py-6 sm:px-8 sm:py-8"
                    : "px-3 py-3 sm:px-5 sm:py-4"
                }`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-[80px] transition-all duration-500 group-hover/eco:bg-cyan-500/40" />
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover/eco:opacity-100" />
                <div className={`relative flex shrink-0 items-center justify-center rounded-lg bg-white/6 ${i === 0 ? "h-12 w-12 sm:h-14 sm:w-14" : "h-8 w-8 sm:h-10 sm:w-10"}`}>
                  <EcoIcon type={item.icon} />
                </div>
                <div className="relative">
                  <span className={`font-semibold text-slate-200 ${i === 0 ? "text-base sm:text-xl lg:text-2xl" : "text-sm lg:text-[20px]"}`}>
                    <BodyChars text={item.name} />
                  </span>
                  {i === 0 && (
                    <p className="mt-2 text-sm lg:text-base text-slate-200/60 font-normal">
                      {copy.ecosystem.desc}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider reduceMotion={reduceMotion} />

      {/* ═══ Roadmap ═══ */}
      <section
        id="roadmap"
        className="relative z-10 overflow-hidden px-4 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-36 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.13),transparent_52%),radial-gradient(circle_at_26%_84%,rgba(139,92,246,0.12),transparent_56%),linear-gradient(172deg,rgba(7,12,24,0.78),rgba(14,8,28,0.9))] before:opacity-50"
      >
        <AmbientSweep
          angle="45deg"
          color="rgba(129,140,248,0.13)"
          duration={19}
          zIndex="-z-20"
          active={!reduceMotion && roadmapInView}
        />
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm lg:text-[20px] font-semibold uppercase tracking-[0.2em] text-cyan-300/60">
              <HeadingChars text={copy.roadmap.eyebrow} />
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
              <HeadingChars text={copy.roadmap.title} />
            </h2>
          </motion.div>

          {/* Vertical glowing pulse timeline */}
          <div className="relative mt-14" ref={roadmapRef}>
            {/* Glowing center line */}
            <div className="absolute left-5 top-0 bottom-0 w-px sm:left-1/2 sm:-translate-x-px">
              <div className="h-full w-full bg-linear-to-b from-transparent via-cyan-400/25 to-transparent" />
              <motion.div
                className="absolute inset-0 w-full bg-linear-to-b from-transparent via-cyan-300/60 to-transparent"
                animate={roadmapInView ? { opacity: [0.3, 1, 0.3], scaleY: [0.92, 1, 0.92] } : undefined}
                transition={roadmapInView ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : undefined}
              />
            </div>

            <div className="flex flex-col gap-12 sm:gap-16">
              {copy.roadmap.phases.map((node, i) => (
                <motion.div
                  key={node.period}
                  initial={reduceMotion ? "show" : "hidden"}
                  animate={
                    reduceMotion ? "show" : roadmapInView ? "show" : "hidden"
                  }
                  custom={i}
                  variants={createIndexedRevealVariants({
                    reduceMotion,
                    offsetY: 30,
                    duration: 0.6,
                    delayStep: 0.2,
                    ease: "easeOut",
                  })}
                  className={`relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  {/* Pulse dot on line */}
                  <div className="absolute left-5 top-1 z-10 sm:left-1/2 sm:-translate-x-1/2">
                    <div className="h-3 w-3 rounded-full border-2 border-cyan-400/60 bg-[#070a12]" />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-cyan-400/40"
                      animate={roadmapInView ? { scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] } : undefined}
                      transition={roadmapInView ? { duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" } : undefined}
                    />
                  </div>

                  {/* Content — alternates sides on sm+ */}
                  <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"}`}>
                    <span className="inline-flex w-fit rounded-full bg-cyan-400/10 px-3 py-1 text-sm lg:text-base font-semibold tracking-widest text-cyan-300">
                      <BodyChars text={node.period} />
                    </span>
                    <h3 className="mt-3 text-base sm:text-lg lg:text-xl font-semibold text-white">
                      <HeadingChars text={node.title} />
                    </h3>
                    <p className="mt-2 text-sm lg:text-base leading-relaxed text-slate-200/80 font-normal">
                      <BodyChars text={node.detail} />
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <SectionDivider reduceMotion={reduceMotion} />

      {/* ═══ Contact CTA ═══ */}
      <section
        ref={contactRef}
        id="contact"
        className="relative z-10 overflow-hidden px-4 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-36 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_24%_20%,rgba(125,211,252,0.12),transparent_50%),radial-gradient(circle_at_84%_82%,rgba(139,92,246,0.1),transparent_50%),linear-gradient(175deg,rgba(5,9,18,0.8),rgba(12,6,24,0.9))] before:opacity-44"
      >
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <NetworkBg
            reduceMotion={reduceMotion}
            active={!reduceMotion && contactInView}
            convergeFactor={networkConverge}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#070a12] via-transparent to-[#070a12]" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center"
        >
          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
            <span className="block">
              <HeadingChars text={copy.contact.title1} />
            </span>
            <span className="bg-linear-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              <HeadingChars text={copy.contact.title2} />
            </span>
          </h2>
          <p className="max-w-2xl text-sm sm:text-base lg:text-xl leading-relaxed text-slate-200">
            <BodyChars text={copy.contact.desc} />
          </p>
          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="mailto:contact@youandi.io"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-base lg:text-xl font-semibold text-[#070a12] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
            >
              {copy.ctaButtons.contact} <ArrowIcon />
            </a>
            <a
              href="#ecosystem"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-base lg:text-xl font-semibold text-slate-200 transition-all duration-300 hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
            >
              {copy.ctaButtons.explore} <ArrowIcon />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="relative z-10 border-t border-white/6 px-4 pt-14 pb-8 sm:px-10 sm:pt-20 sm:pb-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-1">
              <span className="text-sm sm:text-base lg:text-xl font-semibold text-white">
                YOU&I
              </span>
              <p className="mt-4 text-sm lg:text-[20px] leading-relaxed text-slate-200">
                {copy.footer.description}
              </p>
            </div>
            {Object.entries(copy.footer.links).map(([cat, links]) => (
              <div key={cat}>
                <h4 className="text-sm lg:text-[20px] font-medium text-slate-200">
                  {cat}
                </h4>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm lg:text-[20px] font-medium text-slate-200 transition-colors duration-200 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-8 sm:flex-row">
            <p className="text-sm lg:text-[20px] text-slate-200">
              {copy.footer.copyright}
            </p>
            <p className="text-sm lg:text-[20px] text-slate-200">
              {copy.footer.legal}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function HomePage() {
  return (
    <I18nProvider>
      <HomePageContent />
    </I18nProvider>
  );
}
