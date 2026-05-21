import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Heart, 
  Activity, 
  FileText, 
  Leaf, 
  Sparkles, 
  Building, 
  Users, 
  ExternalLink,
  Milestone,
  CheckCircle,
  Calendar,
  Flag,
  Lightbulb
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const PromotersPage = () => {
  const leadershipTimeline = [
    { year: "1977", title: "MD Medicine Gold Medalist", desc: "University First Rank & Gold Medalist in MD (Internal Medicine)." },
    { year: "1995", title: "Dean JIMACGP", desc: "Dean JIMACGP, New Delhi (1995-1998)." },
    { year: "2000", title: "Dr. BC Roy National Award", desc: "Recipient of the prestigious Dr. BC Roy National Award." },
    { year: "2002", title: "National President IMA", desc: "National President, Indian Medical Association, New Delhi (2002-2003)." },
    { year: "2006", title: "GB Member API", desc: "Association of Physicians of India, Mumbai, GB member (since 2006)." },
    { year: "2007", title: "President CMA", desc: "President, Commonwealth Medical Associations, UK (2007-2012)." },
    { year: "2010", title: "Chairman CHPA", desc: "Chairman, Commonwealth Health Professional Alliance, UK (since 2010). Also Chief Patron, IMACGP HQ, Chennai." }
  ];

  const healthcareDetails = [
    { title: "Sundaram Arulrhaj Hospital", desc: "100-bedded Municipality Medical Institution located in Tuticorin.", link: "http://www.sahhospital.org", linkLabel: "sahhospital.org" },
    { title: "Tuticorin Diagnostic Centre", desc: "Chairman of Hitech Medical Diagnosis Centre in Tuticorin." },
    { title: "CT Scan & MRI Scan Research Institute Ltd", desc: "Chairman of CT Scan & MRI Scan centers in Tuticorin & Tirunelveli." },
    { title: "Health Tourism Promotion", desc: "Actively promoting premium healthcare tourism from Malaysia, Sri Lanka, and Maldives." },
    { title: "Health Wealth Lifestyle Centres", desc: "Dedicated wellness and healthy lifestyle advisory centers in Tuticorin." },
    { title: "Global Health City Projects", desc: "Supporting the promotion of Health Cities, Pharmahubs, Medical & Dental Colleges in African and other developing countries." },
    { title: "Clinical Research Organization", desc: "Promoting and participating in standard clinical research organizations in India." },
    { title: "Advisor, Pushpanjali Crosslay Hospitals", desc: "Advisor to the 500-bedded tertiary care hospital in New Delhi." }
  ];

  const environmentalProjects = [
    { title: "Arul's Energy & Environment", desc: "Chairman of AEEPL, steering sustainable development initiatives in India." },
    { title: "Biotoilets Manufacturing", desc: "Manufacturing and marketing bio-toilets and chemical toilets in Mumbai." },
    { title: "Green Ozone, UK Director", desc: "Director of Green Ozone, managing BMW projects in Nashik and Aurangabad, India." },
    { title: "Biomedical Waste Disposal", desc: "Managing biomedical waste treatment and disposal systems across Tamil Nadu, Kerala, Nashik, and Faridabad." },
    { title: "Biodegradable Bags", desc: "Promoting sustainable packaging and degradable bags manufacturing in Mumbai." },
    { title: "Hazardous Waste Treatment", desc: "Advanced treatment plant project in Baroda (in the pipeline)." },
    { title: "MSW to Energy Plant", desc: "Municipal Solid Waste to energy conversion plant project in Bangalore (in the process)." },
    { title: "MPM INC acquisition", desc: "Undergoing due diligence for the acquisition of MPM INC, a technology company in the USA." }
  ];

  const disciplines = [
    { title: "Company Management & Strategy", desc: "Strategic formulation and marketing leadership in industrial and environmental sectors." },
    { title: "Waste Management Planning", desc: "Business planning and feasibility assessment for municipal waste projects." },
    { title: "Waste-to-Energy Viability", desc: "Evaluation and implementation of waste-to-energy conversion systems." },
    { title: "Project Leadership", desc: "Overseas and domestic project management, administration, and execution." },
    { title: "Waste Water Treatment", desc: "Deployment of advanced systems for sewage and industrial effluent treatment." },
    { title: "Technology Transfer", desc: "Facilitating international technology transfers to developing regions." }
  ];

  return (
    <div id="promoters" className="bg-[#fcfdfc] min-h-screen">
      
      {/* ─── 1. Hero Banner Section ─── */}
      <section className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80"
          alt="Promoters Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14532d]/85 to-[#14532d]/65" />
        <motion.div {...fadeUp} className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-natureGreen font-semibold tracking-widest uppercase text-sm mb-3 block">
            Executive Leadership
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight drop-shadow-xl mb-4">
            PROMOTERS
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Meet the visionaries, doctors, and business leaders driving our commitment to medical excellence, green energy, and environmental sustainability.
          </p>
          <div className="w-24 h-1 bg-natureGreen mx-auto mt-8 rounded-full" />
        </motion.div>
      </section>

      {/* ─── 2. Chairman Profile Section ─── */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Chairman Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="bg-lightGray rounded-[40px] p-8 md:p-10 border border-gray-100 shadow-2xl text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-darkGreen via-natureGreen to-softLeafGreen" />
                <div className="w-56 h-56 rounded-[32px] overflow-hidden mx-auto mb-8 border-4 border-natureGreen/20 shadow-xl">
                  <img
                    src="/chairman.jpg"
                    alt="Prof. Dr. S. Arulrhaj"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-darkGreen mb-2">
                  Prof. Dr. S. Arulrhaj
                </h3>
                <p className="text-sm font-semibold text-gray-500 mb-1">MD., FRCP (G), MBA.</p>
                <p className="text-natureGreen font-bold text-base mb-6">Group Chairman</p>
                
                <div className="border-t border-gray-200/60 pt-6 space-y-3 text-sm text-gray-600 text-left max-w-xs mx-auto">
                  <div className="flex justify-between">
                    <span className="font-semibold">Group:</span>
                    <span>ARULS Group</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Country:</span>
                    <span>India</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Website:</span>
                    <a 
                      href="http://www.drsarulrhaj.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-natureGreen hover:underline flex items-center gap-1 font-semibold"
                    >
                      drsarulrhaj.com <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Chairman Content & Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
                Founding Visionary
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-6">
                About the Group Chairman
              </h2>
              <div className="w-16 h-1 bg-natureGreen mb-8 rounded-full" />
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
                <p>
                  Prof. Dr. S. Arulrhaj is an eminent clinical leader, medical academician, and public health activist with a career spanning over four decades. As Chairman of the ARULS Group, he has bridged the disciplines of healthcare, pharmaceuticals, and environmental engineering.
                </p>
                <p>
                  His environmental commitment is driven by the conviction that public health is directly tied to ecological balance. Under his direction, Arul's Energy & Environment has championed waste treatment, bio-toilet manufacturing, and renewable energy strategies to reduce modern pollution.
                </p>
              </div>

              <div className="bg-natureGreen/5 border-l-4 border-natureGreen rounded-r-2xl p-6">
                <h4 className="text-darkGreen font-bold text-base mb-2">Public Health & Advocacy</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Active public health advocate working to secure the Right to Health, promote equitable healthcare delivery across India, and tailor medical education to modern public needs.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── 3. Professional Leadership Section ─── */}
      <section className="py-24 bg-lightGray relative">
        <div className="container mx-auto px-6 md:px-12">
          
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
              Credentials
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-4">
              Professional Leadership & Timeline
            </h2>
            <div className="w-16 h-1 bg-natureGreen mx-auto rounded-full" />
          </motion.div>

          {/* Timeline Layout */}
          <div className="max-w-4xl mx-auto relative border-l border-gray-300 ml-4 md:ml-auto md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-px md:before:bg-gray-300">
            {leadershipTimeline.map((item, idx) => (
              <div key={idx} className="relative mb-12 md:mb-16 last:mb-0">
                {/* Connector dot */}
                <div className="absolute left-[-21px] top-1.5 md:left-1/2 md:translate-x-[-50%] w-10 h-10 rounded-full bg-white border-4 border-natureGreen flex items-center justify-center shadow-md">
                  <Award className="w-4 h-4 text-natureGreen" />
                </div>
                
                {/* Timeline Card */}
                <motion.div
                  {...fadeUp}
                  className={`ml-10 md:ml-0 md:w-[45%] bg-white rounded-3xl p-6 shadow-lg border border-gray-100 relative ${
                    idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <span className="inline-block px-3 py-1 bg-natureGreen/10 text-natureGreen rounded-full text-xs font-bold mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-darkGreen mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Extra academic block */}
          <motion.div 
            {...fadeUp}
            className="max-w-3xl mx-auto mt-16 bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-natureGreen/15 text-natureGreen flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-darkGreen font-bold text-lg mb-2">Academic & Research Contributions</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Adjunct-Professor of Medicine at Dr. MGR Medical University, Chennai. Prof. Dr. S. Arulrhaj is an active academician delivering guest lectures, editing medical textbooks and journals, and publishing scientific research articles internationally.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─── 4. Health Care Section ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto mb-16">
            
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
                Clinical Institutions
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-4">
                Healthcare Initiatives
              </h2>
              <div className="w-16 h-1 bg-natureGreen mb-6 rounded-full" />
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                The group's medical branch includes municipal medical institutions, hi-tech diagnosis labs, diagnostic research institutes, and clinical trials management centers.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {healthcareDetails.slice(1).map((item, idx) => (
                  <div key={idx} className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-natureGreen mt-1.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-darkGreen text-sm font-bold">{item.title}</h4>
                      <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hospital Card Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4"
            >
              {/* Specific Hospital Highlight Card */}
              <div className="bg-lightGray rounded-3xl p-6 border border-gray-200/80 shadow-lg flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm text-natureGreen flex-shrink-0">
                  🏥
                </div>
                <div>
                  <h3 className="font-heading font-bold text-darkGreen text-lg">{healthcareDetails[0].title}</h3>
                  <p className="text-gray-500 text-xs mt-1 mb-3">{healthcareDetails[0].desc}</p>
                  <a 
                    href={healthcareDetails[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-natureGreen hover:underline"
                  >
                    Visit Hospital Site <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── 5. Environmental Projects Section ─── */}
      <section className="py-24 bg-lightGray">
        <div className="container mx-auto px-6 md:px-12">
          
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
              Green Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-4">
              Environmental Projects & Ventures
            </h2>
            <div className="w-16 h-1 bg-natureGreen mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {environmentalProjects.map((proj, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.08, duration: 0.7 }}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-natureGreen/10 text-natureGreen flex items-center justify-center mb-4">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-darkGreen mb-2">{proj.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{proj.desc}</p>
                </div>
                <div className="border-t border-gray-50 mt-4 pt-3 flex items-center text-xs font-bold text-natureGreen">
                  Active Initiative
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. Pharma Division Section ─── */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="max-w-4xl mx-auto">
            
            {/* Cards Content Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="text-center">
                <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
                  Pharma Division
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-4">
                  Pharmaceutical Conglomerates
                </h2>
                <div className="w-16 h-1 bg-natureGreen mx-auto rounded-full mb-8" />
              </div>
              
              <div className="space-y-6">
                {/* Grandix */}
                <div className="bg-lightGray rounded-3xl p-6 border border-gray-100 shadow-md">
                  <h3 className="text-lg font-heading font-bold text-darkGreen mb-2">Grandix Pharmaceuticals Ltd.</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Established in 1996 to serve mankind through the medical fraternity by offering high-quality medicines at affordable prices and introducing innovative molecules suitable for Indian patients. (Shares liquidated in 2007).
                  </p>
                  <span className="inline-block px-3 py-1 bg-gray-200/80 text-gray-500 rounded-full text-xs font-bold uppercase tracking-wider">
                    Past Portfolio
                  </span>
                </div>

                {/* Zenox */}
                <div className="bg-natureGreen/5 rounded-3xl p-6 border border-natureGreen/15 shadow-md">
                  <h3 className="text-lg font-heading font-bold text-darkGreen mb-1">Zenox Life Sciences Ltd.</h3>
                  <a 
                    href="http://www.zenbxlifesciences.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-natureGreen font-bold flex items-center gap-1 mb-3 hover:underline"
                  >
                    zenbxlifesciences.com <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Established in 2010 with Doctors as shareholders. A domestic pharmaceutical marketing company managing and marketing a portfolio of more than 70 products.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white border border-natureGreen/20 text-natureGreen rounded-full text-xs font-bold">
                      70+ Products
                    </span>
                    <span className="px-3 py-1 bg-white border border-natureGreen/20 text-natureGreen rounded-full text-xs font-bold">
                      Established 2010
                    </span>
                  </div>
                </div>

                {/* Logix */}
                <div className="bg-lightGray rounded-3xl p-6 border border-gray-100 shadow-md">
                  <h3 className="text-lg font-heading font-bold text-darkGreen mb-2">Logix LifeSciences Ltd.</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Accessory wing of Zenox LifeSciences dedicated strictly to the international marketing and global distribution of pharmaceutical products.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── 7. Co-Promoter Profile Section ─── */}
      <section className="py-24 bg-lightGray">
        <div className="container mx-auto px-6 md:px-12">
          
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
              Partner & Director
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-4">
              Co-Promoter Profile
            </h2>
            <div className="w-16 h-1 bg-natureGreen mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
            {/* Co-Promoter Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-natureGreen/20 shadow-xl flex-shrink-0"
            >
              <img 
                src="/cofounder.png" 
                alt="Jayesh Tanna"
                className="w-full h-full object-cover scale-[1.12]"
              />
            </motion.div>

            {/* Info Grid */}
            <div className="flex-grow space-y-6">
              <div>
                <span className="text-natureGreen font-bold text-xs uppercase tracking-wider block mb-1">Director - Business Development</span>
                <h3 className="text-2xl font-heading font-bold text-darkGreen">Jayesh Tanna</h3>
                <div className="w-12 h-0.5 bg-natureGreen mt-3" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-natureGreen" />
                  <span><strong>DOB:</strong> 19.07.1962</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flag className="w-4 h-4 text-natureGreen" />
                  <span><strong>Nationality:</strong> Indian</span>
                </div>
                <div className="sm:col-span-2 flex items-start gap-2">
                  <GraduationCap className="w-4 h-4 text-natureGreen mt-0.5 flex-shrink-0" />
                  <span><strong>Qualifications:</strong> B.Com - Jai Hind University, Mumbai</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-darkGreen font-bold text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-natureGreen" /> Countries Worked
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Singapore", "Germany", "USA", "Canada", "India", "Austria", "Japan", "United Kingdom"].map((country, i) => (
                    <span key={i} className="px-3 py-1 bg-lightGray text-gray-700 rounded-full text-xs font-semibold">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. Disciplines & Expertise Section ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-4">
              Disciplines & Executive Expertise
            </h2>
            <div className="w-16 h-1 bg-natureGreen mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {disciplines.map((disc, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.08, duration: 0.7 }}
                className="bg-lightGray/60 rounded-3xl p-8 border border-gray-100 shadow-sm flex gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-natureGreen/10 text-natureGreen flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-darkGreen text-base mb-2">{disc.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{disc.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Extra Infographic Box */}
            <motion.div
              {...fadeUp}
              className="bg-darkGreen text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between md:col-span-2 lg:col-span-3 lg:flex-row lg:items-center gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-natureGreen/20 text-natureGreen flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">Bridge to Green Technology</h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-4xl">
                    Our leadership provides technology transfers from developed international markets to developing local industries, delivering high-standard verbal/written communications and executing complex joint ventures.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromotersPage;
