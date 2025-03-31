"use client";

import { useCart } from "@/context/cartContext";
import { useState, useEffect } from "react";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Ensure each item has a valid quantity
    setCartItems(cart.map(item => ({ ...item, quantity: item.quantity ?? 1 })));
  }, [cart]);

  const updateQuantity = (id, change) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity ?? 1) + change) }
          : item
      )
    );
  };

  const handleRemove = id => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    removeFromCart(id);
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + (Number(item.price) || 0) * item.quantity, 0);
  };

  const placeOrder = () => {
    const phoneNumber = "254703628177"; // Corrected format (without `+`)
    const orderMessage = cartItems
      .map(item => `- ${item.name} (Qty: ${item.quantity}) - Kshs. ${(Number(item.price) * item.quantity).toFixed(2)}`)
      .join("\n");

    const totalPrice = getTotal().toFixed(2);
    const message = `Hello! I'd like to place an order: Payment on Delivery\n\n${orderMessage}\n\nTotal: Kshs. ${totalPrice}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="m-4 p-6 container mx-auto bg-gray-900 shadow-lg rounded-lg border border-gray-700 text-gray-300">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-100">
        Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-400 text-center">Your cart is empty.</p>
      ) : (
        <div className="divide-y divide-gray-700">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between py-4">
              <div>
                <h3 className="text-lg font-medium text-gray-200">{item.name}</h3>
                <p className="text-gray-400">Kshs. {(Number(item.price) || 0).toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md hover:bg-gray-600 transition"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span className="w-8 text-center font-medium text-lg text-gray-100">
                  {item.quantity}
                </span>
                <button
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md hover:bg-gray-600 transition"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 font-semibold text-xl border-t border-gray-700 pt-4">
          <div className="flex justify-between">
            <span className="text-gray-100">Total:</span>
            <span className="text-gray-100">Kshs. {getTotal().toFixed(2)}</span>
          </div>
          <button
            className="mt-4 w-full bg-green-600 text-white text-lg font-bold py-3 rounded-md hover:bg-green-700 transition"
            onClick={placeOrder}
          >
            Place Order on WhatsApp
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

