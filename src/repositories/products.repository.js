import connection from "../database/database.js"

function insertProduct({productFormated, description, priceFormated, category}) {
    return connection.query(`
        INSERT INTO products (name, description, price, category_id)
        VALUES ($1, $2, $3, $4)
    `, [productFormated, description, priceFormated, category])
}

async function getProducts() {
    return (await connection.query(`
        SELECT 
            products.id,
            products.name,
            products.price,
            products.description,
            categories.name AS category
        FROM products
        JOIN categories ON products.category_id = categories.id;
    `)).rows
}

async function queryProduct({productFormated}) {
    return (await connection.query(`
    SELECT * FROM products
    WHERE name = $1;
    `, [productFormated])).rows[0]
}

async function deleteProduct(id) {
    return connection.query(`
    DELETE FROM products 
    WHERE id = $1
    `, [id])
}

export {
    insertProduct, 
    getProducts, 
    queryProduct,
    deleteProduct
}