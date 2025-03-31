"use client";

import { createContext, useContext, useState } from "react";
import { addToCart as addToCartAction, removeFromCart as removeFromCartAction } from "@/lib/actions";
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = async (product) => {
        const updatedCart = await addToCartAction(product);
        setCart(updatedCart);
    };

    const removeFromCart = async (product) => {
        const updatedCart = await removeFromCartAction(product);
        setCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};
