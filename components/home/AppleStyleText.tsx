"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import type { Locale } from "@/lib/copy";

type WordGroup = {
  id: number;
  text: string;
};

const zhWordGroups: WordGroup[] = [
  { id: 0, text: "阅读" },
  { id: 1, text: "理解" },
  { id: 2, text: "整理" },
  { id: 3, text: "洞察" }
];

const enWordGroups: WordGroup[] = [
  { id: 0, text: "Read" },
  { id: 1, text: "Understand" },
  { id: 2, text: "Organize" },
  { id: 3, text: "Insight" }
];

const zhSubtitles = ["Focus Reading", "Deep Understanding", "Knowledge Base", "Insight"];
const enSubtitles = ["Focus Reading", "Deep Understanding", "Knowledge Base", "Insight"];

const CYCLE_DURATION = 3000;

function AnimatedCharacter({ char, index }: { char: string; index: number }) {
  return (
    <motion.span
      className="inline-block"
      initial={{ scale: 1.5, opacity: 0, filter: "blur(6px)" }}
      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      exit={{ scale: 0.85, opacity: 0, filter: "blur(4px)" }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {char}
    </motion.span>
  );
}

function WordGroupDisplay({ group }: { group: WordGroup }) {
  const chars = group.text.split("");

  return (
    <motion.div
      className="flex items-center justify-center gap-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {chars.map((char, i) => (
        <AnimatedCharacter key={`${group.id}-${i}`} char={char} index={i} />
      ))}
    </motion.div>
  );
}

export function AppleStyleText({ locale }: { locale: Locale }) {
  const reduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);

  const wordGroups = locale === "zh" ? zhWordGroups : enWordGroups;
  const subtitles = locale === "zh" ? zhSubtitles : enSubtitles;

  useEffect(() => {
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % wordGroups.length);
    }, CYCLE_DURATION);

    return () => clearInterval(interval);
  }, [reduceMotion, wordGroups.length]);

  // locale 切换时重置索引
  useEffect(() => {
    setCurrentIndex(0);
  }, [locale]);

  if (reduceMotion) {
    const staticText = wordGroups.map((g) => g.text).join(" · ");
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <div className="text-[clamp(2.5rem,5vw,4.5rem)] font-black tracking-[-0.04em] text-white">
            {staticText}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      {/* 背景氛围 */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* 中心光晕 */}
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(82,183,136,0.1),transparent_70%)] blur-2xl" />
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(183,243,210,0.08),transparent_65%)] blur-xl" />
      </div>

      {/* 动态文字 */}
      <div className="relative z-10 text-center">
        {/* 上方小字 */}
        <motion.p
          className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[color:var(--color-primary-soft)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Sylva
        </motion.p>

        {/* 主文字动画区域 */}
        <div className="overflow-visible py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${locale}-${currentIndex}`}
              className="text-[clamp(2.5rem,5.5vw,5rem)] font-black tracking-[-0.04em] text-white"
              style={{ textShadow: "0 0 40px rgba(184, 240, 207, 0.2)" }}
            >
              <WordGroupDisplay group={wordGroups[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 下方英文副词 */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`sub-${locale}-${currentIndex}`}
            className="mt-2 text-sm tracking-[0.15em] text-[color:var(--color-text-muted)]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {subtitles[currentIndex]}
          </motion.p>
        </AnimatePresence>

        {/* 指示器 */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {wordGroups.map((_, i) => (
            <motion.div
              key={i}
              className="h-1 rounded-full"
              animate={{
                width: i === currentIndex ? 24 : 8,
                backgroundColor:
                  i === currentIndex
                    ? "rgba(183, 243, 210, 0.8)"
                    : "rgba(255, 255, 255, 0.2)"
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
