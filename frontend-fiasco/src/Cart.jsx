import ProductItem from "./ProductItem";


function Cart({ cart }) {

    return (
        <div>
            <h2>Cart</h2>
            {/* <ul className="cart-products">
                {cart.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul> */}
            <p>Items in Cart: 0</p>
            <button>Checkout</button>
        </div>
    );
}

export default Cart