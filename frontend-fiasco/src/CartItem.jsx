function CartItem({ product, removeFromCart, quantity }) {
    return (
      <li key={product.id} className="cart-item">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total: ${product.price * quantity}</p>
        <button onClick={() => removeFromCart(product.id)}>Remove</button>
      </li>
    );
  }
  
  export default CartItem;