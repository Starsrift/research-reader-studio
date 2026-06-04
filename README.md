# research-reader-studio

`research-reader-studio` 是一个面向 GitHub 展示与设计探索的前端项目，用于呈现一个 AI 驱动的论文阅读产品首页概念页。页面中的产品品牌名为 `Sylva`，核心场景围绕论文阅读、批注、总结、引用管理和个人研究知识工作流展开。

仓库地址：

```bash
git@github.com:Starsrift/research-reader-studio.git
```

## 项目亮点

- 以论文阅读产品为核心，而不是泛化 AI SaaS 模板
- 深森林绿 / 苔藓绿 / 暗翡翠主色系
- 玻璃拟态、半透明浮层、柔和环境感动效
- React + Next.js App Router + Tailwind CSS + Framer Motion
- 支持中英文切换
- 响应式布局，兼顾桌面端与移动端

## 页面内容

- Sticky glass navbar
- Hero section with research-reader mockup
- Trust / social proof section
- 6 个功能卡片
- Research workflow 分步流程
- Detailed product showcase
- Benefits section
- Final CTA
- Footer

## 技术栈

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## 快速开始

推荐使用较新的 Node.js LTS 环境。

```bash
git clone git@github.com:Starsrift/research-reader-studio.git
cd research-reader-studio
npm ci
npm run dev
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

- `npm run dev`: 启动本地开发环境
- `npm run build`: 生成生产构建
- `npm run start`: 启动生产模式服务

## 目录结构

```text
research-reader-studio/
├─ app/                 # Next.js App Router 入口与全局样式
├─ components/          # 页面组件与产品 mockup 组件
├─ lib/                 # 文案、配置等轻量数据模块
├─ assets/              # 视觉素材
├─ docs/                # 补充设计说明
├─ package.json
├─ tailwind.config.ts
└─ README.md
```

## 关键文件

- `app/page.tsx`: 首页入口
- `app/layout.tsx`: 根布局
- `app/globals.css`: 全局样式与玻璃拟态视觉基础
- `components/home-page.tsx`: 首页主结构
- `components/reader-workspace.tsx`: 论文阅读器产品 mockup
- `components/ambient-background.tsx`: 背景环境动效
- `lib/copy.ts`: 中英文文案内容

## 当前状态

当前主实现是 Next.js 版本首页。仓库中仍保留了较早期的静态原型文件：

- `index.html`
- `styles.css`
- `script.js`

它们可以视为早期实验稿；当前推荐以 `app/` 目录下的 Next.js 实现为主。

## Git 初始化说明

当前仓库已经可以在 `research-reader-studio` 目录内作为独立 Git 仓库使用，并可直接关联到：

```bash
git@github.com:Starsrift/research-reader-studio.git
```

如果你接下来要首次提交，常用流程是：

```bash
git add .
git commit -m "feat: initialize research-reader-studio"
git push -u origin main
```
