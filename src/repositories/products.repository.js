import connection from "../database/database.js"

function insertProduct({product, description, price, category}) {
    return connection.query(`
        INSERT INTO products (name, description, price, category_id)
        VALUES ($1, $2, $3, $4)
    `, [product, description, price, category])
}

async function getProducts() {
    return connection.query(`
        SELECT * FROM products
    `)
}

export {insertProduct, getProducts}