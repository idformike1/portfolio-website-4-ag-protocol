import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';

// Initialize Core Engines
import { animationEngine } from './core/AnimationEngine';
import { smoothScroll } from './core/SmoothScroll';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log("🚀 AG Protocol: React Environment Active.");
