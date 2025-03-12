import { Outlet } from "react-router-dom";
import Header from "./Header";
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
        return cart.reduce((total, product) => total + product.price, 0);
    }

    return (
        <>
            <Header />
            <Outlet context={{ cart, setCart, addToCart, removeFromCart, calculateCartTotal}} />
        </>
    );
}

export default Layout;