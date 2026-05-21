import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emeraldAccents font-semibold tracking-wider uppercase mb-3 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-darkBlue mb-6">
              Let's Build a Sustainable Future Together
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Partner with us for world-class environmental engineering solutions. Reach out to our corporate team for inquiries, consultations, and collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-lightGray flex items-center justify-center flex-shrink-0 text-envGreen">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-darkBlue mb-1">Corporate Office</h4>
                  <p className="text-gray-600 text-sm">123 Eco Tech Park, Green Industrial Area<br/>Tamil Nadu, India 600001</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-lightGray flex items-center justify-center flex-shrink-0 text-envGreen">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-darkBlue mb-1">Phone</h4>
                  <p className="text-gray-600 text-sm">+91 (123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-lightGray flex items-center justify-center flex-shrink-0 text-envGreen">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-darkBlue mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">info@arulsenvironment.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="glassmorphism p-8 md:p-10 rounded-3xl border border-gray-100 shadow-2xl">
              <h3 className="text-2xl font-bold text-darkBlue mb-6">Send us a Message</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-lightGray border border-transparent focus:border-envGreen focus:bg-white transition-colors outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-lightGray border border-transparent focus:border-envGreen focus:bg-white transition-colors outline-none" placeholder="Organization Inc." />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-lightGray border border-transparent focus:border-envGreen focus:bg-white transition-colors outline-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-lightGray border border-transparent focus:border-envGreen focus:bg-white transition-colors outline-none" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-lightGray border border-transparent focus:border-envGreen focus:bg-white transition-colors outline-none resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-gradient-to-r from-darkGreen to-natureGreen hover:from-natureGreen hover:to-softLeafGreen text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-natureGreen/20">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
