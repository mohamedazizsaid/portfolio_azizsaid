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

export function Chip({ children, tone = "muted" }: { children: ReactNode; tone?: "muted" | "signal" | "amber" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2.5 py-1 font-mono text-[0.7rem] tracking-wide",
        tone === "muted" && "border-border bg-surface-2 text-muted-foreground",
        tone === "signal" && "border-signal/40 bg-signal/10 text-signal",
        tone === "amber" && "border-amber/40 bg-amber/10 text-amber",
      )}
    >
      {children}
    </span>
  );
}
