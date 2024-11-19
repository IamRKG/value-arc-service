'use client'

import AnimatedText from '@/components/AnimatedText'
import ContactInfo from '@/components/ContactInfo'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Hero"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
      </div>
      
      <div className="relative min-h-screen bg-navy/80 flex flex-col">
        <div className="flex-1 flex items-center justify-center pt-20 pb-12 md:py-20">
          <div className="w-full px-4 md:container md:mx-auto">
            <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center px-2"
              >
                <AnimatedText className="text-2xl sm:text-3xl md:text-5xl font-bold text-amber-400">
                  Let&apos;s Connect
                </AnimatedText>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-xl rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/10 mx-2"
              >
                <div className="max-w-lg mx-auto">
                  <ContactInfo />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
