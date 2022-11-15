import connection from "../database/database.js"

function insertProduct({name, description, price, category}) {
    return connection.query(`
        INSERT INTO products (name, description, price, category)
        VALUES ($1, $2, $3, $4)
    `, [name, description, price, category])
}

async function getProducts() {
    return connection.query(`
        SELECT * FROM products
    `)
}

export {insertProduct, getProducts}