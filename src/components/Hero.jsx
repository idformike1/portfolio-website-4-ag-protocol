import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Hero Component
 * Implements the bisection layout with parallax typography reveal.
 */
const Hero = () => {
  const sectionRef = useRef(null);
  const h1Ref = useRef(null);
  const globeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Parallax text movement
    tl.to(h1Ref.current, {
      xPercent: -20,
      ease: "none"
    }, 0);

    // Subtle globe parallax
    tl.to(globeRef.current, {
      yPercent: 30,
      ease: "none"
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero">
      <div className="hero__globe-container">
        <div ref={globeRef} className="hero__globe">
            {/* Future Globe/Image Placeholder */}
        </div>
      </div>

      <div className="hero__content">
        <div className="hero__top-description">
            <p className="hero-p">
              Freelance <br /> Designer & Developer
            </p>
        </div>

        <div className="hero__main-title">
          <h1 ref={h1Ref}>
            Dennis <br /> Snellenberg
          </h1>
        </div>
      </div>
      
      <div className="hero__footer">
        <div className="hero__footer-links">
            <div className="hero-scroll-indicator">
                {/* Scroll SVG Icon */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3V17M10 17L15 12M10 17L5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
