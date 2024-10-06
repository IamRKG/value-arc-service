'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';
import ResultsShowcase from '@/components/ResultsShowcase';
import { FaLightbulb, FaChartLine, FaUsers, FaCog, FaChevronDown, FaCheckCircle } from 'react-icons/fa';

const ValueArcPage: React.FC = () => {
  const valueArcSteps = [
    { icon: FaLightbulb, title: 'Innovation', description: 'Constantly exploring new techniques and technologies' },
    { icon: FaChartLine, title: 'Growth', description: 'Scaling our capabilities to meet evolving client needs' },
    { icon: FaUsers, title: 'Collaboration', description: 'Fostering partnerships for mutual success' },
    { icon: FaCog, title: 'Optimization', description: 'Refining processes for maximum efficiency and quality' },
  ];

  const commitmentPoints = [
    'Delivering high-quality results consistently',
    'Staying at the forefront of industry trends',
    'Providing personalized solutions for each client',
    'Maintaining open communication throughout projects',
    'Continuously improving our processes and skills',
  ];

  return (
    <div className="bg-navy min-h-screen text-white">
        <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/images/value-arc-hero.jpg"
          alt="Value Arc Hero"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/70 to-navy z-10"></div>
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <AnimatedText className="text-6xl font-bold mb-6">
              Elevate Your Business
            </AnimatedText>
          </motion.div>
          <motion.h2 
            className="text-3xl text-amber-500 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Through Our Value Arc Approach
          </motion.h2>
          <motion.p 
            className="text-xl mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Discover how our continuous improvement strategy can transform your embroidery and design projects.
          </motion.p>
          <motion.button
            className="bg-amber-500 text-navy font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Value Arc
          </motion.button>
        </div>
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaChevronDown className="text-4xl text-amber-500" />
        </motion.div>
      </motion.section>
      <main className="container mx-auto px-4 py-16">
        <AnimatedText className="text-4xl font-bold mb-12 text-center">
          Our Value Arc
        </AnimatedText>
        
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-amber-500">What is Value Arc?</h2>
              <p className="text-lg mb-4">
              Value Arc represents our commitment to delivering increasing value to our clients over time. 
It&apos;s a representation of how our services evolve and improve, always aiming to exceed expectations.

              </p>
              <motion.button
                className="bg-amber-500 text-navy font-bold py-2 px-6 rounded-full text-lg hover:bg-amber-600 transition duration-300 mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/images/value-arc-diagram.jpg"
                alt="Value Arc Diagram"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-8 text-amber-500 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueArcSteps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-navy-light p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <step.icon className="text-4xl text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <ResultsShowcase />
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="py-16 bg-navy-light"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-amber-500 text-center">Our Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                {commitmentPoints.map((point, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <FaCheckCircle className="text-amber-500 text-xl flex-shrink-0 mt-1" />
                    <p className="text-lg">{point}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="relative h-80 rounded-lg overflow-hidden shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/commitment-image.jpg"
                  alt="Our Commitment"
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </div>
            <motion.p 
              className="text-xl mt-12 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              At Value Arc, we&apos;re not just about delivering great results today. We&apos;re committed to 
              continuously improving and innovating, ensuring that our clients always receive the 
              best possible value from our services.
            </motion.p>
          </div>
        </motion.section>
      </main>
    </div>
  );
};
export default ValueArcPage;
