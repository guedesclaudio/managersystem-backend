import connection from "../database/database.js";

async function queryToken(token) {
    return (await connection.query(`
    SELECT * FROM session WHERE token = $1;
    `, [token])).rows[0];
}

export { queryToken };