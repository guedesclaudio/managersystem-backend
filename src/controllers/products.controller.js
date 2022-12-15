import statusCode from "../enums/statusCode.enum.js"
import productsService from "../services/products.service.js";

async function createProduct(req, res) {

    const productData = req.body;

    try {
        await productsService.createNewProduct(productData);
        return res.sendStatus(statusCode.CREATED);
        
    } catch (error) {
        console.error(error);
        return res.sendStatus(statusCode.SERVER_ERROR);
    }
}

async function listProducts(req, res) {

    const {filter} = req.query;

    try {
        const products = await productsService.readProducts(filter);
        //TODO - filtrar produtos por nome
        return res.status(statusCode.OK).send(products);
    } catch (error) {
        console.error(error);
        return res.sendStatus(statusCode.SERVER_ERROR);
    }
}

async function removeProduct(req, res) {

    const { id } = req.params;
    
    try {
        await productsService.excludeProduct(id);
        return res.sendStatus(statusCode.NOT_CONTENT);
    } catch (error) {
        console.error(error);
        return res.sendStatus(statusCode.SERVER_ERROR);
    }
}

export { createProduct, listProducts, removeProduct };