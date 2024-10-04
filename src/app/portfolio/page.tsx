import PortfolioItem from '@/components/PortfolioItem';

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

export default function Portfolio() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-navy mb-12">Our Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
}
