import parseProducts from "./api";
import {fetchProducts} from "./api";
import {useEffect, useState} from "react";
import ProductItem from "./ProductItem";
import { useOutletContext } from "react-router-dom";

function Products() {

    const [products, setProducts] = useState([])
    const { addToCart, calculateCartTotal } = useOutletContext();

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

    return (
        <div className="market">
            <h4>Products</h4>
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