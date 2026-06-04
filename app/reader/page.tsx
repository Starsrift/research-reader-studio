import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "阅读器 — Sylva"
};

export default function ReaderPage() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center bg-[#07110D] px-8 py-10 text-white sm:px-16 lg:px-24">
      <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">阅读器</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">
        这里将提供专注的论文阅读体验，支持高亮、批注和 AI 辅助理解。
      </p>
    </main>
  );
}
