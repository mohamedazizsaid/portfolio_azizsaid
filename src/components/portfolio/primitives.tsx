import { motion } from "motion/react";
import type { ReactNode } from "react";
import { revealWord, staggerContainer, viewportOnce, fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function WordReveal({
  text,
  className,
  delay = 0,
  as: _as,
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: string;
}) {
  return (
    <motion.span
      className={cn("inline-flex flex-wrap gap-x-[0.28em] gap-y-1", className)}
      variants={staggerContainer(0.06, delay)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      style={{ perspective: 600 }}
    >
      {text.split(" ").map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={revealWord} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function SectionShell({
  id,
  index,
  title,
  kicker,
  children,
  className,
}: {
  id: string;
  index: string;
  title: string;
  kicker?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-24 md:py-32", className)}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-14 flex flex-col gap-4 md:mb-20"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4">
            <span className="label-mono">
              {index} / {id}
            </span>
            <span className="h-px flex-1 bg-border" />
          </motion.div>
          <h2 className="max-w-3xl text-4xl leading-[1.05] font-semibold md:text-6xl">
            <WordReveal text={title} />
          </h2>
          {kicker ? (
            <motion.p variants={fadeInUp} className="max-w-2xl text-base text-muted-foreground">
              {kicker}
            </motion.p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

export type ChipTone = "muted" | "signal" | "amber" | "purple" | "cyan" | "rose" | "blue" | "emerald";

export function getContextTone(text?: string): ChipTone {
  if (!text) return "signal";
  const l = text.toLowerCase();
  if (l.includes("ui") || l.includes("ux") || l.includes("design") || l.includes("immersive")) return "purple";
  if (l.includes("architecture") || l.includes("complex") || l.includes("ai") || l.includes("vision")) return "cyan";
  if (l.includes("microservice") || l.includes("cloud") || l.includes("saas") || l.includes("distributed")) return "blue";
  if (l.includes("accessib") || l.includes("wcag") || l.includes("inclusive")) return "emerald";
  if (l.includes("industr") || l.includes("hardware") || l.includes("production")) return "amber";
  if (l.includes("monorepo") || l.includes("ambitious") || l.includes("ecosystem")) return "rose";
  return "signal";
}

export function Chip({
  children,
  tone = "muted",
  className,
}: {
  children: ReactNode;
  tone?: ChipTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2.5 py-1 font-mono text-[0.7rem] font-medium tracking-wide transition-all duration-200",
        tone === "muted" && "border-border bg-surface-2 text-muted-foreground",
        tone === "signal" && "border-signal/40 bg-signal/10 text-signal shadow-[0_0_12px_-4px_var(--color-signal)]",
        tone === "amber" && "border-amber/40 bg-amber/10 text-amber shadow-[0_0_12px_-4px_var(--color-amber)]",
        tone === "purple" && "border-purple-500/40 bg-purple-500/10 text-purple-400 dark:text-purple-300 shadow-[0_0_14px_-4px_rgba(168,85,247,0.35)]",
        tone === "cyan" && "border-cyan-500/40 bg-cyan-500/10 text-cyan-400 dark:text-cyan-300 shadow-[0_0_14px_-4px_rgba(6,182,212,0.35)]",
        tone === "blue" && "border-blue-500/40 bg-blue-500/10 text-blue-400 dark:text-blue-300 shadow-[0_0_14px_-4px_rgba(59,130,246,0.35)]",
        tone === "emerald" && "border-emerald-500/40 bg-emerald-500/10 text-emerald-400 dark:text-emerald-300 shadow-[0_0_14px_-4px_rgba(16,185,129,0.35)]",
        tone === "rose" && "border-rose-500/40 bg-rose-500/10 text-rose-400 dark:text-rose-300 shadow-[0_0_14px_-4px_rgba(244,63,94,0.35)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
