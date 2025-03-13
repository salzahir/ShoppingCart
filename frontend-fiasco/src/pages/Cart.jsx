import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import CartMessage from "../components/CartMessage";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Cart() {

    const { cart, removeFromCart, calculateCartTotal, calculateItemsInCart, updateCartQuantity } = useContext(ShopContext);

    return (
        <>
        <h2>Cart</h2>
        <CartMessage cart={cart} />
        <div className="cart-page">
            <ul className="cart">
            {cart.map(product => (
                <CartItem 
                    key={product.id} 
                    product={product} 
                    removeFromCart={() => removeFromCart(product.id)} 
                    updateCartQuantity={updateCartQuantity}
                />
                ))}
            </ul>
            
            <div className="cart-summary">
                <h3>Cart Summary</h3>
                <p>Items in Cart: {calculateItemsInCart()}</p>
                <p>Subtotal: ${calculateCartTotal()}</p>
                <p>Taxes (10%): ${ (calculateCartTotal() * 0.1).toFixed(2) }</p>
                <p><strong>Grand Total: ${(calculateCartTotal() * 1.1).toFixed(2)}</strong></p>
                <button>Checkout</button>
                <Link to="/products">
                    <button>Continue Shopping</button>
                </Link>
            </div>

        </div>
        </>

    );
}

export default Cart