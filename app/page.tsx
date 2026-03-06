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
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { useState, useRef, useEffect } from "react";

import { pageCopy } from "@/lib/page-copy";
import { ArrowIcon } from "@/components/icons";
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
// import { PerformanceSection } from "@/components/performance-section";
import { MouseBacklight } from "@/components/mouse-backlight";

/* ── CountUp ── */
function CountUp({
  value,
  active,
  delay = 0,
}: {
  value: string;
  active: boolean;
  delay?: number;
}) {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return <>{value}</>;
  const target = parseFloat(match[1]);
  const suffix = match[2];
  const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (active) {
      const t = setTimeout(() => mv.set(target), delay * 1000);
      return () => clearTimeout(t);
    }
  }, [active, target, delay, mv]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v: number) => {
      setDisplay(v.toFixed(decimals));
    });
    return unsubscribe;
  }, [spring, decimals]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

function EcosystemBadgeIcon({ type }: { type: string }) {
  if (type === "sto") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 2.7l5.3 5.3L9 13.3 3.7 8 9 2.7z" />
      </svg>
    );
  }
  if (type === "commerce") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="9" r="5.4" />
        <path d="M9 3.6v10.8M3.6 9h10.8" />
      </svg>
    );
  }
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="10" height="10" rx="2.2" />
      <path d="M6.6 9h4.8M9 6.6v4.8" />
    </svg>
  );
}

/* ── Page ── */

function HomePageContent() {
  const { locale, toggleLocale } = useI18n();
  const copy = pageCopy[locale];
  // Configure in `.env` with NEXT_PUBLIC_WHITEPAPER_FILE (default: /whitepaper.pdf).
  const whitepaperFilePath =
    process.env.NEXT_PUBLIC_WHITEPAPER_FILE ?? "/whitepaper.pdf";
  const whitepaperFileName =
    process.env.NEXT_PUBLIC_WHITEPAPER_FILE_NAME ?? "YOUANDI-Whitepaper.pdf";
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
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const launchRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const tokenomicsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const heroInView = useInView(heroRef, { once: true, amount: 0.25 });
  const audienceInView = useInView(audienceRef, { once: true, amount: 0.25 });
  const ecosystemInView = useInView(ecosystemRef, { once: true, amount: 0.2 });
  const launchInView = useInView(launchRef, { once: true, amount: 0.25 });
  const roadmapInView = useInView(roadmapRef, { once: true, amount: 0.25 });
  const trustInView = useInView(trustRef, { amount: 0.2 });
  const tokenomicsInView = useInView(tokenomicsRef, { amount: 0.2 });
  const contactInView = useInView(contactRef, { once: true, amount: 0.15 });
  const heroFxInView = useInView(heroRef, { amount: 0.25 });
  const heroCanvasActive = useInView(heroRef, { amount: 0.15 });
  const ecosystemFxInView = useInView(ecosystemRef, { amount: 0.2 });
  const audienceFxInView = useInView(audienceRef, { amount: 0.25 });
  const launchFxInView = useInView(launchRef, { amount: 0.25 });
  const roadmapFxInView = useInView(roadmapRef, { amount: 0.25 });
  const contactFxInView = useInView(contactRef, { amount: 0.15 });
  const tokenomicsColors = [
    "rgba(34, 211, 238, 0.95)",
    "rgba(56, 189, 248, 0.9)",
    "rgba(125, 211, 252, 0.85)",
    "rgba(14, 165, 233, 0.75)",
    "rgba(103, 232, 249, 0.7)",
  ];
  let tokenomicsStart = 0;
  const tokenomicsGradient = copy.tokenomics.allocations
    .map((item, index) => {
      const tokenomicsEnd = tokenomicsStart + item.value;
      const segment = `${tokenomicsColors[index % tokenomicsColors.length]} ${tokenomicsStart}% ${tokenomicsEnd}%`;
      tokenomicsStart = tokenomicsEnd;
      return segment;
    })
    .join(", ");

  const handleLogoClick = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#070a12] text-base sm:text-lg lg:text-2xl leading-[1.7] sm:leading-[1.8] lg:leading-[1.9] text-slate-100 font-semibold">
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
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          aria-hidden
          style={{ y: blobParallax3 }}
          className="absolute left-[45%] top-[40%] h-125 w-125 rounded-full bg-violet-500/4 blur-[150px]"
          animate={{ x: [0, -25, 18, 0], opacity: [0.02, 0.07, 0.02] }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
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
                className="text-sm lg:text-lg text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
              >
                <BodyChars text={link.label} />
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <a
              href={whitepaperFilePath}
              download={whitepaperFileName}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs sm:text-sm font-bold text-[#070a12] transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
            >
              {copy.header.cta}
            </a>
            <a
              href="https://www.wmuex.com/en_US/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-[#070a12] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
            >
              {copy.header.ctaPrice}
            </a>
            <button
              type="button"
              onClick={toggleLocale}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-slate-200 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
            >
              {locale === "ko" ? "EN" : "KO"}
            </button>
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
                    className="text-sm lg:text-base text-slate-100 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
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
                  href={whitepaperFilePath}
                  download={whitepaperFileName}
                  onClick={() => setMobileOpen(false)}
                  className="mt-0 inline-block text-sm sm:text-base lg:text-lg font-medium text-white transition-colors hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
                >
                  {copy.header.cta}
                </a>
                <a
                  href="https://www.wmuex.com/en_US/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mt-0 inline-block text-sm sm:text-base lg:text-lg font-medium text-cyan-300 transition-colors hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
                >
                  {copy.header.ctaPrice}
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
          active={!reduceMotion && heroFxInView}
        />
        <motion.div
          style={{ y: heroFloat }}
          className="absolute inset-0 -z-10"
          aria-hidden
        >
          <motion.div style={{ y: ambientFloat }} className="absolute inset-0">
            <div className="absolute left-1/2 top-[-18%] h-[140vh] w-[140vw] -translate-x-1/2 overflow-hidden">
              <div className="h-full w-full origin-center scale-105">
                <HeroFluidCanvas
                  reducedMotion={reduceMotion}
                  active={heroCanvasActive}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center text-center">
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
          <motion.p
            variants={heroReveal.textBlock}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/5 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-cyan-300/90"
          >
            <span className="hidden md:block h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
            <HeroChars text={copy.hero.credibility} />
          </motion.p>
          <motion.div
            variants={heroReveal.textBlock}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <motion.a
              href={whitepaperFilePath}
              download={whitepaperFileName}
              variants={heroReveal.textBlock}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base lg:text-xl font-semibold text-[#070a12] transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.4),0_0_30px_rgba(6,182,212,0.2)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
            >
              <HeroChars text={copy.hero.ctaPrimary} />
              <ArrowIcon />
            </motion.a>
            <motion.a
              href="https://www.wmuex.com/en_US/"
              target="_blank"
              rel="noopener noreferrer"
              variants={heroReveal.textBlock}
              className="group relative inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base lg:text-xl font-semibold text-slate-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
            >
              <div className="absolute inset-0 rounded-full bg-cyan-500/50 opacity-0 group-hover:animate-ping" />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md bg-cyan-400/30 transition-opacity" />
              <span className="relative z-10 group-hover:text-cyan-400 transition-colors">
                <HeroChars text={copy.hero.ctaSecondary} />
              </span>
              <span className="relative z-10 group-hover:text-cyan-400 transition-colors">
                <ArrowIcon />
              </span>
            </motion.a>
          </motion.div>
          <motion.div
            variants={heroReveal.textBlock}
            className="mt-14 sm:mt-24 grid w-full max-w-3xl grid-cols-2 items-center gap-px overflow-hidden rounded-2xl border border-white/6 bg-white/6 sm:grid-cols-4"
          >
            {copy.hero.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative overflow-hidden px-4 py-3 sm:px-5 sm:py-7 text-center transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:scale-[1.015]"
              >
                <p className="text-lg font-semibold text-white sm:text-3xl">
                  <BodyChars text={stat.value} />
                </p>
                <p className="mt-1 text-sm tracking-wider text-slate-200">
                  <HeroChars text={stat.label} />
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={heroReveal.textBlock} className="mt-16">
            <motion.a
              href="#ecosystem"
              animate={
                reduceMotion || !heroFxInView ? undefined : { y: [0, 6, 0] }
              }
              transition={
                reduceMotion || !heroFxInView
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

      <div ref={trustRef}>
        <TrustStrip
          reduceMotion={reduceMotion}
          active={!reduceMotion && trustInView}
          badges={copy.trustStrip.badges}
          label={copy.trustStrip.badgeLabel}
        />
      </div>

      <SectionDivider reduceMotion={reduceMotion} />

      {/* ═══ Ecosystem ═══ */}
      <section
        ref={ecosystemRef}
        id="ecosystem"
        className="relative z-10 overflow-hidden px-4 py-20 sm:px-10 sm:py-30 lg:px-14 lg:py-36 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_18%_12%,rgba(45,212,191,0.16),transparent_52%),radial-gradient(circle_at_82%_76%,rgba(139,92,246,0.12),transparent_48%),linear-gradient(168deg,rgba(7,14,22,0.82),rgba(10,5,20,0.92))] before:opacity-50"
      >
        <AmbientSweep
          angle="145deg"
          color="rgba(56,189,248,0.13)"
          duration={23}
          zIndex="-z-20"
          active={!reduceMotion && ecosystemFxInView}
        />
        <div className="pointer-events-none absolute inset-0 -z-5 bg-[linear-gradient(to_right,rgba(45,212,191,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(125,211,252,0.08)_1px,transparent_1px)] bg-[size:46px_46px] opacity-10" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-[-18%] top-1/3 h-64 w-64 rounded-full bg-sky-300/10 blur-[110px]"
          animate={
            reduceMotion || !ecosystemFxInView
              ? undefined
              : {
                  x: [0, 28, 0],
                  y: [0, -18, 0],
                  opacity: [0.08, 0.18, 0.08],
                }
          }
          transition={
            reduceMotion || !ecosystemFxInView
              ? undefined
              : {
                  duration: 11,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-[-20%] top-20 h-72 w-72 rounded-full bg-cyan-200/8 blur-[120px]"
          animate={
            reduceMotion || !ecosystemFxInView
              ? undefined
              : {
                  x: [0, -24, 0],
                  y: [0, 16, 0],
                  opacity: [0.06, 0.14, 0.06],
                }
          }
          transition={
            reduceMotion || !ecosystemFxInView
              ? undefined
              : {
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/60">
              <HeadingChars text={copy.ecosystem.eyebrow} />
            </p>
            <h2 className="mt-4 max-w-4xl text-2xl sm:text-4xl font-semibold tracking-tighter bg-[linear-gradient(135deg,#ffffff,#c0c8d8,#ffffff)] bg-clip-text text-transparent">
              <HeadingChars text={copy.ecosystem.title} />
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">
              <BodyChars text={copy.ecosystem.desc} />
            </p>
          </motion.div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {copy.ecosystem.cards.map((item, i) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? "show" : "hidden"}
                animate={
                  reduceMotion ? "show" : ecosystemInView ? "show" : "hidden"
                }
                custom={i}
                variants={createIndexedRevealVariants({
                  reduceMotion,
                  offsetY: 24,
                  duration: 0.45,
                  delayStep: 0.1,
                  ease: "easeOut",
                })}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-800/40 backdrop-blur-[10px] px-6 py-7 sm:px-10 sm:py-10 transition-all duration-500 will-change-transform hover:-translate-y-2 hover:border-cyan-400/25 hover:shadow-[0_0_40px_rgba(6,182,212,0.12),0_8px_32px_rgba(0,0,0,0.6)]"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-white/[0.06] to-transparent" />
                <div className="pointer-events-none absolute -right-8 -top-10 h-44 w-44 rounded-full bg-cyan-500/10 blur-[100px] transition-all duration-500 group-hover:bg-cyan-500/20" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-cyan-200 backdrop-blur-sm">
                  <EcosystemBadgeIcon type={item.icon} />
                </div>
                <h3 className="relative mt-5 sm:mt-7 text-lg sm:text-2xl font-bold tracking-tight text-white">
                  <HeadingChars text={item.title} />
                </h3>
                <p className="relative mt-4 text-sm font-normal leading-[1.8] tracking-[-0.02em] text-white/60">
                  <BodyChars text={item.desc} />
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider reduceMotion={reduceMotion} />

      {/* ═══ Differentiators ═══ */}
      <section
        id="differentiators"
        ref={audienceRef}
        className="relative z-10 overflow-hidden px-4 py-18 sm:px-10 sm:py-36 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.12),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.1),transparent_50%),linear-gradient(170deg,rgba(8,12,24,0.76),rgba(12,6,24,0.86))] before:opacity-50"
      >
        <AmbientSweep
          angle="-20deg"
          color="rgba(56,189,248,0.14)"
          duration={25}
          zIndex="-z-20"
          active={!reduceMotion && audienceFxInView}
        />
        <div className="pointer-events-none absolute inset-0 -z-5 bg-[linear-gradient(to_right,rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:56px_56px] opacity-15" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#070a12] via-[#070a12]/70 to-[#070a12]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/60">
              <HeadingChars text={copy.differentiators.eyebrow} />
            </p>
            <h2 className="mt-4 text-2xl sm:text-4xl font-semibold tracking-tighter bg-[linear-gradient(135deg,#ffffff,#c0c8d8,#ffffff)] bg-clip-text text-transparent">
              <HeadingChars text={copy.differentiators.title} />
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              <BodyChars text={copy.differentiators.desc} />
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2">
            {copy.differentiators.items.map((item, i) => (
              <motion.div
                key={item.number}
                initial={reduceMotion ? "show" : "hidden"}
                animate={
                  reduceMotion ? "show" : audienceInView ? "show" : "hidden"
                }
                custom={i}
                variants={createIndexedRevealVariants({
                  reduceMotion,
                  offsetY: 22,
                  duration: 0.45,
                  delayStep: 0.1,
                  ease: "easeOut",
                })}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-800/40 backdrop-blur-[10px] px-6 py-7 sm:px-10 sm:py-10 transition-all duration-500 will-change-transform hover:-translate-y-2 hover:border-cyan-400/25 hover:shadow-[0_0_40px_rgba(6,182,212,0.12),0_8px_32px_rgba(0,0,0,0.6)]"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-white/[0.06] to-transparent" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-cyan-500/10 blur-[100px] transition-all duration-500 group-hover:bg-cyan-500/20" />
                <div className="relative flex items-baseline gap-4 sm:gap-5">
                  <span className="font-mono text-2xl sm:text-3xl font-medium leading-none tracking-wide text-cyan-400/40">
                    {item.number}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white">
                    <HeadingChars text={item.title} />
                  </h3>
                </div>
                <p className="relative mt-5 text-sm font-normal leading-[1.8] tracking-[-0.02em] text-white/60">
                  <BodyChars text={item.desc} />
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Global Network Metrics ═══ */}
      <section className="relative z-10 overflow-hidden px-4 py-20 sm:px-10 sm:py-28 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_10%_8%,rgba(147,197,253,0.14),transparent_54%),radial-gradient(circle_at_90%_90%,rgba(139,92,246,0.1),transparent_50%),linear-gradient(170deg,rgba(9,14,30,0.82),rgba(12,8,26,0.9))] before:opacity-50">
        <AmbientSweep
          angle="75deg"
          color="rgba(125,211,252,0.14)"
          duration={21}
          zIndex="-z-20"
          active={!reduceMotion && launchFxInView}
        />
        <div className="pointer-events-none absolute inset-0 -z-5 bg-[linear-gradient(to_right,rgba(147,197,253,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(125,211,252,0.06)_1px,transparent_1px)] bg-[size:52px_38px] opacity-12" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-[-28%] top-8 h-56 w-56 rounded-full bg-cyan-200/12 blur-[100px]"
          animate={
            reduceMotion || !launchFxInView
              ? undefined
              : {
                  x: [0, -28, 6, 0],
                  opacity: [0.05, 0.14, 0.05],
                }
          }
          transition={
            reduceMotion || !launchFxInView
              ? undefined
              : {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
        <div ref={launchRef} className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/60">
              <HeadingChars text={copy.globalNetwork.eyebrow} />
            </p>
            <h2 className="mt-4 text-2xl sm:text-4xl font-semibold tracking-tighter bg-[linear-gradient(135deg,#ffffff,#c0c8d8,#ffffff)] bg-clip-text text-transparent">
              <HeadingChars text={copy.globalNetwork.title} />
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              <BodyChars text={copy.globalNetwork.desc} />
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {copy.launchHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? "show" : "hidden"}
                animate={
                  reduceMotion ? "show" : launchInView ? "show" : "hidden"
                }
                custom={i}
                variants={createIndexedRevealVariants({
                  reduceMotion,
                  offsetY: 18,
                  duration: 0.7,
                  delayStep: 0.7,
                  ease: "easeOut",
                })}
                className="group relative flex min-h-36 sm:min-h-48 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-3xl px-5 py-6 text-center sm:px-7 sm:py-8 lg:px-9 transition-all duration-300 will-change-transform hover:-translate-y-5 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.3),0_0_50px_rgba(6,182,212,0.15),0_20px_40px_rgba(0,0,0,0.5)]"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')] bg-repeat" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-cyan-500/10 blur-[90px] transition-all duration-500 group-hover:bg-cyan-500/25 group-hover:blur-[110px]" />
                <p className="font-semibold text-4xl sm:text-5xl tracking-tight text-cyan-300 transition-transform duration-300 group-hover:-translate-y-1">
                  <CountUp
                    value={item.value}
                    active={launchInView}
                    delay={i * 0.7 + 0.2}
                  />
                </p>
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider reduceMotion={reduceMotion} />

      {/* ═══ Tokenomics ═══ */}
      <section
        id="tokenomics"
        ref={tokenomicsRef}
        className="relative z-10 overflow-hidden px-4 py-20 sm:px-10 sm:py-28 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_22%_12%,rgba(34,211,238,0.14),transparent_52%),radial-gradient(circle_at_84%_86%,rgba(56,189,248,0.1),transparent_56%),linear-gradient(170deg,rgba(8,12,24,0.8),rgba(10,6,20,0.9))] before:opacity-50"
      >
        <AmbientSweep
          angle="32deg"
          color="rgba(34,211,238,0.14)"
          duration={21}
          zIndex="-z-20"
          active={!reduceMotion && tokenomicsInView}
        />
        <div className="pointer-events-none absolute inset-0 -z-5 bg-[linear-gradient(to_right,rgba(56,189,248,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:52px_42px] opacity-10" />

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/60">
              <HeadingChars text={copy.tokenomics.eyebrow} />
            </p>
            <h2 className="mt-4 text-2xl sm:text-4xl font-semibold tracking-tighter bg-[linear-gradient(135deg,#ffffff,#c0c8d8,#ffffff)] bg-clip-text text-transparent">
              <HeadingChars text={copy.tokenomics.title} />
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              <BodyChars text={copy.tokenomics.desc} />
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl border border-white/8 bg-slate-900/35 backdrop-blur-2xl"
            >
              {copy.tokenomics.specs.map((item, index) => (
                <div
                  key={item.label}
                  className={`grid gap-2 px-5 py-4 sm:py-6 sm:grid-cols-[130px_1fr] sm:items-center sm:px-7 ${index < copy.tokenomics.specs.length - 1 ? "border-b border-white/6" : ""}`}
                >
                  <p className="text-sm font-medium text-slate-500">
                    {item.label}
                  </p>
                  <p className="text-base font-semibold tracking-tight text-slate-100">
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="rounded-2xl bg-slate-900/35 p-6 backdrop-blur-2xl sm:p-8"
            >
              <div className="mx-auto flex w-fit items-center justify-center rounded-full p-[1px] bg-linear-to-br from-cyan-300/30 to-cyan-500/20">
                <motion.div
                  className="relative h-48 w-48 rounded-full will-change-transform sm:h-64 sm:w-64"
                  style={{
                    background: `conic-gradient(from -90deg, ${tokenomicsGradient})`,
                  }}
                  animate={tokenomicsInView ? { rotate: 360 } : undefined}
                  transition={
                    tokenomicsInView
                      ? {
                          duration: 36,
                          repeat: Infinity,
                          ease: "linear",
                        }
                      : undefined
                  }
                >
                  <div className="absolute inset-[14%] flex items-center justify-center rounded-full bg-[#070a12] ring-1 ring-white/8">
                    <div className="text-center">
                      <p className="text-xl font-semibold tracking-tight text-cyan-300">
                        YIHX
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                        YOU&I TOKEN
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2">
                {copy.tokenomics.allocations.map((item, index) => (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 text-sm text-slate-300"
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-sm"
                      style={{
                        backgroundColor:
                          tokenomicsColors[index % tokenomicsColors.length],
                      }}
                    />
                    <span>{`${item.label} ${item.value}%`}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <SectionDivider reduceMotion={reduceMotion} /> */}

      {/* ═══ Performance — unified card ═══ */}
      {/* <PerformanceSection copy={copy.performance} reduceMotion={reduceMotion} /> */}

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
          active={!reduceMotion && roadmapFxInView}
        />
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/60">
              <HeadingChars text={copy.roadmap.eyebrow} />
            </p>
            <h2 className="mt-4 text-2xl sm:text-4xl font-semibold tracking-tighter bg-[linear-gradient(135deg,#ffffff,#c0c8d8,#ffffff)] bg-clip-text text-transparent">
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
                animate={
                  roadmapFxInView
                    ? { opacity: [0.3, 1, 0.3], scaleY: [0.92, 1, 0.92] }
                    : undefined
                }
                transition={
                  roadmapFxInView
                    ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    : undefined
                }
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
                      animate={
                        roadmapFxInView
                          ? { scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }
                          : undefined
                      }
                      transition={
                        roadmapFxInView
                          ? {
                              duration: 2.5,
                              repeat: Infinity,
                              delay: i * 0.4,
                              ease: "easeInOut",
                            }
                          : undefined
                      }
                    />
                  </div>

                  {/* Content — alternates sides on sm+ */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"}`}
                  >
                    <span className="inline-flex w-fit rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-semibold tracking-widest text-cyan-300">
                      <BodyChars text={node.period} />
                    </span>
                    <h3 className="mt-3 text-lg font-semibold tracking-tighter text-white">
                      <HeadingChars text={node.title} />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
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
            active={!reduceMotion && contactFxInView}
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
          <h2 className="text-2xl sm:text-4xl font-semibold leading-tight tracking-tighter bg-linear-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            <HeadingChars text={copy.contact.title1} />
          </h2>
          <p className="max-w-2xl text-sm sm:text-base lg:text-xl leading-relaxed text-slate-200">
            <BodyChars text={copy.contact.desc} />
          </p>
          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={whitepaperFilePath}
              download={whitepaperFileName}
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-base lg:text-xl font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.4),0_0_30px_rgba(6,182,212,0.2)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
            >
              <span className="bg-[linear-gradient(120deg,#000_30%,#555_50%,#000_70%)] bg-[length:200%_auto] bg-clip-text text-transparent transition-[background-position] duration-500 group-hover:bg-[position:100%_center]">
                {copy.ctaButtons.contact}
              </span>
              <span className="text-[#070a12]">
                <ArrowIcon />
              </span>
            </a>
            <a
              href="https://www.wmuex.com/en_US/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-base lg:text-xl font-semibold text-[#070a12] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.4),0_0_30px_rgba(6,182,212,0.2)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a12]"
            >
              {copy.header.ctaPrice} <ArrowIcon />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="relative z-10 border-t border-white/6 px-4 pt-14 pb-8 sm:px-10 sm:pt-20 sm:pb-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-xl">
              <span className="text-sm sm:text-base lg:text-xl font-semibold text-white">
                YOU&I
              </span>
              <p className="mt-4 text-sm lg:text-lg leading-relaxed text-slate-200 font-medium">
                {copy.footer.description}
              </p>
            </div>
            <div className="grid w-fit grid-cols-2 gap-2 sm:mt-1">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-30 w-34 items-center justify-center overflow-hidden border border-white/10 bg-slate-900/60 text-slate-100 transition-all duration-300 hover:border-cyan-300/45 hover:bg-cyan-400/22"
                aria-label="X (Twitter)"
              >
                <span className="absolute left-3 top-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300 transition-colors duration-300 group-hover:text-white">
                  X
                </span>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-30 w-34 items-center justify-center overflow-hidden border border-white/10 bg-slate-900/60 text-slate-100 transition-all duration-300 hover:border-cyan-300/45 hover:bg-cyan-400/22"
                aria-label="Telegram"
              >
                <span className="absolute left-3 top-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300 transition-colors duration-300 group-hover:text-white">
                  Telegram
                </span>
                <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="font-normal mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-8 sm:flex-row">
            <p className="text-sm lg:text-base text-slate-200">
              {copy.footer.copyright}
            </p>
            <p className="text-sm lg:text-base text-slate-200">
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
