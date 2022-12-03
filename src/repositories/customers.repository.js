import connection from "../database/database.js";

async function insertCustomer(customerData) {
    const { name, email, cpf, birthday, phone, addressId } = customerData;

    return connection.query(`
        INSERT INTO customers (
            name, email, cpf,
            birthday, phone, addressId
        ) VALUES (
            $1, $2, $3, $4, $5, $6
        );
    `, [
        nameFormated,
        email,
        cpf,
        birthday, 
        phone,
        addressId
    ]);
}

async function findCustomers() {
    return connection.query(`
        SELECT * FROM customers;
    `);
}

async function findCustomer(customerName) {
    return connection.query(`
        SELECT * FROM customers
        WEHERE name = $1;
    `, [customerName]);
}

async function deleteCustomer(customerId) {
    return connection.query(`
        DELETE FROM customers
        WHERE id = $1;
    `, [customerId]);
}

const customersRepository = {
    findCustomers,
    findCustomer,
    insertCustomer,
    deleteCustomer
};

export default customersRepository;