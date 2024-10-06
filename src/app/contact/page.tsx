import AnimatedText from '@/components/AnimatedText'
import AnimatedContactForm from '@/components/AnimatedContactForm'
import ContactInfo from '@/components/ContactInfo'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className="pt-24 md:pt-24 min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-navy relative min-h-[50vh] md:min-h-screen">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact Hero"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16">
            <AnimatedText className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-amber-400">
              Let&apos;s Connect
            </AnimatedText>
            <p className="text-white text-base md:text-lg mb-6 md:mb-8">
              We&apos;re here to answer your questions and help you get started.
            </p>
            <ContactInfo />
          </div>
        </div>
        <div className="md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center min-h-[50vh] md:min-h-screen">
          <AnimatedText className="text-2xl md:text-4xl font-semibold mb-6 md:mb-8 text-navy">
            Send Us a Message
          </AnimatedText>
          <AnimatedContactForm />
        </div>
      </div>
    </div>
  )
}
