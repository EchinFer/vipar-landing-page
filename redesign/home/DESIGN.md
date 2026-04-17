# Design System Specification: Architectural Precision

## 1. Overview & Creative North Star: "The Digital Blueprint"
This design system is anchored in the concept of **"The Digital Blueprint."** It rejects the whimsical and the decorative in favor of architectural rigor, structural integrity, and executive clarity. We are not just building screens; we are drafting environments that command respect through "aire" (intentional white space) and geometric precision.

To move beyond "standard" corporate UI, we utilize **Intentional Asymmetry**. By aligning key content to a strict 12-column grid but allowing hero imagery or secondary data-viz to bleed off-axis, we create a sense of dynamic stability. This is a "living document" aesthetic—serious, organized, and unmistakably premium.

---

## 2. Colors: Tonal Architecture
The palette is rooted in high-contrast "Graphite" and "Petroleum," stabilized by an expansive range of architectural greys.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for defining layout sections. Boundaries must be articulated through **Tonal Shifting**. A section transition is marked by moving from `surface` (#f9f9f9) to `surface-container-low` (#f3f3f3). This creates a seamless, "milled" look rather than a stitched-together one.

### Surface Hierarchy & Nesting
Treat the interface as a physical stack of premium materials (ivory paper, brushed steel, frosted glass).
*   **Base:** `background` (#f9f9f9)
*   **Structural Sections:** `surface-container-low` (#f3f3f3)
*   **Interactive Cards:** `surface-container-lowest` (#ffffff) sitting atop a `surface-container` background to create a "lift" through contrast, not shadows.

### The "Glass & Soul" Rule
To prevent the "Architectural" style from feeling cold, use **Petroleum Glassmorphism** for floating navigation or modal overlays. 
*   **Formula:** `primary_container` (#1B365D) at 85% opacity + 20px Backdrop Blur.
*   **Signature Texture:** Use a subtle linear gradient (45deg) from `primary` (#002046) to `primary_container` (#1B365D) for hero buttons to give them a "machined" depth.

---

## 3. Typography: The Editorial Voice
Our typography pairing is a dialogue between industrial strength and humanistic clarity.

*   **Display & Headlines (Manrope):** These are our "Structural Beams." Use **Bold (700)** or **Extra-Bold (800)** for all `display-` and `headline-` tokens. The tight kerning and geometric arcs of Manrope convey authority. Use `display-lg` (3.5rem) with generous top-margin to establish clear entry points.
*   **Body & Labels (Inter):** These are the "Technical Specifications." Inter provides neutral, highly legible clarity. Use `body-lg` (1rem) for standard reading and `label-md` (0.75rem) for metadata.
*   **Hierarchy:** Always maintain a 2:1 ratio for white space between a headline and its preceding section to ensure the "Architectural" breathing room is preserved.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to simulate height; we use light and material density.

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-high` background creates an immediate perception of elevation without a single drop shadow.
*   **Ambient Shadows:** If a floating element (like a dropdown) requires separation, use an **Ambient Bloom**: `rgba(26, 28, 28, 0.04)` with a 32px blur and 8px Y-offset. It should feel like a soft glow of light, not a shadow.
*   **The "Ghost Border":** For internal card elements (like input fields), use the `outline_variant` (#c4c6cf) at **20% opacity**. This creates a "precision-etched" line that guides the eye without cluttering the visual field.

---

## 5. Components: Precision Primitives

### Buttons: The Weighted Command
*   **Primary:** Solid `primary` (#002046) with `on_primary` (#ffffff) text. Shape: `xl` (0.75rem / 12px) rounding. No border.
*   **Secondary:** `surface-container-highest` background with `primary` text. This feels like a button carved out of the surface itself.
*   **Tertiary:** No background. Underlined on hover with a 2px stroke of `primary_fixed`.

### Input Fields: The Etched Slot
*   **Static State:** `surface-container-lowest` background with a 1px Ghost Border.
*   **Focus State:** Border opacity increases to 100% using `primary_container` (#1B365D), and a subtle 2px outer "glow" using `primary_fixed` at 30% opacity.

### Cards & Lists: The Negative Space Rule
*   **Cards:** Forbid divider lines. Separate content blocks using `1.5rem` (24px) of vertical padding.
*   **Lists:** Instead of 1px dividers, use a alternating background shift (`surface` to `surface-container-low`) or simply 16px of "aire" between items.

### Signature Component: The "Data Monolith"
For VIPAR S.A., use a custom component for key metrics: A `surface-container-lowest` card with a 4px left-accent border in `primary` (#002046) and `display-sm` typography for the value. It should look like a structural column.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace the Grid:** Align every element to the 8px base unit. Precision is our primary brand signal.
*   **Use High-Contrast Type:** Pair a `display-lg` headline with a `body-sm` caption nearby to create a sophisticated, editorial "Big/Small" dynamic.
*   **Nesting:** Place `surface-container-highest` elements inside `surface` containers to create logical grouping.

### Don't:
*   **No Rounded Pills:** Do not use `full` (9999px) rounding for buttons. Stick to the `xl` (12px) or `lg` (8px) architectural radius.
*   **No Pure Black:** Never use #000000. Use `on_background` (#1a1c1c) for text to maintain a premium Graphite feel.
*   **No Clutter:** If a screen feels "busy," increase the white space (aire) rather than adding borders or dividers to organize it.