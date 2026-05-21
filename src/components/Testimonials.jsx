import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Wilson",
      role: "Director of Operations, MedGlobal",
      text: "Arul's Environment completely transformed our biomedical waste processes. Their smart tracking system ensures we are always 100% compliant and efficient.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarah Chen",
      role: "City Municipal Commissioner",
      text: "The waste-to-energy plant established by their team has drastically reduced our city's landfill dependency while generating clean power for thousands.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Arvind Kumar",
      role: "Healthcare CEO",
      text: "A truly professional enterprise. Their expertise in environmental engineering and deep understanding of healthcare needs is unmatched globally.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section className="py-24 bg-lightGray relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emeraldAccents font-semibold tracking-wider uppercase mb-3 block">
            Client Success
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-darkBlue mb-6">
            Trusted by Global Leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glassmorphism p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-envGreen/10" />
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={test.image} 
                  alt={test.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-envGreen"
                />
                <div>
                  <h4 className="font-bold text-darkBlue">{test.name}</h4>
                  <p className="text-sm text-gray-500">{test.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "{test.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
