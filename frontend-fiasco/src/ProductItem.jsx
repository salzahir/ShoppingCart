function ProductItem({ product, addToCart }) {
    return ( 
        <li key={product.id} className="product">
            <p>Id: {product.id}</p>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>Price: $ {product.price}</p>
            {addToCart && ( 
                <button onClick={() => addToCart(product)}>Add to cart</button>
            )}        
        </li>
    );
}

export default ProductItem;