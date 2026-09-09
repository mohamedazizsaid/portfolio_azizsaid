export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  stack: string[];
};

export type RepoLink = {
  label: string;
  url: string;
};

export type ProjectRepos =
  | RepoLink[]
  | {
    frontend?: string;
    backend?: string;
    client?: string;
    server?: string;
    api?: string;
    mobile?: string;
    [key: string]: string | undefined;
  };

export type Project = {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  problem: string;
  solution: string;
  impact: string;
  highlights: string[];
  stack: string[];
  repo?: string;
  repos?: ProjectRepos;
  live?: string;
  year: string;
};

const formatRepoLabel = (key: string): string => {
  const lower = key.toLowerCase();
  if (lower === "front") return "Frontend";
  if (lower === "back") return "Backend";
  return key.charAt(0).toUpperCase() + key.slice(1);
};

export function getProjectRepos(project: Project): RepoLink[] {
  if (Array.isArray(project.repos)) {
    return project.repos.filter((r) => Boolean(r && r.url && r.url !== "#"));
  }
  if (project.repos && typeof project.repos === "object") {
    return Object.entries(project.repos)
      .filter(([_, url]) => Boolean(url && url !== "#"))
      .map(([label, url]) => ({
        label: formatRepoLabel(label),
        url: url as string,
      }));
  }
  if (project.repo && project.repo !== "#") {
    return [{ label: "Code", url: project.repo }];
  }
  return [];
}

export function getProjectLiveUrl(project: Project): string | null {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const p = project as any;
  const url = p.live || p.prod || p.demo || p.production;
  if (typeof url === "string" && url !== "#" && url.trim() !== "") {
    return url.trim();
  }
  return null;
}



export const profile = {
  name: "Mohamed Aziz Said",
  shortName: "MED AZIZ SAID",
  role: "Full-Stack Engineer · AI & DevOps Enthusiast",
  status: "Final-year engineering student · ESPRIT",
  valueProp:
    "I build production-ready software across the stack — combining full-stack engineering, AI-powered experiences, and DevOps practices to turn ideas into reliable products.",
  about:
    "I'm a software engineering student at ESPRIT passionate about building modern, reliable, and intelligent applications. I work across Full-Stack development, AI integration, and DevOps, turning ideas into real-world software.",
  email: "azizsaid.it@gmail.com",
  github: "https://github.com/mohamedazizsaid",
  linkedin: "https://www.linkedin.com/in/mohamed-aziz-said-841a3b226",
  resume: "https://drive.google.com/file/d/1im1IpFSciFRmoluKQKmhxAWMtm7ycq1G/view?usp=drive_link", // Drop resume.pdf into /public and point this to /resume.pdf
  location: "Tunis, Tunisia",
};

export const experiences: Experience[] = [
  {
    company: "Bee Coders",
    role: "Full-Stack Engineer — Centralized Learning & Internship Platform (9antra-The Bridge)",
    period: "06/2026 – 08/2026",
    location: "Lac I, Tunisie",
    bullets: [
      "Designed and developed a centralized platform for managing training programs, internships and learner progression using Angular, Spring Boot and MySQL.", "Implemented secure RBAC, phase-gated workflows, payment validation and real-time notifications to streamline collaboration between learners and trainers.", "Integrated automated certificate generation with blockchain anchoring to provide verifiable and tamper-evident credentials.",
    ],
    stack: ["Angular", "Spring Boot", "MySQL", "WebSocket", "Blockchain", "Stripe", "CI/CD & DevOps", "Vercel", "Render"],
  },
  {
    company: "YottaByte",
    role: "Full-Stack Intern — Advanced E-Learning Platform",
    period: "01/2024 – 06/2024",
    location: "Charguia, Tunisie",
    bullets: [
      "Developed an AI-authenticated learning platform using Angular, Express.js and MongoDB.",
      "Integrated intelligent chatbots to assist users and enhance learning interaction.",
      "Delivered a more advanced and responsive platform compared to existing local solutions.",
    ],
    stack: ["Angular", "Express.js", "MongoDB", "Figma", "Trello"],
  },
  {
    company: "CERT",
    role: "Full-Stack Intern — Advanced Managing Interns Platform",
    period: "01/2023 – 03/2023",
    location: "Technopole Elgazala, Tunisie",
    bullets: [
      "Designed and developed a complete platform for managing interns using Angular, Spring Boot and MySQL.",
      "Implemented features for tracking intern tasks, attendance and performance.",
      "Focused on creating a user-friendly dashboard and secure authentication system.",
    ],
    stack: ["Angular", "Spring Boot", "MySQL", "Git", "GitHub"],
  },
  {
    company: "Sagemcom",
    role: "Software Development Intern",
    period: "01/2022 – 02/2022",
    location: "Ben Arous, Tunisie",
    bullets: [
      "Joined a professional software development company to observe team workflows and project lifecycles.",
      "Gained exposure to real-world development practices, collaboration and agile methodologies.",
      "Acquired a foundational understanding of teamwork and software project structure.",
    ],
    stack: ["Agile", "Teamwork", "Productivity"],
  },
];

export const projects: Project[] = [

  {
    id: "9antra",
    name: "9antra — The Bridge",
    tagline: "Full-stack LMS for Tunisian vocational training centers.",
    badge: "Most immersive UI/UX",
    year: "2026",
    problem:
      "Vocational training centers had no single system tying together enrollment, payment confirmation, pedagogical validation and credential issuance.",
    solution:
      "A modular Spring Boot 3 / Angular 18 platform with phase-gated progression: a learner advances only when both pedagogical validation and payment confirmation are recorded, with certificates anchored on-chain.",
    impact:
      "Centers issue tamper-evident certificates automatically and track cohort progression in real time instead of via spreadsheets.",
    highlights: [
      "Spring Boot 3 · Angular 18+ · MySQL 8 with JWT + Spring Security RBAC",
      "Phase-gated learning progression (pedagogical validation + payment confirmation)",
      "Blockchain certificate anchoring on Polygon L2 with automatic generation",
      "Real-time notifications over WebSocket (STOMP / SockJS)",
    ],
    stack: ["Spring Boot", "Angular", "MySQL", "WebSocket", "WCAG AA", "Blockchain", "CI/CD & DevOps", "Vercel", "Render"],
    repos: {
      front: "https://github.com/mohamedazizsaid/9antra_the-Bridge_Frontend",
      back: "https://github.com/mohamedazizsaid/9antra_the-Bridge_Frontend",
    },
    live: "https://9antra-the-bridge-frontend-pdjd-silk.vercel.app",

  },
  {
    id: "deepskyn",
    name: "DeepSkyn",
    tagline: "AI-powered skin analysis platform with accessibility-first design.",
    badge: "Most complex system architecture",
    year: "2026",
    problem:
      "Users lacked an accessible, trustworthy way to get AI-driven skin analysis with real-time guidance, especially across language and ability barriers.",
    solution:
      "A React/Vite + NestJS platform with Keycloak auth, PostgreSQL, and Python ML services for skin analysis, wrapped in a dark luxury/biopunk UI with glassmorphism and 3D animations, plus a multi-provider LLM fallback layer for resilience.",
    impact:
      "Delivers AI skin diagnostics with built-in accessibility (LSF sign language avatar, eye tracking, voice commands) and automated billing/support flows, deployed across web and mobile.",
    highlights: [
      "React/Vite · NestJS · PostgreSQL · Keycloak auth · Python ML services",
      "Accessibility suite: LSF sign language avatar (Mixamo/Three.js), eye tracking, voice commands",
      "Stripe billing, n8n automation, multi-provider LLM fallback (Gemini, Groq, OpenRouter)",
      "React Native/Expo companion app · CI/CD across Render/Vercel/Supabase",
    ],
    stack: ["React", "NestJS", "PostgreSQL", "Keycloak", "Python", "React Native", "WCAG AA", "CI/CD & DevOps", "Vercel", "Supabase", "Azure"],
    repos: {
      front: "https://github.com/mohamedazizsaid/DeepSkynFrontEnd_ByDev-Masters",
      back: "https://github.com/MohamedSalimLabbaoui/DeepSkynBackEnd_ByDev-Masters",
      mobile: "https://github.com/mohamedazizsaid/DeepSkynMobile_ByDev-Masters"
    },
    live: "https://deep-skyn-front-end-by-dev-masters.vercel.app",
  },
  {
    id: "formapro",
    name: "FormaPro",
    tagline: "Accessible, AI-powered training management platform built for MaraTech Esprit 2026.",
    badge: "Most accessible platform",
    year: "2026",
    problem:
      "Vocational training centers needed a single platform to manage the full training lifecycle — from enrollment to certification — while remaining usable for trainers and learners with different accessibility needs.",
    solution:
      "A NestJS/MongoDB Atlas backend paired with a React/Vite frontend, deployed on Render (API) and Vercel (frontend), supporting three role-based dashboards (Formateur, Responsable Formation, Administrateur), an AI chatbot assistant powered by Gemini 2.5 Flash, and an accessibility suite including eye tracking and Face ID-based attendance, built with the team in 48 hours for MaraTech Esprit 2026.",
    impact:
      "Automates enrollment, attendance (including facial-recognition check-in), PDF certificate generation, and analytics across roles, while meeting WCAG 2.1 AA accessibility standards with hands-free control options.",
    highlights: [
      "NestJS · MongoDB Atlas · React 18 · Vite · Tailwind CSS · shadcn/ui",
      "Deployed on Render (backend) + Vercel (frontend) with MongoDB Atlas as the managed database",
      "JWT + Google OAuth 2.0 auth with TOTP 2FA (QR code enable/verify/disable)",
      "AI chatbot assistant via Google Gemini 2.5 Flash with persistent chat history",
      "Face ID attendance: facial recognition check-in (face-api.js) alongside eye tracking and eye-blink click controls",
      "Automatic PDF certificate generation (PDFKit), Cloudinary media, multilingual UI (FR/EN/AR/ES)",
      "Global HTTP audit logging and role-based analytics dashboards (Recharts)",
    ],
    stack: ["NestJS", "MongoDB Atlas", "React", "Vite", "TailwindCSS", "Gemini AI"],
    repo:"https://github.com/mohamedazizsaid/EspritMaratch2026-devmasters",
    live:"https://esprit-maratch2026-devmasters.vercel.app/"
  },
  {
    id: "quality-detection",
    name: "Quality Detection — StopAlgic",
    tagline: "Computer vision defect detection on the bottle production line.",
    year: "2024",
    badge: "Most industrial application",
    problem:
      "Manual visual inspection on the bottling line let defective products (broken bottles, damaged caps, misapplied labels) slip through before shipment and scaled poorly with volume.",
    solution:
      "A multi-model computer vision system (YOLO/CNN trained per defect type — bottle breakage, cap, label) served through an OpenCV real-time video pipeline, backed by an authenticated Python API with database logging, plus a Flutter companion app for monitoring.",
    impact: "Automated real-time quality control across multiple defect categories, reducing manual inspection error.",
    highlights: [
      "Multiple trained detection models: bottle breakage (cassure), cap (bouchon), label (étiquette)",
      "Real-time video anomaly detection pipeline built on OpenCV",
      "Python backend with authentication and database logging of detections",
      "Flutter cross-platform companion app (Android/iOS/desktop/web) for monitoring",
      "Automated quality control, reducing manual inspection error",
    ],
    stack: ["Python", "TensorFlow", "PyTorch", "OpenCV", "YOLO", "Flutter"],
    repos: {
      mobile: "https://github.com/mohamedazizsaid/StopAlgic-Camera-Intelligent-Flutter-Application",
      back: "https://github.com/mohamedazizsaid/StopAlgic-Camera-Intelligent",
    },
  },
  {
    id: "nutripal",
    name: "NutriPal",
    tagline: "AI-assisted nutrition tracking with rule-engine recommendations.",
    year: "2025",
    problem:
      "Generic calorie trackers ignore individual constraints and give no reasoning behind their suggestions.",
    solution:
      "An Angular client with SVG circular macro rings and reactive forms on top of a Spring Boot API where a rule engine drives explainable nutrition recommendations, extended by an AI assistant service for personalized planning.",
    impact:
      "Users get a daily plan they can act on, with each recommendation traceable to a rule instead of a black box.",
    highlights: [
      "SVG circular macro-tracking rings, reactive forms, standalone components",
      "Spring Boot backend with JWT security and Swagger/OpenAPI docs",
      "Rule-engine-driven nutrition recommendations",
      "AI assistant service for personalized planning, budget assistance and anomaly detection",
    ],
    stack: ["Angular", "Spring Boot", "AI/ML", "MySQL"],
    repo: "#",
  },


  {
    id: "educonnect",
    name: "EduConnect",
    tagline: "AI- and blockchain-powered education management ecosystem.",
    badge: "Most ambitious monorepo",
    year: "2025",
    problem:
      "Students, teachers, and institutions lacked a unified platform for course management, personalized learning, and certificate credentials that are trustworthy and easy to verify.",
    solution:
      "A four-service monorepo: a Flutter mobile client, a Node.js/Express/MongoDB backend for auth and core data, a Python (FastAPI/Flask, Scikit-learn) AI engine for personalized course recommendations, and Solidity/Hardhat smart contracts anchoring certificates on-chain.",
    impact:
      "Gives students personalized course recommendations and tamper-proof, globally verifiable academic certificates, while giving teachers and institutions a shared system for courses, assignments, grades, and resources.",
    highlights: [
      "Flutter (Riverpod, Dio) cross-platform mobile app for iOS/Android/Web",
      "Node.js/Express/MongoDB REST API with JWT authentication",
      "Python AI engine (FastAPI/Flask, Scikit-learn) for personalized course recommendations",
      "Solidity smart contracts (Hardhat) for immutable, blockchain-anchored certification",
      "Dockerized local setup across all four services",
    ],
    stack: ["Flutter", "Express.js", "MongoDB", "Python", "Docker"],
    repo: "https://github.com/mohamedazizsaid/EduuConnect",
  },
];


export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "PHP",
      "C / C++",
      "Dart",
      "SQL",
    ],
  },
  {
    title: "Frontend",
    items: [
      "Angular",
      "React",
      "Vue.js",
      "Next.js",
      "JavaFX",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Spring Cloud",
      "Symfony",
      "Django",
      "Flask",
      "Express.js",
      ".NET",
      "NestJS",
      "REST APIs",
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "SonarQube",
      "Ansible",
      "Nginx",
      "AWS",
      "Azure",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Supabase",
      "TiDB",
      "SQL",
      "NoSQL",
    ],
  },
  {
    title: "Testing & Tools",
    items: [
      "JUnit",
      "Postman",
      "JMeter",
      "Maven",
      "VS Code",
      "IntelliJ IDEA",
      "API Testing",
      "Performance Testing",
      "Figma"
    ],
  },
  {
    title: "Architecture & AI",
    items: [
      "Microservices",
      "MVC",
      "Clean Architecture",
      "Design Patterns",
      "OOP",
      "Agile",
      "Scrum",
      "Machine Learning",
      "AI/ML Integration",
      "AI APIs Integration",
    ],
  },
];


export const education = [
  {
    school: "Private Higher School of Engineering and Technology (ESPRIT)",
    degree: "Bachelor of Software Engineering",
    note: "Expected graduation",
    year: "2027",
  },
  {
    school: "Higher Institute of Technological Studies of Charguia (ISET CH)",
    degree: "Bachelor's Degree in Computer System Development",
    note: "Graduated",
    year: "2024",
  },
  {
    school: "Taha Hussein High School",
    degree: "Baccalauréat — Mathematics",
    note: "Graduated",
    year: "2021",
  },
];

export const languages = [
  { name: "French", level: "Fluent" },
  { name: "English", level: "Fluent" },
  { name: "Arabic", level: "Native" },
];

export const sections = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
