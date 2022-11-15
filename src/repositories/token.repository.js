import connection from "../database/databas.js";

async function queryToken(token) {
    return (await connection.query(`
    "SELECT * FROM sessions WHERE token = $1"
    `, [token])).rows[0]
}

export {queryToken}