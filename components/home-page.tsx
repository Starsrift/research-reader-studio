"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AmbientBackground } from "@/components/ambient-background";
import { BrandMark } from "@/components/icons";
import { CssGlassScene } from "@/components/home/CssGlassScene";
import { FeatureChips } from "@/components/home/FeatureChips";
import { HeroActions } from "@/components/home/HeroActions";
import { HeroBadge } from "@/components/home/HeroBadge";
import { HeroContent, HeroSection, HeroVisual } from "@/components/home/HeroSection";
import { Navbar } from "@/components/home/Navbar";
import { RightSceneShell } from "@/components/home/RightSceneShell";
import { copy } from "@/lib/copy";

const content = copy.zh;

const footer = {
  description:
    "Sylva is a premium reading platform for understanding papers, building notes, and keeping research knowledge usable over time.",
  productLinks: [
    { label: "Library", href: "/library" },
    { label: "Reader", href: "/reader" },
    { label: "Notes", href: "/notes" },
    { label: "Pricing", href: "/pricing" }
  ],
  resourceLinks: [
    { label: "Documentation", href: "#" },
    { label: "Guide to Highlights", href: "#" },
    { label: "Research Workflows", href: "#" }
  ],
  socialLinks: [
    { label: "GitHub", href: "#" },
    { label: "X / Twitter", href: "#" },
    { label: "LinkedIn", href: "#" }
  ]
};

function FooterLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith("/")) {
    return (
      <Link
        href={href}
        className="block rounded-md text-[color:var(--color-text-secondary)] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]"
      >
        {label}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className="block rounded-md text-[color:var(--color-text-secondary)] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)]"
    >
      {label}
    </a>
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
        {title}
      </h3>
      <div className="mt-4 space-y-3">
        {links.map((item) => (
          <FooterLink key={item.label} href={item.href} label={item.label} />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="section-shell border-t border-white/10 pb-12 pt-10 text-sm">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,0.7fr))]">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
              <BrandMark className="h-5 w-5 text-[color:var(--color-mint)]" />
            </div>
            <div>
              <div className="text-base font-semibold text-white">Sylva</div>
              <div className="text-xs text-[color:var(--color-text-muted)]">
                AI Research Reading
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-sm leading-7 text-[color:var(--color-text-secondary)]">
            {footer.description}
          </p>
        </div>

        <FooterColumn title="Product" links={footer.productLinks} />
        <FooterColumn title="Resources" links={footer.resourceLinks} />
        <FooterColumn title="Social" links={footer.socialLinks} />
      </div>
    </footer>
  );
}

export function HomePage() {
  useEffect(() => {
    document.documentElement.lang = "zh-CN";
  }, []);

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[color:var(--color-bg-deep)]">
      <AmbientBackground />

      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(183,243,210,0.14),transparent_46%)]" />

      <Navbar
        content={{
          languageLabel: content.languageLabel,
          nav: content.nav,
          actions: content.actions
        }}
      />

      <HeroSection>
        <HeroContent>
          <HeroBadge text={content.hero.eyebrow} />
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-normal text-white text-glow sm:text-6xl lg:text-[3.5rem] xl:text-[4.25rem]">
            <span className="block">在一个智能工作台里，</span>
            <span className="block">完成论文阅读、</span>
            <span className="block">理解与知识整理。</span>
          </h1>
          <p className="body-copy mt-6 max-w-2xl">{content.hero.description}</p>

          <HeroActions
            primaryLabel={content.actions.startReading}
            secondaryLabel={content.actions.viewDemo}
          />

          <p className="mt-5 text-sm text-[color:var(--color-text-muted)]">{content.hero.trust}</p>

          <FeatureChips metrics={content.hero.metrics} />
        </HeroContent>

        <HeroVisual>
          <RightSceneShell>
            <CssGlassScene />
          </RightSceneShell>
        </HeroVisual>
      </HeroSection>

      <Footer />
    </main>
  );
}
