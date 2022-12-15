import joi from "joi";

const productSchema = joi.object({
    product: joi.string().required().empty().trim(),
    description: joi.string(),
    price: joi.number().required().empty(),
    category: joi.number().required().empty()
});

export { productSchema };