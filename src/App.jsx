import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import WorkGallery from './components/WorkGallery';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import { animationEngine } from './core/AnimationEngine';
import { smoothScroll } from './core/SmoothScroll';

function App() {
  useEffect(() => {
    // Scroll and Interaction Engines already initialized in main.jsx or via imports
  }, []);

  return (
    <div id="app">
      <Cursor />
      <Navbar />
      
      <main data-scroll-container>
        <Hero />
        <Narrative />
        <WorkGallery />
        
        <section style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', color: '#1c1d20' }}>
          <h2>SMOOTH SCROLL LOADED</h2>
        </section>
        
        <Footer />
      </main>
    </div>
  );
}

export default App;
