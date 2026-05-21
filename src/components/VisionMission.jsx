import React from 'react';
import { motion } from 'framer-motion';

const VisionMission = () => {
  const cards = [
    {
      title: "Corporate Vision",
      text: "Our vision is to be recognized nationally and internationally as a trusted leader in sustainable energy and environmental development.",
      image: "/assets/corporate_vision.jpg"
    },
    {
      title: "Mission Statement",
      text: "To develop and promote sustainable products, technologies, and services focused on environmental protection and renewable energy solutions.",
      image: "/assets/mission_statement.jpg"
    },
    {
      title: "Core Values",
      text: "Integrity, responsibility, sustainability, innovation, teamwork, and commitment towards a greener future.",
      image: "/assets/core_values.jpg"
    },
    {
      title: "Environment",
      text: "We are dedicated to environmental sustainability through eco-friendly initiatives, renewable energy projects, and green development programs.",
      image: "/assets/environment_card.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="environment">
      <div className="absolute inset-0 bg-[#14532d] opacity-5"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden bg-darkGreen border border-white/10 hover:border-natureGreen/50 transition-all duration-300 transform hover:-translate-y-3 shadow-xl"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkGreen via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="p-6 relative bg-darkGreen/90 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-natureGreen transition-colors drop-shadow-sm">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                  {card.text}
                </p>
              </div>
              
              {/* Glowing hover effect */}
              <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
