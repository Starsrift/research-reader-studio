"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/components/auth-provider";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "登录失败");
        return;
      }

      // 登录成功，保存用户状态并跳转
      setUser(data.user);
      router.push("/");
    } catch {
      setError("网络错误，请稍后重试");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      {/* 背景装饰 */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 ambient-grid opacity-40" />
        <div className="absolute left-[-12rem] top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(82,183,136,0.22)_0%,rgba(82,183,136,0)_68%)] blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-10rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(125,226,209,0.16)_0%,rgba(125,226,209,0)_72%)] blur-3xl" />
      </div>

      {/* 登录卡片 */}
      <div className="glass-panel relative w-full max-w-md rounded-[2rem] p-8 sm:p-10">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-[color:var(--color-mint)]">
              <path d="M4.5 12c0-4.1 3.4-7.5 7.5-7.5 2.1 0 4.1.9 5.5 2.4" />
              <path d="M19.5 12c0 4.1-3.4 7.5-7.5 7.5-2.1 0-4.1-.9-5.5-2.4" />
              <path d="M12 7.5c2 1.1 3.2 3 3.2 5.1 0 2.4-1.6 4.7-4.2 5.9" />
              <circle cx="17.8" cy="6.2" r="1.2" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">登录 Sylva</h1>
          <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">AI 论文阅读工作台</p>
        </div>

        {/* 错误提示 */}
        {error && (
          <div className="mb-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* 表单 */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 用户名 */}
          <div>
            <label htmlFor="username" className="mb-2 block text-sm font-medium text-[color:var(--color-text-secondary)]">
              用户名
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="输入用户名"
              className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-[color:var(--color-text-muted)] focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 transition"
              required
            />
          </div>

          {/* 密码 */}
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-[color:var(--color-text-secondary)]">
              密码
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="输入密码"
              className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-[color:var(--color-text-muted)] focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)]/20 transition"
              required
            />
          </div>

          {/* 登录按钮 */}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full min-h-[3rem] items-center justify-center rounded-full border border-white/12 px-6 text-sm font-semibold tracking-[0.01em] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(183,243,210,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg-deep)] active:scale-[0.97] bg-[linear-gradient(135deg,rgba(183,243,210,0.96),rgba(82,183,136,0.9))] text-[#102319] shadow-[0_18px_42px_rgba(82,183,136,0.24)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "登录中..." : "登录"}
          </button>
        </form>

        {/* 分隔线 */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-[color:var(--color-text-muted)]">或</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* 注册按钮 */}
        <Link
          href="/register"
          className="inline-flex w-full min-h-[3rem] items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-6 text-sm font-semibold text-white transition hover:bg-white/[0.1] hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]"
        >
          创建新账户
        </Link>

        {/* 返回首页 */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-[color:var(--color-text-muted)] transition hover:text-white"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
