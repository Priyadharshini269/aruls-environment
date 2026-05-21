import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const AboutUs = () => {
  return (
    <div id="about">
      {/* ─── Hero Banner ─── */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=2000&q=80"
          alt="About Us Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14532d]/80 to-[#14532d]/60" />
        <motion.div {...fadeUp} className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight drop-shadow-xl">
            ABOUT US
          </h1>
          <div className="w-24 h-1 bg-natureGreen mx-auto mt-6 rounded-full" />
        </motion.div>
      </section>

      {/* ─── Vision / Mission / Values ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Corporate Vision',
                text: 'Our vision is to be recognized nationally & internationally as the representatives for environmental excellence. Together, the participants in the group will bring forward their best efforts, best ideas and eco-friendly technologies to reduce and manage the waste created.',
                icon: '🌍',
              },
              {
                title: 'Mission Statement',
                text: 'Develop & diffuse sustainable products, technologies and services designed specifically to promote a green environment.',
                icon: '🎯',
              },
              {
                title: 'Core Values',
                text: 'Respect, responsibility, honesty, caring.',
                icon: '💎',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <span className="text-4xl block mb-4">{card.icon}</span>
                <h3 className="text-xl font-heading font-bold text-darkGreen mb-3 group-hover:text-natureGreen transition-colors">
                  {card.title}
                </h3>
                <div className="w-10 h-0.5 bg-natureGreen mb-4 rounded-full" />
                <p className="text-gray-600 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Strategic Corporate Competence ─── */}
      <section className="py-20 bg-lightGray">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80"
                  alt="Strategic Competence"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-natureGreen/10 rounded-full blur-2xl pointer-events-none" />
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.7 }}>
              <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-6 leading-tight">
                Strategic Corporate Competence
              </h2>
              <div className="w-16 h-1 bg-natureGreen mb-6 rounded-full" />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Since our inception, AEEPL has strived for economic, environmental and social balance in all of our activities by making a positive contribution to the wider society in which we operate.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our ambition is to provide safe and environmentally benign products and services, which contribute to a more sustainable use of resources.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Company Overview ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.7 }}>
              <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">Company Overview</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-6 leading-tight">
                Arul's Energy & Environment Pvt Limited
              </h2>
              <div className="w-16 h-1 bg-natureGreen mb-6 rounded-full" />
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Arul's Energy & Environment Pvt Limited, henceforth AEEPL, has identified MPM Technologies, Inc. as a target company for acquisition. MPM is a publicly traded company under the symbol MPMI in the United States.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                It was originally founded as a mining business in 1983 but has since diversified into the renewable energy and environmental sustainability industries. In 1986, the company formed Nupower, Inc. specializing in waste gasification technologies and in 1998 through the acquisition of AirPol, Inc. entered the air pollution control sector.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Between 1999 and 2001, MPM enjoyed its peak years with annual business volume reaching as much as $20 million fueled by strong management and substantial international growth.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.7 }} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=80"
                  alt="Renewable Energy"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-softLeafGreen/15 rounded-full blur-2xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Market Opportunity & Growth ─── */}
      <section className="py-20 bg-darkGreen text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-natureGreen/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-softLeafGreen/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-14">
            <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">Growth & Opportunity</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Market Potential & Future Vision
            </h2>
            <div className="w-16 h-1 bg-natureGreen mx-auto mb-6 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.7 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold text-natureGreen mb-4">Renewed Market Surge</h3>
              <p className="text-gray-300 leading-relaxed">
                In the last two years, the market potential and opportunities for all of MPM's business units have drastically increased due to the worldwide movement towards green energy and the reduction of carbon emissions, all of which are encompassed by MPM's core competencies.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.7 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold text-natureGreen mb-4">Mining Assets</h3>
              <p className="text-gray-300 leading-relaxed">
                MPM Mining stands to greatly benefit from the ever-rising price of gold and silver given its substantial reserve holdings. With the proper capital infusion, its business will grow exponentially in the coming years.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Company Background ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                  alt="Dr. Arulrhaj Background"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-natureGreen/10 rounded-full blur-2xl pointer-events-none" />
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.7 }}>
              <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-6 leading-tight">
                Company Background
              </h2>
              <div className="w-16 h-1 bg-natureGreen mb-6 rounded-full" />
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Arul's Energy & Environment Pvt Limited (AEEPL) is a proprietary company looking to provide services in the fields of environmental sustainability and renewable energy. The company was registered in India on 20.12.2006.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                The founder, Dr. S. Arulrhaj, has a long history of successfully providing medical services in India. He is the former president of the Indian Medical Association and is currently the president of the Commonwealth Medical Association in London.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Dr. Arulrhaj runs a 100-bed hospital and is therefore responsible for the safe disposal of hospital waste. Based on his long experience dealing with clinical waste, he believes that the correct way to dispose of waste is not just to destroy it, but to convert it into useful energy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Report Summary ─── */}
      <section className="py-20 bg-lightGray">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-14">
            <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">Analysis</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-6">Report Summary</h2>
            <div className="w-16 h-1 bg-natureGreen mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 text-lg leading-relaxed">
              This report analyzes and summarizes MPM's present operating status, the market for its products, its future operating plan and the projection of future operating results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Proven History',
                text: "All of MPM's three operating units — Nupower, Inc., MPM Mining, Inc. and AirPol, Inc. — have impressive histories, well equipped with good technologies and/or abundant assets and are ready for development.",
                num: '01',
              },
              {
                title: 'Unlimited Market',
                text: "The markets for all three operations — waste-to-energy, gold and silver trade and environmental sustainability — are the focuses of today's global market. MPM stands to benefit tremendously.",
                num: '02',
              },
              {
                title: 'Solid Foundation',
                text: 'MPM has a solid foundation for new development to build upon and has made all the necessary preparations. Short-term results can be readily achieved and a very favorable long-term ROI is expected.',
                num: '03',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <span className="text-5xl font-heading font-extrabold text-natureGreen/20 group-hover:text-natureGreen/40 transition-colors">{item.num}</span>
                <h3 className="text-xl font-heading font-bold text-darkGreen mt-3 mb-3 group-hover:text-natureGreen transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} transition={{ delay: 0.5, duration: 0.7 }} className="text-center text-gray-600 text-lg mt-12 max-w-3xl mx-auto">
            After completing the DD process, AEEPL will immediately take actions to close the transaction and launch MPM business development in India and Asia.
          </motion.p>
        </div>
      </section>

      {/* ─── Acquisition Opportunity ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.7 }}>
              <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">Opportunity</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-6 leading-tight">
                Acquisition Opportunity
              </h2>
              <div className="w-16 h-1 bg-natureGreen mb-6 rounded-full" />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The findings from a serious search for suitable candidates had been challenging:
              </p>
              <ul className="space-y-5">
                {[
                  "There are at least 50 companies in the world that claim they possess such technology, but no more than a dozen have truly built a unit with their technology.",
                  "The few that have successfully commercialized their technologies are simply \"untouchable\" — either unwilling to entertain acquisition or demanding a ridiculously high sell price.",
                  "The products from these companies have been found to be very intensive in both capital and operating costs. It is doubtful whether their technologies make economic sense.",
                ].map((point, i) => (
                  <li key={i} className="flex gap-4 items-start bg-lightGray rounded-xl px-6 py-4 border-l-4 border-natureGreen">
                    <span className="font-extrabold text-natureGreen text-lg flex-shrink-0">{String.fromCharCode(97 + i)}.</span>
                    <p className="text-gray-600 leading-relaxed">{point}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Why MPM ─── */}
      <section className="py-20 bg-lightGray">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-natureGreen font-semibold tracking-wider uppercase text-sm mb-2 block">Why MPM</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-darkGreen mb-6">
              Why the MPM Acquisition Was Attractive
            </h2>
            <div className="w-16 h-1 bg-natureGreen mx-auto mb-6 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Unique Skygas Technology',
                text: 'The Skygas electro-kinetic gasification technology relies on "free radical chain reactions" to decompose waste at a much lower level of energy consumption than its competition.',
                icon: '⚡',
              },
              {
                title: 'Proven & Viable',
                text: 'The technology is nearing full commercialization — a commercial scale Skygas plant was built and tested in 1992–1993. The technology has been proven viable.',
                icon: '✅',
              },
              {
                title: 'Valuable Assets',
                text: 'Along with Skygas, AEEPL will acquire AirPol, Inc. (air pollution control and syngas cleaning) and MPM Mining, Inc. (considerable mining assets).',
                icon: '💰',
              },
              {
                title: 'Excellent Management',
                text: 'An excellent management team that understands the value of MPM — can only be realized and multiplied via the proper infusion of resources.',
                icon: '👥',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex gap-5"
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="text-lg font-heading font-bold text-darkGreen mb-2 group-hover:text-natureGreen transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} transition={{ delay: 0.5, duration: 0.7 }} className="text-center text-gray-500 mt-12 max-w-3xl mx-auto">
            Since the initial contact made in October of 2009, the discussion with MPM management has been progressing steadily. A binding MOU was signed on December 25, 2009, recently amended on March 10, 2010 with the final closing scheduled for September 2011.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
