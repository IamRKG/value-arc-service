import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import AnimatedText from './AnimatedText';
import { FaPencilRuler, FaSmile, FaUsers } from 'react-icons/fa';

interface ResultsShowcaseProps {
  'data-new-gr-c-s-check-loaded'?: string;
  'data-gr-ext-installed'?: string;
}

const ResultsShowcase: React.FC<ResultsShowcaseProps> = (props) => {
  const impactData = [
    { number: 5000, label: 'Designs Digitized', suffix: '+', icon: FaPencilRuler },
    { number: 98, label: 'Client Satisfaction', suffix: '%', icon: FaSmile },
    { number: 1000, label: 'Happy Customers', suffix: '+', icon: FaUsers },
  ];

  return (
    <section className="bg-gradient-to-b from-navy to-navy-light py-20" {...props}>
      <div className="container mx-auto px-4">
        <AnimatedText className="text-4xl font-bold text-center mb-16 text-amber-500">
          Our Impact in Numbers
        </AnimatedText>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              className="text-center bg-navy-light p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-amber-500 text-5xl mb-6 flex justify-center items-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 260, damping: 20 }}
              >
                <item.icon />
              </motion.div>
              <motion.h3 
                className="text-6xl font-bold text-white mb-4"
                whileHover={{ scale: 1.1 }}
              >
                <CountUp end={item.number} duration={2.5} suffix={item.suffix} />
              </motion.h3>
              <p className="text-xl text-amber-500 font-semibold">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;