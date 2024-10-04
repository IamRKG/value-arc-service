'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PortfolioItemProps {
  title: string;
  category: string;
  description: string;
  imageSrc?: string; // Make imageSrc optional
}

export default function PortfolioItem({ title, category, description, imageSrc }: PortfolioItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Image 
        src={imageSrc || `https://placehold.co/400x300/navy/white?text=${encodeURIComponent(title)}`}
        alt={title} 
        width={400} 
        height={300} 
        className="w-full h-64 object-cover"
      />
      <motion.div 
        className="absolute inset-0 bg-navy bg-opacity-80 flex flex-col justify-center items-center p-4 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-2">{category}</p>
        <p className="text-sm text-center">{description}</p>
      </motion.div>
    </motion.div>
  );
}
