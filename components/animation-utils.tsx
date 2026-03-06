"use client";

import { useI18n } from "@/lib/i18n";
import { motion, type Variants } from "framer-motion";
import { useState, useEffect, useRef, memo } from "react";

/* ── Animation variants ── */

export const heroReveal = {
  container: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  },
  textBlock: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.028,
      },
    },
  },
  char: {
    hidden: { opacity: 0, x: -12, scale: 0.94 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.22,
        ease: "easeOut",
      },
    },
  },
};

export const headingReveal = {
  container: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.045,
      },
    },
  },
  char: {
    hidden: { opacity: 0, x: -18, scale: 0.94 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  },
};

export const bodyReveal = {
  container: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.024,
      },
    },
  },
  char: {
    hidden: { opacity: 0, x: -14, scale: 0.96 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  },
};

export const sectionDividerVariants: Variants = {
  hidden: { x: "-120%" },
  show: ({
    duration,
    delay,
    reduceMotion,
  }: {
    duration: number;
    delay: number;
    reduceMotion: boolean;
  }) => ({
    x: reduceMotion ? "-120%" : ["-120%", "120%"],
    transition: reduceMotion
      ? undefined
      : {
          duration,
          delay,
          ease: "linear" as const,
        },
  }),
};

export const createIndexedRevealVariants = ({
  reduceMotion,
  offsetY,
  duration,
  delayStep,
  ease = "easeOut",
}: {
  reduceMotion: boolean;
  offsetY: number;
  duration: number;
  delayStep: number;
  ease?: string;
}) => ({
  hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: offsetY },
  show: (index: number) =>
    reduceMotion
      ? { opacity: 1, y: 0 }
      : {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease,
            delay: index * delayStep,
          },
        },
});

/* ── Hooks ── */

export function useCountUp(target: number, duration: number, inView: boolean) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);
  const frameRef = useRef<number | null>(null);
  useEffect(() => {
    if (!inView) {
      hasStarted.current = false;
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      return;
    }

    if (hasStarted.current) return;
    hasStarted.current = true;
    setCount(0);

    const start = performance.now();
    const integerMode = target <= 20;
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      if (integerMode) {
        setCount(Math.min(target, Math.max(0, Math.ceil(progress * target))));
      } else {
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(target * eased));
      }
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };
    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [inView, target, duration]);
  return count;
}

export const CountValue = memo(function CountValue({
  target,
  inView,
}: {
  target: number;
  inView: boolean;
}) {
  const count = useCountUp(target, 1800, inView);
  return <span className="tabular-nums">{count.toLocaleString()}</span>;
});

/* ── Text reveal components ── */

export const HeadingChars = memo(function HeadingChars({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const { locale } = useI18n();
  return (
    <motion.span
      key={`${text}-${locale}`}
      initial="hidden"
      whileInView="show"
      variants={headingReveal.container}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {Array.from(text).map((char, index) => (
        <motion.span
          key={`${text}-${index}`}
          variants={headingReveal.char}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
});

export const BodyChars = memo(function BodyChars({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const { locale } = useI18n();
  return (
    <motion.span
      key={`${text}-${locale}`}
      initial="hidden"
      whileInView="show"
      variants={bodyReveal.container}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {Array.from(text).map((char, index) => (
        <motion.span
          key={`${text}-${index}`}
          variants={bodyReveal.char}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
});

export const HeroChars = memo(function HeroChars({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return <HeadingChars text={text} className={className} />;
});

/* ── Section utility components ── */

export const SectionDivider = memo(function SectionDivider({
  delay = 0,
  duration = 3.2,
  reduceMotion = false,
}: {
  delay?: number;
  duration?: number;
  reduceMotion?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative z-20 flex items-center justify-center"
    >
      <div className="relative h-px w-full max-w-7xl overflow-hidden bg-linear-to-r from-transparent via-white/10 to-transparent">
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-300/45 to-transparent"
          custom={{ duration, delay, reduceMotion }}
          variants={sectionDividerVariants}
        />
      </div>
    </motion.div>
  );
});

export const AmbientSweep = memo(function AmbientSweep({
  angle,
  color,
  duration,
  delay = 0,
  zIndex = "-z-4",
  className = "",
  active = true,
}: {
  angle: string;
  color: string;
  duration: number;
  delay?: number;
  zIndex?: string;
  className?: string;
  active?: boolean;
}) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${zIndex} mix-blend-screen ${className}`}
      style={{
        backgroundImage: `linear-gradient(${angle}, transparent 40%, ${color} 50%, transparent 60%)`,
        backgroundSize: "240% 240%",
        backgroundPosition: "0% 0%",
      }}
      animate={
        active
          ? {
              opacity: [0.02, 0.2, 0.02],
              backgroundPosition: ["0% 0%", "80% 80%"],
            }
          : undefined
      }
      transition={
        active
          ? {
              duration,
              repeat: Infinity,
              ease: "linear",
              delay,
            }
          : undefined
      }
    />
  );
});

export const TrustStrip = memo(function TrustStrip({
  reduceMotion,
  badges,
  label,
  active = true,
}: {
  reduceMotion: boolean;
  badges: { name: string; note: string }[];
  label: string;
  active?: boolean;
}) {
  const marqueeBadges = [...badges, ...badges];
  const shouldAnimate = active && !reduceMotion;
  const marqueeAnimation = shouldAnimate ? { x: ["0%", "-50%"] } : undefined;
  const marqueeTransition = shouldAnimate
    ? { duration: 60, repeat: Infinity, ease: "linear" }
    : undefined;

  return (
    <section className="relative z-10 overflow-hidden px-4 sm:px-10 py-1.5 lg:px-14">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl py-3">
        <div className="px-0 md:px-4 pb-4 text-sm lg:text-base uppercase font-bold tracking-[0.15em] text-slate-200">
          {label}
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 -left-10 z-10 w-28 bg-[linear-gradient(to_right,#070d1d_0%,#070d1d_58%,rgba(7,13,29,0)_100%)] blur-[16px]" />
          <div className="pointer-events-none absolute inset-y-0 -right-10 z-10 w-28 bg-[linear-gradient(to_left,#070d1d_0%,#070d1d_58%,rgba(7,13,29,0)_100%)] blur-[16px]" />
          <motion.div
            style={{ willChange: "transform" }}
            className="flex w-max items-center gap-3 px-2"
            animate={marqueeAnimation}
            transition={marqueeTransition}
          >
            {marqueeBadges.map((badge, i) => (
              <div
                key={`${badge.name}-${i}`}
                className="flex items-center gap-2 rounded-lg bg-white/8 px-3 py-1 text-xs lg:text-sm font-semibold text-slate-200"
              >
                <span>{badge.name}</span>
                <span className="text-xs lg:text-sm uppercase tracking-[0.16em] text-slate-200">
                  {badge.note}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
});
