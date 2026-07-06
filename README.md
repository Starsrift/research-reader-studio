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
- MongoDB (User Authentication)

## Environment

This repository uses `mise` for runtime isolation.

- pinned Node version: `20.20.2`
- package engine range: `>=20.20.2 <21`
- local runtime config: `.mise.toml`

## Quick Start

```bash
git clone git@github.com:Starsrift/research-reader-studio.git
cd research-reader-studio
```

### Option 1: mise (Recommended)

```bash
mise trust
mise install
mise exec node@20.20.2 -- npm ci
mise exec node@20.20.2 -- npm run dev
```

### Option 2: pnpm

```bash
pnpm install
pnpm dev
```

### Option 3: npm

```bash
npm ci
npm run dev
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
- immersive hero section with a dynamic glass research scene
- non-navigating hero CTA buttons
- two focused feature buttons: PDF + DOI and Focus mode
- minimal footer with Product, Resources, and Social links
- User registration/login (MongoDB)
- Login state persistence (localStorage)
- Username display in navbar after login

## Project Structure

```text
research-reader-studio/
├─ app/                      # App Router entry and global styles
│  ├─ api/auth/             # Auth API (login/register)
│  ├─ login/                # Login page
│  └─ register/             # Register page
├─ components/               # Reusable homepage and mockup components
│  ├─ auth-provider.tsx     # User auth state management
│  ├─ login-form.tsx        # Login form
│  └─ register-form.tsx     # Register form
├─ lib/                      # Copy and lightweight content data
│  └─ mongodb.ts            # MongoDB connection config
├─ .mise.toml                # Pinned runtime via mise
├─ package.json              # Scripts and dependency metadata
└─ README.md
```

## Key Files

- `app/page.tsx`: homepage entry
- `app/layout.tsx`: app shell
- `app/globals.css`: global styling and glassmorphism primitives
- `components/home-page.tsx`: homepage structure and sections
- `components/home/`: navbar, hero, buttons, and glass scene components
- `components/ambient-background.tsx`: ambient animated background layer
- `components/auth-provider.tsx`: user authentication state management
- `components/login-form.tsx`: login form component
- `components/register-form.tsx`: register form component
- `lib/copy.ts`: bilingual copy data
- `lib/mongodb.ts`: MongoDB database connection
- `app/api/auth/login/route.ts`: login API
- `app/api/auth/register/route.ts`: register API

## Database

This project uses MongoDB to store user data.

**Configuration:**
- Default connection: `mongodb://localhost:27017`
- Database name: `sylva`
- Collection: `users`

**Environment Variables (Optional):**
```bash
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB=sylva
```

## Notes

The main implementation is the Next.js version under `app/`.
