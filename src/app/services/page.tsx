'use client'
import AnimatedText from '@/components/AnimatedText';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';

const services = [
  {
    title: "Embroidery Digitizing",
    description: "Transform your designs into high-quality, stitch-ready files for embroidery machines.",
    imageSrc: "/images/services/embroidery-digitizing.jpg"
  },
  {
    title: "Custom Artwork",
    description: "Create unique, eye-catching designs tailored to your specific needs and brand identity.",
    imageSrc: "/images/services/custom-artwork.jpg"
  },
  {
    title: "Artwork Restoration",
    description: "Breathe new life into old or damaged designs, preserving their essence while enhancing quality.",
    imageSrc: "/images/services/artwork-restoration.jpg"
  },
  {
    title: "Specialty Digitizing",
    description: "Expert digitizing for complex techniques like 3D puff, appliqué, and sequin embroidery.",
    imageSrc: "/images/services/specialty-digitizing.jpg"
  },
  {
    title: "Rush Services",
    description: "Quick turnaround for time-sensitive projects without compromising on quality.",
    imageSrc: "/images/services/rush-services.jpg"
  },
  {
    title: "Consultation",
    description: "Expert advice on embroidery techniques, design optimization, and project planning.",
    imageSrc: "/images/services/consultation.jpg"
  }
];

export default function Services() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <AnimatedText className="text-4xl font-bold text-center text-navy mb-8">
          Our Services
        </AnimatedText>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          At Value Arc, we offer a comprehensive range of embroidery and design services to bring your vision to life. Explore our offerings below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </main>
  );
}
