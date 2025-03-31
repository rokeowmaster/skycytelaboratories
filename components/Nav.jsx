"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { Menu, ShoppingCart } from "lucide-react";
// import { useCart } from "@/context/cartContext";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
//   const { cart } = useCart();

  // Memoize cart item count to prevent unnecessary recalculations
//   const cartItemCount = useMemo(
//     () => cart.reduce((total, item) => total + item.quantity, 0),
//     [cart]
//   );

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full h-16 flex items-center justify-between px-6 text-black backdrop-blur-md z-10">
        {/* Logo */}
        <Link href="/">
          <img src="/logo.png" alt="Company Logo" className="h-12 w-auto md:h-16 cursor-pointer" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-black text-lg">
          <Link href="/" className="hover:text-blue-500 transition">Home</Link>
          <Link href="/products" className="hover:text-blue-500 transition">Products</Link>
          <Link href="/about" className="hover:text-blue-500 transition">About</Link>
          <Link href="/contacts" className="hover:text-blue-500 transition">Contact</Link>
        </div>

        {/* Mobile Menu & Cart Container */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <Link href="/cart" className="relative text-black">
            <ShoppingCart className="h-6 w-6 hover:text-blue-500 transition" />
            {/* {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )} */}
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="absolute top-16 right-4 mt-2 bg-white shadow-lg p-4 rounded-lg md:hidden w-48">
          <Link href="/" className="block py-2 px-4 text-black hover:bg-gray-100">Home</Link>
          <Link href="/products" className="block py-2 px-4 text-black hover:bg-gray-100">Products</Link>
          <Link href="/about" className="block py-2 px-4 text-black hover:bg-gray-100">About</Link>
          <Link href="/contacts" className="block py-2 px-4 text-black hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </>
  );
};

export default Nav;
