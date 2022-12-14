import statesRepository from "../repositories/states.repository.js";

async function readStates() {
    return statesRepository.findStates();
}

const statesService = {
    readStates
};

export default statesService;