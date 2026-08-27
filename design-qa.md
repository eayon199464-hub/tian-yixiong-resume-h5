# Design QA — SDF Procedural Liquid Metal

## Comparison Target

- Source visual truth (PC): `audit-liquid-metal/01-pc-liquid-metal.png`
- Source visual truth (mobile): `audit-liquid-metal/02-mobile-liquid-metal.png`
- Final implementation (PC): `qa-sdf/08-final-pc.png`
- Final implementation (mobile): `qa-sdf/07-sdf-mobile.png`
- Full before/after comparison: `qa-sdf/11-final-comparison.jpg`
- Focused edge comparison: `qa-sdf/10-edge-focus-comparison.jpg`

## Normalization

- PC source and implementation: 1440 × 900 pixels, 1440 × 900 CSS viewport, device scale factor 1.
- Mobile source and implementation: 393 × 852 pixels, 393 × 852 CSS viewport, device scale factor 1.
- State: Chinese, 2020 INTERONE selected, motion enabled, first viewport at scroll position 0.
- Both comparisons use the same content, crop, viewport, background and selected chapter.

## Full-view Comparison

- The editorial layout, typography, content hierarchy, timeline, glass panels and warm-paper palette remain aligned with the source.
- The metal silhouette and its relationship to the panel and timeline remain recognizable.
- The implementation intentionally replaces the source's detailed raster chrome with broader procedural reflections. This is the requested rendering change rather than accidental layout drift.
- PC and mobile retain the same responsive composition with no horizontal overflow.

## Focused Edge Comparison

- The previous transparent-PNG implementation shows a light contaminated fringe along the outer contour and inner openings.
- The final implementation uses SDF coverage and premultiplied output. Outer contours and openings transition directly into the page background without the previous white halo.
- A subtle dark metallic rim remains as intentional surface shading; it does not expose transparent white pixels.

## Required Fidelity Surfaces

- Fonts and typography: unchanged from the source implementation; weights, wrapping and hierarchy remain stable on PC and mobile.
- Spacing and layout rhythm: unchanged; hero, panel, timeline and controls preserve the existing grid and responsive breakpoints.
- Colors and visual tokens: paper, ink, orange, blue and glass tokens are unchanged. Procedural chrome stays neutral silver/black with warm reflected highlights.
- Image quality and asset fidelity: the full-color PNG is no longer sampled as visible color. Its alpha is converted once into an SDF mask; the shader supplies all visible metal color and reflection. White alpha fringing is removed.
- Copy and content: unchanged.

## Interaction and Runtime Checks

- Year selection: selecting 2025 BYD updates the selected tab and scene to `4`.
- Click response: the click origin produces a temporary ripple/refraction and highlight response in the procedural normals.
- Motion control: `动态 ON` toggles to `动态 OFF` and returns to `动态 ON`.
- Mobile reflow: verified at 393 × 852 with zero horizontal page overflow.
- WebGL fallback class was not triggered in the tested browser.
- Console: no warnings or errors in the final PC capture.
- Build and Sites worker tests pass.

## Comparison History

1. Initial SDF pass — `qa-sdf/01-sdf-pc.jpg`
   - Finding: P1 serrated/high-frequency specular edge caused by a chamfer distance field and high-gain edge normals.
   - Fix: replaced the chamfer field with a two-pass Euclidean distance transform and added five-tap SDF smoothing.

2. Smoothed edge passes — `qa-sdf/02-sdf-pc-smoothed.jpg` and `qa-sdf/03-sdf-pc-clean-edge.jpg`
   - Finding: P2 bright double-outline around the silhouette and inner openings.
   - Fix: removed direct high-gain SDF-gradient lighting, tightened SDF coverage and removed the artificial inner highlight rim.

3. Clean but flat pass — `qa-sdf/04-sdf-pc-no-halo.jpg`
   - Finding: P2 procedural reflection appeared too flat and repetitive compared with the liquid-metal target.
   - Fix: introduced broad low-frequency environment bands, macro and micro normal waves, and a low-strength wide-kernel bevel.

4. Final pass — `qa-sdf/08-final-pc.png` and `qa-sdf/07-sdf-mobile.png`
   - Result: no actionable P0/P1/P2 findings remain. Layout is preserved, the metal reads as reflective, interactions work, and the white alpha fringe is removed.

## Follow-up Polish

- P3: the procedural chrome is intentionally smoother and less optically intricate than the original raster render. A future art-direction pass could add a restrained secondary environment reflection without changing the SDF edge pipeline.
- Real-device Safari/Android GPU frame pacing and thermal behavior still require physical-device testing.

final result: passed
