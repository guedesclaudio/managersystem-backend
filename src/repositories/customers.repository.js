import connection from "../database/database.js";

async function insertCustomer(customerData) {
    const { name, email, cpf, birthday, phone } = customerData;

    await connection.query(`
        INSERT INTO customers (
            name, email, cpf,
            birthday, phone, addressId
        ) VALUES (
            $1, $2, $3, $4, $5, $6
        );
    `, [
        name,
        email,
        cpf,
        birthday, 
        phone
    ]);

    return connection.query(`
        SELECT * FROM customers WHERE email = $1;
    `, [cpf]);
}

async function insertCity(cityName, stateId) {
    await connection.query(`
        INSERT INTO cities (name, "stateId") 
        VALUES ($1, $2);
    `, [cityName, stateId]);

    return connection.query(`
        SELECT * FROM cities WHERE name = $1;
    `, [cityName]);
}

async function insertDistrict(districtName, cityId) {
    await connection.query(`
        INSERT INTO districts (name, "cityId") 
        VALUES ($1, $2);
    `, [districtName, cityId]);

    return connection.query(`
        SELECT * FROM districts WHERE name = $1;
    `, [districtName]);
}

async function insertAddressCustomer({customerData, customerId, districtId}) {

    const { CEP, streetName, streetNumber } = customerData;

    return connection.query(`
        INSERT INTO addresses (
            "clientId",
            "streetName",
            "streetNumber",
            "districtId",
            "CEP"
        ) VALUES (
            $1, $2, $3, $4, $5
        );
    `, [
        customerId,
        streetName,
        streetNumber,
        districtId,
        CEP
    ]);
}

async function findCityByName(cityName) {
    return connection.query(`
        SELECT * FROM cities WHERE name = $1;
    `, [cityName]);
}

async function findDistrictByName(districtName) {
    return connection.query(`
        SELECT * FROM districts WHERE name = $1;
    `, [districtName]);
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
    insertAddressCustomer,
    deleteCustomer,
    insertCity,
    insertDistrict,
    findCityByName,
    findDistrictByName
};

export default customersRepository;