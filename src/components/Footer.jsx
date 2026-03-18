import React from 'react';
import Magnetic from './Magnetic';

/**
 * Footer Component
 * Implements the kinetic contact section with a large CTA and magnetic interactions.
 */
const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__cta-group">
            <div className="footer__header">
              <div className="footer__header-text">
                <div className="footer__author">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Author" />
                </div>
                <h2>Let's work <br /> together
                  <span className="footer__arrow">↘</span>
                </h2>
              </div>
            </div>
            
            <div className="footer__button-wrapper">
              <div className="footer__separator-line"></div>
              <Magnetic force={0.8}>
                   <div className="circular-button circular-button--footer">
                       <a href="mailto:hello@dennis.com" className="circular-button__link">
                           <span>Get in touch</span>
                       </a>
                   </div>
               </Magnetic>
            </div>
          </div>
        </div>

        <div className="footer__contact-info">
          <div className="contact-item">
            <Magnetic force={0.05}>
                <a href="mailto:hello@dennis.com" className="pill-button">info@dennissnellenberg.com</a>
            </Magnetic>
          </div>
          <div className="contact-item">
            <Magnetic force={0.05}>
                <a href="tel:+31612345678" className="pill-button">+31 6 27 84 74 30</a>
            </Magnetic>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-section">
            <div className="footer__meta-group">
              <div className="meta-item">
                 <span className="footer__label">VERSION</span>
                 <p>2022 © Edition</p>
              </div>
              <div className="meta-item">
                 <span className="footer__label">LOCAL TIME</span>
                 <p>06:07 AM GMT+1</p>
              </div>
            </div>

            <div className="footer__socials-group">
               <span className="footer__label">SOCIALS</span>
               <div className="footer__socials-links">
                 <Magnetic force={0.3}><a href="#awwwards">Awwwards</a></Magnetic>
                 <Magnetic force={0.3}><a href="#instagram">Instagram</a></Magnetic>
                 <Magnetic force={0.3}><a href="#twitter">Twitter</a></Magnetic>
                 <Magnetic force={0.3}><a href="#linkedin">LinkedIn</a></Magnetic>
               </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
