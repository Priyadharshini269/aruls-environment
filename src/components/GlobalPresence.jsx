import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const GlobalPresence = () => {
  const locations = [
    { name: "India", desc: "Corporate Headquarters & Major Facilities", coords: "top-[45%] left-[70%]" },
    { name: "United Kingdom", desc: "European Operations Hub", coords: "top-[30%] left-[48%]" },
    { name: "USA", desc: "North American Branch", coords: "top-[35%] left-[25%]" },
    { name: "Malaysia", desc: "Southeast Asia Operations", coords: "top-[55%] left-[78%]" },
    { name: "Sri Lanka", desc: "Energy & Waste Plants", coords: "top-[50%] left-[72%]" },
    { name: "Maldives", desc: "Water Treatment Hub", coords: "top-[52%] left-[69%]" },
  ];

  return (
    <section className="py-24 bg-darkBlue relative overflow-hidden" id="global">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emeraldAccents font-semibold tracking-wider uppercase mb-3 block">
            Global Footprint
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Worldwide Environmental Impact
          </h2>
          <p className="text-gray-400 text-lg">
            Delivering world-class sustainable engineering solutions across continents.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Conceptual World Map Background */}
          <div className="w-full aspect-video opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain filter invert opacity-20"></div>

          {/* Location Pins */}
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring" }}
              className={`absolute ${loc.coords} flex items-center justify-center group`}
            >
              <div className="relative">
                <div className="w-4 h-4 bg-emeraldAccents rounded-full z-10 relative cursor-pointer" />
                <div className="absolute inset-0 bg-emeraldAccents rounded-full animate-ping opacity-75" />
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white text-darkBlue px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity w-max pointer-events-none z-20 border border-gray-100">
                  <p className="font-bold">{loc.name}</p>
                  <p className="text-xs text-gray-500">{loc.desc}</p>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {locations.map((loc, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4 text-emeraldAccents" />
              <span className="text-gray-300 text-sm font-medium">{loc.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
