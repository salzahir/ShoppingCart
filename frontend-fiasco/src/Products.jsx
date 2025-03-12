import parseProducts from "./api";
import {fetchProducts} from "./api";
import {useEffect, useState} from "react";
import ProductItem from "./ProductItem";

function Products() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    function addToCart(product) {
        setCart([...cart, product])
    }

    async function loadProducts() {
        try {
            const products = await fetchProducts();
            setProducts(parseProducts(products));
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);


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
                    <ProductItem key={product.id} product={product} addToCart={addToCart} />
                ))}
            </ul>
        </div>
    );
}

export default Products;