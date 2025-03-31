"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";
import { Banner } from "@/components";
import { useCart } from "@/context/cartContext";

const products = [
  { id: 1, name: "Surgical Mask", price: 10, stock: 50, category: "Protection", image: "/mask.jpg" },
  { id: 2, name: "Hand Sanitizer", price: 15, stock: 30, category: "Hygiene", image: "/sanitizers.jpg" },
  { id: 3, name: "Gloves Pack", price: 12, stock: 20, category: "Protection", image: "/gloves.jpg" },
  { id: 4, name: "Thermometer", price: 25, stock: 15, category: "Equipment", image: "/thermometer.jfif" },
  { id: 5, name: "Medical Gown", price: 40, stock: 10, category: "Apparel", image: "/gown.png" },
  { id: 6, name: "Face Shield", price: 18, stock: 25, category: "Protection", image: "/faceshield.jfif" },
];

const categories = ["All", "Protection", "Hygiene", "Equipment", "Apparel"];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <Banner />
      <Nav />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-24 lg:px-8">

          {/* Filtering Section */}
          <div className="flex flex-wrap justify-center gap-4 mt-0">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
    selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {filteredProducts.map(({ id, name, price, stock, image }) => (
              <div key={id} className="group">
                <Link href={`/products/${id}`}>
                  <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={300}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 transition"
                  />
                </Link>
                <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">Kshs. {price.toFixed(2)}</p>

                <button
                  disabled={stock === 0}
                  onClick={() => addToCart({ id, name, price, stock, image })}
                  className={`mt-2 w-full py-2 rounded-md transition ${
                    stock > 0
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  }`}
                >
                  {stock > 0 ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}