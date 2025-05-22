
import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      const size = Math.random() * 10 + 3;
      const posX = Math.random() * window.innerWidth;
      
      // Configure particle
      particle.className = 'absolute rounded-full bg-electric-blue/20 animate-particles';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}px`;
      particle.style.top = '100%';
      particle.style.animationDuration = `${Math.random() * 10 + 15}s`;
      
      particlesRef.current.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode === particlesRef.current) {
          particlesRef.current.removeChild(particle);
        }
      }, 25000);
    };
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
      createParticle();
    }
    
    // Continue creating particles
    const interval = setInterval(createParticle, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>
  );
};

export default ParticleBackground;
