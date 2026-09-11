import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, ChevronUp, Github, Globe, Minus, Plus, Smartphone, X } from "lucide-react";
import { projects, getProjectRepos, getProjectLiveUrl, type Project } from "@/data/portfolio";
import { EASE, fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { getSkillIcon } from "@/lib/skill-icons";
import { Chip, getContextTone, SectionShell } from "./primitives";

function getRepoIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("mobile") || l.includes("app")) return Smartphone;
  return Github;
}

export function TechBadge({ name, className }: { name: string; className?: string }) {
  const { icon: Icon, color = "#10B981" } = getSkillIcon(name);
  const isWhite = color === "#FFFFFF" || color.toLowerCase() === "#fff";

  const borderColor = isWhite ? "rgba(255, 255, 255, 0.28)" : `${color}40`;
  const bgColor = isWhite ? "rgba(255, 255, 255, 0.07)" : `${color}12`;
  const glowColor = isWhite ? "rgba(255, 255, 255, 0.2)" : `${color}35`;

  return (
    <span
      style={
        {
          borderColor,
          backgroundColor: bgColor,
          boxShadow: `0 0 10px -4px ${glowColor}`,
          "--stack-color": color,
        } as React.CSSProperties
      }
      className={cn(
        "group/chip inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 font-mono text-[0.7rem] font-medium tracking-wide text-foreground/90 transition-all duration-200 hover:border-[--stack-color] hover:text-foreground hover:bg-[--stack-color]/15 hover:shadow-[0_0_12px_-2px_var(--stack-color)]",
        className,
      )}
    >
      <Icon
        className="size-3.5 shrink-0 transition-transform duration-200 group-hover/chip:scale-110"
        style={{ color: isWhite ? "currentColor" : color }}
        aria-hidden
      />
      <span>{name}</span>
    </span>
  );
}

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.stack)))];
const INITIAL_TAGS_COUNT = 10;
const INITIAL_PROJECTS_COUNT = 4;

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);

  const displayedTags = useMemo(() => {
    if (isExpanded) return allTags;
    const initial = allTags.slice(0, INITIAL_TAGS_COUNT);
    if (filter !== "All" && !initial.includes(filter)) {
      return [...initial, filter];
    }
    return initial;
  }, [isExpanded, filter]);

  const hiddenCount = allTags.length - displayedTags.length;

  const visibleProjects = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.stack.includes(filter))),
    [filter],
  );

  const displayedProjects = useMemo(() => {
    if (isProjectsExpanded) return visibleProjects;
    return visibleProjects.slice(0, INITIAL_PROJECTS_COUNT);
  }, [visibleProjects, isProjectsExpanded]);

  const hiddenProjectsCount = visibleProjects.length - displayedProjects.length;
  const open = projects.find((p) => p.id === openId) ?? null;

  return (
    <SectionShell
      id="projects"
      index="02"
      title="Systems I designed and built"
      kicker="Production builds, from a blockchain-anchored LMS to an AI skin diagnosis suite. Select one for problem, solution and impact."
    >
      <motion.div
        layout
        variants={staggerContainer(0.04)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mb-10 flex flex-wrap items-center gap-2"
      >
        <AnimatePresence mode="popLayout">
          {displayedTags.map((tag) => {
            const iconInfo = tag !== "All" ? getSkillIcon(tag) : null;
            const Icon = iconInfo?.icon;
            const color = iconInfo?.color;
            const isSelected = filter === tag;
            const isWhite = color === "#FFFFFF" || color?.toLowerCase() === "#fff";

            return (
              <motion.button
                layout
                key={tag}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.22, ease: EASE }}
                onClick={() => setFilter(tag)}
                style={
                  (isSelected && tag !== "All" && color
                    ? {
                        borderColor: isWhite ? "rgba(255,255,255,0.6)" : color,
                        backgroundColor: isWhite ? "rgba(255,255,255,0.12)" : `${color}20`,
                        color: isWhite ? "#fff" : color,
                        boxShadow: `0 0 14px -3px ${isWhite ? "rgba(255,255,255,0.3)" : `${color}60`}`,
                      }
                    : {}) as any
                }
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-sm border px-3 py-1.5 font-mono text-[0.7rem] tracking-wide transition-all duration-200 cursor-pointer",
                  isSelected
                    ? tag === "All"
                      ? "border-signal bg-signal/15 text-signal shadow-[0_0_14px_-3px_var(--color-signal)] font-medium"
                      : "font-semibold"
                    : "border-border text-muted-foreground hover:border-signal/50 hover:text-foreground hover:bg-surface-2/40",
                )}
              >
                {Icon ? (
                  <Icon
                    className="size-3 shrink-0"
                    style={{ color: isSelected ? (color ?? "currentColor") : (color ?? "currentColor") }}
                    aria-hidden
                  />
                ) : null}
                <span>{tag}</span>
              </motion.button>
            );
          })}
        </AnimatePresence>

        {/* Expand / Collapse Button for Tags */}
        <motion.button
          layout
          onClick={() => setIsExpanded((prev) => !prev)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="inline-flex items-center gap-1.5 rounded-sm border border-signal/40 bg-signal/10 px-3 py-1.5 font-mono text-[0.7rem] font-medium tracking-wide text-signal transition-all duration-200 hover:border-signal hover:bg-signal/20 hover:shadow-[0_0_12px_-3px_var(--color-signal)] cursor-pointer"
        >
          <span>{isExpanded ? "Show less" : `+${hiddenCount} Show more`}</span>
          {isExpanded ? (
            <ChevronUp className="size-3 transition-transform duration-200" />
          ) : (
            <ChevronDown className="size-3 transition-transform duration-200" />
          )}
        </motion.button>
      </motion.div>

      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={() => setOpenId(p.id)} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Expand / Collapse Button for Projects */}
      {visibleProjects.length > INITIAL_PROJECTS_COUNT && (
        <motion.div layout className="mt-12 flex justify-center">
          <motion.button
            layout
            onClick={() => setIsProjectsExpanded((prev) => !prev)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="group inline-flex items-center gap-2.5 rounded-lg border border-border/80 bg-surface/80 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-foreground shadow-sm transition-all duration-200 hover:border-signal/60 hover:bg-signal/10 hover:text-signal hover:shadow-[0_0_20px_-4px_var(--color-signal)] cursor-pointer"
          >
            <span>
              {isProjectsExpanded
                ? "Show fewer projects"
                : `View more projects (+${hiddenProjectsCount})`}
            </span>
            {isProjectsExpanded ? (
              <ChevronUp className="size-4 transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            )}
          </motion.button>
        </motion.div>
      )}

      <ProjectModal project={open} onClose={() => setOpenId(null)} />
    </SectionShell>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const [showAllStack, setShowAllStack] = useState(false);
  const repos = getProjectRepos(project);
  const liveUrl = getProjectLiveUrl(project);
  const badgeTone = project.badgeTone ?? getContextTone(project.badge);

  const hasMore = project.stack.length > 3;
  const remainingCount = project.stack.length - 3;
  const displayedStack = showAllStack ? project.stack : project.stack.slice(0, 3);

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
          {project.badge ? <Chip tone={badgeTone}>{project.badge}</Chip> : null}
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
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {displayedStack.map((s) => (
            <TechBadge key={s} name={s} />
          ))}
          {hasMore && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowAllStack((prev) => !prev);
              }}
              aria-label={showAllStack ? "Show fewer technologies" : `Show ${remainingCount} more technologies`}
              className="inline-flex items-center gap-1 rounded-sm border border-border/80 bg-surface-2/70 px-2 py-1 font-mono text-[0.7rem] font-medium text-muted-foreground transition-all duration-200 hover:border-signal/50 hover:bg-signal/10 hover:text-signal cursor-pointer"
            >
              {showAllStack ? (
                <>
                  <Minus className="size-3" />
                  <span>less</span>
                </>
              ) : (
                <>
                  <Plus className="size-3" />
                  <span>{remainingCount}</span>
                </>
              )}
            </button>
          )}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-signal uppercase hover:underline cursor-pointer"
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
  const badgeTone = project ? project.badgeTone ?? getContextTone(project.badge) : "signal";
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  // Ultra-smooth inertial wheel scrolling
  useEffect(() => {
    if (!project) return;
    const el = scrollContainerRef.current;
    if (!el) return;

    let targetY = el.scrollTop;
    let currentY = el.scrollTop;
    let rafId: number | null = null;
    let isWheeling = false;

    const smoothStep = () => {
      const diff = targetY - currentY;
      if (Math.abs(diff) < 0.4) {
        el.scrollTop = targetY;
        currentY = targetY;
        isWheeling = false;
        rafId = null;
        return;
      }
      currentY += diff * 0.16;
      el.scrollTop = currentY;
      rafId = requestAnimationFrame(smoothStep);
    };

    const handleWheel = (e: WheelEvent) => {
      if (el.scrollHeight <= el.clientHeight) return;
      if (Math.abs(e.deltaY) < 0.5) return;

      e.preventDefault();

      if (!isWheeling) {
        currentY = el.scrollTop;
        targetY = el.scrollTop;
        isWheeling = true;
      }

      const maxScroll = el.scrollHeight - el.clientHeight;
      targetY = Math.max(0, Math.min(maxScroll, targetY + e.deltaY * 0.85));

      if (!rafId) {
        rafId = requestAnimationFrame(smoothStep);
      }
    };

    const handleScroll = () => {
      if (!isWheeling) {
        currentY = el.scrollTop;
        targetY = el.scrollTop;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/85 p-3 sm:p-5 md:p-8 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
        >
          <motion.div
            initial={{ y: 32, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col max-h-[92vh] w-full max-w-5xl rounded-xl border border-border/90 bg-surface shadow-2xl shadow-black/80 overflow-hidden"
          >
            {/* Header: Fixed top bar */}
            <div className="relative border-b border-border/80 bg-surface-2/40 px-6 py-5 sm:px-8 sm:py-6 shrink-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="label-mono">case study / {project.year}</span>
                  {project.badge ? <Chip tone={badgeTone}>{project.badge}</Chip> : null}
                </div>

                <button
                  onClick={onClose}
                  autoFocus
                  aria-label="Close case study"
                  className="group/close inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-surface/90 px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-all duration-200 hover:border-signal/60 hover:bg-surface-2 hover:text-foreground shrink-0 cursor-pointer"
                >
                  <span className="hidden sm:inline text-[0.65rem] tracking-wider uppercase opacity-60 group-hover/close:opacity-100">
                    ESC
                  </span>
                  <X className="size-4 transition-transform group-hover/close:rotate-90 duration-200" />
                </button>
              </div>

              <div className="mt-3">
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-3xl">
                  {project.tagline}
                </p>
              </div>

              {/* Action Buttons Bar */}
              {(liveUrl || repos.length > 0) && (
                <div className="mt-4 flex flex-wrap items-center gap-2.5 pt-3 border-t border-border/50">
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-signal/40 bg-signal/15 px-3.5 py-1.5 font-mono text-xs font-medium text-signal shadow-[0_0_16px_-4px_var(--color-signal)] transition-all hover:bg-signal/25 hover:border-signal"
                    >
                      <span className="size-2 rounded-full bg-signal animate-pulse" />
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
                        className="inline-flex items-center gap-2 rounded-md border border-border/80 bg-surface/70 px-3 py-1.5 font-mono text-xs text-foreground/80 transition-all hover:border-signal/50 hover:bg-surface-2 hover:text-foreground"
                      >
                        <Icon className="size-3.5 text-muted-foreground" />
                        <span>{r.label}</span>
                        <ArrowUpRight className="size-3 text-muted-foreground/60" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Scrollable Content Body with custom scrollbar & smooth momentum physics */}
            <div
              ref={scrollContainerRef}
              className="modal-scrollbar scroll-smooth overscroll-contain flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-7"
            >
              {/* Problem / Solution / Impact Cards */}
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-rose-500/25 bg-rose-500/[0.03] p-4 sm:p-5">
                  <div className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-rose-400 font-semibold mb-2">
                    <span className="size-1.5 rounded-full bg-rose-400" />
                    <span>Problem</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-foreground/85">
                    {project.problem}
                  </p>
                </div>

                <div className="rounded-lg border border-signal/25 bg-signal/[0.03] p-4 sm:p-5">
                  <div className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-signal font-semibold mb-2">
                    <span className="size-1.5 rounded-full bg-signal" />
                    <span>Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-foreground/85">
                    {project.solution}
                  </p>
                </div>

                <div className="rounded-lg border border-amber/25 bg-amber/[0.03] p-4 sm:p-5">
                  <div className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-amber font-semibold mb-2">
                    <span className="size-1.5 rounded-full bg-amber" />
                    <span>Impact</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-foreground/85">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Engineering Highlights */}
              <div className="rounded-lg border border-border/80 bg-surface-2/30 p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
                  <span className="label-mono">Key Architecture & Implementation</span>
                  <span className="font-mono text-[0.7rem] text-muted-foreground">
                    {project.highlights.length} milestones
                  </span>
                </div>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 rounded-md border border-border/40 bg-surface/50 p-3 font-mono text-[0.75rem] leading-relaxed text-muted-foreground hover:text-foreground hover:border-signal/40 transition-colors"
                    >
                      <span className="text-signal font-bold mt-0.5">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="rounded-lg border border-border/80 bg-surface-2/30 p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
                  <span className="label-mono">Contextual Tech Stack</span>
                  <span className="font-mono text-[0.7rem] text-muted-foreground">
                    {project.stack.length} technologies
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {project.stack.map((s) => (
                    <TechBadge key={s} name={s} className="px-3 py-1.5 text-xs" />
                  ))}
                </div>
              </div>

              {/* Production Link Info if present */}
              {liveUrl && (
                <div className="flex items-center justify-between rounded-lg border border-signal/25 bg-signal/[0.04] p-4">
                  <div className="flex items-center gap-3">
                    <span className="relative flex size-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
                      <span className="relative inline-flex size-2.5 rounded-full bg-signal" />
                    </span>
                    <div>
                      <p className="font-mono text-xs font-medium text-foreground">Production Deployment</p>
                      <p className="font-mono text-[0.7rem] text-muted-foreground truncate max-w-md">{liveUrl}</p>
                    </div>
                  </div>
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-sm border border-signal/40 bg-signal/15 px-3 py-1.5 font-mono text-xs text-signal transition-colors hover:bg-signal/25"
                  >
                    <span>Visit</span>
                    <ArrowUpRight className="size-3" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

