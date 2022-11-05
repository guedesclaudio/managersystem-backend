import connection from "../database/database"

function insertCategory({name}) {
    return connection.query(`
        INSERT INTO categories (name)
        VALUES ($1)
    `, [name])
}

async function queryCategory({name}) {
    return (await connection.query(`
        SELECT * FROM categories
        WHERE name = $1
    `, [name])).rows[0]
}

export {insertCategory, queryCategory}