const CartMessage = ({cart}) => {
    return cart.length === 0 ? (
        <p>
            Your cart is currently empty. Start adding products to bring it to life!  
            Browse our selection of clothing, electronics, household essentials, and more.  
            Check out today's deals or visit your Wish List to get started.
        </p>
    ) : (
        <p>Tap on a product to remove it from your cart.</p>
    );
};

export default CartMessage;