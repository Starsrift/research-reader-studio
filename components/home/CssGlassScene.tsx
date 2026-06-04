"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FloatingResearchCard } from "./FloatingResearchCard";
import { FloatingNotesCard } from "./FloatingNotesCard";
import { SceneParticles } from "./SceneParticles";

function SceneBlobs() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -right-8 top-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(82,183,136,0.22)_0%,rgba(82,183,136,0)_70%)] blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -30, -10, 0], y: [0, 20, -10, 0], scale: [1, 1.06, 0.96, 1] }}
        transition={reduceMotion ? undefined : { duration: 24, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-8 bottom-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(125,226,209,0.16)_0%,rgba(125,226,209,0)_72%)] blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 20, -10, 0], y: [0, -20, 10, 0], scale: [1, 0.94, 1.05, 1] }}
        transition={reduceMotion ? undefined : { duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/3 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(183,243,210,0.12)_0%,rgba(183,243,210,0)_72%)] blur-2xl"
        animate={reduceMotion ? undefined : { x: [0, -20, 10, 0], y: [0, 15, -15, 0], scale: [1, 1.08, 0.98, 1] }}
        transition={reduceMotion ? undefined : { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  );
}

export function CssGlassScene() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex min-h-[34rem] items-center justify-center lg:min-h-[42rem]">
      <SceneBlobs />

      {/* Main vertical glass panel */}
      <motion.div
        className="glass-panel relative z-10 mx-auto h-[28rem] w-64 rounded-[2rem] sm:h-[32rem] sm:w-72 lg:h-[36rem] lg:w-80"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -6, 0] }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
        }
      >
        {/* Glass edge highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent" />
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-[rgba(255,255,255,0.16)] via-transparent to-transparent" />

        {/* Internal glass stripes */}
        <div className="absolute inset-4 rounded-[1.6rem] border border-white/[0.06]" />
        <div className="absolute inset-8 rounded-[1.2rem] border border-white/[0.04]" />

        {/* Ambient inner glow */}
        <div className="absolute inset-x-6 top-8 h-24 bg-[radial-gradient(ellipse_at_center,rgba(183,243,210,0.08),transparent_70%)]" />
      </motion.div>

      {/* Floating cards */}
      <FloatingResearchCard />
      <FloatingNotesCard />

      {/* Particles */}
      <SceneParticles />

      {/* Ground reflection */}
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-[rgba(183,243,210,0.18)] to-transparent" />
    </div>
  );
}
