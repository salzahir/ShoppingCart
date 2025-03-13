import ProductItem from "./ProductItem";
import { Link, useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";
import CartMessage from "./cartMessage";

function Cart() {

    const { cart, removeFromCart, calculateCartTotal, quantity, setQuantity} = useOutletContext();

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
                    quantity={quantity}
                    setQuantity={setQuantity}  
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