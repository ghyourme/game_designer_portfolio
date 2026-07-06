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

## 7. Interaction Principles

- **Hover** — Provides clear, immediate feedback that an element is interactive, without altering layout or causing distracting motion.
- **Focus** — Always visibly distinct from hover and from the unfocused state, ensuring keyboard users can track their position at all times.
- **Active** — Communicates that an interaction is currently being triggered (e.g., a button being pressed), distinct from both hover and focus.
- **Loading** — Communicates that content is being fetched or processed, avoiding any impression that the interface is unresponsive or broken.
- **Empty States** — When a list or section has no content to show, communicate that clearly and helpfully rather than showing a blank or broken-looking area.
- **Error States** — When something fails to load or behave as expected, communicate the problem clearly and, where possible, offer a path forward, without exposing technical detail irrelevant to the visitor.

## 8. Accessibility

- **Keyboard Navigation** — Every interactive element must be reachable and operable using only a keyboard, in a logical, predictable order.
- **Color Contrast** — Text and meaningful UI elements must maintain sufficient contrast against their backgrounds to remain legible for visitors with low vision or color vision deficiencies.
- **Semantic HTML** — Structure and meaning are conveyed through appropriate HTML elements (headings, lists, landmarks, buttons vs. links) rather than generic containers styled to look the part.
- **Screen Readers** — Content and interactive elements must be understandable when read aloud, including meaningful text alternatives for non-text content (images, icons used as controls).
- **Focus Visibility** — A visible focus indicator must be present at all times for keyboard users; it must never be suppressed for aesthetic reasons.

Accessibility is a baseline requirement across every component and page, consistent with `docs/PROJECT.md` and `CLAUDE.md` — not a separate audit performed after the fact.

## 9. Future Growth

New components should only be introduced when an existing component cannot reasonably be extended to meet the need. Before adding one, check whether an existing component in Section 6 can be reused or given a new variant. When a new component is genuinely needed:

- It must be built from the existing design tokens (Section 4), never introducing new one-off colors, spacing, or type styles.
- It must be documented in this file, with its responsibility and intended usage stated as clearly as existing entries.
- It must satisfy the same accessibility and interaction standards defined in Sections 7 and 8 as every other component.

This keeps the design system a living, complete reference rather than a document that drifts out of sync with the interface as the portfolio grows.

## 10. Summary

The design system exists to make the portfolio feel like one deliberate product, not a series of independently built pages. Every design decision should be traceable to a principle in Section 2, serve the recruiter-first UX goals in Section 3, and draw from the shared tokens and components defined here rather than inventing new patterns in isolation.

For future contributors: reuse before creating, extend the token set only when a genuine new need arises, document every new component before it ships, and treat accessibility and consistency as non-negotiable constraints on every decision — not refinements to add later.
