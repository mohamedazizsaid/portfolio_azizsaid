# Mohamed Aziz Said - Software Engineer Portfolio

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=111)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=fff)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=fff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=fff)

Personal portfolio for **Mohamed Aziz Said**, a full-stack software engineer and software engineering student at ESPRIT. The website presents professional experience, selected engineering projects, technical skills, education, and contact information through a polished, responsive, systems-inspired interface.

## Overview

This portfolio is built to communicate both engineering capability and product thinking. It highlights full-stack systems across learning platforms, inventory management, AI-assisted nutrition, computer vision, and blockchain-backed certification.

Key portfolio goals:

- Present a strong software engineering profile for recruiters, collaborators, and internship or job opportunities.
- Showcase project case studies with clear problem, solution, impact, and stack details.
- Provide a fast, responsive, modern web experience with polished motion and accessible UI patterns.
- Keep content centralized so profile data, projects, experience, skills, and education are easy to update.

## Live Sections

- **Hero** - concise introduction, role, location, resume link, and social/contact actions.
- **About** - professional summary and engineering focus.
- **Experience** - internship and work history across RoyalTyre, MyEdTech, CERT, and Sagemcom.
- **Projects** - featured project cards with stack filters and case-study modals.
- **Skills** - grouped technical skills across languages, frameworks, tools, databases, and architecture.
- **Education** - academic background and graduation timeline.
- **Contact** - direct contact entry points.

## Featured Projects

| Project | Focus | Stack |
| --- | --- | --- |
| 9antra - The Bridge | Full-stack LMS with gated progression, JWT/RBAC, WebSocket notifications, and blockchain certificate anchoring | Spring Boot, Angular, MySQL, WebSocket, Blockchain |
| NutriPal | AI-assisted nutrition tracking with rule-engine recommendations | Angular, Spring Boot, AI/ML, MySQL |
| AI-Powered Product Quality Detection | Computer vision defect detection for production-line quality control | Python, TensorFlow, Keras, OpenCV |
| Smart E-Learning Platform | Adaptive learning with AI-driven course recommendations | Symfony, JavaFX, MySQL, AI/ML |

## Tech Stack

**Frontend**

- React 19
- TypeScript
- Vite
- TanStack Router
- Tailwind CSS 4
- Motion
- Radix UI primitives
- Lucide React icons

**Tooling**

- ESLint
- Prettier
- Bun and npm lockfiles included
- Vite TypeScript path aliases

## Project Structure

```text
src/
  assets/                 Static assets used by the portfolio
  components/
    portfolio/            Portfolio-specific sections and UI primitives
    ui/                   Reusable Radix-based UI components
  data/
    portfolio.ts          Central source for profile, projects, skills, education, and links
  hooks/                  Shared React hooks
  lib/                    Utilities, motion presets, and error helpers
  routes/                 TanStack Router route definitions
  styles.css              Global theme, design tokens, and Tailwind setup
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm or Bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will run locally through Vite. Open the URL printed in the terminal, usually `http://localhost:5173`.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Vite development server |
| `npm run build` | Build the portfolio for production |
| `npm run build:dev` | Build with development mode settings |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |
| `npm run format` | Format the codebase with Prettier |

## Customization

Most portfolio content is managed in [`src/data/portfolio.ts`](src/data/portfolio.ts):

- Update `profile` for name, role, value proposition, email, resume, GitHub, LinkedIn, and location.
- Update `experiences` to change professional history.
- Update `projects` to add or refine case studies.
- Update `skillGroups`, `education`, and `languages` to keep the profile current.

Recommended next updates before publishing:

- Replace placeholder GitHub and LinkedIn links with real profile URLs.
- Add a resume PDF to `public/` and update `profile.resume`.
- Replace project `repo: "#"` placeholders with live repository links when available.
- Add deployment metadata once the portfolio is hosted.

## Engineering Notes

- The interface uses a dark, terminal-inspired design system with signal-green and amber accents.
- Project cards support filtering by technology and open detailed case-study dialogs.
- Motion effects respect reduced-motion preferences where implemented.
- Metadata for SEO and social sharing is configured in `src/routes/index.tsx`.

## Contact

**Mohamed Aziz Said**  
Full-Stack Software Engineer  
Tunis, Tunisia  
Email: [MohamedAziz.Said@esprit.tn](mailto:MohamedAziz.Said@esprit.tn)

---

Built with React, TypeScript, Vite, and Tailwind CSS.
