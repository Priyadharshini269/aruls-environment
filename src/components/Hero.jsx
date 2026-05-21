import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/hero_slide_1.png",
      heading: "Nuclear Energy... is an Essential Sources",
      subheading: "For Green Energy Needs",
      description: "we know the best way achieve it..."
    },
    {
      image: "/hero_slide_2.png",
      heading: "Protect Nature for a Better Tomorrow",
      subheading: "Creating a Sustainable Green Environment",
      description: "committed to eco-friendly energy and environmental solutions."
    },
    {
      image: "/hero_slide_3.png",
      heading: "Together We Can Save Our Planet",
      subheading: "Building a Cleaner and Greener Future",
      description: "supporting renewable energy and environmental sustainability."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden" id="home">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply z-10" />
          <img 
            src={slides[currentSlide].image} 
            alt="Environmental Banner" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-xl md:text-3xl text-emeraldAccents font-medium tracking-wide mb-4 shadow-sm uppercase">
                  {slides[currentSlide].subheading}
                </h2>
                <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-6 drop-shadow-2xl">
                  {slides[currentSlide].heading}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 font-light drop-shadow-md">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'w-10 bg-envGreen' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
