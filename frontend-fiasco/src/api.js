async function  fetchProducts() {
    try {
        const response =  await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        // const updatedData = data.map(product => ({ ...product, quantity: 1 })); // Adding quantity field
        // return updatedData
        return data
    }
     catch (error) {
        console.log(error)
    }
    finally {
        console.log("Fetching products completed.")
    }
}

export default fetchProducts