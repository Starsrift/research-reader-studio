export type Locale = "en" | "zh";

type NavItem = {
  label: string;
  href: string;
};

type Feature = {
  id: string;
  title: string;
  description: string;
};

type WorkflowStep = {
  id: string;
  title: string;
  description: string;
};

type Benefit = {
  title: string;
  description: string;
};

type Collection = {
  title: string;
  count: string;
};

type FloatingInsight = {
  label: string;
  text: string;
};

type BottomCard = {
  label: string;
  title: string;
  points: string[];
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
  trust: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    items: Feature[];
  };
  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: WorkflowStep[];
  };
  showcase: {
    eyebrow: string;
    title: string;
    description: string;
  };
  benefits: {
    eyebrow: string;
    title: string;
    description: string;
    items: Benefit[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
    footnote: string;
  };
  footer: {
    description: string;
    productTitle: string;
    resourcesTitle: string;
    socialTitle: string;
    productLinks: NavItem[];
    resourceLinks: NavItem[];
    socialLinks: NavItem[];
  };
  workspace: {
    leftPanelLabel: string;
    searchPlaceholder: string;
    collections: Collection[];
    focusModes: string[];
    outlineLabel: string;
    mapLabel: string;
    outline: string[];
    paperLabel: string;
    paperTitle: string;
    paperAuthors: string;
    paperMeta: string;
    abstractLabel: string;
    abstractBody: string;
    keyIdeasLabel: string;
    keyIdeas: string[];
    rightPanelLabel: string;
    summaryLabel: string;
    summaryPoints: string[];
    explainLabel: string;
    explainQuestion: string;
    notesLabel: string;
    notes: string[];
    citationsLabel: string;
    citations: string[];
    relatedLabel: string;
    relatedPapers: string[];
    floatingInsights: FloatingInsight[];
    bottomCards: BottomCard[];
  };
};

export const copy: Record<Locale, PageCopy> = {
  en: {
    languageLabel: "Language",
    nav: [
      { label: "Library", href: "#library" },
      { label: "Reader", href: "#reader" },
      { label: "Notes", href: "#notes" },
      { label: "AI Assistant", href: "#assistant" },
      { label: "Pricing", href: "#pricing" }
    ],
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
        "Sylva combines focused paper reading, AI summaries, smart notes, and citation-ready organization into a calm environment built for deep study and serious knowledge work.",
      trust: "Built for researchers, students, engineers, and deep readers.",
      metrics: [
        { value: "PDF + DOI", label: "Import pipeline" },
        { value: "Focus mode", label: "Readable paper UI" },
        { value: "Private notes", label: "Personal knowledge base" }
      ]
    },
    trust: {
      eyebrow: "Used across serious reading workflows",
      title: "Designed for grad labs, reading clubs, product research teams, and independent scholars.",
      items: [
        "arXiv-first import",
        "BibTeX-ready citations",
        "Private annotation layers",
        "Cross-paper concept search",
        "Weekly reading workflows"
      ]
    },
    features: {
      eyebrow: "Product capabilities",
      title: "Everything needed to move from dense papers to durable understanding.",
      description:
        "The workspace is tuned for research reading: clean paper surfaces, helpful AI assistance, and structured knowledge capture without tool switching.",
      items: [
        {
          id: "reader",
          title: "Focused Paper Reader",
          description: "A distraction-light reading surface built for long papers, equations, figures, and multi-section review."
        },
        {
          id: "summary",
          title: "AI Summary",
          description: "Generate concise overviews, section recaps, and quick refreshers before meetings or paper discussions."
        },
        {
          id: "highlighting",
          title: "Smart Highlighting",
          description: "Capture claims, methods, results, and open questions with semantic tags instead of loose color streaks."
        },
        {
          id: "notes",
          title: "Notes & Annotations",
          description: "Turn margin notes into structured reading notes you can revisit, link, and build on over time."
        },
        {
          id: "citations",
          title: "Citation Management",
          description: "Keep BibTeX, quotes, and references aligned with what you actually highlighted and understood."
        },
        {
          id: "search",
          title: "Semantic Search",
          description: "Search concepts, definitions, experiments, and insights across your entire personal paper library."
        }
      ]
    },
    workflow: {
      eyebrow: "Calm research flow",
      title: "From raw PDFs to a searchable knowledge base.",
      description:
        "Each step is designed to keep context intact while you move from reading to understanding to future reuse.",
      steps: [
        {
          id: "import",
          title: "Import Papers",
          description: "Bring in PDFs, DOIs, or arXiv links and let metadata, sections, and references resolve automatically."
        },
        {
          id: "focus",
          title: "Read in Focus Mode",
          description: "Use a clear paper surface with just enough navigation, outline, and progress context."
        },
        {
          id: "highlight",
          title: "Highlight Key Ideas",
          description: "Mark claims, assumptions, baselines, and insights without breaking your reading rhythm."
        },
        {
          id: "ask",
          title: "Ask AI Questions",
          description: "Query difficult paragraphs, methods, or notation directly beside the paper."
        },
        {
          id: "save",
          title: "Save Notes and Citations",
          description: "Store polished notes, excerpts, and references in a reusable format."
        },
        {
          id: "build",
          title: "Build a Personal Research Knowledge Base",
          description: "Connect papers, recurring concepts, and your own thoughts into a durable research memory."
        }
      ]
    },
    showcase: {
      eyebrow: "Detailed product view",
      title: "A reader designed around paper work, not generic chat.",
      description:
        "Reading, explanation, note-taking, and reference management live together in one composed interface so the paper stays central."
    },
    benefits: {
      eyebrow: "Why it helps",
      title: "Built to improve understanding, not just speed.",
      description:
        "Sylva is designed to reduce the friction around serious reading while preserving the depth that research work demands.",
      items: [
        {
          title: "Read complex papers faster",
          description: "Get oriented quickly with section summaries, paper maps, and targeted AI explanations."
        },
        {
          title: "Stay organized across your research",
          description: "Keep papers, notes, citations, and related concepts aligned in one place instead of scattered tools."
        },
        {
          title: "Turn highlights into structured notes",
          description: "Promote your best highlights into clean note cards, synthesis pages, and project references."
        },
        {
          title: "Understand difficult concepts with AI help",
          description: "Ask for simplified explanations, method breakdowns, or comparisons with prior work right beside the source."
        },
        {
          title: "Reduce context switching between tools",
          description: "Read, think, annotate, summarize, and export without bouncing across tabs and fragmented workflows."
        }
      ]
    },
    cta: {
      eyebrow: "Start your next reading session",
      title: "Bring your next hundred papers into one calm, searchable research workspace.",
      description:
        "Import a paper, ask your first question, and turn highlights into structured knowledge without leaving the reading flow.",
      primary: "Start Reading",
      secondary: "Book a Demo",
      footnote: "No noisy dashboards. Just focused reading, grounded AI help, and durable notes."
    },
    footer: {
      description:
        "Sylva is a premium reading platform for understanding papers, building notes, and keeping research knowledge usable over time.",
      productTitle: "Product",
      resourcesTitle: "Resources",
      socialTitle: "Social",
      productLinks: [
        { label: "Library", href: "#library" },
        { label: "Reader", href: "#reader" },
        { label: "Notes", href: "#notes" },
        { label: "Pricing", href: "#pricing" }
      ],
      resourceLinks: [
        { label: "Documentation", href: "#showcase" },
        { label: "Guide to Highlights", href: "#workflow" },
        { label: "Research Workflows", href: "#benefits" }
      ],
      socialLinks: [
        { label: "GitHub", href: "#" },
        { label: "X / Twitter", href: "#" },
        { label: "LinkedIn", href: "#" }
      ]
    },
    workspace: {
      leftPanelLabel: "Paper Library",
      searchPlaceholder: "Search papers, concepts, authors...",
      collections: [
        { title: "Multimodal reasoning", count: "18 papers" },
        { title: "Inference efficiency", count: "12 papers" },
        { title: "Vision-language evals", count: "9 papers" }
      ],
      focusModes: ["Focus", "Outline", "Highlights"],
      outlineLabel: "Paper Outline",
      mapLabel: "Reading map",
      outline: [
        "1. Problem framing",
        "2. Method architecture",
        "3. Training recipe",
        "4. Evaluation protocol",
        "5. Limitations & future work"
      ],
      paperLabel: "Reader Surface",
      paperTitle: "Adaptive Memory Routing for Long-Context Scientific QA",
      paperAuthors: "L. Chen, A. Rivera, M. Patel",
      paperMeta: "NeurIPS 2026 • 14 pages • 42 references",
      abstractLabel: "Abstract",
      abstractBody:
        "We present a retrieval-aware memory routing strategy that improves long-context scientific question answering by selectively preserving experimental evidence, citations, and method details during iterative reading.",
      keyIdeasLabel: "Key ideas",
      keyIdeas: [
        "Preserve evidence spans instead of only embedding chunks.",
        "Track claims and supporting references together.",
        "Route explanations by question intent and section role."
      ],
      rightPanelLabel: "AI Assistant",
      summaryLabel: "Section summary",
      summaryPoints: [
        "The paper targets long-context QA failure modes caused by evidence dilution.",
        "Their routing module separates method, result, and citation memory states.",
        "Best gains appear on explanation-heavy scientific benchmarks."
      ],
      explainLabel: "Ask Sylva",
      explainQuestion: "Explain why evidence retention matters more than larger chunk size here.",
      notesLabel: "Research notes",
      notes: [
        "Routing resembles query-aware cache selection.",
        "Potential tie-in with structured memory for multimodal papers.",
        "Check whether citation grounding helps robustness."
      ],
      citationsLabel: "Citations",
      citations: [
        "Export BibTeX",
        "Copy quoted passage",
        "Save citation with note"
      ],
      relatedLabel: "Related papers",
      relatedPapers: [
        "Sparse Memory Controllers",
        "Citation-Grounded QA",
        "Retrieval-Augmented Reading Agents"
      ],
      floatingInsights: [
        {
          label: "Insight",
          text: "Method gains are strongest on papers with dense experimental appendices."
        },
        {
          label: "Highlight",
          text: "Evidence routing improves answer faithfulness without widening the base context window."
        }
      ],
      bottomCards: [
        {
          label: "Paper detail",
          title: "Methods, figures, and assumptions stay connected.",
          points: [
            "Figure-aware note pins",
            "Method cards linked to citations",
            "Equation explanations beside source text"
          ]
        },
        {
          label: "Explanation card",
          title: "Ask for plain-language rewrites without losing technical precision.",
          points: [
            "Compare with prior work",
            "Clarify notation in context",
            "Summarize tradeoffs by section"
          ]
        },
        {
          label: "Research notes",
          title: "Turn readings into a usable knowledge graph.",
          points: [
            "Promote highlights into note pages",
            "Group insights by project",
            "Link recurring methods across papers"
          ]
        }
      ]
    }
  },
  zh: {
    languageLabel: "语言",
    nav: [
      { label: "文献库", href: "#library" },
      { label: "阅读器", href: "#reader" },
      { label: "笔记", href: "#notes" },
      { label: "AI 助手", href: "#assistant" },
      { label: "定价", href: "#pricing" }
    ],
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
    trust: {
      eyebrow: "服务严肃研究阅读流程",
      title: "适用于实验室组会、论文精读、小组共读与个人长期研究积累。",
      items: [
        "支持 arXiv 导入",
        "BibTeX 引用导出",
        "私有批注层",
        "跨论文语义检索",
        "每周论文阅读工作流"
      ]
    },
    features: {
      eyebrow: "核心能力",
      title: "把高密度论文，转化成可理解、可复用的长期知识。",
      description:
        "整个工作区都围绕论文阅读设计：正文足够清晰，AI 足够克制，笔记足够结构化，不需要在多个工具之间频繁切换。",
      items: [
        {
          id: "reader",
          title: "专注论文阅读器",
          description: "为长论文、图表、公式和多章节精读优化的阅读界面，减少干扰，保留必要导航。"
        },
        {
          id: "summary",
          title: "AI 摘要",
          description: "快速生成整篇概览、章节摘要和会前复习内容，帮助你先建立全局再进入细读。"
        },
        {
          id: "highlighting",
          title: "智能高亮",
          description: "按 claim、method、result、question 等语义标记高亮，而不只是做零散颜色涂抹。"
        },
        {
          id: "notes",
          title: "笔记与批注",
          description: "把页边批注整理成结构化阅读笔记，方便回顾、关联和持续积累。"
        },
        {
          id: "citations",
          title: "引用管理",
          description: "让 BibTeX、引用片段与阅读理解保持一致，避免读完后再回头补材料。"
        },
        {
          id: "search",
          title: "语义搜索",
          description: "跨整库检索概念、定义、实验与结论，快速找到你过去读过的重要信息。"
        }
      ]
    },
    workflow: {
      eyebrow: "研究阅读流程",
      title: "从原始 PDF，到可检索的个人知识系统。",
      description:
        "每一步都尽量保留上下文，让你从阅读到理解，再到沉淀复用，始终在同一个工作流中完成。",
      steps: [
        {
          id: "import",
          title: "导入论文",
          description: "支持 PDF、DOI、arXiv 链接导入，并自动解析元数据、章节结构与参考文献。"
        },
        {
          id: "focus",
          title: "专注模式阅读",
          description: "在干净的论文界面中阅读，同时保留最必要的大纲、进度和上下文信息。"
        },
        {
          id: "highlight",
          title: "标记关键观点",
          description: "高亮核心 claim、假设、实验结果与开放问题，不打断阅读节奏。"
        },
        {
          id: "ask",
          title: "向 AI 提问",
          description: "对困难段落、方法细节、公式符号或实验设定进行即时追问。"
        },
        {
          id: "save",
          title: "保存笔记与引用",
          description: "把精炼笔记、摘录和参考文献保存为可长期复用的结构化资产。"
        },
        {
          id: "build",
          title: "构建个人研究知识库",
          description: "把论文、概念和你的思考连接起来，形成长期可增长的研究记忆。"
        }
      ]
    },
    showcase: {
      eyebrow: "更完整的产品视图",
      title: "这不是泛化聊天工具，而是围绕论文阅读设计的工作台。",
      description:
        "阅读、解释、做笔记和管理引用在一个完整界面中协同工作，让论文始终处于中心位置。"
    },
    benefits: {
      eyebrow: "为什么更有效",
      title: "不仅更快，更重要的是更容易真正读懂。",
      description:
        "Sylva 关注的是研究阅读里的真实摩擦点：信息过密、工具分散、笔记难复用、概念难追踪。",
      items: [
        {
          title: "更快进入复杂论文",
          description: "借助章节摘要、论文地图和针对性解释，先建立整体框架，再深入细节。"
        },
        {
          title: "让研究资料持续有序",
          description: "论文、笔记、引用和相关概念保持在同一体系里，不再散落在多个工具中。"
        },
        {
          title: "把高亮沉淀成结构化笔记",
          description: "把最有价值的高亮升级为正式笔记卡片、主题页和项目资料。"
        },
        {
          title: "借助 AI 理解困难概念",
          description: "在原文旁获得更平实但不失准确性的解释，适合追方法、补背景和做对比。"
        },
        {
          title: "减少工具切换成本",
          description: "阅读、思考、提问、标注、导出在一个流程里完成，减少碎片化操作。"
        }
      ]
    },
    cta: {
      eyebrow: "开始下一次精读",
      title: "把你的下一百篇论文，放进同一个安静、可检索的研究空间。",
      description:
        "导入一篇论文，提出第一个问题，再把关键高亮整理成结构化知识，整个过程都不离开阅读流。",
      primary: "开始阅读",
      secondary: "预约演示",
      footnote: "没有嘈杂控制台，只有清晰阅读、克制的 AI 帮助，以及可沉淀的笔记。"
    },
    footer: {
      description:
        "Sylva 是一个面向论文理解、知识整理与长期研究积累的高品质阅读平台。",
      productTitle: "产品",
      resourcesTitle: "资源",
      socialTitle: "社交",
      productLinks: [
        { label: "文献库", href: "#library" },
        { label: "阅读器", href: "#reader" },
        { label: "笔记", href: "#notes" },
        { label: "定价", href: "#pricing" }
      ],
      resourceLinks: [
        { label: "产品说明", href: "#showcase" },
        { label: "高亮方法", href: "#workflow" },
        { label: "研究流程", href: "#benefits" }
      ],
      socialLinks: [
        { label: "GitHub", href: "#" },
        { label: "X / Twitter", href: "#" },
        { label: "LinkedIn", href: "#" }
      ]
    },
    workspace: {
      leftPanelLabel: "论文文献库",
      searchPlaceholder: "搜索论文、概念、作者...",
      collections: [
        { title: "多模态推理", count: "18 篇论文" },
        { title: "推理效率优化", count: "12 篇论文" },
        { title: "视觉语言评测", count: "9 篇论文" }
      ],
      focusModes: ["专注", "大纲", "高亮"],
      outlineLabel: "论文大纲",
      mapLabel: "阅读地图",
      outline: [
        "1. 问题定义",
        "2. 方法架构",
        "3. 训练方案",
        "4. 评测协议",
        "5. 局限与未来工作"
      ],
      paperLabel: "阅读面板",
      paperTitle: "Adaptive Memory Routing for Long-Context Scientific QA",
      paperAuthors: "L. Chen, A. Rivera, M. Patel",
      paperMeta: "NeurIPS 2026 • 14 页 • 42 条参考文献",
      abstractLabel: "摘要",
      abstractBody:
        "我们提出一种面向检索的记忆路由策略，在长上下文科学问答场景中，优先保留实验依据、引用关系和方法细节，从而提升理解与回答质量。",
      keyIdeasLabel: "关键观点",
      keyIdeas: [
        "保留证据片段，而不是只保留向量化 chunk。",
        "把 claim 与对应参考文献一起跟踪。",
        "根据问题意图和章节角色路由解释信息。"
      ],
      rightPanelLabel: "AI 助手",
      summaryLabel: "章节摘要",
      summaryPoints: [
        "论文针对长上下文 QA 中证据稀释带来的失败模式。",
        "路由模块区分 method、result 和 citation 三种记忆状态。",
        "在解释型科学问答基准上表现提升最明显。"
      ],
      explainLabel: "问 Sylva",
      explainQuestion: "解释一下：为什么这里的证据保留比简单扩大 chunk 更重要？",
      notesLabel: "研究笔记",
      notes: [
        "这类路由很像 query-aware cache 选择。",
        "可能能和多模态论文的结构化记忆结合。",
        "需要验证 citation grounding 是否提升鲁棒性。"
      ],
      citationsLabel: "引用操作",
      citations: [
        "导出 BibTeX",
        "复制引用原文",
        "保存带笔记的引用"
      ],
      relatedLabel: "相关论文",
      relatedPapers: [
        "Sparse Memory Controllers",
        "Citation-Grounded QA",
        "Retrieval-Augmented Reading Agents"
      ],
      floatingInsights: [
        {
          label: "洞察",
          text: "当论文附录实验密度很高时，这种方法的收益更明显。"
        },
        {
          label: "高亮",
          text: "证据路由在不扩大基础上下文窗口的前提下，提高了回答可信度。"
        }
      ],
      bottomCards: [
        {
          label: "论文细节",
          title: "方法、图表与假设始终保持关联。",
          points: [
            "图表级笔记锚点",
            "方法卡片关联引用",
            "公式解释贴近原文"
          ]
        },
        {
          label: "解释卡片",
          title: "用更平实的语言解释复杂内容，同时保留技术准确性。",
          points: [
            "和相关工作做对比",
            "结合上下文解释符号",
            "按章节总结 trade-off"
          ]
        },
        {
          label: "研究笔记",
          title: "把阅读结果沉淀成可用的知识网络。",
          points: [
            "将高亮升级为正式笔记",
            "按项目归档思考",
            "连接跨论文重复方法"
          ]
        }
      ]
    }
  }
};
