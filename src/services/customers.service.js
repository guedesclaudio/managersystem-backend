import customersRepository from "../repositories/customers.repository.js";

async function postCustomer(customerData) {
    customerData.name = customerData.name.toLowerCase;

    return customersRepository.insertCustomer(customerData);
}

async function getCustomers() {
    return customersRepository.findCustomers();
}

async function getCustomerByName(customerName) {
    const customer =  customersRepository.findCustomer(customerName);

    if (!customer) {
        throw notFoundError(); // criar esse erro
    }

    return customer;
}

async function removeCustomer(customerId) {
    return customersRepository.deleteCustomer();
}


const customersService = {
    postCustomer,
    getCustomers,
    getCustomerByName,
    removeCustomer
};

export default customersService;