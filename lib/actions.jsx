"use server";

let cart = [];

export async function addToCart(product) {
    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.id === product.id);

    if (!existingProduct) {
        cart.push(product);
    }

    return cart;
}

export async function getCart() {
    return cart;
}

export async function removeFromCart(productId) {
    // Filter out the product with the given ID
    cart = cart.filter(item => item.id !== productId);
    // console.log(cart);
    return cart;
}
