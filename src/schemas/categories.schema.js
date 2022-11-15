import joi from "joi"

const categorySchema = joi.object({
    category: joi.string().required().empty().trim(),
})

export {categorySchema}