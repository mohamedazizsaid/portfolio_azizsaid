export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  stack: string[];
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
  // Real repository links are unknown — replace "#" with the GitHub URL when available.
  repo: string;
  year: string;
};

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
    stack: ["Angular", "Spring Boot", "MySQL", "WebSocket", "Blockchain","Stripe", "CI/CD & DevOps", "Vercel", "Render"],
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
    stack: ["Angular", "Express.js", "MongoDB","Figma", "Trello"],
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
    badge: "Most complex system architecture",
    year: "2025",
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
    stack: ["Spring Boot", "Angular", "MySQL", "WebSocket", "Blockchain"],
    repo: "#",
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
    id: "quality-detection",
    name: "AI-Powered Product Quality Detection",
    tagline: "Computer vision defect detection on the production line.",
    year: "2024",
    problem:
      "Manual visual inspection let defective products slip through before shipment and scaled poorly with volume.",
    solution:
      "A convolutional model trained with Keras/TensorFlow and served through an OpenCV pipeline that scores frames in real time and flags defects for removal.",
    impact: "Automated real-time quality control, reducing manual inspection error.",
    highlights: [
      "Computer vision model detecting defective products before shipment",
      "Real-time frame scoring pipeline built on OpenCV",
      "Automated quality control, reducing manual inspection error",
    ],
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "AI/ML"],
    repo: "#",
  },
  {
    id: "smart-elearning",
    name: "Smart E-Learning Platform",
    tagline: "Adaptive learning with AI-driven course recommendations.",
    year: "2023",
    problem:
      "Static course catalogs give every student the same path regardless of pace or assessment results.",
    solution:
      "A Symfony backend paired with a JavaFX desktop client where an ML recommender re-ranks courses from assessment signals and surfaces them on a personalized dashboard.",
    impact: "Students receive a path adapted to their measured level rather than a fixed catalog order.",
    highlights: [
      "Adaptive learning with AI-driven course recommendations",
      "Personalized dashboard and student assessment tools",
      "Symfony + JavaFX + MySQL architecture",
    ],
    stack: ["Symfony", "JavaFX", "MySQL", "AI/ML"],
    repo: "#",
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
      "Microservices",
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
