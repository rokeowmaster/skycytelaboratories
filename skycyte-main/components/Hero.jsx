import Link from 'next/link';
import React from 'react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <header
      className="w-full text-white text-center py-12 md:py-20 min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center items-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 animate-slide-in">
        Trusted Medical Supplies
      </h1>
      <p className="text-sm sm:text-base md:text-lg opacity-90 animate-fade-in max-w-md mx-auto">
        Reliable, high-quality medical products for professionals and individuals.
      </p>
      <Link href="/products">
        <Button className="mt-5 bg-white text-blue-600 px-5 py-2.5 rounded-full hover:bg-blue-500 hover:text-white transition">
          Shop Now
        </Button>
      </Link>
    </header>
  );
};

export default Hero;
