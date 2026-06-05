"use client";

import { motion, useReducedMotion } from "framer-motion";

export function FloatingResearchCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute left-[12%] top-[18%] z-30 w-[50%] min-w-56 max-w-[19rem] rounded-[1.35rem] border border-white/10 bg-[rgba(28,47,37,0.86)] p-4 shadow-panel backdrop-blur-xl"
      animate={
        reduceMotion
          ? undefined
          : { y: [0, -8, 0], rotate: [0, 0.5, -0.3, 0] }
      }
      transition={
        reduceMotion
          ? undefined
          : { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
      }
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[color:var(--color-primary)]" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-primary-soft)]">
          Reading
        </span>
      </div>
      <h4 className="text-sm font-semibold leading-tight text-white">
        Attention Is All You Need
      </h4>
      <p className="mt-1 text-[11px] text-[color:var(--color-text-muted)]">
        Vaswani et al., 2017
      </p>
      <div className="mt-3 space-y-1.5">
        <div className="h-1 w-full rounded-full bg-white/10" />
        <div className="h-1 w-4/5 rounded-full bg-white/8" />
        <div className="h-1 w-3/5 rounded-full bg-white/6" />
      </div>
      <div className="mt-3 grid h-16 grid-cols-5 items-end gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.035] px-3 py-2">
        <span className="h-5 rounded-full bg-[rgba(183,243,210,0.16)]" />
        <span className="h-9 rounded-full bg-[rgba(183,243,210,0.26)]" />
        <span className="h-7 rounded-full bg-[rgba(183,243,210,0.18)]" />
        <span className="h-11 rounded-full bg-[rgba(183,243,210,0.3)]" />
        <span className="h-6 rounded-full bg-[rgba(183,243,210,0.14)]" />
      </div>
      <div className="mt-3 rounded-xl border border-[rgba(183,243,210,0.12)] bg-[rgba(82,183,136,0.08)] px-2.5 py-2">
        <div className="h-1 w-5/6 rounded-full bg-[rgba(183,243,210,0.18)]" />
        <div className="mt-1.5 h-1 w-2/3 rounded-full bg-[rgba(183,243,210,0.1)]" />
      </div>
    </motion.div>
  );
}
