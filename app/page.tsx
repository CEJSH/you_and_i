"use client"

import { I18nProvider } from "@/lib/i18n"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { TokenizationSection } from "@/components/tokenization-section"
import { TokenEconomySection } from "@/components/token-economy-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { SecuritySection } from "@/components/security-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ParticleField } from "@/components/particle-field"
import { SectionDivider } from "@/components/section-divider"

export default function HomePage() {
  return (
    <I18nProvider>
      <main className="relative min-h-screen overflow-x-hidden">
        <ParticleField />
        <Navbar />
        <HeroSection />
        <SectionDivider />
        <EcosystemSection />
        <SectionDivider />
        <TokenizationSection />
        <SectionDivider />
        <TokenEconomySection />
        <SectionDivider />
        <RoadmapSection />
        <SectionDivider />
        <SecuritySection />
        <SectionDivider />
        <CTASection />
        <Footer />
      </main>
    </I18nProvider>
  )
}
