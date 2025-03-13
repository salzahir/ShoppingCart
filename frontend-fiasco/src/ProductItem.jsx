import QuantityInput from "./QuantityInput";

function ProductItem({ product, addToCart, quantity, setQuantity }) {

    return ( 
        <li key={product.id} className="product">
            <p>Id: {product.id}</p>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>Price: $ {product.price}</p>
            <button onClick={() => addToCart({...product, quantity})}>Add to cart</button>
            <QuantityInput quantity={quantity} setQuantity={setQuantity} />

        </li>
    );
}

export default ProductItem;