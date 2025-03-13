import QuantityInput from "./QuantityInput";
import { useState } from "react";

function CartItem({ product, removeFromCart}) {

    const [quantity, setQuantity] = useState(product.quantity);

    return (
      <li key={product.id} className="cart-item">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: ${ (product.price * quantity).toFixed(2) }</p>
        <button onClick={() => removeFromCart(product.id)}>Remove</button>
        <QuantityInput quantity={quantity} setQuantity={setQuantity} />
      </li>
    );
  }
  
  export default CartItem;