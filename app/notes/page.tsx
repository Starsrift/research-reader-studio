import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "笔记 — Sylva"
};

export default function NotesPage() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center bg-[#07110D] px-8 py-10 text-white sm:px-16 lg:px-24">
      <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">笔记</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">
        这里将用于撰写、整理和回顾你的研究笔记与阅读心得。
      </p>
    </main>
  );
}
