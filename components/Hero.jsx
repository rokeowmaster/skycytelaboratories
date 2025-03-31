import Link from 'next/link'
import React from 'react'
import Button from './ui/Button'

const Hero = () => {
  return (
    <div>
        {/* Hero Section */}
      <header
        className="w-full text-white text-center py-20 min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <h1 className="text-5xl font-bold mb-4 animate-slide-in">Trusted Medical Supplies</h1>
        <p className="text-lg opacity-90 animate-fade-in">
          Reliable, high-quality medical products for professionals and individuals.
        </p>
        <Link href="/products">
          <Button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition">
            Shop Now
          </Button>
        </Link>
      </header>
    </div>
  )
}

export default Hero