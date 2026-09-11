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
                const { icon: Icon, color = "#10B981" } = getSkillIcon(item);
                const isWhite = color === "#FFFFFF" || color.toLowerCase() === "#fff";
                const borderColor = isWhite ? "rgba(255, 255, 255, 0.28)" : `${color}40`;
                const bgColor = isWhite ? "rgba(255, 255, 255, 0.07)" : `${color}12`;
                const glowColor = isWhite ? "rgba(255, 255, 255, 0.22)" : `${color}38`;

                return (
                  <motion.span
                    key={item}
                    variants={chipIn}
                    whileHover={{ y: -3, scale: 1.05 }}
                    style={
                      {
                        borderColor,
                        backgroundColor: bgColor,
                        boxShadow: `0 0 12px -3px ${glowColor}`,
                        "--skill-color": isWhite ? "#FFFFFF" : color,
                      } as any
                    }
                    className="group inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 font-mono text-xs font-medium text-foreground/90 transition-all duration-200 hover:border-[--skill-color] hover:text-foreground hover:bg-[--skill-color]/18 hover:shadow-[0_0_18px_-2px_var(--skill-color)] cursor-default"
                  >
                    <Icon
                      className="size-3.5 shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{ color: isWhite ? "currentColor" : color }}
                      aria-hidden
                    />
                    <span>{item}</span>
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
