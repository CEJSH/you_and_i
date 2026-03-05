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
import { useState, useEffect, useRef } from "react";

/* ── Data ── */

const pageCopy = {
  ko: {
    header: {
      navLinks: [
        { href: "#hero", label: "OVERVIEW" },
        { href: "#features", label: "CORE" },
        { href: "#ecosystem", label: "NETWORK" },
        { href: "#roadmap", label: "BLUEPRINT" },
      ],
      cta: "시작하기",
    },
    hero: {
      label: "Web3 Infrastructure",
      title1: "차세대 Web3",
      title2: "런칭 인프라 코어",
      desc: "자산, 결제, 신원, 거버넌스를 하나의 런치 콘솔에서 제어합니다.",
      ctaPrimary: "시작하기",
      ctaSecondary: "기술 살펴보기",
      stats: [
        { value: "150+", label: "연동 체인" },
        { value: "$2.4B", label: "TVL 규모" },
        { value: "99.99%", label: "Finality" },
        { value: "12", label: "시장·지역" },
      ],
      trustStrip: "Connected Networks",
      scroll: "스크롤",
    },
    trustStrip: {
      badgeLabel: "Connected Networks",
      badges: [
        { name: "LayerZero", note: "Cross-Chain" },
        { name: "Aptos", note: "Institutional" },
        { name: "Polygon", note: "Settlement" },
        { name: "Arbitrum", note: "Liquidity" },
        { name: "Flow", note: "Identity" },
        { name: "Sui", note: "Wallet" },
      ],
    },
    features: {
      eyebrow: "Product Graph",
      title1: "모듈 통합 운영 아키텍처",
      title2: "성과 중심 성장 플랫폼",
      desc: "YOU&I Quest, Starboard, Earndrop, Passport, Score, Identity를 단일 운영 체계로 통합해 캠페인 실행, 분석 의사결정, 지급, 인증·관리까지 핵심 지표 기반의 연계 프로세스로 제공합니다.",
      cards: [
        {
          title: "YOU&I Quest",
          text: "캠페인, 미션, 보상을 단일 플로우로 연결해 유저 액션을 즉시 활성화합니다.",
          metric: "783K+ Total Missions",
          icon: "quest",
        },
        {
          title: "YOU&I Starboard",
          text: "데이터 기반 성장 인사이트로 성과 지표를 실시간 분석하고 액션으로 전환합니다.",
          metric: "Real-time Growth Signals",
          icon: "starboard",
        },
        {
          title: "YOU&I Earndrop",
          text: "맞춤형 에어드롭 정책으로 토큰 분배를 안전하게 자동 실행합니다.",
          metric: "30M+ Wallet Reach",
          icon: "earndrop",
        },
        {
          title: "YOU&I Passport",
          text: "프라이버시를 보존하면서 크로스앱 신원 인증을 통합합니다.",
          metric: "1046+ Verified Holders",
          icon: "passport",
        },
        {
          title: "YOU&I Score",
          text: "온체인 활동, 자산, 기여도를 종합해 신뢰 점수를 모델링합니다.",
          metric: "495K+ Holders",
          icon: "score",
        },
        {
          title: "YOU&I Identity Protocol",
          text: "검증 가능한 자격 증명을 발급하고 공유하는 DID 프로토콜입니다.",
          metric: "21.7M+ Credentials",
          icon: "identity",
        },
      ],
    },
    launchHighlights: [
      {
        title: "모듈형 런칭",
        value: "99.9%",
        desc: "모듈 간 연결 성공률",
      },
      {
        title: "자동화 배포",
        value: "30초",
        desc: "네트워크 업데이트 적용 속도",
      },
      {
        title: "리스크 차단",
        value: "1.2ms",
        desc: "이상 거래 탐지 반응 속도",
      },
    ],
    dashboard: {
      eyebrow: "Console",
      title: "통합 콘솔",
      desc: "하나의 대시보드에서 멀티체인 자산, TVL, 트랜잭션을 실시간으로 모니터링하고 제어합니다.",
      tabs: [
        { label: "Total Value Locked", value: "$2.4B", color: "text-cyan-300" },
        { label: "24h Volume", value: "$847M", color: "text-white" },
        { label: "Average APY", value: "12.4%", color: "text-green-400" },
        { label: "Active Txns/s", value: "9,847", color: "text-white" },
      ],
      chartTitle: "Transaction Volume (30d)",
      timeframe: ["1D", "7D", "30D"],
      bulletItems: [
        "실시간 멀티체인 모니터링",
        "AI 리스크 알림",
        "원클릭 크로스체인 정산",
      ],
      chainTitle: "Active Chains",
      chainItems: [
        { name: "ETH", tps: 1842 },
        { name: "BNB", tps: 1256 },
        { name: "MATIC", tps: 2104 },
        { name: "AVAX", tps: 1583 },
        { name: "SOL", tps: 2490 },
        { name: "ARB", tps: 967 },
        { name: "OP", tps: 1371 },
      ],
      tpsLabel: "tps",
    },
    performance: {
      eyebrow: "Performance",
      title: "Web Scale Performance",
      top: [
        { value: "10,000+", unit: "TPS", desc: "초당 트랜잭션 처리" },
        { value: "<1s", unit: "", desc: "트랜잭션 완결성" },
        { value: "<$0.001", unit: "", desc: "트랜잭션 수수료" },
      ],
      bars: [
        {
          label: "YOU&I Stack",
          value: 10000,
          color: "from-cyan-400 to-cyan-300",
          pct: 100,
        },
        {
          label: "Avg. Layer 2",
          value: 4000,
          color: "from-slate-500 to-slate-400",
          pct: 40,
        },
        {
          label: "Avg. Layer 1",
          value: 700,
          color: "from-slate-600 to-slate-500",
          pct: 7,
        },
      ],
    },
    audience: {
      blocks: [
        {
          title: "Enterprise Clients",
          desc: "보안·규제 리스크를 내재한 온보딩부터 네트워크 운영까지 한 번에.",
          action: "문의하기",
        },
        {
          title: "Developers",
          desc: "API, 정책 엔진, 오케스트레이션을 모듈로 연결해 빠르게 배포.",
          action: "문서 보기",
        },
        {
          title: "Everyday Builders",
          desc: "프로젝트 런칭부터 운영까지 운영 부담을 줄이는 단일 런치 콘솔.",
          action: "시작하기",
        },
      ],
    },
    ecosystem: {
      eyebrow: "Network",
      title: "운영 레이어",
      desc: "거버넌스, 결제, 신원, 토큰 레이어를 하나로 축약한 실행형 런칭 패브릭.",
      items: [
        { name: "Cross-chain Bridge", icon: "bridge" },
        { name: "Institution API Mesh", icon: "api" },
        { name: "Programmable Settlement", icon: "code" },
        { name: "Verifiable Identity", icon: "id" },
        { name: "Composable Custody Wallet", icon: "wallet" },
        { name: "RWA Liquidity Gateway", icon: "gateway" },
      ],
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "2026 Launch Blueprint",
      phases: [
        {
          period: "Q1",
          title: "Genesis Alpha",
          detail: "메인넷 게이트웨이 오픈, 거버넌스와 배포 브릿지 동시 실행.",
        },
        {
          period: "Q2",
          title: "Fluid Core",
          detail: "AI 위험 엔진 베타 배포, 기관 테스트넷을 동기화.",
        },
        {
          period: "Q3",
          title: "Global Mesh",
          detail: "주요 L1/L2 5개 체인 동기화, 규제 대응 온보딩 공개.",
        },
        {
          period: "Q4",
          title: "Open Orbit",
          detail: "SDK 공개와 런타임 마켓플레이스, 마이크로 L2 모듈 공개.",
        },
      ],
    },
    contact: {
      title1: "함께 미래를",
      title2: "만들 준비가 되어있나요?",
      desc: "YOU&I 생태계에 참여해 차세대 디지털 자산 혁신의 일원이 되어주세요. 파트너십 기회를 탐색하려면 문의하세요.",
      contactBtn: "문의하기",
      ecosystemBtn: "생태계 살펴보기",
    },
    footer: {
      description: "차세대 디지털 자산 생태계를 구축하는 Web3 인프라 플랫폼.",
      links: {
        Technology: ["Quantum Mesh", "Vault Engine", "RWA Grid", "SDK"],
        Ecosystem: ["Bridge", "API Mesh", "Settlement", "Custody"],
        Company: ["About", "Blog", "Careers", "Press"],
        Legal: ["Privacy", "Terms", "Compliance"],
      },
      copyright: "© 2026 YOU&I Holdings. All rights reserved.",
      legal: "Web3 Infrastructure Platform",
    },
    labels: {
      active: "활성",
      tps: "tps",
      from: "부터",
      to: "까지",
      scan: "Scan",
      networkLine: "Network Line",
    },
    ctaButtons: {
      contact: "문의하기",
      explore: "생태계 살펴보기",
    },
  },
  en: {
    header: {
      navLinks: [
        { href: "#hero", label: "Overview" },
        { href: "#features", label: "Core" },
        { href: "#ecosystem", label: "Network" },
        { href: "#roadmap", label: "Blueprint" },
      ],
      cta: "Get Started",
    },
    hero: {
      label: "Web3 Infrastructure",
      title1: "Next-Gen Web3",
      title2: "Launch Infrastructure Core",
      desc: "Control assets, payments, identity, and governance from one launch console.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Explore Technology",
      stats: [
        { value: "150+", label: "Connected Chains" },
        { value: "$2.4B", label: "TVL Scale" },
        { value: "99.99%", label: "Finality" },
        { value: "12", label: "Markets" },
      ],
      trustStrip: "Connected Networks",
      scroll: "Scroll",
    },
    trustStrip: {
      badgeLabel: "Connected Networks",
      badges: [
        { name: "LayerZero", note: "Cross-Chain" },
        { name: "Aptos", note: "Institutional" },
        { name: "Polygon", note: "Settlement" },
        { name: "Arbitrum", note: "Liquidity" },
        { name: "Flow", note: "Identity" },
        { name: "Sui", note: "Wallet" },
      ],
    },
    features: {
      eyebrow: "Product Graph",
      title1: "Modular Operating Architecture",
      title2: "Growth Platform in One Place",
      desc: "Unify Quest, Starboard, Earndrop, Passport, Score, and Identity into one operating model that links campaign execution, analysis insights, token allocation, and identity governance.",
      cards: [
        {
          title: "YOU&I Quest",
          text: "Connect campaign design, missions, and rewards into one execution flow to activate users faster.",
          metric: "783K+ Total Missions",
          icon: "quest",
        },
        {
          title: "YOU&I Starboard",
          text: "Analyze growth signals in real time and convert performance data directly into action.",
          metric: "Real-time Growth Signals",
          icon: "starboard",
        },
        {
          title: "YOU&I Earndrop",
          text: "Run wallet targeting and token distributions with policy-based automation and controls.",
          metric: "30M+ Wallet Reach",
          icon: "earndrop",
        },
        {
          title: "YOU&I Passport",
          text: "Deliver cross-app identity verification with privacy preserved and auditable events.",
          metric: "1046+ Verified Holders",
          icon: "passport",
        },
        {
          title: "YOU&I Score",
          text: "Model trust scores using on-chain activity, asset history, and contribution metrics.",
          metric: "495K+ Holders",
          icon: "score",
        },
        {
          title: "YOU&I Identity Protocol",
          text: "Issue and share verifiable credentials through a DID protocol for trusted identity flows.",
          metric: "21.7M+ Credentials",
          icon: "identity",
        },
      ],
    },
    launchHighlights: [
      {
        title: "Modular Launch",
        value: "99.9%",
        desc: "Inter-module connection success rate.",
      },
      {
        title: "Automated Deployment",
        value: "30s",
        desc: "Network update rollout speed.",
      },
      {
        title: "Risk Blocking",
        value: "1.2ms",
        desc: "Anomaly detection response time.",
      },
    ],
    dashboard: {
      eyebrow: "Console",
      title: "Integrated Console",
      desc: "Monitor and control multi-chain assets, TVL, and transaction flow in one dashboard.",
      tabs: [
        { label: "Total Value Locked", value: "$2.4B", color: "text-cyan-300" },
        { label: "24h Volume", value: "$847M", color: "text-white" },
        { label: "Average APY", value: "12.4%", color: "text-green-400" },
        { label: "Active Txns/s", value: "9,847", color: "text-white" },
      ],
      chartTitle: "Transaction Volume (30d)",
      timeframe: ["1D", "7D", "30D"],
      bulletItems: [
        "Real-time multichain monitoring",
        "AI risk alerts",
        "One-click cross-chain settlement",
      ],
      chainTitle: "Active Chains",
      chainItems: [
        { name: "ETH", tps: 1842 },
        { name: "BNB", tps: 1256 },
        { name: "MATIC", tps: 2104 },
        { name: "AVAX", tps: 1583 },
        { name: "SOL", tps: 2490 },
        { name: "ARB", tps: 967 },
        { name: "OP", tps: 1371 },
      ],
      tpsLabel: "tps",
    },
    performance: {
      eyebrow: "Performance",
      title: "Web Scale Performance",
      top: [
        { value: "10,000+", unit: "TPS", desc: "Transactions per second" },
        { value: "<1s", unit: "", desc: "Transaction finality" },
        { value: "<$0.001", unit: "", desc: "Per-transaction fee" },
      ],
      bars: [
        {
          label: "YOU&I Stack",
          value: 10000,
          color: "from-cyan-400 to-cyan-300",
          pct: 100,
        },
        {
          label: "Avg. Layer 2",
          value: 4000,
          color: "from-slate-500 to-slate-400",
          pct: 40,
        },
        {
          label: "Avg. Layer 1",
          value: 700,
          color: "from-slate-600 to-slate-500",
          pct: 7,
        },
      ],
    },
    audience: {
      blocks: [
        {
          title: "Enterprise Clients",
          desc: "From onboarding and regulatory review to live operations, everything in one workflow.",
          action: "Contact Us",
        },
        {
          title: "Developers",
          desc: "Compose APIs, policy engines, and orchestration modules for fast release cycles.",
          action: "Read Docs",
        },
        {
          title: "Everyday Builders",
          desc: "Reduce operational friction from launch to growth with a single launch console.",
          action: "Get Started",
        },
      ],
    },
    ecosystem: {
      eyebrow: "Network",
      title: "Operating Layers",
      desc: "An execution-focused launch fabric combining governance, payments, identity, and token layers.",
      items: [
        { name: "Cross-chain Bridge", icon: "bridge" },
        { name: "Institution API Mesh", icon: "api" },
        { name: "Programmable Settlement", icon: "code" },
        { name: "Verifiable Identity", icon: "id" },
        { name: "Composable Custody Wallet", icon: "wallet" },
        { name: "RWA Liquidity Gateway", icon: "gateway" },
      ],
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "2026 Launch Blueprint",
      phases: [
        {
          period: "Q1",
          title: "Genesis Alpha",
          detail: "Open mainnet gateway and run governance and deployment bridges in parallel.",
        },
        {
          period: "Q2",
          title: "Fluid Core",
          detail: "Deploy AI risk engine beta and synchronize with institution testnets.",
        },
        {
          period: "Q3",
          title: "Global Mesh",
          detail: "Integrate the top five L1/L2 chains and launch compliant onboarding.",
        },
        {
          period: "Q4",
          title: "Open Orbit",
          detail: "Release SDK, runtime marketplace, and micro L2 modules.",
        },
      ],
    },
    contact: {
      title1: "Ready to Build the",
      title2: "Future Together?",
      desc: "Join the YOU&I ecosystem and become part of next-generation digital-asset innovation. Contact us to explore partnerships.",
      contactBtn: "Contact Us",
      ecosystemBtn: "Explore the Ecosystem",
    },
    footer: {
      description: "Building a Web3 infrastructure platform for the next generation of digital assets.",
      links: {
        Technology: ["Quantum Mesh", "Vault Engine", "RWA Grid", "SDK"],
        Ecosystem: ["Bridge", "API Mesh", "Settlement", "Custody"],
        Company: ["About", "Blog", "Careers", "Press"],
        Legal: ["Privacy", "Terms", "Compliance"],
      },
      copyright: "© 2026 YOU&I Holdings. All rights reserved.",
      legal: "Web3 Infrastructure Platform",
    },
    labels: {
      active: "Active",
      tps: "tps",
      from: "from",
      to: "to",
      scan: "Scan",
      networkLine: "Network Line",
    },
    ctaButtons: {
      contact: "Contact Us",
      explore: "Explore Ecosystem",
    },
  },
};

/* ── Icons ── */

function ArrowIcon() {
  return (
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
      <path d="M3 8h10M9 4l4 4-4 4" />
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
    <svg
      width="20"
      height="20"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#67e8f9"
      strokeOpacity="0.6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d[type] || d.bridge} />
    </svg>
  );
}

function FeatureGraphic({ type }: { type: string }) {
  if (type === "quest") {
    return (
      <svg viewBox="0 0 320 170" className="h-44 w-full" fill="none">
        <rect
          x="24"
          y="18"
          width="160"
          height="112"
          rx="6"
          stroke="#67e8f9"
          strokeOpacity="0.35"
        />
        <line
          x1="24"
          y1="58"
          x2="184"
          y2="58"
          stroke="#67e8f9"
          strokeOpacity="0.35"
        />
        <circle cx="44" cy="38" r="8" stroke="#22d3ee" strokeOpacity="0.8" />
        <path d="M40 38h8M44 34v8" stroke="#22d3ee" />
        <rect
          x="40"
          y="76"
          width="72"
          height="8"
          rx="3"
          fill="#22d3ee"
          fillOpacity="0.28"
        />
        <rect
          x="40"
          y="92"
          width="98"
          height="7"
          rx="3"
          fill="#67e8f9"
          fillOpacity="0.18"
        />
        <rect
          x="132"
          y="72"
          width="38"
          height="44"
          rx="5"
          fill="#22d3ee"
          fillOpacity="0.35"
        />
        <circle cx="151" cy="90" r="8" fill="#22d3ee" fillOpacity="0.5" />
        <path d="M151 85v10M146 90h10" stroke="#67e8f9" strokeOpacity="0.7" />
      </svg>
    );
  }
  if (type === "starboard") {
    return (
      <svg viewBox="0 0 320 170" className="h-44 w-full" fill="none">
        <polygon
          points="48,86 80,68 112,86 112,120 80,138 48,120"
          stroke="#67e8f9"
          strokeOpacity="0.38"
        />
        <path
          d="M112 86h58c8 0 14-6 14-14v-8"
          stroke="#22d3ee"
          strokeOpacity="0.8"
          strokeDasharray="3 3"
        />
        <path
          d="M112 102h44c8 0 14-6 14-14"
          stroke="#38bdf8"
          strokeOpacity="0.8"
        />
        <rect x="174" y="44" width="114" height="22" rx="3" stroke="#22d3ee" />
        <rect x="174" y="78" width="118" height="24" rx="3" stroke="#06b6d4" />
        <rect
          x="174"
          y="112"
          width="98"
          height="20"
          rx="3"
          stroke="#67e8f9"
          strokeOpacity="0.5"
          strokeDasharray="2 3"
        />
        <circle cx="292" cy="22" r="9" stroke="#67e8f9" strokeOpacity="0.5" />
        <path d="M288 22h8M292 18v8" stroke="#67e8f9" strokeOpacity="0.65" />
      </svg>
    );
  }
  if (type === "earndrop") {
    return (
      <svg viewBox="0 0 320 170" className="h-44 w-full" fill="none">
        <polygon
          points="144,48 186,72 186,118 144,142 102,118 102,72"
          stroke="#67e8f9"
          strokeOpacity="0.4"
        />
        <path d="M56 95h46M186 95h78" stroke="#67e8f9" strokeOpacity="0.35" />
        <path
          d="M56 95c-12 0-16-8-16-16V58"
          stroke="#22d3ee"
          strokeOpacity="0.7"
          strokeDasharray="3 3"
        />
        <path
          d="M264 95c12 0 16 8 16 16v20"
          stroke="#22d3ee"
          strokeOpacity="0.7"
          strokeDasharray="3 3"
        />
        <circle cx="40" cy="58" r="6" stroke="#67e8f9" strokeOpacity="0.5" />
        <circle cx="280" cy="131" r="6" stroke="#67e8f9" strokeOpacity="0.5" />
        <rect x="136" y="82" width="6" height="8" stroke="#22d3ee" />
        <rect x="148" y="82" width="6" height="8" stroke="#22d3ee" />
        <rect x="136" y="94" width="6" height="8" stroke="#38bdf8" />
        <rect x="148" y="94" width="6" height="8" stroke="#38bdf8" />
      </svg>
    );
  }
  if (type === "passport") {
    return (
      <svg viewBox="0 0 320 170" className="h-44 w-full" fill="none">
        <rect
          x="70"
          y="24"
          width="180"
          height="120"
          rx="8"
          stroke="#67e8f9"
          strokeOpacity="0.32"
          strokeDasharray="3 7"
        />
        {[0, 1, 2, 3, 4, 5].map((n) => (
          <path
            key={n}
            d={`M140 ${44 + n * 12}c-22 0-40 13-40 30`}
            stroke="#67e8f9"
            strokeOpacity="0.6"
          />
        ))}
        <rect x="114" y="76" width="10" height="10" stroke="#22d3ee" />
        <rect x="152" y="94" width="10" height="10" stroke="#22d3ee" />
        <rect x="92" y="102" width="10" height="10" stroke="#22d3ee" />
      </svg>
    );
  }
  if (type === "score") {
    return (
      <svg viewBox="0 0 320 170" className="h-44 w-full" fill="none">
        <circle
          cx="160"
          cy="84"
          r="58"
          stroke="#67e8f9"
          strokeOpacity="0.24"
          strokeDasharray="3 8"
        />
        <polygon
          points="160,34 214,62 204,128 120,118 98,56"
          stroke="#22d3ee"
          strokeWidth="2"
        />
        <path d="M160 34L214 62" stroke="#38bdf8" strokeOpacity="0.75" />
        <path d="M120 118L204 128" stroke="#38bdf8" strokeOpacity="0.75" />
        <text x="77" y="76" fill="#67e8f9" fillOpacity="0.65" fontSize="10">
          HUMANITY
        </text>
        <text x="218" y="84" fill="#67e8f9" fillOpacity="0.65" fontSize="10">
          FAME
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 170" className="h-44 w-full" fill="none">
      <rect
        x="28"
        y="42"
        width="264"
        height="86"
        rx="4"
        stroke="#67e8f9"
        strokeOpacity="0.35"
      />
      <polygon
        points="66,84 96,58 126,84 96,110"
        stroke="#67e8f9"
        strokeOpacity="0.5"
      />
      <polygon
        points="194,84 224,58 254,84 224,110"
        stroke="#67e8f9"
        strokeOpacity="0.5"
      />
      <line
        x1="126"
        y1="84"
        x2="194"
        y2="84"
        stroke="#22d3ee"
        strokeWidth="2"
      />
      <circle cx="160" cy="84" r="5" stroke="#38bdf8" />
      <line
        x1="160"
        y1="42"
        x2="160"
        y2="128"
        stroke="#67e8f9"
        strokeOpacity="0.2"
        strokeDasharray="3 4"
      />
      <line x1="228" y1="84" x2="286" y2="84" stroke="#22d3ee" />
      <circle cx="286" cy="84" r="4" fill="#22d3ee" fillOpacity="0.9" />
    </svg>
  );
}

/* ── Network Diagram (used as background) ── */

function NetworkBg() {
  const nodes = [
    { x: 50, y: 15, r: 6, primary: true },
    { x: 20, y: 40, r: 4 },
    { x: 80, y: 40, r: 4 },
    { x: 10, y: 70, r: 3 },
    { x: 35, y: 80, r: 3 },
    { x: 55, y: 65, r: 3 },
    { x: 75, y: 75, r: 3 },
    { x: 90, y: 60, r: 3 },
    { x: 30, y: 55, r: 2.5 },
    { x: 65, y: 50, r: 2.5 },
  ];
  const edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [1, 8],
    [2, 5],
    [2, 6],
    [2, 7],
    [2, 9],
    [8, 3],
    [8, 4],
    [9, 5],
    [9, 6],
    [4, 5],
    [6, 7],
  ];

  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#67e8f9"
          strokeOpacity="0.08"
          strokeWidth="0.3"
        />
      ))}
      {[0, 2, 4, 7].map((ei) => (
        <motion.circle
          key={`p${ei}`}
          r="0.8"
          fill="#67e8f9"
          fillOpacity="0.5"
          animate={{
            cx: [nodes[edges[ei][0]].x, nodes[edges[ei][1]].x],
            cy: [nodes[edges[ei][0]].y, nodes[edges[ei][1]].y],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: ei * 0.7,
            ease: "linear",
          }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill="#050608"
          stroke="#67e8f9"
          strokeOpacity={n.primary ? "0.4" : "0.12"}
          strokeWidth={n.primary ? "0.5" : "0.3"}
        />
      ))}
    </svg>
  );
}

/* ── Helpers ── */

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

/* ── Dashboard/Performance ── */

function DashboardSection({ copy }: { copy: (typeof pageCopy)["ko"]["dashboard"] }) {
  const bars = copy.tabs;
  const chart = [
    { name: "ETH", tps: 84 },
    { name: "BNB", tps: 66 },
    { name: "MATIC", tps: 62 },
    { name: "AVAX", tps: 74 },
    { name: "SOL", tps: 89 },
    { name: "ARB", tps: 72 },
    { name: "OP", tps: 84 },
  ];
  const label = copy.chartTitle;

  return (
    <section className="relative z-10 overflow-hidden px-6 py-32 sm:px-10 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_15%_12%,rgba(56,189,248,0.16),transparent_56%),linear-gradient(175deg,rgba(5,6,8,0.8),rgba(8,12,20,0.95))] before:opacity-70">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mb-10 max-w-lg"
          >
          <p className="text-[17px] font-medium uppercase tracking-[0.2em] text-cyan-300/60">
            <HeadingChars text={copy.eyebrow} />
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            <HeadingChars text={copy.title} />
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            <BodyChars text={copy.desc} />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl border border-white/6 bg-[#0a0c14]"
        >
          <div className="grid gap-3 p-5 sm:grid-cols-4">
            {bars.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/6 bg-white/2 p-4"
              >
                <p className="text-[17px] uppercase tracking-wider text-slate-500">
                  <BodyChars text={s.label} />
                </p>
                <p className={`mt-1.5 text-xl font-bold ${s.color}`}>
                  <BodyChars text={s.value} />
                </p>
              </div>
            ))}

            <div className="sm:col-span-3 rounded-xl border border-white/6 bg-white/2 p-5">
              <div className="flex items-center justify-between">
                <p className="text-[17px] uppercase tracking-wider text-slate-500">
                  {label}
                </p>
                <div className="flex gap-3">
                  {copy.timeframe.map((t) => (
                    <span
                      key={t}
                      className={`text-[17px] ${t === copy.timeframe[2] ? "text-cyan-300" : "text-slate-500"}`}
                    >
                      <BodyChars text={t} />
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="mt-4 flex items-end gap-0.75"
                style={{ height: 120 }}
              >
                {chart.map((h, i) => (
                  <motion.div
                    key={`${h.name}-${i}`}
                    className="flex-1 rounded-t bg-linear-to-t from-cyan-500/30 to-cyan-300/50"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${[92, 74, 88, 68, 83, 56, 81][i]}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.03 }}
                  />
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/6 pt-4">
                {copy.bulletItems.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-[17px] text-slate-300"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#67e8f9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/6 bg-white/2 p-4">
                <p className="text-[17px] uppercase tracking-wider text-slate-500">
                <BodyChars text={copy.chainTitle} />
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {copy.chainItems.map((chain, i) => (
                  <motion.div
                    key={chain.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.04 }}
                    className="flex items-center gap-2 rounded-lg border border-white/4 bg-white/2 px-3 py-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400/80" />
                <span className="text-[17px] font-medium text-slate-300">
                      <BodyChars text={chain.name} />
                    </span>
                    <span className="ml-auto text-[17px] tabular-nums text-slate-400">
                      <BodyChars text={`${chain.tps} ${copy.tpsLabel}`} />
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/5 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-cyan-400/4 blur-[60px]" />
        </motion.div>
      </div>
    </section>
  );
}

function PerformanceSection({ copy }: { copy: (typeof pageCopy)["ko"]["performance"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section
      ref={ref}
      className="relative z-10 overflow-hidden px-6 py-32 sm:px-10 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_88%_10%,rgba(45,212,191,0.16),transparent_52%),linear-gradient(172deg,rgba(4,7,13,0.88),rgba(7,10,16,0.95))] before:opacity-75"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[17px] font-medium uppercase tracking-[0.2em] text-cyan-300/60">
            <HeadingChars text={copy.eyebrow} />
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            <HeadingChars text={copy.title} />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-14 overflow-hidden rounded-2xl border border-white/6 bg-white/2 p-8 sm:p-10"
        >
          <div className="mb-10 grid grid-cols-1 gap-6 border-b border-white/6 pb-8 sm:grid-cols-3">
            {copy.top.map((stat) => (
              <div key={stat.desc}>
                <p className="text-2xl font-bold text-white sm:text-4xl">
                  <BodyChars text={stat.value} />
                  {stat.unit && (
                    <span className="ml-1 text-lg font-normal text-slate-400">
                      <BodyChars text={stat.unit} />
                    </span>
                  )}
                </p>
                <p className="mt-1 text-[17px] tracking-wider text-slate-400">
                  <BodyChars text={stat.desc} />
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {copy.bars.map((bar, i) => {
              const CountVal = () => {
                const count = useCountUp(bar.value, 1800, inView);
                return <BodyChars text={count.toLocaleString()} />;
              };
              return (
                <div key={bar.label} className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[17px] font-medium text-slate-300">
                      <BodyChars text={bar.label} />
                    </span>
                    <span className="text-lg font-bold tabular-nums text-white sm:text-3xl">
                      <CountVal />
                      <span className="ml-1 text-[17px] font-normal text-slate-400">
                        <BodyChars text="TPS" />
                      </span>
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className={`h-full rounded-full bg-linear-to-r ${bar.color}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${bar.pct}%` } : { width: 0 }}
                      transition={{
                        duration: 1.4,
                        delay: 0.15 + i * 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/5 blur-[80px]" />
        </motion.div>
      </div>
    </section>
  );
}

function SectionDivider() {
  return (
    <div className="relative z-20 flex items-center justify-center py-4">
      <div className="h-px w-full max-w-5xl bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

const heroReveal = {
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

const headingReveal = {
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

const bodyReveal = {
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

function HeadingChars({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.span
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
}

function BodyChars({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.span
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
}

function HeroChars({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return <HeadingChars text={text} className={className} />;
}

function TrustStrip({
  reduceMotion,
  badges,
  label,
}: {
  reduceMotion: boolean;
  badges: { name: string; note: string }[];
  label: string;
}) {
  const marqueeBadges = [...badges, ...badges];
  return (
    <section className="relative z-10 overflow-hidden px-6 sm:px-10 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_18%_24%,rgba(34,211,238,0.08),transparent_58%),linear-gradient(170deg,rgba(5,7,13,0.85),rgba(7,10,15,0.95))] before:opacity-65">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl py-3">
        <div className="px-4 pb-2 text-[17px] uppercase tracking-[0.22em] text-slate-500">
          {label}
        </div>
        <motion.div
          className="flex w-max items-center gap-3 px-2"
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 60, repeat: Infinity, ease: "linear" }
          }
        >
          {marqueeBadges.map((badge, i) => (
            <div
              key={`${badge.name}-${i}`}
              className="flex items-center gap-2 rounded-xl border border-cyan-100/20 bg-white/4 px-4 py-2 text-[17px] font-medium text-slate-200"
            >
              <span>
                <BodyChars text={badge.name} />
              </span>
              <span className="text-[17px] uppercase tracking-[0.16em] text-slate-500">
                <BodyChars text={badge.note} />
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Page ── */

function HomePageContent() {
  const { locale, toggleLocale } = useI18n();
  const copy = pageCopy[locale];
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion() ?? false;
  const heroFloat = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const ambientFloat = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const audienceRef = useRef<HTMLDivElement>(null);
  const launchRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const audienceInView = useInView(audienceRef, { once: true, amount: 0.25 });
  const launchInView = useInView(launchRef, { once: true, amount: 0.25 });
  const roadmapInView = useInView(roadmapRef, { once: true, amount: 0.25 });

  const handleLogoClick = () => {
    if (typeof window === "undefined") return;
    if (window.scrollY <= 0) {
      window.location.reload();
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#050608] text-xl leading-[1.8] text-slate-100">
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.06),transparent_50%)]" />
        </div>

        {/* Header */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/6 bg-[#050608]/80 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
            <button
              type="button"
              onClick={handleLogoClick}
              className="cursor-pointer text-lg font-bold tracking-tight text-white"
            >
              YOU&I
            </button>
            <nav className="hidden items-center gap-8 md:flex">
              {copy.header.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[17px] text-slate-100 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
                >
                  <BodyChars text={link.label} />
                </a>
              ))}
            </nav>
            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={toggleLocale}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2.5 text-[17px] font-medium uppercase tracking-[0.12em] text-slate-200 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
              >
                {locale === "ko" ? "EN" : "KO"}
              </button>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-lg font-medium text-white transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
              >
                <BodyChars text={copy.header.cta} /> <ArrowIcon />
              </a>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex min-h-11 min-w-11 items-center justify-center text-slate-200 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
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
                <div className="flex flex-col gap-4 px-6 py-6 text-[17px] font-medium text-slate-300">
                  {copy.header.navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-[17px] text-slate-100 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
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
                    className="w-fit rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[17px] font-medium uppercase tracking-[0.12em] text-slate-200 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
                  >
                    {locale === "ko" ? "EN" : "KO"}
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="mt-2 inline-flex w-fit min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-lg font-medium text-white"
                  >
                    <BodyChars text={copy.header.cta} /> <ArrowIcon />
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* ═══ Hero ═══ */}
        <motion.section
          id="hero"
          initial="hidden"
          whileInView="show"
          variants={heroReveal.container}
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-20 before:bg-[radial-gradient(circle_at_72%_18%,rgba(56,189,248,0.12),transparent_60%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.08),transparent_56%),linear-gradient(165deg,rgba(3,5,12,0.6),rgba(5,6,8,0.88))] before:opacity-75"
        >
          <motion.div
            style={{ y: heroFloat }}
            className="absolute inset-0 -z-10"
            aria-hidden
          >
            <motion.div
              style={{ y: ambientFloat }}
              className="absolute inset-0"
            >
              <div className="absolute left-1/2 top-[-18%] h-[140vh] w-[140vw] -translate-x-1/2 overflow-hidden">
                <div className="h-full w-full origin-center scale-105">
                  <HeroFluidCanvas reducedMotion={reduceMotion} />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center text-center">
            <motion.div
              variants={heroReveal.textBlock}
              className="flex"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[17px] font-medium uppercase tracking-widest text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <HeroChars text={copy.hero.label} />
              </span>
            </motion.div>
            <motion.h1
              variants={heroReveal.textBlock}
              className="mt-8 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
            >
              <HeroChars text={copy.hero.title1} className="block text-white" />
              <HeroChars
                text={copy.hero.title2}
                className="mt-2 block bg-linear-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent"
              />
            </motion.h1>
            <motion.p
              variants={heroReveal.textBlock}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200"
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
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 py-3 text-lg font-semibold text-[#050608] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
                >
                  <HeroChars text={copy.hero.ctaPrimary} />
                  <ArrowIcon />
                </motion.a>
                <motion.a
                  href="#features"
                  variants={heroReveal.textBlock}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-lg font-medium text-slate-200 transition-all duration-300 hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
                >
                  <HeroChars text={copy.hero.ctaSecondary} />
                  <ArrowIcon />
                </motion.a>
            </motion.div>
            <motion.div
              variants={heroReveal.textBlock}
              className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/6 bg-white/6 sm:grid-cols-4"
            >
              {copy.hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#050608] px-6 py-5 text-center"
                >
                  <p className="text-2xl font-bold text-white sm:text-3xl">
                    <BodyChars text={stat.value} />
                  </p>
                  <p className="mt-1 text-[17px] tracking-wider text-slate-400">
                    <HeroChars text={stat.label} />
                  </p>
                </div>
              ))}
            </motion.div>
            <motion.div
              variants={heroReveal.textBlock}
              className="mt-16"
            >
                <motion.a
                  href="#features"
                  animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-flex flex-col items-center gap-2 rounded-full px-1 py-1 text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
              >
              <span className="text-[17px] uppercase tracking-[0.2em]">
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

        <div className="pt-8 sm:pt-10">
          <TrustStrip
            reduceMotion={reduceMotion}
            badges={copy.trustStrip.badges}
            label={copy.trustStrip.badgeLabel}
          />
        </div>

        {/* ═══ Features — visual product matrix ═══ */}
        <section
          id="features"
          className="relative z-10 overflow-hidden px-6 py-24 sm:px-10 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.14),transparent_45%),radial-gradient(circle_at_82%_76%,rgba(125,211,252,0.1),transparent_45%),linear-gradient(to_bottom,rgba(7,10,15,0.8),rgba(5,8,14,0.9))] before:opacity-75"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.14),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.1),transparent_40%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:44px_27px] opacity-10" />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyan-300/14 blur-[95px]"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, 52, 8, 0],
                    y: [0, 18, -9, 0],
                    opacity: [0.12, 0.2, 0.12],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : { duration: 14, repeat: Infinity, ease: "easeInOut" }
            }
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sky-300/12 blur-[110px]"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, -40, -8, 0],
                    y: [0, -12, 8, 0],
                    opacity: [0.1, 0.18, 0.1],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }
            }
          />

          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-left"
            >
              <p className="text-[17px] font-medium uppercase tracking-[0.2em] text-cyan-300/60">
                  <HeadingChars text={copy.features.eyebrow} />
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-5xl">
                  <span className="block">
                    <HeadingChars text={copy.features.title1} />
                  </span>
                  <span className="mt-2 block bg-linear-to-r from-cyan-200 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                    <HeadingChars text={copy.features.title2} />
                  </span>
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
                  <BodyChars text={copy.features.desc} />
                </p>
              </motion.div>

            <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
              {copy.features.cards.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  whileHover={{ y: -10, scale: 1.01 }}
                  whileTap={{ scale: 0.995 }}
                  className="group relative min-h-[360px] bg-[linear-gradient(160deg,rgba(10,14,22,0.95),rgba(13,18,28,0.9))] p-7 transition-colors hover:bg-[linear-gradient(160deg,rgba(14,18,30,0.98),rgba(13,18,28,0.9))]"
                >
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -left-12 top-4 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            x: [0, 26, 0],
                            y: [0, 14, 0],
                            opacity: [0.08, 0.16, 0.08],
                          }
                    }
                    transition={
                      reduceMotion
                        ? undefined
                        : {
                            duration: 8 + i * 0.7,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                    }
                  />
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-300/38 to-transparent"
                    animate={
                      reduceMotion
                        ? undefined
                        : { y: [16, 340, 16], opacity: [0, 0.4, 0] }
                    }
                    transition={
                      reduceMotion
                        ? undefined
                        : {
                            duration: 5.6 + i * 0.35,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.28,
                          }
                    }
                  />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_10%,rgba(34,211,238,0.18),transparent_40%)]" />
                  </div>
                  <motion.div
                    className="relative mb-6 border-b border-white/10 pb-6"
                    animate={
                      reduceMotion
                        ? undefined
                        : { y: [0, -3, 0, 2, 0], rotate: [0, -0.2, 0, 0.2, 0] }
                    }
                    transition={
                      reduceMotion
                        ? undefined
                        : {
                            duration: 7.2 + i * 0.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                    }
                  >
                    <FeatureGraphic type={f.icon} />
                  </motion.div>
                  <h3 className="relative text-2xl font-semibold text-white">
                    <HeadingChars text={f.title} />
                  </h3>
                <p className="relative mt-3 text-[17px] leading-relaxed text-slate-200/90">
                  <BodyChars text={f.text} />
                </p>
                <p className="relative mt-7 inline-flex border-l border-cyan-300/80 pl-3 text-[17px] font-medium tracking-wide text-cyan-100">
                    <BodyChars text={f.metric} />
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <SectionDivider />

        {/* ═══ Launch highlights (Galxe-style metric rail) ═══ */}
        <section className="relative z-10 overflow-hidden px-6 py-20 sm:px-10 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_10%_8%,rgba(186,230,253,0.12),transparent_54%),linear-gradient(170deg,rgba(6,9,16,0.84),rgba(5,7,13,0.95))] before:opacity-70">
          <div
            ref={launchRef}
            className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3"
          >
            {copy.launchHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                animate={launchInView ? "show" : "hidden"}
                custom={i}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: (index: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease: "easeOut",
                      delay: reduceMotion ? 0 : index * 0.7,
                    },
                  }),
                }}
                className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#050608]/80 px-6 py-7 sm:px-8"
              >
              <p className="text-[17px] uppercase tracking-[0.18em] text-slate-500">
                  {item.title}
                </p>
                <p className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-2 text-[17px] text-slate-300">
                  {item.desc}
                </p>
                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={launchInView ? "filled" : "empty"}
                    variants={{
                      empty: { width: 0 },
                      filled: (index: number) => ({
                        width: "88%",
                        transition: {
                          duration: 0.8,
                          delay: reduceMotion ? 0 : index * 0.7 + 0.18,
                          ease: "easeOut",
                        },
                      }),
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
        <SectionDivider />

        {/* ═══ Dashboard — full-width, text overlaid ═══ */}
        <DashboardSection copy={copy.dashboard} />
        <SectionDivider />

        {/* ═══ Performance — unified card ═══ */}
        <PerformanceSection copy={copy.performance} />
        <SectionDivider />

        {/* ═══ Built for teams & builders (inspired by Galxe audience split style) ═══ */}
        <section className="relative z-10 overflow-hidden px-6 py-24 sm:px-10 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_90%_14%,rgba(45,212,191,0.1),transparent_56%),linear-gradient(168deg,rgba(6,9,18,0.86),rgba(5,7,13,0.95))] before:opacity-72">
          <div
            ref={audienceRef}
            className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3"
          >
            {copy.audience.blocks.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                animate={audienceInView ? "show" : "hidden"}
                custom={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: (index: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.45,
                      ease: "easeOut",
                      delay: reduceMotion ? 0 : index * 0.45,
                    },
                  }),
                }}
                className="group relative rounded-2xl border border-white/10 bg-white/2 p-6 backdrop-blur-sm transition-colors hover:border-cyan-300/25"
              >
                <p className="text-[17px] uppercase tracking-[0.2em] text-cyan-200/70">
                  {`0${i + 1}`}
              </p>
                <h3 className="mt-3 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-[17px] leading-relaxed text-slate-300">
                  {item.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-[17px] font-medium text-slate-200 transition-colors group-hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
                >
                  {item.action}
                  <ArrowIcon />
                </a>
              </motion.div>
            ))}
          </div>
        </section>
        <SectionDivider />

        {/* ═══ Ecosystem — network bg with floating cards ═══ */}
        <section
          id="ecosystem"
          className="relative z-10 overflow-hidden px-6 py-32 sm:px-10 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.06),transparent_50%),linear-gradient(170deg,rgba(5,7,14,0.8),rgba(6,9,16,0.95))] before:opacity-70"
        >
          {/* Network bg behind everything */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <NetworkBg />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#050608] via-[#050608]/80 to-[#050608]" />

          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-[17px] font-medium uppercase tracking-[0.2em] text-cyan-300/60">
                <HeadingChars text={copy.ecosystem.eyebrow} />
              </p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
                  <HeadingChars text={copy.ecosystem.title} />
                </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
                <BodyChars text={copy.ecosystem.desc} />
              </p>
            </motion.div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {copy.ecosystem.items.map((item, i) => (
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
                  <span className="text-[17px] font-medium text-slate-200">
                    <BodyChars text={item.name} />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <SectionDivider />

        {/* ═══ Roadmap ═══ */}
        <section
          id="roadmap"
          className="relative z-10 overflow-hidden px-6 py-32 sm:px-10 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.11),transparent_52%),linear-gradient(172deg,rgba(5,8,14,0.84),rgba(7,10,18,0.96))] before:opacity-72"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-[17px] font-medium uppercase tracking-[0.2em] text-cyan-300/60">
                <HeadingChars text={copy.roadmap.eyebrow} />
              </p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
                  <HeadingChars text={copy.roadmap.title} />
                </h2>
            </motion.div>

              {/* Horizontal timeline */}
              <div className="relative mt-14" ref={roadmapRef}>
                {/* Connecting line */}
                <div className="absolute left-0 right-0 top-8 hidden h-px bg-linear-to-r from-transparent via-cyan-400/20 to-transparent lg:block" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {copy.roadmap.phases.map((node, i) => (
                    <motion.div
                      key={node.period}
                      initial="hidden"
                      animate={roadmapInView ? "show" : "hidden"}
                      custom={i}
                      variants={{
                        hidden: { opacity: 0, y: 24 },
                        show: (index: number) => ({
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.7,
                            ease: "easeOut",
                            delay: reduceMotion ? 0 : index * 0.7,
                          },
                        }),
                      }}
                      whileHover={{ borderColor: "rgba(103,232,249,0.2)" }}
                      className="relative rounded-2xl border border-white/6 bg-white/2 p-6 transition-colors"
                    >
                    {/* Dot on timeline */}
                    <div className="absolute -top-1.25 left-1/2 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-cyan-400/40 bg-[#050608] lg:block" />
                    <span className="inline-flex w-fit rounded-full bg-cyan-400/10 px-3 py-1 text-[17px] font-bold tracking-widest text-cyan-300">
                      <BodyChars text={node.period} />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-white">
                      <HeadingChars text={node.title} />
                    </h3>
                <p className="mt-2 text-[17px] leading-relaxed text-slate-300">
                  <BodyChars text={node.detail} />
                </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <SectionDivider />

        {/* ═══ Contact CTA ═══ */}
        <section
          id="contact"
          className="relative z-10 overflow-hidden px-6 py-32 sm:px-10 lg:px-14 before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_24%_20%,rgba(125,211,252,0.12),transparent_50%),radial-gradient(circle_at_84%_82%,rgba(56,189,248,0.08),transparent_50%),linear-gradient(175deg,rgba(5,6,10,0.86),rgba(6,8,15,0.94))] before:opacity-74"
        >
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <NetworkBg />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#050608] via-transparent to-[#050608]" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center"
          >
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
              <span className="block">
                <HeadingChars text={copy.contact.title1} />
              </span>
              <span className="bg-linear-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                <HeadingChars text={copy.contact.title2} />
              </span>
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              <BodyChars text={copy.contact.desc} />
            </p>
            <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="mailto:contact@youandi.io"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-8 py-3.5 text-lg font-semibold text-[#050608] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
              >
                <BodyChars text={copy.ctaButtons.contact} /> <ArrowIcon />
              </a>
              <a
                href="#ecosystem"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-lg font-medium text-slate-200 transition-all duration-300 hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
              >
                <BodyChars text={copy.ctaButtons.explore} /> <ArrowIcon />
              </a>
            </div>
          </motion.div>
        </section>

        {/* ═══ Footer ═══ */}
        <footer className="relative z-10 border-t border-white/6 px-6 pt-16 pb-8 sm:px-10 lg:px-14">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
                <div className="lg:col-span-1">
                  <span className="text-lg font-bold text-white">YOU&I</span>
                <p className="mt-4 text-[17px] leading-relaxed text-slate-300">
                  {copy.footer.description}
                </p>
              </div>
              {Object.entries(copy.footer.links).map(([cat, links]) => (
                <div key={cat}>
                <h4 className="text-[17px] font-semibold text-slate-300">
                    {cat}
                  </h4>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {links.map((l) => (
                      <li key={l}>
                        <a
                          href="#"
                          className="text-[17px] text-slate-300 transition-colors duration-200 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
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
              <p className="text-[17px] text-slate-400">
                {copy.footer.copyright}
              </p>
              <p className="text-[17px] text-slate-400">
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
