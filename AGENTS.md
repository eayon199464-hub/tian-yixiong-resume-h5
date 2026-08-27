# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Selected design direction

- Use the selected "Chrome Fold Manifesto" visual: warm off-white editorial field, oversized black typography, liquid-metal chrome ribbon, international-orange active state, and small ultramarine technical markers.
- Interaction is a core requirement. Clicking a career year must materially transform the composition: the chrome ribbon morphs, adjacent years compress, and the selected project content grows from the click origin with masked text entry.
- Scroll should drive continuous motion between career chapters. Include strong hover/click feedback, keyboard navigation, and a visible reduced-motion control.
- Preserve factual resume content. The visual mock is design reference only and must not be treated as a factual source for dates, roles, awards, or metrics.
- Render the hero ribbon from an independent mask/SDF and a procedural chrome shader. Do not return to distorting a full-color transparent PNG; PC and mobile must avoid white alpha fringes while preserving click refraction and reduced-motion behavior.
