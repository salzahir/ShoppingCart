import { useState } from "react";
import { ShopContext } from "./ShopContext.js";

export function ShopProvider({children}) {

    const [cart, setCart] = useState([])

    function addToCart(product) {
        setCart([...cart, product])
    }

    function removeFromCart(productID) {
        setCart(cart.filter(item => item.id !== productID))
    }

    function calculateCartTotal() {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    }

    function calculateItemsInCart() {
        return cart.reduce((total, product) => total + product.quantity,
        0);
    }

    return (
        <ShopContext.Provider value={{cart, setCart, addToCart, removeFromCart, calculateCartTotal, calculateItemsInCart}}>
            {children}
        </ShopContext.Provider>
    );
}


