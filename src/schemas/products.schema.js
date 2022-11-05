import joi from "joi"

const productSchema = joi.object({
    name: joi.string().required().empty().trim(),
    description: joi.string().required().empty().trim(),
    price: joi.number().required().empty(),
    category: joi.number().required().empty()
})

export {productSchema}