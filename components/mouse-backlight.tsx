"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export function MouseBacklight({ enabled = true }: { enabled?: boolean }) {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 120 });
  const rafId = useRef<number | null>(null);
  const pendingPoint = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const shouldTrack = enabled && window.matchMedia("(pointer: fine)").matches;
    if (!shouldTrack) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      pendingPoint.current = { x: e.clientX, y: e.clientY };

      if (rafId.current !== null) {
        return;
      }

      rafId.current = window.requestAnimationFrame(() => {
        rafId.current = null;
        const point = pendingPoint.current;
        if (!point) return;

        mouseX.set(point.x);
        mouseY.set(point.y);
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, [mouseX, mouseY, enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-30 h-125 w-125 rounded-full mix-blend-screen"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(56,189,248,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
      }}
    />
  );
}
