export type Language = 'en' | 'zh';

export const translations = {
  en: {
    nav: {
      works: "How it works",
      topics: "Topics",
      sources: "Sources",
      pricing: "Pricing",
      cta: "Join Beta",
      waitlist: "Join Waitlist"
    },
    hero: {
      title: "We read all your information. You only read what matters most.",
      subtitle: "Your Essential AI Industry Brief in 10 Minutes",
      cta: "Get Early Access"
    },
    flow: {
      title: "How it works: From Chaos to Clarity",
      subtitle: "We don't add another source. We replace the chaos with a single, personalized stream.",
      step1: {
        title: "Info Overload",
        subtitle: "The Problem",
        desc: "50+ browser tabs, Twitter, newsletters, podcasts, research papers... Hours spent daily, yet still anxious about missing something important.",
        tag: "Pain Point"
      },
      step2: {
        title: "Smart Aggregation",
        subtitle: "The Solution",
        desc: "We connect to ALL your sources — Twitter, newsletters, media sites, research hubs. Everything flows into one unified stream. You subscribe once, we handle the rest.",
        tag: "Core Tech"
      },
      step3: {
        title: "Learn Your Taste",
        subtitle: "Personalization",
        desc: "Every click, save, and skip teaches us what you care about. Over time, your brief becomes uniquely yours — surfacing exactly what matters to you.",
        tag: "AI Learning"
      },
      step4: {
        title: "10-Min Daily Brief",
        subtitle: "The Result",
        desc: "Wake up to a curated brief with only the most important updates. No more FOMO, no more tab-hopping. Just clarity in 10 minutes.",
        tag: "Benefit",
        cta: "Join Beta!"
      },
      illus: {
        dailyAlpha: "Daily Brief",
        readTime: "10 min read",
        fomoFree: "Zero FOMO"
      }
    },
    topics: {
      title: "Featured Topics",
      subtitle: "AIFocus scans the entire AI ecosystem 24/7 to extract high-value intelligence.",
      list: [
        { title: "LLM & Foundation Models", desc: "Track breakthroughs from OpenAI, Anthropic, Google DeepMind. Get summaries of key research papers before they trend." },
        { title: "AI Startup Landscape", desc: "Monitor funding rounds, product launches, and strategic moves in the AI startup ecosystem." },
        { title: "AGI & Safety Research", desc: "Curated updates on alignment research, safety papers, and thought leadership from leading researchers." },
        { title: "AI Policy & Regulation", desc: "Track global AI governance, regulatory changes, and policy debates that shape the industry." },
        { title: "Open Source & Tools", desc: "Stay updated on open-source releases, new frameworks, and developer tools transforming AI development." },
        { title: "Investment Insights", desc: "Aggregate VC perspectives, market analysis, and funding trends in the AI sector." }
      ]
    },
    kol: {
      title: "Your Sources, Unified",
      subtitle: "From Twitter KOLs to tech media, research papers to newsletters — we aggregate them all. You choose who matters most.",
      followersLabel: "followers",
      readersLabel: "readers",
      viewMore: "View All 100+ Sources",
      sectionKol: "Top AI Voices",
      sectionMedia: "Premier AI Media"
    },
    pricing: {
      title: "Choose Your Plan",
      subtitle: "During Alpha, all premium features are free for a limited time.",
      explorer: {
        name: "Explorer",
        desc: "For AI Enthusiasts",
        cta: "Apply for Access",
        features: ["1 Daily AI Brief", "Basic Topic Tracking", "Email Support"]
      },
      pro: {
        name: "Pro Insider",
        desc: "For Founders & VCs",
        badge: "Most Popular",
        cta: "Apply for Access",
        features: ["Real-time AI Signals", "Unlimited AI Summaries", "Custom Source Feeds", "Research Paper Digests"]
      },
      whale: {
        name: "Enterprise",
        desc: "For Organizations",
        cta: "Apply for Access",
        features: ["API Access", "Custom Intelligence", "1v1 Account Manager"]
      }
    },
    waitlist: {
      title: "Join Alpha",
      subtitle: "First",
      subtitle2: "spots only. Reserve your AI intelligence filter now.",
      emailLabel: "Email Address",
      placeholder: "you@example.com",
      cta: "Join Waitlist",
      privacy: "We respect privacy. No spam.",
      successTitle: "Application Submitted",
      successDesc: "Check your inbox. Invite codes are sent randomly.",
      close: "Close"
    },
    footer: {
      tagline: "AI Industry Intelligence Filter",
      rights: "AIFocus Labs. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  zh: {
    nav: {
      works: "工作原理",
      topics: "精选主题",
      sources: "信息源",
      pricing: "价格计划",
      cta: "内测申请",
      waitlist: "加入内测"
    },
    hero: {
      title: "我们帮你读你的所有信息，你只读最重要的那一部分。",
      subtitle: "AI行业你每日非看不可的10分钟简报",
      cta: "立即获取内测资格"
    },
    flow: {
      title: "工作原理：从混乱到清晰",
      subtitle: "我们不是新增一个信息源，而是用一条个性化的信息流取代所有混乱。",
      step1: {
        title: "信息过载",
        subtitle: "痛点",
        desc: "50多个浏览器标签页、Twitter、Newsletter、播客、研究论文... 每天花几个小时，却还是担心错过重要信息。",
        tag: "痛点场景"
      },
      step2: {
        title: "智能聚合",
        subtitle: "解决方案",
        desc: "我们连接你所有的信息源 — Twitter、Newsletter、媒体网站、研究机构。所有信息汇入一条统一的信息流。你只需订阅一次，剩下的我们来处理。",
        tag: "核心机制"
      },
      step3: {
        title: "学习你的偏好",
        subtitle: "个性化",
        desc: "每一次点击、收藏、跳过，都在教会我们你关心什么。随着时间推移，你的简报会变得独一无二 — 精准呈现对你最重要的内容。",
        tag: "AI 学习"
      },
      step4: {
        title: "每日10分钟简报",
        subtitle: "最终成果",
        desc: "醒来就能看到一份精选简报，只包含最重要的更新。不再焦虑错过，不再标签页跳转。10分钟，一切清晰。",
        tag: "最终收益",
        cta: "加入内测！"
      },
      illus: {
        dailyAlpha: "每日简报",
        readTime: "10分钟阅读",
        fomoFree: "告别焦虑"
      }
    },
    topics: {
      title: "精选主题",
      subtitle: "AIFocus 全天候扫描 AI 全生态，为您提炼以下高价值情报",
      list: [
        { title: "LLM与基础模型", desc: "追踪 OpenAI、Anthropic、Google DeepMind 的最新突破。在论文爆火前获取核心摘要。" },
        { title: "AI 创业生态", desc: "监控融资动态、产品发布和 AI 创业公司的战略动向。" },
        { title: "AGI与安全研究", desc: "精选对齐研究、安全论文和顶尖研究者的思想领导力更新。" },
        { title: "AI 政策与监管", desc: "追踪全球 AI 治理、监管变化和影响行业的政策辩论。" },
        { title: "开源与工具", desc: "掌握开源发布、新框架和改变 AI 开发的开发者工具。" },
        { title: "投资洞察", desc: "聚合 VC 视角、市场分析和 AI 领域的融资趋势。" }
      ]
    },
    kol: {
      title: "你的信息源，统一管理",
      subtitle: "从 Twitter KOL 到科技媒体，从研究论文到 Newsletter — 我们全部聚合。由你选择谁最重要。",
      followersLabel: "粉丝",
      readersLabel: "读者",
      viewMore: "查看全部 100+ 信息源",
      sectionKol: "顶级 AI 声音",
      sectionMedia: "顶级 AI 媒体"
    },
    pricing: {
      title: "选择您的计划",
      subtitle: "内测期间，所有高级功能限时免费开放",
      explorer: {
        name: "Explorer",
        desc: "适合 AI 爱好者",
        cta: "申请内测",
        features: ["每日 1 次 AI 简报", "基础主题追踪", "邮件支持"]
      },
      pro: {
        name: "Pro Insider",
        desc: "为创始人和 VC 打造",
        badge: "最受欢迎",
        cta: "申请内测",
        features: ["实时 AI 信号推送", "无限量 AI 摘要总结", "自定义信息源订阅", "论文精读摘要"]
      },
      whale: {
        name: "Enterprise",
        desc: "机构专用通道",
        cta: "申请内测",
        features: ["API 数据接口访问", "定制化情报服务", "1v1 专属客服经理"]
      }
    },
    waitlist: {
      title: "加入内测",
      subtitle: "首批仅开放",
      subtitle2: "个席位。立即预订您的 AI 情报过滤器。",
      emailLabel: "邮箱地址 (Email)",
      placeholder: "you@example.com",
      cta: "立即申请",
      privacy: "我们尊重隐私，绝不发送垃圾邮件。",
      successTitle: "申请已提交",
      successDesc: "请留意您的邮箱，内测邀请码将随机发送。",
      close: "关闭"
    },
    footer: {
      tagline: "AI 行业情报降噪官",
      rights: "AIFocus Labs. All rights reserved.",
      privacy: "隐私政策",
      terms: "服务条款"
    }
  }
};
