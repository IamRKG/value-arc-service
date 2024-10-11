import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import AnimatedText from './AnimatedText';
import { FaPencilRuler, FaSmile, FaUsers} from 'react-icons/fa';

const impactData = [
  { number: 1000, label: 'Designs Digitized', suffix: '+', icon: FaPencilRuler },
  { number: 98, label: 'Client Satisfaction', suffix: '%', icon: FaSmile },
  { number: 100, label: 'Happy Customers', suffix: '+', icon: FaUsers },
];

const ResultsShowcase: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-navy via-navy-light to-navy py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <AnimatedText className="text-5xl font-bold text-center mb-16 text-amber-500">
          Our Impact in Numbers
        </AnimatedText>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              className="text-center bg-navy-light p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              variants={itemVariants}
            >
              <motion.div
                className="text-amber-500 text-5xl mb-6 flex justify-center items-center"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
