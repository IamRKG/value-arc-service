'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';
import ValueProposition from '@/components/ValueProposition';
import Testimonials from '@/components/Testimonials';
import ValueArcService from '@/components/ValueArcService';
import ResultsShowcase from '@/components/ResultsShowcase';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <Hero />
      <ValueProposition />
      <ValueArcService />
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-serif font-bold text-center mb-4 text-navy"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Core Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            <AnimatedServiceCard 
              title="Embroidery Digitizing" 
              description="Convert your artwork into high-quality embroidery files for any machine."
              imageSrc="/images/embroidery-digitizing.webp"
            />
            <AnimatedServiceCard 
              title="Artwork Services" 
              description="Create unique designs tailored for embroidery, from logos to complex illustrations."
              imageSrc="/images/custom-artwork.jpg"
            />
            <AnimatedServiceCard 
              title="File Conversion & Optimization" 
              description="Convert and optimize your existing files for better embroidery results."
              imageSrc="/images/file-conversion.jpg"
            />
          </div>
          <motion.div 
            className="text-center mt-16"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a 
              href="/services" 
              className="inline-block px-8 py-4 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Services
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
      <ResultsShowcase />
      <Testimonials />
    </main>
  );
}
