import React from 'react';
import Magnetic from './Magnetic';

/**
 * Narrative Component
 * Implements the "Helping brands" statement with a magnetic "About" button.
 */
const Narrative = () => {
  return (
    <section className="narrative">
      <div className="narrative__container">
        <div className="narrative__content">
          <div className="narrative__statement">
            <h2>
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
