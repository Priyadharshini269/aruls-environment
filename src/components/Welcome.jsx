import React from 'react';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Environmental Welcome" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-envGreen/10 mix-blend-overlay"></div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-emeraldAccents/10 rounded-full blur-2xl pointer-events-none"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-emeraldAccents font-semibold tracking-wider uppercase mb-2">Welcome To Our Website</h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-darkBlue mb-6 leading-tight">
              Arul’s Energy & <span className="text-envGreen">Environment</span> Pvt Limited
            </h2>
            
            <div className="w-16 h-1 bg-envGreen mb-8 rounded-full"></div>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Arul’s Energy & Environment Pvt Limited (AEEPL) is committed to providing innovative services in the fields of environmental sustainability and renewable energy. Established with a vision to create a greener future, the company focuses on eco-conscious development and sustainable solutions.
            </p>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Our mission is to support environmental protection through renewable energy initiatives, green technologies, and sustainable environmental practices that benefit both society and nature.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              We continuously strive to improve environmental awareness and promote energy-efficient solutions for a healthier and cleaner world.
            </p>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Welcome;
