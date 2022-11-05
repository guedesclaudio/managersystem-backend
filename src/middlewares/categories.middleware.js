import { queryCategory } from "../repositories/categories.repository.js"

async function validateCreateCategory(req, res, next) {
    
    const {name} =  req.body

    try {
        const category = queryCategory({name})

        if (category) {
            return res.sendStatus(409)
        }
        next()
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

export {validateCreateCategory}