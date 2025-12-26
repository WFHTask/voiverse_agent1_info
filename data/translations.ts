export type Language = 'en' | 'zh';

export const translations = {
  en: {
    nav: {
      works: "How it works",
      topics: "Topics",
      pricing: "Pricing",
      cta: "Join Beta",
      waitlist: "Join Waitlist"
    },
    hero: {
      badge: "Voiverse Alpha Launch",
      titleStart: "Your Web3 AI",
      titleEnd: "Noise Filter",
      mobileSubtitle: "Only Signal, No FOMO.",
      desktopSubtitle: "Don't let noise bury your Alpha. Only signal, no FOMO.",
      desc: "Driven by AI, filtering 100+ crypto media & KOLs to present core Web3 insights. Never miss an on-chain opportunity.",
      topics: ["Blockchain Tech", "Crypto Market", "DeFi Protocols", "NFT News", "DAO", "Layer 2", "Cross-chain", "Security"],
      cta: "Get Early Access",
      quota: "* First 100 spots only"
    },
    flow: {
      title: "How it works: Chaos to Control",
      subtitle: "Voiverse redefines your path to crypto info, letting value surface automatically.",
      step1: {
        title: "Info Overload",
        subtitle: "The Problem",
        desc: "500+ tweets, 1000+ Telegram messages daily. Staying up all night but still missing the 'Golden Dog'?",
        tag: "Pain Point"
      },
      step2: {
        title: "Smart Filtering",
        subtitle: "The Solution",
        desc: "Discard 99% of noise. AI identifies your interests. No searching needed, key intel finds you.",
        tag: "Core Tech"
      },
      step3: {
        title: "Daily Alpha Brief",
        subtitle: "The Result",
        desc: "Compressing hours of scattered info into a 3-minute visual brief. Pushed to your inbox/TG. Master your decisions.",
        tag: "Benefit",
        cta: "Join Beta!"
      },
      illus: {
        dailyAlpha: "Daily Alpha",
        readTime: "3 min read",
        fomoFree: "FOMO Free"
      }
    },
    topics: {
      title: "Featured Topics",
      subtitle: "Voiverse scans the entire Web3 track 24/7 to extract high-value intel.",
      list: [
        { title: "Prediction Markets", desc: "Track Polymarket odds in real-time. Insight into elections & macro events faster than news." },
        { title: "Meme Coins / Gems", desc: "Monitor on-chain volume anomalies. Spot the next 100x Meme 10 mins before Twitter." },
        { title: "Airdrop Tasks", desc: "AI curates low-cost, high-return airdrop paths. No more blind grinding." },
        { title: "Smart Money", desc: "Track whale wallets. Analyze the highest win-rate on-chain operations." },
        { title: "DeFi Yields", desc: "Aggregate APY data. Filter for premium pools with lowest impermanent loss risk." },
        { title: "Research Summaries", desc: "Condense 50-page institutional reports into 200-word core insights." }
      ]
    },
    pricing: {
      title: "Choose Your Plan",
      subtitle: "During Alpha, all premium features are free for a limited time.",
      explorer: {
        name: "Explorer",
        desc: "For Web3 Beginners",
        cta: "Apply for Access",
        features: ["1 Daily Alpha Brief", "Basic Chain Monitoring", "Community Support"]
      },
      pro: {
        name: "Alpha Hunter",
        desc: "For Traders & Analysts",
        badge: "Most Popular",
        cta: "Apply for Access",
        features: ["Real-time Alpha Signals", "Unlimited AI Summaries", "All Chains (L2 included)", "Smart Money Tracking"]
      },
      whale: {
        name: "Whale",
        desc: "For Institutions",
        cta: "Apply for Access",
        features: ["API Access", "Custom Strategy", "1v1 Account Manager"]
      }
    },
    waitlist: {
      title: "Join Alpha",
      subtitle: "First",
      subtitle2: "spots only. Reserve your Alpha filter now.",
      emailLabel: "Email Address",
      placeholder: "you@example.com",
      cta: "Join Waitlist",
      privacy: "We respect privacy. No spam.",
      successTitle: "Application Submitted",
      successDesc: "Check your inbox. Invite codes are sent randomly.",
      close: "Close"
    },
    footer: {
      tagline: "Web3 AI Noise Filter",
      rights: "Voiverse Labs. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  zh: {
    nav: {
      works: "工作原理",
      topics: "精选主题",
      pricing: "价格计划",
      cta: "内测申请",
      waitlist: "加入内测"
    },
    hero: {
      badge: "Voiverse 内测启动",
      titleStart: "你的 Web3 AI",
      titleEnd: "降噪情报官",
      mobileSubtitle: "只听干货，拒绝 FOMO。",
      desktopSubtitle: "别让噪音埋没你的 Alpha。只听干货，拒绝 FOMO。",
      desc: "「Web3每日推荐」由 AI 驱动，从 100+ 加密媒体和 KOL 中智能筛选，呈现 Web3 核心资讯。不错过每个重要的链上机会。",
      topics: ["区块链技术", "加密货币市场", "DeFi协议", "NFT动态", "DAO治理", "Layer2扩容", "跨链桥", "智能合约安全"],
      cta: "立即获取内测资格",
      quota: "* 首批 100 个测试名额"
    },
    flow: {
      title: "工作原理：从混乱到掌控，只需三步",
      subtitle: "Voiverse 重新定义你获取 Crypto 信息的路径，让价值自动浮现。",
      step1: {
        title: "信息过载",
        subtitle: "Info Overload",
        desc: "每天 500+ 条推特、1000+ Telegram 信息，几百个群消息。盯盘熬夜，却还是错过金狗？",
        tag: "痛点场景"
      },
      step2: {
        title: "AI 意图过滤",
        subtitle: "Smart Filtering",
        desc: "扔掉 99% 的噪音，AI 自动识别你的关注点。无需搜索，关键情报主动找你。",
        tag: "核心机制"
      },
      step3: {
        title: "每日3分钟 Alpha简报",
        subtitle: "Instant Results",
        desc: "为你把数小时分散的信息提炼最重要，形成 3 分钟图文并茂简报。直接推送至您的微信、Telegram 或邮箱。不再做信息的奴隶，做决策的主人。",
        tag: "最终收益",
        cta: "加入内测！"
      },
      illus: {
        dailyAlpha: "每日简报",
        readTime: "3分钟阅读",
        fomoFree: "告别FOMO"
      }
    },
    topics: {
      title: "精选主题",
      subtitle: "Voiverse 全天候扫描 Web3 全赛道，为您提炼以下高价值情报",
      list: [
        { title: "预测市场", desc: "实时追踪 Polymarket 胜率异动，比新闻更快洞察大选、宏观与热门事件走向。" },
        { title: "Meme 土狗 / 金狗", desc: "实时监控链上交易量异动，比推特早 10 分钟发现下一个百倍 Meme。" },
        { title: "Airdrop 空投交互", desc: "AI 自动整理低成本、高回报的空投交互路径，告别盲目刷单。" },
        { title: "Smart Money 聪明钱", desc: "追踪鲸鱼钱包动向，分析胜率最高的链上地址操作。" },
        { title: "DeFi 收益挖矿", desc: "聚合全网 APY 数据，筛选无常损失风险最低的优质矿池。" },
        { title: "研报精读", desc: "将 50 页的机构英文研报提炼为 200 字中文核心观点。" }
      ]
    },
    pricing: {
      title: "选择您的计划",
      subtitle: "内测期间，所有高级功能限时免费开放",
      explorer: {
        name: "Explorer",
        desc: "适合刚入门的 Web3 探索者",
        cta: "申请内测",
        features: ["每日 1 次 Alpha 简报", "基础公链监控 (ETH/SOL)", "社区支持"]
      },
      pro: {
        name: "Alpha Hunter",
        desc: "为全职交易员和分析师打造",
        badge: "最受欢迎",
        cta: "申请内测",
        features: ["实时 Alpha 信号推送", "无限量 AI 研报总结", "全链监控 (含 Layer2)", "Smart Money 地址追踪"]
      },
      whale: {
        name: "Whale",
        desc: "机构与大户专用通道",
        cta: "申请内测",
        features: ["API 数据接口访问", "定制化监控策略", "1v1 专属客服经理"]
      }
    },
    waitlist: {
      title: "加入内测",
      subtitle: "首批仅开放",
      subtitle2: "个席位。立即预订您的 Alpha 过滤器。",
      emailLabel: "邮箱地址 (Email)",
      placeholder: "you@example.com",
      cta: "立即申请",
      privacy: "我们尊重隐私，绝不发送垃圾邮件。",
      successTitle: "申请已提交",
      successDesc: "请留意您的邮箱，内测邀请码将随机发送。",
      close: "关闭"
    },
    footer: {
      tagline: "Web3 AI 降噪情报官",
      rights: "Voiverse Labs. All rights reserved.",
      privacy: "隐私政策",
      terms: "服务条款"
    }
  }
};