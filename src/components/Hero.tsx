'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const images = [
  '/images/embroidery1.jpg',
  '/images/embroidery2.jpg',
  '/images/embroidery3.jpg',
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const timer = setInterval(nextImage, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={images[currentImage]}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5 }}
        >
                  <Image 
                    src={images[currentImage]} 
                    alt={`Embroidery sample ${currentImage + 1}`} 
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                  />
        </motion.div>
      </AnimatePresence>
      <motion.div 
        className="absolute inset-0 bg-navy bg-opacity-60 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert Artwork, Embroidery & Image Optimization Services
          </motion.h1>
          <motion.p 
            className="text-xl mb-10 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Offering professional services for creating and customizing artwork,
digitizing designs for embroidery, and optimizing images to enhance
quality and performance for print or digital use.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 rounded-full p-2 focus:outline-none hover:bg-opacity-70 transition-all duration-300"
        onClick={prevImage}
        aria-label="Previous image"
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 rounded-full p-2 focus:outline-none hover:bg-opacity-70 transition-all duration-300"
        onClick={nextImage}
        aria-label="Next image"
      >
        &#8250;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-amber-500 w-6' : 'bg-white'}`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
