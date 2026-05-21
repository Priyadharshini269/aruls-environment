import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Check,
  Award,
  MapPin,
  Phone,
  Mail,
  FileText,
  Activity,
  Trash2,
  Heart,
  ChevronDown,
  Sparkles,
  Clock,
  Flame,
  CheckCircle,
  Building,
  Briefcase
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const EnvironmentPage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const missionItems = [
    "Waste Management Compliance Appraisal",
    "Waste Management Policies",
    "Waste Management Planning",
    "Waste Management Report Handbook",
    "Waste Management Implementation",
    "Waste Segregation and Recycling",
    "Waste Reduction and Minimization",
    "Product Feasibility Studies",
    "Land Decontamination Legislative Advice",
    "Training Video Films and Handbooks"
  ];

  const approvals = [
    { name: "MSCCF", desc: "Maharashtra State Co-Operative Consumer Federation Limited" },
    { name: "MPCB", desc: "Maharashtra State Pollution Control Board" },
    { name: "BMP", desc: "Brihan Mumbai Mahanagar Palika" },
    { name: "PCMC", desc: "Pimpri-Chinchwad Municipal City Corporation" },
    { name: "KDMC", desc: "Kalyan Dombivli Municipal City Corporation" },
    { name: "PMC", desc: "Pune City Municipal Corporation" }
  ];

  const ecoHFeatures = [
    { feature: "100% Biodegradable", benefit: "Non-toxic to plants and animals, increases soil fertility, reduces dump areas" },
    { feature: "Available in various customized sizes", benefit: "Suitable for various grades of hotels" },
    { feature: "Impressive selection with eye-catching multi colors", benefit: "Easy identification" },
    { feature: "Burns like paper", benefit: "Less energy required for incineration, no toxic air emissions, environment clean & green" },
    { feature: "Thickness 20+ microns as per USP 23", benefit: "Compliance with government regulations" },
    { feature: "Tested for toxicity", benefit: "Increased guest satisfaction and improved community relations" }
  ];

  const disposalMethods = [
    { name: "Land Filling", desc: "Decomposes cleanly in landfills over time" },
    { name: "Incineration", desc: "Burns safely like paper without toxic fumes" },
    { name: "Composting", desc: "Breaks down into rich organic soil nutrients" },
    { name: "Photo Degradation", desc: "Decomposes efficiently under natural sunlight exposure" },
    { name: "Vermi Composting", desc: "Safe for earthworms and microbial breakdown" }
  ];

  const faqs = [
    {
      q: "What is a degradable plastic bag?",
      a: "A degradable plastic bag is an environmentally friendly bag that decomposes and degrades cleanly when exposed to micro-organisms, heat, and sunlight, avoiding the centuries-long pollution of standard plastics."
    },
    {
      q: "How does it work?",
      a: "Degradable additives (up to 20%) mixed with compatible plastic raw materials such as LLDPE/LDPE cause the plastic to photo, thermal, and chemically degrade in anaerobic and aerobic environments. The plastic progressively degrades to lower molecular weights, becomes brittle and fragmented, and is finally fully digested by microorganisms back into carbon dioxide, water, and natural biomass."
    },
    {
      q: "Where are the biodegradable properties tested?",
      a: "Our principals, OM Bioplast Pvt. Ltd., have successfully tested the degradable properties of these bags at reputed national laboratories, including the National Chemical Laboratory (NCL), Pune, and the National Toxicology Centre (NTC), Pune. Additionally, they can be tested according to standards laid down by the American Society for Testing Materials (ASTM) including ASTM D 4364 94, ASTM G21 96, ASTM D 5210 98, and ASTM D 3826 98."
    }
  ];

  return (
    <div id="environment" className="bg-[#fcfdfc]">
      {/* ─── 1. Hero Banner Section ─── */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80"
          alt="Environment Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14532d]/85 to-[#14532d]/65" />
        <motion.div {...fadeUp} className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-natureGreen font-semibold tracking-widest uppercase text-sm mb-3 block">
            ECO-FRIENDLY & SUSTAINABLE SOLUTIONS
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight drop-shadow-xl mb-4">
            ENVIRONMENT
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Delivering advanced green initiatives, biomedical compliance, and biodegradable technologies to restore and preserve our planet's natural ecosystems.
          </p>
          <div className="w-24 h-1 bg-natureGreen mx-auto mt-8 rounded-full" />
        </motion.div>
      </section>

      {/* ─── 2. Company Introduction Section (EAM Solution India Limited) ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side: Professional environmental management image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="/environment_management.jpg"
                  alt="Mist-covered mountain ranges and lush green valleys"
                  className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-natureGreen/15 rounded-full blur-2xl pointer-events-none" />
            </motion.div>

            {/* Right side: content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
                Joint Venture Initiative
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-4">
                EAM Solution India Limited
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                EAM Solution India Limited, a joint venture of Environmental Asset Management Limited, UK, offers comprehensive services to municipal waste producers of all types and sizes, providing expert advice, guidance, and direct support on modern waste management issues.
              </p>

              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-xl font-heading font-bold text-darkGreen mb-6 flex items-center gap-3">
                  <Award className="text-natureGreen w-6 h-6" />
                  Mission Statement
                </h3>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">
                  With over 20 years of overseas experience, our expertise ranges from policy planning to implementation:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {missionItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-natureGreen/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-natureGreen" />
                      </div>
                      <span className="text-gray-700 text-sm leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 3. Eco Product Solutions Section (Vaibhav Plastics Bio-Solutions) ─── */}
      <section className="py-24 bg-lightGray relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-natureGreen/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12">

          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
              Sustainable Manufacturing
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-4">
              Vaibhav Plastics Bio-Solutions Pvt. Ltd.
            </h2>
            <div className="w-16 h-1 bg-natureGreen mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 text-lg">
              Dedicated to the production of environmentally responsible plastic products using advanced degradable master batch designed to minimize environmental load and maximize waste efficiency.
            </p>
          </motion.div>

          <div className="space-y-16 max-w-5xl mx-auto">
            {/* Row 1: Eco Bags */}
            <motion.div
              {...fadeUp}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 grid md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-5 h-72 md:h-full min-h-[300px]">
                <img
                  src="/assets/bag2.jpeg"
                  alt="Woven shopping basket and reusable cloth bags on a wooden bench"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 md:col-span-7">
                <span className="text-natureGreen font-semibold tracking-wider uppercase text-xs mb-2 block">01 / Products</span>
                <h3 className="text-2xl font-heading font-bold text-darkGreen mb-4">ECO-Bags</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  VBPL manufactures a wide range of degradable collection bags suited for standard and custom waste management systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-lightGray text-gray-700 rounded-full text-xs font-medium">ECO-H Carry Bags</span>
                  <span className="px-3 py-1 bg-lightGray text-gray-700 rounded-full text-xs font-medium">Laundry Bags</span>
                  <span className="px-3 py-1 bg-lightGray text-gray-700 rounded-full text-xs font-medium">Disposable Bags</span>
                  <span className="px-3 py-1 bg-lightGray text-gray-700 rounded-full text-xs font-medium">Garbage Bags</span>
                  <span className="px-3 py-1 bg-natureGreen/10 text-natureGreen rounded-full text-xs font-semibold">ECO-Med Hospital Bags</span>
                </div>
              </div>
            </motion.div>

            {/* Row 2: Eco Catering */}
            <motion.div
              {...fadeUp}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 grid md:grid-cols-12 gap-8 items-center"
            >
              <div className="p-8 md:p-12 md:col-span-7 order-2 md:order-1">
                <span className="text-natureGreen font-semibold tracking-wider uppercase text-xs mb-2 block">02 / Products</span>
                <h3 className="text-2xl font-heading font-bold text-darkGreen mb-4">ECO-Catering Products</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Beautifully structured biodegradable and compostable dining materials designed for the hospitality industry, events, and modern corporate needs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-lightGray text-gray-700 rounded-full text-xs font-medium">Eco Plates</span>
                  <span className="px-3 py-1 bg-lightGray text-gray-700 rounded-full text-xs font-medium">Eco Cups</span>
                  <span className="px-3 py-1 bg-lightGray text-gray-700 rounded-full text-xs font-medium">Eco Dishes</span>
                  <span className="px-3 py-1 bg-lightGray text-gray-700 rounded-full text-xs font-medium">Degradable Spoons</span>
                </div>
              </div>
              <div className="md:col-span-5 h-72 md:h-full min-h-[300px] order-1 md:order-2">
                <img
                  src="/assets/eco_catering.jpg"
                  alt="Eco-friendly wooden plates, cups, and cutlery with green leaves"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Row 3: Eco Shopping & Packaging */}
            <motion.div
              {...fadeUp}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 grid md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-5 h-72 md:h-full min-h-[300px]">
                <img
                  src="/assets/eco_shopping.jpg"
                  alt="Eco-friendly brown paper shopping bags"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 md:col-span-7">
                <span className="text-natureGreen font-semibold tracking-wider uppercase text-xs mb-2 block">03 / Products</span>
                <h3 className="text-2xl font-heading font-bold text-darkGreen mb-4">ECO-Shopping & Packaging</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Providing modern retailers and agricultural sectors with packaging structures that safeguard products without polluting the soil.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-natureGreen" />
                    <span className="text-gray-700 text-sm font-medium">ECO-AGRO Mulch Films</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-natureGreen" />
                    <span className="text-gray-700 text-sm font-medium">Degradable Shopping Bags</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-natureGreen" />
                    <span className="text-gray-700 text-sm font-medium">Industrial Eco Packaging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-natureGreen" />
                    <span className="text-gray-700 text-sm font-medium">Retail Carry Bags</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 4. Certifications & Approvals Section ─── */}
      <section className="py-24 bg-darkGreen text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-natureGreen/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-natureGreen/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
              Official Endorsement
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Degradable Bags Approved By
            </h2>
            <div className="w-16 h-1 bg-natureGreen mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {approvals.map((app, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-natureGreen/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-natureGreen" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-natureGreen mb-1">{app.name}</h3>
                  <p className="text-white/80 text-xs leading-relaxed">{app.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. ECO H Bags Features Section ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">

          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
              Product Analysis
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-4">
              ECO H Bags: Features & Benefits
            </h2>
            <div className="w-16 h-1 bg-natureGreen mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto">
            {/* Table side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 overflow-x-auto"
            >
              <div className="min-w-[600px] border border-gray-100 rounded-3xl overflow-hidden shadow-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-natureGreen/15 text-darkGreen">
                      <th className="py-5 px-6 font-heading font-bold text-base border-b border-gray-100">FEATURES</th>
                      <th className="py-5 px-6 font-heading font-bold text-base border-b border-gray-100">BENEFITS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ecoHFeatures.map((row, idx) => (
                      <tr key={idx} className="hover:bg-lightGray/40 transition-colors border-b border-gray-50 last:border-0">
                        <td className="py-4 px-6 font-semibold text-gray-800 text-sm w-[40%]">{row.feature}</td>
                        <td className="py-4 px-6 text-gray-600 text-sm">{row.benefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Side content & uses */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 space-y-8"
            >
              <div className="bg-lightGray/60 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-xl font-heading font-bold text-darkGreen mb-4">ECO-H Bags Can Be Used As</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Carry Bags", "Laundry Bags", "Disposable Bags", "Garbage Bags"].map((use, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-gray-100 shadow-sm">
                      <CheckCircle className="w-4 h-4 text-natureGreen flex-shrink-0" />
                      <span className="text-gray-700 text-xs font-semibold">{use}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-natureGreen/5 rounded-3xl p-8 border border-natureGreen/10">
                <h3 className="text-xl font-heading font-bold text-darkGreen mb-4">Methods of Disposal</h3>
                <div className="space-y-3">
                  {disposalMethods.map((method, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-natureGreen/15 text-natureGreen font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="text-darkGreen text-sm font-bold leading-tight">{method.name}</h4>
                        <p className="text-gray-500 text-xs mt-0.5">{method.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 6. Green Revolution Section (Greening the Hotels) ─── */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="bg-darkGreen rounded-[40px] overflow-hidden shadow-2xl grid lg:grid-cols-2 items-center">

            {/* Left side: Content block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 sm:p-12 lg:p-16 text-white"
            >
              <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-3 block">
                Sustainable Hospitality
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                Serve with Green Revolution
              </h2>
              <div className="w-16 h-1 bg-natureGreen mb-6 rounded-full" />
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Hotels provide comfort and protection to guests, but this high-service industry relies heavily on lightweight, lightweight, and waterproof poly bags. However, using long-lasting polymers for short-lived applications is a growing environmental hazard.
              </p>
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                Millions of plastic bags are thrown away daily, causing clogged drains, soil infertility, and eco-hazards.
              </p>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-heading font-semibold text-natureGreen mb-3">
                  Greening the Hotels
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  Vaibhav Plastic Bio-Solutions Pvt. Ltd. reforms hotels into green spaces with ECO-H bags — plastic bags that vanish to tackle the waste menace. These bags break down into natural, non-toxic residues harmless to the environment.
                </p>
              </div>
            </motion.div>

            {/* Right side: Green hotel image */}
            <div className="h-full min-h-[400px] lg:h-[650px] relative">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                alt="Green eco resort hotel representing sustainable tourism"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#14532d]/25 mix-blend-multiply" />
            </div>

          </div>
        </div>
      </section>

      {/* ─── 7. About Degradable Bags Section (Accordion layout) ─── */}
      <section className="py-24 bg-lightGray">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">

          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
              In-Depth Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-4">
              Understanding Biodegradable Plastics
            </h2>
            <div className="w-16 h-1 bg-natureGreen mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left py-6 px-8 flex items-center justify-between font-heading font-bold text-lg text-darkGreen hover:bg-gray-50/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-natureGreen transition-transform duration-300 ${activeFAQ === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {activeFAQ === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-50 bg-gray-50/20"
                    >
                      <div className="py-6 px-8 text-gray-600 leading-relaxed text-sm">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. ECO-Med Bags Section ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">

          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
              Healthcare Waste
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-4">
              ECO-Med Bags: Biomedical Solutions
            </h2>
            <div className="w-16 h-1 bg-natureGreen mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto mb-16">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Medical clinic and biomedical waste containment setup"
                  className="w-full h-[460px] object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#22c55e]/10 rounded-full blur-2xl pointer-events-none" />
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <h3 className="text-2xl font-heading font-bold text-darkGreen mb-4">
                A Surefire Way to Stay Hygienic
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Vaibhav Plastic Bio-Solutions Pvt. Ltd. helps green modern healthcare systems through ECO-Med Bags — degradable hospital waste collection bags. These eco-friendly disposable solutions safely contain hazardous biomedical waste generated across health institutions and ensure safe, compliant handling while reducing polythene pollution.
              </p>

              <div className="bg-lightGray rounded-2xl p-6 border border-gray-100">
                <h4 className="font-heading font-bold text-darkGreen text-base mb-3">ECO-Med Bags are ideal for:</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Nursing Homes",
                    "General Clinics & Hospitals",
                    "Laboratory & Diagnostic Services",
                    "Veterinary Clinics",
                    "All Biomedical Generating Facilities"
                  ].map((facility, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-natureGreen" />
                      <span className="text-gray-700 text-xs font-semibold">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1: Traditional */}
            <motion.div
              {...fadeUp}
              className="bg-gray-50 border border-gray-200 rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <Trash2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-heading font-bold text-gray-800">Conventional Poly Bags</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Lies around in landfill for 100 years or more",
                  "Incineration leads to release of toxic gases",
                  "Contaminates soil and surrounding water bodies",
                  "Occupies and overfills more and more land sites"
                ].map((txt, idx) => (
                  <li key={idx} className="text-gray-500 text-sm flex items-start gap-2.5">
                    <span className="text-red-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2: ECO-Med */}
            <motion.div
              {...fadeUp}
              className="bg-[#14532d]/5 border border-natureGreen/25 rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-natureGreen/20 text-natureGreen flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-heading font-bold text-darkGreen">ECO-Med Bags</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "When dumped or littered, degrades to eco-safe water and biomass",
                  "Burns cleanly like paper without emitting toxic gases or residues",
                  "Increases soil fertility and prevents underground water depletion",
                  "Saves tonnes of valuable landfill space through biodegradation"
                ].map((txt, idx) => (
                  <li key={idx} className="text-gray-700 text-sm flex items-start gap-2.5 font-medium">
                    <span className="text-natureGreen font-bold text-sm leading-none mt-0.5">•</span>
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ─── 9. Contact & Office Section ─── */}
      <section className="py-24 bg-lightGray relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">

          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-4">
              Environment Division Office
            </h2>
            <div className="w-16 h-1 bg-natureGreen mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Corporate Office */}
            <motion.div
              {...fadeUp}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-natureGreen/15 text-natureGreen flex items-center justify-center mb-6">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-darkGreen mb-4">Corporate Office</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Brijwasi Bungalow, T-135,<br />
                  Grotowla Nr. Sangeeta Apartment,<br />
                  Juhu Road, Santacruz-West,<br />
                  Mumbai – 49, Maharashtra, India.
                </p>
              </div>
              <div className="border-t border-gray-50 pt-6 space-y-2.5 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-natureGreen" />
                  <span>022-26606915 / 26605908</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-natureGreen" />
                  <span>vbp101@rediffmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Registered Office */}
            <motion.div
              {...fadeUp}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-natureGreen/15 text-natureGreen flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-darkGreen mb-4">Registered Office</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  FF-30, Avishkar Complex,<br />
                  Old Padra Road,<br />
                  Baroda – 15, Gujarat, India.
                </p>
              </div>
              <div className="border-t border-gray-50 pt-6 space-y-2.5 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-natureGreen" />
                  <span>0265-2358869 / 2341735</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-natureGreen" />
                  <span>vbp101@rediffmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Principals */}
            <motion.div
              {...fadeUp}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-natureGreen/15 text-natureGreen flex items-center justify-center mb-6">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-darkGreen mb-4">Principals</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-semibold">
                  OM Bio Plast Pvt. Ltd.
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Pune, Maharashtra, India. Dedicated partners in inventing additive technologies that make plastic biodegradable and harmless to nature.
                </p>
              </div>
              <div className="border-t border-gray-50 pt-6 text-center">
                <span className="inline-block px-4 py-1.5 bg-natureGreen/10 text-darkGreen rounded-full text-xs font-bold uppercase tracking-wider">
                  Technology Partner
                </span>
              </div>
            </motion.div>
          </div>

          {/* Green prompt banner at bottom */}
          <div className="mt-16 bg-[#14532d] rounded-3xl p-8 text-center text-white max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2">Serve with Green Revolution</h3>
            <p className="text-white/80 text-sm mb-6 max-w-lg mx-auto">
              Contact us today to learn how we can transition your hotel, business or hospital to complete environmental compliance.
            </p>
            <a
              href="/contact"
              className="px-6 py-2.5 bg-natureGreen hover:bg-emeraldAccents text-white rounded-full text-sm font-semibold transition-all shadow-md inline-block"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentPage;
