import productsRepository from "../repositories/products.repository.js";

function createNewProduct(productData) {
    const { product, description, price, category } = productData;
    const productFormated = product.toLowerCase()
    const priceFormated = Number(price).toFixed(2) * 100

    return productsRepository.insertProduct({productFormated, description, priceFormated, category});
}

async function readProducts(filter) {
    let products = [];

    if (filter === "all") {
        products = await productsRepository.getProducts();
    } else {
        products = await productsRepository.getFilterProducts({categoryId: filter});
    }

    products.forEach(value => {
        value.price = (Number(value.price) / 100).toFixed(2);
    })

    return products;
}

function excludeProduct(productId) {
    return productsRepository.deleteProduct(productId);
}

const productsService = {
    createNewProduct,
    readProducts,
    excludeProduct
};

export default productsService;