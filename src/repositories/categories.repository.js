import connection from "../database/database.js"

function insertCategory({categoryFormated}) {
    return connection.query(`
        INSERT INTO categories (name)
        VALUES ($1)
    `, [categoryFormated])
}

async function queryCategory({categoryFormated}) {
    return (await connection.query(`
        SELECT * FROM categories
        WHERE name = $1
    `, [categoryFormated])).rows[0]
}

export {insertCategory, queryCategory}