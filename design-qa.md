# Design QA — WebGL Liquid Metal Revision

## Comparison target

- Source visual truth: `/Users/eayon/.codex/generated_images/019fb12c-c216-7900-9077-9c120e9827c4/exec-93eb1613-3371-4771-be29-515150c26bb0.png`
- Project copy: `design-reference-selected.png`
- Implementation screenshot: `qa-v2-comparison-impl.png`
- Full-view comparison: `qa-v2-comparison.png`
- Focused content comparison: `qa-v2-focus.png`
- Motion evidence: `interaction-preview-v2.gif`
- Mobile evidence: `qa-v2-mobile.png`

## Normalization

- Source pixels: 1536 × 1024.
- Implementation pixels: 1536 × 1024.
- Browser CSS viewport: 1536 × 1024.
- Effective capture density: 1×.
- State: Chinese, 2020–2021 INTERONE / BMW JOYCUBE selected, warm-paper theme.
- Source and implementation were compared at equal crop, equal pixels and equal interaction state.

## Findings

- No remaining P0, P1 or P2 findings.
- Typography: the implementation restores the source hierarchy — oversized vertical Chinese name, compact identity lockup, condensed all-caps project title, small bilingual labels and dense editorial body copy. The selected free web/system fonts are not the source's unknown commercial font, which remains a P3 optical difference.
- Spacing and layout: the first screen again uses one continuous metal-enclosed composition. The timeline occupies the left metal lobe and the role/contribution/award content sits inside the right cavity. The previous detached right-hand card is gone.
- Colors and tokens: warm paper, black, orange active state and blue technical marker match the source visual grammar.
- Image and material quality: the chrome asset remains a generated source asset, but it is now sampled by a live WebGL fragment shader. Time, pointer and click uniforms drive localized UV displacement, refraction rings and moving specular highlights. It is not moved as a flat DOM image.
- Copy and content: `BMW JOYCUBE` is restored as the selected project title. Role and award copy intentionally differs from the concept image where necessary to preserve factual resume accuracy.
- Responsive behavior: 390 × 844 has no horizontal overflow (`scrollWidth = viewport width = 390`) and retains the WebGL canvas. The vertical name is intentionally removed on mobile to prevent collision with the profile lockup.

## Focused-region evidence

- `qa-v2-focus.png` compares the project title, role block, contribution column, award column and enclosing chrome boundary at equal scale.
- The implementation preserves the source's large-title-to-small-metadata contrast and uses the metal cavity as the information container rather than adding a card surface.

## Interaction and rendering QA

- Continuous rendering: passed; metal pixels change between idle frames through shader time/noise uniforms.
- Click response: passed; clicking the metal or timeline sends a normalized click origin to the fragment shader and produces an expanding localized refraction wave.
- Content reconstruction: passed; chapter content and project title change with the selected timeline year.
- Pointer response: passed; pointer position bends the sampling field without moving the canvas element.
- Reduced motion: passed; two frames captured 550 ms apart in reduced-motion mode had a pixel-difference score of `0.0`.
- Keyboard selection: retained; arrow keys and number keys 1–6 switch chapters.
- Console warnings/errors: none.
- Build and worker tests: passed.

## Comparison history

### Iteration 1 — blocked

- [P1] Composition drift: the implementation used a marketing headline on the left and a detached translucent content card on the right, while the source used a single metal-enclosed career composition.
- [P1] Material behavior drift: two PNG layers were only translated, scaled and filtered with CSS; the metal surface itself did not deform.
- [P2] Selected project mismatch: the source centered `BMW JOYCUBE`, while the implementation centered the employer name `INTERONE`.

### Iteration 2 — fixed

- Rebuilt the hero around the source's vertical name, identity lockup, left-lobe timeline and right-cavity project layout.
- Replaced the two DOM image layers with a WebGL canvas and fragment shader using procedural flow, click-origin ripples, localized refraction and animated specular response.
- Added factual per-experience project titles, with `BMW JOYCUBE` for the selected INTERONE chapter.
- Removed the detached card treatment and revalidated desktop, mobile, click, continuous motion and reduced-motion states.

## Follow-up polish

- P3: a licensed display typeface closer to the concept could narrow the remaining letterform difference.
- P3: a purpose-built 3D mesh exported from Blender would allow true silhouette deformation and camera parallax beyond the current pixel-space shader refraction.

## Final result

passed
