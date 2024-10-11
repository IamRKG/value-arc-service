'use client';
import { FaEnvelope, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactItems = [
  { icon: FaEnvelope, text: 'business@valuearcservices.com', href: 'mailto:business@valuearcservices.com' },
  { icon: FaEnvelope, text: 'gopal@valuearcservices.com', href: 'mailto:gopal@valuearcservices.com' },
  { icon: FaEnvelope, text: 'sales@valuearcservices.com', href: 'mailto:sales@valuearcservices.com' },
  { icon: FaLinkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/company/valuearc' },
  { icon: FaTwitter, text: 'Twitter', href: 'https://twitter.com/valuearc' },
  { icon: FaFacebook, text: 'Facebook', href: 'https://www.facebook.com/valuearc' },
];

export default function ContactInfo() {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-6 text-amber-400">Contact Us</h2>
      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center group hover:bg-navy-light p-2 rounded-md transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon className="mr-3 text-xl text-amber-400 group-hover:text-white transition-colors duration-300" />
            <span className="group-hover:text-amber-400 transition-colors duration-300">{item.text}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
