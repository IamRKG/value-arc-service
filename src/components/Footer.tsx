'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo color="white" />
            <p className="text-sm mt-4">Professional embroidery digitizing and custom artwork services.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {['Embroidery Digitizing', 'Custom Artwork', 'File Conversion', 'Design Editing'].map((service) => (
                <motion.li key={service} whileHover={{ x: 5 }}>
                  <Link href={`/services/${service.toLowerCase().replace(' ', '-')}`} className="hover:text-amber-500 transition duration-300">
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <Link href={`/${item.toLowerCase()}`} className="hover:text-amber-500 transition duration-300">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-2">
              123 Embroidery Lane<br />
              Stitchville, ST 12345
            </p>
            <p className="text-sm mb-2">
              <strong>Email:</strong> info@valuearc.com
            </p>
            <p className="text-sm mb-4">
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="hover:text-amber-500 transition duration-300"
                  aria-label={social}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-700 text-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; 2023 Value Arc Services. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
