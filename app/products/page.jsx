"use client";

// import { useCart } from "@/context/cartContext";
import Nav from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";
import { Banner } from "@/components";

// Product List (Moved Outside the Component)
const products = [
  { id: 1, name: "Surgical Mask", price: 10, stock: 50, image: "/mask.jpg" },
  { id: 2, name: "Hand Sanitizer", price: 15, stock: 30, image: "/sanitizers.jpg" },
  { id: 3, name: "Gloves Pack", price: 12, stock: 20, image: "/gloves.jpg" },
  { id: 4, name: "Thermometer", price: 25, stock: 15, image: "/thermometer.jfif" },
  { id: 5, name: "Medical Gown", price: 40, stock: 10, image: "/gown.png" },
  { id: 6, name: "Face Shield", price: 18, stock: 25, image: "/faceshield.jfif" },
];

export default function Products() {
//   const { addToCart } = useCart();

  return (
      <>
      <Banner />
      <Nav />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(({ id, name, price, stock, image }) => (
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
                //   onClick={() => addToCart({ id, name, price, stock, image })}
                  disabled={stock === 0}
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
