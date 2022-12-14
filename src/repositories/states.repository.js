import connection from "../database/database.js";

async function findStates() {
    return (await connection.query(`
        SELECT * FROM states;
    `)).rows;
}

const statesRepository = {
    findStates
};

export default statesRepository;