import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import CountUp from 'react-countup';

const ResultsShowcase: React.FC = () => {
  const impactData = [
    { number: 5000, label: 'Designs Digitized', suffix: '+' },
    { number: 98, label: 'Client Satisfaction', suffix: '%' },
    { number: 1000, label: 'Happy Customers', suffix: '+' },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <AnimatedText className="text-3xl font-serif font-bold text-center mb-12 text-navy">
          Our Impact in Numbers
        </AnimatedText>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.h3 
                className="text-5xl font-bold text-amber-500 mb-2"
                whileHover={{ scale: 1.1 }}
              >
                <CountUp end={item.number} duration={2.5} suffix={item.suffix} />
              </motion.h3>
              <p className="text-lg text-navy">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
