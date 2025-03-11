import parseProducts from "./api";
import {fetchProducts} from "./api";
import {useEffect, useState} from "react";

function Products() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetchProducts().then(products => {
            setProducts(parseProducts(products))
        })
    }, [])

    function addToCart(product) {
        setCart([...cart, product])
    }

    function calculateCartTotal() {
        return cart.reduce((total, product) => total + product.price, 0);
    }

    return (
        <div className="market">
            <h1>Products</h1>
            <p>Click on the products to add them to the cart</p>
            <p>Total: $ {calculateCartTotal()}</p>
            <ul className="products">
                {products.map(product => (
                    <li key={product.id} className="product">
                        <p>Id: {product.id}</p>
                        <h2>{product.title}</h2>
                        <img src={product.image} alt={product.title} />
                        <p>Category: {product.category}</p>
                        <p>Description: {product.description}</p>
                        <p>Price: $ {product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to cart</button>                    </li>
                ))}
            </ul>
        </div>
    );


}

export default Products;