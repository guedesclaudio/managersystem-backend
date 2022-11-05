import { getUser } from "../repositories/admin.repository.js"
import { adminSchema } from "../schemas/admin.schema.js"


async function validateSignin(req, res, next) {

    const {username, password} = req.body
    const {error} = adminSchema.validate({username, password})

    if (error) {
        return res.sendStatus(400)
    }

    try {
        const user = await getUser({username, password})

        if (!user) {
            return res.sendStatus(401)
        }
        res.locals.user = user
        next()

    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

export {validateSignin}