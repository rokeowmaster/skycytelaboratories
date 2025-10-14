'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock API call (replace with actual API fetch)
    const fetchBestSellers = async () => {
      const mockData = [
        { id: 1, name: 'N95 Face Mask', price: '12.99', image: '/mask.jpg' },
        { id: 2, name: 'Digital Thermometer', price: '25.99', image: '/thermometer.webp' },
        { id: 3, name: 'Medical Gloves', price: '8.99', image: '/gloves.jpg' },
        { id: 4, name: 'Hand Sanitizer 500ml', price: '5.99', image: '/sanitizers.jpg' },
        { id: 5, name: 'Blood Pressure Monitor', price: '45.99', image: '/bp-monitor.webp' },
        { id: 6, name: 'Pulse Oximeter', price: '18.99', image: '/oximeter.jpg' },
        { id: 7, name: 'Surgical Gown', price: '14.99', image: '/gown.png' },
        { id: 8, name: 'First Aid Kit', price: '29.99', image: '/first-aid-kit.webp' },
      ];
      setProducts(mockData);
    };
    
    fetchBestSellers();
  }, []);

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Best Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href="/products" key={product.id} className="block p-4 border rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="relative w-full h-48">
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
            {/* <p className="text-blue-600 font-bold">$ {product.price}</p> */}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
