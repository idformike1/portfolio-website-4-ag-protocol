import { useRef, useEffect } from "react";
import gsap from "gsap";

/**
 * useMagnetic Hook
 * Creates a magnetic effect where an element follows the cursor subtly within its orbit.
 * 
 * @param {number} force - The strength of the pull (0.5 is standard).
 */
export default function useMagnetic(force = 0.5) {
  const magneticRef = useRef(null);

  useEffect(() => {
    const element = magneticRef.current;
    if (!element) return;

    const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "power3.out" });
    const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "power3.out" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();
      
      // Calculate center position
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Distance from center to cursor
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      // Apply force and move
      xTo(deltaX * force);
      yTo(deltaY * force);
    };

    const handleMouseLeave = () => {
      // Return to center
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [force]);

  return magneticRef;
}
