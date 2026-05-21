import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Zap, 
  FlaskConical, 
  Recycle, 
  Sprout, 
  Sun, 
  Droplets,
  Building2,
  TreePine,
  ShieldCheck
} from 'lucide-react';

const Services = () => {
  const services = [
    { title: "Biomedical Waste", icon: <Activity />, desc: "Safe collection, treatment, and disposal of bio-medical waste." },
    { title: "Waste to Energy", icon: <Zap />, desc: "Converting solid waste into renewable energy sources." },
    { title: "Chemical Disposal", icon: <FlaskConical />, desc: "Secure handling of hazardous chemical materials." },
    { title: "Recycling Tech", icon: <Recycle />, desc: "Advanced recycling plants for maximum material recovery." },
    { title: "Biodegradable Products", icon: <Sprout />, desc: "Manufacturing eco-friendly alternatives to plastics." },
    { title: "Renewable Energy", icon: <Sun />, desc: "Solar and wind energy infrastructure development." },
    { title: "Water Treatment", icon: <Droplets />, desc: "Industrial effluent and sewage water treatment." },
    { title: "Green Infrastructure", icon: <TreePine />, desc: "Designing sustainable industrial parks and facilities." },
    { title: "Sustainability Consulting", icon: <Building2 />, desc: "Corporate strategies for environmental compliance." },
    { title: "Environmental Audit", icon: <ShieldCheck />, desc: "Comprehensive auditing and monitoring services." }
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emeraldAccents font-semibold tracking-wider uppercase mb-3 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-darkBlue mb-6">
            Comprehensive Environmental Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group glassmorphism rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-envGreen/20 border border-gray-100"
            >
              <div className="w-14 h-14 bg-lightGray rounded-xl flex items-center justify-center text-envGreen group-hover:bg-envGreen group-hover:text-white transition-colors mb-6 shadow-sm">
                {React.cloneElement(service.icon, { className: "w-7 h-7" })}
              </div>
              <h3 className="text-xl font-bold text-darkBlue mb-3 group-hover:text-envGreen transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                {service.desc}
              </p>
              <button className="text-envGreen font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <span className="text-lg">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
