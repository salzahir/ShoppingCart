import fetchProducts from "../utils/api";
import {useEffect, useState} from "react";
import ProductItem from "../components/ProductItem";
import {useContext} from "react";
import {ShopContext} from "../context/ShopContext";
import LoadingIndicator from "../components/LoadingIndicator";

function Products() {

    const [products, setProducts] = useState([])
    const {addToCart, calculateCartTotal} = useContext(ShopContext);
    const [loading, setLoading] = useState(true);

    async function loadProducts() {
        try {
            const products = await fetchProducts();
            setProducts(products);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    if (loading) {
        return <LoadingIndicator />;
    }

    return (
        <div className="market">
            <h4>Products</h4>
            <p>Click on the products to add them to the cart</p>
            <p>Total: $ {calculateCartTotal()}</p>
            <ul className="products">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} addToCart={addToCart}/>
                ))}
            </ul>
        </div>
    );
}

export default Products;