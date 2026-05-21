import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '15+', label: 'Countries Served' },
    { value: '50M+', label: 'Tons Waste Managed' },
  ];

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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Environmental Facility" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBlue/80 to-transparent flex items-end p-8">
                <p className="text-white text-lg font-medium">Pioneering Eco-Industrial Innovation.</p>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 bg-envGreen text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <h3 className="text-4xl font-heading font-bold mb-1">ISO</h3>
              <p className="text-emeraldAccents font-medium">Certified Enterprise</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-emeraldAccents font-semibold tracking-wider uppercase mb-3">About The Company</h4>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-darkBlue mb-6 leading-tight">
              Transforming the Future through <span className="text-envGreen">Sustainable Engineering</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Arul's Environment is a global leader in environmental engineering and waste management. We specialize in developing state-of-the-art infrastructure for biomedical waste disposal, energy solutions, and comprehensive environmental sustainability.
            </p>
            <p className="text-gray-600 mb-8">
              With decades of experience and international collaborations, our mission is to create harmony between industrial progress and environmental preservation. We utilize advanced green technologies to offer customized solutions for industries worldwide.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                'Biomedical Waste Disposal',
                'Waste-to-Energy Plants',
                'International Collaborations',
                'Sustainability Consulting'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-darkBlue font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emeraldAccents flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-100">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <h4 className="text-3xl font-bold text-envGreen mb-1">{stat.value}</h4>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
