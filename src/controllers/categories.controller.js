import { insertCategory } from "../repositories/categories.repository.js"

async function createCategory(req, res) {

    const {name} = req.body

    try {
        await insertCategory({name})
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

export {createCategory}