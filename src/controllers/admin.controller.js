import adminService from "../services/admin.service";
import statusCode from "../enums/statusCode.enum";

async function createSession(req, res) {

    const {id, username} = res.locals.user;

    try {
        const token = await adminService.sessionAdmin(id);
        return res.status(200).send({username, token});
        
    } catch (error) {
        console.error(error);
        return res.sendStatus(statusCode.SERVER_ERROR);
    }
}

export {createSession};