import QuantityInput from "./QuantityInput";

function CartItem({ product, removeFromCart, updateCartQuantity }) {

    return (
      <li key={product.id} className="cart-item">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Total: ${ (product.price * product.quantity).toFixed(2) }</p>
        <button onClick={() => removeFromCart(product.id)}>Remove</button>
        <QuantityInput 
            quantity={product.quantity} 
            setQuantity={(newQuantity) => updateCartQuantity(product.id, newQuantity)}
        />
      </li>
    );
  }
  
  export default CartItem;