import statusCode from "../enums/statusCode.enum.js";
import categoriesService from "../services/categories.service.js";

async function createCategory(req, res) {
    const {category} = req.body;

    try {
        await categoriesService.createNewCategory(category);
        return res.status(statusCode.CREATED).send({message: "Ok!"});
        
    } catch (error) {
        console.error(error);
        return res.sendStatus(statusCode.SERVER_ERROR);
    }
}

async function listCategories(req, res) {
    try {
        const categories = await categoriesService.getCategories();
        return res.send(categories);
        
    } catch (error) {
        console.error(error);
        return res.sendStatus(statusCode.SERVER_ERROR);
    }
}

async function removeCategory(req, res) {
    const {id} = req.params
    
    try {
        await categoriesService.excludeCategory(id);
        return res.sendStatus(statusCode.NOT_CONTENT)
    } catch (error) {
        console.error(error)
        return res.sendStatus(statusCode.SERVER_ERROR)
    }
}

export {createCategory, listCategories, removeCategory}