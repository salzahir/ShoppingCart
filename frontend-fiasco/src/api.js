async function  fetchProducts() {
    try {
        const response =  await fetch('https://fakestoreapi.com/products')
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

function parseProducts(products) {
    return products.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
        quantity: 1
    }))
}

export default parseProducts
export {fetchProducts}