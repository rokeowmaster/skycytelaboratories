import React from 'react'
import { Card, CardContent } from './ui/Card'
import Image from 'next/image';

// Product Showcase Data
const products = [
    { id: 1, name: "Medical Gloves", desc: "High-quality, latex-free gloves for medical use.", image: "/product1.jpg" },
    { id: 2, name: "Face Masks", desc: "Breathable and protective surgical face masks.", image: "/product2.jpg" },
    { id: 3, name: "Sanitizers", desc: "Fast-acting hand sanitizers for effective hygiene.", image: "/product3.jpg" },
  ]; 

const ProductShowcase = () => {
  return (
    <div className='bg-gray-100 backdrop-blur-lg bg-opacity-50'>
        {/* Product Showcase - Centered */}
      <section className="w-full max-w-5xl py-16 mx-auto justify-center">
        <h2 className="text-3xl text-center mb-2 font-bold text-blue-600">Featured Products</h2>
        <div className='flex'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {products.map(({ id, name, desc, image }) => (
            <Card key={id} className="p-6 transform hover:scale-105 transition">
              <CardContent className="text-center">
                <Image src={image} alt={name} width={300} height={160} className="w-full h-40 object-cover mb-3" />
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </section>
    </div>
  )
}

export default ProductShowcase