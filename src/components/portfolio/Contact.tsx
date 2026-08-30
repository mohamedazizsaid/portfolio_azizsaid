import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { WordReveal } from "./primitives";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    // Client-side only: opens the visitor's mail client.
    // Swap for a Formspree / EmailJS endpoint to collect submissions directly.
    const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your mail client…");
      form.reset();
    }, 600);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-border py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-signal/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-start">
        <div>
          <span className="label-mono">05 / contact</span>
          <h2 className="mt-5 text-5xl leading-[0.95] font-semibold md:text-7xl">
            <WordReveal text="Let's build something." />
          </h2>
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 flex flex-col gap-3"
          >
            {[
              { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
              { icon: Github, label: "GitHub", href: profile.github },
              { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
            ].map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                variants={fadeInUp}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="group inline-flex w-fit items-center gap-3 font-mono text-sm text-muted-foreground transition-colors hover:text-signal"
              >
                <Icon className="size-4" />
                <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-signal">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="rounded-lg border border-border bg-surface/70 p-6 backdrop-blur md:p-8"
        >
          {[
            { name: "name", label: "Name", type: "text" },
            { name: "email", label: "Email", type: "email" },
          ].map((f) => (
            <motion.div key={f.name} variants={fadeInUp} className="mb-5">
              <label htmlFor={f.name} className="label-mono mb-2 block">
                {f.label}
              </label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required
                className="w-full rounded-sm border border-border bg-background px-4 py-3 font-mono text-sm outline-hidden transition-colors focus:border-signal"
              />
            </motion.div>
          ))}
          <motion.div variants={fadeInUp} className="mb-6">
            <label htmlFor="message" className="label-mono mb-2 block">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full resize-none rounded-sm border border-border bg-background px-4 py-3 font-mono text-sm outline-hidden transition-colors focus:border-signal"
            />
          </motion.div>
          <motion.button
            variants={fadeInUp}
            type="submit"
            disabled={sending}
            className="w-full rounded-sm bg-signal px-5 py-3 font-mono text-xs tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10">
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 h-px w-full origin-left bg-linear-to-r from-signal via-signal/30 to-transparent"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-[0.7rem] tracking-wider text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="flex items-center gap-1">
          Designed & built in Tunis
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
            className="text-signal"
          >
            ▌
          </motion.span>
        </span>
      </div>
    </footer>
  );
}
