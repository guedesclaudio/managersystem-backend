import joi from "joi";

const customerDataSchema = joi.object({
    name: joi.string().required().empty().trim(),
    email: joi.string().required().empty().trim(),
    cpf: joi.number().required(),
    birthday: joi.date().required(),
    phone: joi.number().required(),
    complement: joi.string().optional(), 
    streetName: joi.string().required().empty().trim(),
    houseNumber: joi.number().required(),
    districtName: joi.string().required().empty().trim(),
    cityName: joi.string().required().empty().trim(), 
    cep: joi.number().required(),
    stateId: joi.number().required()
});

export { customerDataSchema };