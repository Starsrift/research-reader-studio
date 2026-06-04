# research-reader-studio

### A premium AI-powered landing page concept for a research paper reading workspace

[![Repository](https://img.shields.io/badge/GitHub-research--reader--studio-181717?logo=github)](https://github.com/Starsrift/research-reader-studio)
[![Node](https://img.shields.io/badge/Node-20.20.2-5FA04E?logo=node.js&logoColor=white)](https://nodejs.org/en/blog/release/v20.20.2/)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-101828)](https://www.framer.com/motion/)

English | [中文](README_ZH.md)

## Overview

`research-reader-studio` is a frontend concept project for an AI-powered research paper reading product.  
The landing page is designed around a clear product story: import papers, read in focus mode, ask AI questions, save notes, and build a personal research knowledge base.

The visual direction is intentionally not a generic AI SaaS template:

- dark forest-green / moss-green / deep emerald palette
- premium glassmorphism and layered translucent panels
- calm ambient motion with subtle depth
- realistic paper-reader mockups instead of abstract dashboards
- bilingual product copy support in English and Chinese

## Why This Project

Modern paper reading workflows are often fragmented across PDFs, note apps, citation managers, and AI chat tools.  
This project explores what a more unified research reading experience could look like in a polished product homepage.

The page focuses on:

- reading and understanding academic papers faster
- preserving readability in the UI
- showing how AI assistance fits into serious knowledge work
- presenting a premium, research-oriented interface concept

## Tech Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## Environment

This repository uses `mise` for runtime isolation.

- pinned Node version: `20.20.2`
- package engine range: `>=20.20.2 <21`
- local runtime config: `.mise.toml`

## Quick Start

```bash
git clone git@github.com:Starsrift/research-reader-studio.git
cd research-reader-studio
## 方式一：mise（推荐）

```bash
mise trust
mise install
mise exec node@20.20.2 -- npm ci
mise exec node@20.20.2 -- npm run dev
```

## 方式二：pnpm

```bash
# 通过 npm install -g pnpm@latest 安装 pnpm
pnpm install
pnpm dev
```

## 方式三：npm

```bash
npm ci
npm run dev
```
```

Open:

```bash
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
```

Recommended with `mise`:

```bash
mise exec node@20.20.2 -- npm run dev
mise exec node@20.20.2 -- npm run build
mise exec node@20.20.2 -- npm run start
```

## Features Shown On The Homepage

- sticky glass navbar
- immersive hero section with research-reader product mockup
- trust / credibility strip
- 6 product feature cards
- step-based research workflow section
- detailed product showcase
- benefits section focused on reading and knowledge work
- final CTA and minimal footer

## Project Structure

```text
research-reader-studio/
├─ app/                      # App Router entry and global styles
├─ components/               # Reusable homepage and mockup components
├─ lib/                      # Copy and lightweight content data
├─ assets/                   # Static assets
├─ docs/                     # Supporting notes
├─ .mise.toml                # Pinned runtime via mise
├─ package.json              # Scripts and dependency metadata
└─ README.md
```

## Key Files

- `app/page.tsx`: homepage entry
- `app/layout.tsx`: app shell
- `app/globals.css`: global styling and glassmorphism primitives
- `components/home-page.tsx`: homepage structure and sections
- `components/reader-workspace.tsx`: main product reader mockup
- `components/ambient-background.tsx`: ambient animated background layer
- `lib/copy.ts`: bilingual copy data

## Notes

The main implementation is the Next.js version under `app/`.

Legacy static prototype files are still kept in the repository:

- `index.html`
- `styles.css`
- `script.js`

They are useful as an earlier exploration artifact, but the App Router implementation is the current primary version.
