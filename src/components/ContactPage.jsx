import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Building2, 
  Send
} from 'lucide-react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram 
} from 'react-icons/fa';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const ContactPage = () => {
  return (
    <div id="contact" className="bg-[#fcfdfc] min-h-screen">
      
      {/* ─── 1. Hero Banner Section ─── */}
      <section className="relative h-[50vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Contact Us Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14532d]/85 to-[#14532d]/65" />
        <motion.div {...fadeUp} className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-natureGreen font-semibold tracking-widest uppercase text-sm mb-3 block">
            Get In Touch With Us
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tight drop-shadow-xl mb-4">
            CONTACT US
          </h1>
          <div className="w-24 h-1 bg-natureGreen mx-auto mt-6 rounded-full" />
        </motion.div>
      </section>

      {/* ─── 2. Contact Info Offices Section ─── */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-darkGreen mb-4 leading-tight">
              Contact Info Offices
            </h2>
            <div className="w-16 h-1 bg-natureGreen mx-auto rounded-full" />
          </motion.div>

          {/* Three Responsive Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
            
            {/* Card 1: Head Office */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-natureGreen/15 text-natureGreen flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading font-bold text-darkGreen mb-4">Head Office</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                  145/5b, Jeyaraj Road,<br />
                  Tuticorin – 628002,<br />
                  Tamil Nadu, India.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-6 space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-natureGreen" />
                  <span>Tel: 0091-461-2320061 / 2338661</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 text-natureGreen font-bold flex items-center justify-center">F</span>
                  <span>Fax: 0091-461-2331509</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Corporate Office */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-natureGreen/15 text-natureGreen flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading font-bold text-darkGreen mb-4">Corporate Office</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                  B-102, Business Square,<br />
                  Chakala, Andheri East,<br />
                  Mumbai – 400093,<br />
                  India.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-6 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-natureGreen" />
                  <span>Off: +91 2226605908 / 1073</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Email & Website */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-natureGreen/15 text-natureGreen flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading font-bold text-darkGreen mb-4">Email & Website</h3>
                <div className="space-y-2 mb-6">
                  <a href="mailto:drarulrhaj@gmail.com" className="text-sm text-gray-600 font-medium hover:text-natureGreen flex items-center gap-1.5 transition-colors">
                    <Mail className="w-4 h-4 text-natureGreen" /> drarulrhaj@gmail.com
                  </a>
                  <a href="mailto:jayeshtanna2qoo@vahqo.com" className="text-sm text-gray-600 font-medium hover:text-natureGreen flex items-center gap-1.5 transition-colors">
                    <Mail className="w-4 h-4 text-natureGreen" /> jayeshtanna2qoo@vahqo.com
                  </a>
                  <a href="mailto:iayeshtanna2qiq@gmail.com" className="text-sm text-gray-600 font-medium hover:text-natureGreen flex items-center gap-1.5 transition-colors">
                    <Mail className="w-4 h-4 text-natureGreen" /> iayeshtanna2qiq@gmail.com
                  </a>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <a 
                  href="http://www.arulsenvironment.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-natureGreen font-bold flex items-center gap-1.5 hover:underline"
                >
                  <Globe className="w-4 h-4" /> www.arulsenvironment.com
                </a>
              </div>
            </motion.div>

          </div>

          <div className="max-w-4xl mx-auto">
            {/* Google Maps Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <h3 className="text-2xl font-heading font-bold text-darkGreen mb-6 text-center">Our Location</h3>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-[480px] mb-12">
                <iframe 
                  title="Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.916172605335!2d78.1472506!3d8.8021175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03f0b2f5df84b5%3A0xe21287c88b0cb13d!2sJeyaraj%20Rd%2C%20Thoothukudi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Social Media Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-4 pt-4"
            >
              <span className="text-gray-500 text-sm font-semibold">Connect with us on social media:</span>
              <div className="flex items-center gap-4">
                {[
                  { icon: <FaFacebook className="w-5 h-5" />, url: "#" },
                  { icon: <FaTwitter className="w-5 h-5" />, url: "#" },
                  { icon: <FaLinkedin className="w-5 h-5" />, url: "#" },
                  { icon: <FaInstagram className="w-5 h-5" />, url: "#" }
                ].map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.url} 
                    className="w-12 h-12 rounded-full bg-lightGray flex items-center justify-center hover:bg-natureGreen hover:text-white transition-all text-gray-600 border border-gray-100 hover:-translate-y-1"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
