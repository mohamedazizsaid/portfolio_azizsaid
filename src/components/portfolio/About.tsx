import { motion } from "motion/react";
import { profile } from "@/data/portfolio";
import { clipWipe, fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import portrait from "@/assets/aziz.png";

const stats = [
  { value: "4+", label: "Internships" },
  { value: "10+", label: "Frameworks shipped" },
  { value: "2027", label: "Eng. graduation" },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 border-y border-border py-24 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-[0.42fr_1fr] md:gap-16">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-8"
        >
          <motion.div variants={fadeInUp} className="label-mono">
            00 / about
          </motion.div>

          <motion.figure variants={fadeInUp} className="group relative mx-auto w-full max-w-[15rem] md:mx-0 md:max-w-none">
            <span className="absolute -top-3 -left-3 hidden h-16 w-16 border-t border-l border-signal/50 md:block" />
            <span className="absolute -right-3 -bottom-3 hidden h-16 w-16 border-r border-b border-signal/50 md:block" />
            <div className="relative aspect-3/4 overflow-hidden rounded-md border border-border bg-surface">
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />
              <img
                src={portrait}
                alt={`${profile.name}, ${profile.role}`}
                loading="lazy"
                draggable={false}
                className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background/85 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 px-4 py-3 font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                <span className="size-1.5 rounded-full bg-signal" />
                {profile.location}
              </figcaption>
            </div>
          </motion.figure>
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
