import { insertProduct } from "../repositories/products.repository.js"
import { getProducts } from "../repositories/products.repository.js"

async function createProduct(req, res) {

    const {name, description, price, category} = req.body

    try {
        await insertProduct({name, description, price, category})
        res.sendStatus(201)
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

async function listProducts(req, res) {

    try {
        const products = await getProducts()
        //filtrar produtos por nome
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

export {createProduct, listProducts}