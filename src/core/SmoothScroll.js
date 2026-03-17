import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * SmoothScroll
 * Orchestrates the Lenis scroll instance and connects it to GSAP.
 */
class SmoothScroll {
  constructor() {
    this.lenis = null;
    this.init();
  }

  init() {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo ease
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.1, // "Weighted" feel from the reference
    });

    // Connect Lenis to GSAP ScrollTrigger
    this.lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      this.lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    console.log("🌊 SmoothScroll: Lenis Active & Linked to GSAP.");
  }

  scrollTo(target, options = {}) {
    this.lenis.scrollTo(target, options);
  }
}

export const smoothScroll = new SmoothScroll();
