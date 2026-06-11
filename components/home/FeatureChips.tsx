"use client";

import { motion, useReducedMotion } from "framer-motion";

type Metric = { value: string; label: string };

export function FeatureChips({ metrics }: { metrics: Metric[] }) {
  const reduceMotion = useReducedMotion();
  const cardHover = reduceMotion ? undefined : { y: -6 };

  return (
    <div className="mt-10 grid gap-3 sm:grid-cols-3">
      {metrics.map((metric) => (
        <motion.button
          key={metric.label}
          type="button"
          whileHover={cardHover}
          className="glass-card rounded-[1.4rem] px-4 py-4 text-left transition duration-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg-deep)] active:scale-[0.98]"
        >
          <div className="text-sm font-semibold text-[color:var(--color-mint)] sm:text-base">
            {metric.value}
          </div>
          <div className="mt-1 text-sm text-[color:var(--color-text-secondary)] sm:text-base">
            {metric.label}
          </div>
        </motion.button>
      ))}
    </div>
  );
}
