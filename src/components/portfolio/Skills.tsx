import { motion } from "motion/react";
import { skillGroups } from "@/data/portfolio";
import { chipIn, fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { getSkillIcon } from "@/lib/skill-icons";
import { SectionShell } from "./primitives";

export function Skills() {
  return (
    <SectionShell
      id="skills"
      index="03"
      title="Toolchain"
      kicker="Grouped by role in the stack, not by an arbitrary percentage."
      className="border-y border-border bg-surface/40"
    >
      <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={staggerContainer(0.035)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.h3
              variants={fadeInUp}
              className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-foreground uppercase"
            >
              <span className="size-1.5 rounded-full bg-signal" />
              {group.title}
            </motion.h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => {
                const { icon: Icon, color } = getSkillIcon(item);
                return (
                  <span
                    key={item}
                    style={{ "--skill-color": color } as React.CSSProperties}
                  >
                    <motion.span
                      variants={chipIn}
                      whileHover={{ y: -3, scale: 1.04 }}
                      className="group inline-flex items-center gap-2 rounded-sm border border-border bg-background px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all duration-200 hover:border-[--skill-color] hover:text-[--skill-color] hover:bg-[--skill-color]/5"
                    >
                      <Icon
                        className="size-3.5 shrink-0 opacity-60 transition-opacity duration-200 group-hover:opacity-100"
                        style={{ color: color ?? "currentColor" }}
                        aria-hidden
                      />
                      {item}
                    </motion.span>
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
