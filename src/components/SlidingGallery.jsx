import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const slider1 = [
  { color: "#e3e5e7", src: "https://images.unsplash.com/photo-1510605395823-5b6c2ff9ba78?q=80&w=600&auto=format&fit=crop" },
  { color: "#d6d7dc", src: "https://images.unsplash.com/photo-1519638828323-21443423528b?q=80&w=600&auto=format&fit=crop" },
  { color: "#e3e3e3", src: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=600&auto=format&fit=crop" },
  { color: "#212121", src: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=600&auto=format&fit=crop" },
];

const slider2 = [
  { color: "#e3e5e7", src: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=600&auto=format&fit=crop" },
  { color: "#d6d7dc", src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop" },
  { color: "#e3e3e3", src: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=600&auto=format&fit=crop" },
  { color: "#212121", src: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=600&auto=format&fit=crop" },
];

/**
 * SlidingGallery Component
 * Implements two horizontally scrolling rows with opposite parallax.
 */
const SlidingGallery = () => {
  const container = useRef(null);
  const firstSlider = useRef(null);
  const secondSlider = useRef(null);
  const shadowWrapper = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax for Slider 1 (Right)
    gsap.to(firstSlider.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      x: 150,
    });

    // Parallax for Slider 2 (Left)
    gsap.to(secondSlider.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      x: -150,
    });

    // Geometric Mask Curve: Height animation for .shadow-wrapper
    gsap.to(shadowWrapper.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "bottom bottom", // Start when bottom of gallery enters
        end: "bottom top",    // End when gallery is off-screen
        scrub: true,
      },
      height: 0,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={container} className="sliding-gallery">
      <div className="sliding-gallery__wrapper">
        
        {/* Row 1 */}
        <div ref={firstSlider} className="sliding-gallery__row">
          {slider1.map((project, index) => (
            <div key={`row1-${index}`} className="project-card" style={{ backgroundColor: project.color }}>
              <div className="project-card__image">
                <img src={project.src} alt="Project" />
              </div>
            </div>
          ))}
          {/* Duplicate for continuity */}
          {slider1.map((project, index) => (
            <div key={`row1-dup-${index}`} className="project-card" style={{ backgroundColor: project.color }}>
              <div className="project-card__image">
                <img src={project.src} alt="Project" />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div ref={secondSlider} className="sliding-gallery__row">
          {slider2.map((project, index) => (
            <div key={`row2-${index}`} className="project-card" style={{ backgroundColor: project.color }}>
              <div className="project-card__image">
                <img src={project.src} alt="Project" />
              </div>
            </div>
          ))}
          {/* Duplicate for continuity */}
          {slider2.map((project, index) => (
            <div key={`row2-dup-${index}`} className="project-card" style={{ backgroundColor: project.color }}>
              <div className="project-card__image">
                <img src={project.src} alt="Project" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Larose Method: Geometric Mask Curve */}
      <div ref={shadowWrapper} className="shadow-wrapper">
        <div className="shadow"></div>
      </div>
    </section>
  );
};

export default SlidingGallery;
