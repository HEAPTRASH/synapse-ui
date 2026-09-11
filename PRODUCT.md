# Synapse UI

Synapse UI is a React component library for SynapseWare apps (including Lattice). It provides Ant Design–style coverage (General, Layout, Navigation, Data Entry, Data Display, Feedback, Other) built on Radix UI primitives, styled with CSS Modules and semantic CSS variables from the SynapseWare brand guide.

## Goals

- One visual language across product surfaces so features ship without reinventing chrome.
- Accessibility-first controls (Radix) with brand materials: paper/canvas/ink, square corners, hairline rules, scan/frame buttons, Geist + Martian Mono.
- Themeable via `ConfigProvider` and CSS custom properties — not a second styling system.

## Non-goals (this phase)

- Pixel-perfect ports of every marketing generative surface (light field / slot field WebGL).
- Tailwind or CSS-in-JS as the primary styling path.

## Audience

Product engineers building SynapseWare web apps who need consistent, accessible UI primitives aligned to the brand book.
