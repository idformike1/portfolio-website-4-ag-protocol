# Project DNA Blueprint: Portfolio Website 4

## 1. Grid & Layout Architecture
- **System:** 12-Column Fluid Grid
- **Max Width:** `1600px`
- **Margins:** Adaptive horizontal padding (~`62px` at desktop, fluid)
- **Gutters:** `0px` external, logic handled via internal component padding
- **Breakpoints:**
  - Desktop: `1200px+` (12 columns)
  - Tablet: `768px - 1199px` (6 columns)
  - Mobile: `< 768px` (2 columns)

## 2. Typography Scale (Fluid)
- **Primary Typeface:** "Custom Dennis Sans" (Geometric Sans-Serif)
- **Base Size:** `16px`
- **H1 (Hero):** `155.7px` | Weight: 450 | LH: 1.0 (Fluid)
- **H2 (Section Header):** `39px` | Weight: 450 | LH: 1.1
- **H3 (Subheader):** `32px` | Weight: 450
- **Body:** `18px - 20px` | Weight: 400 | LH: 1.5
- **Metadata:** `14px` | Upper Case | Spacing: 0.1em

## 3. Motion & Interaction (GSAP)
- **Ease Curves:**
  - Main Reveal: `Expo.easeOut` (`cubic-bezier(0.19, 1, 0.22, 1)`)
  - Smooth Scroll: `Power3.easeOut` (Interpolation: 0.1)
  - Magnetic Hover: Custom Elastic-inspired snappiness
- **Durations:**
  - Page Transitions: `1.2s - 1.5s`
  - Hover States: `0.4s`
  - Magnetic Response: `0.5s` (Inertia based)
- **Plugins:** `ScrollTrigger`, `Draggable`, `SplitType`

## 4. Design System Tokens (HSL/HEX)
- **Canvas:** `#1C1D20` (Rich Charcoal)
- **Paper:** `#FFFFFF` (Pure White)
- **Ink (Primary):** `#FFFFFF` (On Dark) / `#1C1D20` (On Light)
- **Ink (Secondary):** `#999D9E` (Muted Grey)
- **Accent:** Custom branding color (TBD per project assets)
