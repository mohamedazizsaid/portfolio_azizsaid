import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Github, Globe, Smartphone, X } from "lucide-react";
import { projects, getProjectRepos, getProjectLiveUrl, type Project } from "@/data/portfolio";
import { EASE, fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { getSkillIcon } from "@/lib/skill-icons";
import { Chip, SectionShell } from "./primitives";

function getRepoIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("mobile") || l.includes("app")) return Smartphone;
  return Github;
}

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.stack)))];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.stack.includes(filter))),
    [filter],
  );
  const open = projects.find((p) => p.id === openId) ?? null;

  return (
    <SectionShell
      id="projects"
      index="02"
      title="Systems I designed and built"
      kicker="Four builds, from a blockchain-anchored LMS to a computer-vision quality gate. Select one for problem, solution and impact."
    >
      <motion.div
        variants={staggerContainer(0.04)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mb-10 flex flex-wrap gap-2"
      >
        {allTags.map((tag) => {
          const iconInfo = tag !== "All" ? getSkillIcon(tag) : null;
          const Icon = iconInfo?.icon;
          return (
            <motion.button
              key={tag}
              variants={fadeInUp}
              onClick={() => setFilter(tag)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-sm border px-3 py-1.5 font-mono text-[0.7rem] tracking-wide transition-colors",
                filter === tag
                  ? "border-signal bg-signal/10 text-signal"
                  : "border-border text-muted-foreground hover:border-signal/50 hover:text-foreground",
              )}
            >
              {Icon ? (
                <Icon
                  className="size-3 shrink-0"
                  style={{ color: filter === tag ? "currentColor" : iconInfo?.color }}
                  aria-hidden
                />
              ) : null}
              <span>{tag}</span>
            </motion.button>
          );
        })}
      </motion.div>

      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={() => setOpenId(p.id)} />
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={open} onClose={() => setOpenId(null)} />
    </SectionShell>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const repos = getProjectRepos(project);
  const liveUrl = getProjectLiveUrl(project);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: EASE }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-lg border border-border bg-surface/60 p-6 backdrop-blur transition-colors hover:border-signal/50"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-24 -right-24 size-56 rounded-full bg-signal/15 blur-3xl" />
      </div>
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[0.7rem] text-muted-foreground">{project.year}</span>
          {project.badge ? <Chip tone="amber">{project.badge}</Chip> : null}
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>
        <ul className="mt-5 space-y-1.5">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2 font-mono text-[0.72rem] leading-5 text-muted-foreground">
              <span className="text-signal">›</span>
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => {
            const { icon: Icon, color } = getSkillIcon(s);
            return (
              <span
                key={s}
                style={{ "--stack-color": color } as React.CSSProperties}
                className="group/chip inline-flex items-center gap-1.5 rounded-sm border border-border bg-surface-2/70 px-2.5 py-1 font-mono text-[0.7rem] tracking-wide text-foreground/80 transition-all duration-200 hover:border-[--stack-color] hover:text-[--stack-color] hover:bg-[--stack-color]/5"
              >
                <Icon
                  className="size-3.5 shrink-0 opacity-70 transition-opacity duration-200 group-hover/chip:opacity-100"
                  style={{ color: color ?? "currentColor" }}
                  aria-hidden
                />
                <span>{s}</span>
              </span>
            );
          })}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-signal uppercase hover:underline"
          >
            Case study
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-signal uppercase hover:text-signal/80 transition-colors"
            >
              <Globe className="size-3.5" /> Live
            </a>
          )}
          {repos.map((r) => {
            const Icon = getRepoIcon(r.label);
            return (
              <a
                key={r.label + r.url}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-muted-foreground uppercase hover:text-foreground transition-colors"
              >
                <Icon className="size-3.5" /> {r.label}
              </a>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const repos = project ? getProjectRepos(project) : [];
  const liveUrl = project ? getProjectLiveUrl(project) : null;

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-background/80 p-0 backdrop-blur-sm md:items-center md:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88svh] w-full max-w-3xl overflow-y-auto rounded-t-xl border border-border bg-surface p-8 md:rounded-xl"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="label-mono">case study / {project.year}</span>
                <h3 className="mt-3 font-display text-3xl font-semibold">{project.name}</h3>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-sm border border-signal/40 bg-signal/10 px-3 py-1.5 font-mono text-xs text-signal transition-colors hover:bg-signal/20 hover:border-signal"
                  >
                    <Globe className="size-3.5" />
                    <span>Live Demo</span>
                    <ArrowUpRight className="size-3" />
                  </a>
                )}
                {repos.map((r) => {
                  const Icon = getRepoIcon(r.label);
                  return (
                    <a
                      key={r.label + r.url}
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden sm:inline-flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-signal/50 hover:text-foreground"
                    >
                      <Icon className="size-3.5" />
                      <span>{r.label}</span>
                    </a>
                  );
                })}
                <button
                  onClick={onClose}
                  autoFocus
                  aria-label="Close case study"
                  className="rounded-sm border border-border p-2 text-muted-foreground hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {[
                { k: "Problem", v: project.problem },
                { k: "Solution", v: project.solution },
                { k: "Impact", v: project.impact },
              ].map((row) => (
                <div key={row.k} className="grid gap-2 md:grid-cols-[8rem_1fr]">
                  <span className="label-mono pt-1">{row.k}</span>
                  <p className="text-sm leading-relaxed text-foreground/85">{row.v}</p>
                </div>
              ))}
              <div className="grid gap-2 md:grid-cols-[8rem_1fr]">
                <span className="label-mono pt-1">Details</span>
                <ul className="space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 font-mono text-[0.75rem] leading-5 text-muted-foreground">
                      <span className="text-signal">›</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-2 md:grid-cols-[8rem_1fr]">
                <span className="label-mono pt-1">Stack</span>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => {
                    const { icon: Icon, color } = getSkillIcon(s);
                    return (
                      <span
                        key={s}
                        style={{ "--stack-color": color } as React.CSSProperties}
                        className="group/chip inline-flex items-center gap-1.5 rounded-sm border border-border bg-surface-2/70 px-2.5 py-1 font-mono text-[0.7rem] tracking-wide text-foreground/80 transition-all duration-200 hover:border-[--stack-color] hover:text-[--stack-color] hover:bg-[--stack-color]/5"
                      >
                        <Icon
                          className="size-3.5 shrink-0 opacity-70 transition-opacity duration-200 group-hover/chip:opacity-100"
                          style={{ color: color ?? "currentColor" }}
                          aria-hidden
                        />
                        <span>{s}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
              {liveUrl && (
                <div className="grid gap-2 md:grid-cols-[8rem_1fr]">
                  <span className="label-mono pt-1">Production</span>
                  <div>
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm border border-signal/40 bg-signal/10 px-3 py-1.5 font-mono text-xs text-signal transition-colors hover:bg-signal/20 hover:border-signal"
                    >
                      <Globe className="size-3.5" />
                      <span>{liveUrl}</span>
                      <ArrowUpRight className="size-3" />
                    </a>
                  </div>
                </div>
              )}
              {repos.length > 0 && (
                <div className="grid gap-2 md:grid-cols-[8rem_1fr]">
                  <span className="label-mono pt-1">
                    {repos.length > 1 ? "Repositories" : "Repository"}
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {repos.map((r) => {
                      const Icon = getRepoIcon(r.label);
                      return (
                        <a
                          key={r.label + r.url}
                          href={r.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface/80 px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-signal/60 hover:text-signal"
                        >
                          <Icon className="size-3.5" />
                          <span>{r.label}</span>
                          <ArrowUpRight className="size-3 text-muted-foreground" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

