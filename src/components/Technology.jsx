import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Network, BarChart3, Shield } from 'lucide-react';

const Technology = () => {
  const features = [
    { title: "Smart Waste Systems", icon: <Network />, desc: "IoT enabled tracking and automated segregation routing." },
    { title: "AI Monitoring", icon: <Cpu />, desc: "Predictive analytics for environmental compliance and emission controls." },
    { title: "Data Driven Analytics", icon: <BarChart3 />, desc: "Real-time dashboards for resource recovery metrics." },
    { title: "Secure Operations", icon: <Shield />, desc: "Blockchain verified disposal records for maximum transparency." },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-emeraldAccents font-semibold tracking-wider uppercase mb-3 block">
              Innovation
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-darkBlue mb-6">
              Powered by Advanced Technologies
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We leverage cutting-edge Industry 4.0 technologies to optimize environmental processes, ensuring higher efficiency, zero-error compliance, and seamless tracking from collection to disposal.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-lightGray text-envGreen flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-darkBlue mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-lightGray">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Technology Integration" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-envGreen/20 mix-blend-overlay"></div>
            </div>
            
            {/* Floating Tech Element */}
            <div className="absolute -left-10 top-1/4 glassmorphism-dark p-6 rounded-2xl animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-emeraldAccents rounded-full animate-ping"></div>
                <div>
                  <p className="text-white font-bold text-sm">System Status</p>
                  <p className="text-emeraldAccents text-xs">Optimal Efficiency</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Technology;
