"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { BrandMark } from "@/components/icons";

function NavButton({
  children,
  variant = "primary"
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm font-semibold tracking-[0.01em] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(183,243,210,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg-deep)] active:scale-[0.97]";
  const primary =
    "bg-[linear-gradient(135deg,rgba(183,243,210,0.96),rgba(82,183,136,0.9))] text-[#102319] shadow-[0_18px_42px_rgba(82,183,136,0.24)]";
  const secondary = "bg-white/[0.06] text-white";

  return (
    <button type="button" className={`${base} ${variant === "primary" ? primary : secondary}`}>
      {children}
    </button>
  );
}

export function Navbar({
  content,
  locale,
  onLocaleChange
}: {
  content: {
    languageLabel: string;
    nav: Array<{ label: string; href: string }>;
    actions: {
      signIn: string;
      startReading: string;
      viewDemo: string;
      switchToEnglish: string;
      switchToChinese: string;
    };
  };
  locale: "en" | "zh";
  onLocaleChange: (locale: "en" | "zh") => void;
}) {
  return (
    <div className="section-shell sticky top-4 z-50 pt-4">
      <div className="glass-panel rounded-[1.7rem] px-4 py-3 sm:px-5">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="mr-auto flex min-w-0 items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
              <BrandMark className="h-5 w-5 text-[color:var(--color-mint)]" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold tracking-[0.16em] text-white">Sylva</div>
              <div className="text-xs text-[color:var(--color-text-muted)]">
                AI Research Reading
              </div>
            </div>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="order-3 flex w-full flex-wrap items-center justify-between gap-3 text-sm text-[color:var(--color-text-secondary)] sm:order-2 sm:w-auto sm:justify-start sm:gap-5"
          >
            {content.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg transition duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="order-2 flex items-center gap-2 sm:order-3">
            <div
              aria-label={content.languageLabel}
              className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1"
            >
              <button
                type="button"
                onClick={() => onLocaleChange("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] ${
                  locale === "en"
                    ? "bg-[rgba(183,243,210,0.16)] text-[color:var(--color-mint)]"
                    : "text-[color:var(--color-text-muted)] hover:text-white"
                }`}
              >
                {content.actions.switchToEnglish}
              </button>
              <button
                type="button"
                onClick={() => onLocaleChange("zh")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] ${
                  locale === "zh"
                    ? "bg-[rgba(183,243,210,0.16)] text-[color:var(--color-mint)]"
                    : "text-[color:var(--color-text-muted)] hover:text-white"
                }`}
              >
                {content.actions.switchToChinese}
              </button>
            </div>
            <button
              type="button"
              className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-[color:var(--color-text-secondary)] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] sm:inline-flex"
            >
              {content.actions.signIn}
            </button>
            <NavButton>{content.actions.startReading}</NavButton>
          </div>
        </div>
      </div>
    </div>
  );
}
