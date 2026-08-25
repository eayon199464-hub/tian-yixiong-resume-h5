# Design QA

## Visual target

- Source: `design-reference-selected.png`
- Selected direction: morphing chrome career ribbon, warm editorial paper, black condensed typography, orange active state and blue interaction marker
- Source dimensions: 1536 × 1024

## Implementation evidence

- Desktop screenshot: `qa-desktop.png`
- Mobile screenshot: `qa-mobile-top.png`
- Side-by-side comparison: `qa-comparison.png`
- Motion-state preview: `interaction-preview.gif`
- Desktop viewport: 1440 × 1024, standard density, Chinese, INTERONE selected
- Mobile viewport: 390 × 844, standard density, Chinese, INTERONE selected

## Visual comparison findings

- Preserved the defining visual grammar: oversized black typography, warm paper ground, oversized chrome ribbon, orange chronology state, blue click signal and editorial rule system.
- Adapted the static concept into a usable information hierarchy: the role story sits above a structured contribution/evidence/recognition grid without relying on card-heavy UI.
- Desktop hierarchy is visually balanced and the interactive timeline remains visible in the first viewport.
- Mobile has no horizontal overflow (`scrollWidth = viewport width = 390`) and keeps the selected career chapter readable in the first screen, with the timeline immediately below in the same scene.
- No P0, P1 or P2 visual defects remain.

## Interaction QA

- Timeline click: passed; active year, chapter content and chrome composition change.
- Stage click: passed; left/right side advances to adjacent chapter with click-wave feedback.
- Keyboard: passed; arrow keys and number keys select chapters.
- Language toggle: passed; UI and chapter content switch between Chinese and English.
- Motion control: passed; `reduce-motion` mode disables nonessential animations and transitions.
- Anchor navigation: passed; career path, capabilities and contact anchors scroll to the correct section.
- Download and email links: passed; DOCX and `mailto:` targets are present.
- Console warnings/errors: none.

## Iteration history

1. Replaced the initial static composition with a real React interaction model.
2. Added scene-specific chrome transforms, View Transition chapter wipes and click-wave feedback.
3. Added responsive mobile layout, keyboard controls and reduced-motion support.
4. Completed English chapter translations so the language toggle does not expose mixed-language content.

## Final result

passed
