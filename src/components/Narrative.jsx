import React, { useEffect, useRef } from 'react';
import Magnetic from './Magnetic';
import SplitType from 'split-type';
import gsap from 'gsap';

/**
 * Narrative Component
 * Implements the "Helping brands" statement with a magnetic "About" button.
 */
const Narrative = () => {
  const statementRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const text = new SplitType(statementRef.current, { types: 'lines' });
    
    // Wrap lines in a div for masking
    text.lines.forEach(line => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('line-mask');
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    gsap.from(text.lines, {
      scrollTrigger: {
        trigger: statementRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      y: "100%",
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });

    // Section Fade-in logic
    gsap.fromTo(sectionRef.current, 
      { opacity: 0 }, 
      { 
        opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        }
      }
    );

    return () => {
      text.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="narrative reveal-section">
      <div className="narrative__container">
        <div className="narrative__content">
          <div className="narrative__statement">
            <h2 ref={statementRef} className="reveal-text">
              Helping brands to stand out in the digital age. Together we will set the new status quo. No nonsense, always on edge.
            </h2>
          </div>
          
          <div className="narrative__details">
            <p>
              The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
            </p>
            
            <div className="narrative__button-wrapper">
              <Magnetic force={0.6}>
                <div className="circular-button">
                  <a href="#about" className="circular-button__link">
                    <span>About me</span>
                  </a>
                </div>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Narrative;
