import { productSchema } from "../schemas/products.schema.js"
import statusCode from "../enums/statusCode.enum.js"

async function validateCreateProduct(req, res, next) {

    const {error} = productSchema.validate(req.body)
    console.log(req.body)
    if (error) {
        const errors = error.details.map(value => value.message)
        console.log(errors)
        return res.status(statusCode.UNPROCESSABLE).send(errors)
    }

    try {


        //verificar se existe algum produto com aquele nome
        //verificar se existe a categoria indicada
        next()
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

export {validateCreateProduct}