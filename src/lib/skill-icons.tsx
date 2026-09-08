/**
 * Maps each skill name in portfolio.ts to its corresponding icon and brand/accent color.
 * Cleaned and trimmed strictly to active skills in the portfolio.
 * Consistent styling, scale, and sizing matching Hero.tsx.
 */

import type { ComponentType } from "react";
import {
  // Languages
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPhp,
  SiCplusplus,
  SiDart,
  // Frontend
  SiAngular,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiBootstrap,
  // Backend
  SiSpring,
  SiSymfony,
  SiDjango,
  SiFlask,
  SiExpress,
  SiDotnet,
  SiNestjs,
  // DevOps & Cloud
  SiGit,
  SiGithub,
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiSonar,
  SiAnsible,
  SiNginx,
  SiVercel,
  SiRender,
  // Databases
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiTidb,
  // Testing & Tools
  SiJunit5,
  SiPostman,
  SiApachejmeter,
  SiApachemaven,
  SiIntellijidea,
  SiFigma,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { VscCode, VscAzure } from "react-icons/vsc";
import {
  Database,
  Server,
  Boxes,
  ShieldCheck,
  Gauge,
  Layers,
  Workflow,
  Brain,
  Sparkles,
  Code2,
} from "lucide-react";

export type SkillIcon = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: ComponentType<any>;
  color?: string;
};

export function getSkillIcon(name: string): SkillIcon {
  const map: Record<string, SkillIcon> = {
    // ── Languages ──────────────────────────────────────────────────────────
    Java:         { icon: FaJava,       color: "#ED8B00" },
    Python:       { icon: SiPython,     color: "#3776AB" },
    JavaScript:   { icon: SiJavascript, color: "#F7DF1E" },
    TypeScript:   { icon: SiTypescript, color: "#3178C6" },
    PHP:          { icon: SiPhp,        color: "#777BB4" },
    "C / C++":    { icon: SiCplusplus,  color: "#00599C" },
    Dart:         { icon: SiDart,       color: "#0175C2" },
    SQL:          { icon: Database,     color: "#00BCF2" },

    // ── Frontend ───────────────────────────────────────────────────────────
    Angular:      { icon: SiAngular,    color: "#DD0031" },
    React:        { icon: SiReact,      color: "#61DAFB" },
    "Vue.js":     { icon: SiVuedotjs,   color: "#4FC08D" },
    "Next.js":    { icon: SiNextdotjs,  color: "#FFFFFF" },
    JavaFX:       { icon: FaJava,       color: "#ED8B00" },
    Bootstrap:    { icon: SiBootstrap,  color: "#7952B3" },

    // ── Backend ────────────────────────────────────────────────────────────
    "Spring Boot":  { icon: SiSpring,   color: "#6DB33F" },
    "Spring Cloud": { icon: SiSpring,   color: "#6DB33F" },
    Symfony:        { icon: SiSymfony,  color: "#FFFFFF" },
    Django:         { icon: SiDjango,   color: "#092E20" },
    Flask:          { icon: SiFlask,    color: "#E2E8F0" },
    "Express.js":   { icon: SiExpress,  color: "#FFFFFF" },
    ".NET":         { icon: SiDotnet,   color: "#512BD4" },
    NestJS:         { icon: SiNestjs,   color: "#E0234E" },
    "REST APIs":    { icon: Server,     color: "#10B981" },
    Microservices:  { icon: Boxes,      color: "#F59E0B" },

    // ── DevOps & Cloud ─────────────────────────────────────────────────────
    Git:          { icon: SiGit,        color: "#F05032" },
    GitHub:       { icon: SiGithub,     color: "#FFFFFF" },
    Docker:       { icon: SiDocker,     color: "#2496ED" },
    Jenkins:      { icon: SiJenkins,    color: "#D33833" },
    Kubernetes:   { icon: SiKubernetes, color: "#326CE5" },
    SonarQube:    { icon: SiSonar,      color: "#4C9BD6" },
    Ansible:      { icon: SiAnsible,    color: "#EE0000" },
    Nginx:        { icon: SiNginx,      color: "#009639" },
    AWS:          { icon: FaAws,        color: "#FF9900" },
    Azure:        { icon: VscAzure,     color: "#0089D6" },
    Vercel:       { icon: SiVercel,     color: "#FFFFFF" },
    Render:       { icon: SiRender,     color: "#46E3B7" },

    // ── Databases ──────────────────────────────────────────────────────────
    MySQL:        { icon: SiMysql,      color: "#4479A1" },
    PostgreSQL:   { icon: SiPostgresql, color: "#336791" },
    MongoDB:      { icon: SiMongodb,    color: "#47A248" },
    Firebase:     { icon: SiFirebase,   color: "#FFCA28" },
    Supabase:     { icon: SiSupabase,   color: "#3ECF8E" },
    TiDB:         { icon: SiTidb,       color: "#E30C34" },
    NoSQL:        { icon: Database,     color: "#10B981" },

    // ── Testing & Tools ────────────────────────────────────────────────────
    JUnit:                 { icon: SiJunit5,       color: "#25A162" },
    Postman:               { icon: SiPostman,      color: "#FF6C37" },
    JMeter:                { icon: SiApachejmeter, color: "#D22128" },
    Maven:                 { icon: SiApachemaven,  color: "#C71A36" },
    "VS Code":             { icon: VscCode,        color: "#007ACC" },
    "IntelliJ IDEA":       { icon: SiIntellijidea, color: "#FE315D" },
    Figma:                 { icon: SiFigma,        color: "#F24E1E" },
    "API Testing":         { icon: ShieldCheck,    color: "#10B981" },
    "Performance Testing": { icon: Gauge,          color: "#F59E0B" },

    // ── Architecture & AI ──────────────────────────────────────────────────
    MVC:                    { icon: Layers,   color: "#94A3B8" },
    "Clean Architecture":   { icon: Layers,   color: "#38BDF8" },
    "Design Patterns":      { icon: Boxes,    color: "#A78BFA" },
    OOP:                    { icon: Code2,    color: "#F59E0B" },
    Agile:                  { icon: Workflow, color: "#10B981" },
    Scrum:                  { icon: Workflow, color: "#10B981" },
    "Machine Learning":     { icon: Brain,    color: "#EC4899" },
    "AI/ML Integration":    { icon: Sparkles, color: "#A855F7" },
    "AI APIs Integration":  { icon: Sparkles, color: "#A855F7" },
  };

  return map[name] ?? { icon: Code2, color: "#94A3B8" };
}
