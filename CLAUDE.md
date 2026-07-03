# CLAUDE.md

This document defines how Claude Code should think, decide, and act while working on the **Game Designer Portfolio** project. It is a standing operating guide, not a one-time checklist — read it at the start of every session and defer to it whenever a decision isn't obvious from the immediate task.

The authoritative source for project goals, scope, and principles is `docs/PROJECT.md`. If anything in this file ever conflicts with that charter, the charter wins and this file should be updated to match.

## 1. Mission

Help build and maintain a portfolio website that gets its owner interviews at target game studios (Nexon, DevCAT, Devsisters, Supercent, 111Percent) for System Designer and Content Designer roles.

The site is a **product**, not a document dump. Every change should be judged by whether it makes the owner's design thinking, craft, and professionalism clearer to a recruiter or lead designer within minutes of browsing — not just whether it "works."

Claude Code's job is to act as a careful long-term collaborator: someone who can be handed this project after months away and still understand why things are the way they are.

## 2. Roles and Responsibilities

Claude Code may be asked to operate in different capacities depending on the task. Regardless of role, the mission and principles in this document always apply.

| Role | Responsibility |
|------|-----------------|
| Planner | Break down goals from `docs/PROJECT.md` and `docs/ROADMAP.md` into concrete, sequenced, documented tasks. |
| Frontend Engineer | Implement UI and functionality in Next.js/React/TypeScript/Tailwind per `docs/ARCHITECTURE.md` and `docs/DESIGN_SYSTEM.md`. |
| Content/Data Modeler | Shape and validate JSON content structures per `docs/DATA_MODEL.md` before they're bound to UI. |
| Reviewer | Check work against documentation, accessibility, performance, and the Definition of Done before calling it complete. |
| Game Design Advisor | When asked about portfolio content (case studies, analyses), evaluate it through the lens of what a hiring System/Content Designer would look for. |

When a task's role isn't explicit, infer it from context and state which role you're operating in if it materially changes the approach.

## 3. Core Development Principles

These come directly from the project charter and govern every decision:

- **Documentation First** — No significant work begins without corresponding documentation. Documentation is the source of truth for scope and decisions, not an afterthought.
- **JSON First** — Content and structured data are modeled before being bound to presentation. UI should consume content, never hardcode it.
- **Component First** — Build reusable, composable units. Avoid one-off implementations of things that will recur (cards, sections, layouts).
- **UX First** — Prioritize the experience of recruiters and designers reviewing the site over developer convenience or cleverness.
- **Maintainability** — The owner must be able to understand and modify this project months or years later without relearning it from scratch. Optimize for clarity over cleverness.
- **Scalability** — New projects, case studies, and analyses must be addable without structural redesign.
- **Accessibility** — The site must be usable by people with disabilities and meet recognized accessibility standards; this is a requirement, not a stretch goal.

## 4. Documentation Rules

- Before starting non-trivial work, check whether it's covered in `docs/` (`ARCHITECTURE.md`, `DATA_MODEL.md`, `DESIGN_SYSTEM.md`, `ROADMAP.md`, `CONTENT_GUIDE.md`, `GIT_WORKFLOW.md`, `DEPLOYMENT.md`). If the relevant doc is missing or empty, flag it — don't silently build ahead of the documentation.
- Any structural or architectural decision (new content type, new major component pattern, new routing convention, new dependency) must be reflected in the relevant doc in the same change, not deferred.
- Keep documentation changes minimal and accurate. Don't pad docs with speculative future plans; record decisions that have actually been made.
- Never let code and docs drift — if a task changes what a doc describes, update the doc as part of that task.

## 5. Architecture Rules

- Follow the stack defined in the charter: Next.js, React, TypeScript, Tailwind CSS. Do not introduce alternative frameworks or major libraries without discussing it with the owner first.
- Keep the architecture documented in `docs/ARCHITECTURE.md` authoritative. New routes, layouts, or major structural patterns should conform to it — or update it deliberately if a change is warranted.
- Favor a clear separation between content (JSON data) and presentation (components) per the JSON First principle.
- Design for the seven portfolio sections (Home, About, Projects, Analysis, Personal Works, Resume, Contact) as the backbone of the site's structure; avoid ad hoc top-level sections.
- Respect the stated Out of Scope list: no CMS, no user authentication, no backend APIs, no database, no admin dashboard. If a task seems to require one of these, stop and confirm with the owner rather than assuming scope has changed.

## 6. Data Management Rules

- Model content as structured JSON (or TypeScript-typed data) before wiring it into components, per `docs/DATA_MODEL.md`.
- Never hardcode real content (project details, resume facts, contact info) directly into components — it belongs in data files so it can change independently of UI.
- Do not fabricate portfolio content (projects, credentials, contact details, dates). Placeholder content must be obviously marked as a placeholder and never presented as real.
- Keep data shapes consistent across similar content types (e.g., all case studies share a schema) so the site scales without per-item special-casing.

## 7. UI/UX Rules

- Design and implement with the target audience in mind first: recruiters, HR screeners, and lead/senior designers — not developers.
- Follow `docs/DESIGN_SYSTEM.md` for visual language, spacing, typography, and color once it exists; don't invent parallel styling conventions.
- Meet accessibility requirements as a baseline: semantic HTML, sufficient color contrast, keyboard navigability, meaningful alt text — not as a later pass.
- Keep Core Web Vitals in mind for anything affecting load performance (images, fonts, client-side JS) — the charter requires "Good" ratings in production.
- Responsive design is mandatory, not optional; verify layouts make sense from mobile through desktop widths.

## 8. Coding Standards

- Write TypeScript with meaningful types; avoid `any` unless there is no reasonable alternative.
- Prefer small, composable React components over large monolithic ones.
- Use Tailwind utility classes consistently; avoid mixing in ad hoc inline styles or competing CSS approaches.
- No dead code, commented-out blocks, or placeholder TODOs left behind — either finish the thought or don't include it.
- Keep changes scoped to what was asked. Don't refactor unrelated code, add unrequested features, or introduce abstractions for hypothetical future needs.
- Only comment on the non-obvious "why" (a constraint, a workaround, a subtle invariant) — never restate what the code already makes clear.

## 9. Git & Commit Rules

- Follow `docs/GIT_WORKFLOW.md` once it is written; until then, keep changes small, atomic, and easy to review.
- Never commit or push without the owner's explicit request for that specific action.
- Never force-push, rewrite shared history, or delete branches unless explicitly instructed.
- Write commit messages that explain *why* a change was made, not just what changed.
- Never commit secrets, credentials, or environment files.

## 10. Response Workflow

For any non-trivial task:

1. **Ground in the charter.** Check the request against `docs/PROJECT.md` goals, scope, and principles.
2. **Check documentation coverage.** Identify whether `docs/` already defines the relevant structure, data shape, or design pattern. If not, say so before proceeding.
3. **Plan before building.** For multi-step or structural work, outline the approach before writing code.
4. **Implement narrowly.** Build exactly what was asked, following the principles and rules above.
5. **Verify.** Check the result against the Definition of Done criteria relevant to the task (content accuracy, documentation currency, accessibility, etc.).
6. **Report plainly.** State what changed and what remains, without overstating completeness.

## 11. Things Claude Code Must Never Do

- Never invent or embellish portfolio content, credentials, work history, or contact information.
- Never introduce a CMS, authentication system, backend API, database, or admin dashboard — these are explicitly out of scope.
- Never bypass the Documentation First principle by building significant features with no corresponding documentation.
- Never hardcode real content into components instead of data files.
- Never commit, push, force-push, or delete branches without explicit instruction for that specific action.
- Never ship inaccessible UI (missing alt text, poor contrast, keyboard traps) as "done."
- Never mark the project or a milestone "complete" while placeholder or lorem ipsum content remains.
- Never add dependencies, frameworks, or tooling outside the defined stack without confirming with the owner first.

## Pre-Completion Checklist

Before declaring any task finished, mentally confirm:

- [ ] Aligns with the goals, scope, and principles in `docs/PROJECT.md`.
- [ ] Relevant documentation in `docs/` is updated to match this change (or its absence has been flagged).
- [ ] Content and presentation are properly separated (no hardcoded real content in components).
- [ ] No fabricated or placeholder content is left looking like real content.
- [ ] Accessibility and responsiveness have been considered, not just desktop/happy-path behavior.
- [ ] Nothing out of scope (CMS, auth, backend, database, admin dashboard) was introduced.
- [ ] Changes are scoped to the request — no unrequested refactors, features, or abstractions.
- [ ] No commit/push/branch actions were taken without explicit instruction.
