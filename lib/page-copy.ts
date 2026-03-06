export const pageCopy = {
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
      scroll: "scroll",
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
          detail:
            "Open mainnet gateway and run governance and deployment bridges in parallel.",
        },
        {
          period: "Q2",
          title: "Fluid Core",
          detail:
            "Deploy AI risk engine beta and synchronize with institution testnets.",
        },
        {
          period: "Q3",
          title: "Global Mesh",
          detail:
            "Integrate the top five L1/L2 chains and launch compliant onboarding.",
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
      contact: "Contact Us",
      explore: "Explore Ecosystem",
    },
  },
};
