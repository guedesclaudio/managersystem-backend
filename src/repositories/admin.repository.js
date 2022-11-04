import connection from "../database/database.js"

async function getUser({username, password}) {
    return (await connection.query(`
        SELECT * FROM admin
        WHERE username = $1 AND password = $2
    `, [username, password])).rows[0]
}

export {getUser}