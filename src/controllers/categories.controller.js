import { insertCategory } from "../repositories/categories.repository.js"
import statusCode from "../enums/statusCode.enum.js"

async function createCategory(req, res) {

    const {category} = req.body
    const categoryFormated = category.toLowerCase()

    try {
        await insertCategory({categoryFormated})
        res.status(statusCode.CREATED).send({message: "Ok!"})
        
    } catch (error) {
        console.error(error)
        res.sendStatus(statusCode.SERVER_ERROR)
    }
}

async function listCategories(res, res) {

    try {
        const categories = await queryCategories()
        res.send(categories)
        
    } catch (error) {
        console.error(error)
        res.sendStatus(statusCode.SERVER_ERROR)
    }
}

export {createCategory, listCategories}