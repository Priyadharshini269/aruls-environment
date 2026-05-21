import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  Factory, 
  Landmark, 
  Building, 
  Pill, 
  TestTube, 
  Zap, 
  HardHat
} from 'lucide-react';

const Industries = () => {
  const industries = [
    { name: "Healthcare", icon: <HeartPulse /> },
    { name: "Manufacturing", icon: <Factory /> },
    { name: "Government", icon: <Landmark /> },
    { name: "Municipal", icon: <Building /> },
    { name: "Pharma", icon: <Pill /> },
    { name: "Chemicals", icon: <TestTube /> },
    { name: "Energy", icon: <Zap /> },
    { name: "Infrastructure", icon: <HardHat /> },
  ];

  return (
    <section className="py-24 bg-lightGray relative overflow-hidden" id="industries">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emeraldAccents font-semibold tracking-wider uppercase mb-3 block">
            Industries Served
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-darkBlue mb-6">
            Tailored Solutions for Every Sector
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glassmorphism p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-envGreen transition-colors cursor-pointer border border-gray-200"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-envGreen mb-4 shadow-md group-hover:scale-110 transition-transform">
                {React.cloneElement(ind.icon, { className: "w-8 h-8" })}
              </div>
              <h3 className="font-bold text-darkBlue group-hover:text-white transition-colors text-lg">
                {ind.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
