async function  fetchProducts() {
    try {
        const response =  await fetch('https://fakestoreapi.com/products')
        const data = response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export default fetchProducts