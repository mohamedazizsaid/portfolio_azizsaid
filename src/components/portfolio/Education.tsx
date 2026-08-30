import { motion } from "motion/react";
import { education, languages } from "@/data/portfolio";
import { chipIn, fadeInUp, slideInRight, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionShell } from "./primitives";

export function Education() {
  return (
    <SectionShell id="education" index="04" title="Education & languages">
      <div className="grid gap-16 md:grid-cols-[1.4fr_0.6fr]">
        <motion.ul
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="divide-y divide-border border-t border-border"
        >
          {education.map((e) => (
            <motion.li key={e.school} variants={fadeInUp} className="group grid gap-2 py-7 md:grid-cols-[1fr_6rem]">
              <div>
                <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-signal md:text-2xl">
                  {e.degree}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
              </div>
              <div className="text-left md:text-right">
                <span className="font-mono text-xs text-signal">{e.year}</span>
                <p className="font-mono text-[0.68rem] tracking-wider text-muted-foreground uppercase">{e.note}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.h3 variants={slideInRight} className="label-mono mb-5">
            Languages
          </motion.h3>
          <div className="flex flex-col gap-3">
            {languages.map((l) => (
              <motion.div
                key={l.name}
                variants={chipIn}
                className="flex items-center justify-between rounded-sm border border-border bg-surface/60 px-4 py-3"
              >
                <span className="font-display text-base font-medium">{l.name}</span>
                <span className="font-mono text-[0.7rem] tracking-widest text-signal uppercase">{l.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
