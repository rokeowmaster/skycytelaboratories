"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LeaderCard = ({ src, alt, name, role, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mt-8 w-80 text-center">
    <Image 
      src={src} 
      alt={alt} 
      width={150} 
      height={150} 
      className="rounded-full mx-auto"
    />
    <h3 className="text-xl font-bold text-gray-900 mt-4">{name}</h3>
    <p className="text-gray-600">{role}</p>
    {description && <p className="mt-2 text-gray-700">{description}</p>}
  </div>
);

const values = [
  { title: "Quality", text: "We only source the best medical products to ensure safety and reliability." },
  { title: "Innovation", text: "We continuously improve our offerings to meet the evolving needs of healthcare." },
  { title: "Customer Focus", text: "Our customers are at the heart of everything we do." }
];

const leadership = [
  {
    src: "/ceo.png",
    alt: "CEO",
    name: "Dr Pinto Okatch",
    role: "Managing Director and Founder",
    description: "Bsc, mls, Dmls, Cmls, Msc in Medical Microbiology, Masinde Muliro University"
  },
  {
    src: "/cto.jpg",
    alt: "CTO",
    name: "Mrs Nelvin Khisa",
    role: "Chief Executive Officer",
    description: "Senior Nursing officer, Agha Khan University Hospital"
  },
  {
    src: "/cfo.jpg",
    alt: "CFO",
    name: "Dr Moses Okoth",
    role: "Director of Finance"
  },
  {
    src: "/coo.jpg",
    alt: "COO",
    name: "Mrs Joyce Kamede",
    role: "Sales Manager"
  }
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen text-white bg-gray-900">
        <Image 
          src="/about-bg.jpg" 
          alt="About Us Background" 
          layout="fill" 
          objectFit="cover" 
          priority 
          className="absolute inset-0"
        />
        <div className={`relative text-center z-10 transition-opacity duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="text-lg mt-2 opacity-90">Providing Quality Medical Supplies for a Healthier Tomorrow</p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-600">Leadership</h2>

        {/* CEO */}
        <div className="mt-8 flex justify-center">
          <LeaderCard {...leadership[0]} />
        </div>

        {/* Other Leaders inline */}
        <div className="flex justify-center space-x-8 mt-8 flex-wrap">
          {leadership.slice(1).map((leader) => (
            <LeaderCard key={leader.name} {...leader} />
          ))}
        </div>
      </section>

      {/* Our Mission */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-600">Our Mission</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          We are committed to providing top-quality medical supplies to healthcare professionals and individuals, ensuring safety, reliability, and affordability.
        </p>
      </section>

      {/* Company Values */}
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`p-6 shadow-lg rounded-lg bg-gray-100 transform transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold text-blue-600">{value.title}</h3>
              <p className="text-gray-600 mt-2">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-semibold text-gray-800">Ready to Partner with Us?</h2>
        <p className="mt-2 text-gray-600">
          Discover how we can supply your medical needs with top-quality products.
        </p>
        <Link href="/contacts" passHref>
          <button className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-500 transition">
            Contact Us
          </button>
        </Link>
      </section>

    </div>
  );
}
