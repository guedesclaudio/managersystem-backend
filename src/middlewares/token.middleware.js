import statusCode from "../enums/statusCode.enum.js";
import { queryToken } from "../repositories/token.repository.js";

async function validateToken(req, res, next) {
    
    const {authorization} = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) {
        return res.sendStatus(statusCode.UNAUTHORIZED);
    }

    try {
        const session = await queryToken(token);
    
        if (!session) {
            return res.sendStatus(statusCode.UNAUTHORIZED);
        }
        res.locals.userId = session.userId;
        next();
    } catch (error) {
        console.error(error);
        res.sendStatus(statusCode.SERVER_ERROR);
    }
}


export {validateToken} ;