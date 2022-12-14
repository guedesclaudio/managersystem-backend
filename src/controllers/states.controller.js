import statusCode from "../enums/statusCode.enum.js";
import statesService from "../services/sates.service.js";

async function getStates(req, res) {

    try {
        const states = await statesService.readStates();
        return res.status(statusCode.OK).send(states);
    } catch (error) {
        console.log(error);
        return res.sendStatus(statusCode.SERVER_ERROR);
    }
}

export { getStates };