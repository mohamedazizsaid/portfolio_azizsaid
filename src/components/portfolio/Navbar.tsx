import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { sections } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

export function Navbar() {
  const { dark, toggle } = useTheme();
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useMotionValueEvent(scrollY, "change", (v) => setCompact(v > 80));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        animate={{
          width: compact ? "min(100%, 46rem)" : "min(100%, 72rem)",
          backgroundColor: compact ? "var(--surface)" : "transparent",
          borderColor: compact ? "var(--border)" : "transparent",
          paddingTop: compact ? 8 : 14,
          paddingBottom: compact ? 8 : 14,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between gap-4 rounded-full border px-4 backdrop-blur-xl md:px-6"
      >
        <button
          onClick={() => go("home")}
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          <span className="text-signal">~/</span>aziz
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            className="text-signal"
          >
            _
          </motion.span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => go(s.id)}
                className={cn(
                  "relative rounded-full px-3 py-1.5 font-mono text-xs tracking-wide transition-colors",
                  active === s.id ? "text-signal" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-signal/10"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <span className="relative">{s.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-signal/50 hover:text-signal"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="rounded-full border border-border p-2 text-muted-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </motion.nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 w-[calc(100%-2rem)] rounded-xl border border-border bg-surface p-2 backdrop-blur-xl md:hidden"
        >
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => go(s.id)}
              className="block w-full rounded-lg px-4 py-3 text-left font-mono text-sm text-muted-foreground hover:bg-surface-2 hover:text-signal"
            >
              {s.label}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
}
