import type { Variants } from "motion/react";

export const EASE = [0.16, 1, 0.3, 1] as const;

export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: EASE } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: EASE } },
};

export const clipWipe: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0.6 },
  show: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 0.85, ease: EASE },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

export const revealWord: Variants = {
  hidden: { opacity: 0, y: "0.6em", rotateX: -45 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.65, ease: EASE } },
};

export const chipIn: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: EASE } },
};

// once: false → les animations se rejouent à chaque entrée/sortie du viewport
export const viewportOnce = { once: false, amount: 0.2 } as const;
