
import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const setupScrollAnimation = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });
      
      reveals.forEach(item => {
        observer.observe(item);
      });
      
      return () => {
        reveals.forEach(item => {
          observer.unobserve(item);
        });
      };
    };
    
    const timeout = setTimeout(setupScrollAnimation, 100);
    return () => clearTimeout(timeout);
  }, []);
  
  return null;
};

export default ScrollAnimation;
