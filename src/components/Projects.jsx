import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Biomedical Waste Facility",
      location: "Tamil Nadu, India",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Waste Management",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      title: "Waste-to-Energy Plant",
      location: "Colombo, Sri Lanka",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Energy",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Water Treatment Hub",
      location: "Male, Maldives",
      image: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Infrastructure",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Solar Grid Installation",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1509391366360-12009a0b12bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Renewable Energy",
      span: "md:col-span-2 md:row-span-1"
    }
  ];

  return (
    <section className="py-24 bg-darkBlue text-white" id="projects">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-emeraldAccents font-semibold tracking-wider uppercase mb-3 block">
              Global Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">
              Showcasing our commitment to a sustainable future through large-scale environmental engineering implementations across the globe.
            </p>
          </div>
          <button className="px-6 py-3 border border-emeraldAccents text-emeraldAccents rounded-full hover:bg-emeraldAccents hover:text-white transition-colors flex-shrink-0">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${project.span}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkBlue via-darkBlue/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="px-3 py-1 bg-envGreen text-xs font-bold uppercase tracking-wider rounded-full w-max mb-3 shadow-lg">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emeraldAccents" />
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
