'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaRocket, FaPaintBrush, FaCog } from 'react-icons/fa';

const ValueProposition: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-r from-navy to-blue-800">
      <motion.div 
        className="absolute inset-0"
        style={{ y: scrollY * 0.5, scale }}
      >
        <Image
          src="/images/eagle.png"
          alt="Embroidery Showcase"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          className="opacity-10"
        />
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight text-white"
              style={{ opacity }}
            >
              Elevate Your Brand with Expert Artwork & Embroidery Solutions
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl mb-12 leading-relaxed text-gray-200"
              style={{ opacity }}
            >
              We transform your ideas into stunning embroidered designs, combining artistry with cutting-edge technology to deliver unparalleled quality and precision for your business.
            </motion.p>
            <div className="grid grid-cols-3 gap-8 mb-12">
              <motion.div whileHover={{ scale: 1.05 }} className="text-white text-center flex flex-col items-center">
              
                <FaRocket size={48} color='#FFA500'/>
                <p className="font-semibold">Fast Turnaround</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="text-white text-center flex flex-col items-center">
                <FaPaintBrush size={48} color='#FFA500' />
                <p className="font-semibold">Creative Designs</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="text-white text-center flex flex-col items-center">
                <FaCog size={48} color='#FFA500' />
                <p className="font-semibold">Precision Work</p>
              </motion.div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="services"
                className="inline-block px-8 py-4 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors text-lg font-semibold text-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Services
              </motion.a>
              <motion.a
                href="portfolio"
                className="inline-block px-8 py-4 bg-white text-navy rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold text-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
