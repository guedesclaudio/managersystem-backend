import { productSchema } from "../schemas/products.schema.js"
import statusCode from "../enums/statusCode.enum.js"
import { queryProduct } from "../repositories/products.repository.js"

async function validateCreateProduct(req, res, next) {

    const {product} = req.body
    const {error} = productSchema.validate(req.body)
    
    if (error) {
        const errors = error.details.map(value => value.message)
        console.log(errors)
        return res.status(statusCode.UNPROCESSABLE).send(errors)
    }

    const productFormated = product.toLowerCase()

    try {
        const product = await queryProduct({productFormated})

        if (product) {
            return res.sendStatus(statusCode.CONFLICT)
        }

        //verificar se existe a categoria indicada
        next()
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

export {validateCreateProduct}