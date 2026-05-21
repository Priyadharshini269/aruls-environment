import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-darkGreen text-white py-8 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
          <p>copyrights © {new Date().getFullYear()} all rights reserved. powered by <span className="text-[#22c55e]">digisailor</span></p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-envGreen hover:bg-emeraldAccents flex items-center justify-center text-white transition-colors"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
