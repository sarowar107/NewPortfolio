import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animateParticles = async () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      await controls.start(i => ({
        x: Math.random() * containerWidth,
        y: Math.random() * containerHeight,
        transition: {
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        },
      }));
    };

    animateParticles();
  }, [controls]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0" ref={containerRef}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
            }}
            custom={i}
            animate={controls}
            initial={{
              x: Math.random() * (containerRef.current?.offsetWidth || window.innerWidth),
              y: Math.random() * (containerRef.current?.offsetHeight || window.innerHeight),
              scale: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sarowar Islam
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            BSc Engineering Student at CUET
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about creating innovative solutions through code. 
            Specializing in web development and software engineering.
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:sarowar@example.com" 
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="mx-auto text-purple-400" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Parallax effect */}
      <div 
        className="absolute bottom-10 left-0 right-0 text-center"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <p className="text-gray-500">Scroll to explore</p>
      </div>
    </section>
  );
};

export default HeroSection;
