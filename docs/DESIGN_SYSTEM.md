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
- **Section** — A structural wrapper providing consistent spacing, width, and heading treatment for a distinct block of content within a page. Accepts a `tone` (`base` | `muted`) so consecutive sections on a page can alternate background using the existing `background-elevated` token — no new color tokens, just rhythm (`feature/platform-visual-polish`). `DetailSection` (Section 6.1) passes this through unchanged.
- **Hero** — The introductory block at the top of a page (most prominently Home), responsible for immediate first-impression communication of identity and focus.
- **Timeline** — Presents chronological information (e.g., experience history, a project's design process) in a structured, sequential visual form.
- **Accordion** — Progressively discloses supplementary detail (e.g., extended explanation within a case study) without consuming space until the visitor chooses to expand it.
- **Modal** — Presents focused, temporary content (e.g., an enlarged gallery image) above the page without navigating away from it. Implemented as a shared component (`components/common/Modal`, not `components/ui/`) since it owns an open/close interaction contract rather than being a bare visual atom — see Section 8.
- **Search Bar** — Allows visitors to locate content directly by keyword across projects and analyses.
- **Filter** — Allows visitors to narrow visible content by attributes such as skill, role, or tag, consistent with the tagging structure defined in `docs/DATA_MODEL.md`.
- **Document Preview Card** — Represents a linked document (e.g., a design document, a resume; PDF, PPT, DOCX, Markdown, or a Notion export, per `docs/DATA_MODEL.md` §5.6 `ProjectDocumentType`) with enough visual context (title, thumbnail) to set expectations before opening it, supporting the PDF Viewer feature described in `docs/ROADMAP.md` §7. `thumbnail` is aspirational — `ProjectDocument` (§5.6) has no such field today, so the current implementation shows `title`/`type`/`url` only (Section 11 Contract).

### 6.1 Shared Detail Components

Project Detail and Analysis Detail are built from the same Detail page skeleton (`docs/INFORMATION_ARCHITECTURE.md` §2.4, §2.6: header → N official sections → closing navigation). The two components below implement that skeleton and belong to neither page's feature — they live in `components/common/`, not inside `features/projects/` or `features/analysis/`, because no single feature owns them.

| Component | Purpose | Responsibility | Reuse Scope |
|-----------|---------|-----------------|-------------|
| **DetailSection** | Structural wrapper for one official section on any Detail page | Provides title, spacing, and width only. Holds no knowledge of what content it wraps — content is passed in as children. Reused 9 times on Project Detail, 4 times on Analysis Detail. | Project Detail ↔ Analysis Detail — see Shared Components (Section 8) |
| **MetaInfo** | Label/value metadata pair | Displays one label/value pair (`dt`/`dd`) only. Renders both even when the value is empty (Component Contract Rule, Section 11). | Project Detail (ProjectHero) ↔ Analysis Detail (AnalysisHero) — see Shared Components (Section 8) |

**Props**

| Component | Props |
|-----------|-------|
| DetailSection | `{ title: string, tone?: "base" \| "muted", children?: ReactNode }` |
| MetaInfo | `{ label: string, value: string }` |

> **변경 이력 (feature/detail-ui-foundation)**: 이전 이름은 `ProjectSection`/`ProjectInfo`였고 `features/projects/` 아래 있었다. Analysis Detail도 동일 컴포넌트를 그대로 재사용하면서 `Project` 접두사가 실제 소유 범위(두 Feature 모두)보다 좁아졌다 — Section 7이 금지하는 "특정 소비자에 종속된 이름"과 같은 문제였다. `DetailSection`/`MetaInfo`로 이름을 바꾸고 `components/common/`으로 옮겨 코드와 문서를 동기화했다.
>
> **변경 이력 (feature/platform-visual-polish)**: `tone`을 추가해 Section의 `tone` prop을 그대로 통과시킨다 — Project Detail 9개, Analysis Detail 4개 섹션이 번갈아 배경을 바꿔 시각적으로 구분되도록, 호출부(`page.tsx`)가 순서대로 `base`/`muted`를 지정한다. 새 컴포넌트나 새 색상 토큰 없이 기존 Section 확장만으로 해결했다.

### 6.2 Project Detail Components

These components exist specifically to render `docs/DATA_MODEL.md` §5's Project fields on the Project Detail page (`docs/INFORMATION_ARCHITECTURE.md` §2.4), on top of the shared Detail skeleton (Section 6.1). Each has exactly one responsibility, so no two components compete to render the same data.

| Component | Purpose | Responsibility | Reuse Scope |
|-----------|---------|-----------------|-------------|
| **ProjectHero** | Project Detail's top header block | Displays project metadata (title, subtitle, role, genre, platform, period, team, tags, featured badge) and external links (via ExternalLinks) only. Owns no body-section content. | Project Detail only — the project-specific instance of the general Hero pattern (Section 6) |
| **SystemsSection** | Content renderer for "6. 시스템 설계" | Renders the `systems` array (name, purpose, playerExperience, structure, flow, data, exceptionHandling, expectedEffect) and delegates each `documents` entry to Document Preview Card. Does not implement its own layout chrome (that's the owning `DetailSection`'s job) or document preview rendering (that's Document Preview Card's job). | Project Detail only |
| **FeaturesSection** | Content renderer for "7. 핵심 기능" | Renders the `features` array (name, description) and delegates `gallery` to Gallery. Does not implement image display or enlargement itself. | Project Detail only |
| **Gallery** | Image list display | Arranges `gallery` items (thumbnail grid) and handles selection only; enlargement itself is delegated to the existing Modal component. | Project Detail only today; any future page with an image collection is a reuse candidate |
| **ExternalLinks** | External link list display | Renders the `links` array as a labeled list, one Button per entry. Owns no link-specific visual treatment beyond composing the existing Button component. | Project Detail only (`docs/DATA_MODEL.md` §5.8). Personal Works' data model is now defined (`docs/DATA_MODEL.md` §13, `feature/contact-personal-infra`) with a single `link: string` field rather than an array — ExternalLinks expects `ProjectLink[]`, so this reuse candidacy is resolved as **not adopted**; `PersonalCard` renders its own link Button directly |

### 6.3 Analysis Detail Components

These components render `docs/DATA_MODEL.md` §6's Analysis fields on the Analysis list (`docs/INFORMATION_ARCHITECTURE.md` §2.5) and Analysis Detail (`docs/INFORMATION_ARCHITECTURE.md` §2.6) pages, on top of the shared Detail skeleton (Section 6.1), following the exact process used for Project Detail (Section 6.2): reuse a generic component wherever one already exists, and only name a new one where no existing component's responsibility fits.

| Component | Purpose | Responsibility | Reuse Scope |
|-----------|---------|-----------------|-------------|
| **AnalysisCard** | Analysis list item summary | Displays one analysis's title, description, tags, and featured badge in list/grid form only. | Analysis list page only — the analysis-specific instance of the Card pattern, parallel to ProjectCard |
| **AnalysisGrid** | Analysis list layout | Arranges an `Analysis[]` array into a grid and shows the Empty state only; does not know whether it's rendering the full list or a `featured`-filtered subset. | Analysis list page ↔ Home (FeaturedAnalysis) — parallel to how ProjectGrid is shared between Projects and FeaturedProjects |
| **AnalysisHero** | Analysis Detail's top header block | Displays analysis metadata (title, description, tags, featured badge, target game, purpose) only. Owns no body-section content. | Analysis Detail only — the analysis-specific instance of the general Hero pattern (Section 6) |
| **AnalysisDimensionSection** | Content renderer for "시스템 분석" / "콘텐츠 분석" / "UX 분석" | Renders one `AnalysisDimension` (`keyElement`, `strengths`, `weaknesses`, `improvements`) only. Does not implement its own layout chrome (that's the owning `DetailSection`'s job) — the direct Analysis Detail counterpart to `SystemsSection`/`FeaturesSection` (Section 6.2). | Analysis Detail only, instantiated 3 times (once per dimension) — see Ownership Rule (Section 10) |
| **AnalysisConclusion** | Content renderer for "결론" | Renders the `conclusion` string only, with the visual emphasis appropriate to its role as the fast-skim anchor for recruiters (`docs/INFORMATION_ARCHITECTURE.md` §2.6 User Flow: "결론만 훑고 다음 분석으로 이동"). Unlike Project's plain-text `result`/`retrospective`, this gets a dedicated component because it is the one section a skimming visitor is guaranteed to read — it must be visually distinguishable from the three dimension sections above it. | Analysis Detail only |

`DetailSection`과 `MetaInfo`는 여기 다시 나열하지 않는다 — Section 6.1 참고.

**Component Interface** — props and data source for each component above, so implementation can start without inventing an interface.

| Component | Props | Data Source |
|-----------|-------|--------------|
| AnalysisCard | `{ analysis: Analysis }` | One item from `getAnalysis()` |
| AnalysisGrid | `{ analyses: Analysis[], emptyMessage?: string }` | `getAnalysis()` (full list) or a `featured`-filtered subset (Home's FeaturedAnalysis) |
| AnalysisHero | `{ analysis: Analysis }` | One item from `getAnalysis().find(slug)` |
| AnalysisDimensionSection | `{ dimension: AnalysisDimension, keyElementLabel: string }` | One of `analysis.systemAnalysis` / `analysis.contentAnalysis` / `analysis.uxAnalysis`. `keyElementLabel` is supplied by the calling page per instance ("핵심 시스템" / "핵심 콘텐츠" / "핵심 경험", `docs/DATA_MODEL.md` §6.2) since the field name `keyElement` is dimension-neutral but its display label isn't |
| AnalysisConclusion | `{ conclusion: string }` | `analysis.conclusion` |

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
| `-Card` | Summarizes a single content item | `ProjectCard`, `AnalysisCard`, `DocumentPreviewCard` |
| `-Grid` | Arranges multiple Cards | `ProjectGrid`, `AnalysisGrid` |
| `-Section` | A structural wrapper for one page content block, or the content renderer that fills it | `DetailSection` (wrapper), `SystemsSection` / `FeaturesSection` / `AnalysisDimensionSection` (content renderers passed into a `DetailSection`) |
| `-Info` | A label/value metadata pair | `MetaInfo` |
| `-Hero` | A page's top introductory block | `Hero`, `ProjectHero`, `AnalysisHero` |

`DetailSection` and `SystemsSection`/`FeaturesSection`/`AnalysisDimensionSection` both end in `-Section` but are not the same kind of component: `DetailSection` is the generic outer wrapper reused for all official sections on either Detail page, while `SystemsSection`/`FeaturesSection`/`AnalysisDimensionSection` are the specific content passed as its children. See `docs/INFORMATION_ARCHITECTURE.md` §2.4/§2.6 for how they compose.

**Resolved naming debt**: `ProjectSection`/`ProjectInfo` used to carry a `Project` prefix despite being reused by Analysis Detail — flagged as debt in `feature/analysis-architecture` and `feature/analysis-components`, with the rename deferred to "before either Hero component is written against them in code." This branch (`feature/detail-ui-foundation`) is that trigger point: they are renamed to `DetailSection`/`MetaInfo` and relocated to `components/common/` (Section 6.1). No naming debt remains for these two components.

## 8. Shared Components

A component is "shared" when more than one page renders it against its own data. Shared components must document their reuse scope, dependencies, and responsibility so a change made for one consumer doesn't silently break another.

| Component | Reused By | Dependencies | Responsibility |
|-----------|-----------|---------------|-----------------|
| Section, Container, Card, Tag, Badge, Button | Every page | Design tokens only | Exactly the atomic responsibility defined in Section 6 above — no page-specific behavior |
| **ProjectGrid** | Projects (list page) ↔ Home (FeaturedProjects) | ProjectCard | Arranges a `Project[]` array into a grid and shows the Empty state; does not know whether it's rendering the full list or a `featured`-filtered subset |
| **AnalysisGrid** | Analysis (list page) ↔ Home (FeaturedAnalysis) | AnalysisCard | Same responsibility as ProjectGrid, for `Analysis[]` |
| **Document Preview Card** | Project Detail ("6. 시스템 설계", `documents`) ↔ Resume (PDF 다운로드) | None — takes only a `document` (`ProjectDocument`: title, type, url; no `thumbnail` field exists in `docs/DATA_MODEL.md` §5.6 today, so §6's "title, thumbnail" description is aspirational, not the current Contract) | Displays a single document's preview only; does not implement the file viewer or download behavior itself |
| **DetailSection** | Project Detail (9 sections) ↔ Analysis Detail (4 sections) | None — takes only a title and children | Structural wrapper only (title, spacing, width); has no knowledge of Project vs Analysis content |
| **MetaInfo** | Project Detail (ProjectHero, SystemsSection) ↔ Analysis Detail (AnalysisHero, AnalysisDimensionSection) | None — takes only a label and value string | Displays one label/value metadata pair only |
| **Modal** (`components/common/Modal`) | Gallery (Project Detail) today; any future page needing focused overlay content (e.g. Personal Works, Analysis) is a reuse candidate | None — takes only `isOpen`, `onClose`, and `children`; knows nothing about what it displays | Focused overlay only (open/close, Escape-to-close, initial focus, backdrop click); owns no enlargement-specific logic — the caller decides what renders inside |

`ProjectGrid` was already documented as shared in its own file comment (`features/projects/ProjectGrid/ProjectGrid.tsx`) prior to this branch. `Document Preview Card` was confirmed shared in `feature/projects-detail-architecture`. `AnalysisGrid` was confirmed shared in `feature/analysis-architecture` **on paper**, but `feature/ui-foundation-verification` found that `AnalysisCard`/`AnalysisGrid` had never actually been implemented — `app/analysis/page.tsx` was still the pre-architecture placeholder and `FeaturedAnalysis` hand-rolled an ad hoc `Card`+`Tag` block instead of reusing `AnalysisGrid` (Architecture Drift: doc → code, not code → doc as usual). Both components were implemented in this branch to exactly match the Contract already specified here and in the Component Interface table below — see Section 10 for the now-real Ownership tree. `DetailSection`/`MetaInfo` (renamed from `ProjectSection`/`ProjectInfo` in this branch, `feature/detail-ui-foundation`) were already known to be shared but carried naming debt until this branch resolved it — see Section 7. `MetaInfo`'s reuse scope widened in `feature/detail-content-components`: `SystemsSection` and `AnalysisDimensionSection` both reuse it for their own fixed-shape label/value fields, not just the two Hero components. `Modal` is new in `feature/detail-content-components`, built as a common component (not `components/ui/`) specifically because Gallery's Contract (Section 11) requires an enlargement surface, and because it composes no other component beyond design tokens yet is not a bare visual atom like Button/Tag — it owns open/close interaction state contracts (isOpen/onClose), which is why it sits alongside DetailSection/MetaInfo rather than in Section 6's plain atom list.

**Re-verified in this branch**, now that both Detail pages exist in code: no components beyond `DetailSection`/`MetaInfo` are actually shared between Project Detail and Analysis Detail. `SystemsSection`/`FeaturesSection` remain Project-only and `AnalysisDimensionSection`/`AnalysisConclusion` remain Analysis-only:
- `AnalysisDimensionSection` renders `AnalysisDimension`, a shape with no `Project`-side equivalent — `SystemsSection`/`FeaturesSection` are already tightly coupled to `ProjectSystem`/`ProjectFeature` specifically. The parallel is in *pattern* (a per-dimension content renderer owned by a `DetailSection`), not in shared code or a shared data shape, so merging them would force an artificial common type neither side needs.
- `AnalysisConclusion` has no Project Detail counterpart at all — Project's `result`/`retrospective` are plain text with no dedicated component, so there is nothing to share it with.

`Gallery`, `ExternalLinks`, `SystemsSection`, `FeaturesSection`, `ProjectHero`, `AnalysisCard`, `AnalysisHero`, `AnalysisDimensionSection`, and `AnalysisConclusion` are page-specific today and are not shared with any other page.

## 9. Component Dependency Rule

Every component may compose the components below it in this table; none may reference a component above it or beside it. This keeps dependencies one-directional and prevents two components from competing to render the same field.

- **One direction only** — a parent composes children; a child never imports or knows about its parent (`docs/ARCHITECTURE.md` §7's Reusable Component → Feature → Section → Layout layering applies the same rule at the component level).
- **No lateral dependencies** — sibling components at the same level do not reference each other (e.g., `SystemsSection` does not know `FeaturesSection` exists).
- **One field, one owner** — each data field is rendered by exactly one component. No other component reads that field directly, even if it has access to the same object.

| Component | May compose |
|-----------|--------------|
| ProjectDetailPage | ProjectHero, DetailSection |
| ProjectHero | MetaInfo, ExternalLinks, Tag, Badge |
| DetailSection | (children supplied by the page: SystemsSection, FeaturesSection, AnalysisDimensionSection, AnalysisConclusion, or plain text — DetailSection itself has no fixed child) |
| SystemsSection | MetaInfo, Document Preview Card |
| FeaturesSection | Gallery |
| Gallery | Modal |
| ExternalLinks | Button, Tag |
| Document Preview Card | Card, Tag, Button |
| AnalysisListPage | AnalysisGrid |
| AnalysisGrid | AnalysisCard |
| AnalysisCard | Tag, Badge, Button |
| AnalysisDetailPage | AnalysisHero, DetailSection |
| AnalysisHero | MetaInfo, Tag, Badge |
| AnalysisDimensionSection | MetaInfo, Accordion *(향후, 미배치 — Section 6.3)* |
| AnalysisConclusion | Card |

**No overlapping dependencies**: `ProjectHero` and `AnalysisHero` both compose `MetaInfo`, and `ProjectDetailPage`/`AnalysisDetailPage` both compose `DetailSection` — this is intentional, permitted reuse of a shared atom (Section 8), not a responsibility conflict. Each Hero and each Detail page still owns a disjoint set of fields (`Project` vs `Analysis`); only the rendering primitive is shared. `DetailSection`'s allowed children differ by page (`SystemsSection`/`FeaturesSection`/plain text on Project Detail; `AnalysisDimensionSection`/`AnalysisConclusion` on Analysis Detail) — the Ownership Rule (Section 10) fixes which specific children each page's `DetailSection` instances actually use, so this table's breadth doesn't translate into any instance rendering both pages' content.

## 10. Component Ownership Rule

The Dependency Rule (Section 9) is a capability graph — it says which component *types* are allowed to compose which other types. Ownership is narrower: for the actual page tree, it says which single parent *instance* is responsible for rendering a given child. A dependency edge can exist without being exercised by every instance; ownership records which instances actually exercise it.

**Rule**: only the documented owner instantiates a component. If another component needs the same information, it receives it as a prop passed down from the owner — it never renders a second, independent instance of that child. This keeps the Dependency Rule's "one field, one owner" guarantee true not just for types but for the real tree.

**Ownership tree**

```
ProjectListPage
└── ProjectGrid
    └── ProjectCard (×N, one per project)

ProjectDetailPage
├── ProjectHero
│   ├── MetaInfo (×5 — role, genre, platform, period, team)
│   ├── Tag (×N — tags)
│   └── ExternalLinks (links)
│       ├── Button (×N — url)
│       └── Tag (×N — type label)
├── DetailSection ("1. 프로젝트 개요") — plain text (overview)
├── DetailSection ("2. 담당 역할") — plain text (contribution) + Tag (×N — skills)
├── DetailSection ("3. 목표") — plain text (goal)
├── DetailSection ("4. 문제 정의") — plain text (problem)
├── DetailSection ("5. 접근 과정") — plain text (approach)
├── DetailSection ("6. 시스템 설계")
│   └── SystemsSection (systems, documents)
│       ├── MetaInfo (×7 per system — purpose, playerExperience, structure, flow, data, exceptionHandling, expectedEffect)
│       └── Document Preview Card (×N — documents)
│           ├── Card, Tag (type label)
│           └── Button (url)
├── DetailSection ("7. 핵심 기능")
│   └── FeaturesSection (features, gallery)
│       └── Gallery (gallery)
│           └── Modal (선택된 이미지 확대 시)
├── DetailSection ("8. 결과") — plain text (result)
└── DetailSection ("9. 회고") — plain text (retrospective)

AnalysisListPage
└── AnalysisGrid
    └── AnalysisCard (×N, one per analysis)

AnalysisDetailPage
├── AnalysisHero
│   ├── MetaInfo (×2 — targetGame, purpose)
│   └── Tag (×N — tags)
├── DetailSection ("시스템 분석")
│   └── AnalysisDimensionSection (keyElementLabel="핵심 시스템")
│       └── MetaInfo (×4 — keyElement, strengths, weaknesses, improvements)
├── DetailSection ("콘텐츠 분석")
│   └── AnalysisDimensionSection (keyElementLabel="핵심 콘텐츠")
│       └── MetaInfo (×4)
├── DetailSection ("UX 분석")
│   └── AnalysisDimensionSection (keyElementLabel="핵심 경험")
│       └── MetaInfo (×4)
└── DetailSection ("결론")
    └── AnalysisConclusion
        └── Card
```

**구현 상태 (`feature/detail-content-components`)**: 위 트리의 모든 컴포넌트가 실제 React 코드로 구현되어 있다 — 이전 브랜치(`feature/detail-ui-foundation`)까지 남아있던 `*(설계됨, 미구현)*` 표시는 이번 브랜치에서 모두 해소됐다. `data/projects.json`·`data/analysis.json`이 여전히 빈 배열이라(Out of Scope: 실제 콘텐츠 작성) 방문 시 화면에 보이는 내용은 없지만, 실제 데이터가 채워지는 즉시 위 트리 그대로 렌더링된다. `Modal`은 `Gallery`가 이미지를 선택했을 때만 열리는 조건부 자식이라 "선택된 이미지 확대 시"로 표기했다.

**Circular reference check**: every edge points strictly downward (page → section → content renderer → atom); no component is both an ancestor and a descendant of itself. `DetailSection` and `MetaInfo` are each owned by exactly one parent type per page (Project Detail's `ProjectHero`/9 sections vs Analysis Detail's `AnalysisHero`/4 sections) — sharing across pages doesn't create a cycle, because Project Detail and Analysis Detail never render each other or reference each other's tree.

## 11. Component Contract Rule

A Contract fixes exactly what a component receives, what it renders and in what order, and how it behaves when a field has no content — derived directly from `docs/DATA_MODEL.md`, never from a UI judgment made in this document or in code. Two components rendering the same field must render it in the same order and treat emptiness the same way.

**General Empty State principle** (applies unless a component's row below overrides it):
- **Fixed-shape fields** — a field that always exists on every record, per `docs/DATA_MODEL.md`'s Required/Optional principle — render even when their value is an empty string. The label always appears; only the value is blank. Hiding a fixed field would make the component's shape unpredictable from one record to the next.
- **Variable-length collections** (arrays: `tags`, `skills`, `systems`, `features`, `gallery`, `documents`, `links`) render nothing when empty — the wrapping UI block is omitted entirely rather than shown empty. This matches the convention already in code (`{project.tags.length > 0 && (...)}`).

| Component | Input Contract | Output Contract (render order) | Empty State Contract |
|-----------|------------------|----------------------------------|------------------------|
| **DetailSection** | `{ title, children }` | `title` as heading, then `children`, in that order | `children` is optional — renders the heading alone when absent (the current state of every section on both Detail pages, per Out of Scope of this branch) |
| **MetaInfo** | `{ label, value }` | `label` (`dt`), then `value` (`dd`) | Fixed-shape — always renders both, even if `value` is `""` |
| **ProjectHero** | `Project` | Featured badge (if `featured`) → `title` → `subtitle` → `role`/`genre`/`platform`/`period`/`team` via `MetaInfo`, in `docs/DATA_MODEL.md` §5.1 field order → `tags` → `links` via ExternalLinks | `featured=false` → no badge. `tags=[]` → no tag block. `links=[]` → ExternalLinks renders nothing. `role`/`genre`/`platform`/`period`/`team` are fixed-shape — always rendered via `MetaInfo` even if `""` |
| **AnalysisHero** | `Analysis` | Featured badge (if `featured`) → `title` → `description` → `targetGame`/`purpose` via `MetaInfo`, in `docs/DATA_MODEL.md` §6.1 field order → `tags` | Same rules as ProjectHero |
| **SystemsSection** | `{ systems: ProjectSystem[], documents: ProjectDocument[] }` | Each system in array order: `name` (heading) → `purpose` → `playerExperience` → `structure` → `flow` → `data` → `exceptionHandling` → `expectedEffect` via `MetaInfo`, matching `docs/DATA_MODEL.md` §5.3 field order, then `documents` via Document Preview Card | `systems=[]` → renders nothing (variable-length collection); `documents` belongs to the section, not to each system, so it still renders even if drawn from a `systems`-having project. `purpose`/`playerExperience`/.../`expectedEffect` are fixed-shape per system — always rendered even if `""`. `documents=[]` → no Document Preview Card block |
| **FeaturesSection** | `{ features: ProjectFeature[], gallery: ProjectGalleryImage[] }` | Each feature in array order: `name` (heading) → `description`, then `gallery` via Gallery | `features=[]` → renders nothing (variable-length collection). `gallery=[]` → Gallery renders nothing, independent of whether `features` rendered |
| **AnalysisDimensionSection** | `{ dimension: AnalysisDimension, keyElementLabel: string }` | `keyElementLabel` → `dimension.keyElement` → `strengths` → `weaknesses` → `improvements`, matching `docs/DATA_MODEL.md` §6.2 `AnalysisDimension` field order, each rendered via `MetaInfo` | Fixed-shape — all 4 fields always render, even if any is `""` (an analysis with an empty `weaknesses` still shows the label; hiding it would make the three dimension sections inconsistent with each other) |
| **AnalysisConclusion** | `{ conclusion: string }` | `conclusion` only | Fixed-shape single field — always renders, even if `""` |
| **Gallery** | `{ images: ProjectGalleryImage[] }` | Each image in array order: `src` (as thumbnail, then enlarged in Modal) → `caption` (visible under the thumbnail) → `description` (visible inside the Modal); `purpose` is used for alt text on both, never rendered visibly (`docs/CONTENT_GUIDE.md` §7). `type` is not part of this Output Contract — nothing branches on it visibly today | `images=[]` → renders nothing |
| **Document Preview Card** | `{ document: ProjectDocument }` | `title` → `type` (as a Tag label — no icon system exists yet, `docs/DESIGN_SYSTEM.md` §4 Iconography is still conceptual) → `url` (as the open action, opens in a new tab) | Rendered once per `documents` array item; the array itself follows `documents=[]` → renders nothing at the SystemsSection level |
| **ExternalLinks** | `{ links: ProjectLink[] }` | Each link in array order: `label` (as the Button's visible text) → `url` (as the Button's `href`, opens in a new tab) → `type` (as a Tag label placed after the Button — no icon system exists yet) | `links=[]` → renders nothing |
| **Modal** | `{ isOpen: boolean, onClose: () => void, children }` | `children` only, inside a `role="dialog"` overlay | `isOpen=false` → renders nothing. Not a Contract row derived from `docs/DATA_MODEL.md` (Modal renders no data field directly) — listed here because Gallery's Contract depends on it |

**구현 상태 (`feature/detail-content-components`)**: 위 표의 모든 행이 실제로 구현되었다 — 이전에 `*(설계됨, 미구현)*`으로 표시됐던 `SystemsSection`/`FeaturesSection`/`AnalysisDimensionSection`/`AnalysisConclusion`/`Gallery`/`Document Preview Card`/`ExternalLinks`는 모두 이번 브랜치에서 이 표와 동일한 Contract로 코드화됐다. `SystemsSection`/`FeaturesSection`의 Input Contract는 구현 과정에서 정밀화됐다 — `documents`/`gallery`가 각 시스템/기능 항목이 아니라 섹션 전체에 속하는 별도 배열임이 드러나 `ProjectSystem[]`/`ProjectFeature[]` 단일 타입에서 위와 같은 2-필드 객체로 바뀌었다(§10 Ownership tree와 일치). "Contract를 미리 확정하고 구현 시점에 그대로 옮긴다"는 이전 브랜치의 원칙은 앞으로 추가되는 컴포넌트(예: Accordion)에도 동일하게 적용된다.

**세 규칙의 충돌 검토 (Dependency / Ownership / Contract)**: 세 규칙은 서로 다른 단위에서 동작해 충돌하지 않는다.
- Dependency Rule(Section 9) — 컴포넌트 **타입**이 어떤 타입을 쓸 수 있는지 (허용 그래프)
- Ownership Rule(Section 10) — 실제 트리에서 어떤 **인스턴스**가 그 자식을 실제로 소유하는지
- Contract Rule(이 절) — 그 인스턴스에 실제로 어떤 **데이터**가 어떤 순서로 들어오고 나가는지

세 규칙은 타입 → 인스턴스 → 데이터 순으로 점점 좁혀지는 계층이라 서로 다른 질문에 답하며 겹치지 않는다. 예를 들어 `ProjectHero`가 `MetaInfo`를 쓸 수 있다는 것(Dependency), `ProjectHero`가 그 `MetaInfo` 5개를 직접 소유한다는 것(Ownership), 그 5개가 role→genre→platform→period→team 순서로 렌더링된다는 것(Contract)은 서로 다른 층위의 사실이며, 하나가 바뀐다고 다른 하나가 깨지지 않는다.

## 12. Interaction Principles

- **Hover** — Provides clear, immediate feedback that an element is interactive, without altering layout or causing distracting motion.
- **Focus** — Always visibly distinct from hover and from the unfocused state, ensuring keyboard users can track their position at all times.
- **Active** — Communicates that an interaction is currently being triggered (e.g., a button being pressed), distinct from both hover and focus.
- **Loading** — Communicates that content is being fetched or processed, avoiding any impression that the interface is unresponsive or broken.
- **Empty States** — When a list or section has no content to show, communicate that clearly and helpfully rather than showing a blank or broken-looking area.
- **Error States** — When something fails to load or behave as expected, communicate the problem clearly and, where possible, offer a path forward, without exposing technical detail irrelevant to the visitor.

## 13. Accessibility

- **Keyboard Navigation** — Every interactive element must be reachable and operable using only a keyboard, in a logical, predictable order.
- **Color Contrast** — Text and meaningful UI elements must maintain sufficient contrast against their backgrounds to remain legible for visitors with low vision or color vision deficiencies.
- **Semantic HTML** — Structure and meaning are conveyed through appropriate HTML elements (headings, lists, landmarks, buttons vs. links) rather than generic containers styled to look the part.
- **Screen Readers** — Content and interactive elements must be understandable when read aloud, including meaningful text alternatives for non-text content (images, icons used as controls).
- **Focus Visibility** — A visible focus indicator must be present at all times for keyboard users; it must never be suppressed for aesthetic reasons.

Accessibility is a baseline requirement across every component and page, consistent with `docs/PROJECT.md` and `CLAUDE.md` — not a separate audit performed after the fact.

## 14. Future Growth

New components should only be introduced when an existing component cannot reasonably be extended to meet the need. Before adding one, check whether an existing component in Section 6 can be reused or given a new variant — this is what kept Analysis Detail from inventing an `AnalysisSection` (Section 6.3), and what limited it to exactly two new components (`AnalysisDimensionSection`, `AnalysisConclusion`) instead of a bespoke component per body section. When a new component is genuinely needed:

- It must be built from the existing design tokens (Section 4), never introducing new one-off colors, spacing, or type styles.
- It must be documented in this file, with its responsibility and intended usage stated as clearly as existing entries, and follow the Naming Convention (Section 7).
- It must declare its dependency edges per the Component Dependency Rule (Section 9), its owner per the Component Ownership Rule (Section 10), and its data contract per the Component Contract Rule (Section 11).
- It must satisfy the same accessibility and interaction standards defined in Sections 12 and 13 as every other component.

This keeps the design system a living, complete reference rather than a document that drifts out of sync with the interface as the portfolio grows.

## 15. Summary

The design system exists to make the portfolio feel like one deliberate product, not a series of independently built pages. Every design decision should be traceable to a principle in Section 2, serve the recruiter-first UX goals in Section 3, and draw from the shared tokens and components defined here rather than inventing new patterns in isolation.

For future contributors: reuse before creating, extend the token set only when a genuine new need arises, document every new component before it ships, and treat accessibility and consistency as non-negotiable constraints on every decision — not refinements to add later.
