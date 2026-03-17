import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Cursor Component
 * A high-fidelity custom cursor with spring-loaded "flare" interaction.
 */
const Cursor = () => {
  const cursorRef = useRef(null);
  const flareRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const flare = flareRef.current;

    // Use quickTo for the main cursor (sticky/responsive)
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });

    // Flare has a higher delay for the "water-like" feel (Audit: 0.15 lerp)
    const flareXTo = gsap.quickTo(flare, "x", { duration: 0.6, ease: "power2.out", delay: 0 });
    const flareYTo = gsap.quickTo(flare, "y", { duration: 0.6, ease: "power2.out", delay: 0 });

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      xTo(clientX);
      yTo(clientY);
      
      // We manually implement the 0.15 lerp feel by using a longer duration or specific GSAP configuration
      // For AG Refinement, we'll use duration: 0.6 to simulate the 0.15 lerp weight
      flareXTo(clientX);
      flareYTo(clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={flareRef} className="custom-cursor-flare"></div>
    </>
  );
};

export default Cursor;
