export const pageCopy = {
  ko: {
    header: {
      navLinks: [
        { href: "#ecosystem", label: "사업 소개" },
        { href: "#differentiators", label: "왜 YOU&I인가" },
        { href: "#tokenomics", label: "토큰" },
        { href: "#roadmap", label: "네트워크" },
      ],
      cta: "백서읽기",
      ctaPrice: "가격보기",
    },
    hero: {
      label: "실물자산 토큰화",
      title1: "실물자산의 가치를",
      title2: "모두에게 열다",
      desc: "200조 원 이상의 실물자산 — 부동산, 국채, 문화재 — AI와 블록체인 기반 차세대 금융 생태계를 구축합니다.",
      credibility: "뉴욕 본사 자산운용사 · 200조 원 규모 실물 자산 포트폴리오 직접 보유",
      ctaPrimary: "백서읽기",
      ctaSecondary: "가격보기",
      stats: [
        { value: "200조 원+", label: "보유 자산 가치" },
        { value: "157", label: "글로벌 네트워크 국가" },
        { value: "$10억", label: "자본금" },
        { value: "14", label: "핵심 자산 포트폴리오" },
      ],
      trustStrip: "Connected Networks",
      scroll: "scroll",
    },
    trustStrip: {
badgeLabel: "Core Ecosystem Infrastructure", // 백서의 통합 생태계 지향 반영 [cite: 23]
      badges: [
        { name: "YIHX-Wallet", note: "Native Custody" }, // 백서 전용 지갑 명칭 반영 
        { name: "ERC-1400", note: "STO Standard" }, // 백서에서 검토 중인 STO 전용 표준 
        { name: "BEP-20", note: "Low-Fee Settlement" }, // 백서의 가스비 절감 및 정산 전략 
        { name: "Smart Contract", note: "Auto-Dividend" }, // 백서의 자동 수익 분배 원칙 
        { name: "AI Engine", note: "Resource Allocator" }, // 백서 Layer 2의 핵심 관리 시스템 
        { name: "RWA Portal", note: "Asset Verification" }, // 백서의 실물자산 실사 및 검증 단계 반영 [cite: 136, 137]
        ]
    },
    features: {
      eyebrow: "Product Graph",
      title1: "모듈 통합 운영 아키텍처",
      title2: "성과 중심 성장 플랫폼",
      desc: "YOU&I Quest, Starboard, Earndrop, Passport, Score, Identity를 단일 운영 체계로 통합해 캠페인 실행, 분석 의사결정, 지급, 인증·관리까지 핵심 지표 기반의 연계 프로세스로 제공합니다. 이 모듈들은 AI 분산 컴퓨팅(GPU 네트워크) 인프라 위에서 실시간 추론을 수행하고, 크로스보더 커머스의 통합 포인트 정산까지 하나의 파이프라인으로 연결합니다.",
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
    globalNetwork: {
      eyebrow: "글로벌 네트워크",
      title: "독보적 네트워크",
      desc: "WMU를 통해 36년 이상 구축된 글로벌 네트워크 — 경쟁사가 복제 불가능한 인프라.",
    },
    launchHighlights: [
      {
        title: "WMU 운영 국가",
        value: "157",
        desc: "WMU 조직위원회 운영 국가",
      },
      {
        title: "인플루언서 네트워크",
        value: "55만+",
        desc: "글로벌 인플루언서 네트워크",
      },
      {
        title: "연합회 회원",
        value: "7000만+",
        desc: "세계중국상인연합회 회원",
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
    tokenomics: {
      eyebrow: "토크노믹스",
      title: "YIHX 토큰",
      desc: "실물자산에 가치가 뒷받침되는 하이브리드(유틸리티+시큐리티) 토큰, 전 생태계를 구동합니다.",
      specs: [
        { label: "토큰명", value: "YOU&I (YIHX)" },
        { label: "기반 체인", value: "ERC-20 -> BEP-20" },
        { label: "토큰 유형", value: "하이브리드 (유틸리티 + 시큐리티)" },
        { label: "전용 지갑", value: "YIHX-Wallet" },
        { label: "초기 유통 비율", value: "TGE 시 약 7%" },
        { label: "핵심 유틸리티", value: "스테이킹 · 거버넌스 · 커머스 · AI" },
      ],
      allocations: [
        { label: "플랫폼", value: 50 },
        { label: "생태계", value: 40 },
        { label: "팀", value: 5 },
        { label: "마케팅", value: 3 },
        { label: "유동성", value: 2 },
      ],
    },
    performance: {
      eyebrow: "Performance",
      title: "대규모 트래픽을 위한 성능",
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
    ecosystem: {
      eyebrow: "생태계",
      title: "금융의 미래를 설계합니다",
      desc: "자산 토큰화, 분산 AI, 크로스보더 커머스를 통합하는 3축 생태계.",
      cards: [
        {
          title: "STO 플랫폼",
          desc: "부동산, 국채, 문화재를 토큰화합니다. 스마트 컨트랙트 기반 자동 수익 분배로 토큰 보유자에게 분기별 수익을 제공합니다.",
          icon: "sto",
        },
        {
          title: "AI 인프라",
          desc: "3계층 분산 AI 컴퓨팅 - GPU 네트워크, 데이터 마켓플레이스, 노코드 AI 빌더. 자원 기여 시 보상을 받습니다.",
          icon: "ai",
        },
        {
          title: "크로스보더 커머스",
          desc: "AI 챗봇 기반 글로벌 전자상거래로 한국 상품을 157개국에 연결합니다. 통합 포인트 시스템으로 실물경제와 토큰경제를 연결합니다.",
          icon: "commerce",
        },
      ],
    },
    differentiators: {
      eyebrow: "차별화 요소",
      title: "왜 YOU&I인가",
      desc: "플랫폼이나 중개자가 아닌, 자산 소유자가 직접 실물 가치를 토큰화합니다.",
      items: [
        {
          number: "01",
          title: "실물자산 직접 보유",
          desc: "플랫폼 사업자와 달리, YOU&I Holdings는 200조 원+ 자산을 직접 보유 - 자산 소유자 주도의 토큰화.",
        },
        {
          number: "02",
          title: "다각화 포트폴리오",
          desc: "부동산, 국채, 문화재, 에너지, 모빌리티 - 14개 핵심 자산으로 복합 섹터 리스크를 분산합니다.",
        },
        {
          number: "03",
          title: "글로벌 유통 네트워크",
          desc: "157개국 WMU 네트워크와 55만 인플루언서 + 7,000만 세계중국상인연합회 채널 - Day 1부터 글로벌 도달.",
        },
        {
          number: "04",
          title: "자본 독립성",
          desc: "10억 달러 자본금과 JPMorgan Chase Bank 주거래 기반. 벤처 투자에 의존하지 않는 자체 자본 구조입니다.",
        },
      ],
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "Phase 6~7",
      phases: [
        {
          period: "Q1-Q2",
          title: "실물 인프라 구축",
          detail: "사이판(1.5조 원) · 필리핀 리조트 단지 착공 및 14대 실물자산 기반 STO 2차 발행 실행.",
        },
        {
          period: "Q3",
          title: "시장 · 거버넌스 확장",
          detail: "싱가포르 등 아태 지역 STO 서비스 확장 및 DAO 전환 프로세스 개시.",
        },
        {
          period: "Q4",
          title: "글로벌 생태계 완성",
          detail: "200조 원 자산 기반 통합 금융 플랫폼 도약, 완전 DAO 전환 및 신규 자산 편입 확대.",
        },
      ],
    },
    contact: {
      title1: "자산 소유의 미래에 함께하세요",
      title2: "",
      desc: "YOU&I가 실물자산과 블록체인 기술을 어떻게 연결하는지 백서를 통해 확인하세요.",
      contactBtn: "백서읽기",
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
      contact: "백서읽기",
      explore: "생태계 살펴보기",
    },
  },
  en: {
    header: {
      navLinks: [
        { href: "#ecosystem", label: "About" },
        { href: "#differentiators", label: "Why YOU&I" },
        { href: "#tokenomics", label: "Token" },
        { href: "#roadmap", label: "Network" },
      ],
      cta: "Read Whitepaper",
      ctaPrice: "View Pricing",
    },
    hero: {
      label: "Real-World Asset Tokenization",
      title1: "Unlocking Real Asset",
      title2: "Value for Everyone",
      desc: "Over $150B in real-world assets — real estate, sovereign bonds, cultural heritage — building a next-generation financial ecosystem powered by AI and blockchain.",
      credibility: "NYC-Headquartered Asset Manager · $150B+ Real-World Asset Portfolio",
      ctaPrimary: "Read Whitepaper",
      ctaSecondary: "View Pricing",
      stats: [
        { value: "$150B+", label: "Asset Value Held" },
        { value: "157", label: "Global Network Countries" },
        { value: "$1B", label: "Paid-in Capital" },
        { value: "14", label: "Core Asset Portfolios" },
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
      desc: "Unify Quest, Starboard, Earndrop, Passport, Score, and Identity into one operating model that links campaign execution, analysis insights, token allocation, and identity governance. These modules run real-time inference on a distributed AI compute (GPU network) layer and connect cross-border commerce with a unified point settlement pipeline.",
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
    globalNetwork: {
      eyebrow: "Global Network",
      title: "Unrivaled Network",
      desc: "A global network built through WMU over 36+ years — infrastructure competitors cannot replicate.",
    },
    launchHighlights: [
      {
        title: "WMU Countries",
        value: "157",
        desc: "Countries with WMU organizing committees",
      },
      {
        title: "Influencer Network",
        value: "550K+",
        desc: "Global influencer network",
      },
      {
        title: "Federation Members",
        value: "70M+",
        desc: "World Chinese Merchants Association members",
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
    tokenomics: {
      eyebrow: "Tokenomics",
      title: "YIHX Token",
      desc: "A hybrid token backed by real-world asset value (utility + security), powering the full ecosystem.",
      specs: [
        { label: "Token Name", value: "YOU&I (YIHX)" },
        { label: "Base Chain", value: "ERC-20 -> BEP-20" },
        { label: "Token Type", value: "Hybrid (Utility + Security)" },
        { label: "Dedicated Wallet", value: "YIHX-Wallet" },
        { label: "Initial Circulation", value: "About 7% at TGE" },
        { label: "Core Utilities", value: "Staking · Governance · Commerce · AI" },
      ],
      allocations: [
        { label: "Platform", value: 50 },
        { label: "Ecosystem", value: 40 },
        { label: "Team", value: 5 },
        { label: "Marketing", value: 3 },
        { label: "Liquidity", value: 2 },
      ],
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
    ecosystem: {
      eyebrow: "Ecosystem",
      title: "Designing the Future of Finance",
      desc: "A three-pillar ecosystem unifying asset tokenization, distributed AI, and cross-border commerce.",
      cards: [
        {
          title: "STO Platform",
          desc: "Tokenize real assets including real estate, sovereign bonds, and cultural assets. Smart-contract automation enables quarterly yield distribution to token holders.",
          icon: "sto",
        },
        {
          title: "AI Infrastructure",
          desc: "Three-layer distributed AI stack: GPU network, data marketplace, and no-code AI builder. Contributors can earn rewards for resource participation.",
          icon: "ai",
        },
        {
          title: "Cross-border Commerce",
          desc: "AI chatbot-powered global commerce connects Korean products to 157 markets. A unified points system bridges the real and token economies.",
          icon: "commerce",
        },
      ],
    },
    differentiators: {
      eyebrow: "Differentiators",
      title: "Why YOU&I",
      desc: "Not platform-first or broker-first. Asset owners directly tokenize real-world value.",
      items: [
        {
          number: "01",
          title: "Direct Asset Ownership",
          desc: "Unlike pure platform operators, YOU&I Holdings directly owns a KRW 200T+ asset base, enabling owner-led tokenization.",
        },
        {
          number: "02",
          title: "Diversified Portfolio",
          desc: "Real estate, sovereign bonds, cultural assets, energy, and mobility. Fourteen core assets reduce cross-sector concentration risk.",
        },
        {
          number: "03",
          title: "Global Distribution",
          desc: "157-country WMU network plus 550K influencers and 70M World Chinese Merchants Association channels for Day 1 global reach.",
        },
        {
          number: "04",
          title: "Capital Independence",
          desc: "Backed by USD 1B paid-in capital and a JPMorgan Chase Bank primary relationship, without dependence on venture funding.",
        },
      ],
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "Phase 6~7",
      phases: [
        {
          period: "Q1-Q2",
          title: "Real Asset Infrastructure",
          detail: "Break ground on Saipan (KRW 1.5T) and Philippine resort complexes; execute STO Series 2 backed by 14 core real-world assets.",
        },
        {
          period: "Q3",
          title: "Regional & Governance Expansion",
          detail: "Expand STO services to APAC markets including Singapore; initiate DAO transition process.",
        },
        {
          period: "Q4",
          title: "Global Ecosystem Completion",
          detail: "Launch integrated financial platform backed by $150B+ asset portfolio; complete full DAO transition and onboard new asset classes.",
        },
      ],
    },
    contact: {
      title1: "Join the Future of Asset Ownership",
      title2: "",
      desc: "Discover how YOU&I connects real-world assets with blockchain technology in our whitepaper.",
      contactBtn: "Read Whitepaper",
      ecosystemBtn: "Explore the Ecosystem",
    },
    footer: {
      description:
        "Building a Web3 infrastructure platform for the next generation of digital assets.",
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
      contact: "Read Whitepaper",
      explore: "Explore Ecosystem",
    },
  },
};
