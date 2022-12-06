import statusCode from "../enums/statusCode.enum.js";
import categoriesRepository from "../repositories/categories.repository.js";
import { categorySchema } from "../schemas/categories.schema.js";

async function validateCreateCategory(req, res, next) {
    
    const {category} = req.body;
    const {error} = categorySchema.validate(req.body);

    if (error) {
        const errors = error.details.map(value => value.message);
        return res.status(statusCode.UNPROCESSABLE).send(errors);
    }

    const categoryFormated = category.toLowerCase();

    try {
        const categoryResult = await categoriesRepository.queryCategory({categoryFormated});

        if (categoryResult) {
            return res.sendStatus(statusCode.CONFLICT);
        }
        next();
        
    } catch (error) {
        console.error(error)
        return res.sendStatus(statusCode.SERVER_ERROR);
    }
}

export {validateCreateCategory};