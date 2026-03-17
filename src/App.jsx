import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { animationEngine } from './core/AnimationEngine';
import { smoothScroll } from './core/SmoothScroll';

function App() {
  useEffect(() => {
    // Scroll and Interaction Engines already initialized in main.jsx or via imports
    console.log("🚀 App Root: Mounted.");
  }, []);

  return (
    <div id="app">
      <Navbar />
      
      <main data-scroll-container>
        <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1>PHASE 2.1:<br />MAGNETIC NAV ACTIVE</h1>
        </section>
        
        <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', color: '#1c1d20' }}>
          <h2>SMOOTH SCROLL LOADED</h2>
        </section>
        
        <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2>GSAP ENGINE READY</h2>
        </section>

        <footer style={{ padding: '4rem', textAlign: 'center' }}>
          <p>© 2026 Dennis Snellenberg Clone Concept</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
