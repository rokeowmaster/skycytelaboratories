"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";
import { Banner } from "@/components";
import { useCart } from "@/context/cartContext";
import { getProduct } from "@/sanityclient/query";
import { urlFor } from "@/sanityclient/client";
import client from "@/sanityclient/client"; // Ensure the correct client is imported

const categories = ["All", "Protection", "Hygiene", "Equipment", "Apparel"];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProduct(client);
        setProducts(data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <Banner />
      <Nav />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8">
          {/* Filtering Section */}
          <div className="flex flex-wrap justify-center gap-3 mt-0">
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
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
              {filteredProducts.map(({ _id, name, price, stock, image }) => (
                <div key={_id} className="group">
                  <Link href={`/products/${_id}`}>
                    <Image
                      src={urlFor(image).url()}
                      alt={name}
                      width={300}
                      height={300}
                      className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 transition"
                    />
                  </Link>
                  <h3 className="mt-4 text-sm text-blue-700">{name}</h3>
                  <h3 className="mt-4 text-sm text-blue-700">In Stock: {stock}</h3>
                  {/* <p className="mt-1 text-lg font-medium text-gray-900">@ $ {price.toFixed(2)}</p> */}

                  {/* <button
                    disabled={stock === 0}
                    onClick={() => addToCart({ _id, name, price, stock, image })}
                    className={`mt-2 w-full py-2 rounded-md transition ${
                      stock > 0 ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-gray-400 text-gray-700 cursor-not-allowed"
                    }`}
                  >
                    {stock > 0 ? "Add to Cart" : "Out of Stock"}
                  </button> */}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg mt-8">No available products</p>
          )}
        </div>
      </section>
    </>
  );
}
