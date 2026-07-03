# Project Charter

| Field | Value |
|-------|-------|
| Version | 1.1 |
| Owner | Project Owner |
| Created | 2026-07-04 |
| Last Updated | 2026-07-04 |

## 1. Project Overview

### Project Name

Game Designer Portfolio

### Purpose

This project exists to design, build, and maintain a professional portfolio website that presents the owner's work, thinking, and qualifications as a game designer to hiring teams at target game studios. The portfolio is both a showcase of past design work and a demonstration of the owner's ability to plan, structure, and execute a polished digital product.

### Background

Game design roles are evaluated not only on creative ideas but on the candidate's ability to communicate systems, content, and analytical thinking clearly. A static resume or slide deck is insufficient to convey the depth of system design, content design, and game analysis skills expected by competitive studios. This project addresses that gap by providing an interactive, well-structured, and maintainable web portfolio purpose-built for game design hiring processes.

### Target Audience

- Recruiters and HR staff performing initial screening.
- Lead and senior game designers evaluating design thinking and craft.
- Hiring managers comparing candidates for system or content design roles.
- Internal stakeholders (the owner) using the site as a living record of design work.

## 2. Project Philosophy

This portfolio is not intended to be a collection of documents.

It is designed as a product.

Every interaction should communicate the author's design thinking, attention to detail, and ability to solve problems through structured design.

The portfolio itself is treated as a living software product rather than a static website.

## 3. Goals

| # | Goal | Measure of Success |
|---|------|---------------------|
| 1 | Present a complete, professional portfolio | All required sections (Home, About, Projects, Analysis, Personal Works, Resume, Contact) are published and content-complete |
| 2 | Secure interviews at target companies | At least 1 interview invitation from one of the five target companies within the first 6 months of active applications |
| 3 | Demonstrate system design competency | At least 3 in-depth system design case studies published |
| 4 | Demonstrate content design competency | At least 2 in-depth content design case studies published |
| 5 | Demonstrate analytical rigor | At least 2 published game analysis/teardown documents referencing target companies' products or genres |
| 6 | Deliver a high-quality user experience | Core Web Vitals in the "Good" range on production; no critical accessibility violations |
| 7 | Maintain a sustainable content pipeline | New case study or analysis added at a defined cadence (e.g., at least once per month) without breaking existing structure |
| 8 | Keep the codebase maintainable long-term | Documentation kept current with every structural change; no undocumented architectural decisions |

## 4. Project Scope

### In Scope

- Portfolio Website
- Project Showcase
- PDF Viewer
- Search & Filtering
- Responsive Design
- Accessibility
- SEO
- AI-assisted development workflow

### Out of Scope

- CMS
- User Authentication
- Backend APIs
- Database
- Admin Dashboard

## 5. Target Companies

| Company | Notes |
|---------|-------|
| Nexon | Large-scale live-service and mobile/PC game publisher |
| DevCAT | Internal studio known for narrative-driven, systems-heavy titles |
| Devsisters | Mobile-first studio with strong content and IP-driven design |
| Supercent | Hyper-casual and casual mobile game publisher |
| 111Percent | Mobile game developer known for narrative and simulation genres |

The portfolio content, tone, and case study selection should be curated with these companies' genres, audiences, and design philosophies in mind.

## 6. Target Positions

- **Game System Designer** — focus on mechanics, balancing, progression, economy, and systemic interactions.
- **Game Content Designer** — focus on level design, narrative content, quest/mission design, and player-facing content pipelines.

The portfolio must clearly demonstrate competency for both positions, since the two roles emphasize different (though overlapping) skill sets.

## 7. Technology Stack

| Layer | Technology |
|-------|------------|
| Web Framework | Next.js |
| UI Library | React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| AI Development Assistant | Claude Code |
| Version Control / Hosting | GitHub |
| Editor | VS Code |
| AI Tooling Integration | MCP (Model Context Protocol) |

This stack was selected to balance modern web development best practices with an efficient, AI-assisted development workflow.

## 8. Development Principles

| Principle | Description |
|-----------|--------------|
| Documentation First | No significant work begins without corresponding documentation; documentation is the source of truth for scope and decisions. |
| JSON First | Content and structured data are modeled and authored before being bound to presentation, ensuring content can evolve independently of UI. |
| Component First | Functionality and presentation are designed as reusable, composable units rather than one-off implementations. |
| UX First | Decisions prioritize the experience of the person reviewing the portfolio (recruiters, designers) over developer convenience. |
| Maintainability | The project must remain understandable and modifiable by the owner months or years later without relearning it from scratch. |
| Scalability | The structure must accommodate a growing number of projects, case studies, and analyses without requiring redesign. |
| Accessibility | The portfolio must be usable by people with disabilities and must meet recognized accessibility standards. |

## 9. Portfolio Structure

| Section | Purpose |
|---------|---------|
| Home | First impression; summarizes who the owner is and highlights key work. |
| About | Background, philosophy, skills, and career narrative. |
| Projects | Detailed case studies of game design projects, organized by system or content focus. |
| Analysis | Game analysis and teardown write-ups demonstrating analytical and critical design thinking. |
| Personal Works | Independent or side projects not tied to formal employment or coursework. |
| Resume | Formal, downloadable/viewable summary of experience, education, and skills. |
| Contact | Ways for recruiters and studios to reach the owner. |

## 10. Definition of Done

The project is considered complete for a given release when all of the following conditions are met:

- All sections listed in the Portfolio Structure are implemented and populated with real content (no placeholder or lorem ipsum text).
- All documentation in `docs/` is up to date and accurately reflects the current state of the project.
- The site is deployed and publicly accessible at a stable production URL.
- The site has been reviewed for accessibility, performance, and cross-browser/cross-device compatibility.
- All known critical and high-priority issues have been resolved.
- Content has been proofread for grammar, clarity, and professional tone.
- The Resume and Contact sections are verified accurate and current.
- The owner has reviewed and approved the final result against the goals defined in Section 3.

## 11. Success Criteria

The portfolio will be considered successful if it achieves the following outcomes:

- It generates interview opportunities at one or more of the target companies or comparable studios.
- Reviewers (recruiters and designers) can understand the owner's design thinking and craft within a few minutes of browsing.
- The site clearly differentiates the owner's skill set for both System Designer and Content Designer roles.
- The portfolio remains easy to update and extend as new projects and analyses are produced.
- The site reflects a level of polish, clarity, and structure consistent with the quality bar expected at the target companies.
- The owner can confidently reference the portfolio as an accurate, current representation of their design capabilities at any point in time.
