import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

function Layout() {

    const [cart, setCart] = useState([])

    function addToCart(product) {
        setCart([...cart, product])
    }
    
    function removeFromCart(productID) {
        setCart(cart.filter(item => item.id !== productID))
    }

    function calculateCartTotal() {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    }

    function calculateItemsInCart() {
        return cart.reduce((total, product) => total + product.quantity,
        0);
    }

    return (
        <>
            <Header />
            <Outlet context={{ cart, setCart, addToCart, removeFromCart, calculateCartTotal, calculateItemsInCart}} />
        </>
    );
}

export default Layout;