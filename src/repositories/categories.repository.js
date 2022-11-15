import connection from "../database/database.js"

function insertCategory({categoryFormated}) {
    return connection.query(`
        INSERT INTO categories (name)
        VALUES ($1);
    `, [categoryFormated])
}

async function queryCategory({categoryFormated}) {
    return (await connection.query(`
        SELECT * FROM categories
        WHERE name = $1;
    `, [categoryFormated])).rows[0]
}

async function queryCategories() {
    return (await connection.query(`
    SELECT 
        COUNT (products.id) AS number_products,
        categories.name,
        categories.id
    FROM products
    RIGHT JOIN categories ON categories.id = products.category_id
    GROUP BY categories.name, categories.id;
    `)).rows
}

async function deleteCategory(id) {
    return connection.query(`
    DELETE FROM categories
    WHERE id = $1
    `, [id])
}

export {insertCategory, queryCategory, queryCategories, deleteCategory}