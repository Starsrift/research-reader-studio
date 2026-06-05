"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AppleStyleText } from "./AppleStyleText";
import { SceneParticles } from "./SceneParticles";
import type { Locale } from "@/lib/copy";

function AmbientFog() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* 绿色光雾 blob 1 - 右上 */}
      <motion.div
        className="absolute -right-16 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(82,183,136,0.18)_0%,rgba(82,183,136,0)_70%)] blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -25, -8, 0], y: [0, 18, -8, 0], scale: [1, 1.05, 0.97, 1] }}
        transition={reduceMotion ? undefined : { duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* 绿色光雾 blob 2 - 左下 */}
      <motion.div
        className="absolute -left-12 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(125,226,209,0.14)_0%,rgba(125,226,209,0)_72%)] blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 18, -8, 0], y: [0, -18, 8, 0], scale: [1, 0.96, 1.04, 1] }}
        transition={reduceMotion ? undefined : { duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* 绿色光雾 blob 3 - 中间偏下 */}
      <motion.div
        className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(183,243,210,0.1)_0%,rgba(183,243,210,0)_72%)] blur-2xl"
        animate={reduceMotion ? undefined : { x: [0, -18, 8, 0], y: [0, 12, -12, 0], scale: [1, 1.06, 0.98, 1] }}
        transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* 底部雾气 */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[radial-gradient(ellipse_at_center_bottom,rgba(82,183,136,0.08),transparent_70%)]" />
    </div>
  );
}

function VerticalLightBeams() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* 光柱 1 - 左 */}
      <div className="absolute inset-y-8 left-[20%] w-px bg-gradient-to-b from-transparent via-[rgba(183,243,210,0.15)] to-transparent" />
      {/* 光柱 2 - 中右 */}
      <div className="absolute inset-y-12 right-[28%] w-px bg-gradient-to-b from-transparent via-[rgba(82,183,136,0.12)] to-transparent" />
      {/* 光柱 3 - 细 */}
      <div className="absolute inset-y-16 left-[55%] w-px bg-gradient-to-b from-transparent via-white/8 to-transparent" />
      {/* 横向微光 */}
      <div className="absolute left-1/4 right-1/4 top-1/3 h-px bg-gradient-to-r from-transparent via-[rgba(183,243,210,0.08)] to-transparent" />
    </div>
  );
}

function GroundReflection() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden" aria-hidden="true">
      {/* 地面反射光带 */}
      <div className="absolute bottom-2 left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-[rgba(183,243,210,0.2)] to-transparent" />
      <div className="absolute bottom-4 left-1/3 h-px w-1/3 bg-gradient-to-r from-transparent via-[rgba(82,183,136,0.12)] to-transparent" />
      {/* 底部光晕 */}
      <div className="absolute -bottom-8 left-1/4 h-16 w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(82,183,136,0.1),transparent_70%)] blur-xl" />
    </div>
  );
}

export function CssGlassScene({ locale }: { locale: Locale }) {
  return (
    <div className="relative min-h-[36rem] overflow-visible lg:min-h-[44rem]">
      {/* 背景层 */}
      <AmbientFog />
      <VerticalLightBeams />

      {/* 苹果风格动态文字（主体） */}
      <AppleStyleText locale={locale} />

      {/* 粒子 */}
      <SceneParticles />

      {/* 地面反射 */}
      <GroundReflection />
    </div>
  );
}
