'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-md py-2 border-b-4 border-amber-500'
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          animate={{ scale: isScrolled ? 0.8 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Logo color={isScrolled ? 'white' : 'white'} />
        </motion.div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-lg font-semibold ${
                    isScrolled ? 'text-white' : 'text-white'
                  } hover:text-amber-500 transition-colors duration-300`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.button
          className="md:hidden text-3xl text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ☰
        </motion.button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden bg-navy shadow-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="py-4">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <motion.li
                  key={item}
                  className="px-4 py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-semibold text-white hover:text-amber-500 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
