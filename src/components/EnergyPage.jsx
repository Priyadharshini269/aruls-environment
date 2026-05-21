import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const sections = [
  {
    image: "/assets/solar_panels.jpg",
    tag: "Our Focus",
    heading: "Renewable Energy",
    paragraphs: [
      "Solar - AEEPL works with dozens of solar technology companies offering everything that is currently on the market for harvesting the sun's energy. We are able to design, engineer, build, and manage a variety of solar photovoltaic and solar concentrator arrays. We can design them as stand-alone systems, integrate them into the built environment (buildings, street lamps, civic infrastructure), and combine them with other visionary technologies such as \"energy amplification technology\" which can increase the output from this or any other power generation system many, many times at a fraction of the cost per kilowatt hour.",
      "These systems can be used to provide electricity, air conditioning, or provide potable water through desalinization. These systems are most applicable for providing on-site energy and task specific electricity. AEEPL is also at the forefront of \"nano-solar technology\" and solar paint development which should increase the current rate of solar conversion efficiency anywhere from 3 to 12 times their current rates of efficiency."
    ],
  },
  {
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=80",
    tag: "Clean Power",
    heading: "Wind",
    paragraphs: [
      "AEEPL works with the most innovative vertical and horizontal axis wind turbine companies in the world. Our engineers pioneered the modern use of wind turbine systems and were responsible for the very first major wind farms that were built in Altamont Pass, California. They are also responsible for the first building and transportation integrated systems that utilize wind turbines as incorporated energy sources.",
      "These systems are used either for on-site supplemental electricity production or in large farms to produce utility levels of electricity. Tidal and river power - systems that are able to harness ocean tidal flows and kinetic river energy are also part of the AEEPL renewable energy portfolio. These are some of the most productive and expensive systems to engineer and require very specific attention to site development and suitability to make sense. These systems are capable of producing electricity in the gigawatt range."
    ],
  },
  {
    image: "/assets/waste_to_power.png",
    tag: "Eco Innovation",
    heading: "Waste to Power",
    paragraphs: [
      "Under certain circumstances AEEPL will use waste to create electricity through a chemical conversion process (paralysis) when there are no other good options available. It is our opinion however, that waste has a much higher value when used for fuel conversion and the creation of agricultural fertilizer, and therefore this is something we do only as a resort."
    ],
  },
];

const EnergyPage = () => {
  return (
    <div id="energy" className="bg-[#fcfdfc]">
      {/* ─── Hero Banner ─── */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2000&q=80"
          alt="Energy Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14532d]/80 to-[#14532d]/60" />
        <motion.div {...fadeUp} className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight drop-shadow-xl">
            ENERGY
          </h1>
          <div className="w-24 h-1 bg-natureGreen mx-auto mt-6 rounded-full" />
        </motion.div>
      </section>

      {/* ─── Main Sections ─── */}
      {sections.map((section, i) => (
        <div key={i} className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-lightGray'}`}>
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            
            {/* Image inside content container, neatly aligned above text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-10 overflow-hidden rounded-2xl shadow-lg border border-gray-100"
            >
              <img
                src={section.image}
                alt={section.heading}
                className="w-full h-[320px] md:h-[480px] object-cover object-center"
              />
            </motion.div>

            {/* Content below image */}
            <motion.div {...fadeUp}>
              <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
                {section.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-6 leading-tight">
                {section.heading}
              </h2>
              <div className="w-16 h-1 bg-natureGreen mb-8 rounded-full" />
              <div className="space-y-5">
                {section.paragraphs.map((p, pi) => (
                  <p key={pi} className="text-gray-600 text-lg leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>

          </div>
          {/* Thin green divider line below content */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-natureGreen/20 to-transparent mt-20" />
        </div>
      ))}
    </div>
  );
};

export default EnergyPage;
