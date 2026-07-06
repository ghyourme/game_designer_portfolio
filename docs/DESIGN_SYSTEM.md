# Design System

This document defines the visual language, UX principles, design tokens, and reusable UI component standards for the Game Designer Portfolio. It describes design philosophy and conceptual rules, not implementation code or concrete values. It should be read alongside `docs/PROJECT.md` (goals and audience), `CLAUDE.md` (working rules), `docs/ARCHITECTURE.md` (structural composition), and `docs/DATA_MODEL.md` (what content exists to be designed for).

## 1. Purpose

The design system exists so that every page, section, and component looks and behaves as though it belongs to a single, coherent product — not a collection of independently styled pages. This directly supports the charter's **Maintainability** and **Scalability** principles: as new projects, analyses, and sections are added over months or years, they should inherit consistent visual and interaction patterns automatically, rather than requiring each new piece of content to be styled from scratch.

A shared design system also protects the portfolio's core purpose. Per `docs/PROJECT.md`, the site is judged on the owner's ability to "plan, structure, and execute a polished digital product" — visual inconsistency undermines that claim regardless of how strong the underlying content is.

## 2. Design Principles

- **Clarity over Decoration** — Visual choices exist to make content easier to understand, not to impress on their own. If a decorative element doesn't aid comprehension or credibility, it doesn't belong.
- **Content First** — Layout and styling are designed to serve the content defined in `docs/DATA_MODEL.md` (projects, analyses, resume), not the other way around. The design system must never constrain what content can say.
- **Consistency** — The same kind of element (a heading, a card, a tag) looks and behaves the same way everywhere it appears, so recruiters build an accurate mental model of the site quickly and never have to re-learn a pattern.
- **Accessibility** — The interface must be usable by people with disabilities as a baseline requirement, not an enhancement, per `docs/PROJECT.md` and `CLAUDE.md`.
- **Responsive Design** — The experience must remain coherent and complete from mobile through desktop, since recruiters and designers may review the site on any device.
- **Visual Hierarchy** — Layout, scale, and emphasis should always make the most important information (who the candidate is, their strongest work) the easiest thing to notice first.
- **Progressive Disclosure** — Summary views show only what's needed to decide whether to go deeper (a project card, a resume highlight); full depth (a complete case study, a full analysis) is revealed only when the visitor chooses to go there. This keeps first impressions fast and depth available without overwhelming either audience.

## 3. UX Principles for Recruiters

The primary audience, per `docs/PROJECT.md`, is recruiters and hiring managers performing an initial screen, followed by lead/senior designers evaluating depth. The interface must be designed so that, within the first few minutes of browsing, a visitor can understand:

- **Who the candidate is** — communicated immediately on Home and reinforced on About, without requiring the visitor to hunt for it.
- **Target role** — made explicit early (System Designer, Content Designer, or both), so a recruiter can immediately judge fit against an open position.
- **Core strengths** — summarized at a glance (e.g., a skills overview or highlighted competencies) before a visitor commits to reading a full case study.
- **Featured projects** — surfaced prominently on Home per the `featured` flag defined in `docs/DATA_MODEL.md`, so the strongest work is never buried behind navigation.
- **Design process** — visible through the structure of case studies themselves (problem, approach, result, as defined in the Project Model), so a reviewer can assess design thinking without reading unstructured prose.

Every layout decision should be evaluated against a simple test: could a recruiter, skimming for two minutes, walk away with an accurate impression of the candidate and their fit? Depth exists for the reviewers who go further, but it must never be a prerequisite for a first impression.

## 4. Design Tokens

Design tokens are the named, reusable design decisions that every component draws from, ensuring visual consistency without hardcoding values into individual components. This section defines their purpose conceptually; concrete values belong to implementation, not this document.

- **Colors** — A constrained palette expressing brand identity, content hierarchy (primary vs. secondary text, backgrounds, borders), and state (success, warning, error, focus). Colors exist to support legibility and hierarchy first, and personality second.
- **Typography** — A defined type scale distinguishing headings, body text, and supporting text, plus a limited set of weights. Typography is the primary tool for visual hierarchy and must remain highly legible across all screen sizes.
- **Spacing** — A consistent spacing scale used for padding, margins, and gaps, so rhythm and density feel intentional and identical patterns (e.g., card padding) don't drift across components.
- **Border Radius** — A small set of corner-rounding values applied consistently to similar element types (cards, buttons, inputs), reinforcing a coherent visual "shape language" across the interface.
- **Shadows** — A limited set of elevation levels used to indicate stacking or interactive affordance (e.g., a raised card, a modal above content), applied sparingly so elevation remains meaningful.
- **Iconography** — A single icon style (weight, geometry) used throughout, so icons read as one family rather than mixed styles from different sources.
- **Breakpoints** — A defined set of viewport thresholds that govern how layout adapts from mobile to desktop, ensuring responsive behavior is predictable and consistent across components rather than defined ad hoc per component.
- **Motion** — A restrained set of animation/transition behaviors (e.g., how a hover state transitions, how a modal appears) used to reinforce feedback and continuity, never as decoration for its own sake.

## 5. Layout System

- **Maximum Content Width** — Page content is constrained to a maximum reading width so that text and layouts remain comfortable and intentional on large screens, rather than stretching content edge-to-edge.
- **Grid Philosophy** — A consistent, column-based grid underlies page and section layout, ensuring alignment between elements is predictable and that new sections can be composed without inventing new layout logic.
- **Section Spacing** — Vertical rhythm between sections follows the spacing scale consistently, so the site feels evenly paced rather than cramped in some areas and sparse in others.
- **Responsive Behavior** — Layouts are designed mobile-first: content and hierarchy are established for the smallest viewport, then progressively enhanced (additional columns, larger imagery) as space allows, rather than designed for desktop and compressed down.

## 6. Component Library

Each entry below defines a component's responsibility and intended usage, consistent with the Component Architecture in `docs/ARCHITECTURE.md` (Reusable Component → Feature → Section → Layout).

- **Button** — Triggers a primary action or navigation (e.g., "View Project," "Download Resume"). Usage should distinguish primary, secondary, and tertiary emphasis so visitors always know the most important action on a screen.
- **Card** — Summarizes a single content item (a project, an analysis, a personal work) in a compact, scannable form for use in lists and grids, per Progressive Disclosure.
- **Tag** — Represents a keyword or classification (skill, genre, platform) associated with content, used for quick scanning and as an entry point into filtering.
- **Badge** — Highlights a short status or distinction (e.g., "Featured," "Case Study") drawing brief attention without competing with primary content.
- **Navigation** — The global navigation bar defined in `docs/ARCHITECTURE.md`, providing consistent, persistent access to all top-level pages.
- **Footer** — The secondary navigation and supporting information area (contact links, resume access, meta information), present consistently across all pages.
- **Section** — A structural wrapper providing consistent spacing, width, and heading treatment for a distinct block of content within a page.
- **Hero** — The introductory block at the top of a page (most prominently Home), responsible for immediate first-impression communication of identity and focus.
- **Timeline** — Presents chronological information (e.g., experience history, a project's design process) in a structured, sequential visual form.
- **Accordion** — Progressively discloses supplementary detail (e.g., extended explanation within a case study) without consuming space until the visitor chooses to expand it.
- **Modal** — Presents focused, temporary content (e.g., an enlarged gallery image) above the page without navigating away from it.
- **Search Bar** — Allows visitors to locate content directly by keyword across projects and analyses.
- **Filter** — Allows visitors to narrow visible content by attributes such as skill, role, or tag, consistent with the tagging structure defined in `docs/DATA_MODEL.md`.
- **Document Preview Card** — Represents a linked document (e.g., a design document, a resume; PDF, PPT, DOCX, Markdown, or a Notion export, per `docs/DATA_MODEL.md` §5.6 `ProjectDocumentType`) with enough visual context (title, thumbnail) to set expectations before opening it, supporting the PDF Viewer feature described in `docs/ROADMAP.md` §7.

### 6.1 Project Detail Components

These components exist specifically to render `docs/DATA_MODEL.md` §5's Project fields on the Project Detail page (`docs/INFORMATION_ARCHITECTURE.md` §2.4). Each has exactly one responsibility, so no two components compete to render the same data.

| Component | Purpose | Responsibility | Reuse Scope |
|-----------|---------|-----------------|-------------|
| **ProjectHero** | Project Detail's top header block | Displays project metadata (title, subtitle, role, genre, platform, period, team, tags, featured badge) and external links (via ExternalLinks) only. Owns no body-section content. | Project Detail only — the project-specific instance of the general Hero pattern above |
| **ProjectSection** | Structural wrapper for each of the 9 official sections | Provides title, spacing, and width only. Holds no knowledge of what content it wraps — content is passed in as children. Reused 9 times per page. | Project Detail only |
| **SystemsSection** | Content renderer for "6. 시스템 설계" | Renders the `systems` array (name, purpose, playerExperience, structure, flow, data, exceptionHandling, expectedEffect) and delegates each `documents` entry to Document Preview Card. Does not implement its own layout chrome (that's ProjectSection's job) or document preview rendering (that's Document Preview Card's job). | Project Detail only |
| **FeaturesSection** | Content renderer for "7. 핵심 기능" | Renders the `features` array (name, description) and delegates `gallery` to Gallery. Does not implement image display or enlargement itself. | Project Detail only |
| **Gallery** | Image list display | Arranges `gallery` items (thumbnail grid) and handles selection only; enlargement itself is delegated to the existing Modal component. | Project Detail only today; any future page with an image collection is a reuse candidate |
| **ExternalLinks** | External link list display | Renders the `links` array as a labeled list, one Button per entry. Owns no link-specific visual treatment beyond composing the existing Button component. | Project Detail only today (`docs/DATA_MODEL.md` §5.8); Personal Works is a future reuse candidate once its data model is defined — not decided yet |

### 6.2 Analysis Components

These components render `docs/DATA_MODEL.md` §6's Analysis fields on the Analysis list (`docs/INFORMATION_ARCHITECTURE.md` §2.5) and Analysis Detail (`docs/INFORMATION_ARCHITECTURE.md` §2.6) pages, following the exact process used for Project Detail (Section 6.1): reuse a generic component wherever one already exists, and only name a new one where no existing component's responsibility fits. This section is now complete — every Analysis field defined in `docs/DATA_MODEL.md` §6 has exactly one component responsible for rendering it, so React implementation can begin directly from this table.

| Component | Purpose | Responsibility | Reuse Scope |
|-----------|---------|-----------------|-------------|
| **AnalysisCard** | Analysis list item summary | Displays one analysis's title, description, tags, and featured badge in list/grid form only. | Analysis list page only — the analysis-specific instance of the Card pattern, parallel to ProjectCard |
| **AnalysisGrid** | Analysis list layout | Arranges an `Analysis[]` array into a grid and shows the Empty state only; does not know whether it's rendering the full list or a `featured`-filtered subset. | Analysis list page ↔ Home (FeaturedAnalysis) — parallel to how ProjectGrid is shared between Projects and FeaturedProjects |
| **AnalysisHero** | Analysis Detail's top header block | Displays analysis metadata (title, description, tags, featured badge, target game, purpose) only. Owns no body-section content. | Analysis Detail only — the analysis-specific instance of the general Hero pattern (Section 6) |
| **AnalysisDimensionSection** | Content renderer for "시스템 분석" / "콘텐츠 분석" / "UX 분석" | Renders one `AnalysisDimension` (`keyElement`, `strengths`, `weaknesses`, `improvements`) only. Does not implement its own layout chrome (that's the owning `ProjectSection`'s job) — the direct Analysis Detail counterpart to `SystemsSection`/`FeaturesSection` (Section 6.1). | Analysis Detail only, instantiated 3 times (once per dimension) — see Ownership Rule (Section 10) |
| **AnalysisConclusion** | Content renderer for "결론" | Renders the `conclusion` string only, with the visual emphasis appropriate to its role as the fast-skim anchor for recruiters (`docs/INFORMATION_ARCHITECTURE.md` §2.6 User Flow: "결론만 훑고 다음 분석으로 이동"). Unlike Project's plain-text `result`/`retrospective`, this gets a dedicated component because it is the one section a skimming visitor is guaranteed to read — it must be visually distinguishable from the three dimension sections above it. | Analysis Detail only |
| **ProjectSection** *(reused, not renamed)* | Structural wrapper for each of the 4 Analysis body sections | Same responsibility as in Section 6.1 — title, spacing, width only, no content awareness. Analysis Detail reuses this component directly instead of introducing an `AnalysisSection`, because its existing responsibility already has zero Project-specific logic. | Now shared between Project Detail and Analysis Detail — see Section 8 |
| **ProjectInfo** *(reused, not renamed)* | Label/value metadata pair | Same responsibility as in Section 6.1. AnalysisHero reuses it to display `targetGame`(분석 대상) and `purpose`(분석 목적) as label/value pairs. | Now shared between Project Detail and Analysis Detail — see Section 8 |

**Component Interface** — props and data source for each component above, so implementation can start without inventing an interface.

| Component | Props | Data Source |
|-----------|-------|--------------|
| AnalysisCard | `{ analysis: Analysis }` | One item from `getAnalysis()` |
| AnalysisGrid | `{ analyses: Analysis[], emptyMessage?: string }` | `getAnalysis()` (full list) or a `featured`-filtered subset (Home's FeaturedAnalysis) |
| AnalysisHero | `{ analysis: Analysis }` | One item from `getAnalysis().find(slug)` |
| AnalysisDimensionSection | `{ dimension: AnalysisDimension, keyElementLabel: string }` | One of `analysis.systemAnalysis` / `analysis.contentAnalysis` / `analysis.uxAnalysis`. `keyElementLabel` is supplied by the calling page per instance ("핵심 시스템" / "핵심 콘텐츠" / "핵심 경험", `docs/DATA_MODEL.md` §6.2) since the field name `keyElement` is dimension-neutral but its display label isn't |
| AnalysisConclusion | `{ conclusion: string }` | `analysis.conclusion` |
| ProjectSection *(reused)* | `{ title: string, children?: ReactNode }` | None — purely structural, unchanged from Section 6.1 |
| ProjectInfo *(reused)* | `{ label: string, value: string }` | None — purely structural, unchanged from Section 6.1 |

## 7. Component Naming Convention

Component names must stay traceable to `docs/DATA_MODEL.md` and must not become inaccurate as that data model grows. This section formalizes the rule that produced the Document Preview Card rename (`docs/DATA_MODEL.md` §5.6 changelog): a component name describes what role a component plays, never how today's data happens to be implemented.

- **Ground names in `docs/DATA_MODEL.md`.** A component name should reference the field or section it renders (e.g., `SystemsSection` renders `systems`), not an invented term unrelated to the data model.
- **Never encode a specific file format or platform in a name.** A component that previews any of several document types is `DocumentPreviewCard`, never `PDFPreviewCard`. A component that lists external links across platforms is `ExternalLinks`, never `GithubCard`. A component that displays images regardless of file extension is `Gallery`, never `PNGGallery`.
- **Prefer names that survive data model growth.** If `ProjectDocumentType` gains a 6th format, or `ProjectLinkType` gains a 6th platform, no component should need renaming. Format- or platform-specific names break this guarantee; role-based names don't.
- **A component name expresses role, not implementation.** Name a component for what it is responsible for (a preview, a list, a section), never for the rendering technique or file type behind it.

  | Good | Bad | Why |
  |------|-----|-----|
  | `DocumentPreviewCard` | `PDFPreviewCard` | Previews any document type, not only PDF |
  | `ExternalLinks` | `GithubCard` | Lists any link platform, not only GitHub |
  | `Gallery` | `PNGGallery` | Displays any image format, not only PNG |

**Suffix vocabulary** — the existing component set already follows a consistent suffix-to-role mapping; new components should follow the same one rather than inventing new suffixes:

| Suffix | Role | Examples |
|--------|------|----------|
| `-Card` | Summarizes a single content item | `ProjectCard`, `DocumentPreviewCard` |
| `-Grid` | Arranges multiple Cards | `ProjectGrid` |
| `-Section` | A structural wrapper for one page content block, or the content renderer that fills it | `ProjectSection` (wrapper), `SystemsSection` / `FeaturesSection` (content renderers passed into a `ProjectSection`) |
| `-Info` | A label/value metadata pair | `ProjectInfo` |
| `-Hero` | A page's top introductory block | `Hero`, `ProjectHero` |

`ProjectSection` and `SystemsSection`/`FeaturesSection` both end in `-Section` but are not the same kind of component: `ProjectSection` is the generic outer wrapper reused for all 9 sections, while `SystemsSection`/`FeaturesSection` are the specific content passed as its children for sections 6 and 7. See `docs/INFORMATION_ARCHITECTURE.md` §2.4 for how they compose.

**Known naming debt**: `ProjectSection` and `ProjectInfo` (Section 6.1) are now reused by Analysis Detail (Section 6.2) despite carrying a `Project` prefix, the same shape of problem this convention exists to prevent (a name tied to one current consumer). They are not renamed now because renaming is a code change (`Component 수정`), which is out of scope for a documentation/design branch.

**When to rename**: at the start of the React implementation branch, before either `ProjectHero` or `AnalysisHero` is written against these components — not after. Right now, zero code references either name, so renaming costs nothing but a documentation edit. Once implementation begins, `ProjectSection`/`ProjectInfo` will be imported from both Project Detail and Analysis Detail code, and the rename cost grows with every additional usage. Recommended target names: `DetailSection` (for `ProjectSection`) and `MetaInfo` (for `ProjectInfo`) — both already role-based per this section's rules, not tied to either consumer.

## 8. Shared Components

A component is "shared" when more than one page renders it against its own data. Shared components must document their reuse scope, dependencies, and responsibility so a change made for one consumer doesn't silently break another.

| Component | Reused By | Dependencies | Responsibility |
|-----------|-----------|---------------|-----------------|
| Section, Container, Card, Tag, Badge, Button | Every page | Design tokens only | Exactly the atomic responsibility defined in Section 6 above — no page-specific behavior |
| **ProjectGrid** | Projects (list page) ↔ Home (FeaturedProjects) | ProjectCard | Arranges a `Project[]` array into a grid and shows the Empty state; does not know whether it's rendering the full list or a `featured`-filtered subset |
| **AnalysisGrid** | Analysis (list page) ↔ Home (FeaturedAnalysis) | AnalysisCard | Same responsibility as ProjectGrid, for `Analysis[]` |
| **Document Preview Card** | Project Detail ("6. 시스템 설계", `documents`) ↔ Resume (PDF 다운로드) | None — takes only a title, thumbnail, and url | Displays a single document's preview only; does not implement the file viewer or download behavior itself |
| **ProjectSection** | Project Detail (9 sections) ↔ Analysis Detail (4 sections) | None — takes only a title and children | Structural wrapper only (title, spacing, width); has no knowledge of Project vs Analysis content |
| **ProjectInfo** | Project Detail (ProjectHero) ↔ Analysis Detail (AnalysisHero) | None — takes only a label and value string | Displays one label/value metadata pair only |

`ProjectGrid` was already documented as shared in its own file comment (`features/projects/ProjectGrid/ProjectGrid.tsx`) prior to this branch. `Document Preview Card` was confirmed shared in `feature/projects-detail-architecture`. `AnalysisGrid`, `ProjectSection`, and `ProjectInfo` are newly confirmed shared in this branch (`feature/analysis-architecture`) — the latter two carry naming debt from being shared under a `Project`-prefixed name (Section 7).

`Gallery`, `ExternalLinks`, `SystemsSection`, `FeaturesSection`, `ProjectHero`, `AnalysisCard`, and `AnalysisHero` are page-specific today and are not shared with any other page.

**Newly reviewed in this branch**: `AnalysisDimensionSection` and `AnalysisConclusion` are Analysis-only, not shared with Project Detail, even though `AnalysisDimensionSection` is structurally parallel to `SystemsSection`/`FeaturesSection`.
- `AnalysisDimensionSection` renders `AnalysisDimension`, a shape with no `Project`-side equivalent — `SystemsSection`/`FeaturesSection` are already tightly coupled to `ProjectSystem`/`ProjectFeature` specifically. The parallel is in *pattern* (a per-dimension content renderer owned by a `ProjectSection`), not in shared code or a shared data shape, so merging them would force an artificial common type neither side needs.
- `AnalysisConclusion` has no Project Detail counterpart at all — Project's `result`/`retrospective` are plain text with no dedicated component, so there is nothing to share it with.

## 9. Component Dependency Rule

Every component may compose the components below it in this table; none may reference a component above it or beside it. This keeps dependencies one-directional and prevents two components from competing to render the same field.

- **One direction only** — a parent composes children; a child never imports or knows about its parent (`docs/ARCHITECTURE.md` §7's Reusable Component → Feature → Section → Layout layering applies the same rule at the component level).
- **No lateral dependencies** — sibling components at the same level do not reference each other (e.g., `SystemsSection` does not know `FeaturesSection` exists).
- **One field, one owner** — each data field is rendered by exactly one component. No other component reads that field directly, even if it has access to the same object.

| Component | May compose |
|-----------|--------------|
| ProjectDetailPage | ProjectHero, ProjectSection |
| ProjectHero | ProjectInfo, ExternalLinks, Tag, Badge |
| ProjectSection | (children supplied by the page: SystemsSection, FeaturesSection, or plain text — ProjectSection itself has no fixed child) |
| SystemsSection | Document Preview Card |
| FeaturesSection | Gallery |
| Gallery | Modal |
| AnalysisListPage | AnalysisGrid |
| AnalysisGrid | AnalysisCard |
| AnalysisCard | Tag, Badge, Button |
| AnalysisDetailPage | AnalysisHero, ProjectSection |
| AnalysisHero | ProjectInfo, Tag, Badge |
| ProjectSection (Analysis Detail context) | AnalysisDimensionSection, AnalysisConclusion |
| AnalysisDimensionSection | Accordion *(향후, 미배치 — Section 6.2)* |
| AnalysisConclusion | *(no children today)* |

**No overlapping dependencies**: `ProjectHero` and `AnalysisHero` both compose `ProjectInfo`, and `ProjectDetailPage`/`AnalysisDetailPage` both compose `ProjectSection` — this is intentional, permitted reuse of a shared atom (Section 8), not a responsibility conflict. Each Hero and each Detail page still owns a disjoint set of fields (`Project` vs `Analysis`); only the rendering primitive is shared. `ProjectSection`'s allowed children differ by page (`SystemsSection`/`FeaturesSection`/plain text on Project Detail; `AnalysisDimensionSection`/`AnalysisConclusion` on Analysis Detail) — the Ownership Rule (Section 10) fixes which specific children each page's `ProjectSection` instances actually use, so this table's breadth doesn't translate into any instance rendering both pages' content.

## 10. Component Ownership Rule

The Dependency Rule (Section 9) is a capability graph — it says which component *types* are allowed to compose which other types. Ownership is narrower: for the actual page tree, it says which single parent *instance* is responsible for rendering a given child. A dependency edge can exist without being exercised by every instance; ownership records which instances actually exercise it.

**Rule**: only the documented owner instantiates a component. If another component needs the same information, it receives it as a prop passed down from the owner — it never renders a second, independent instance of that child. This keeps the Dependency Rule's "one field, one owner" guarantee true not just for types but for the real tree.

**Ownership tree**

```
AnalysisListPage
└── AnalysisGrid
    └── AnalysisCard (×N, one per analysis)

AnalysisDetailPage
├── AnalysisHero
│   └── ProjectInfo (×2 — targetGame, purpose)
├── ProjectSection ("시스템 분석")
│   └── AnalysisDimensionSection
│       └── (향후 Accordion — 미배치, 후보만)
├── ProjectSection ("콘텐츠 분석")
│   └── AnalysisDimensionSection
│       └── (향후 Accordion — 미배치, 후보만)
├── ProjectSection ("UX 분석")
│   └── AnalysisDimensionSection
│       └── (향후 Accordion — 미배치, 후보만)
└── ProjectSection ("결론")
    └── AnalysisConclusion
```

**Circular reference check**: every edge points strictly downward (page → section → content renderer → atom); no component is both an ancestor and a descendant of itself. `ProjectSection` and `ProjectInfo` are each owned by exactly one parent type per page (Project Detail's `ProjectHero`/9 sections vs Analysis Detail's `AnalysisHero`/4 sections) — sharing across pages doesn't create a cycle, because Project Detail and Analysis Detail never render each other or reference each other's tree.

## 11. Interaction Principles

- **Hover** — Provides clear, immediate feedback that an element is interactive, without altering layout or causing distracting motion.
- **Focus** — Always visibly distinct from hover and from the unfocused state, ensuring keyboard users can track their position at all times.
- **Active** — Communicates that an interaction is currently being triggered (e.g., a button being pressed), distinct from both hover and focus.
- **Loading** — Communicates that content is being fetched or processed, avoiding any impression that the interface is unresponsive or broken.
- **Empty States** — When a list or section has no content to show, communicate that clearly and helpfully rather than showing a blank or broken-looking area.
- **Error States** — When something fails to load or behave as expected, communicate the problem clearly and, where possible, offer a path forward, without exposing technical detail irrelevant to the visitor.

## 12. Accessibility

- **Keyboard Navigation** — Every interactive element must be reachable and operable using only a keyboard, in a logical, predictable order.
- **Color Contrast** — Text and meaningful UI elements must maintain sufficient contrast against their backgrounds to remain legible for visitors with low vision or color vision deficiencies.
- **Semantic HTML** — Structure and meaning are conveyed through appropriate HTML elements (headings, lists, landmarks, buttons vs. links) rather than generic containers styled to look the part.
- **Screen Readers** — Content and interactive elements must be understandable when read aloud, including meaningful text alternatives for non-text content (images, icons used as controls).
- **Focus Visibility** — A visible focus indicator must be present at all times for keyboard users; it must never be suppressed for aesthetic reasons.

Accessibility is a baseline requirement across every component and page, consistent with `docs/PROJECT.md` and `CLAUDE.md` — not a separate audit performed after the fact.

## 13. Future Growth

New components should only be introduced when an existing component cannot reasonably be extended to meet the need. Before adding one, check whether an existing component in Section 6 can be reused or given a new variant — this is what kept Analysis Detail from inventing an `AnalysisSection` (Section 6.2), and what limited it to exactly two new components (`AnalysisDimensionSection`, `AnalysisConclusion`) instead of a bespoke component per body section. When a new component is genuinely needed:

- It must be built from the existing design tokens (Section 4), never introducing new one-off colors, spacing, or type styles.
- It must be documented in this file, with its responsibility and intended usage stated as clearly as existing entries, and follow the Naming Convention (Section 7).
- It must declare its dependency edges per the Component Dependency Rule (Section 9) and its owner per the Component Ownership Rule (Section 10).
- It must satisfy the same accessibility and interaction standards defined in Sections 11 and 12 as every other component.

This keeps the design system a living, complete reference rather than a document that drifts out of sync with the interface as the portfolio grows.

## 14. Summary

The design system exists to make the portfolio feel like one deliberate product, not a series of independently built pages. Every design decision should be traceable to a principle in Section 2, serve the recruiter-first UX goals in Section 3, and draw from the shared tokens and components defined here rather than inventing new patterns in isolation.

For future contributors: reuse before creating, extend the token set only when a genuine new need arises, document every new component before it ships, and treat accessibility and consistency as non-negotiable constraints on every decision — not refinements to add later.
