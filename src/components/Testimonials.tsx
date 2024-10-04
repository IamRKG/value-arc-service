'use client';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Their embroidery digitizing service is top-notch. The attention to detail is impressive!",
    author: "Sarah Johnson",
    company: "Fashion Emporium",
    rating: 5
  },
  {
    quote: "The artwork they created for our company uniforms exceeded our expectations. Highly recommended!",
    author: "Mike Thompson",
    company: "Corporate Apparel Co.",
    rating: 5
  },
  {
    quote: "Fast turnaround and excellent quality. They've become our go-to for all embroidery projects.",
    author: "Emily Chen",
    company: "Sports Team Outfitters",
    rating: 4
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-amber-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: star * 0.1 }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-serif font-bold text-center mb-12 text-navy"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
              <StarRating rating={testimonial.rating} />
              <p className="font-semibold text-navy mt-2">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
