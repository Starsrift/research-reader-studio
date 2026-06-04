import type { ReactNode } from "react";

const base =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm font-semibold tracking-[0.01em] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(183,243,210,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-bg-deep)] active:scale-[0.97]";
const primary =
  "bg-[linear-gradient(135deg,rgba(183,243,210,0.96),rgba(82,183,136,0.9))] text-[#102319] shadow-[0_18px_42px_rgba(82,183,136,0.24)]";
const secondary = "bg-white/[0.06] text-white";

function ActionButton({
  children,
  variant = "primary"
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <button type="button" className={`${base} ${variant === "primary" ? primary : secondary}`}>
      {children}
    </button>
  );
}

export function HeroActions({
  primaryLabel,
  secondaryLabel
}: {
  primaryLabel: string;
  secondaryLabel: string;
}) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <ActionButton>{primaryLabel}</ActionButton>
      <ActionButton variant="secondary">{secondaryLabel}</ActionButton>
    </div>
  );
}
