// utils/animation.js
import React, { useState, useEffect, useRef } from 'react';

/**
 * UTILITIES & HOOKS
 * (Extracted from the original App.js)
 */

// Custom Hook for Scroll Reveal Animation
// Custom Hook for Scroll Reveal Animation
export const useReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
        // 🔑 FIX 1: Use the 'ref.current' from the scope if it exists,
        // but it's cleaner to ensure we only unobserve if the target exists 
        // and was observed in the first place.
        if (ref.current) {
          observer.unobserve(ref.current);
        }
    };
  }, []); // Dependency array is empty, which is correct for this use case

  return [ref, isVisible];
};

// Reveal Wrapper Component
export const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, isVisible] = useReveal();
  // Duration and transition classes from original code
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// 3D Tilt Card Component (Modified to be the core logic)
// 3D Tilt Card Component
export const useTilt = (maxRotate = 5) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return; // This is correctly implemented
    // ... rest of handleMouseMove logic ...
  };

  const handleMouseLeave = () => {
    // 🔑 FIX 2: Add null check for safety
    if (!cardRef.current) return; 

    setTransform('perspective(1000px) rotateX(0) rotateY(0) scale(1)');
  };

  // Return the ref, the transform style, and the handlers
  return { cardRef, transform, handleMouseMove, handleMouseLeave };
};