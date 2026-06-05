# design.md

# Sylva 首页设计规范（Hero + Footer 精准版）

## 1. 项目定位

**Sylva — AI Research Reading** 是一个面向学生、研究者、工程师和深度阅读者的 AI 论文阅读网站首页。

当前阶段只做**网站首页**，不是完整 Web App，也不是多模块落地页。

首页的核心任务是：

> 用一个高质量首屏展示 Sylva 的产品气质，并通过导航按钮跳转到后续独立页面。

首页必须传达：

- 这是一个 AI 论文阅读产品
- 它帮助用户阅读、理解、整理研究论文
- 它有高级、安静、自然绿色的科技感
- 它不是泛 AI 模板站
- 它不是完整应用界面

---

## 2. 当前页面范围

首页只包含两个区域：

```txt
/
├── Hero 首页首屏
└── Footer 页脚
```

不要再添加其他首页模块。

禁止添加：

- Features 大段功能区
- Workflow 流程区
- Product Showcase 展示区
- Testimonials 用户评价区
- Pricing cards 定价卡片区
- FAQ 区
- 多段滚动营销内容

首页内容只保留：

1. 参考图中的首屏 Hero
2. 参考图中的 Footer

如果 AI 试图继续扩展页面，请阻止它。人类做网站最常见的事故就是“感觉还可以再加一块”，然后首页变成产品经理的自助餐盘。

---

## 3. 页面结构

最终首页结构应为：

```txt
Sylva 首页
├── Navbar
│   ├── Brand
│   ├── 文献库      -> /library
│   ├── 阅读器      -> /reader
│   ├── 笔记        -> /notes
│   ├── AI 助手     -> /assistant
│   ├── EN / 中文   -> 暂不实现真实语言切换
│   ├── 登录        -> 暂不实现跳转
│   └── 开始阅读    -> button，暂不跳转
│
├── Hero
│   ├── Left Content
│   │   ├── Badge
│   │   ├── Main Headline
│   │   ├── Description
│   │   ├── CTA Buttons
│   │   │   ├── 开始阅读   -> button，暂不跳转
│   │   │   └── 查看演示   -> button，暂不跳转
│   │   ├── Audience Text
│   │   └── Feature Buttons
│   │       ├── PDF + DOI  -> button，暂不跳转
│   │       └── 专注模式   -> button，暂不跳转
│   │
│   └── Right Visual Scene
│       └── Layered Dynamic Glass Research Scene
│
└── Footer
    ├── Brand Intro
    ├── Product Links
    ├── Resources Links
    └── Social Links
```

---

## 4. 关键交互规则

### 4.1 Navbar 导航必须跳转到独立页面

顶部导航中的以下项目是**页面跳转链接**，不是首页内锚点。

| 导航项 | 路由 | 类型 |
|---|---|---|
| 文献库 | `/library` | Link |
| 阅读器 | `/reader` | Link |
| 笔记 | `/notes` | Link |
| AI 助手 | `/assistant` | Link |

必须使用真实路由跳转。

> Sylva 是一个**全开源**项目，旨在帮助研究者在本地部署自己的 AI 论文阅读工作台。不收费，无定价页。

如果使用 Next.js，应使用：

```tsx
import Link from "next/link";
```

示例：

```tsx
const navItems = [
  { label: "文献库", href: "/library" },
  { label: "阅读器", href: "/reader" },
  { label: "笔记", href: "/notes" },
  { label: "AI 助手", href: "/assistant" },
  { label: "定价", href: "/pricing" },
];
```

禁止使用：

```txt
#library
#reader
#notes
#assistant
#pricing
```

这里不是单页滚动导航。点击“文献库”以后还停在首页，和按电梯按钮但门永远不开差不多。

---

### 4.2 语言切换

Navbar 中的 `EN / 中文` 按钮必须实现真实的语言切换功能。

**状态管理**：

```tsx
type Locale = "en" | "zh";
const [locale, setLocale] = useState<Locale>("zh");
const content = copy[locale];
```

**按钮行为**：

- 点击 `EN` → `setLocale("en")`
- 点击 `中文` → `setLocale("zh")`
- 当前激活语言高亮显示（绿色背景 + 薄荷绿文字）
- 非激活语言为 muted 色

**切换范围**：

语言切换影响首页所有文案：
- Navbar 导航文字
- Hero 标题、描述、按钮文案
- 功能标签文案
- Footer 列标题和链接文案（Social 列除外，保持英文）

**实现要求**：

- 使用 React `useState` 管理当前语言
- 将 `locale` 和 `setLocale` 通过 props 传递给 Navbar
- 文案统一从 `copy[locale]` 获取
- 切换时不需要刷新页面

---

### 4.3 Hero CTA 按钮先不跳转

Hero 中的两个按钮：

```txt
开始阅读
查看演示
```

当前阶段只作为按钮存在，不做真实跳转。

要求：

- 使用 `button`
- 不使用 `Link`
- 不跳转页面
- 保留 hover / active / focus-visible 状态
- 可添加 placeholder click handler

示例：

```tsx
<button type="button">开始阅读</button>
<button type="button">查看演示</button>
```

---

### 4.3 功能按钮只保留两个

Hero 底部功能按钮只保留：

```txt
PDF + DOI
一键导入
```

```txt
专注模式
清晰阅读界面
```

删除：

```txt
私人笔记
个人知识库
```

功能按钮当前也不跳转。

要求：

- 使用 `button`
- 不使用 `Link`
- 不跳转页面
- 有 hover / active / focus-visible 状态
- 两个按钮视觉上要平衡，不保留第三个空位

示例数据：

```tsx
const featureButtons = [
  {
    title: "PDF + DOI",
    description: "一键导入",
  },
  {
    title: "专注模式",
    description: "清晰阅读界面",
  },
];
```

---

## 5. Hero 首屏内容

### 5.1 Badge

```txt
AI 论文阅读工作台
```

设计要求：

- 小胶囊样式
- 低透明玻璃感
- 边框微弱
- 文字为浅绿色或白绿
- 不抢主标题视觉

---

### 5.2 Main Headline

主标题：

```txt
在一个智能工作台里，
完成论文阅读、理解与知识整理。
```

要求：

- 首页第一视觉焦点
- 大字号
- 粗体
- 白色
- 中文排版有力量
- 保持参考图里的大块面排版
- 不要改成普通 SaaS 小标题

---

## 6. Hero 标题排版强约束

标题排版必须接近参考图，不要生成过窄、过碎、过竖的标题块。

### 6.1 推荐排版

桌面端建议手动控制换行：

```tsx
<h1>
  <span>在一个智能工作</span>
  <span>台里，完成论文</span>
  <span>阅读、理解与知</span>
  <span>识整理。</span>
</h1>
```

这样能得到接近参考图的中文块面感。

### 6.2 标题样式建议

```tsx
<h1 className="max-w-[760px] text-[clamp(4rem,7vw,8rem)] font-black leading-[0.98] tracking-[-0.04em] text-white">
  ...
</h1>
```

### 6.3 避免

不要出现以下情况：

```txt
在一个智能工作
台里，
完成论文阅读、
理解与知识整
理。
```

尤其避免：

- 每行只有 3-5 个字
- 把“知识整理”拆成“知识整 / 理”
- 标题整体像竖排海报
- 标题宽度过窄
- 右侧留白被标题挤乱

### 6.4 桌面端建议数值

```txt
headline max-width: 720px - 780px
line-height: 0.95 - 1.05
letter-spacing: -0.04em 到 -0.02em
font-weight: 800 或 900
```

---

## 7. Description

正文说明：

```txt
Sylva 把专注阅读、AI 摘要、结构化笔记与引用管理组合进同一个安静界面，帮助学生、研究者与工程师更高质量地读懂论文。
```

要求：

- 简洁
- 清晰
- 有学术阅读产品感
- 不写空泛 AI 营销词
- 宽度不要超过标题宽度
- 行高舒适

---

## 8. CTA Buttons

按钮：

```txt
开始阅读
查看演示
```

视觉要求：

- `开始阅读` 是主按钮
- `查看演示` 是次按钮
- 主按钮为浅绿色填充
- 次按钮为透明描边
- 两者都有圆角胶囊形态
- hover 时轻微上浮或增强高光

交互要求：

- 暂不跳转
- 只保留按钮交互

---

## 9. Audience Text

```txt
为研究者、学生、工程师与深度阅读者而设计。
```

要求：

- 低权重
- 白色低透明
- 位于 CTA 下方
- 用于补充目标用户定位

---

## 10. Feature Buttons

只显示两个功能按钮：

```txt
PDF + DOI
一键导入
```

```txt
专注模式
清晰阅读界面
```

要求：

- 玻璃卡片按钮
- 横向排列
- 与左侧内容宽度协调
- 删除第三个私人笔记按钮后，不要留空洞
- 移动端可纵向排列

建议桌面端：

```txt
feature button count: 2
layout: grid grid-cols-2
gap: 1rem - 1.25rem
each width: equal
```

---

## 11. 右侧动态文字场景（Apple Style）

右侧不再使用静态玻璃卡片场景，改为 **苹果官网风格的动态文字动画**，类似 "This is iPhone" 的大字逐个出现效果。

### 11.1 核心目标

右侧应该是：

> 一个沉浸式的动态文字舞台，核心产品词逐字浮现，从大到小，充满仪式感

不是：

> 一个静止的玻璃卡片展示板

它需要有文字动画作为视觉主体，背景保留深绿氛围和微弱光效，但不再以玻璃卡片为核心。

---

## 12. 右侧玻璃场景强约束

右侧不能生成一个空白的大玻璃矩形。

大型玻璃主面板只是背景舞台，不是唯一主体。它必须是半透明、偏后景、能看到内部与背后层次。

右侧必须包含以下可见元素：

1. **后景**：深森林绿背景、纵向玻璃光柱、微弱网格或暗纹。
2. **中后景**：绿色光雾、薄雾、柔和流动感。
3. **主体层**：动态文字动画，核心视觉焦点。
   - **中文**：`阅读` `理解` `整理` `洞察`
   - **英文**：`Read` `Understand` `Organize` `Insight`
   - 随界面语言切换自动更换文字内容
   - 每组词中的每个字依次出现
   - 出现方式：从 `scale(1.4)` + `opacity(0)` 过渡到 `scale(1)` + `opacity(1)`
   - 字与字之间 stagger：`0.08s - 0.12s`
   - 单字动画时长：`0.4s - 0.6s`
   - 整组词完全显示后停留 `2s - 2.5s`
   - 然后切换下一组词，旧词淡出（`opacity → 0`，`scale → 0.9`）
   - 循环播放
4. **点缀层**：少量粒子、柔和绿色光点。

文字样式：
- 字体：`clamp(3rem, 6vw, 5.5rem)`，`font-weight: 800`
- 颜色：白色或薄荷绿渐变
- 居中或偏右中对齐
- 可选：`text-glow` 文字发光效果

动画参数：
```
单字入场：
  initial: { scale: 1.4, opacity: 0, filter: "blur(4px)" }
  animate:  { scale: 1,   opacity: 1, filter: "blur(0px)" }
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }

stagger: 0.1s（每个字比前一个字延迟 0.1s）

组间切换：
  旧词 exit: { opacity: 0, scale: 0.9, filter: "blur(2px)" }
  过渡间隔: 0.3s

循环周期: 每组词约 3s（入场 0.5s + 停留 2s + 退场 0.5s）
```

主玻璃面板不得遮挡论文卡片和笔记卡片。

论文卡片应位于大玻璃框内部偏上位置。

笔记卡片应位于大玻璃框前方偏右下位置。

整个场景要有明显前后层次，而不是一个空白玻璃板。

---

## 13. 右侧场景禁止项

不要生成：

- 一个巨大的空白玻璃手机壳
- 一个遮挡所有内容的半透明大矩形
- 没有文字动画的静态玻璃卡片场景
- 所有字同时出现的简单 fade-in
- 没有 stagger 的整块文字闪烁
- 字太小，没有视觉冲击力
- 动画过快（< 0.3s/字）或过慢（> 1s/字）
- 让右侧看起来像加载失败的占位 UI

---

## 14. 右侧场景层级结构

建议组件结构：

```tsx
<RightSceneShell aria-hidden="true">
  <AmbientBlobs />          {/* 最底层绿色雾气 */}
  <VerticalGlassBands />    {/* 背景纵向玻璃线 */}
  <Particles />             {/* 少量粒子 */}

  <MainGlassFrame />        {/* 大玻璃框，后景，不要遮挡 */}

  <PaperReadingCard />      {/* 中景，上方 */}
  <NotesInsightCard />      {/* 前景，右下 */}
  <GlowStreaks />           {/* 少量高光 */}
</RightSceneShell>
```

建议 z-index：

```txt
AmbientBlobs         z-index: 0
VerticalGlassBands   z-index: 1
MainGlassFrame       z-index: 2
PaperReadingCard     z-index: 3
NotesInsightCard     z-index: 4
Particles/Glow       z-index: 5
```

重点：

> MainGlassFrame 不能 z-index 最高。

它是舞台，不是盖子。否则会生成一个把所有内容盖住的巨大玻璃板，视觉上像 UI 被封印了。

---

## 15. 右侧布局比例建议

```txt
右侧区域宽度：50% - 55%

大玻璃框：
- width: 56% - 64% of right area
- height: 70% - 78% of hero height
- position: center-right
- opacity: 0.22 - 0.38

论文卡片：
- width: 46% - 52%
- top: 22%
- left: 18% of right scene
- z-index above glass frame

笔记卡片：
- width: 38% - 44%
- bottom: 18%
- right: 8%
- z-index highest among cards
```

### 15.1 目标构图

```txt
右侧视觉应该是：
背景雾气
  ↓
大玻璃框体
  ↓
论文阅读卡片
  ↓
前景笔记卡片
  ↓
稀疏光点与漂浮物
```

不是：

```txt
背景
  ↓
一个巨大空玻璃板
  ↓
一些被挡住的卡片
```

---

## 16. 右侧场景可访问性

右侧装饰层必须：

```tsx
aria-hidden="true"
className="pointer-events-none"
```

不要让屏幕阅读器读出装饰内容。辅助技术不是来欣赏玻璃雾气的，它们已经够辛苦了。

---

## 17. Footer 设计

Footer 保留参考图中的内容结构。

Footer 位于 Hero 下方，是首页唯一的下方内容区。

### 17.1 Footer 布局

Footer 分为四列：

```txt
左侧品牌介绍
PRODUCT
RESOURCES
SOCIAL
```

### 17.2 左侧品牌介绍

内容：

```txt
Sylva
AI Research Reading

Sylva is a premium reading platform for understanding papers, building notes, and keeping research knowledge usable over time.
```

要求：

- 保留 Logo
- 保留品牌名
- 保留英文说明
- 文案宽度不要过长
- 行高舒适

### 17.3 PRODUCT / 产品

内容（随语言切换）：

**英文**：
```txt
Product
Library
Reader
Notes
```

**中文**：
```txt
产品
文献库
阅读器
笔记
```

链接建议：

| 文案 | 路由 |
|---|---|
| Library / 文献库 | `/library` |
| Reader / 阅读器 | `/reader` |
| Notes / 笔记 | `/notes` |

> 无 Pricing。Sylva 是开源项目，本地部署免费使用。

### 17.4 RESOURCES / 资源

内容（随语言切换）：

**英文**：
```txt
Resources
Documentation
Guide to Highlights
Research Workflows
```

**中文**：
```txt
资源
文档
高亮指南
研究工作流
```

当前可以是占位链接。

### 17.5 SOCIAL

内容（**保持英文，不切换**）：

```txt
SOCIAL
GitHub
X / Twitter
LinkedIn
```

> SOCIAL 列标题和链接保持英文，因为它们是社交媒体品牌名称，不需要本地化。

### 17.6 Footer 视觉

要求：

- 深绿色背景
- 与 Hero 背景统一
- 顶部可有细分割线
- 大标题使用 letter-spacing
- 链接白色低透明
- hover 变亮
- 不要加入复杂装饰

---

## 18. 视觉风格

整体风格：

```txt
自然绿色 + 深色背景 + 玻璃拟态 + 高级学术科技感
```

### 18.1 颜色

```css
--color-bg-deep: #07110D;
--color-bg-forest: #0D1A15;
--color-bg-moss: #172A21;

--color-primary: #52B788;
--color-primary-soft: #95D5B2;
--color-sage: #84A98C;
--color-mint: #B7F3D2;

--color-text-primary: #F5F7F6;
--color-text-secondary: rgba(245, 247, 246, 0.78);
--color-text-muted: rgba(245, 247, 246, 0.55);

--glass-bg: rgba(255, 255, 255, 0.08);
--glass-border: rgba(255, 255, 255, 0.14);
--glass-highlight: rgba(255, 255, 255, 0.22);
```

### 18.2 玻璃效果

玻璃组件可用于：

- Navbar
- Hero CTA 背景或描边按钮
- 功能按钮
- 右侧视觉面板
- 右侧浮动卡片

不要把玻璃效果用于大段正文阅读区域。

### 18.3 动效

推荐：

- 背景光雾缓慢漂移
- 右侧卡片轻微浮动
- 粒子低速漂移
- 按钮 hover 微动
- Footer 链接 hover 变亮

禁止：

- 快速闪烁
- 过强发光
- 大幅视差
- 粒子爆炸
- 滚动过程中大量动画模块

首页只有 Hero + Footer，不需要什么”滚动叙事大片”。省点戏份，网页不是音乐剧。

---

## 18.4 色彩 Token 表

| Token | 色值 | 用途 |
|---|---|---|
| `bg-primary` | `#07110D` | 页面最深背景 |
| `bg-secondary` | `#0D1A15` | 导航栏、卡片底层背景 |
| `bg-elevated` | `#172A21` | 悬浮卡片、按钮悬停态 |
| `primary` | `#52B788` | 主按钮、关键高亮 |
| `primary-soft` | `#95D5B2` | 按钮悬停、次要强调 |
| `primary-glow` | `#B7F3D2` | 光效、发光边缘、粒子 |
| `sage` | `#84A98C` | 辅助文字、图标、装饰 |
| `text-primary` | `#F5F7F6` | 主标题、重要文字 |
| `text-secondary` | `rgba(245, 247, 246, 0.78)` | 正文描述 |
| `text-muted` | `rgba(245, 247, 246, 0.55)` | 辅助说明、标签 |
| `glass-bg` | `rgba(255, 255, 255, 0.08)` | 玻璃面板背景 |
| `glass-border` | `rgba(255, 255, 255, 0.14)` | 玻璃边框 |
| `glass-highlight` | `rgba(255, 255, 255, 0.22)` | 玻璃高光边缘 |

---

## 18.5 字体系统

| 层级 | 桌面端尺寸 | 字重 | 行高 | 字间距 | 用途 |
|---|---|---|---|---|---|
| Display | `clamp(2.8rem, 5.5vw, 5rem)` | 800 | 1.0 | -0.04em | 主标题 |
| H1 | `2.5rem` | 700 | 1.2 | -0.02em | 模块标题 |
| Body | `1rem` | 400 | 1.75 | 0 | 正文描述 |
| Caption | `0.875rem` | 400 | 1.5 | 0 | 辅助文字 |
| Badge | `0.75rem` | 500 | 1 | 0.02em | 标签、徽章 |

---

## 18.6 玻璃拟态 CSS 规范

```css
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 1rem;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.glass-panel {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
}
```

---

## 18.7 动效规范表

| 元素 | 触发 | 动效 | 时长 |
|---|---|---|---|
| 背景光雾 | 环境 | 缓慢漂移，周期 20-30s | 持续 |
| 纵向光柱 | 环境 | opacity 呼吸 0.05→0.12 | 8s |
| 右侧卡片 | 环境 | 轻微浮动 y: ±6px | 10-14s |
| 粒子 | 环境 | 随机漂浮 | 15-25s |
| 导航链接 | Hover | 底部下划线滑入，文字变亮 | 0.2s |
| 主按钮 | Hover | translateY(-2px)，背景变亮 | 0.2s |
| 功能标签 | Hover | 边框变亮，scale(1.02) | 0.2s |

禁止：快速闪烁、过强发光、大幅视差、粒子爆炸。

---

## 18.8 响应式断点

| 断点 | 宽度 | 关键变化 |
|---|---|---|
| Mobile | < 640px | 上下堆叠，场景作为背景氛围 |
| Tablet | 640px - 1024px | 左右压缩，场景简化 |
| Desktop | 1024px - 1440px | 完整左右分栏 |
| Wide | > 1440px | 容器 max-w-[88rem] |

---

## 19. 技术实现建议

推荐技术栈：

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion

推荐目录：

```txt
app/
  page.tsx
  library/
    page.tsx
  reader/
    page.tsx
  notes/
    page.tsx
  assistant/
    page.tsx

components/
  home/
    Navbar.tsx
    HeroSection.tsx
    HeroActions.tsx
    FeatureButtons.tsx
    RightSceneShell.tsx
    Footer.tsx
```

### 19.1 Navbar Link 示例

```tsx
import Link from "next/link";

const navItems = [
  { label: "文献库", href: "/library" },
  { label: "阅读器", href: "/reader" },
  { label: "笔记", href: "/notes" },
  { label: "AI 助手", href: "/assistant" },
  { label: "定价", href: "/pricing" },
];

export function Navbar() {
  return (
    <nav>
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
```

### 19.2 Hero Button 示例

```tsx
<button type="button">开始阅读</button>
<button type="button">查看演示</button>
```

### 19.3 Feature Button 示例

```tsx
const featureButtons = [
  { title: "PDF + DOI", description: "一键导入" },
  { title: "专注模式", description: "清晰阅读界面" },
];
```

---

## 20. 响应式规则

### 桌面端

- Hero 保持左右布局
- Navbar 完整显示
- 右侧玻璃场景完整
- 两个功能按钮横排
- Footer 四列布局

### 平板端

- Hero 可保持左右结构或上下压缩
- 右侧场景简化
- Footer 可变成两列

### 移动端

- Hero 内容优先
- 右侧场景可缩小或作为背景氛围
- 功能按钮纵向排列
- Footer 单列排列
- 不出现横向滚动

---

## 21. 可访问性要求

必须满足：

- Navbar 链接可键盘访问
- Hero 按钮可键盘访问
- 功能按钮可键盘访问
- Footer 链接可键盘访问
- focus-visible 明显
- 文字对比度足够
- 右侧装饰场景 `aria-hidden="true"`
- reduced motion 下减少或关闭动画

---

## 22. 最终验收标准

### 页面内容

- [ ] 首页只有 Hero 和 Footer
- [ ] 不存在其他中间模块
- [ ] Hero 与参考图一致
- [ ] Footer 与参考图一致

### 导航

- [ ] 文献库跳转 `/library`
- [ ] 阅读器跳转 `/reader`
- [ ] 笔记跳转 `/notes`
- [ ] AI 助手跳转 `/assistant`
- [ ] 无定价页（开源项目，本地部署免费）
- [ ] 没有使用首页内锚点

### Hero 按钮

- [ ] 开始阅读是 button
- [ ] 查看演示是 button
- [ ] 两者暂不跳转

### 功能按钮

- [ ] PDF + DOI 保留
- [ ] 专注模式保留
- [ ] 私人笔记保留
- [ ] 三个功能按钮暂不跳转

### 标题排版

- [ ] 标题块面感接近参考图
- [ ] 没有过度竖排
- [ ] 没有把“知识整理”拆坏
- [ ] 标题宽度足够

### 右侧场景

- [ ] 不是空白大玻璃板
- [ ] 有大玻璃框体
- [ ] 有论文阅读卡片
- [ ] 有笔记卡片
- [ ] 有绿色光雾
- [ ] 有前后层级
- [ ] 主玻璃框没有遮挡卡片

### 视觉

- [ ] 自然绿色调保留
- [ ] 玻璃拟态保留
- [ ] 右侧动态玻璃场景保留
- [ ] Footer 与 Hero 风格统一
- [ ] 页面看起来像论文阅读产品首页

---

## 23. 一句话设计原则

> 首页只做 Hero + Footer；导航负责跳页面，Hero 和功能卡先只做按钮；右侧必须是分层研究玻璃场景，不是空白玻璃板。

保持这个边界，页面就会清楚。越界之后，网站很快会变成”什么都想表达，所以什么都表达不清”的经典人类作品。

---

## 24. 开源定位

Sylva 是一个**全开源**的 AI 论文阅读工作台项目。

- 无定价页，不收费
- 目标：帮助研究者、学生、工程师在本地部署自己的论文阅读环境
- 导航中不保留 Pricing/定价入口
- Footer Product 列中不保留 Pricing 链接
