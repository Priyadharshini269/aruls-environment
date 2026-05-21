import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const WaterPage = () => {
  return (
    <div id="water">
      {/* ─── Hero Banner ─── */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
          alt="Water Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14532d]/80 to-[#14532d]/60" />
        <motion.div {...fadeUp} className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight drop-shadow-xl">
            WATER
          </h1>
          <div className="w-24 h-1 bg-natureGreen mx-auto mt-6 rounded-full" />
        </motion.div>
      </section>

      {/* ─── Reed Bed Technology Section (Left Image, Right Content) ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left side -> Large related image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="/assets/water_treatment.jpg"
                  alt="Aerial view of an advanced water treatment plant next to the water"
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-natureGreen/10 rounded-full blur-2xl pointer-events-none" />
            </motion.div>

            {/* Right side -> Heading and content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
                Eco Innovation
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-6 leading-tight">
                Reed Bed Technology
              </h2>
              <div className="w-16 h-1 bg-natureGreen mb-6 rounded-full" />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Water treatment plants convert wastewater into industrial and drinking water through advanced purification systems. Reed Bed Technology is a proven eco-friendly solution used to treat sewage and wastewater for agricultural, industrial, and potable water applications.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                This sustainable technology is supported through expert international partnerships and environmentally responsible practices.
              </p>
            </motion.div>

          </div>

          {/* Thin green divider line below content */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-natureGreen/30 to-transparent mt-24" />
        </div>
      </section>

      {/* ─── Certifications / Awards / Accomplishments ─── */}
      <section className="py-20 bg-lightGray">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
              Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-4">
              Certifications / Awards / Accomplishments
            </h2>
            <div className="w-16 h-1 bg-natureGreen mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Card 1 */}
            <motion.div
              {...fadeUp}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-natureGreen/15 text-natureGreen rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
                  📍
                </div>
                <h3 className="text-xl font-heading font-bold text-darkGreen mb-4">
                  Centralized Biomedical Facility
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  Eamsolution India Limited has established a centralized biomedical waste treatment facility in Palwal, Haryana, for the collection, transportation, treatment, and safe disposal of biomedical waste generated by medical institutions across four districts of Haryana.
                </p>
              </div>
              <div className="border-t border-gray-100 mt-6 pt-4 flex items-center text-sm font-semibold text-natureGreen">
                Haryana Facility Compliance
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              {...fadeUp}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-natureGreen/15 text-natureGreen rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
                  🏆
                </div>
                <h3 className="text-xl font-heading font-bold text-darkGreen mb-4">
                  Biodegradable Plastics Testing
                </h3>
                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  The principals of Vaibhav Plastics Bio-Solutions Pvt. Ltd. have successfully tested the biodegradable properties of their products at some of India’s leading laboratories, including the National Chemical Laboratory, Pune, and the National Toxicology Centre, Pune. These tests confirmed the products meet oral toxicity and safety standards suitable for food packaging applications.
                </p>
              </div>
              <div className="border-t border-gray-100 mt-6 pt-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Prestigious Recognitions:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-softLeafGreen/10 text-darkGreen rounded-full text-xs font-semibold">
                    Hari Malini Joshi Award 2000
                  </span>
                  <span className="px-3 py-1 bg-softLeafGreen/10 text-darkGreen rounded-full text-xs font-semibold">
                    Rashtriya Ratan Award 2002
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Thin green divider line below content */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-natureGreen/30 to-transparent mt-24" />
        </div>
      </section>

      {/* ─── Conclusion Section ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-4">
              Conclusion
            </h2>
            <div className="w-16 h-1 bg-natureGreen mx-auto rounded-full" />
          </motion.div>

          <motion.div {...fadeUp} className="space-y-6 text-gray-600 text-lg leading-relaxed text-center">
            <p>
              AEEPL is committed to developing complete sustainable solutions that help restore environmental balance and efficiently manage natural resources within the regions where we operate.
            </p>
            <p>
              In addition to providing comprehensive energy, food, waste, and water management solutions, our approach focuses on building strong local and regional economies sustainably. We create integrated development plans that improve the quality of life for communities while supporting environmental responsibility.
            </p>
            <p>
              From a technological perspective, AEEPL collaborates with over 250 companies and technology development groups worldwide to deliver innovative, state-of-the-art solutions for renewable energy, waste treatment, water management, and sustainable food production.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WaterPage;
