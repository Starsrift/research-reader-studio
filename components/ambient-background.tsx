"use client";

import { motion, useReducedMotion } from "framer-motion";

const blobs = [
  {
    className:
      "left-[-12rem] top-[-8rem] h-[26rem] w-[26rem] bg-[radial-gradient(circle,rgba(111,210,162,0.24)_0%,rgba(111,210,162,0)_68%)]",
    animate: { x: [0, 70, 20, 0], y: [0, 40, 110, 0], scale: [1, 1.08, 0.96, 1] },
    duration: 34
  },
  {
    className:
      "right-[-10rem] top-[8rem] h-[24rem] w-[24rem] bg-[radial-gradient(circle,rgba(123,213,201,0.18)_0%,rgba(123,213,201,0)_72%)]",
    animate: { x: [0, -50, -10, 0], y: [0, 60, 20, 0], scale: [1, 0.94, 1.05, 1] },
    duration: 38
  },
  {
    className:
      "bottom-[-10rem] left-[22%] h-[28rem] w-[28rem] bg-[radial-gradient(circle,rgba(184,240,207,0.13)_0%,rgba(184,240,207,0)_72%)]",
    animate: { x: [0, 40, -10, 0], y: [0, -45, -15, 0], scale: [1, 1.1, 0.98, 1] },
    duration: 42
  }
];

export function AmbientBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 ambient-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_55%)]" />
      {blobs.map((blob) => (
        <motion.div
          key={blob.className}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          animate={reduceMotion ? undefined : blob.animate}
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: blob.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }
          }
        />
      ))}
    </div>
  );
}
