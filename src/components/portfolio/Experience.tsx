import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { experiences } from "@/data/portfolio";
import { fadeInUp, slideInLeft, staggerContainer, viewportOnce } from "@/lib/motion";
import { Chip, SectionShell } from "./primitives";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });

  return (
    <SectionShell id="experience" index="01" title="Where I have shipped" kicker="Four internships across e-learning, industrial distribution and embedded-adjacent teams.">
      <div ref={ref} className="relative pl-8 md:pl-14">
        <div className="absolute top-2 bottom-2 left-[3px] w-px bg-border md:left-[7px]" />
        <motion.div
          style={{ scaleY }}
          className="absolute top-2 bottom-2 left-[3px] w-px origin-top bg-signal md:left-[7px]"
        />

        <motion.ol
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-14"
        >
          {experiences.map((exp) => (
            <motion.li key={exp.company + exp.period} variants={slideInLeft} className="relative">
              <span className="absolute top-2 -left-8 size-2 rounded-full bg-signal ring-4 ring-background md:-left-14 md:size-3.5" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl font-semibold md:text-3xl">{exp.company}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {exp.period}
                  {exp.location ? ` · ${exp.location}` : ""}
                </span>
              </div>
              <p className="mt-1 font-mono text-sm text-signal">{exp.role}</p>
              <motion.ul variants={staggerContainer(0.06, 0.1)} className="mt-4 space-y-2">
                {exp.bullets.map((b) => (
                  <motion.li
                    key={b}
                    variants={fadeInUp}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60" />
                    {b}
                  </motion.li>
                ))}
              </motion.ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </SectionShell>
  );
}
