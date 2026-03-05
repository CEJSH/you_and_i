"use client";

import { I18nProvider } from "@/lib/i18n";
import HeroFluidCanvas from "@/components/hero-fluid-canvas";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";

/* ── Data ── */

const navLinks = [
  { href: "#hero", label: "OVERVIEW" },
  { href: "#features", label: "CORE" },
  { href: "#ecosystem", label: "NETWORK" },
  { href: "#roadmap", label: "BLUEPRINT" },
];

const heroStats = [
  { value: "150+", label: "연동 체인" },
  { value: "$2.4B", label: "TVL 규모" },
  { value: "99.99%", label: "Finality" },
  { value: "12", label: "시장·지역" },
];

const featureCards = [
  {
    title: "Quantum Mesh Protocol",
    text: "멀티체인 정산을 하나의 오퍼레이션으로 묶어 즉시 동기화합니다.",
    metric: "99.9991% Finality",
    icon: "mesh",
  },
  {
    title: "Predictive Vault Engine",
    text: "30초 주기 AI 게이트가 유동성 리스크를 즉시 예측하고 완화합니다.",
    metric: "Drift Error 0.018",
    icon: "ai",
  },
  {
    title: "RWA Conversion Grid",
    text: "부동산·IP·디지털 자산을 실물형 토큰으로 즉시 매핑합니다.",
    metric: "12개 시장·지역 동시 발행",
    icon: "rwa",
  },
];

const ecosystemItems = [
  { name: "Cross-chain Bridge", icon: "bridge" },
  { name: "Institution API Mesh", icon: "api" },
  { name: "Programmable Settlement", icon: "code" },
  { name: "Verifiable Identity", icon: "id" },
  { name: "Composable Custody Wallet", icon: "wallet" },
  { name: "RWA Liquidity Gateway", icon: "gateway" },
];

const roadmap = [
  { period: "Q1", title: "Genesis Alpha", detail: "메인넷 게이트웨이 오픈, 거버넌스와 배포 브릿지 동시 실행." },
  { period: "Q2", title: "Fluid Core", detail: "AI 위험 엔진 베타 배포, 기관 테스트넷을 동기화." },
  { period: "Q3", title: "Global Mesh", detail: "주요 L1/L2 5개 체인 동기화, 규제 대응 온보딩 공개." },
  { period: "Q4", title: "Open Orbit", detail: "SDK 공개와 런타임 마켓플레이스, 마이크로 L2 모듈 공개." },
];

const perfBars = [
  { label: "YOU&I Stack", value: 10000, color: "from-cyan-400 to-cyan-300", pct: 100 },
  { label: "Avg. Layer 2", value: 4000, color: "from-slate-500 to-slate-400", pct: 40 },
  { label: "Avg. Layer 1", value: 700, color: "from-slate-600 to-slate-500", pct: 7 },
];

const footerLinks = {
  Technology: ["Quantum Mesh", "Vault Engine", "RWA Grid", "SDK"],
  Ecosystem: ["Bridge", "API Mesh", "Settlement", "Custody"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy", "Terms", "Compliance"],
};

/* ── Icons ── */

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function FeatureIcon({ type }: { type: string }) {
  const cls = "h-10 w-10";
  if (type === "mesh")
    return (
      <svg className={cls} viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="8" r="3" fill="#67e8f9" fillOpacity="0.8" />
        <circle cx="8" cy="32" r="3" fill="#67e8f9" fillOpacity="0.6" />
        <circle cx="32" cy="32" r="3" fill="#67e8f9" fillOpacity="0.6" />
        <circle cx="20" cy="22" r="2.5" fill="#22d3ee" fillOpacity="0.4" />
        <line x1="20" y1="11" x2="20" y2="19.5" stroke="#67e8f9" strokeOpacity="0.5" />
        <line x1="20" y1="24.5" x2="10" y2="30" stroke="#67e8f9" strokeOpacity="0.4" />
        <line x1="20" y1="24.5" x2="30" y2="30" stroke="#67e8f9" strokeOpacity="0.4" />
        <line x1="8" y1="32" x2="32" y2="32" stroke="#67e8f9" strokeOpacity="0.2" strokeDasharray="2 2" />
      </svg>
    );
  if (type === "ai")
    return (
      <svg className={cls} viewBox="0 0 40 40" fill="none">
        <rect x="10" y="10" width="20" height="20" rx="4" stroke="#67e8f9" strokeOpacity="0.5" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="5" stroke="#22d3ee" strokeOpacity="0.7" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="2" fill="#67e8f9" fillOpacity="0.8" />
        <line x1="20" y1="5" x2="20" y2="10" stroke="#67e8f9" strokeOpacity="0.3" />
        <line x1="20" y1="30" x2="20" y2="35" stroke="#67e8f9" strokeOpacity="0.3" />
        <line x1="5" y1="20" x2="10" y2="20" stroke="#67e8f9" strokeOpacity="0.3" />
        <line x1="30" y1="20" x2="35" y2="20" stroke="#67e8f9" strokeOpacity="0.3" />
      </svg>
    );
  return (
    <svg className={cls} viewBox="0 0 40 40" fill="none">
      <rect x="6" y="18" width="12" height="16" rx="2" stroke="#67e8f9" strokeOpacity="0.5" strokeWidth="1.2" />
      <rect x="22" y="12" width="12" height="22" rx="2" stroke="#67e8f9" strokeOpacity="0.5" strokeWidth="1.2" />
      <path d="M18 26h4" stroke="#22d3ee" strokeOpacity="0.6" strokeWidth="1.2" />
      <circle cx="12" cy="24" r="2" fill="#67e8f9" fillOpacity="0.4" />
      <circle cx="28" cy="20" r="2" fill="#67e8f9" fillOpacity="0.4" />
    </svg>
  );
}

function EcoIcon({ type }: { type: string }) {
  const d: Record<string, string> = {
    bridge: "M4 16h24M8 16V8M24 16V8M8 8h16",
    api: "M12 4v8M20 4v8M8 12h16M8 20h16M12 20v8M20 20v8",
    code: "M10 8l-4 4 4 4M22 8l4 4-4 4M14 20l4-8",
    id: "M8 6h16v20H8zM12 12h8M12 16h6",
    wallet: "M6 10h20v14H6zM6 10l4-4h12l4 4M14 17h4",
    gateway: "M4 16h8M20 16h8M12 8v16M20 8v16M12 16h8",
  };
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="#67e8f9" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={d[type] || d.bridge} />
    </svg>
  );
}

/* ── Network Diagram (used as background) ── */

function NetworkBg() {
  const nodes = [
    { x: 50, y: 15, r: 6, primary: true },
    { x: 20, y: 40, r: 4 }, { x: 80, y: 40, r: 4 },
    { x: 10, y: 70, r: 3 }, { x: 35, y: 80, r: 3 },
    { x: 55, y: 65, r: 3 }, { x: 75, y: 75, r: 3 },
    { x: 90, y: 60, r: 3 }, { x: 30, y: 55, r: 2.5 },
    { x: 65, y: 50, r: 2.5 },
  ];
  const edges = [[0,1],[0,2],[1,3],[1,4],[1,8],[2,5],[2,6],[2,7],[2,9],[8,3],[8,4],[9,5],[9,6],[4,5],[6,7]];

  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" fill="none">
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke="#67e8f9" strokeOpacity="0.08" strokeWidth="0.3" />
      ))}
      {[0, 2, 4, 7].map((ei) => (
        <motion.circle
          key={`p${ei}`} r="0.8" fill="#67e8f9" fillOpacity="0.5"
          animate={{
            cx: [nodes[edges[ei][0]].x, nodes[edges[ei][1]].x],
            cy: [nodes[edges[ei][0]].y, nodes[edges[ei][1]].y],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: ei * 0.7, ease: "linear" }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill="#050608" stroke="#67e8f9" strokeOpacity={n.primary ? "0.4" : "0.12"} strokeWidth={n.primary ? "0.5" : "0.3"} />
      ))}
    </svg>
  );
}

/* ── Dashboard (full-width, text overlaid) ── */

function DashboardSection() {
  const bars = [65, 82, 45, 90, 72, 58, 85, 68, 78, 92, 55, 88];
  const chains = [
    { name: "ETH", tps: 1842 },
    { name: "BNB", tps: 1256 },
    { name: "MATIC", tps: 2104 },
    { name: "AVAX", tps: 1583 },
    { name: "SOL", tps: 2490 },
    { name: "ARB", tps: 967 },
    { name: "OP", tps: 1371 },
  ];

  return (
    <section className="relative z-10 px-6 py-32 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        {/* Section header overlapping the dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mb-10 max-w-lg"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/60">Console</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">통합 콘솔</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            하나의 대시보드에서 멀티체인 자산, TVL, 트랜잭션을 실시간으로 모니터링하고 제어합니다.
          </p>
        </motion.div>

        {/* Full-width dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl border border-white/6 bg-[#0a0c14]"
        >
          <div className="grid gap-3 p-5 sm:grid-cols-4">
            {/* Stats row — spans full width, embedded within chart */}
            {[
              { label: "Total Value Locked", val: "$2.4B", color: "text-cyan-300" },
              { label: "24h Volume", val: "$847M", color: "text-white" },
              { label: "Average APY", val: "12.4%", color: "text-green-400" },
              { label: "Active Txns/s", val: "9,847", color: "text-white" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-white/6 bg-white/2 p-4">
                <p className="text-[9px] uppercase tracking-wider text-slate-500">{s.label}</p>
                <p className={`mt-1.5 text-xl font-bold ${s.color}`}>{s.val}</p>
              </div>
            ))}

            {/* Main chart area */}
            <div className="sm:col-span-3 rounded-xl border border-white/6 bg-white/2 p-5">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-wider text-slate-500">Transaction Volume (30d)</p>
                <div className="flex gap-3">
                  {["1D", "7D", "30D"].map((t, i) => (
                    <span key={t} className={`text-[10px] ${i === 2 ? "text-cyan-300" : "text-slate-600"}`}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-end gap-0.75" style={{ height: 120 }}>
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t bg-linear-to-t from-cyan-500/30 to-cyan-300/50"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.03 }}
                  />
                ))}
              </div>
              {/* Inline feature bullets within the chart */}
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/6 pt-4">
                {["실시간 멀티체인 모니터링", "AI 리스크 알림", "원클릭 크로스체인 정산"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#67e8f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6l3 3 5-5" /></svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Active chains — sidebar-like but integrated */}
            <div className="rounded-xl border border-white/6 bg-white/2 p-4">
              <p className="text-[9px] uppercase tracking-wider text-slate-500">Active Chains</p>
              <div className="mt-3 flex flex-col gap-2">
                {chains.map((chain, i) => (
                  <motion.div
                    key={chain.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.04 }}
                    className="flex items-center gap-2 rounded-lg border border-white/4 bg-white/2 px-3 py-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400/80" />
                    <span className="text-[10px] font-medium text-slate-300">{chain.name}</span>
                    <span className="ml-auto text-[9px] tabular-nums text-slate-500">{chain.tps} tps</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/5 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-cyan-400/4 blur-[60px]" />
        </motion.div>
      </div>
    </section>
  );
}

/* ── Performance (stats integrated into chart) ── */

function useCountUp(target: number, duration: number, inView: boolean) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return count;
}

function PerformanceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative z-10 px-6 py-32 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/60">Performance</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">Web Scale Performance</h2>
        </motion.div>

        {/* Stats + chart unified in one card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-14 overflow-hidden rounded-2xl border border-white/6 bg-white/2 p-8 sm:p-10"
        >
          {/* Stats row at top of card */}
          <div className="mb-10 grid grid-cols-1 gap-6 border-b border-white/6 pb-8 sm:grid-cols-3">
            {[
              { value: "10,000+", unit: "TPS", desc: "초당 트랜잭션 처리" },
              { value: "<1s", unit: "", desc: "트랜잭션 완결성" },
              { value: "<$0.001", unit: "", desc: "트랜잭션 수수료" },
            ].map((stat) => (
              <div key={stat.desc}>
                <p className="text-2xl font-bold text-white sm:text-4xl">
                  {stat.value}
                  {stat.unit && <span className="ml-1 text-base font-normal text-slate-500">{stat.unit}</span>}
                </p>
                <p className="mt-1 text-xs tracking-wider text-slate-500">{stat.desc}</p>
              </div>
            ))}
          </div>

          {/* Bar chart directly below */}
          <div className="space-y-6">
            {perfBars.map((bar, i) => {
              const CountVal = () => {
                const count = useCountUp(bar.value, 1800, inView);
                return <>{count.toLocaleString()}</>;
              };
              return (
                <div key={bar.label} className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-slate-300">{bar.label}</span>
                    <span className="text-lg font-bold tabular-nums text-white sm:text-3xl">
                      <CountVal />
                      <span className="ml-1 text-sm font-normal text-slate-500">TPS</span>
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className={`h-full rounded-full bg-linear-to-r ${bar.color}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${bar.pct}%` } : { width: 0 }}
                      transition={{ duration: 1.4, delay: 0.15 + i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/5 blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
}

/* ── Helpers ── */

function SectionDivider() {
  return (
    <div className="relative z-20 flex items-center justify-center py-4">
      <div className="h-px w-full max-w-5xl bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

/* ── Page ── */

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion() ?? false;
  const heroFloat = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const ambientFloat = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogoClick = () => {
    if (typeof window === "undefined") return;
    if (window.scrollY <= 0) { window.location.reload(); return; }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <I18nProvider>
      <main className="relative isolate min-h-screen overflow-x-hidden bg-[#050608] text-slate-100">
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.06),transparent_50%)]" />
        </div>

        {/* Header */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/6 bg-[#050608]/80 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
            <button type="button" onClick={handleLogoClick} className="cursor-pointer text-lg font-bold tracking-tight text-white">YOU&I</button>
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-slate-400 transition-colors duration-200 hover:text-white">{link.label}</a>
              ))}
            </nav>
            <div className="hidden md:block">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10">
                시작하기 <ArrowIcon />
              </a>
            </div>
            <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="flex items-center justify-center text-slate-200 md:hidden" aria-label={mobileOpen ? "Close menu" : "Open menu"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {mobileOpen ? (<><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>) : (<><line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" /></>)}
              </svg>
            </button>
          </div>
          <AnimatePresence>
            {mobileOpen && (
              <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden border-t border-white/6 md:hidden">
                <div className="flex flex-col gap-4 px-6 py-6 text-sm font-medium text-slate-300">
                  {navLinks.map((link) => (<a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="transition hover:text-white">{link.label}</a>))}
                  <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white">시작하기 <ArrowIcon /></a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* ═══ Hero ═══ */}
        <motion.section id="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-14">
          <motion.div style={{ y: heroFloat }} className="absolute inset-0 -z-10" aria-hidden>
            <motion.div style={{ y: ambientFloat }} className="absolute inset-0">
              <div className="absolute left-1/2 top-[-18%] h-[140vh] w-[140vw] -translate-x-1/2 overflow-hidden">
                <div className="h-full w-full origin-center scale-105">
                  <HeroFluidCanvas reducedMotion={reduceMotion} />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />Web3 Infrastructure
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-8 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-white">차세대 Web3</span><br />
              <span className="bg-linear-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">런칭 인프라 코어</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              자산, 결제, 신원, 거버넌스를 하나의 런치 콘솔에서 제어합니다.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }} className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#050608] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">시작하기 <ArrowIcon /></a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-white/30 hover:bg-white/5">기술 살펴보기 <ArrowIcon /></a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.1 }} className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/6 bg-white/6 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-[#050608] px-6 py-5 text-center">
                  <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs tracking-wider text-slate-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-16">
              <motion.a href="#features" animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="inline-flex flex-col items-center gap-2 text-slate-500">
                <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v10M4 9l4 4 4-4" /></svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* ═══ Features — cards float over a network background ═══ */}
        <section id="features" className="relative z-10 overflow-hidden px-6 py-32 sm:px-10 lg:px-14">
          {/* Network lines as section background */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <NetworkBg />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#050608] via-transparent to-[#050608]" />

          <div className="relative mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/60">Operating Stack</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">핵심 스택</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400">모듈은 독립적으로 진화하지만, 운영은 하나의 콘솔에서 통합됩니다.</p>
            </motion.div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {featureCards.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(6,182,212,0.12)" }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050608]/80 p-8 backdrop-blur-sm transition-colors hover:border-cyan-300/25"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/40 to-transparent" />
                  <div className="mb-5"><FeatureIcon type={f.icon} /></div>
                  <h3 className="text-xl font-bold text-white">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300/80">{f.text}</p>
                  <p className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-cyan-100">{f.metric}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <SectionDivider />

        {/* ═══ Dashboard — full-width, text overlaid ═══ */}
        <DashboardSection />
        <SectionDivider />

        {/* ═══ Performance — unified card ═══ */}
        <PerformanceSection />
        <SectionDivider />

        {/* ═══ Ecosystem — network bg with floating cards ═══ */}
        <section id="ecosystem" className="relative z-10 overflow-hidden px-6 py-32 sm:px-10 lg:px-14">
          {/* Network bg behind everything */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <NetworkBg />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#050608] via-[#050608]/80 to-[#050608]" />

          <div className="relative mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/60">Network</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">운영 레이어</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400">거버넌스, 결제, 신원, 토큰 레이어를 하나로 축약한 실행형 런칭 패브릭.</p>
            </motion.div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ecosystemItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.06 }}
                  whileHover={{ y: -4, borderColor: "rgba(103,232,249,0.2)" }}
                  className="flex items-center gap-4 rounded-xl border border-white/6 bg-[#050608]/70 px-6 py-5 backdrop-blur-sm transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/6 bg-white/3">
                    <EcoIcon type={item.icon} />
                  </div>
                  <span className="text-sm font-medium text-slate-200">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <SectionDivider />

        {/* ═══ Roadmap ═══ */}
        <section id="roadmap" className="relative z-10 px-6 py-32 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/60">Roadmap</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">2026 Launch Blueprint</h2>
            </motion.div>

            {/* Horizontal timeline */}
            <div className="relative mt-14">
              {/* Connecting line */}
              <div className="absolute left-0 right-0 top-8 hidden h-px bg-linear-to-r from-transparent via-cyan-400/20 to-transparent lg:block" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {roadmap.map((node, i) => (
                  <motion.div
                    key={node.period}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ borderColor: "rgba(103,232,249,0.2)" }}
                    className="relative rounded-2xl border border-white/6 bg-white/2 p-6 transition-colors"
                  >
                    {/* Dot on timeline */}
                    <div className="absolute -top-1.25 left-1/2 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-cyan-400/40 bg-[#050608] lg:block" />
                    <span className="inline-flex w-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold tracking-widest text-cyan-300">{node.period}</span>
                    <h3 className="mt-4 text-lg font-bold text-white">{node.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{node.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <SectionDivider />

        {/* ═══ Contact CTA ═══ */}
        <section id="contact" className="relative z-10 overflow-hidden px-6 py-32 sm:px-10 lg:px-14">
          <div className="pointer-events-none absolute inset-0 opacity-30"><NetworkBg /></div>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#050608] via-transparent to-[#050608]" />
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7 }} className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
              함께 미래를<br />
              <span className="bg-linear-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">만들 준비가 되어있나요?</span>
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-400">YOU&I 생태계에 참여해 차세대 디지털 자산 혁신의 일원이 되어주세요. 파트너십 기회를 탐색하려면 문의하세요.</p>
            <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
              <a href="mailto:contact@youandi.io" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#050608] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">문의하기 <ArrowIcon /></a>
              <a href="#ecosystem" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-white/30 hover:bg-white/5">생태계 살펴보기</a>
            </div>
          </motion.div>
        </section>

        {/* ═══ Footer ═══ */}
        <footer className="relative z-10 border-t border-white/6 px-6 pt-16 pb-8 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
              <div className="lg:col-span-1">
                <span className="text-lg font-bold text-white">YOU&I</span>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">차세대 디지털 자산 생태계를 구축하는 Web3 인프라 플랫폼.</p>
              </div>
              {Object.entries(footerLinks).map(([cat, links]) => (
                <div key={cat}>
                  <h4 className="text-sm font-semibold text-slate-300">{cat}</h4>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {links.map((l) => (<li key={l}><a href="#" className="text-sm text-slate-500 transition-colors duration-200 hover:text-slate-300">{l}</a></li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-8 sm:flex-row">
              <p className="text-xs text-slate-600">© {new Date().getFullYear()} YOU&I Holdings. All rights reserved.</p>
              <p className="text-xs text-slate-600">Web3 Infrastructure Platform</p>
            </div>
          </div>
        </footer>
      </main>
    </I18nProvider>
  );
}
