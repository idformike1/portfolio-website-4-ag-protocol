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
              <div className="footer__author">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Author" />
              </div>
              <h2>Let's work together</h2>
            </div>
            
            <div className="footer__button-wrapper">
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
            <Magnetic force={0.15}>
                <a href="mailto:hello@dennis.com" className="pill-button">hello@dennis.com</a>
            </Magnetic>
          </div>
          <div className="contact-item">
            <Magnetic force={0.15}>
                <a href="tel:+31612345678" className="pill-button">+31 6 123 456 78</a>
            </Magnetic>
          </div>
          <div className="contact-item">
            <p className="location-text">Eindhoven, The Netherlands</p>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__socials">
            <div className="social-item">
                <Magnetic force={0.3}>
                    <a href="#linkedin">LinkedIn</a>
                </Magnetic>
            </div>
            <div className="social-item">
                <Magnetic force={0.3}>
                    <a href="#twitter">Twitter</a>
                </Magnetic>
            </div>
            <div className="social-item">
                <Magnetic force={0.3}>
                    <a href="#instagram">Instagram</a>
                </Magnetic>
            </div>
          </div>
          
          <div className="footer__copyright">
            <p>© 2026 Dennis Snellenberg Clone</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
