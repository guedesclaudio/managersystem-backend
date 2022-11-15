import statusCode from "../enums/statusCode.enum.js"
import { deleteProduct, getFilterProducts, insertProduct } from "../repositories/products.repository.js"
import { getProducts } from "../repositories/products.repository.js"

async function createProduct(req, res) {

    const {product, description, price, category} = req.body
    const productFormated = product.toLowerCase()
    const priceFormated = Number(price).toFixed(2) * 100

    try {
        await insertProduct({productFormated, description, priceFormated, category})
        res.sendStatus(statusCode.CREATED)
        
    } catch (error) {
        console.error(error)
        res.sendStatus(statusCode.SERVER_ERROR)
    }
}

async function listProducts(req, res) {

    const {filter} = req.query
    let products = []

    try {
        if (filter === "all") {
            products = await getProducts()
        } else {
            products = await getFilterProducts({categoryId: filter})
        }
    
        products.forEach(value => {
            value.price = (Number(value.price) / 100).toFixed(2)
        })

        //TODO - filtrar produtos por nome
        res.send(products)
    } catch (error) {
        console.error(error)
        res.sendStatus(statusCode.SERVER_ERROR)
    }
}

async function removeProduct(req, res) {

    const {id} = req.params
    
    try {
        await deleteProduct(id)
        res.sendStatus(statusCode.NOT_CONTENT)
    } catch (error) {
        console.error(error)
        res.sendStatus(statusCode.SERVER_ERROR)
    }
}

export {createProduct, listProducts, removeProduct}