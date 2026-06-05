export type Locale = "en" | "zh";

type NavItem = {
  label: string;
  href: string;
};

export type PageCopy = {
  languageLabel: string;
  nav: NavItem[];
  actions: {
    signIn: string;
    startReading: string;
    viewDemo: string;
    switchToEnglish: string;
    switchToChinese: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    trust: string;
    metrics: Array<{ value: string; label: string }>;
  };
  footer: {
    description: string;
    productTitle: string;
    resourcesTitle: string;
    socialTitle: string;
    productLinks: Array<{ label: string; href: string }>;
    resourceLinks: Array<{ label: string; href: string }>;
    socialLinks: Array<{ label: string; href: string }>;
  };
};

const navRoutes = {
  en: [
    { label: "Library", href: "/library" },
    { label: "Reader", href: "/reader" },
    { label: "Notes", href: "/notes" },
    { label: "AI Assistant", href: "/assistant" }
  ],
  zh: [
    { label: "文献库", href: "/library" },
    { label: "阅读器", href: "/reader" },
    { label: "笔记", href: "/notes" },
    { label: "AI 助手", href: "/assistant" }
  ]
} satisfies Record<Locale, NavItem[]>;

export const copy: Record<Locale, PageCopy> = {
  en: {
    languageLabel: "Language",
    nav: navRoutes.en,
    actions: {
      signIn: "Sign In",
      startReading: "Start Reading",
      viewDemo: "View Demo",
      switchToEnglish: "EN",
      switchToChinese: "中文"
    },
    hero: {
      eyebrow: "AI research paper workspace",
      title: "Read, understand, and organize research papers in one intelligent workspace.",
      description:
        "Sylva combines focused reading, AI summaries, structured notes, and citation management in one calm interface for higher-quality paper understanding.",
      trust: "Built for researchers, students, engineers, and deep readers.",
      metrics: [
        { value: "PDF + DOI", label: "One-click import" },
        { value: "Focus mode", label: "Readable paper UI" },
        { value: "Private notes", label: "Personal knowledge base" }
      ]
    },
    footer: {
      description:
        "Sylva is an open-source reading platform for understanding papers, building notes, and keeping research knowledge usable over time. Deploy locally for free.",
      productTitle: "Product",
      resourcesTitle: "Resources",
      socialTitle: "Social",
      productLinks: [
        { label: "Library", href: "/library" },
        { label: "Reader", href: "/reader" },
        { label: "Notes", href: "/notes" }
      ],
      resourceLinks: [
        { label: "Documentation", href: "#" },
        { label: "Guide to Highlights", href: "#" },
        { label: "Research Workflows", href: "#" }
      ],
      socialLinks: [
        { label: "GitHub", href: "https://github.com/Starsrift/research-reader-studio" },
        { label: "X / Twitter", href: "#" },
        { label: "LinkedIn", href: "#" }
      ]
    }
  },
  zh: {
    languageLabel: "语言",
    nav: navRoutes.zh,
    actions: {
      signIn: "登录",
      startReading: "开始阅读",
      viewDemo: "查看演示",
      switchToEnglish: "EN",
      switchToChinese: "中文"
    },
    hero: {
      eyebrow: "AI 论文阅读工作台",
      title: "在一个智能工作台里，完成论文阅读、理解与知识整理。",
      description:
        "Sylva 把专注阅读、AI 摘要、结构化笔记与引用管理组合进同一个安静界面，帮助学生、研究者与工程师更高质量地读懂论文。",
      trust: "为研究者、学生、工程师与深度阅读者而设计。",
      metrics: [
        { value: "PDF + DOI", label: "一键导入" },
        { value: "专注模式", label: "清晰阅读界面" },
        { value: "私人笔记", label: "个人知识库" }
      ]
    },
    footer: {
      description:
        "Sylva 是一个开源论文阅读平台，帮助你理解论文、构建笔记，并让研究知识长期可用。免费本地部署。",
      productTitle: "产品",
      resourcesTitle: "资源",
      socialTitle: "Social",
      productLinks: [
        { label: "文献库", href: "/library" },
        { label: "阅读器", href: "/reader" },
        { label: "笔记", href: "/notes" }
      ],
      resourceLinks: [
        { label: "文档", href: "#" },
        { label: "高亮指南", href: "#" },
        { label: "研究工作流", href: "#" }
      ],
      socialLinks: [
        { label: "GitHub", href: "https://github.com/Starsrift/research-reader-studio" },
        { label: "X / Twitter", href: "#" },
        { label: "LinkedIn", href: "#" }
      ]
    }
  }
};
