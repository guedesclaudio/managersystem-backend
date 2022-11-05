import { insertSession } from "../repositories/admin.repository.js"
import {v4 as uuid} from "uuid"

async function createSession(req, res) {

    const token = uuid()
    const {id, username} = res.locals.user

    try {
        await insertSession({id, token})
        res.status(200).send({username, token})
        
        
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

export {createSession}