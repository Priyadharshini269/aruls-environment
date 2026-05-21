import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home',        path: '/',            type: 'route' },
    { name: 'About Us',    path: '/about',        type: 'route' },
    { name: 'Energy',      path: '/energy',       type: 'route' },
    { name: 'Water',       path: '/water',        type: 'route' },
    { name: 'Environment', path: '/environment',  type: 'route' },
    { name: 'Promoters',   path: '/promoters',    type: 'route' },
    { name: 'Contact Us',  path: '/contact',      type: 'route' },
  ];

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    if (link.type === 'anchor') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(link.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (link) => {
    if (link.type === 'route') return location.pathname === link.path;
    return false;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-4'
          : 'bg-white/90 backdrop-blur-sm shadow-sm py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src="/assets/logo.png" 
            alt="Arul's Energy & Environment Pvt Limited" 
            className="h-12 md:h-16 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) =>
            link.type === 'route' ? (
              <Link
                key={link.name}
                to={link.path}
                className={`font-semibold text-[15px] tracking-wide transition-colors relative group py-1 ${
                  isActive(link)
                    ? 'text-envGreen'
                    : 'text-black hover:text-envGreen'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[3px] bg-envGreen transition-all duration-300 rounded-full ${
                    isActive(link) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className="font-semibold text-[15px] tracking-wide text-black hover:text-envGreen transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-envGreen transition-all duration-300 rounded-full group-hover:w-full" />
              </button>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-black hover:text-envGreen transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-t border-gray-100 py-4 flex flex-col px-6 lg:hidden shadow-2xl"
        >
          {navLinks.map((link) =>
            link.type === 'route' ? (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 text-[15px] font-semibold border-b border-gray-100 last:border-0 hover:text-envGreen transition-colors ${
                  isActive(link) ? 'text-envGreen' : 'text-black'
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className="py-3 text-[15px] font-semibold text-black border-b border-gray-100 last:border-0 hover:text-envGreen transition-colors text-left"
              >
                {link.name}
              </button>
            )
          )}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
