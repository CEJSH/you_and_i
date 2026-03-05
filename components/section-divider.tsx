"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function SectionDivider() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const width = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "80%", "0%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <div ref={ref} className="relative flex h-px items-center justify-center">
      <motion.div
        style={{ width, opacity }}
        className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
    </div>
  )
}
