function QuantityInput({ quantity, setQuantity, id = "quantity" }) {
    
    return (
        <>
            <div className="quantity-input">
            <label htmlFor={id}>Select Quantity:</label>
                <input 
                    type="number" 
                    id={id} 
                    min="1" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Number(e.target.value))}
                />
            </div>
        </>
    );
}

export default QuantityInput;