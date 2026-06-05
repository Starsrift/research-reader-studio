"use client";

import { motion, useReducedMotion } from "framer-motion";

export function FloatingNotesCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute bottom-[14%] right-[4%] z-40 w-[42%] min-w-48 max-w-[16rem] rounded-[1.35rem] border border-white/10 bg-[rgba(28,47,37,0.82)] p-4 shadow-panel backdrop-blur-xl"
      animate={
        reduceMotion
          ? undefined
          : { y: [0, 8, 0], rotate: [0, -0.8, 0.4, 0] }
      }
      transition={
        reduceMotion
          ? undefined
          : { duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
      }
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-primary-soft)]">
        笔记 · 研究要点
      </p>
      <div className="mt-3 space-y-2">
        <div className="flex items-start gap-2">
          <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)]" />
          <div className="h-1 flex-1 rounded-full bg-white/12" />
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)]" />
          <div className="h-1 w-3/4 rounded-full bg-white/10" />
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[color:var(--color-primary)]" />
          <div className="h-1 w-5/6 rounded-full bg-white/8" />
        </div>
      </div>
      <div className="relative mt-4 h-16 rounded-xl border border-white/6 bg-white/[0.035]">
        <span className="absolute left-4 top-5 h-3 w-3 rounded-full bg-[color:var(--color-primary)] shadow-[0_0_20px_rgba(82,183,136,0.35)]" />
        <span className="absolute right-6 top-3 h-2.5 w-2.5 rounded-full bg-[color:var(--color-mint)]" />
        <span className="absolute bottom-4 left-1/2 h-2.5 w-2.5 rounded-full bg-[color:var(--color-primary-soft)]" />
        <span className="absolute left-[1.65rem] top-[1.65rem] h-px w-20 rotate-[-14deg] bg-[rgba(183,243,210,0.22)]" />
        <span className="absolute right-[2rem] top-[1.35rem] h-px w-16 rotate-[42deg] bg-[rgba(183,243,210,0.18)]" />
      </div>
      <div className="mt-3 rounded-xl border border-white/6 bg-white/[0.04] px-2.5 py-2">
        <div className="h-1 w-full rounded-full bg-white/8" />
        <div className="mt-1 h-1 w-2/3 rounded-full bg-white/6" />
      </div>
    </motion.div>
  );
}
