import { n as __toESM } from "../_runtime.mjs";
import { a as useMotionValueEvent, i as useScroll, n as useSpring, r as useTransform, s as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { _ as CodeXml, a as Smartphone, b as ArrowUpRight, c as Moon, d as Linkedin, f as Layers, g as Database, h as Gauge, i as Sparkles, l as Menu, m as Github, n as Workflow, o as ShieldCheck, p as Globe, r as Sun, s as Server, t as X, u as Mail, v as Brain, x as ArrowDown, y as Boxes } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { $ as SiTypescript, A as SiMongodb, B as SiPython, C as SiIntellijidea, D as SiKeras, E as SiJunit5, F as SiOpencv, G as SiSpring, H as SiRender, I as SiPhp, J as SiSymfony, K as SiStripe, L as SiPolygon, M as SiNestjs, N as SiNextdotjs, O as SiKeycloak, P as SiNginx, Q as SiTrello, R as SiPostgresql, S as SiGooglegemini, T as SiJenkins, U as SiSocketdotio, V as SiReact, W as SiSonar, X as SiTensorflow, Y as SiTailwindcss, Z as SiTidb, _ as SiFirebase, a as SiAngular, b as SiGithub, c as SiApachemaven, d as SiDart, et as SiVercel, f as SiDjango, g as SiFigma, h as SiExpress, i as FaJava, j as SiMysql, k as SiKubernetes, l as SiBootstrap, m as SiDotnet, n as VscCode, nt as SiVuedotjs, o as SiAnsible, p as SiDocker, q as SiSupabase, r as FaAws, s as SiApachejmeter, t as VscAzure, tt as SiVite, u as SiCplusplus, v as SiFlask, w as SiJavascript, x as SiGithubactions, y as SiGit, z as SiPostman } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-TCQDqzZA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var formatRepoLabel = (key) => {
	const lower = key.toLowerCase();
	if (lower === "front" || lower === "frontend") return "Frontend";
	if (lower === "back" || lower === "backend") return "Backend";
	if (lower === "mobile" || lower === "mobileapp" || lower === "mobile_app" || lower === "app") return "Mobile";
	if (lower === "client") return "Client";
	if (lower === "server") return "Server";
	if (lower === "api") return "API";
	return key.charAt(0).toUpperCase() + key.slice(1);
};
function getProjectRepos(project) {
	if (Array.isArray(project.repos)) return project.repos.filter((r) => Boolean(r && r.url && r.url !== "#"));
	if (project.repos && typeof project.repos === "object") return Object.entries(project.repos).filter(([_, url]) => Boolean(url && url !== "#")).map(([label, url]) => ({
		label: formatRepoLabel(label),
		url
	}));
	if (project.repo && project.repo !== "#") return [{
		label: "Code",
		url: project.repo
	}];
	return [];
}
function getProjectLiveUrl(project) {
	const p = project;
	const url = p.live || p.prod || p.demo || p.production;
	if (typeof url === "string" && url !== "#" && url.trim() !== "") return url.trim();
	return null;
}
var profile = {
	name: "Mohamed Aziz Said",
	shortName: "MED AZIZ SAID",
	role: "Full-Stack Engineer · AI & DevOps Enthusiast",
	status: "Final-year engineering student · ESPRIT",
	valueProp: "I build production-ready software across the stack — combining full-stack engineering, AI-powered experiences, and DevOps practices to turn ideas into reliable products.",
	about: "I'm a software engineering student at ESPRIT passionate about building modern, reliable, and intelligent applications. I work across Full-Stack development, AI integration, and DevOps, turning ideas into real-world software.",
	email: "azizsaid.it@gmail.com",
	github: "https://github.com/mohamedazizsaid",
	linkedin: "https://www.linkedin.com/in/mohamed-aziz-said-841a3b226",
	resume: "https://drive.google.com/file/d/1im1IpFSciFRmoluKQKmhxAWMtm7ycq1G/view?usp=drive_link",
	location: "Tunis, Tunisia"
};
var experiences = [
	{
		company: "Bee Coders",
		role: "Full-Stack Engineer — Centralized Learning & Internship Platform (9antra-The Bridge)",
		period: "06/2026 – 08/2026",
		location: "Lac I, Tunisie",
		bullets: [
			"Designed and developed a centralized platform for managing training programs, internships and learner progression using Angular, Spring Boot and MySQL.",
			"Implemented secure RBAC, phase-gated workflows, payment validation and real-time notifications to streamline collaboration between learners and trainers.",
			"Integrated automated certificate generation with blockchain anchoring to provide verifiable and tamper-evident credentials."
		],
		stack: [
			"Angular",
			"Spring Boot",
			"MySQL",
			"WebSocket",
			"Blockchain",
			"Stripe",
			"CI/CD & DevOps",
			"Vercel",
			"Render"
		]
	},
	{
		company: "YottaByte",
		role: "Full-Stack Intern — Advanced E-Learning Platform",
		period: "01/2024 – 06/2024",
		location: "Charguia, Tunisie",
		bullets: [
			"Developed an AI-authenticated learning platform using Angular, Express.js and MongoDB.",
			"Integrated intelligent chatbots to assist users and enhance learning interaction.",
			"Delivered a more advanced and responsive platform compared to existing local solutions."
		],
		stack: [
			"Angular",
			"Express.js",
			"MongoDB",
			"Figma",
			"Trello"
		]
	},
	{
		company: "CERT",
		role: "Full-Stack Intern — Advanced Managing Interns Platform",
		period: "01/2023 – 03/2023",
		location: "Technopole Elgazala, Tunisie",
		bullets: [
			"Designed and developed a complete platform for managing interns using Angular, Spring Boot and MySQL.",
			"Implemented features for tracking intern tasks, attendance and performance.",
			"Focused on creating a user-friendly dashboard and secure authentication system."
		],
		stack: [
			"Angular",
			"Spring Boot",
			"MySQL",
			"Git",
			"GitHub"
		]
	},
	{
		company: "Sagemcom",
		role: "Software Development Intern",
		period: "01/2022 – 02/2022",
		location: "Ben Arous, Tunisie",
		bullets: [
			"Joined a professional software development company to observe team workflows and project lifecycles.",
			"Gained exposure to real-world development practices, collaboration and agile methodologies.",
			"Acquired a foundational understanding of teamwork and software project structure."
		],
		stack: [
			"Agile",
			"Teamwork",
			"Productivity"
		]
	}
];
var projects = [
	{
		id: "9antra",
		name: "9antra — The Bridge",
		tagline: "Full-stack LMS for Tunisian vocational training centers.",
		badge: "Most immersive UI/UX",
		year: "2026",
		problem: "Vocational training centers had no single system tying together enrollment, payment confirmation, pedagogical validation and credential issuance.",
		solution: "A modular Spring Boot 3 / Angular 18 platform with phase-gated progression: a learner advances only when both pedagogical validation and payment confirmation are recorded, with certificates anchored on-chain.",
		impact: "Centers issue tamper-evident certificates automatically and track cohort progression in real time instead of via spreadsheets.",
		highlights: [
			"Spring Boot 3 · Angular 18+ · MySQL 8 with JWT + Spring Security RBAC",
			"Phase-gated learning progression (pedagogical validation + payment confirmation)",
			"Blockchain certificate anchoring on Polygon L2 with automatic generation",
			"Real-time notifications over WebSocket (STOMP / SockJS)"
		],
		stack: [
			"Spring Boot",
			"Angular",
			"MySQL",
			"WebSocket",
			"WCAG AA",
			"Blockchain",
			"CI/CD & DevOps",
			"Vercel",
			"Render"
		],
		repos: {
			front: "https://github.com/mohamedazizsaid/9antra_the-Bridge_Frontend",
			back: "https://github.com/mohamedazizsaid/9antra_the-Bridge_Frontend"
		},
		live: "https://9antra-the-bridge-frontend-pdjd-silk.vercel.app"
	},
	{
		id: "deepskyn",
		name: "DeepSkyn",
		tagline: "AI-powered skin analysis platform with accessibility-first design.",
		badge: "Most complex system architecture",
		year: "2026",
		problem: "Users lacked an accessible, trustworthy way to get AI-driven skin analysis with real-time guidance, especially across language and ability barriers.",
		solution: "A React/Vite + NestJS platform with Keycloak auth, PostgreSQL, and Python ML services for skin analysis, wrapped in a dark luxury/biopunk UI with glassmorphism and 3D animations, plus a multi-provider LLM fallback layer for resilience.",
		impact: "Delivers AI skin diagnostics with built-in accessibility (LSF sign language avatar, eye tracking, voice commands) and automated billing/support flows, deployed across web and mobile.",
		highlights: [
			"React/Vite · NestJS · PostgreSQL · Keycloak auth · Python ML services",
			"Accessibility suite: LSF sign language avatar (Mixamo/Three.js), eye tracking, voice commands",
			"Stripe billing, n8n automation, multi-provider LLM fallback (Gemini, Groq, OpenRouter)",
			"React Native/Expo companion app · CI/CD across Render/Vercel/Supabase"
		],
		stack: [
			"React",
			"NestJS",
			"PostgreSQL",
			"Keycloak",
			"Python",
			"React Native",
			"WCAG AA",
			"CI/CD & DevOps",
			"Vercel",
			"Supabase",
			"Azure"
		],
		repos: {
			front: "https://github.com/mohamedazizsaid/DeepSkynFrontEnd_ByDev-Masters",
			back: "https://github.com/MohamedSalimLabbaoui/DeepSkynBackEnd_ByDev-Masters",
			mobile: "https://github.com/mohamedazizsaid/DeepSkynMobile_ByDev-Masters"
		},
		live: "https://deep-skyn-front-end-by-dev-masters.vercel.app"
	},
	{
		id: "formapro",
		name: "FormaPro",
		tagline: "Accessible, AI-powered training management platform built for MaraTech Esprit 2026.",
		badge: "Most accessible platform",
		year: "2026",
		problem: "Vocational training centers needed a single platform to manage the full training lifecycle — from enrollment to certification — while remaining usable for trainers and learners with different accessibility needs.",
		solution: "A NestJS/MongoDB Atlas backend paired with a React/Vite frontend, deployed on Render (API) and Vercel (frontend), supporting three role-based dashboards (Formateur, Responsable Formation, Administrateur), an AI chatbot assistant powered by Gemini 2.5 Flash, and an accessibility suite including eye tracking and Face ID-based attendance, built with the team in 48 hours for MaraTech Esprit 2026.",
		impact: "Automates enrollment, attendance (including facial-recognition check-in), PDF certificate generation, and analytics across roles, while meeting WCAG 2.1 AA accessibility standards with hands-free control options.",
		highlights: [
			"NestJS · MongoDB Atlas · React 18 · Vite · Tailwind CSS · shadcn/ui",
			"Deployed on Render (backend) + Vercel (frontend) with MongoDB Atlas as the managed database",
			"JWT + Google OAuth 2.0 auth with TOTP 2FA (QR code enable/verify/disable)",
			"AI chatbot assistant via Google Gemini 2.5 Flash with persistent chat history",
			"Face ID attendance: facial recognition check-in (face-api.js) alongside eye tracking and eye-blink click controls",
			"Automatic PDF certificate generation (PDFKit), Cloudinary media, multilingual UI (FR/EN/AR/ES)",
			"Global HTTP audit logging and role-based analytics dashboards (Recharts)"
		],
		stack: [
			"NestJS",
			"MongoDB Atlas",
			"React",
			"Vite",
			"TailwindCSS",
			"Gemini AI"
		],
		repos: []
	},
	{
		id: "nutripal",
		name: "NutriPal",
		tagline: "AI-assisted nutrition tracking with rule-engine recommendations.",
		year: "2025",
		problem: "Generic calorie trackers ignore individual constraints and give no reasoning behind their suggestions.",
		solution: "An Angular client with SVG circular macro rings and reactive forms on top of a Spring Boot API where a rule engine drives explainable nutrition recommendations, extended by an AI assistant service for personalized planning.",
		impact: "Users get a daily plan they can act on, with each recommendation traceable to a rule instead of a black box.",
		highlights: [
			"SVG circular macro-tracking rings, reactive forms, standalone components",
			"Spring Boot backend with JWT security and Swagger/OpenAPI docs",
			"Rule-engine-driven nutrition recommendations",
			"AI assistant service for personalized planning, budget assistance and anomaly detection"
		],
		stack: [
			"Angular",
			"Spring Boot",
			"AI/ML",
			"MySQL"
		],
		repo: "#"
	},
	{
		id: "quality-detection",
		name: "AI-Powered Product Quality Detection",
		tagline: "Computer vision defect detection on the production line.",
		year: "2024",
		problem: "Manual visual inspection let defective products slip through before shipment and scaled poorly with volume.",
		solution: "A convolutional model trained with Keras/TensorFlow and served through an OpenCV pipeline that scores frames in real time and flags defects for removal.",
		impact: "Automated real-time quality control, reducing manual inspection error.",
		highlights: [
			"Computer vision model detecting defective products before shipment",
			"Real-time frame scoring pipeline built on OpenCV",
			"Automated quality control, reducing manual inspection error"
		],
		stack: [
			"Python",
			"TensorFlow",
			"Keras",
			"OpenCV",
			"AI/ML"
		],
		repo: "#"
	},
	{
		id: "smart-elearning",
		name: "Smart E-Learning Platform",
		tagline: "Adaptive learning with AI-driven course recommendations.",
		year: "2023",
		problem: "Static course catalogs give every student the same path regardless of pace or assessment results.",
		solution: "A Symfony backend paired with a JavaFX desktop client where an ML recommender re-ranks courses from assessment signals and surfaces them on a personalized dashboard.",
		impact: "Students receive a path adapted to their measured level rather than a fixed catalog order.",
		highlights: [
			"Adaptive learning with AI-driven course recommendations",
			"Personalized dashboard and student assessment tools",
			"Symfony + JavaFX + MySQL architecture"
		],
		stack: [
			"Symfony",
			"JavaFX",
			"MySQL",
			"AI/ML"
		],
		repo: "#"
	}
];
var skillGroups = [
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
			"SQL"
		]
	},
	{
		title: "Frontend",
		items: [
			"Angular",
			"React",
			"Vue.js",
			"Next.js",
			"JavaFX",
			"Bootstrap"
		]
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
			"Microservices"
		]
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
			"Render"
		]
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
			"NoSQL"
		]
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
		]
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
			"AI APIs Integration"
		]
	}
];
var education = [
	{
		school: "Private Higher School of Engineering and Technology (ESPRIT)",
		degree: "Bachelor of Software Engineering",
		note: "Expected graduation",
		year: "2027"
	},
	{
		school: "Higher Institute of Technological Studies of Charguia (ISET CH)",
		degree: "Bachelor's Degree in Computer System Development",
		note: "Graduated",
		year: "2024"
	},
	{
		school: "Taha Hussein High School",
		degree: "Baccalauréat — Mathematics",
		note: "Graduated",
		year: "2021"
	}
];
var languages = [
	{
		name: "French",
		level: "Fluent"
	},
	{
		name: "English",
		level: "Fluent"
	},
	{
		name: "Arabic",
		level: "Native"
	}
];
var sections = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "education",
		label: "Education"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function useTheme() {
	const [dark, setDark] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
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
	return {
		dark,
		toggle
	};
}
function Navbar() {
	const { dark, toggle } = useTheme();
	const { scrollY } = useScroll();
	const [compact, setCompact] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("home");
	useMotionValueEvent(scrollY, "change", (v) => setCompact(v > 80));
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive(e.target.id);
			});
		}, { rootMargin: "-45% 0px -50% 0px" });
		sections.forEach((s) => {
			const el = document.getElementById(s.id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);
	const go = (id) => {
		setOpen(false);
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.nav, {
			animate: {
				width: compact ? "min(100%, 46rem)" : "min(100%, 72rem)",
				backgroundColor: compact ? "var(--surface)" : "transparent",
				borderColor: compact ? "var(--border)" : "transparent",
				paddingTop: compact ? 8 : 14,
				paddingBottom: compact ? 8 : 14
			},
			transition: {
				duration: .4,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "flex items-center justify-between gap-4 rounded-full border px-4 backdrop-blur-xl md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => go("home"),
					className: "font-mono text-sm font-medium tracking-tight text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-signal",
							children: "~/"
						}),
						"aziz",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							animate: { opacity: [
								1,
								0,
								1
							] },
							transition: {
								duration: 1.2,
								repeat: Infinity,
								ease: "linear"
							},
							className: "text-signal",
							children: "_"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-1 md:flex",
					children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => go(s.id),
						className: cn("relative rounded-full px-3 py-1.5 font-mono text-xs tracking-wide transition-colors", active === s.id ? "text-signal" : "text-muted-foreground hover:text-foreground"),
						children: [active === s.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "nav-pill",
							className: "absolute inset-0 rounded-full bg-signal/10",
							transition: {
								duration: .35,
								ease: [
									.16,
									1,
									.3,
									1
								]
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative",
							children: s.label
						})]
					}) }, s.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: toggle,
						"aria-label": dark ? "Switch to light mode" : "Switch to dark mode",
						className: "rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-signal/50 hover:text-signal",
						children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen((o) => !o),
						"aria-label": "Toggle navigation menu",
						"aria-expanded": open,
						className: "rounded-full border border-border p-2 text-muted-foreground md:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -8
			},
			animate: {
				opacity: 1,
				y: 0
			},
			className: "absolute top-20 w-[calc(100%-2rem)] rounded-xl border border-border bg-surface p-2 backdrop-blur-xl md:hidden",
			children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => go(s.id),
				className: "block w-full rounded-lg px-4 py-3 text-left font-mono text-sm text-muted-foreground hover:bg-surface-2 hover:text-signal",
				children: s.label
			}, s.id))
		})]
	});
}
var EASE = [
	.16,
	1,
	.3,
	1
];
var staggerContainer = (stagger = .08, delay = 0) => ({
	hidden: {},
	show: { transition: {
		staggerChildren: stagger,
		delayChildren: delay
	} }
});
var fadeInUp = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .7,
			ease: EASE
		}
	}
};
var slideInLeft = {
	hidden: {
		opacity: 0,
		x: -48
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: .75,
			ease: EASE
		}
	}
};
var slideInRight = {
	hidden: {
		opacity: 0,
		x: 48
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: .75,
			ease: EASE
		}
	}
};
var clipWipe = {
	hidden: {
		clipPath: "inset(0 100% 0 0)",
		opacity: .6
	},
	show: {
		clipPath: "inset(0 0% 0 0)",
		opacity: 1,
		transition: {
			duration: .85,
			ease: EASE
		}
	}
};
var revealWord = {
	hidden: {
		opacity: 0,
		y: "0.6em",
		rotateX: -45
	},
	show: {
		opacity: 1,
		y: 0,
		rotateX: 0,
		transition: {
			duration: .65,
			ease: EASE
		}
	}
};
var chipIn = {
	hidden: {
		opacity: 0,
		y: 10,
		scale: .96
	},
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: .35,
			ease: EASE
		}
	}
};
var viewportOnce = {
	once: false,
	amount: .2
};
var codeLines = [
	"const engineer = {",
	"  focus: [\"full-stack\", \"distributed systems\"],",
	"  now: \"3-month internship @ BEE CODERS\",",
	"  learning: [\"DevOps\", \"cloud\", \"AI\"],",
	"  shipping: true,",
	"};"
];
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	const [pointer, setPointer] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		if (reduce) return;
		const onMove = (e) => {
			setPointer({
				x: (e.clientX / window.innerWidth - .5) * 2,
				y: (e.clientY / window.innerHeight - .5) * 2
			});
		};
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, [reduce]);
	const words = profile.name.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		ref,
		className: "relative min-h-svh overflow-hidden pt-32 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-lines opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				animate: {
					x: pointer.x * -24,
					y: pointer.y * -24
				},
				transition: {
					type: "spring",
					stiffness: 40,
					damping: 20
				},
				className: "pointer-events-none absolute top-[-12rem] left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-signal/12 blur-[140px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y,
					opacity
				},
				className: "relative mx-auto grid w-full max-w-6xl gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: staggerContainer(.09, .15),
					initial: "hidden",
					animate: "show",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeInUp,
							className: "mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-surface/60 px-3 py-1.5 backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex size-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-signal" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[0.7rem] tracking-widest text-muted-foreground uppercase",
								children: profile.status
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-[clamp(2.75rem,8vw,6rem)] leading-[0.92] font-semibold",
							children: words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									initial: { y: "110%" },
									animate: { y: 0 },
									transition: {
										duration: .9,
										delay: .15 + i * .09,
										ease: EASE
									},
									className: i === words.length - 1 ? "block text-signal" : "block",
									children: w
								})
							}, w))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
							variants: fadeInUp,
							className: "mt-6 max-w-xl font-mono text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-signal",
									children: "//"
								}),
								" ",
								profile.role,
								" — ",
								profile.location
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: fadeInUp,
							className: "mt-4 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl",
							children: profile.valueProp
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeInUp,
							className: "mt-10 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
									className: "group inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-3 font-mono text-xs tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5",
									children: ["View Projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: profile.resume,
									className: "inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 font-mono text-xs tracking-widest uppercase transition-colors hover:border-signal hover:text-signal",
									children: "Download Resume"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1 pl-2",
									children: [
										{
											href: profile.github,
											icon: Github,
											label: "GitHub"
										},
										{
											href: profile.linkedin,
											icon: Linkedin,
											label: "LinkedIn"
										},
										{
											href: `mailto:${profile.email}`,
											icon: Mail,
											label: "Email"
										}
									].map(({ href, icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href,
										"aria-label": label,
										target: "_blank",
										rel: "noreferrer",
										className: "rounded-sm border border-transparent p-2.5 text-muted-foreground transition-colors hover:border-border hover:text-signal",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-[18px]" })
									}, label))
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 40
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .9,
						delay: .5,
						ease: EASE
					},
					style: {
						rotateX: pointer.y * -3,
						rotateY: pointer.x * 3
					},
					className: "relative hidden rounded-lg border border-border bg-surface/80 backdrop-blur lg:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 border-b border-border px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-destructive/70" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-amber/80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-signal/80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-3 font-mono text-[0.7rem] text-muted-foreground",
								children: "engineer.ts"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "overflow-x-auto p-5 font-mono text-[0.78rem] leading-7 text-muted-foreground",
						children: codeLines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: -8
							},
							animate: {
								opacity: 1,
								x: 0
							},
							transition: {
								delay: .8 + i * .12,
								duration: .4
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mr-4 inline-block w-4 text-right text-muted-foreground/40",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: i === 0 || i === 4 ? "text-signal" : "text-foreground/80",
								children: line
							})]
						}, line))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: { delay: 1.4 },
				className: "absolute inset-x-0 bottom-8 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: { y: [
						0,
						8,
						0
					] },
					transition: {
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4 text-muted-foreground" })
				})
			})
		]
	});
}
var aziz_default = "/assets/aziz-AdZGcbzS.png";
var stats = [
	{
		value: "4+",
		label: "Internships"
	},
	{
		value: "10+",
		label: "Frameworks shipped"
	},
	{
		value: "2027",
		label: "Eng. graduation"
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative scroll-mt-24 border-y border-border py-24 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-[0.42fr_1fr] md:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: staggerContainer(.1),
				initial: "hidden",
				whileInView: "show",
				viewport: viewportOnce,
				className: "flex flex-col gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: fadeInUp,
					className: "label-mono",
					children: "00 / about"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
					variants: fadeInUp,
					className: "group relative mx-auto w-full max-w-[15rem] md:mx-0 md:max-w-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -top-3 -left-3 hidden h-16 w-16 border-t border-l border-signal/50 md:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -right-3 -bottom-3 hidden h-16 w-16 border-r border-b border-signal/50 md:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-3/4 overflow-hidden rounded-md border border-border bg-surface",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-lines opacity-25" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: aziz_default,
									alt: `${profile.name}, ${profile.role}`,
									loading: "lazy",
									draggable: false,
									className: "absolute inset-0 h-full w-full scale-[1.02] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background/85 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "absolute inset-x-0 bottom-0 flex items-center gap-2 px-4 py-3 font-mono text-[0.65rem] tracking-widest text-muted-foreground uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-signal" }), profile.location]
								})
							]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: staggerContainer(.1),
				initial: "hidden",
				whileInView: "show",
				viewport: viewportOnce,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					variants: clipWipe,
					className: "text-xl leading-relaxed text-foreground md:text-2xl",
					children: profile.about
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.dl, {
					variants: staggerContainer(.08, .2),
					className: "mt-12 grid grid-cols-3 gap-6",
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: fadeInUp,
						className: "border-l border-signal/40 pl-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-display text-3xl font-semibold text-signal md:text-4xl",
							children: s.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-mono text-[0.7rem] tracking-widest text-muted-foreground uppercase",
							children: s.label
						})]
					}, s.label))
				})]
			})]
		})
	});
}
function WordReveal({ text, className, delay = 0, as: _as }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
		className: cn("inline-flex flex-wrap gap-x-[0.28em] gap-y-1", className),
		variants: staggerContainer(.06, delay),
		initial: "hidden",
		whileInView: "show",
		viewport: viewportOnce,
		style: { perspective: 600 },
		children: text.split(" ").map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			variants: revealWord,
			className: "inline-block",
			children: word
		}, `${word}-${i}`))
	});
}
function SectionShell({ id, index, title, kicker, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("relative scroll-mt-24 py-24 md:py-32", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: staggerContainer(.08),
				initial: "hidden",
				whileInView: "show",
				viewport: viewportOnce,
				className: "mb-14 flex flex-col gap-4 md:mb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: fadeInUp,
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "label-mono",
							children: [
								index,
								" / ",
								id
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-3xl text-4xl leading-[1.05] font-semibold md:text-6xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordReveal, { text: title })
					}),
					kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						variants: fadeInUp,
						className: "max-w-2xl text-base text-muted-foreground",
						children: kicker
					}) : null
				]
			}), children]
		})
	});
}
function Chip({ children, tone = "muted" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-sm border px-2.5 py-1 font-mono text-[0.7rem] tracking-wide", tone === "muted" && "border-border bg-surface-2 text-muted-foreground", tone === "signal" && "border-signal/40 bg-signal/10 text-signal", tone === "amber" && "border-amber/40 bg-amber/10 text-amber"),
		children
	});
}
function Experience() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 70%", "end 60%"]
	});
	const scaleY = useSpring(scrollYProgress, {
		stiffness: 90,
		damping: 26,
		restDelta: .001
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionShell, {
		id: "experience",
		index: "01",
		title: "Where I have shipped",
		kicker: "Four internships across e-learning, industrial distribution and embedded-adjacent teams.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			className: "relative pl-8 md:pl-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-2 bottom-2 left-[3px] w-px bg-border md:left-[7px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: { scaleY },
					className: "absolute top-2 bottom-2 left-[3px] w-px origin-top bg-signal md:left-[7px]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ol, {
					variants: staggerContainer(.12),
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						amount: .1
					},
					className: "space-y-14",
					children: experiences.map((exp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
						variants: slideInLeft,
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-2 -left-8 size-2 rounded-full bg-signal ring-4 ring-background md:-left-14 md:size-3.5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-baseline justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-semibold md:text-3xl",
									children: exp.company
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-muted-foreground",
									children: [exp.period, exp.location ? ` · ${exp.location}` : ""]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-mono text-sm text-signal",
								children: exp.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
								variants: staggerContainer(.06, .1),
								className: "mt-4 space-y-2",
								children: exp.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
									variants: fadeInUp,
									className: "flex gap-3 text-sm leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60" }), b]
								}, b))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: exp.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { children: s }, s))
							})
						]
					}, exp.company + exp.period))
				})
			]
		})
	});
}
function getSkillIcon(name) {
	return {
		Java: {
			icon: FaJava,
			color: "#ED8B00"
		},
		Python: {
			icon: SiPython,
			color: "#3776AB"
		},
		JavaScript: {
			icon: SiJavascript,
			color: "#F7DF1E"
		},
		TypeScript: {
			icon: SiTypescript,
			color: "#3178C6"
		},
		PHP: {
			icon: SiPhp,
			color: "#777BB4"
		},
		"C / C++": {
			icon: SiCplusplus,
			color: "#00599C"
		},
		Dart: {
			icon: SiDart,
			color: "#0175C2"
		},
		SQL: {
			icon: Database,
			color: "#00BCF2"
		},
		Angular: {
			icon: SiAngular,
			color: "#DD0031"
		},
		React: {
			icon: SiReact,
			color: "#61DAFB"
		},
		"Vue.js": {
			icon: SiVuedotjs,
			color: "#4FC08D"
		},
		"Next.js": {
			icon: SiNextdotjs,
			color: "#FFFFFF"
		},
		JavaFX: {
			icon: FaJava,
			color: "#ED8B00"
		},
		Bootstrap: {
			icon: SiBootstrap,
			color: "#7952B3"
		},
		"Spring Boot": {
			icon: SiSpring,
			color: "#6DB33F"
		},
		"Spring Cloud": {
			icon: SiSpring,
			color: "#6DB33F"
		},
		Symfony: {
			icon: SiSymfony,
			color: "#FFFFFF"
		},
		Django: {
			icon: SiDjango,
			color: "#092E20"
		},
		Flask: {
			icon: SiFlask,
			color: "#E2E8F0"
		},
		"Express.js": {
			icon: SiExpress,
			color: "#FFFFFF"
		},
		".NET": {
			icon: SiDotnet,
			color: "#512BD4"
		},
		NestJS: {
			icon: SiNestjs,
			color: "#E0234E"
		},
		"REST APIs": {
			icon: Server,
			color: "#10B981"
		},
		Microservices: {
			icon: Boxes,
			color: "#F59E0B"
		},
		Git: {
			icon: SiGit,
			color: "#F05032"
		},
		GitHub: {
			icon: SiGithub,
			color: "#FFFFFF"
		},
		Docker: {
			icon: SiDocker,
			color: "#2496ED"
		},
		Jenkins: {
			icon: SiJenkins,
			color: "#D33833"
		},
		Kubernetes: {
			icon: SiKubernetes,
			color: "#326CE5"
		},
		SonarQube: {
			icon: SiSonar,
			color: "#4C9BD6"
		},
		Ansible: {
			icon: SiAnsible,
			color: "#EE0000"
		},
		Nginx: {
			icon: SiNginx,
			color: "#009639"
		},
		AWS: {
			icon: FaAws,
			color: "#FF9900"
		},
		Azure: {
			icon: VscAzure,
			color: "#0089D6"
		},
		Vercel: {
			icon: SiVercel,
			color: "#FFFFFF"
		},
		Render: {
			icon: SiRender,
			color: "#46E3B7"
		},
		MySQL: {
			icon: SiMysql,
			color: "#4479A1"
		},
		PostgreSQL: {
			icon: SiPostgresql,
			color: "#336791"
		},
		MongoDB: {
			icon: SiMongodb,
			color: "#47A248"
		},
		Firebase: {
			icon: SiFirebase,
			color: "#FFCA28"
		},
		Supabase: {
			icon: SiSupabase,
			color: "#3ECF8E"
		},
		TiDB: {
			icon: SiTidb,
			color: "#E30C34"
		},
		NoSQL: {
			icon: Database,
			color: "#10B981"
		},
		JUnit: {
			icon: SiJunit5,
			color: "#25A162"
		},
		Postman: {
			icon: SiPostman,
			color: "#FF6C37"
		},
		JMeter: {
			icon: SiApachejmeter,
			color: "#D22128"
		},
		Maven: {
			icon: SiApachemaven,
			color: "#C71A36"
		},
		"VS Code": {
			icon: VscCode,
			color: "#007ACC"
		},
		"IntelliJ IDEA": {
			icon: SiIntellijidea,
			color: "#FE315D"
		},
		Figma: {
			icon: SiFigma,
			color: "#F24E1E"
		},
		"API Testing": {
			icon: ShieldCheck,
			color: "#10B981"
		},
		"Performance Testing": {
			icon: Gauge,
			color: "#F59E0B"
		},
		MVC: {
			icon: Layers,
			color: "#94A3B8"
		},
		"Clean Architecture": {
			icon: Layers,
			color: "#38BDF8"
		},
		"Design Patterns": {
			icon: Boxes,
			color: "#A78BFA"
		},
		OOP: {
			icon: CodeXml,
			color: "#F59E0B"
		},
		Agile: {
			icon: Workflow,
			color: "#10B981"
		},
		Scrum: {
			icon: Workflow,
			color: "#10B981"
		},
		"Machine Learning": {
			icon: Brain,
			color: "#EC4899"
		},
		"AI/ML Integration": {
			icon: Sparkles,
			color: "#A855F7"
		},
		"AI APIs Integration": {
			icon: Sparkles,
			color: "#A855F7"
		},
		"AI/ML": {
			icon: Sparkles,
			color: "#A855F7"
		},
		WebSocket: {
			icon: SiSocketdotio,
			color: "#010101"
		},
		Blockchain: {
			icon: SiPolygon,
			color: "#8247E5"
		},
		"CI/CD & DevOps": {
			icon: SiGithubactions,
			color: "#2088FF"
		},
		Keycloak: {
			icon: SiKeycloak,
			color: "#0088CE"
		},
		"React Native": {
			icon: SiReact,
			color: "#61DAFB"
		},
		"WCAG AA": {
			icon: ShieldCheck,
			color: "#10B981"
		},
		"MongoDB Atlas": {
			icon: SiMongodb,
			color: "#47A248"
		},
		Vite: {
			icon: SiVite,
			color: "#646CFF"
		},
		TailwindCSS: {
			icon: SiTailwindcss,
			color: "#06B6D4"
		},
		"Tailwind CSS": {
			icon: SiTailwindcss,
			color: "#06B6D4"
		},
		"Gemini AI": {
			icon: SiGooglegemini,
			color: "#8E75FF"
		},
		TensorFlow: {
			icon: SiTensorflow,
			color: "#FF6F00"
		},
		Keras: {
			icon: SiKeras,
			color: "#D00000"
		},
		OpenCV: {
			icon: SiOpencv,
			color: "#5C3EE8"
		},
		Stripe: {
			icon: SiStripe,
			color: "#635BFF"
		},
		Trello: {
			icon: SiTrello,
			color: "#0052CC"
		}
	}[name] ?? {
		icon: CodeXml,
		color: "#94A3B8"
	};
}
function getRepoIcon(label) {
	const l = label.toLowerCase();
	if (l.includes("mobile") || l.includes("app")) return Smartphone;
	return Github;
}
var allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.stack)))];
function Projects() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const visible = (0, import_react.useMemo)(() => filter === "All" ? projects : projects.filter((p) => p.stack.includes(filter)), [filter]);
	const open = projects.find((p) => p.id === openId) ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionShell, {
		id: "projects",
		index: "02",
		title: "Systems I designed and built",
		kicker: "Four builds, from a blockchain-anchored LMS to a computer-vision quality gate. Select one for problem, solution and impact.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: staggerContainer(.04),
				initial: "hidden",
				whileInView: "show",
				viewport: viewportOnce,
				className: "mb-10 flex flex-wrap gap-2",
				children: allTags.map((tag) => {
					const iconInfo = tag !== "All" ? getSkillIcon(tag) : null;
					const Icon = iconInfo?.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						variants: fadeInUp,
						onClick: () => setFilter(tag),
						className: cn("inline-flex items-center gap-1.5 rounded-sm border px-3 py-1.5 font-mono text-[0.7rem] tracking-wide transition-colors", filter === tag ? "border-signal bg-signal/10 text-signal" : "border-border text-muted-foreground hover:border-signal/50 hover:text-foreground"),
						children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-3 shrink-0",
							style: { color: filter === tag ? "currentColor" : iconInfo?.color },
							"aria-hidden": true
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tag })]
					}, tag);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				layout: true,
				className: "grid gap-6 md:grid-cols-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "popLayout",
					children: visible.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
						project: p,
						onOpen: () => setOpenId(p.id)
					}, p.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectModal, {
				project: open,
				onClose: () => setOpenId(null)
			})
		]
	});
}
function ProjectCard({ project, onOpen }) {
	const repos = getProjectRepos(project);
	const liveUrl = getProjectLiveUrl(project);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		layout: true,
		initial: {
			opacity: 0,
			y: 24
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .96
		},
		transition: {
			duration: .45,
			ease: EASE
		},
		whileHover: { y: -6 },
		className: "group relative overflow-hidden rounded-lg border border-border bg-surface/60 p-6 backdrop-blur transition-colors hover:border-signal/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 size-56 rounded-full bg-signal/15 blur-3xl" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[0.7rem] text-muted-foreground",
						children: project.year
					}), project.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						tone: "amber",
						children: project.badge
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-5 font-display text-2xl font-semibold",
					children: project.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: project.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-1.5",
					children: project.highlights.slice(0, 3).map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2 font-mono text-[0.72rem] leading-5 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-signal",
							children: "›"
						}), h]
					}, h))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: project.stack.map((s) => {
						const { icon: Icon, color } = getSkillIcon(s);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							style: { "--stack-color": color },
							className: "group/chip inline-flex items-center gap-1.5 rounded-sm border border-border bg-surface-2/70 px-2.5 py-1 font-mono text-[0.7rem] tracking-wide text-foreground/80 transition-all duration-200 hover:border-[--stack-color] hover:text-[--stack-color] hover:bg-[--stack-color]/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-3.5 shrink-0 opacity-70 transition-opacity duration-200 group-hover/chip:opacity-100",
								style: { color: color ?? "currentColor" },
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s })]
						}, s);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-wrap items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onOpen,
							className: "inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-signal uppercase hover:underline",
							children: ["Case study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
						}),
						liveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: liveUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-signal uppercase hover:text-signal/80 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5" }), " Live"]
						}),
						repos.map((r) => {
							const Icon = getRepoIcon(r.label);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: r.url,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-muted-foreground uppercase hover:text-foreground transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }),
									" ",
									r.label
								]
							}, r.label + r.url);
						})
					]
				})
			]
		})]
	});
}
function ProjectModal({ project, onClose }) {
	const repos = project ? getProjectRepos(project) : [];
	const liveUrl = project ? getProjectLiveUrl(project) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: project ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[60] flex items-end justify-center bg-background/80 p-0 backdrop-blur-sm md:items-center md:p-6",
		onClick: onClose,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": project.name,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				y: 40,
				opacity: 0
			},
			animate: {
				y: 0,
				opacity: 1
			},
			exit: {
				y: 30,
				opacity: 0
			},
			transition: {
				duration: .4,
				ease: EASE
			},
			onClick: (e) => e.stopPropagation(),
			className: "max-h-[88svh] w-full max-w-3xl overflow-y-auto rounded-t-xl border border-border bg-surface p-8 md:rounded-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "label-mono",
					children: ["case study / ", project.year]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 font-display text-3xl font-semibold",
					children: project.name
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						liveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: liveUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1.5 rounded-sm border border-signal/40 bg-signal/10 px-3 py-1.5 font-mono text-xs text-signal transition-colors hover:bg-signal/20 hover:border-signal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Live Demo" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" })
							]
						}),
						repos.map((r) => {
							const Icon = getRepoIcon(r.label);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: r.url,
								target: "_blank",
								rel: "noreferrer",
								className: "hidden sm:inline-flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-signal/50 hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.label })]
							}, r.label + r.url);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onClose,
							autoFocus: true,
							"aria-label": "Close case study",
							className: "rounded-sm border border-border p-2 text-muted-foreground hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-6",
				children: [
					[
						{
							k: "Problem",
							v: project.problem
						},
						{
							k: "Solution",
							v: project.solution
						},
						{
							k: "Impact",
							v: project.impact
						}
					].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 md:grid-cols-[8rem_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-mono pt-1",
							children: row.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-foreground/85",
							children: row.v
						})]
					}, row.k)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 md:grid-cols-[8rem_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-mono pt-1",
							children: "Details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: project.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 font-mono text-[0.75rem] leading-5 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-signal",
									children: "›"
								}), h]
							}, h))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 md:grid-cols-[8rem_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-mono pt-1",
							children: "Stack"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: project.stack.map((s) => {
								const { icon: Icon, color } = getSkillIcon(s);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: { "--stack-color": color },
									className: "group/chip inline-flex items-center gap-1.5 rounded-sm border border-border bg-surface-2/70 px-2.5 py-1 font-mono text-[0.7rem] tracking-wide text-foreground/80 transition-all duration-200 hover:border-[--stack-color] hover:text-[--stack-color] hover:bg-[--stack-color]/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-3.5 shrink-0 opacity-70 transition-opacity duration-200 group-hover/chip:opacity-100",
										style: { color: color ?? "currentColor" },
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s })]
								}, s);
							})
						})]
					}),
					liveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 md:grid-cols-[8rem_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-mono pt-1",
							children: "Production"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: liveUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-sm border border-signal/40 bg-signal/10 px-3 py-1.5 font-mono text-xs text-signal transition-colors hover:bg-signal/20 hover:border-signal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: liveUrl }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" })
							]
						}) })]
					}),
					repos.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 md:grid-cols-[8rem_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-mono pt-1",
							children: repos.length > 1 ? "Repositories" : "Repository"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2.5",
							children: repos.map((r) => {
								const Icon = getRepoIcon(r.label);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: r.url,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 rounded-sm border border-border bg-surface/80 px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-signal/60 hover:text-signal",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.label }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3 text-muted-foreground" })
									]
								}, r.label + r.url);
							})
						})]
					})
				]
			})]
		})
	}) : null });
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionShell, {
		id: "skills",
		index: "03",
		title: "Toolchain",
		kicker: "Grouped by role in the stack, not by an arbitrary percentage.",
		className: "border-y border-border bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-x-12 gap-y-12 md:grid-cols-2",
			children: skillGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: staggerContainer(.035),
				initial: "hidden",
				whileInView: "show",
				viewport: viewportOnce,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h3, {
					variants: fadeInUp,
					className: "mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-foreground uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-signal" }), group.title]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: group.items.map((item) => {
						const { icon: Icon, color } = getSkillIcon(item);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { "--skill-color": color },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
								variants: chipIn,
								whileHover: {
									y: -3,
									scale: 1.04
								},
								className: "group inline-flex items-center gap-2 rounded-sm border border-border bg-background px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all duration-200 hover:border-[--skill-color] hover:text-[--skill-color] hover:bg-[--skill-color]/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-3.5 shrink-0 opacity-60 transition-opacity duration-200 group-hover:opacity-100",
									style: { color: color ?? "currentColor" },
									"aria-hidden": true
								}), item]
							})
						}, item);
					})
				})]
			}, group.title))
		})
	});
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionShell, {
		id: "education",
		index: "04",
		title: "Education & languages",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-16 md:grid-cols-[1.4fr_0.6fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
				variants: staggerContainer(.1),
				initial: "hidden",
				whileInView: "show",
				viewport: viewportOnce,
				className: "divide-y divide-border border-t border-border",
				children: education.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					variants: fadeInUp,
					className: "group grid gap-2 py-7 md:grid-cols-[1fr_6rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold transition-colors group-hover:text-signal md:text-2xl",
						children: e.degree
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: e.school
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left md:text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-signal",
							children: e.year
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[0.68rem] tracking-wider text-muted-foreground uppercase",
							children: e.note
						})]
					})]
				}, e.school))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: staggerContainer(.08),
				initial: "hidden",
				whileInView: "show",
				viewport: viewportOnce,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h3, {
					variants: slideInRight,
					className: "label-mono mb-5",
					children: "Languages"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-3",
					children: languages.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: chipIn,
						className: "flex items-center justify-between rounded-sm border border-border bg-surface/60 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-base font-medium",
							children: l.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[0.7rem] tracking-widest text-signal uppercase",
							children: l.level
						})]
					}, l.name))
				})]
			})]
		})
	});
}
function Contact() {
	const [sending, setSending] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		setSending(true);
		const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
		const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
		window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
		setTimeout(() => {
			setSending(false);
			toast.success("Opening your mail client…");
			form.reset();
		}, 600);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative scroll-mt-24 overflow-hidden border-t border-border py-24 md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-lines opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-signal/10 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid w-full max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-mono",
						children: "05 / contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-5xl leading-[0.95] font-semibold md:text-7xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordReveal, { text: "Let's build something." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: staggerContainer(.08),
						initial: "hidden",
						whileInView: "show",
						viewport: viewportOnce,
						className: "mt-10 flex flex-col gap-3",
						children: [
							{
								icon: Mail,
								label: profile.email,
								href: `mailto:${profile.email}`
							},
							{
								icon: Github,
								label: "GitHub",
								href: profile.github
							},
							{
								icon: Linkedin,
								label: "LinkedIn",
								href: profile.linkedin
							}
						].map(({ icon: Icon, label, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							variants: fadeInUp,
							href,
							target: href.startsWith("mailto") ? void 0 : "_blank",
							rel: "noreferrer",
							className: "group inline-flex w-fit items-center gap-3 font-mono text-sm text-muted-foreground transition-colors hover:text-signal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "border-b border-transparent pb-0.5 transition-colors group-hover:border-signal",
								children: label
							})]
						}, label))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
					onSubmit,
					variants: staggerContainer(.07),
					initial: "hidden",
					whileInView: "show",
					viewport: viewportOnce,
					className: "rounded-lg border border-border bg-surface/70 p-6 backdrop-blur md:p-8",
					children: [
						[{
							name: "name",
							label: "Name",
							type: "text"
						}, {
							name: "email",
							label: "Email",
							type: "email"
						}].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeInUp,
							className: "mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: f.name,
								className: "label-mono mb-2 block",
								children: f.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: f.name,
								name: f.name,
								type: f.type,
								required: true,
								className: "w-full rounded-sm border border-border bg-background px-4 py-3 font-mono text-sm outline-hidden transition-colors focus:border-signal"
							})]
						}, f.name)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeInUp,
							className: "mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "message",
								className: "label-mono mb-2 block",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "message",
								name: "message",
								rows: 4,
								required: true,
								className: "w-full resize-none rounded-sm border border-border bg-background px-4 py-3 font-mono text-sm outline-hidden transition-colors focus:border-signal"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
							variants: fadeInUp,
							type: "submit",
							disabled: sending,
							className: "w-full rounded-sm bg-signal px-5 py-3 font-mono text-xs tracking-widest text-primary-foreground uppercase transition-transform hover:-translate-y-0.5 disabled:opacity-60",
							children: sending ? "Sending…" : "Send message"
						})
					]
				})]
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative border-t border-border py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			"aria-hidden": true,
			initial: { scaleX: 0 },
			whileInView: { scaleX: 1 },
			viewport: { once: true },
			transition: {
				duration: 1.2,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "absolute top-0 left-0 h-px w-full origin-left bg-linear-to-r from-signal via-signal/30 to-transparent"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-[0.7rem] tracking-wider text-muted-foreground md:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				profile.name
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1",
				children: ["Designed & built in Tunis", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					animate: { opacity: [
						1,
						0,
						1
					] },
					transition: {
						duration: 1.1,
						repeat: Infinity,
						ease: "linear"
					},
					className: "text-signal",
					children: "▌"
				})]
			})]
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		]
	});
}
//#endregion
export { Index as component };
