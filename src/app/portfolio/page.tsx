'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import Masonry from 'react-masonry-css';
import { FaFilter } from 'react-icons/fa';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const portfolioItems = [
  {
    title: "Corporate Logo",
    category: "Embroidery Digitizing",
    imageSrc: "/images/portfolio/corporate-logo.jpg",
    description: "Precision digitizing of a complex corporate logo for uniform embroidery."
  },
  {
    title: "Custom Patch",
    category: "Custom Artwork",
    imageSrc: "/images/portfolio/custom-patch.jpg",
    description: "Original artwork creation for a motorcycle club patch."
  },
  {
    title: "Sports Emblem",
    category: "Embroidery Digitizing",
    imageSrc: "/images/portfolio/sports-emblem.jpg",
    description: "Digitized version of a local sports team emblem for jersey application."
  },
  {
    title: "Wedding Monogram",
    category: "Custom Artwork & Digitizing",
    imageSrc: "/images/portfolio/wedding-monogram.jpg",
    description: "Custom designed and digitized monogram for wedding favors."
  },
  {
    title: "Vintage Logo",
    category: "Artwork Restoration & Digitizing",
    imageSrc: "/images/portfolio/vintage-logo.jpg",
    description: "Restored and digitized a vintage company logo for modern use."
  },
  {
    title: "3D Puff Design",
    category: "Specialty Digitizing",
    imageSrc: "/images/portfolio/3d-puff-design.jpg",
    description: "Digitized design optimized for 3D puff embroidery technique."
  }
];

const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(6);

  const filteredItems = portfolioItems.filter(item => 
    (filter === 'All' || item.category === filter) &&
    (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>

      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-portfolio.jpg"
            alt="Portfolio Hero Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center tracking-tight mb-4"
          >
            Our Portfolio
          </motion.h1>
          <p className="text-lg sm:text-xl text-white text-center mb-8 max-w-2xl px-4">
            Discover our stunning collection of embroidery designs and custom artwork
          </p>
          <button className="bg-navy text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-500 transition-colors">
            Explore Our Work
          </button>
        </div>
      </section>

      <main className="flex flex-col items-center justify-center py-16 bg-gray-50 bg-opacity-50 bg-[url('/images/subtle-pattern.png')]">
        <div className="container mx-auto px-4">
          <div className="mb-12 w-full max-w-xl mx-auto px-4">
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full shadow-lg focus:ring-navy"
            />
          </div>

          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`mx-1 my-1 px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-3 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-navy text-white shadow-lg transform scale-105'
                    : 'bg-white text-navy hover:bg-amber-100 hover:shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <AnimatePresence>
            <Masonry
              breakpointCols={{
                default: 3,
                1024: 2,
                640: 1
              }}
              className="flex w-auto"
              columnClassName="bg-clip-padding px-2"
            >
              {filteredItems.slice(0, visibleItems).map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="mb-4 group"
                >
                  <Zoom
 
                    zoomMargin={40}
                    zoomImg={{
                      src: item.imageSrc,
                      alt: item.title,
                      width: 1200,
                      height: 900
                    }}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        width={400}
                        height={300}
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white text-xl font-bold">{item.title}</h3>
                        <p className="text-white text-sm">{item.category}</p>
                      </div>
                    </div>
                  </Zoom>
                </motion.div>
              ))}
            </Masonry>
          </AnimatePresence>

          {visibleItems < filteredItems.length && (
            <div className="text-center mt-8">
              <button
                onClick={() => setVisibleItems(prev => prev + 6)}
                className="bg-navy text-white px-6 py-2 rounded-full hover:bg-amber-500 transition-colors"
              >
                Load More
              </button>
            </div>
          )}

          {filteredItems.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No items found. Try adjusting your search or filter.</p>
          )}
        </div>
      </main>

      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
          className="bg-navy text-white p-4 rounded-full shadow-lg hover:bg-amber-500"
        >
          <FaFilter />
        </button>
      </div>

      {isCategoryMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-end justify-center md:hidden">
          <div className="bg-white p-6 rounded-t-2xl w-full max-h-[70vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setFilter(category);
                  setIsCategoryMenuOpen(false);
                }}
                className="block w-full text-left py-2 px-4 rounded my-1 transition-colors duration-200"
                style={{
                  backgroundColor: filter === category ? '#f0f4f8' : 'transparent',
                  color: filter === category ? '#1a365d' : '#4a5568',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
