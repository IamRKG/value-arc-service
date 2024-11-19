'use client';

import { motion } from 'framer-motion'
import { useState } from 'react';

export default function AnimatedContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
        alert('Message sent successfully!');
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id.replace('grid-', '')]: e.target.value,
    });
  };

  return (
    <motion.form
      className="w-full max-w-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-navy text-xs font-bold mb-2" htmlFor="grid-firstName">
            First Name
          </label>
          <input 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-navy rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="grid-firstName" 
            type="text" 
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Jane" 
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-navy text-xs font-bold mb-2" htmlFor="grid-lastName">
            Last Name
          </label>
          <input 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-navy rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="grid-lastName" 
            type="text" 
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe" 
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-navy text-xs font-bold mb-2" htmlFor="grid-email">
            Email
          </label>
          <input 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-navy rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="grid-email" 
            type="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com" 
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-navy text-xs font-bold mb-2" htmlFor="grid-message">
            Message
          </label>
          <textarea 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-navy rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="grid-message" 
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            required
          ></textarea>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <button
            type="submit"
            className="w-full bg-amber-400 text-navy font-bold py-2 px-4 rounded hover:bg-amber-500 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </div>
    </motion.form>
  );
}
