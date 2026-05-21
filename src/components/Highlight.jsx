import React from 'react';
import { motion } from 'framer-motion';

const Highlight = () => {
  return (
    <section className="py-24 bg-white flex items-center justify-center text-center">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-darkBlue leading-tight">
            We Are <span className="text-envGreen drop-shadow-sm">ECO Green</span>, Our Activities Are Taken Around The World.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlight;
