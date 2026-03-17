import React from 'react';
import useMagnetic from '../hooks/useMagnetic';

/**
 * Magnetic Component
 * A wrapper that applies the magnetic effect to its children.
 */
const Magnetic = ({ children, force = 0.5 }) => {
  const magneticRef = useMagnetic(force);

  return (
    <div ref={magneticRef} style={{ display: 'inline-block' }}>
      {children}
    </div>
  );
};

export default Magnetic;
