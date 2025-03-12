function ProductItem({ product, addToCart }) {

    // const [quantity, setQuantity] = useState(1);
    
    return ( 
        <li key={product.id} className="product">
            <p>Id: {product.id}</p>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>Price: $ {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>

            {/* <label htmlFor="quantity">Select Quantity:</label>
            <input 
                type="number" 
                id="quantity" 
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))}
            /> */}

        </li>
    );
}

export default ProductItem;