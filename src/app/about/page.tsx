'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import { FaChevronDown, FaDigitalTachograph, FaPaintBrush, FaTshirt, FaCheckCircle } from 'react-icons/fa'

const AboutPage: React.FC = () => {
  const services = [
    { icon: FaDigitalTachograph, title: 'Digital Precision', description: 'State-of-the-art digitizing for flawless embroidery patterns.' },
    { icon: FaPaintBrush, title: 'Custom Artwork', description: 'Bespoke designs tailored to your unique vision and brand.' },
    { icon: FaTshirt, title: 'Versatile Applications', description: 'From apparel to accessories, we bring your ideas to fabric.' }
  ]

  const commitmentPoints = [
    'No Charge up to five design will be tested',
    'Flexible pricing and next business day delivery',
    'No revision fees, no hidden charges',
    '24/7 customer support, 365 days a year',
    'Delivering high-quality artwork, embroidery consistently',
    'Staying at the forefront of artwork, embroidery technology',
    'Providing personalized designs for each client',
    'Maintaining open communication throughout projects',
    'Continuously improving our artwork, embroidery techniques',
  ]

  return (
    <div className="bg-navy min-h-screen text-white">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/images/about-hero.png"
          alt="About Hero"
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
            Artwork, Embroidery & Image Optimization Excellence
            </AnimatedText>
          </motion.div>
          <motion.h2 
            className="text-3xl text-amber-500 mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Crafting Your Vision with Precision
          </motion.h2>
          <motion.p 
            className="text-xl mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Discover how our expert embroidery digitizing, image optimization and artwork services can elevate your brand.
          </motion.p>
          <motion.button
            className="bg-amber-500 text-navy font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Services
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

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-navy-light"
      >
        <div className="container mx-auto px-4">
          <AnimatedText className="text-4xl md:text-5xl font-bold mb-12 text-center text-amber-400">
            About Our Services
          </AnimatedText>
          
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-amber-100">
                At Value Arc Service, we specialize in premium Embroidery Digitizing & Artwork Services. 
                Our team of skilled artists and technicians combine creativity with cutting-edge technology 
                to bring your designs to life with precision and flair.
              </p>
              <motion.button
                className="bg-amber-500 text-navy font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Portfolio
              </motion.button>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/embroidery-showcase.jpg"
                alt="Embroidery Showcase"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-navy-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <service.icon className="text-5xl text-amber-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-amber-300">{service.title}</h3>
                <p className="text-amber-100">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-16 bg-navy-dark"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-amber-400 text-center">Our Commitment to Excellence</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
                  <p className="text-lg text-amber-100">{point}</p>
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
        </div>
      </motion.section>
    </div>
  )
}

export default AboutPage
