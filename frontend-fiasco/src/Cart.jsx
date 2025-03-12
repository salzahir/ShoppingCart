import ProductItem from "./ProductItem";
import { Link, useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {

    const { cart, removeFromCart, calculateCartTotal } = useOutletContext();

    return (
        <>
        <h2>Cart</h2>
        {cart.length === 0 ? (
            <p>Your cart is empty. Start adding some products!</p>
        ) : (
            <p>Click on the products to remove them from the cart</p>
        )}

        <div className="cart-page">
            <ul className="cart">
            {cart.map(product => (
                <CartItem 
                    key={product.id} 
                    product={product} 
                    removeFromCart={() => removeFromCart(product.id)} 
                    quantity={1}  
                />
                ))}
            </ul>
            
        <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>Items in Cart: {cart.length}</p>
            <p>Subtotal: ${calculateCartTotal()}</p>
            <p>Taxes (10%): ${ (calculateCartTotal() * 0.1).toFixed(2) }</p>
            <p><strong>Grand Total: ${(calculateCartTotal() * 1.1).toFixed(2)}</strong></p>
            <button>Checkout</button>
            <Link to="/products"><button>Continue Shopping</button></Link>
        </div>

        </div>
        </>

    );
}

export default Cart