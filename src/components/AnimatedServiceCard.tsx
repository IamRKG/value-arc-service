'use client';

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc?: string;
}

export default function AnimatedServiceCard({ title, description, imageSrc }: ServiceCardProps) {
  const imageSource = imageSrc || `https://image-placeholder.com/images/actual-size/400x250.png`;

  return (
    <motion.div
      className="bg-white shadow-md rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Image src={imageSource} alt={title} width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-navy">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}
