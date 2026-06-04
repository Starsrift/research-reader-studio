"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode, useEffect, useState, useTransition } from "react";
import { AmbientBackground } from "@/components/ambient-background";
import { BrandMark, FeatureIcon } from "@/components/icons";
import { ReaderWorkspace } from "@/components/reader-workspace";
import { copy, type Locale } from "@/lib/copy";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      <p className={`body-copy mt-5 ${align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
        {description}
      </p>
    </div>
  );
}

function PrimaryButton({
  children,
  href,
  variant = "primary"
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "bg-[linear-gradient(135deg,rgba(184,240,207,0.96),rgba(111,210,162,0.9))] text-[#102319] shadow-[0_18px_42px_rgba(111,210,162,0.24)]"
      : "bg-white/[0.06] text-white";

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 px-6 text-sm font-semibold tracking-[0.01em] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(184,240,207,0.3)] ${className}`}
    >
      {children}
    </a>
  );
}

export function HomePage() {
  const [locale, setLocale] = useState<Locale>("en");
  const [isPending, startTransition] = useTransition();
  const reduceMotion = useReducedMotion();
  const content = copy[locale];
  const sectionTransition = reduceMotion
    ? undefined
    : { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };
  const cardHover = reduceMotion ? undefined : { y: -6 };

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  return (
    <main className="relative isolate">
      <AmbientBackground />

      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(184,240,207,0.14),transparent_46%)]" />

      <div className="section-shell sticky top-4 z-50 pt-4">
        <div className="glass-panel rounded-[1.7rem] px-4 py-3 sm:px-5">
          <div className="flex flex-wrap items-center gap-4">
            <a href="#top" className="mr-auto flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                <BrandMark className="h-5 w-5 text-[color:var(--mint)]" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold tracking-[0.16em] text-white">Sylva</div>
                <div className="text-xs text-[color:var(--text-muted)]">
                  AI Research Reading
                </div>
              </div>
            </a>

            <nav
              aria-label="Primary navigation"
              className="order-3 flex w-full flex-wrap items-center justify-between gap-3 text-sm text-[color:var(--text-secondary)] sm:order-2 sm:w-auto sm:justify-start sm:gap-5"
            >
              {content.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="order-2 flex items-center gap-2 sm:order-3">
              <div
                aria-label={content.languageLabel}
                aria-busy={isPending}
                className={`flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1 transition ${
                  isPending ? "opacity-80" : "opacity-100"
                }`}
              >
                <button
                  type="button"
                  onClick={() => startTransition(() => setLocale("en"))}
                  aria-pressed={locale === "en"}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    locale === "en"
                      ? "bg-[rgba(184,240,207,0.16)] text-[color:var(--mint)]"
                      : "text-[color:var(--text-muted)]"
                  }`}
                >
                  {content.actions.switchToEnglish}
                </button>
                <button
                  type="button"
                  onClick={() => startTransition(() => setLocale("zh"))}
                  aria-pressed={locale === "zh"}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    locale === "zh"
                      ? "bg-[rgba(184,240,207,0.16)] text-[color:var(--mint)]"
                      : "text-[color:var(--text-muted)]"
                  }`}
                >
                  {content.actions.switchToChinese}
                </button>
              </div>
              <a
                href="#pricing"
                className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-[color:var(--text-secondary)] transition hover:text-white sm:inline-flex"
              >
                {content.actions.signIn}
              </a>
              <PrimaryButton href="#pricing">{content.actions.startReading}</PrimaryButton>
            </div>
          </div>
        </div>
      </div>

      <section id="top" className="section-shell pt-16 sm:pt-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={sectionTransition}
          >
            <div className="eyebrow">{content.hero.eyebrow}</div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white text-glow sm:text-6xl lg:text-7xl">
              {content.hero.title}
            </h1>
            <p className="body-copy mt-6 max-w-2xl">{content.hero.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryButton href="#pricing">{content.actions.startReading}</PrimaryButton>
              <PrimaryButton href="#showcase" variant="secondary">
                {content.actions.viewDemo}
              </PrimaryButton>
            </div>

            <p className="mt-5 text-sm text-[color:var(--text-muted)]">{content.hero.trust}</p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {content.hero.metrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  whileHover={cardHover}
                  className="glass-card rounded-[1.4rem] px-4 py-4"
                >
                  <div className="text-sm font-semibold text-[color:var(--mint)]">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--text-secondary)]">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 32 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={sectionTransition}
          >
            <ReaderWorkspace content={content.workspace} />
          </motion.div>
        </div>
      </section>

      <section className="section-shell pt-20">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={sectionTransition}
          className="glass-panel rounded-[2rem] px-6 py-8 sm:px-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="eyebrow">{content.trust.eyebrow}</div>
              <h2 className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                {content.trust.title}
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {content.trust.items.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--text-secondary)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="library" className="section-shell pt-24">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={sectionTransition}
        >
          <SectionHeading
            eyebrow={content.features.eyebrow}
            title={content.features.title}
            description={content.features.description}
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.features.items.map((feature) => (
              <motion.article
                key={feature.title}
                whileHover={cardHover}
                className="glass-card rounded-[1.6rem] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-[color:var(--mint)]">
                  <FeatureIcon name={feature.id} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="reader" className="section-shell pt-24">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={sectionTransition}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-8 sm:px-8 lg:px-10"
        >
          <div id="workflow" className="absolute -top-24" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(184,240,207,0.36)] to-transparent" />
          <SectionHeading
            eyebrow={content.workflow.eyebrow}
            title={content.workflow.title}
            description={content.workflow.description}
          />

          <div className="relative mt-12">
            <div className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/12 to-transparent lg:block" />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
              {content.workflow.steps.map((step, index) => (
                <motion.article
                  key={step.title}
                  whileHover={cardHover}
                  className="glass-card relative rounded-[1.5rem] p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[color:var(--mint)]">
                      <FeatureIcon name={step.id} className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.16em] text-[color:var(--text-muted)]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                    {step.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="showcase" className="section-shell pt-24">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={sectionTransition}
        >
          <SectionHeading
            eyebrow={content.showcase.eyebrow}
            title={content.showcase.title}
            description={content.showcase.description}
          />
          <div className="mt-12">
            <ReaderWorkspace content={content.workspace} variant="showcase" />
          </div>
        </motion.div>
      </section>

      <section id="notes" className="section-shell pt-24">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={sectionTransition}
          className="relative grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
        >
          <div id="benefits" className="absolute -top-24" aria-hidden="true" />
          <div className="max-w-xl">
            <SectionHeading
              eyebrow={content.benefits.eyebrow}
              title={content.benefits.title}
              description={content.benefits.description}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {content.benefits.items.map((benefit, index) => (
              <motion.article
                key={benefit.title}
                whileHover={cardHover}
                className={`glass-card rounded-[1.55rem] p-6 ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--mint)]">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                  {benefit.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="pricing" className="section-shell pb-24 pt-24">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={sectionTransition}
          className="glass-panel relative overflow-hidden rounded-[2.4rem] px-6 py-10 sm:px-10 sm:py-12"
        >
          <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(184,240,207,0.2),transparent_70%)] blur-2xl" />
          <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(123,213,201,0.14),transparent_72%)] blur-2xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="eyebrow justify-center">{content.cta.eyebrow}</div>
            <h2 className="section-title">{content.cta.title}</h2>
            <p className="body-copy mx-auto mt-5 max-w-2xl">{content.cta.description}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <PrimaryButton href="#top">{content.cta.primary}</PrimaryButton>
              <PrimaryButton href="#assistant" variant="secondary">
                {content.cta.secondary}
              </PrimaryButton>
            </div>

            <p className="mt-5 text-sm text-[color:var(--text-muted)]">{content.cta.footnote}</p>
          </div>
        </motion.div>
      </section>

      <footer
        id="assistant"
        className="section-shell border-t border-white/10 pb-12 pt-10 text-sm text-[color:var(--text-secondary)]"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,0.7fr))]">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                <BrandMark className="h-5 w-5 text-[color:var(--mint)]" />
              </div>
              <div>
                <div className="text-base font-semibold text-white">Sylva</div>
                <div className="text-xs text-[color:var(--text-muted)]">
                  AI Research Reading
                </div>
              </div>
            </div>
            <p className="mt-4 leading-7">{content.footer.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              {content.footer.productTitle}
            </h3>
            <div className="mt-4 space-y-3">
              {content.footer.productLinks.map((item) => (
                <a key={item.label} href={item.href} className="block transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              {content.footer.resourcesTitle}
            </h3>
            <div className="mt-4 space-y-3">
              {content.footer.resourceLinks.map((item) => (
                <a key={item.label} href={item.href} className="block transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              {content.footer.socialTitle}
            </h3>
            <div className="mt-4 space-y-3">
              {content.footer.socialLinks.map((item) => (
                <a key={item.label} href={item.href} className="block transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
