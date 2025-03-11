import parseProducts from "./api";
import {fetchProducts} from "./api";
import {useEffect, useState} from "react";


function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts().then(products => {
            setProducts(parseProducts(products))
        })
    }, [])

    return (
        <div className="market">
            <h1>Products</h1>
            <p>Click on the products to add them to the cart</p>
            <ul className="products">
                {products.map(product => (
                    <li key={product.id} className="product">
                        <p>Id: {product.id}</p>
                        <h2>{product.title}</h2>
                        <img src={product.image} alt={product.title} />
                        <p>Category: {product.category}</p>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                        <button>Add to cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );


}

export default Products;