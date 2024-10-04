'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ValueArcService: React.FC = () => {
  const steps = ['Discovery', 'Design', 'Digitize', 'Deliver'];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-serif font-bold text-center mb-12 text-navy"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Value Arc
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              className="flex flex-col items-center mb-8 md:mb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-24 h-24 rounded-full bg-amber-500 flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl font-bold text-white">{index + 1}</span>
              </motion.div>
              <h3 className="text-xl font-bold text-navy">{step}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueArcService;
