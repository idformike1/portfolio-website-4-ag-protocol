/**
 * main.js
 * Project Entry Point
 */

// 1. Initialize Animation Engine (GSAP + Plugins)
import { animationEngine } from "./core/AnimationEngine.js";

// 2. Initialize Smooth Scroll (Lenis + ScrollTrigger Bridge)
import { smoothScroll } from "./core/SmoothScroll.js";

// Log initialization status
console.log("🚀 AG Protocol: Core Logic Successfully Injected.");
console.log("---");
console.log("Grid Ratios: 12-Column Fluid");
console.log("Smooth Scroll Lerp: 0.1 (Weighted)");
console.log("Animation Engine: GSAP Active");
