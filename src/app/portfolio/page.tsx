'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Input } from '@/components/ui/input';
import Masonry from 'react-masonry-css';
import { FaFilter } from 'react-icons/fa';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useParallax } from 'react-scroll-parallax';
import { ReactTyped } from "react-typed";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import { Link as ScrollLink } from 'react-scroll';

const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};
const portfolioItems = [
  {
    title: "Custom Patch",
    category: "Artwork",
    imageSrc: "/images/portfolio/Value-Arc-Portfolio_3.jpg",
    description: "Original artwork creation for a motorcycle club patch."
  },
  {
    title: "Corporate Logo",
    category: "Embroidery Digitizing",
    imageSrc: "/images/portfolio/Value-Arc-Portfolio_14.jpg",
    description: "Precision digitizing of a complex corporate logo for uniform embroidery."
  },

  {
    title: "Sports Emblem",
    category: "Embroidery Digitizing",
    imageSrc: "/images/portfolio/Value-Arc-Portfolio_15.jpg",
    description: "Digitized version of a local sports team emblem for jersey application."
  },
  {
    title: "Wedding Monogram",
    category: "Image  Optimization",
    imageSrc: "/images/portfolio/Value-Arc-Portfolio_6.jpg",
    description: "Custom designed and digitized monogram for wedding favors."
  },
  {
    title: "Wedding Monogram",
    category: "Image  Optimization",
    imageSrc: "/images/portfolio/Value-Arc-Portfolio_7.jpg",
    description: "Custom designed and digitized monogram for wedding favors."
  },
  {
    title: "Wedding Monogram",
    category: "Image  Optimization",
    imageSrc: "/images/portfolio/Value-Arc-Portfolio_8.jpg",
    description: "Custom designed and digitized monogram for wedding favors."
  },
  {
    title: "Wedding Monogram",
    category: "Image  Optimization",
    imageSrc: "/images/portfolio/Value-Arc-Portfolio_9.jpg",
    description: "Custom designed and digitized monogram for wedding favors."
  },
 
  {
    title: "3D Puff Design",
    category: "Mockup",
    imageSrc: "/images/portfolio/Value-Arc-Portfolio_4.jpg",
    description: "Digitized design optimized for 3D puff embroidery technique."
  },
  {
    title: "Vintage Logo",
    category: "Sublimation & Uniform Builder",
    imageSrc: "/images/portfolio/Value-Arc-Portfolio_17.jpg",
    description: "Restored and digitized a vintage company logo for modern use."
  },
  {
    title: "Vintage Logo",
    category: "Sublimation & Uniform Builder",
    imageSrc: "/images/portfolio/Value-Arc-Portfolio_18.jpg",
    description: "Restored and digitized a vintage company logo for modern use."
  },

  {
    title: "3D Puff Design",
    category: "Mockup",
    imageSrc: "/images/portfolio/Value-Arc-Portfolio_5.jpg",
    description: "Digitized design optimized for 3D puff embroidery technique."
  },
  {
    title: "Floral Pattern",
    category: "Artwork",
    imageSrc: "/images/portfolio/Value-Arc-Portfolio_12.jpg",
    description: "Intricate floral pattern design for textile printing."
  },
  {
    title: "Mascot Logo",
    category: "Embroidery Digitizing",
    imageSrc: "/images/portfolio/Value-Arc-Portfolio_16.jpg",
    description: "Digitized mascot logo for school sports team uniforms."
  },

 
 
  {
    title: "Sequin Design",
    category: "Mockup",
    imageSrc: "/images/portfolio/Value-Arc-Portfolio_10.jpg",
    description: "Digitized design for sequin embroidery on fashion items."
  },


];

const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(6);
  const { ref } = useParallax<HTMLDivElement>({ speed: -20 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);
  // Add this state to track loading state
  const [isLoading, setIsLoading] = useState(false);

  const particlesOptions = {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      move: { enable: true, speed: 1, direction: "none" as const, random: false, straight: false, out_mode: "out" as const }
    }
  };

  const filteredItems = portfolioItems.filter(item => 
    (filter === 'All' || item.category === filter) &&
    (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Update the filtering function
  const handleCategoryChange = async (category: string) => {
    setIsLoading(true);
    setFilter(category);
    setVisibleItems(6);
    
    // Add small delay to ensure smooth transition
    await new Promise(resolve => setTimeout(resolve, 300));
    
 
    
    setIsLoading(false);
  };

  return (
    <>
      <motion.section style={{ opacity }} className="relative h-screen overflow-hidden">
        <div ref={ref} className="absolute inset-0">
          <Image
            src="/images/hero-portfolio.jpg"
            alt="Portfolio Hero Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4">
              <span className="typed-text">
                <ReactTyped
                  strings={['Our Portfolio', 'Creative Designs', 'Innovative Solutions']}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 1 }}
              className="h-1 bg-amber-500 mx-auto mb-8"
              style={{ maxWidth: '200px' }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white text-center mb-8 max-w-2xl px-4"
          >
            Discover our stunning collection of embroidery designs and artwork
          </motion.p>
          <ScrollLink
  to="portfolio-section"
  smooth={true}
  duration={500}
  offset={-100}
>
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
    whileTap={{ scale: 0.95 }}
    className="bg-navy text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 relative overflow-hidden group cursor-pointer"
  >
    <span className="relative z-10">Explore Our Work</span>
    <motion.div
      className="absolute inset-0 bg-amber-500"
      initial={{ x: '-100%' }}
      whileHover={{ x: 0 }}
      transition={{ duration: 0.3 }}
    />
  </motion.button>
</ScrollLink>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-white animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.section>

      <main id="portfolio-section"  className="flex flex-col items-center justify-center py-16 bg-gray-50 bg-opacity-50 bg-[url('/images/subtle-pattern.webp')]">
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
                onClick={() => handleCategoryChange(category)}
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
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full text-center py-8"
              >
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-navy border-t-transparent"></div>
              </motion.div>
            ) : (
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
            )}
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
        <div 
          className="fixed inset-0 bg-black/50 z-40 flex items-end justify-center md:hidden"
          onClick={() => setIsCategoryMenuOpen(false)}
        >
          <div 
            className="bg-white p-6 rounded-t-2xl w-full max-h-[70vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
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

