# Portfolio Architecture

This document defines the overall software architecture of the Game Designer Portfolio website. It describes structure and relationships, not implementation details. It should be read alongside `docs/PROJECT.md` (goals, scope, principles) and `CLAUDE.md` (working rules); this document explains how those principles translate into a concrete system shape.

## 1. Purpose

The architecture exists to serve the goals defined in `docs/PROJECT.md`: a polished, professional, accessible portfolio that clearly demonstrates System Designer and Content Designer competency, and that remains maintainable and extensible by its owner over months and years without a rewrite.

Concretely, the architecture is designed to:

- Keep content (what is said) separate from presentation (how it looks), per the **JSON First** principle.
- Make adding a new project, case study, or analysis a content change, not a code change.
- Keep the UI built from small, composable, reusable parts, per the **Component First** principle.
- Keep documentation and structure traceable to each other, per **Documentation First**.
- Support long-term growth (more content, more sections, more depth) without structural rework, per **Scalability**.

## 2. High-Level Architecture

The system is a statically-generated content site with five conceptual layers:

```
Documentation  →  describes intent and structure (docs/, prompts/)
      ↓
JSON Data      →  holds the actual content (data/)
      ↓
UI Components  →  render content into interface (components/, features/)
      ↓
Pages          →  compose components into full views (app/)
      ↓
Assets         →  support pages and components (images, PDFs, icons)
```

- **Documentation** governs what is allowed to exist and why. Every other layer should be explainable by reference to it.
- **JSON Data** is the single source of truth for portfolio content: projects, analyses, resume facts, contact details. It contains no presentation logic.
- **UI Components** are presentation-only. They accept content as input and render it; they do not define or own content.
- **Pages** assemble components into the top-level routes a visitor navigates to. Pages decide *which* content and components appear together, not how either is implemented.
- **Assets** (images, PDFs, icons, fonts) are referenced by data or components but are not authored as code.

Information flows in one direction: documentation constrains data, data feeds components, components are composed into pages, and pages draw on assets. Presentation layers never invent content; they only render what data provides.

## 3. Information Architecture (IA)

The site has seven top-level pages, matching the Portfolio Structure defined in `docs/PROJECT.md`:

| Page | Purpose |
|------|---------|
| **Home** | First impression. Summarizes who the owner is and surfaces the strongest work to pull visitors deeper into the site. |
| **About** | Background, design philosophy, skills, and career narrative — the "who" behind the work. |
| **Projects** | Case studies of game design work, organized by system or content focus, demonstrating design process and craft. |
| **Analysis** | Game analysis and teardown write-ups demonstrating analytical and critical design thinking. |
| **Personal Works** | Independent or side projects not tied to formal employment or coursework. |
| **Resume** | A formal, viewable/downloadable summary of experience, education, and skills. |
| **Contact** | Ways for recruiters and studios to reach the owner. |

Each page is a distinct route and a distinct content domain. A page may aggregate multiple content items (e.g., Projects lists many case studies) or present a single structured document (e.g., Resume).

## 4. Navigation Structure

- **Global Navigation** — A persistent primary navigation (header) linking to all seven top-level pages. It is the main way visitors move between sections and must be visible from every page.
- **Footer Navigation** — A secondary, lightweight navigation surfacing supporting links (e.g., Contact, Resume, external profiles such as LinkedIn or GitHub) and any legal/meta information. It supplements, and does not duplicate the purpose of, the global navigation.
- **Breadcrumbs** — Used only where content is nested more than one level deep (e.g., an individual case study under Projects, or an individual write-up under Analysis), to orient the visitor within that section. Top-level pages do not require breadcrumbs.

Navigation is intentionally shallow: recruiters and designers should reach any core section within one or two clicks from any page.

## 5. Data Flow

Rendered pages are a direct projection of JSON data through components:

```
data/            structured content: projects, analyses, resume, contact, site metadata
  ↓
components/      presentation units that accept typed content and render markup
  ↓
app/ (pages)     routes that select the relevant data and compose components into a view
```

A page does not contain content; it declares which data to load and which components render it. A component does not contain content; it declares what shape of data it expects and how to present it. This separation means:

- A new project or analysis is added by adding a data entry, not by writing new page or component code.
- Changing how case studies are displayed is a component change that automatically applies to all existing content.
- Content authors and UI authors can work independently, per the JSON First principle.

## 6. Folder Responsibilities

| Folder | Responsibility |
|--------|-----------------|
| `app/` | Route definitions and page-level composition. Decides which sections and components appear on each route; contains no reusable presentation logic of its own. |
| `components/` | Reusable, presentation-only UI building blocks shared across pages (e.g., cards, buttons, layout primitives). |
| `features/` | Larger, self-contained groupings of components and logic tied to a specific portfolio capability (e.g., the case study viewer, the PDF viewer, search/filtering). Composed from `components/`, not a replacement for it. |
| `layouts/` | Structural shells (e.g., page frame, header/footer arrangement) that wrap page content consistently across routes. |
| `assets/` | Static, non-code resources: images, icons, fonts, and other media referenced by components or data. |
| `styles/` | Global and shared styling concerns that sit above individual component styling (e.g., Tailwind configuration, design tokens, base styles). |
| `hooks/` | Reusable, cross-cutting UI behavior (e.g., responsive breakpoints, filtering state) shared across components or features. |
| `utils/` | Small, pure, generic helper functions with no dependency on content or UI concerns. |
| `lib/` | Integration and infrastructure code (e.g., data loading, PDF handling) that supports the app but is not itself UI. |
| `types/` | Shared TypeScript type and schema definitions describing the shape of content and cross-cutting interfaces. |
| `data/` | The portfolio's content: JSON (or typed data modules) describing projects, analyses, personal works, resume, and contact information. |
| `docs/` | Project documentation: charter, architecture, data model, design system, roadmap, and process guides. Source of truth for scope and decisions. |
| `prompts/` | Role-specific instructions used to direct AI-assisted work (planning, frontend implementation, design review, etc.). |

Each folder has exactly one responsibility. Content lives only in `data/`; presentation lives only in `components/`, `features/`, and `layouts/`; routing/composition lives only in `app/`.

## 7. Component Architecture

Components are organized as a composition hierarchy:

```
Layout
  ↓
Section
  ↓
Feature
  ↓
Reusable Component
```

- **Layout** — The outer shell shared across pages (e.g., header, footer, page frame).
- **Section** — A distinct block within a page (e.g., "Featured Projects" on Home, "Case Study Summary" on a Projects detail view).
- **Feature** — A self-contained capability used within a section (e.g., a PDF viewer, a filterable project list, a search bar).
- **Reusable Component** — The smallest presentation units (e.g., a button, a tag, a card), used across many features and sections.

Composition is preferred over one-off construction because it directly supports the project's core principles: reusable components mean visual and behavioral consistency across a growing site (**Scalability**), changes to a shared component propagate everywhere it's used (**Maintainability**), and each layer can be reasoned about independently (**Component First**). It also keeps the UI decoupled from content, since higher layers assemble lower layers rather than embedding content-specific logic within them.

## 8. Design Philosophy

The architecture directly supports the charter's development principles:

- **Maintainability** — Strict separation of content, presentation, and routing means a future engineer (including the owner, returning after months away) can locate and change any concern in one place.
- **Scalability** — New content extends `data/`; new presentation needs extend `components/` or `features/`; neither requires restructuring the other.
- **Documentation-First Development** — Structural decisions live in `docs/`, so the architecture never depends on tribal knowledge.
- **Reusable UI** — The Layout → Section → Feature → Reusable Component hierarchy ensures new pages are assembled from existing parts by default, not built from scratch.
- **Long-Term Portfolio Growth** — Because content and presentation evolve independently, the portfolio can grow in volume (more case studies, more analyses) and in depth (richer content types) without outgrowing its structure.

## 9. Future Expansion

The architecture anticipates growth along several dimensions without requiring restructuring:

- **More projects and analyses** — New entries are added to `data/`; existing list and detail components render them automatically.
- **PDFs** — Additional PDFs (resume versions, case study appendices) are added under `assets/` (or a dedicated PDF asset location) and referenced from data; the PDF viewing feature does not change per document.
- **Tags and filters** — Tagging is a data attribute on content entries; filtering is a feature built once against the data shape and reused wherever filterable lists appear (Projects, Analysis, Personal Works).
- **Company-specific views** — A curated view for a specific target company (e.g., a landing page emphasizing case studies relevant to one studio) can be composed from existing sections and components, selecting a subset of existing data rather than introducing new content types.

In each case, growth is accommodated by adding data or composing existing components — not by changing the boundaries between layers defined in this document.

## 10. Out of Scope

The following are intentionally excluded from this architecture, consistent with `docs/PROJECT.md`:

- Backend services or APIs
- User authentication
- A content management system (CMS)
- An admin dashboard
- A database

The site is a statically-generated, content-as-data application. Any future requirement that appears to need one of the above must be raised as a scope change against `docs/PROJECT.md` before it is designed.

## Summary

The portfolio is architected as a strict, one-directional pipeline: documentation constrains data, data feeds a composable component hierarchy, and pages assemble that hierarchy into seven well-defined top-level routes. Content and presentation never mix, and every folder has a single, non-overlapping responsibility. This structure lets the portfolio grow in content and capability over time while remaining understandable, consistent, and maintainable by a single owner.
