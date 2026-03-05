"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

export type Locale = "ko" | "en";

const translations = {
  nav: {
    ecosystem: { ko: "생태계", en: "Ecosystem" },
    tokenization: { ko: "토큰화", en: "Tokenization" },
    technology: { ko: "기술", en: "Technology" },
    roadmap: { ko: "로드맵", en: "Roadmap" },
    security: { ko: "보안", en: "Security" },
    getStarted: { ko: "시작하기", en: "Get Started" },
  },
  hero: {
    badge: {
      ko: "디지털 자산의 미래를 구축합니다",
      en: "Building the Future of Digital Assets",
    },
    titleLine1: {
      ko: "실물 자산을",
      en: "Connecting Real Assets",
    },
    titleLine2: {
      ko: "디지털 세계로 연결합니다",
      en: "to the Digital World",
    },
    description: {
      ko: "AI, 블록체인, RWA 토큰화, 그리고 글로벌 커머스를 융합하여 투명하고 혁신적인 디지털 자산 생태계를 구축합니다.",
      en: "AI, Blockchain, RWA Tokenization, and Global Commerce converge to build a transparent and innovative digital asset ecosystem.",
    },
    exploreBtn: { ko: "생태계 살펴보기", en: "Explore Ecosystem" },
    learnBtn: { ko: "STO 알아보기", en: "Learn About STO" },
    scroll: { ko: "스크롤", en: "Scroll" },
  },
  ecosystem: {
    label: { ko: "핵심 생태계", en: "Core Ecosystem" },
    title: { ko: "혁신의 세 가지 축", en: "Three Pillars of Innovation" },
    description: {
      ko: "YOU&I Holdings는 토큰화, AI 인프라, 글로벌 커머스를 하나의 통합 디지털 자산 생태계로 융합합니다.",
      en: "YOU&I Holdings integrates tokenization, AI infrastructure, and global commerce into a unified digital asset ecosystem.",
    },
    pillars: [
      {
        title: { ko: "토큰화 레이어", en: "Tokenization Layer" },
        subtitle: {
          ko: "실물 자산 토큰화",
          en: "Real World Asset Tokenization",
        },
        description: {
          ko: "실물 자산을 블록체인 기반 디지털 토큰으로 변환합니다. 분할 소유권, 투명한 투자 구조, 스마트 컨트랙트 기반 수익 분배를 가능하게 합니다.",
          en: "Transform real-world assets into blockchain-based digital tokens. Enabling fractional ownership, transparent investment structures, and smart contract-driven revenue distribution.",
        },
        features: {
          ko: [
            "자산 토큰화 (STO)",
            "투자 구조 설계",
            "수익 분배 시스템",
            "블록체인 자산 관리",
          ],
          en: [
            "Asset Tokenization (STO)",
            "Investment Structure Design",
            "Revenue Distribution",
            "Blockchain Asset Management",
          ],
        },
      },
      {
        title: { ko: "AI 인프라", en: "AI Infrastructure" },
        subtitle: {
          ko: "분산 컴퓨팅 네트워크",
          en: "Distributed Computing Network",
        },
        description: {
          ko: "강력한 AI 기반 분산 컴퓨팅 및 데이터 처리 인프라. 모델 학습, 탈중앙화 네트워크, 지능형 서비스 통합을 지원합니다.",
          en: "A robust AI-powered distributed computing and data processing infrastructure. Powering model training, decentralized networks, and intelligent service integration.",
        },
        features: {
          ko: [
            "AI 모델 학습",
            "분산 컴퓨팅",
            "데이터 처리 플랫폼",
            "AI 서비스 통합",
          ],
          en: [
            "AI Model Training",
            "Distributed Computing",
            "Data Processing Platform",
            "AI Service Integration",
          ],
        },
      },
      {
        title: { ko: "커머스 레이어", en: "Commerce Layer" },
        subtitle: {
          ko: "글로벌 크로스보더 플랫폼",
          en: "Global Cross-Border Platform",
        },
        description: {
          ko: "AI 고객 서비스, 다국어 지원, 통합 디지털 결제 시스템으로 구동되는 원활한 글로벌 커머스 플랫폼입니다.",
          en: "A seamless global commerce platform powered by AI customer service, multilingual support, and integrated digital payment systems for cross-border transactions.",
        },
        features: {
          ko: [
            "크로스보더 전자상거래",
            "AI 고객 서비스",
            "다국어 지원",
            "디지털 결제 시스템",
          ],
          en: [
            "Cross-Border E-Commerce",
            "AI Customer Service",
            "Multilingual Support",
            "Digital Payment System",
          ],
        },
      },
    ],
  },
  tokenization: {
    label: { ko: "증권형 토큰 발행", en: "Security Token Offering" },
    title1: { ko: "실물 자산", en: "Real World Asset" },
    title2: { ko: "토큰화", en: "Tokenization" },
    description: {
      ko: "실물 자산을 안전하고 거래 가능한 디지털 토큰으로 변환합니다. STO 인프라를 통해 분할 소유권, 투명한 투자 흐름, 기본적인 규제 준수를 지원합니다.",
      en: "Transform real-world assets into secure, tradeable digital tokens. Our STO infrastructure enables fractional ownership, transparent investment flows, and regulatory compliance from the ground up.",
    },
    stat1Label: { ko: "KYC 인증", en: "KYC Verification" },
    stat2Label: { ko: "암호화 표준", en: "Encryption Standard" },
    stat3Label: { ko: "거버넌스 모델", en: "Governance Model" },
    features: [
      {
        title: { ko: "자산 기반 토큰", en: "Asset-Backed Tokens" },
        description: {
          ko: "블록체인에 불변으로 기록되는 실물 자산 기반 디지털 토큰.",
          en: "Digital tokens backed by real-world assets recorded immutably on the blockchain.",
        },
      },
      {
        title: { ko: "규제 준수", en: "Regulatory Compliance" },
        description: {
          ko: "KYC/AML 및 투자자 보호가 내장된 완전 규정 준수 토큰 구조.",
          en: "Fully compliant token structures with built-in KYC/AML and investor protection.",
        },
      },
      {
        title: { ko: "스마트 수익 분배", en: "Smart Revenue Distribution" },
        description: {
          ko: "스마트 컨트랙트로 구동되는 자동화된 투명한 수익 분배.",
          en: "Automated, transparent revenue distribution powered by smart contracts.",
        },
      },
      {
        title: { ko: "거버넌스 참여", en: "Governance Participation" },
        description: {
          ko: "토큰 보유자가 플랫폼 거버넌스 및 의사결정에 참여합니다.",
          en: "Token holders participate in platform governance and decision-making.",
        },
      },
    ],
  },
  tokenEconomy: {
    label: { ko: "토큰 이코노미", en: "Token Economy" },
    title: { ko: "생태계를 움직이는 힘", en: "Powering the Ecosystem" },
    description: {
      ko: "YOU&I 토큰은 전체 생태계의 유틸리티 핵심으로, 결제, 스테이킹, 거버넌스, 인센티브 배분을 가능하게 합니다.",
      en: "The YOU&I token serves as the utility backbone of the entire ecosystem, enabling payments, staking, governance, and incentive distribution.",
    },
    tokenLabel: { ko: "토큰", en: "Token" },
    utilities: [
      {
        label: { ko: "플랫폼 결제", en: "Platform Payments" },
        description: {
          ko: "모든 생태계 서비스에서 원활한 거래를 위해 토큰을 사용합니다.",
          en: "Use tokens across all ecosystem services for seamless transactions.",
        },
      },
      {
        label: { ko: "스테이킹 보상", en: "Staking Rewards" },
        description: {
          ko: "토큰을 스테이킹하고 네트워크를 보호하여 보상을 받습니다.",
          en: "Earn rewards by staking tokens and securing the network.",
        },
      },
      {
        label: { ko: "거버넌스", en: "Governance" },
        description: {
          ko: "DAO 기반 거버넌스에 참여하여 플랫폼의 미래를 결정합니다.",
          en: "Participate in DAO-based governance and shape the future of the platform.",
        },
      },
      {
        label: { ko: "생태계 인센티브", en: "Ecosystem Incentives" },
        description: {
          ko: "성장하는 생태계에 기여하여 인센티브를 받습니다.",
          en: "Earn incentives for contributing to the growing ecosystem.",
        },
      },
    ],
  },
  roadmap: {
    label: { ko: "로드맵", en: "Roadmap" },
    title: { ko: "미래를 향한 여정", en: "Our Journey Forward" },
    description: {
      ko: "실물 가치를 탈중앙화 미래에 연결하는 포괄적 디지털 자산 생태계 구축을 위한 단계별 접근.",
      en: "A phased approach to building a comprehensive digital asset ecosystem connecting real-world value to the decentralized future.",
    },
    phases: [
      {
        phase: { ko: "Phase 1", en: "Phase 1" },
        title: { ko: "기반 구축", en: "Foundation" },
        items: {
          ko: [
            "플랫폼 아키텍처",
            "생태계 설계",
            "토큰 구조 설계",
            "핵심 팀 구성",
          ],
          en: [
            "Platform Architecture",
            "Ecosystem Design",
            "Token Structure Design",
            "Core Team Formation",
          ],
        },
      },
      {
        phase: { ko: "Phase 2", en: "Phase 2" },
        title: { ko: "확장", en: "Expansion" },
        items: {
          ko: [
            "AI 인프라 확장",
            "글로벌 커머스 런칭",
            "전략적 파트너십",
            "STO 플랫폼 베타",
          ],
          en: [
            "AI Infrastructure Scaling",
            "Global Commerce Launch",
            "Strategic Partnerships",
            "STO Platform Beta",
          ],
        },
      },
      {
        phase: { ko: "Phase 3", en: "Phase 3" },
        title: { ko: "성숙", en: "Maturity" },
        items: {
          ko: [
            "DAO 거버넌스 런칭",
            "전체 생태계 통합",
            "글로벌 시장 확장",
            "크로스체인 상호운용성",
          ],
          en: [
            "DAO Governance Launch",
            "Full Ecosystem Integration",
            "Global Market Expansion",
            "Cross-Chain Interoperability",
          ],
        },
      },
    ],
  },
  security: {
    label: { ko: "보안 및 규정 준수", en: "Security & Compliance" },
    title: { ko: "엔터프라이즈급 보안", en: "Enterprise-Grade Security" },
    description: {
      ko: "기관급 보안 프로토콜과 완전한 규제 준수로 구축되어, 모든 계층에서 신뢰와 투명성을 보장합니다.",
      en: "Built with institutional-level security protocols and full regulatory compliance, ensuring trust and transparency at every layer.",
    },
    features: {
      ko: [
        "스마트 컨트랙트 감사",
        "PKI 인증",
        "AES-256 암호화",
        "다중 서명 지갑",
        "HSM / MPC 키 관리",
        "4단계 KYC 인증",
      ],
      en: [
        "Smart Contract Audits",
        "PKI Authentication",
        "AES-256 Encryption",
        "Multi-Signature Wallets",
        "HSM / MPC Key Management",
        "4-Tier KYC Verification",
      ],
    },
    badges: {
      ko: ["KYC", "AML", "투자자 보호"],
      en: ["KYC", "AML", "Investor Protection"],
    },
  },
  cta: {
    title1: { ko: "함께 미래를", en: "Ready to Build the" },
    title2: { ko: "만들 준비되셨나요?", en: "Future Together?" },
    description: {
      ko: "YOU&I 생태계에 참여하여 차세대 디지털 자산 혁신의 일원이 되세요. 파트너십 기회를 탐색하려면 연락주세요.",
      en: "Join the YOU&I ecosystem and be part of the next generation of digital asset innovation. Connect with us to explore partnership opportunities.",
    },
    contactBtn: { ko: "문의하기", en: "Contact Us" },
    exploreBtn: { ko: "생태계 살펴보기", en: "Explore Ecosystem" },
  },
  footer: {
    brand: {
      ko: "실물 자산과 탈중앙화 디지털 경제를 연결하는 다리를 구축합니다.",
      en: "Building the bridge between real-world assets and the decentralized digital economy.",
    },
    categories: {
      ko: {
        생태계: ["토큰화", "AI 인프라", "커머스 플랫폼"],
        회사: ["소개", "채용", "파트너"],
        자료: ["문서", "백서", "블로그"],
        "법적 고지": ["이용약관", "개인정보 처리방침", "위험 고지"],
      },
      en: {
        Ecosystem: ["Tokenization", "AI Infrastructure", "Commerce Platform"],
        Company: ["About", "Careers", "Partners"],
        Resources: ["Documentation", "Whitepaper", "Blog"],
        Legal: ["Terms of Service", "Privacy Policy", "Risk Disclaimer"],
      },
    },
    copyright: {
      ko: "\u00A9 2026 YOU&I Holdings. All rights reserved.",
      en: "\u00A9 2026 YOU&I Holdings. All rights reserved.",
    },
    disclaimer: {
      ko: "본 웹사이트는 투자 조언을 구성하지 않습니다. 디지털 자산 투자에는 고유한 위험이 수반됩니다.",
      en: "This website does not constitute investment advice. Digital asset investments carry inherent risks.",
    },
  },
} as const;

type TranslationsType = typeof translations;

interface I18nContextType {
  locale: Locale;
  toggleLocale: () => void;
  t: TranslationsType;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "ko";
    const saved = window.localStorage.getItem("youandi-locale");
    if (saved === "en" || saved === "ko") return saved;
    const browserLocale = window.navigator.language?.toLowerCase();
    if (browserLocale.startsWith("en")) return "en";
    return "ko";
  });

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "ko" ? "en" : "ko"));
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem("youandi-locale", locale);
    } catch {
      // localStorage can be unavailable in some restricted environments.
    }
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, toggleLocale, t: translations }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
