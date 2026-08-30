import { motion } from "motion/react";
import { profile } from "@/data/portfolio";
import { clipWipe, fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const stats = [
  { value: "4+", label: "Internships" },
  { value: "10+", label: "Frameworks shipped" },
  { value: "2027", label: "Eng. graduation" },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 border-y border-border py-24 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-[0.4fr_1fr]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="label-mono"
        >
          00 / about
        </motion.div>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p variants={clipWipe} className="text-xl leading-relaxed text-foreground md:text-2xl">
            {profile.about}
          </motion.p>
          <motion.dl variants={staggerContainer(0.08, 0.2)} className="mt-12 grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeInUp} className="border-l border-signal/40 pl-4">
                <dt className="font-display text-3xl font-semibold text-signal md:text-4xl">{s.value}</dt>
                <dd className="mt-1 font-mono text-[0.7rem] tracking-widest text-muted-foreground uppercase">
                  {s.label}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
