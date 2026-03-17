import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * AnimationEngine
 * Responsible for GSAP configuration and plugin registration.
 */
class AnimationEngine {
  constructor() {
    this.init();
  }

  init() {
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // Global Eases (Mapped from _tokens.scss)
    // We define them here as reusable GSAP eases if needed
    this.eases = {
      expoOut: "expo.out", // Corresponds to cubic-bezier(0.19, 1, 0.22, 1)
      power3Out: "power3.out", // Corresponds to cubic-bezier(0.215, 0.61, 0.355, 1)
    };
  }

  getEase(name) {
    return this.eases[name] || "power2.out";
  }
}

export const animationEngine = new AnimationEngine();
