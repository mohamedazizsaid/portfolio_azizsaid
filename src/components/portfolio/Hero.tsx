import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/portfolio";
import { EASE, fadeInUp, staggerContainer } from "@/lib/motion";

const codeLines = [
  "const engineer = {",
  '  focus: ["full-stack", "distributed systems"],',
  '  now: "3-month internship @ BEE CODERS",',
  '  learning: ["DevOps", "cloud", "AI"],',
  "  shipping: true,",
  "};",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      setPointer({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  const words = profile.name.split(" ");

  return (
    <section id="home" ref={ref} className="relative min-h-svh overflow-hidden pt-32 pb-20">
      {/* background system */}
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <motion.div
        aria-hidden
        animate={{ x: pointer.x * -24, y: pointer.y * -24 }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="pointer-events-none absolute top-[-12rem] left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-signal/12 blur-[140px]"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />

      <motion.div style={{ y, opacity }} className="relative mx-auto grid w-full max-w-6xl gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div variants={staggerContainer(0.09, 0.15)} initial="hidden" animate="show">
          <motion.div variants={fadeInUp} className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-surface/60 px-3 py-1.5 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[0.7rem] tracking-widest text-muted-foreground uppercase">
              {profile.status}
            </span>
          </motion.div>

          <h1 className="text-[clamp(2.75rem,8vw,6rem)] leading-[0.92] font-semibold">
            {words.map((w, i) => (
              <span key={w} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.09, ease: EASE }}
                  className={i === words.length - 1 ? "block text-signal" : "block"}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p variants={fadeInUp} className="mt-6 max-w-xl font-mono text-sm text-muted-foreground">
            <span className="text-signal">{"//"}</span> {profile.role} — {profile.location}
          </motion.p>
          <motion.p variants={fadeInUp} className="mt-4 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
            {profile.valueProp}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-3">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-3 font-mono text-xs tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href={profile.resume}
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 font-mono text-xs tracking-widest uppercase transition-colors hover:border-signal hover:text-signal"
            >
              Download Resume
            </a>
            <div className="flex items-center gap-1 pl-2">
              {[
                { href: profile.github, icon: Github, label: "GitHub" },
                { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm border border-transparent p-2.5 text-muted-foreground transition-colors hover:border-border hover:text-signal"
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* editor chrome */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
          style={{ rotateX: pointer.y * -3, rotateY: pointer.x * 3 }}
          className="relative hidden rounded-lg border border-border bg-surface/80 backdrop-blur lg:block"
        >
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="size-2.5 rounded-full bg-destructive/70" />
            <span className="size-2.5 rounded-full bg-amber/80" />
            <span className="size-2.5 rounded-full bg-signal/80" />
            <span className="ml-3 font-mono text-[0.7rem] text-muted-foreground">engineer.ts</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[0.78rem] leading-7 text-muted-foreground">
            {codeLines.map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.12, duration: 0.4 }}
              >
                <span className="mr-4 inline-block w-4 text-right text-muted-foreground/40">{i + 1}</span>
                <span className={i === 0 || i === 4 ? "text-signal" : "text-foreground/80"}>{line}</span>
              </motion.div>
            ))}
          </pre>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute inset-x-0 bottom-8 flex justify-center"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="size-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
