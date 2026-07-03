# Data Model

This document defines every JSON data model used by the Game Designer Portfolio. It describes structures conceptually — field names, meaning, and relationships — not implementation code. It should be read alongside `docs/PROJECT.md` (goals and scope), `CLAUDE.md` (working rules), and `docs/ARCHITECTURE.md` (how data flows into components and pages).

## 1. Purpose

Per the **JSON First** principle established in the project charter and architecture, all portfolio content — projects, analyses, resume facts, contact details, navigation — is defined as structured data rather than embedded in components or pages.

This matters for a portfolio specifically because:

- The owner must be able to add, edit, or retire content (a new case study, an updated resume entry) without touching UI code.
- Content changes should never risk introducing UI bugs, and UI changes should never risk altering content.
- A hiring reviewer's experience depends on consistent presentation across many content items; consistency is only guaranteed if every item conforms to the same defined shape.
- The site's long-term maintainability depends on the owner (or any future contributor) being able to reason about "what content exists" independently of "how it's displayed."

Every JSON file described in this document is a contract: components render whatever conforms to it, and nothing else.

## 2. Design Principles

- **JSON First** — Content is authored and structured as data before any UI is built to display it. If a piece of content doesn't yet have a defined shape here, it is not ready to be wired into a component.
- **Separation of Content and UI** — Data files describe *what* content is; they contain no styling, layout, or presentation instructions. Components decide *how* content appears.
- **Scalability** — Adding a new project, analysis, or skill is a matter of adding a new entry to an existing file, not modifying schema or code. The models must accommodate growth in volume without redesign.
- **Maintainability** — Every model favors explicit, self-describing fields over clever or overloaded ones, so the schema remains understandable without cross-referencing code.
- **Reusability** — Where content overlaps across pages (e.g., a skill referenced by both a project and the resume, a company referenced by both the charter's target list and a project's relevance tag), models reference shared entities by identifier rather than duplicating data.

## 3. Data Directory

All portfolio content lives under `data/`, one file per content domain:

| File | Responsibility |
|------|-----------------|
| `profile.json` | The owner's core identity: name, title, tagline, short bio, and summary content used primarily on Home and About. |
| `resume.json` | The structured, formal record of experience, education, and qualifications, used to render and export the Resume page. |
| `projects.json` | The collection of game design case studies shown on the Projects page and linked from Home. |
| `analysis.json` | The collection of game analysis and teardown write-ups shown on the Analysis page. |
| `personal.json` | The collection of independent or side works shown on the Personal Works page. |
| `skills.json` | The canonical list of skills and skill categories referenced by projects, analyses, and the resume. |
| `companies.json` | The canonical list of target companies (per `docs/PROJECT.md` Section 5), referenced for relevance tagging and any company-oriented views. |
| `navigation.json` | The structure of global and footer navigation, consumed by the site's layout. |
| `settings.json` | Site-wide, non-content configuration: site title, default SEO metadata, social/contact links, and similar global values. |

Each file is independently maintainable: editing `projects.json` never requires touching `skills.json`, even though projects reference skills by identifier.

## 4. Common Rules

The following fields recur across models and carry consistent meaning wherever they appear:

| Field | Meaning |
|-------|---------|
| `id` | A stable, unique identifier for the entry within its file. Never reused, never repurposed, and never used for display. |
| `slug` | A URL-safe, human-readable identifier used for routing (e.g., a project's detail page path). Unique within its content type. |
| `title` | The primary display name of the entry. |
| `description` | A short, plain-language summary of the entry, suitable for previews, cards, and metadata. |
| `createdAt` | The date the entry was authored, in ISO 8601 date format. |
| `updatedAt` | The date the entry was last substantively revised, in ISO 8601 date format. |
| `featured` | A boolean flag indicating the entry should be prioritized in summary views (e.g., Home highlights). |
| `tags` | A list of keywords used for filtering, search, and cross-referencing (e.g., skills, genres, companies). |
| `status` | The publication state of the entry (e.g., published, draft, archived), used to control visibility without deleting content. |
| `order` | An explicit sort position used where content must appear in a curated order rather than by date. |

Naming conventions:

- Field names use `camelCase` throughout.
- `slug` values use lowercase `kebab-case`.
- Dates are always ISO 8601 (`YYYY-MM-DD`); no locale-specific date formats.
- Boolean fields are named as affirmative predicates (`featured`, not `isNotFeatured`).
- Identifiers referencing another model's entry are named `<model>Id` (e.g., `skillId`) or, for lists, `<model>Ids`.
- Every content-bearing file's entries include at minimum `id`, `slug`, `title`, and `status`, even if a given content type has no immediate use for the others.

## 5. Project Model

Represents a single game design case study shown on the Projects page.

| Field | Description |
|-------|--------------|
| `id` | Unique identifier for the project. |
| `slug` | URL-safe identifier used for the project's detail page route. |
| `title` | The project's display name. |
| `subtitle` | A short supporting line clarifying the project's focus or context (e.g., role or genre framing). |
| `thumbnail` | Reference to the image asset used in list and card views. |
| `cover` | Reference to the larger hero image asset used on the project's detail page. |
| `role` | The owner's role on the project (e.g., System Designer, Content Designer), matching the Target Positions defined in `docs/PROJECT.md`. |
| `genre` | The genre(s) of the game the project relates to. |
| `platform` | The platform(s) the project targeted (e.g., mobile, PC, console). |
| `period` | The timeframe during which the work was done. |
| `team` | A description of the team context (e.g., team size or composition) relevant to the project. |
| `contribution` | A concise statement of the owner's specific, personal contribution, distinct from the team's overall output. |
| `overview` | A short narrative summary of the project as a whole, used as an introduction on the detail page. |
| `problem` | The design problem or challenge the project addressed. |
| `solution` | The approach or design solution the owner developed. |
| `result` | The outcome or impact of the work, including any measurable or observed effects. |
| `systems` | A description of the systems designed or affected (relevant primarily for System Designer-focused case studies). |
| `contents` | A description of the content designed or affected (relevant primarily for Content Designer-focused case studies). |
| `skills` | A list of skill identifiers (referencing `skills.json`) demonstrated by the project. |
| `tags` | Keywords for filtering and cross-referencing, which may include genre, platform, or company relevance. |
| `gallery` | A list of supporting image asset references illustrating the project. |
| `pdf` | An optional reference to a supporting PDF document (e.g., a detailed design document) for the project. |
| `featured` | Whether the project should be prioritized in summary views such as Home. |

`systems` and `contents` are described separately because the charter requires the portfolio to demonstrate both System Designer and Content Designer competency; a single project may populate one or both, depending on its focus.

## 6. Analysis Model

Represents a single game analysis or teardown write-up shown on the Analysis page.

An analysis entry is conceptually similar to a project but oriented around critique of an external game rather than the owner's own design work. It includes:

- Identification and routing fields consistent with the Common Rules (`id`, `slug`, `title`, `status`, `tags`, `featured`, `createdAt`, `updatedAt`).
- A **subject** describing the game, feature, or system being analyzed, and, where relevant, the studio or genre context.
- A **focus** describing the analytical lens applied (e.g., a specific system, a content pattern, a monetization mechanic).
- A **summary** giving a short, high-level takeaway of the analysis.
- A **body** representing the structured written content of the analysis (organized into logical sections rather than a single unstructured block, so the UI can render consistent headings and layout across all analyses).
- Optional **references** to the relevant target companies (via `companies.json`) or skills (via `skills.json`) the analysis relates to.
- Optional supporting media (`thumbnail`, `gallery`) and an optional `pdf` reference, consistent with the Project Model.

The Analysis Model deliberately mirrors the Project Model's supporting fields (media, tags, skills) so that both content types can share list, card, and detail-view components.

## 7. Resume Model

Represents the structured content backing the Resume page and any exportable resume document.

The resume is organized as a small set of distinct sections rather than a single flat record:

- **Basic information** — name, title/headline, contact summary, and a link to a downloadable resume asset.
- **Summary** — a short professional summary statement.
- **Experience** — an ordered list of roles, each describing an organization, title, period, and a summary of responsibilities or achievements relevant to game design.
- **Education** — an ordered list of academic or training entries, each with an institution, credential, and period.
- **Skills reference** — a reference into `skills.json` rather than a duplicated list, ensuring the resume and the rest of the site draw on the same canonical skill definitions.
- **Certifications or additional qualifications** — an optional ordered list of relevant credentials.

The Resume Model does not duplicate content already captured elsewhere (e.g., project details); it references or summarizes rather than restates.

## 8. Skill Model

Represents the canonical catalog of skills referenced throughout the site.

Each entry defines:

- `id` — a unique, stable identifier used by other models to reference the skill.
- `name` — the display name of the skill.
- `category` — the grouping the skill belongs to (e.g., System Design, Content Design, Tools & Technical, Analysis), aligned with the Target Positions in `docs/PROJECT.md`.
- `description` — an optional short clarification of what the skill covers, used where the name alone may be ambiguous.

Skills are defined once and referenced by identifier from `projects.json`, `analysis.json`, and `resume.json`, ensuring consistent naming and enabling skill-based filtering across content types.

## 9. Company Model

Represents the target companies identified in `docs/PROJECT.md` Section 5, used to keep content curated toward relevant audiences and to support any company-oriented views described in `docs/ARCHITECTURE.md`.

Each entry defines:

- `id` — a unique, stable identifier used by other models to reference the company.
- `name` — the company's display name.
- `notes` — a short description of the company's focus or design philosophy, consistent with the notes captured in the charter.
- `relevantTags` — an optional list of tags (genres, platforms, skills) that characterize what kind of content is most relevant to this company, supporting future filtering or curated views.

This model does not include recruiting, application, or contact-tracking data; it exists to inform content relevance, not to manage a hiring process.

## 10. Navigation Model

Represents the structure of the site's global and footer navigation, consumed by the layout described in `docs/ARCHITECTURE.md`.

Each navigation entry defines:

- `id` — a unique identifier for the navigation item.
- `label` — the display text shown to visitors.
- `path` — the route or URL the item links to.
- `group` — which navigation area the item belongs to (global or footer).
- `order` — the position of the item within its group.
- `external` — a boolean indicating whether the link leaves the site (e.g., a social profile), used to inform link presentation and behavior.

The Navigation Model is intentionally flat and simple: the site's information architecture is shallow by design, and navigation data should not need to express deep nesting.

## 11. Future Expansion

New content types are added by introducing a new file under `data/` with its own model definition in this document, following the same Common Rules and naming conventions already established. Existing models are not modified to accommodate unrelated new content; a new content type earns its own file and schema.

Where a new content type overlaps conceptually with an existing one (for example, a future content type that, like Analysis, needs structured body sections and media), it should reuse the same field names and structural patterns already defined here, so shared components can serve multiple content types without special-casing.

Extending an existing model (e.g., adding a new optional field to the Project Model) is preferred over introducing a parallel, near-duplicate model. Any such extension must be reflected in this document at the same time it is introduced.

### Data Modeling Guidelines for Future Contributors

- Never add a field to satisfy a single, one-off piece of content; if a field is truly one-off, it likely belongs in a more specific model or should be reconsidered.
- Always update this document in the same change that introduces or modifies a model — this document is the schema's source of truth.
- Reference shared entities (skills, companies) by identifier; never copy their data inline into another model.
- Keep every model's field set explicit and self-describing; avoid overloading a single field to mean different things in different contexts.
- Favor extending an existing model over creating a near-duplicate one, and favor a new model over overloading an existing one with unrelated content.
- Do not introduce fields that encode presentation or layout decisions; those belong to components, not data.
