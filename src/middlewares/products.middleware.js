import { productSchema } from "../schemas/products.schema.js"

async function validateCreateProduct(req, res, next) {

    const {error} = productSchema.validate(req.body)

    if (error) {
        return res.sendStatus(400)
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