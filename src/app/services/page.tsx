'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';

const services = [
  {
    title: "Embroidery Digitizing",
    description: "Transform your designs into high-quality, stitch-ready files for embroidery machines.",
    imageSrc: "/images/services/embroidery-digitizing.jpg"
  },
  {
    title: "Custom Artwork",
    description: "Create unique, eye-catching designs tailored to your specific needs and brand identity.",
    imageSrc: "/images/services/custom-artwork.jpg"
  },
  {
    title: "Artwork Restoration",
    description: "Breathe new life into old or damaged designs, preserving their essence while enhancing quality.",
    imageSrc: "/images/services/artwork-restoration.jpg"
  },
  {
    title: "Specialty Digitizing",
    description: "Expert digitizing for complex techniques like 3D puff, appliqué, and sequin embroidery.",
    imageSrc: "/images/services/specialty-digitizing.jpg"
  },
  {
    title: "Rush Services",
    description: "Quick turnaround for time-sensitive projects without compromising on quality.",
    imageSrc: "/images/services/rush-services.jpg"
  },
  {
    title: "Consultation",
    description: "Expert advice on embroidery techniques, design optimization, and project planning.",
    imageSrc: "/images/services/consultation.jpg"
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null) as any;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-navy to-blue-800 text-white">
      {/* Improved Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
        <Image
          src="/images/services/hero-background.jpg"
          alt="Embroidery background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif font-bold text-amber-500 mb-6"
            >
              Embroidery Excellence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Elevate your brand with our expert embroidery solutions. We bring your designs to life with precision and artistry.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 text-navy px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-600 transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-amber-500 text-amber-500 px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-500 hover:text-navy transition-colors"
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
        >
          <a href="#services" className="text-white flex flex-col items-center group">
            <span className="mb-2 group-hover:text-amber-500 transition-colors">Explore Our Services</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="group-hover:text-amber-500 transition-colors"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </motion.svg>
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-16">
        <div className="container mx-auto px-4">
          <AnimatedText className="text-4xl font-serif font-bold text-center mb-8 text-amber-500">
            Our Services
          </AnimatedText>
          <motion.p 
            className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            At Value Arc, we offer a comprehensive range of embroidery and design services to bring your vision to life. Explore our offerings below:
          </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, staggerChildren: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="cursor-pointer"
              >
                <AnimatedServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white p-6 rounded-lg max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-navy mb-4">{selectedService.title}</h3>
              <p className="text-gray-600 mb-4">{selectedService.description}</p>
              <img src={selectedService.imageSrc} alt={selectedService.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <button 
                className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
