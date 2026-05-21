import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Globe2 } from 'lucide-react';

const Promoters = () => {
  return (
    <section className="py-24 bg-lightGray relative overflow-hidden" id="leadership">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-envGreen/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-darkBlue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emeraldAccents font-semibold tracking-wider uppercase mb-3 block"
          >
            Leadership
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-darkBlue mb-6"
          >
            Our Visionary Promoters
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Guided by decades of medical and environmental expertise, our leadership drives the mission towards a sustainable and healthier planet.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto glassmorphism rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            
            {/* Profile Image & Quick Info */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3 flex flex-col items-center text-center"
            >
              <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl mb-6 border-4 border-white">
                <img 
                  src="/chairman.jpg" 
                  alt="Chairman" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-darkBlue mb-1">Dr. S. Arulrhaj</h3>
              <p className="text-envGreen font-medium mb-4">Chairman & Managing Director</p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                <span className="px-3 py-1 bg-envGreen/10 text-envGreen rounded-full text-sm font-semibold">MD</span>
                <span className="px-3 py-1 bg-envGreen/10 text-envGreen rounded-full text-sm font-semibold">FRCP</span>
                <span className="px-3 py-1 bg-envGreen/10 text-envGreen rounded-full text-sm font-semibold">FICA</span>
              </div>
            </motion.div>

            {/* Detailed Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3"
            >
              <p className="text-gray-700 text-lg mb-8 italic">
                "We believe that a healthy environment is the foundation of a healthy society. Our mission is to engineer solutions that bridge the gap between industrial advancement and ecological preservation."
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <GraduationCap />, title: "Medical Background", desc: "Renowned Physician with global accolades and fellowships." },
                  { icon: <Award />, title: "International Recognition", desc: "Recipient of numerous awards for healthcare and environmental initiatives." },
                  { icon: <Briefcase />, title: "Leadership", desc: "Past National President of the Indian Medical Association (IMA)." },
                  { icon: <Globe2 />, title: "Global Vision", desc: "Pioneering international collaborations in waste management." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors border border-transparent hover:border-gray-200">
                    <div className="w-12 h-12 rounded-lg bg-darkBlue text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-darkBlue mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Promoters;
