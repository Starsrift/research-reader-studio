"use client";

import { motion, useReducedMotion } from "framer-motion";

const blobs = [
  {
    className:
      "left-[-12rem] top-[-8rem] h-[26rem] w-[26rem] bg-[radial-gradient(circle,rgba(82,183,136,0.22)_0%,rgba(82,183,136,0)_68%)]",
    animate: { x: [0, 50, 14, 0], y: [0, 30, 80, 0], scale: [1, 1.06, 0.97, 1] },
    duration: 24
  },
  {
    className:
      "right-[-10rem] top-[8rem] h-[24rem] w-[24rem] bg-[radial-gradient(circle,rgba(125,226,209,0.16)_0%,rgba(125,226,209,0)_72%)]",
    animate: { x: [0, -40, -8, 0], y: [0, 45, 16, 0], scale: [1, 0.95, 1.04, 1] },
    duration: 28
  },
  {
    className:
      "bottom-[-10rem] left-[22%] h-[28rem] w-[28rem] bg-[radial-gradient(circle,rgba(183,243,210,0.11)_0%,rgba(183,243,210,0)_72%)]",
    animate: { x: [0, 30, -8, 0], y: [0, -35, -10, 0], scale: [1, 1.08, 0.98, 1] },
    duration: 20
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
