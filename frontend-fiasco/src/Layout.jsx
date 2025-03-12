import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

function Layout() {

    const [cart, setCart] = useState([])
    function addToCart(product) {
        setCart([...cart, product])
    }
    function removeFromCart(product) {
        setCart(cart.filter(item => item.id !== product.id))
    }


    function calculateCartTotal() {
        return cart.reduce((total, product) => total + product.price, 0);
    }

    return (
        <>
            <Header />
            <Outlet context={{ cart, addToCart, removeFromCart, calculateCartTotal}} />
        </>
    );
}

export default Layout;