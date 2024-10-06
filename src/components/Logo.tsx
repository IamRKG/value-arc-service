'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  color: 'white' | 'navy';
}

const Logo: React.FC<LogoProps> = ({ color }) => {
  return (
    <Link href="/" className="flex flex-col items-center">
     <Image
  src="/images/logo.webp"
  alt="Embroidery Digitizing Pro Logo"
  width={60}
  height={60}
  style={{ width: 'auto', height: 'auto' }}
  className="mb-1"
/>

      <span className={`text-xl font-bold ${color === 'white' ? 'text-white' : 'text-navy'}`}>
        Value Arc
      </span>
    </Link>
  );
};

export default Logo;
