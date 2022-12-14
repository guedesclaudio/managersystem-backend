import statusCode from "../enums/statusCode.enum.js";
import adminRepository from "../repositories/admin.repository.js";
import { adminSchema } from "../schemas/admin.schema.js";
import bcrypt from "bcrypt"


async function validateSignin(req, res, next) {

    const {username, password} = req.body;
    const {error} = adminSchema.validate({username, password});


    if (error) {
        return res.sendStatus(statusCode.BAD_REQUEST);
    }

    try {
        const user = await adminRepository.getUser({username, password});

        if (!user ) {
            return res.sendStatus(statusCode.UNAUTHORIZED)
        }
        
        res.locals.user = user;
        next();

    } catch (error) {
        console.error(error);
        return res.sendStatus(statusCode.SERVER_ERROR);
    };
}

export {validateSignin};