
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
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
    <section id="home" className="relative min-h-screen pt-20 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-navy dark:to-gray-900">
      {/* Animated background */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 animate-fade-in-up"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Driving Innovation Through{' '}
              <span className="gradient-text block mt-2">
                <TypeAnimation
                  sequence={[
                    'Technology',
                    2000,
                    'AI Solutions',
                    2000,
                    'Automation',
                    2000,
                    'Cloud Infrastructure',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium">
              Organize. Systemize. Succeed.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              We specialize in scalable cloud infrastructure, AI solutions, custom software development, and innovative technology services that drive your business forward.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#services">
                  <Button className="bg-electric-blue hover:bg-red-600 text-white px-6 py-6">
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#contact">
                  <Button variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue/10 px-6 py-6">
                    Contact Us
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative animate-fade-in"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue/30 to-sunny-yellow/30 blur-xl opacity-70 rounded-3xl animate-pulse-slow"></div>
            <div className="relative bg-white dark:bg-navy/80 p-6 rounded-2xl shadow-xl">
              <motion.img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
                alt="Innovation technology concept"
                className="w-full rounded-lg shadow-lg"
                whileHover={{ y: -5 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
              />
              <div className="mt-4">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
