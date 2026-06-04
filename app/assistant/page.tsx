import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 助手 — Sylva"
};

export default function AssistantPage() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center bg-[#07110D] px-8 py-10 text-white sm:px-16 lg:px-24">
      <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">AI 助手</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">
        这里将提供 AI 驱动的论文问答、摘要生成和概念解释能力。
      </p>
    </main>
  );
}
