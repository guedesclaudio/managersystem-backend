import joi from "joi"

const adminSchema = joi.object({
    username: joi.string().required().empty().trim(),
    password: joi.string().alphanum().required().empty()
})

export {adminSchema}