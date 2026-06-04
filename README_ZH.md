# research-reader-studio

### 一个面向论文阅读工作流的高质感 AI 产品首页概念页

[![Repository](https://img.shields.io/badge/GitHub-research--reader--studio-181717?logo=github)](https://github.com/Starsrift/research-reader-studio)
[![Node](https://img.shields.io/badge/Node-20.20.2-5FA04E?logo=node.js&logoColor=white)](https://nodejs.org/en/blog/release/v20.20.2/)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-101828)](https://www.framer.com/motion/)

[English](README.md) | 中文

## 项目简介

`research-reader-studio` 是一个前端概念项目，用来展示一个 AI 驱动的论文阅读产品首页。  
这个页面围绕“导入论文、专注阅读、AI 提问、保存笔记、构建研究知识库”这一完整链路来组织产品叙事。

它的设计目标不是做一个泛化的 AI SaaS 首页，而是明确传达“论文阅读与研究理解工具”的产品气质：

- 深森林绿 / 苔藓绿 / 暗翡翠色系
- 玻璃拟态与半透明多层浮板
- 克制、安静、带环境感的微动效
- 以论文阅读器 mockup 为核心，而不是抽象仪表盘
- 支持中英文内容表达

## 为什么做这个项目

真实的论文阅读流程通常被分散在 PDF、笔记工具、引用管理器和 AI 对话工具之间。  
这个项目尝试用一个统一的产品首页，去表达更完整的研究阅读体验应该如何被设计出来。

这个页面重点强调：

- 更快进入复杂论文
- 保持阅读内容的可读性
- 让 AI 辅助真正嵌入严肃知识工作流
- 用更高级、更可信的方式呈现研究型产品界面

## 技术栈

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## 运行环境

仓库使用 `mise` 做 Node 版本隔离。

- 固定 Node 版本：`20.20.2`
- `package.json` engines：`>=20.20.2 <21`
- 本地运行时配置文件：`.mise.toml`

## 快速开始

```bash
git clone git@github.com:Starsrift/research-reader-studio.git
cd research-reader-studio
mise trust
mise install
mise exec node@20.20.2 -- npm ci
mise exec node@20.20.2 -- npm run dev
```

启动后访问：

```bash
http://localhost:3000
```

## 可用脚本

```bash
npm run dev
npm run build
npm run start
```

推荐结合 `mise` 使用：

```bash
mise exec node@20.20.2 -- npm run dev
mise exec node@20.20.2 -- npm run build
mise exec node@20.20.2 -- npm run start
```

## 首页包含的内容

- sticky glass navbar
- 带论文阅读器产品 mockup 的 Hero 区
- 信任与可信度展示区
- 6 张产品功能卡片
- 分步骤 research workflow
- 更完整的产品展示区
- 面向阅读效率与知识整理的 benefits 区
- 最终 CTA 与简洁页脚

## 目录结构

```text
research-reader-studio/
├─ app/                      # App Router 入口与全局样式
├─ components/               # 可复用页面组件与产品 mockup 组件
├─ lib/                      # 文案与轻量数据模块
├─ assets/                   # 静态素材
├─ docs/                     # 补充设计文档
├─ .mise.toml                # mise 运行时固定配置
├─ package.json              # 脚本与依赖元信息
└─ README.md
```

## 关键文件

- `app/page.tsx`: 首页入口
- `app/layout.tsx`: 应用根布局
- `app/globals.css`: 全局样式与玻璃拟态基础样式
- `components/home-page.tsx`: 首页整体结构
- `components/reader-workspace.tsx`: 论文阅读器核心 mockup
- `components/ambient-background.tsx`: 背景环境动效层
- `lib/copy.ts`: 中英文文案数据

## 说明

当前主实现是 `app/` 目录下的 Next.js 版本。

仓库中仍然保留了一组更早期的静态原型文件：

- `index.html`
- `styles.css`
- `script.js`

它们可以视为前期实验稿；当前推荐以 App Router 版本为主。
