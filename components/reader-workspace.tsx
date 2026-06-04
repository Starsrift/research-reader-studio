"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PageCopy } from "@/lib/copy";

type ReaderWorkspaceProps = {
  content: PageCopy["workspace"];
  variant?: "hero" | "showcase";
};

export function ReaderWorkspace({
  content,
  variant = "hero"
}: ReaderWorkspaceProps) {
  const reduceMotion = useReducedMotion();
  const isShowcase = variant === "showcase";

  return (
    <div className="relative">
      <div className="glass-panel noise-overlay relative overflow-hidden rounded-[2rem] p-3 sm:p-4 lg:p-5">
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(184,240,207,0.1),transparent)]" />
        <div className="relative grid gap-4 xl:grid-cols-[16rem_minmax(0,1fr)_18rem]">
          <aside className="glass-card rounded-[1.5rem] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--mint)]">
                  {content.leftPanelLabel}
                </p>
              </div>
              <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] text-[color:var(--text-muted)]">
                PDF
              </span>
            </div>
            <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-[color:var(--text-muted)]">
              {content.searchPlaceholder}
            </div>
            <div className="space-y-3">
              {content.collections.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/8 bg-white/[0.035] px-3 py-3"
                >
                  <div className="text-sm font-medium text-white">{item.title}</div>
                  <div className="mt-1 text-xs text-[color:var(--text-muted)]">
                    {item.count}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {content.focusModes.map((mode) => (
                <span
                  key={mode}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-[color:var(--text-secondary)]"
                >
                  {mode}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--sage)]">
                {content.outlineLabel}
              </p>
              <div className="mt-3 space-y-2">
                {content.outline.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/6 bg-black/10 px-3 py-2 text-sm text-[color:var(--text-secondary)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section className="paper-surface min-h-[34rem] rounded-[1.75rem] p-4 text-[#173126] sm:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4d715f]">
                  {content.paperLabel}
                </p>
                <h3 className="mt-2 max-w-2xl text-xl font-semibold leading-tight tracking-[-0.03em] text-[#102319] sm:text-2xl">
                  {content.paperTitle}
                </h3>
                <p className="mt-2 text-sm text-[#4b6556]">{content.paperAuthors}</p>
              </div>
              <div className="rounded-full border border-[#d5e3d8] bg-white/60 px-3 py-1 text-xs font-medium text-[#355543]">
                {content.paperMeta}
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_15rem]">
              <div className="space-y-4">
                <div className="rounded-[1.35rem] border border-[#d7e6da] bg-white/72 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4d715f]">
                    {content.abstractLabel}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#244434] sm:text-[15px]">
                    {content.abstractBody}
                  </p>
                </div>

                <div className="rounded-[1.35rem] border border-[#d7e6da] bg-[#f6faf7] p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#63b78a]" />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4d715f]">
                      {content.keyIdeasLabel}
                    </p>
                  </div>
                  <div className="space-y-3">
                    {content.keyIdeas.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-[#d8e8dc] bg-white px-3.5 py-3 text-sm leading-6 text-[#1e3a2d]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[1.35rem] border border-[#d7e6da] bg-[#eef5ef] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4d715f]">
                  {content.mapLabel}
                </p>
                <div className="mt-4 space-y-3">
                  {content.outline.map((item, index) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#dceadf] text-xs font-semibold text-[#355543]">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-6 text-[#355543]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <aside className="glass-card rounded-[1.5rem] p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--mint)]">
                {content.rightPanelLabel}
              </p>
              <span className="rounded-full bg-[rgba(184,240,207,0.12)] px-2 py-1 text-[10px] text-[color:var(--mint)]">
                Live
              </span>
            </div>

            <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.045] p-4">
              <p className="text-sm font-medium text-white">{content.summaryLabel}</p>
              <div className="mt-3 space-y-3">
                {content.summaryPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-xl border border-white/6 bg-black/10 px-3 py-2 text-sm leading-6 text-[color:var(--text-secondary)]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-[1.35rem] border border-[rgba(184,240,207,0.14)] bg-[rgba(184,240,207,0.08)] p-4">
              <p className="text-sm font-medium text-white">{content.explainLabel}</p>
              <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                {content.explainQuestion}
              </p>
            </div>

            <div className="mt-4 rounded-[1.35rem] border border-white/8 bg-white/[0.045] p-4">
              <p className="text-sm font-medium text-white">{content.notesLabel}</p>
              <div className="mt-3 space-y-2">
                {content.notes.map((note) => (
                  <div
                    key={note}
                    className="rounded-xl border border-white/6 bg-black/10 px-3 py-2 text-sm leading-6 text-[color:var(--text-secondary)]"
                  >
                    {note}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.04] p-4">
                <p className="text-sm font-medium text-white">{content.citationsLabel}</p>
                <div className="mt-3 space-y-2">
                  {content.citations.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/6 bg-black/10 px-3 py-2 text-sm text-[color:var(--text-secondary)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.04] p-4">
                <p className="text-sm font-medium text-white">{content.relatedLabel}</p>
                <div className="mt-3 space-y-2">
                  {content.relatedPapers.map((paper) => (
                    <div
                      key={paper}
                      className="rounded-xl border border-white/6 bg-black/10 px-3 py-2 text-sm text-[color:var(--text-secondary)]"
                    >
                      {paper}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {isShowcase ? (
          <div className="relative mt-4 grid gap-4 lg:grid-cols-3">
            {content.bottomCards.map((card) => (
              <div key={card.title} className="glass-card rounded-[1.5rem] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--mint)]">
                  {card.label}
                </p>
                <h4 className="mt-3 text-xl font-semibold leading-tight text-white">
                  {card.title}
                </h4>
                <div className="mt-4 space-y-2">
                  {card.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-xl border border-white/8 bg-white/[0.04] px-3 py-2 text-sm text-[color:var(--text-secondary)]"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {!isShowcase &&
        content.floatingInsights.map((item, index) => (
          <motion.div
            key={item.text}
            className={`absolute hidden w-56 rounded-[1.35rem] border border-white/12 bg-[rgba(234,247,238,0.12)] p-4 shadow-panel backdrop-blur-xl xl:block ${
              index === 0 ? "-left-8 bottom-16" : "-right-6 top-14"
            }`}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, index === 0 ? -10 : 10, 0]
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: index === 0 ? 7 : 9,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                  }
            }
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--mint)]">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-6 text-[color:var(--text-primary)]">
              {item.text}
            </p>
          </motion.div>
        ))}
    </div>
  );
}
