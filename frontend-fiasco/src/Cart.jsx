import ProductItem from "./ProductItem";
import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";


function Cart() {

    const { cart, removeFromCart, calculateCartTotal } = useOutletContext();

    return (
        <>
                    <h2>Cart</h2>
        <div className="cart-page">
            <ul className="cart">
            {cart.map(product => (
                <CartItem 
                    key={product.id} 
                    product={product} 
                    removeFromCart={removeFromCart} 
                    quantity={1}  // Assuming you have quantity in the product object
                />
                ))}
            </ul>
            
            <div>
                <h3>Cart Summary</h3>
                <p>Items in Cart: {cart.length}</p>
                <p>Total: $ {calculateCartTotal()}</p>
                <button>Checkout</button>
            </div>

        </div>
        </>

    );
}

export default Cart