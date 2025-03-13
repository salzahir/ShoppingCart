import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

function Layout() {

    const [cart, setCart] = useState([])

    const [quantity, setQuantity] = useState(1);

    function addToCart(product) {
        setCart([...cart, product])
    }
    
    function removeFromCart(productID) {
        setCart(cart.filter(item => item.id !== productID))
    }

    function calculateCartTotal() {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    }

    return (
        <>
            <Header />
            <Outlet context={{ cart, setCart, quantity, setQuantity, addToCart, removeFromCart, calculateCartTotal}} />
        </>
    );
}

export default Layout;